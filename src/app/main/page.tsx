'use client';
import { useRouter } from 'next/navigation';


export default function MainPage() {
	const router = useRouter();
	const logOut = async () => {
		const res = await fetch('/main/logout',{
			method:'POST'
		});
		if(res.ok){
			router.push(('/login'));
		}
		
	};
	return (
		 
		<main>
			<div>main</div>
			<button onClick={logOut}>log out</button>
		</main>
		 
	);
}
