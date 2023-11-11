import { userStore } from '@/provider/userStore/userStore';
import { userStoreType } from '@/provider/userStore';
import { makeAutoObservable } from 'mobx';

class LoginStore {
	usernameValidationError = '';
	passwordValidationError= '';
	username = '';
	password = '';
	userStore  ;
	constructor(userStore: userStoreType) {
		makeAutoObservable(this);
		this.userStore = userStore;
	}
	async  submitLogin(){
		if(this.password.length >= 6 && this.username){
			this.setUsernameValidationError('');
			this.setPasswordValidationError('');
			// try {
			// 	const result = await api.post('/auth/login',{
			// 		username:this.username,
			// 		password:this.password
			// 	});
			// 	this.userStore.setUser(result.data);
			// 	console.log(result.data);
			// }catch (e) {
 			// 	if (axios.isAxiosError(e)){
			// 		 if(e?.response?.status === 404){
			// 			 return this.setUsernameValidationError(e?.response?.data.message);
 			// 		 }
			// 	    if(e?.response?.status === 403){
			// 		    return this.setPasswordValidationError(e?.response?.data.message);
			// 	    }
			//
			// 	}
			//
			// }
			try {
				const result =  await fetch('http://localhost:4001/auth/login',{
					body:JSON.stringify({
						username:this.username,
						password:this.password
					}),
					headers:{
						'Content-type': 'application/json',
					},
					credentials: 'include',
					method:'POST'
				});
				const data = await result.json();
				if(result.ok){
					this.userStore.setUser(data);
					return result;
				}
				if(result.status === 404){
					return this.setUsernameValidationError(data.message);
				}
				if(result.status === 403){
					return this.setPasswordValidationError(data.message);
				}
				
			}catch (e) {
				if (e instanceof Error){
					console.log(e);
				}
				
			}
		}
		if(!this.username.length) {
			this.setUsernameValidationError('Please enter an username for login.');
		}
		if(this.password.length < 6) {
			this.setPasswordValidationError('Length of password should be minimum 6 letters');
		}
	}
	setPassword(password:string){
		this.password = password;
		if(this.password.length >= 6){
 			this.setPasswordValidationError('');
		}
	}
	setUsername(username:string) {
		this.username = username;
		this.setUsernameValidationError('');
	}
	setUsernameValidationError(error:string){
		this.usernameValidationError = error ;
	}
	setPasswordValidationError(error:string){
		this.passwordValidationError = error ;
	}
	
}
export default new LoginStore(userStore);