import { describe, expect, test } from '@jest/globals';
import { mockFetch } from '@/utils/mock-fetch';

import loginStore  from './store';


describe('Testing login store', () => {
	test('Set username',() => {
		loginStore.setUsername('username');
		expect(loginStore.username).toBe('username');
	});
	test('Set password',() => {
		loginStore.setPassword('123');
		expect(loginStore.password).toBe('123');
	});
	test('Set error with short password',() => {
		loginStore.setPasswordValidationError('short password');
		expect(loginStore.passwordValidationError).toBe('short password');
	});
	test('Login',async () => {
		loginStore.setUsername('sa');
		window.fetch = mockFetch(JSON.stringify({ name:loginStore.username,id:9 }));
		loginStore.setPassword('111111');
		const result = await loginStore.submitLogin();
		expect(loginStore.password).toBe('111111');
		expect(loginStore.username).toBe('sa');
		expect(result).toEqual(JSON.stringify({ name:'sa',id:9 }));
	});
	it('Wrong password ', async () => {
		loginStore.setUsername('sa');
		window.fetch = mockFetch(JSON.stringify({ message:'Wrong password' }));
		loginStore.setPassword('111111111111');
		const result = await loginStore.submitLogin();
		expect(loginStore.password).toBe('111111111111');
		expect(loginStore.username).toBe('sa');
		expect(result).toEqual(JSON.stringify({ message:'Wrong password' }));
	});
	it('Not found user ', async () => {
		loginStore.setUsername('ssa');
		window.fetch = mockFetch(JSON.stringify({ message:'Not Found User' }));
		loginStore.setPassword('111111');
		const result = await loginStore.submitLogin();
		expect(loginStore.password).toBe('111111');
		expect(loginStore.username).toBe('ssa');
		expect(result).toEqual(JSON.stringify({ message:'Not Found User' }));
	});
	it('Not empty username ', async () => {
		loginStore.setUsername('');
		loginStore.setPassword('111111');
		await loginStore.submitLogin();
		expect(loginStore.password).toBe('111111');
		expect(loginStore.username).toBe('');
		expect(loginStore.usernameValidationError).toBe('Please enter an username for login.');
 	});
	it('Not empty password ', async () => {
		loginStore.setUsername('sa');
		loginStore.setPassword('');
		await loginStore.submitLogin();
		expect(loginStore.password).toBe('');
		expect(loginStore.username).toBe('sa');
		expect(loginStore.passwordValidationError).toBe('Length of password should be minimum 6 letters');
	});
});