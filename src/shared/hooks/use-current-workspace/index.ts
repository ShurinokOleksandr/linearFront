import { UseQueryResult } from '@tanstack/react-query';
import { WorkSpace } from '@/shared/utils';

export const useCurrentWorkspace = (allWorkspaces: UseQueryResult<WorkSpace[], Error>,url: string) => {

    if (allWorkspaces.data && allWorkspaces.data.length){
        return allWorkspaces.data.find(item => item.url === url);
    }

};