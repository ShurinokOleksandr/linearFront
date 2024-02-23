import { ValidationLoginForm } from '@/app/login';
import { externalApi } from '@/shared/utils';

export const loginRequest = async (data: ValidationLoginForm) => {
    return externalApi
        .url('auth/login')
        .post({ username: data.username, password: data.password })
        .notFound((error) => {
            throw new Error(JSON.parse(error.message).message);
        })
        .forbidden((error) => {
            throw new Error(JSON.parse(error.message).message);
        })
        .res(async (response) => {
            const data = await response.json();
            localStorage.setItem('profile', JSON.stringify(data));
        });
};
