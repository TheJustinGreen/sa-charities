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
        expect(screen.getByText('Gift of the Givers')).toBeInTheDocument(); // Survival
        expect(screen.getByText('SADAG')).toBeInTheDocument(); // Health & Wellbeing

        // Click "Health & Wellbeing" filter
        const healthFilter = screen.getByTestId('filter-btn-Health & Wellbeing');
        fireEvent.click(healthFilter);

        // Verify filtering
        // Gift of the Givers (Survival) should disappear
        expect(screen.queryByText('Gift of the Givers')).not.toBeInTheDocument();
        // SADAG (Health & Wellbeing) should remain
        expect(screen.getByText('SADAG')).toBeInTheDocument();

        // Verify sub-category tags appear
        // "Serious & Chronic Illness" is a tag for CANSA/SADAG... wait let's check SADAG tags: "Mental Health & Trauma"
        const filterBar = await screen.findByTestId('tag-filter-bar');
        expect(within(filterBar).getByText('#Mental Health & Trauma')).toBeInTheDocument();

        // Click a tag
        const tag = within(filterBar).getByText('#Mental Health & Trauma');
        fireEvent.click(tag);

        // Should still show SADAG
        expect(screen.getByText('SADAG')).toBeInTheDocument();

        // Click "All" to reset
        const allFilter = screen.getByTestId('filter-btn-All');
        fireEvent.click(allFilter);

        expect(screen.getByText('Gift of the Givers')).toBeInTheDocument();
    });
});
