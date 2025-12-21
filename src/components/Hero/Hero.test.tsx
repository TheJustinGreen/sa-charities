import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
    it('renders the hero title and subtitle', () => {
        render(<Hero />);
        expect(screen.getByText(/Alleviate Suffering/i)).toBeInTheDocument();
        expect(screen.getByText(/Act Today/i)).toBeInTheDocument();
        expect(screen.getByText(/Moving beyond/i)).toBeInTheDocument();
    });
});
