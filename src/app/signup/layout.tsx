import StyledComponentsRegistry from '@/provider/Provider';


export default function AuthLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
			</head>
			<body style={{ background:'linear-gradient(rgb(44, 45, 60) 0%, rgb(25, 26, 35) 50%)',overflow:'hidden',height:'100vh' }}>
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}