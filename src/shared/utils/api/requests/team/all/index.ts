import { externalApi } from '@/shared/utils';

import { Team } from '../all/types';

export const requestAllTeam = (access_token?:string):Promise<Team[]> => {
	return externalApi
		.auth(`Bearer ${access_token}`)
		.get('team')
		// .unauthorized(async () => await refreshToken(refresh_token))
		.json(json => json);
};