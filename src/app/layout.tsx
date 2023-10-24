import StyledComponentsRegistry from '@/Provider/Provider';

export const metadata = {
	description: 'I have followed setup instructions carefully',
	title: 'My Mantine app',
};
const fet = async () => {
	const response = await fetch('http://localhost:4001/auth/login',{
		headers:{
			"Content-type":"application/json",
		},
		credentials:'include',
		body:JSON.stringify({
			username:'user',
			password:'123'
		})
	})
	const data = await response.json()
	return data
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
	const data = fet()
	return (
		<html lang="en">
			<head>
			</head>
			<body>
			{JSON.stringify(data)}
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}