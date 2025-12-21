import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GlossaryPage from './GlossaryPage';

describe('GlossaryPage', () => {
    it('renders the intro section', () => {
        render(
            <MemoryRouter>
                <GlossaryPage />
            </MemoryRouter>
        );
        expect(screen.getByText(/Understanding Our Impact/i)).toBeInTheDocument();
        expect(screen.getByText(/To effectively alleviate suffering/i)).toBeInTheDocument();
    });

    it('renders the Glossary component', () => {
        render(
            <MemoryRouter>
                <GlossaryPage />
            </MemoryRouter>
        );
        // Checking for a glossary term/card
        expect(screen.getByTestId('glossary-section')).toBeInTheDocument();
    });

    it('renders informational sections', () => {
        render(
            <MemoryRouter>
                <GlossaryPage />
            </MemoryRouter>
        );
        expect(screen.getByText('Effective Altruism')).toBeInTheDocument();
        expect(screen.getByText('Understanding Suffering')).toBeInTheDocument();
        expect(screen.getByText(/Section 18A Tax Certificate/i)).toBeInTheDocument();
    });
});
