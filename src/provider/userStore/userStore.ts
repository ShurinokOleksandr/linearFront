import { makeAutoObservable } from 'mobx';

class UserStore {
    username = '';
    id = 0;
    constructor( ) {
        makeAutoObservable(this);
 	}
    setUser({ name,id }:{name:string,id:number}){
        this.id = id;
        this.username = name;
    }
	
}
export const userStore = new UserStore();