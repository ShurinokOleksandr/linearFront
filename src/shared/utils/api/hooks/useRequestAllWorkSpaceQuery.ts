import { requestAllWorkSpace } from '@/shared/utils/api/requests/workspace/all';
import { useQuery } from '@tanstack/react-query';


export const useRequestAllWorkSpaceQuery = (access_token?:string,refresh_token?:string) => useQuery({
	queryFn:() => requestAllWorkSpace(access_token,refresh_token),
	queryKey:['workspace',refresh_token]
});