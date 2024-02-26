import { requestWorkspaceById } from '@/shared/utils';
import { useQuery } from '@tanstack/react-query';

export const useRequestWorkSpaceById = (id:string) => {

    return useQuery({
        queryFn:  () => requestWorkspaceById(id),
        queryKey: ['workspace',id],
    });
};