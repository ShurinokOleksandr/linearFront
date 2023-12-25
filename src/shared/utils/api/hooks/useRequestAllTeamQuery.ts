import { requestAllTeam } from '@/shared/utils/api/requests/team/all';
import { useQuery } from '@tanstack/react-query';


export const useRequestAllTeamQuery = (access_token?:string,refresh_token?:string) => useQuery({
	queryFn:() => requestAllTeam(access_token),
	queryKey:['team',refresh_token]
});