import { UserType } from '@/shared/utils';
export type WorkSpace = {
	imageUrl: string | null;
	teams: WorkSpaceTeam[];
	companySize: number;
	users: UserType[];
	createdAt: string;
	updatedAt: string;
	role: string;
	name: string;
	url: string;
	id: string;
}

export type WorkSpaceTeam = {
	icon:  string | null;
	workSpaceId: string;
	customId: string;
	name: string;
	id: string;
}