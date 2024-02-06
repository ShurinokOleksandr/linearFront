import { requestAllWorkSpace } from '@/shared/utils/api/requests/workspace/all';
import { useQueryClient, useQuery } from '@tanstack/react-query';


export const useRequestAllWorkSpaceQuery = (access_token?:string,refresh_token?:string) => {
    const queryClient = useQueryClient();
	
    return useQuery({
        queryFn: () => requestAllWorkSpace(access_token, refresh_token,queryClient),
        queryKey: ['workspace']
    });
};