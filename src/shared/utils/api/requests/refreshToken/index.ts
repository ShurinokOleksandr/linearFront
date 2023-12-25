'use server';
import { externalApi } from '@/shared/utils/api/wretchInstance';



export const refreshToken = async (refresh_token?:string) => {
	  externalApi
		.auth(`Bearer ${refresh_token}`)
		.get('auth/refresh');
};