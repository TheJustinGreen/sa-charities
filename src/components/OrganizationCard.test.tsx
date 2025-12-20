import { render, screen } from '@testing-library/react';
import OrganizationCard from './OrganizationCard';

const mockOrg = {
    id: 1,
    name: "Test Charity",
    description: "Helping the world.",
    cause: "Humanitarian",
    website: "https://example.com",
    imageUrl: "https://example.com/image.jpg"
};

describe('OrganizationCard Component', () => {
    it('renders organization details correctly', () => {
        render(<OrganizationCard org={mockOrg} />);

        expect(screen.getByText('Test Charity')).toBeInTheDocument();
        expect(screen.getByText('Helping the world.')).toBeInTheDocument();
        expect(screen.getByText('Humanitarian')).toBeInTheDocument();

        const image = screen.getByRole('img');
        expect(image).toHaveAttribute('src', mockOrg.imageUrl);
        expect(image).toHaveAttribute('alt', mockOrg.name);
    });

    it('contains a link to the website', () => {
        render(<OrganizationCard org={mockOrg} />);

        const link = screen.getByRole('link', { name: /visit website/i });
        expect(link).toHaveAttribute('href', mockOrg.website);
    });
});
