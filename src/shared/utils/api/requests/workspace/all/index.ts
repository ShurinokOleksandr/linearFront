import { refreshToken } from '@/shared/utils/api/requests/refreshToken';
import { externalApi } from '@/shared/utils/api/wretchInstance';

import { WorkSpace } from '../all/types';

export const requestAllWorkSpace = (access_token?:string,refresh_token?:string,queryClient?:any):Promise<WorkSpace[]> => {
  	return externalApi
	    .auth(`Bearer ${access_token}`)
        .get('workspace')
	    .unauthorized(async () => {
		    queryClient?.clear();
		    return refreshToken(refresh_token);
	    })
        .json(json => json);
};