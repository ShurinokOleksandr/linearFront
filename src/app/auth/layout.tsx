import StyledComponentsRegistry from '@/Provider/Provider';

export const metadata = {
	description: 'I have followed setup instructions carefully',
	title: 'My Mantine app',
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
			</head>
			<body>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}