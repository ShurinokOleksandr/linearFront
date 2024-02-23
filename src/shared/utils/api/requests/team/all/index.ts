import { getAccessToken, externalApi } from '@/shared/utils';

import { Team } from '../all/types';

export const requestAllTeam = async (): Promise<Team[]> => {
    const { token } = await getAccessToken();

    return externalApi
        .auth(`Bearer ${token}`)
        .get('team')
        .json((json) => json);
};
