import { render, screen } from '@testing-library/react';
import Glossary from './Glossary';

describe('Glossary Component', () => {
    it('renders the glossary title', () => {
        render(<Glossary />);
        expect(screen.getByText('Understanding the Suffering We Alleviate')).toBeInTheDocument();
    });

    it('renders definition cards for causes', () => {
        render(<Glossary />);
        // Check for a few key definitions
        expect(screen.getByText('Survival')).toBeInTheDocument();
        expect(screen.getByText(/addressing immediate threats/i)).toBeInTheDocument();

        expect(screen.getByText('Sustainability')).toBeInTheDocument();
        expect(screen.getByText(/Preserving the biosphere/i)).toBeInTheDocument();
    });

    it('does not render "All" category', () => {
        render(<Glossary />);
        expect(screen.queryByText('View all effective altruism opportunities')).not.toBeInTheDocument();
    });

    it('has correct data-test attributes', () => {
        const { container } = render(<Glossary />);
        // getByTestId looks for data-testid, so we check the attribute manually or use querySelector
        expect(container.querySelector('[data-test="glossary-grid"]')).toBeInTheDocument();
        expect(container.querySelector('[data-test="glossary-card-Survival"]')).toBeInTheDocument();
    });
});
