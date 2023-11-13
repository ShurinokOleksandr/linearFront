import { describe, expect, test } from '@jest/globals';
import { mockFetch } from '@/utils/mock-fetch';
import 'isomorphic-fetch';

import { signUpStore } from './store';


describe('Testing sign up store',() => {
	it('Set username', () => {
		signUpStore.setUsername('sar');
		expect(signUpStore.username).toBe('sar');
	});
	it('Set password', () => {
		signUpStore.setPassword('sar');
		expect(signUpStore.password).toBe('sar');
	});
	it('Set repeat password', () => {
		signUpStore.setRepeatPassword('sar');
		expect(signUpStore.repeatPassword).toBe('sar');
	});
	it('Expect error not equals passwords', () => {
		signUpStore.setPassword('sar1');
		signUpStore.setRepeatPassword('sar');
		expect(signUpStore.repeatPasswordValidationError).toBe('Passwords are not equals');
	});
	test('Sign Up',async () => {
		signUpStore.setUsername('tt');
		window.fetch = mockFetch(JSON.stringify({ name:signUpStore.username,id:111 }));
		signUpStore.setPassword('111111');
		signUpStore.setRepeatPassword('111111');
		const result = await signUpStore.submitSignUp();
		expect(signUpStore.repeatPassword).toBe('111111');
		expect(signUpStore.password).toBe('111111');
		expect(signUpStore.username).toBe('tt');
		expect(result).toEqual(JSON.stringify({ name:'tt',id:111 }));
	});
	it('Expect error user exist',async () => {
		signUpStore.setUsername('sa');
		signUpStore.setPassword('111111');
		signUpStore.setRepeatPassword('111111');
		await signUpStore.submitSignUp();
		expect(signUpStore.password).toBe('111111');
		expect(signUpStore.repeatPassword).toBe('111111');
		expect(signUpStore.username).toBe('sa');
		expect(signUpStore.usernameValidationError).toBe('User with this name already exist');
	});
	it('Testing create user',async () => {
		signUpStore.setUsername('testUsasdsadasasddasdae1r');
		signUpStore.setPassword('111111');
		signUpStore.setRepeatPassword('111111');
		const result = await signUpStore.submitSignUp();
		console.log(result);
		expect(signUpStore.password).toBe('111111');
		expect(signUpStore.repeatPassword).toBe('111111');
		expect(signUpStore.username).toBe('testUsasdsadasasddasdae1r');
		expect(result).toMatchObject({ name:signUpStore.username });
	});
	it('Testing non empty username',async () => {
		signUpStore.setUsername('');
		signUpStore.setPassword('111111');
		signUpStore.setRepeatPassword('111111');
		await signUpStore.submitSignUp();
		expect(signUpStore.password).toBe('111111');
		expect(signUpStore.repeatPassword).toBe('111111');
		expect(signUpStore.username).toBe('');
		expect(signUpStore.usernameValidationError).toBe('Please enter an username for login.');
	});
	it('Testing equals passwords',async () => {
		signUpStore.setUsername('sa');
		signUpStore.setPassword('111111');
		signUpStore.setRepeatPassword('1111111');
		await signUpStore.submitSignUp();
		expect(signUpStore.repeatPassword).toBe('1111111');
		expect(signUpStore.password).toBe('111111');
		expect(signUpStore.username).toBe('sa');
		expect(signUpStore.repeatPasswordValidationError).toBe('Passwords are not equals');
	});
});