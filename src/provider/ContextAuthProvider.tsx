'use client';
import type { JWTPayload } from 'jose';

import { createContext, useContext, useEffect, useState } from 'react';
import { UserType } from '@/shared/utils';
import * as jose from 'jose';

export interface SessionProviderProps {
	refresh_token: undefined | string;
	children: React.ReactNode;
}
export type DecodeJwtType = {
	user?: Omit<UserType, 'message'> & JWTPayload;
};
const Context = createContext({});

export const SessionProvider = ({ refresh_token, children }: SessionProviderProps) => {
    const [user, setUser] = useState<DecodeJwtType | null>(null);
    useEffect(() => {
        if (refresh_token) {
            const data = jose.decodeJwt(refresh_token) ;
            setUser(data as DecodeJwtType);
        }
    }, [refresh_token]);
	
    return <Context.Provider value={{ setUser, user }}>{children}</Context.Provider>;
	
};

export const useSessionState = () :DecodeJwtType => useContext(Context);
