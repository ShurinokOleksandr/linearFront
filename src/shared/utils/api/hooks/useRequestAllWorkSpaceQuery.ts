import { requestAllWorkSpace } from '@/shared/utils';
import { useQuery } from '@tanstack/react-query';


export const useRequestAllWorkSpaceQuery = (access_token?:string) => {

    return useQuery({
        queryFn: () => requestAllWorkSpace(access_token),
        queryKey: ['workspace'],
    });
};