import StyledComponentsRegistry from '@/provider/Provider';
import { Inter } from 'next/font/google';

export const metadata = {
	description: 'I have followed setup instructions carefully',
	title: 'LinearClone',
};
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
 				<link href='https://static.linear.app/client/assets/favicon-321af485.svg' type='image/svg+xml' rel='icon'/>
			</head>
			<body className={inter.className}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}