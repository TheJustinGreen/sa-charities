import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Integration', () => {
    it('renders the header and home page content', () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        // Brand logic
        const brandElements = screen.getAllByText(/Altruistic/i);
        expect(brandElements.length).toBeGreaterThan(0);

        // Check for Home page specific content (Hero heading)
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

        // Check specific charity
        expect(screen.getByText('Gift of the Givers')).toBeInTheDocument();
    });

    it('filters organizations when a cause is selected', async () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );

        // Initial state: ensure multiple types exist
        expect(screen.getByText('Gift of the Givers')).toBeInTheDocument(); // Humanitarian
        expect(screen.getByText('Animal Anti-Cruelty League')).toBeInTheDocument(); // Animals

        // Click "Animals" filter (now a button, text might be in span or direct)
        const animalsFilter = screen.getByTestId('filter-btn-Animals');
        fireEvent.click(animalsFilter);

        // Verify filtering
        expect(screen.queryByText('Gift of the Givers')).not.toBeInTheDocument();
        expect(screen.getByText('Animal Anti-Cruelty League')).toBeInTheDocument();

        // Verify sub-category tags appear
        // e.g., "Welfare" should be visible when Animals is selected
        // We scope this to the tag-filter-bar to avoiding finding the tag on the card itself
        const filterBar = await screen.findByTestId('tag-filter-bar');
        expect(within(filterBar).getByText('#Welfare')).toBeInTheDocument();

        // Click a tag "Welfare"
        const welfareTag = within(filterBar).getByText('#Welfare');
        fireEvent.click(welfareTag);

        // Should still show Animal Anti-Cruelty League
        expect(screen.getByText('Animal Anti-Cruelty League')).toBeInTheDocument();

        // Click "All" to reset
        const allFilter = screen.getByTestId('filter-btn-All');
        fireEvent.click(allFilter);

        expect(screen.getByText('Gift of the Givers')).toBeInTheDocument();
    });
});

