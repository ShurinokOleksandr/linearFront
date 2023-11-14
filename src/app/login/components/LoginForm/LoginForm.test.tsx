import { fireEvent, cleanup, render, screen } from '@testing-library/react';
import { LoginForm } from '@/app/login/components/LoginForm/LoginForm';
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

describe('Testing login form component', () => {
	it('should render', () => {
		render(<ThemeProvider theme={darkTheme} ><LoginForm /></ThemeProvider> );
		const inputUsername = screen.getByPlaceholderText('Enter your Name...');
		const inputPassword = screen.getByPlaceholderText('Enter your Password...');
		const btn = screen.getByRole('button');
 		expect(inputPassword).toBeInTheDocument();
		expect(inputUsername).toBeInTheDocument();
		expect(btn).toBeInTheDocument();
		expect(screen.getByTestId('titleForm').textContent).toBe('Log in to Linear');
	});
	it('should error on click btn with empty inputs', () => {
		render(<ThemeProvider theme={darkTheme} ><LoginForm /></ThemeProvider> );
		const btn = screen.getByRole('button');
		fireEvent.click(btn);
		const errorTextUsername = screen.getByTestId('usernameError');
		const errorTextPassword = screen.getByTestId('passwordError');
		expect(errorTextPassword).toBeInTheDocument();
		expect(errorTextUsername).toBeInTheDocument();
		screen.debug();
	});
	it('should error disappear when start typing inputs', () => {
		render(<ThemeProvider theme={darkTheme}><LoginForm /></ThemeProvider>);
		const btn = screen.getByRole('button');
		fireEvent.click(btn);
		const errorTextUsername = screen.queryByTestId('usernameError');
		const errorTextPassword = screen.queryByTestId('passwordError');
		const inputUsername = screen.getByPlaceholderText('Enter your Name...');
		expect(inputUsername).toHaveTextContent('');
		expect(errorTextPassword).toBeInTheDocument();
		expect(errorTextUsername).toBeInTheDocument();
		fireEvent.input(inputUsername, {
			target: { value: 'sa' }
		});
		fireEvent.click(btn);
		expect(screen.queryByTestId('passwordError')).toBeNull();
		expect(screen.queryByTestId('usernameError')).toBeNull();
	});
});
