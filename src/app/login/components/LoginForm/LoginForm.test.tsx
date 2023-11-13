import { LoginForm } from '@/app/login/components/LoginForm/LoginForm';
import { cleanup, render,screen } from '@testing-library/react';
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
		screen.debug();
		// expect(getByTestId('titleForm').textContent).toBe('Log in to Linear');
	});
});
