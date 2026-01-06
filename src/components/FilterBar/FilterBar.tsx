


interface FilterBarProps {
    causes: string[];
    selectedCause: string;
    onSelectCause: (cause: string) => void;
    availableTags: string[];
    selectedTag: string | null;
    onSelectTag: (tag: string | null) => void;
    searchTerm: string;
    onSearchChange: (term: string) => void;
}

import './FilterBar.css';

interface FilterBarProps {
    causes: string[];
    selectedCause: string;
    onSelectCause: (cause: string) => void;
    availableTags: string[];
    selectedTag: string | null;
    onSelectTag: (tag: string | null) => void;
    searchTerm: string;
    onSearchChange: (term: string) => void;
    onSearchSubmit: () => void;
}

export default function FilterBar({
    causes,
    selectedCause,
    onSelectCause,
    availableTags = [],
    selectedTag,
    onSelectTag,
    searchTerm,
    onSearchChange,
    onSearchSubmit
}: FilterBarProps) {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearchSubmit();
            (e.target as HTMLInputElement).blur(); // Dismiss keyboard on mobile
        }
    };

    return (
        <div className="container filter-bar-container" data-test="filter-bar">
            {/* Search Input */}
            <div className="search-container animate-fade-in">
                <input
                    type="text"
                    placeholder="Search by problem"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="glass search-input"
                    data-test="search-input"
                />
            </div>

            {/* Main Categories */}
            <div className="filter-categories">
                {causes.map(cause => (
                    <button
                        key={cause}
                        onClick={() => {
                            onSelectCause(cause);
                        }}
                        className={`glass filter-btn ${selectedCause === cause ? 'active' : 'inactive'}`}
                        data-test={`filter-btn-${cause}`}
                    >
                        {cause}
                    </button>
                ))}
            </div>

            {/* Sub-category Tags */}
            {availableTags.length > 0 && (
                <div className="filter-tags" data-test="tag-filter-bar">
                    {availableTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => onSelectTag(selectedTag === tag ? null : tag)}
                            className={`glass tag-btn ${selectedTag === tag ? 'active' : 'inactive'}`}
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
