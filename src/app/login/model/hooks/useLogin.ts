import { zodResolver } from '@hookform/resolvers/zod';
import { externalApi } from '@/shared/utils';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import * as z from 'zod';
const schema = z.object({
    password: z
        .string()
        .min(6, { message: 'Length of password should be minimum 6 letter.' }),
    username: z
        .string()
        .min(1, { message: 'Please enter an username for login.' }),
});
type ValidationLoginForm = z.infer<typeof schema>;

export const useLogin = () => {
    const {
        formState: { errors },
        handleSubmit,
        register,
        setError,
    } = useForm<ValidationLoginForm>({
        resolver: zodResolver(schema),
    });
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const loginFn = async (data: ValidationLoginForm) => {
        setIsLoading(true);
        return await externalApi
            .url('auth/login')
            .options({
                next: {
                    revalidate: 0,
                },
            })
            .post({ username: data.username, password: data.password })
            .notFound((error) =>
                setError('username', {
                    message: JSON.parse(error.message).message,
                })
            )
            .forbidden((error) =>
                setError('password', {
                    message: JSON.parse(error.message).message,
                })
            )
            .res(async (response) => {
                const data = await response.json();
                localStorage.setItem('profile', JSON.stringify(data));
                router.refresh();
            })
            .catch(() =>
                setError('username', { message: 'Something got wrong' })
            )
            .finally(() => setIsLoading(false));
    };
    return [isLoading, errors, handleSubmit, register, loginFn];
};
