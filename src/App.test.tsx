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

        // Click "Health" filter (was Animals)
        const healthFilter = screen.getByTestId('filter-btn-Health');
        fireEvent.click(healthFilter);

        // Verify filtering
        // Gift of the Givers (Survival) should disappear
        expect(screen.queryByText('Gift of the Givers')).not.toBeInTheDocument();
        // Animal Anti-Cruelty League (Health + Safety) should remain
        expect(screen.getByText('Animal Anti-Cruelty League')).toBeInTheDocument();

        // Verify sub-category tags appear
        // "Welfare" is a tag for AACL, so it should be visible when Health is selected
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

