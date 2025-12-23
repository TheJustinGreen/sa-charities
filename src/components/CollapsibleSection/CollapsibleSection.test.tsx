import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CollapsibleSection from './CollapsibleSection';

describe('CollapsibleSection', () => {
    it('renders title and children', () => {
        render(
            <CollapsibleSection title="Test Section">
                <p>Test Content</p>
            </CollapsibleSection>
        );

        expect(screen.getByText('Test Section')).toBeInTheDocument();
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('toggles content visibility on click', () => {
        render(
            <CollapsibleSection title="Test Section">
                <p>Test Content</p>
            </CollapsibleSection>
        );

        const button = screen.getByRole('button');
        const content = screen.getByText('Test Content').closest('.section-content');

        // Initially open (default)
        expect(button).toHaveAttribute('aria-expanded', 'true');
        expect(content).toHaveClass('open');

        // Click to close
        fireEvent.click(button);
        expect(button).toHaveAttribute('aria-expanded', 'false');
        expect(content).not.toHaveClass('open');

        // Click to open
        fireEvent.click(button);
        expect(button).toHaveAttribute('aria-expanded', 'true');
        expect(content).toHaveClass('open');
    });

    it('respects defaultOpen prop', () => {
        render(
            <CollapsibleSection title="Closed Section" defaultOpen={false}>
                <p>Hidden Content</p>
            </CollapsibleSection>
        );

        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-expanded', 'false');
    });
});
