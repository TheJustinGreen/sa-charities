


interface FilterBarProps {
    causes: string[];
    selectedCause: string;
    onSelectCause: (cause: string) => void;
    availableTags: string[];
    selectedTag: string | null;
    onSelectTag: (tag: string | null) => void;
}

import './FilterBar.css';

interface FilterBarProps {
    causes: string[];
    selectedCause: string;
    onSelectCause: (cause: string) => void;
    availableTags: string[];
    selectedTag: string | null;
    onSelectTag: (tag: string | null) => void;
}

export default function FilterBar({
    causes,
    selectedCause,
    onSelectCause,
    availableTags = [],
    selectedTag,
    onSelectTag
}: FilterBarProps) {
    return (
        <div className="container filter-bar-container" data-test="filter-bar">
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
