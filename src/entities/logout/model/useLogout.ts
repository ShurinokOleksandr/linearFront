import { useQueryClient } from '@tanstack/react-query';
import { LoginStore } from '@/app/login/model/store';
import { useRouter } from 'next/navigation';
import wretch from 'wretch';

export const useLogout = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const logOut = () => {
        return wretch('/routes/logout')
            .get()
            .res(() => {
                LoginStore.setPassword('');
                LoginStore.setUsername('');
                router.push('/');
                queryClient.clear();
            });
    };
    return logOut;
};
