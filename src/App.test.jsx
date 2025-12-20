import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Integration', () => {
    it('renders the header and initial organizations', () => {
        render(<App />);
        // Use getAllByText in case of multiple matches (e.g. brand name + meta title?)
        // and just check one exists.
        const brandElements = screen.getAllByText(/Altruistic/i);
        expect(brandElements.length).toBeGreaterThan(0);

        // Check for heading regardless of line breaks
        expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

        // Check specific charity
        expect(screen.getByText('Gift of the Givers')).toBeInTheDocument();
    });

    it('filters organizations when a cause is selected', async () => {
        render(<App />);

        // Initial state: ensure multiple types exist
        expect(screen.getByText('Gift of the Givers')).toBeInTheDocument(); // Humanitarian
        expect(screen.getByText('SPCA South Africa')).toBeInTheDocument(); // Animals

        // Click "Animals" filter
        const animalsFilter = screen.getByRole('button', { name: 'Animals' });
        fireEvent.click(animalsFilter);

        // Verify filtering
        expect(screen.queryByText('Gift of the Givers')).not.toBeInTheDocument();
        expect(screen.getByText('SPCA South Africa')).toBeInTheDocument();

        // Click "All" to reset
        const allFilter = screen.getByRole('button', { name: 'All' });
        fireEvent.click(allFilter);

        expect(screen.getByText('Gift of the Givers')).toBeInTheDocument();
    });
});
