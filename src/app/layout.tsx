import StyledComponentsRegistry from '@/provider/StyledProvider';
import { ClientLayout } from '@/provider/ClientLayout';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import React from 'react';


export const metadata = {
	description: 'I have followed setup instructions carefully',
	title: 'LinearClone',
};
const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }: { children: React.ReactNode, route: string }) {
	const token = cookies().get('access_token')?.value;
	
	return (
		<html lang='en'>
			<head>
				<link href='https://static.linear.app/client/assets/favicon-321af485.svg' type='image/svg+xml' rel='icon'/>
			</head>
			<body style={{ background:'linear-gradient(rgb(44, 45, 60) 0%, rgb(25, 26, 35) 50%)',overflow:'hidden',height:'100vh' }} className={inter.className}>
				<StyledComponentsRegistry>
					<ClientLayout token={token} >{children}</ClientLayout>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}