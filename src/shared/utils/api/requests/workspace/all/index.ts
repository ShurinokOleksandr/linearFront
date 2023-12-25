import { externalApi } from '@/shared/utils/api/wretchInstance';

import { WorkSpace } from '../all/types';

export const requestAllWorkSpace = (access_token?:string):Promise<WorkSpace[]> => {
  	return externalApi
	    .auth(`Bearer ${access_token}`)
		.get('workspace')
	    // .unauthorized(() => refreshToken(refresh_token))
		.json(json => json);
};