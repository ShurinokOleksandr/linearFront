import { UserType } from '@/shared/utils';

export const useSession = ():UserType | null => {
	
	const profileData = localStorage.getItem('profile');
	if (profileData) {
		return JSON.parse(profileData);
	}else{
		return null;
	}
};
