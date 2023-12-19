import { externalApi } from '@/shared/utils/api/axiosInstance';

import { WorkSpace } from '../all/types';

export const requestAllWorkSpace =  (token?:string):Promise<WorkSpace[]> => {
	  return externalApi
		.auth(`Bearer ${token}`)
		.get('workspace')
		.json(json => json);
};