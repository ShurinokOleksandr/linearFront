import { makeAutoObservable } from 'mobx';

class LoginStore {
	usernameValidationError = '';
	passwordValidationError= '';
	username = '';
	password = '';
	constructor() {
		makeAutoObservable(this);
	}
	submitLogin(){
		if(this.password.length >= 6 && this.username){
			this.setUsernameValidationError('');
			this.setPasswordValidationError('');
			console.log(1);
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
		this.passwordValidationError =error ;
	}
	
}
export default new LoginStore();