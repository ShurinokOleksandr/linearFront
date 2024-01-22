import { refreshToken } from '@/shared/utils/api/requests/refreshToken';
import { externalApi } from '@/shared/utils';

import { Team } from '../all/types';

export const requestAllTeam = (access_token?:string,refresh_token?:string,queryClient?:any):Promise<Team[]> => {
	
	return externalApi
		.auth(`Bearer ${access_token}`)
		.get('team')
		.unauthorized(async () => {
			queryClient.clear();
			return refreshToken(refresh_token);
		})
		.json(json => json);
};