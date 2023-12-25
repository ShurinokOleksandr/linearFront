import { externalApi } from '@/shared/utils/api/wretchInstance';
import { types } from 'mobx-state-tree';

export const SignUpStoreType = types
	.model('SignUp Store',{
		repeatPasswordValidationError :types.string,
		usernameValidationError:types.string,
		passwordValidationError:types.string,
		repeatPassword:types.string,
		password :types.string,
		username:types.string,
		loading: false,
	})
	.actions(self => ({
		async submitSignUp(){
			if(self.password.length >= 6 && self.username && self.password === self.repeatPassword){
				this.setLoading(true);
				this.setUsernameValidationError('');
				this.setPasswordValidationError('');
				return externalApi
					.url('auth/create')
					.post({ repeatPassword:self.repeatPassword, username: self.username, password: self.password })
					.error(405,error => this.setUsernameValidationError(JSON.parse(error.message).message))
					.forbidden(error => this.setPasswordValidationError(JSON.parse(error.message).message))
					.res(r => r.json())
					.catch(() => this.setUsernameValidationError('Something got wrong'))
					.finally(() => this.setLoading(false));
				
			}
			if(!self.username.length) {
				this.setUsernameValidationError('Please enter an username for login.');
			}
			if(self.password.length < 6 ) {
				this.setPasswordValidationError('Length of password should be minimum 6 letters');
			}
			if( self.password !== self.repeatPassword) {
				this.setRepeatPasswordValidationError('Passwords are not equals');
			}
		},
		setPassword(password:string){
			self.password = password.trim();
			if(self.password.length >= 6){
				this.setPasswordValidationError('');
			}
			if(self.password.length === self.repeatPassword.length && self.password === self.repeatPassword){
				this.setRepeatPasswordValidationError('');
			}
		// if(this.password !== this.repeatPassword) {
		// 	this.setRepeatPasswordValidationError('Passwords are not equals');
		// }
		},
		setRepeatPassword(repeat:string){
			self.repeatPassword = repeat.trim();

			if(self.password.length === self.repeatPassword.length && self.password === self.repeatPassword){
				this.setRepeatPasswordValidationError('');
			}

			if(self.password !== self.repeatPassword) {
				this.setRepeatPasswordValidationError('Passwords are not equals');
			}
		},
		setUsername(username:string) {
			self.username = username.trim();
			this.setUsernameValidationError('');
		},
		setRepeatPasswordValidationError(error:string){
			self.repeatPasswordValidationError = error ;
		},
		setUsernameValidationError(error:string){
			self.usernameValidationError = error ;
		},
		setPasswordValidationError(error:string){
			self.passwordValidationError = error ;
		},
		setLoading(state:boolean){
			self.loading = state;
		}
	}));
export const SignUpStore = SignUpStoreType.create({
	repeatPasswordValidationError :'',
	usernameValidationError :'',
	passwordValidationError:'',
	repeatPassword :'',
	loading :false,
	username : '',
	password : '',
});
// class SignUpStore {
// 	repeatPasswordValidationError = '';
// 	usernameValidationError = '';
// 	passwordValidationError= '';
// 	repeatPassword = '';
// 	loading = false;
// 	username = '';
// 	password = '';
// 	userStore  ;
// 	constructor(userStore: userStoreType) {
// 		makeAutoObservable(this);
// 		this.userStore = userStore;
// 	}
// 	async submitSignUp(){
// 		if(this.password.length >= 6 && this.username && this.password === this.repeatPassword){
// 			runInAction(() => {
// 				this.loading = true;
// 			});
// 			this.setUsernameValidationError('');
// 			this.setPasswordValidationError('');
// 			try {
// 				const result = await fetch('http://localhost:4001/auth/create',{
// 					body:JSON.stringify({
// 						repeatPassword:this.repeatPassword,
// 						username:this.username,
// 						password:this.password
// 					}),
// 					headers:{
// 						'Content-type': 'application/json',
// 					},
// 					credentials: 'include',
// 					method:'POST'
// 				});
// 				const data = await result.json();
// 				if(result.ok){
// 					this.userStore.setUser(data);
// 					return data;
// 				}
// 				if(result.status === 405){
// 					return this.setUsernameValidationError(data.message);
// 				}
// 			}catch (e) {
// 				if (e instanceof Error){
// 					console.log(e);
// 					return this.setUsernameValidationError('Something got wrong');
// 				}
// 			}finally {
// 				runInAction(() => {
// 					this.loading = false;
// 				});
// 			}
// 		}
// 		if(!this.username.length) {
// 			this.setUsernameValidationError('Please enter an username for login.');
// 		}
// 		if(this.password.length < 6 ) {
// 			this.setPasswordValidationError('Length of password should be minimum 6 letters');
// 		}
// 		if( this.password !== this.repeatPassword) {
// 			this.setRepeatPasswordValidationError('Passwords are not equals');
// 		}
// 	}
// 	setPassword(password:string){
// 		this.password = password.trim();
// 		if(this.password.length >= 6){
// 			this.setPasswordValidationError('');
// 		}
// 		if(this.password.length === this.repeatPassword.length && this.password === this.repeatPassword){
// 			this.setRepeatPasswordValidationError('');
// 		}
// 		// if(this.password !== this.repeatPassword) {
// 		// 	this.setRepeatPasswordValidationError('Passwords are not equals');
// 		// }
// 	}
// 	setRepeatPassword(repeat:string){
// 		this.repeatPassword = repeat.trim();
//
// 		if(this.password.length === this.repeatPassword.length && this.password === this.repeatPassword){
// 			this.setRepeatPasswordValidationError('');
// 		}
//
// 		if(this.password !== this.repeatPassword) {
// 			this.setRepeatPasswordValidationError('Passwords are not equals');
// 		}
// 	}
// 	setUsername(username:string) {
// 		this.username = username.trim();
// 		this.setUsernameValidationError('');
// 	}
// 	setRepeatPasswordValidationError(error:string){
// 		this.repeatPasswordValidationError = error ;
// 	}
// 	setUsernameValidationError(error:string){
// 		this.usernameValidationError = error ;
// 	}
// 	setPasswordValidationError(error:string){
// 		this.passwordValidationError = error ;
// 	}
//
// }
// export const signUpStore = new SignUpStore(userStore);