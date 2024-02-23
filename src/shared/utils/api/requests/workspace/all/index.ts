import { getAccessToken, externalApi } from '@/shared/utils';

import { WorkSpace } from '../all/types';

export const requestAllWorkSpace = async (): Promise<WorkSpace[]> => {
    const { token } = await getAccessToken();

    return externalApi
        .auth(`Bearer ${token}`)
        .get('workspace')
        .json((json) => json);
};
