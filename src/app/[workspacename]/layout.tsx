import React from 'react';





export default function Layout({ children }: { children: React.ReactNode, route: string }) {
 	return (
		<html lang='en'>
			<head>
				<link href='https://static.linear.app/client/assets/favicon-321af485.svg' type='image/svg+xml' rel='icon'/>
			</head>
			<body style={{ background:'linear-gradient(rgb(44, 45, 60) 0%, rgb(25, 26, 35) 50%)',overflow:'hidden',height:'100vh' }} >
				{children}
			</body>
		</html>
	);
}