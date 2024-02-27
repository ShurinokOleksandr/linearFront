import { useRequestAllWorkSpaceQuery } from '@/shared/utils';
import { usePathname } from 'next/navigation';

export const useCurrentWorkspace = ( ) => {
    const path = usePathname();
    const all_Workspaces = useRequestAllWorkSpaceQuery();
    
    const current_Workspace_Url = path.split('/')[1];

    if(!all_Workspaces.data) return null;

    return all_Workspaces?.data.find(item => item.url === current_Workspace_Url);
};