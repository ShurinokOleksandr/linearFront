import { getAccessToken, externalApi } from '@/shared/utils';

import { ValidationCreateWorkSpaceFormType } from './types';

export const requestCreateWorkspace =  async (
    data: ValidationCreateWorkSpaceFormType
) => {
    const { token } = await getAccessToken();
    return externalApi
        .auth(   `Bearer ${token}`)
        .url('workspace/create')
        .post(data)
        .forbidden((error) => {
            throw new Error(JSON.parse(error.message).message);
        })
        .badRequest((error) => {
            throw new Error(JSON.parse(error.message).message);
        })
        .res(async (res) => {
            const data = await res.json();
            return data;
        });
};
