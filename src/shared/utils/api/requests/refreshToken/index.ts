import { externalApi } from '@/shared/utils';

export const refreshToken = (refresh_token?: string) => {
    return externalApi.auth(`Bearer ${refresh_token}`).get('auth/refresh');
};
