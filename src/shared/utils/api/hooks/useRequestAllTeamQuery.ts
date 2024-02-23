import { useQuery } from '@tanstack/react-query';
import { requestAllTeam } from '@/shared/utils';


export const useRequestAllTeamQuery = () => {
    return useQuery({
        queryFn: () => requestAllTeam(),
        queryKey: ['team']
    });
};
