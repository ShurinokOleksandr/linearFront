'use client';

import { useCurrentWorkspace, useStringToColor } from '@/shared/hooks';
import { useSessionState } from '@/provider/ContextAuthProvider';
import { nameToInitials } from '@/shared/utils/helpers';
import { Avatar, Flex, Box } from '@/shared/ui';
import { padding, gap } from '@/shared/theme';
import styled from 'styled-components';
import Image from 'next/image';

export const UserPanel = () => {
    const session = useSessionState();
    const currentWorkSpace = useCurrentWorkspace();

    const initialsWorkspace = nameToInitials(currentWorkSpace?.name);

    const color = useStringToColor(currentWorkSpace?.name);

    return (
        <Panel>
            <Workspace>
                {
                    currentWorkSpace?.imageUrl ?
                        <WorkspaceAvatar>
                            <Image src={currentWorkSpace.imageUrl} alt='Avatar' />
                        </WorkspaceAvatar>
                        :  <WorkspaceAvatar
                            backgroundColor={color}
                        >
                            {initialsWorkspace}
                        </WorkspaceAvatar>
                }
                <WorkspaceName>
                    {currentWorkSpace?.name}
                </WorkspaceName>
            </Workspace>
            <AvatarWrapper>
                <Avatar
                    src={session.user?.userImg}
                    alt='User avatar'
                />
            </AvatarWrapper>
        </Panel>
    );
};
const Panel = styled(Flex)`
    gap:${gap.md};
    align-items: center;
    justify-content: space-between;
`;
const Workspace = styled(Flex)`
    gap:${gap.md};
    padding: ${padding.sm};
    align-items: center;
    &:hover{
        background: ${({ theme }) => theme.surface7};
        border-radius: ${({ theme }) => theme.border.small};
        cursor: pointer;
    }
`;
const AvatarWrapper = styled(Flex)`
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    &:hover{
        background: ${({ theme }) => theme.surface7};
        border-radius: ${({ theme }) => theme.border.small};
        cursor: pointer;
    }
`;
const WorkspaceName = styled(Box)`
    font-size: ${({ theme }) => theme.fontSizes.smallPlus};
    font-weight: 500;
    text-align: left;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const WorkspaceAvatar = styled(Box)`
    width: 18px;
    height: 18px;
    border-radius: ${({ theme }) => theme.border.small};
    font-size: ${({ theme }) => theme.fontSizes.micro};
    display: flex;
    justify-content: center;
    align-items: center;
`;