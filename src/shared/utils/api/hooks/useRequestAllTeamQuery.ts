import { requestAllTeam } from '@/shared/utils/api/requests/team/all';
import { useQueryClient, useQuery } from '@tanstack/react-query';


export const useRequestAllTeamQuery = (access_token?:string,refresh_token?:string) => {
	const queryClient = useQueryClient();
	
	return useQuery({
		queryFn: () => requestAllTeam(access_token, refresh_token,queryClient),
		queryKey: ['team']
	});
};
