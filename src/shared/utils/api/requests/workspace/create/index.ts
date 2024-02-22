import wretch from 'wretch';

import { ValidationCreateWorkSpaceFormType } from './types';

export const requestCreateWorkspace = async (
    data: ValidationCreateWorkSpaceFormType
) => {
    return wretch('/routes/create-workspace')
        .post(data)
        .forbidden((error) => {
            throw new Error(JSON.parse(error.message).data.message);
        })
        .badRequest((error) => {
            throw new Error(JSON.parse(error.message).data.message);
        })
        .res(async (res) => {
            const data = await res.json();
            return data;
        });
};
