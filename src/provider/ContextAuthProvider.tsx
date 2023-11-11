'use client';
import { createContext, useContext, useState } from 'react';

export interface ContextAuthProviderProps {
	children:React.ReactNode
	userData:any
}


const Context = createContext({});

export const ContextAuthProvider = ({ children,userData }:ContextAuthProviderProps) => {
	const [user,setUser] = useState(userData);
	return <Context.Provider value={{ setUser,user }}>{children}</Context.Provider>;
};
export const useContextAuthState = () => useContext(Context);