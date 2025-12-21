import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from './FilterBar';

describe('FilterBar Component', () => {
    const defaultProps = {
        causes: ['All', 'Humanitarian', 'Environment'],
        selectedCause: 'All',
        onSelectCause: vi.fn(),
        availableTags: [],
        selectedTag: null,
        onSelectTag: vi.fn()
    };

    it('renders cause buttons', () => {
        render(<FilterBar {...defaultProps} />);
        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Humanitarian')).toBeInTheDocument();
    });

    it('calls onSelectCause when a cause is clicked', () => {
        render(<FilterBar {...defaultProps} />);
        const btn = screen.getByText('Humanitarian');
        fireEvent.click(btn);
        expect(defaultProps.onSelectCause).toHaveBeenCalledWith('Humanitarian');
    });

    it('renders tags when availableTags provided', () => {
        render(<FilterBar {...defaultProps} availableTags={['Tag1', 'Tag2']} />);
        expect(screen.getByText('#Tag1')).toBeInTheDocument();
        expect(screen.getByText('#Tag2')).toBeInTheDocument();
    });

    it('calls onSelectTag when a tag is clicked', () => {
        render(<FilterBar {...defaultProps} availableTags={['Tag1']} />);
        const tag = screen.getByText('#Tag1');
        fireEvent.click(tag);
        expect(defaultProps.onSelectTag).toHaveBeenCalledWith('Tag1');
    });
});
