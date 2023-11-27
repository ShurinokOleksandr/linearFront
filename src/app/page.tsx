import { getWorkSpaces } from '@/app/actions/getWorkSpaces';
import { LogOutExp } from '@/entities/logoutExp/LogOutExp';




export default async function Home() {
 	 
	   const workSpaces = await getWorkSpaces();
	   
	return (
		<main>
			<LogOutExp workSpaces={workSpaces}  />
		</main>
	);
}
