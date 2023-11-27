import { WorkSpaceTypeArray } from '@/app/actions/types';
import { cookies } from 'next/headers';



export  async function getWorkSpaces():Promise<WorkSpaceTypeArray> {
	const token = cookies().get('access_token');
 	const response = await fetch('http://localhost:4001/workspace',{
		headers:{
			'Authorization':`Bearer ${token?.value}`,
		},
		credentials:'include'
	});
	return response.json();
}