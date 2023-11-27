export type WorkSpaceTypeArray = WorkSpaceType[]
export type WorkSpaceType = {
	sizeOfCompany: number;
	roleCompany: string;
	createdAt: string;
	updatedAt: string;
	user: UserType[];
	imageUrl: string;
	name: string;
	url: string;
	id: string;
};
export type  UserType = {
	username: string;
	id: string;
}
