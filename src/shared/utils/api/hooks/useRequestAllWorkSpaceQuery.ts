import { requestAllWorkSpace } from '@/shared/utils/api/requests/workspace/all';
import { useQuery } from '@tanstack/react-query';


export const useRequestAllWorkSpaceQuery = (token?:string) => useQuery({
	queryFn:() => requestAllWorkSpace(token),
	queryKey:['workspace',token]
});