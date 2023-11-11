import { userStoreType, userStore } from '@/provider/userStore';
import { makeAutoObservable } from 'mobx';

class SignUpStore {
	repeatPasswordValidationError = '';
	usernameValidationError = '';
	passwordValidationError= '';
	repeatPassword = '';
	username = '';
	password = '';
	userStore  ;
	constructor(userStore: userStoreType) {
		makeAutoObservable(this);
		this.userStore = userStore;
	}
	async submitSignUp(){
		if(this.password.length >= 6 && this.username && this.password === this.repeatPassword){
			this.setUsernameValidationError('');
			this.setPasswordValidationError('');
			const result = await fetch('http://localhost:4001/auth/create',{
				body:JSON.stringify({
					repeatPassword:this.repeatPassword,
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
			if(result.status === 405){
				return this.setUsernameValidationError(data.message);
			}
			
		}
		if(!this.username.length) {
			this.setUsernameValidationError('Please enter an username for login.');
		}
		if(this.password.length < 6 ) {
			this.setPasswordValidationError('Length of password should be minimum 6 letters');
		}
		if( this.password !== this.repeatPassword) {
			this.setRepeatPasswordValidationError('Passwords are not equals');
		}
	}
	setPassword(password:string){
		this.password = password.trim();
		if(this.password.length >= 6){
			this.setPasswordValidationError('');
		}
		if(this.password.length === this.repeatPassword.length && this.password === this.repeatPassword){
			this.setRepeatPasswordValidationError('');
		}
		if(this.password !== this.repeatPassword) {
			this.setRepeatPasswordValidationError('Passwords are not equals');
		}
	}
	setRepeatPassword(repeat:string){
		this.repeatPassword = repeat.trim();
		
		if(this.password.length === this.repeatPassword.length && this.password === this.repeatPassword){
			this.setRepeatPasswordValidationError('');
		}
		
		if(this.password !== this.repeatPassword) {
			this.setRepeatPasswordValidationError('Passwords are not equals');
		}
	}
	setUsername(username:string) {
		this.username = username.trim();
		this.setUsernameValidationError('');
	}
	setRepeatPasswordValidationError(error:string){
		this.repeatPasswordValidationError = error ;
	}
	setUsernameValidationError(error:string){
		this.usernameValidationError = error ;
	}
	setPasswordValidationError(error:string){
		this.passwordValidationError = error ;
	}
	
}
export const signUpStore = new SignUpStore(userStore);