import { signUpValidationType } from '@/app/signup/types';
import { externalApi } from '@/shared/utils';

export const signupRequest = async (data: signUpValidationType) => {
    return await externalApi
        .url('auth/create')
        .post({
            repeatPassword: data.repeatPassword,
            username: data.username,
            password: data.password,
        })
        .error(405, (error) => {
            throw new Error(JSON.parse(error.message).message);
        })
        .forbidden((error) => {
            throw new Error(JSON.parse(error.message).message);
        })
        .res((r) => r.json());
};
