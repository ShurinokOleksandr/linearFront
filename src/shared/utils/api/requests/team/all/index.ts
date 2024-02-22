import { externalApi } from '@/shared/utils';
import wretch from 'wretch';

import { Team } from '../all/types';

export const requestAllTeam = (
    access_token?: string,
): Promise<Team[]> => {
    return externalApi
        .auth(`Bearer ${access_token}`)
        .get('team')
        .unauthorized(() => wretch().get('/routes/refresh-token'))
        .json((json) => json);
};
