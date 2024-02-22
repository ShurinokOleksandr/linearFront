'use client';

import { useSessionState } from '@/provider/ContextAuthProvider';
import styled from 'styled-components';

export const UserPanel = () => {
    const session = useSessionState();

    return (
        <Panel>
            Panel
            <div>name: {session.user?.username}</div>
        </Panel>
    );
};
const Panel = styled.div``;
