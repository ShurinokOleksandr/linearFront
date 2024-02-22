'use client';
import { observer } from 'mobx-react-lite';
import { Button } from '@/shared/ui';
import React from 'react';

import { useLogout } from '../model/useLogout';

export const Logout = observer(() => {
    const logOut = useLogout();
    return (
        <Button variant='primary' onClick={logOut}>
            Log out
        </Button>
    );
});
