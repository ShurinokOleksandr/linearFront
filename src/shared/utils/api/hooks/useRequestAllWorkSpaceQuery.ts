import { requestAllWorkSpace } from '@/shared/utils';
import { useQuery } from '@tanstack/react-query';


export const useRequestAllWorkSpaceQuery = () => {

    return useQuery({
        queryFn:  requestAllWorkSpace ,
        queryKey: ['workspace'],
    });
};