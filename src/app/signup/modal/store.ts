import { makeAutoObservable } from 'mobx';

class SignUpStore {
	repeatPasswordValidationError = '';
	usernameValidationError = '';
	passwordValidationError= '';
	repeatPassword = '';
	username = '';
	password = '';
	constructor() {
		makeAutoObservable(this);
	}
	submitSignUp(){
		if(this.password.length >= 6 && this.username && this.password === this.repeatPassword){
			this.setUsernameValidationError('');
			this.setPasswordValidationError('');
			console.log(1);
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
export const signUpStore = new SignUpStore();