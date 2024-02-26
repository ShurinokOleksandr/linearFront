'use client';

import { useCurrentWorkspace, useStringToColor } from '@/shared/hooks';
import { useRequestAllWorkSpaceQuery } from '@/shared/utils';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { Loading } from '@/shared/ui';

export const UserPanel = () => {
    const path = usePathname();
    const all_Workspaces = useRequestAllWorkSpaceQuery();

    const current_Workspace_Url = path.split('/')[1];

    const currentWorkSpace = useCurrentWorkspace(all_Workspaces,current_Workspace_Url);

    const color = useStringToColor(currentWorkSpace?.name);
    if(all_Workspaces.isPending){
        return <Loading/>;
    }
    if(all_Workspaces.isError){
        return <div>{all_Workspaces.error.message}</div>;
    }
    return (
        <Panel>
            <div style={{ background:color }}>{currentWorkSpace?.name}</div>
        </Panel>
    );
};
const Panel = styled.div``;
