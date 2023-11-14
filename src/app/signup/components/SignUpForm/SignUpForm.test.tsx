import { fireEvent, cleanup, render, screen } from '@testing-library/react';
import { SignUpForm } from '@/app/signup/components/SignUpForm/SignUpForm';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/theme/colors';
import { afterEach } from '@jest/globals';
import '@testing-library/jest-dom';

afterEach(cleanup);

jest.mock('next/navigation', () => ({
	useRouter() {
		return {
			prefetch: () => null
		};
	}
}));


describe('Testing SignUpForm',() => {
	it('should render', () => {
		render(<ThemeProvider theme={darkTheme} ><SignUpForm /></ThemeProvider> );
		const inputUsername = screen.getByPlaceholderText('Enter your Username...');
		const inputPassword = screen.getByPlaceholderText('Enter your Password...');
		const btn = screen.getByRole('button');
		expect(inputPassword).toBeInTheDocument();
		expect(inputUsername).toBeInTheDocument();
		expect(btn).toBeInTheDocument();
		expect(screen.getByTestId('titleForm').textContent).toBe('Sign up to Linear');
	});
	it('should error empty', () => {
		render(<ThemeProvider theme={darkTheme} ><SignUpForm /></ThemeProvider> );
		const btn = screen.getByRole('button');
		fireEvent.click(btn);
		const errorTextUsername = screen.getByTestId('usernameError');
		const errorTextPassword = screen.getByTestId('passwordError');
		expect(errorTextPassword).toBeInTheDocument();
		expect(errorTextUsername).toBeInTheDocument();
	});
	it('should error disappear when start typing inputs', () => {
		render(<ThemeProvider theme={darkTheme} ><SignUpForm /></ThemeProvider> );
		const btn = screen.getByRole('button');
		fireEvent.click(btn);
		const errorTextUsername = screen.queryByTestId('usernameError');
		const errorTextPassword = screen.queryByTestId('passwordError');
 	
		const inputUsername = screen.getByPlaceholderText('Enter your Username...');
		expect(errorTextPassword).toBeInTheDocument();
		expect(errorTextUsername).toBeInTheDocument();
		fireEvent.input(inputUsername,{
			target:{ value:'sa' }
		});
		expect(screen.queryByTestId('usernameError')).toBeNull();
		expect(screen.queryByTestId('passwordError')).toBeInTheDocument();
	});
	it('should repeat error disappear when start typing inputs', () => {
		render(<ThemeProvider theme={darkTheme} ><SignUpForm /></ThemeProvider> );
		const btn = screen.getByRole('button');
		fireEvent.click(btn);
		const passwordRepeatError = screen.queryByTestId('passwordRepeatError');
		const passwordError = screen.queryByTestId('passwordError');
		const inputPassword = screen.getByPlaceholderText('Enter your Password...');
		const inputPasswordRepeat = screen.getByPlaceholderText('Repeat your Password...');
		expect(passwordError).toBeInTheDocument();
		expect(passwordRepeatError).toBeNull();
		fireEvent.input(inputPassword,{
			target:{ value:'111111' }
		});
		fireEvent.input(inputPasswordRepeat,{
			target:{ value:'1111111' }
		});
		fireEvent.click(btn);
		expect(screen.queryByTestId('passwordRepeatError')).toBeInTheDocument();
		fireEvent.input(inputPasswordRepeat,{
			target:{ value:'111111' }
		});
		fireEvent.click(btn);
	});
});