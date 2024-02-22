import { refreshToken, externalApi } from '@/shared/utils';

import { WorkSpace } from '../all/types';

export const requestAllWorkSpace = (access_token?: string): Promise<WorkSpace[]> => {
    return externalApi
        .auth(`Bearer ${access_token}`)
        .get('workspace')
        .unauthorized(async () => refreshToken())
        .json((json) => json);
};
