import { getAccessToken, externalApi } from '@/shared/utils';

import { WorkSpace } from '../all/types';

export const requestWorkspaceById = async (id:string): Promise<WorkSpace> => {
    const { token } = await getAccessToken();

    return externalApi
        .url('workspace')
        .auth(`Bearer ${token}`)
        .post({ id })
        .json((json) => json);
};
