import { render, screen, fireEvent } from '@testing-library/react';
import FilterBar from './FilterBar';

describe('FilterBar Component', () => {
    const defaultProps = {
        causes: ['All', 'Survival', 'Sustainability'],
        selectedCause: 'All',
        onSelectCause: vi.fn(),
        availableTags: [],
        selectedTag: null,
        onSelectTag: vi.fn(),
        searchTerm: '',
        onSearchChange: vi.fn(),
        onSearchSubmit: vi.fn()
    };

    it('renders cause buttons', () => {
        render(<FilterBar {...defaultProps} />);
        expect(screen.getByText('All')).toBeInTheDocument();
        expect(screen.getByText('Survival')).toBeInTheDocument();
    });

    it('calls onSelectCause when a cause is clicked', () => {
        render(<FilterBar {...defaultProps} />);
        const btn = screen.getByText('Survival');
        fireEvent.click(btn);
        expect(defaultProps.onSelectCause).toHaveBeenCalledWith('Survival');
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

    it('calls onSearchChange when input changes', () => {
        render(<FilterBar {...defaultProps} />);
        const input = screen.getByPlaceholderText(/search/i);
        fireEvent.change(input, { target: { value: 'water' } });
        expect(defaultProps.onSearchChange).toHaveBeenCalledWith('water');
    });

    it('calls onSearchSubmit when Enter key is pressed', () => {
        render(<FilterBar {...defaultProps} />);
        const input = screen.getByPlaceholderText(/search/i);
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
        expect(defaultProps.onSearchSubmit).toHaveBeenCalled();
    });
});
