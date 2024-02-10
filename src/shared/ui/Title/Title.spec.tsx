import { render, screen } from '@testing-library/react';
import { Title } from '@/shared/ui';
import '@testing-library/jest-dom';

describe('Title', () => {
    it('renders a Title', () => {
        render(<Title>Testing</Title>);

        const heading = screen.getByRole('heading', { level: 1 });

        expect(heading).toBeInTheDocument();
    });
});
