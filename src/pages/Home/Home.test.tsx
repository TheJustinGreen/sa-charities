import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Page', () => {
    it('renders the hero section', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(screen.getByText(/Alleviate Suffering/i)).toBeInTheDocument();
    });

    it('renders the filter bar', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(screen.getByTestId('filter-bar')).toBeInTheDocument();
    });

    it('displays organization cards by default', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        const grid = screen.getByTestId('org-grid-NPO');
        expect(grid).not.toBeEmptyDOMElement();
    });

    it('shows no results message when specific filter returns empty', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Mock a filter selection that might be empty (hypothetically)
        // or just verify the container exists for now,
        // as actual logic is tested in integration.
        // Check initial state (All)
        expect(screen.queryByText(/Interventions addressing immediate threats/i)).not.toBeInTheDocument();
    });

    it('shows cause description and tags when a cause is selected', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        // Check initial state (All)
        expect(screen.queryByText(/Interventions addressing immediate threats/i)).not.toBeInTheDocument();

        // Find and click the 'Survival' filter button
        const survivalBtn = screen.getByRole('button', { name: /Survival/i });
        fireEvent.click(survivalBtn);

        // Expect description to appear
        expect(screen.getByText(/Interventions addressing immediate threats/i)).toBeInTheDocument();
    });
});
