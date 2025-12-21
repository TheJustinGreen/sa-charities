


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
        <div className="container" style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }} data-test="filter-bar">
            {/* Main Categories */}
            <div style={{ display: 'flex', gap: '1rem', paddingBottom: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {causes.map(cause => (
                    <button
                        key={cause}
                        onClick={() => {
                            onSelectCause(cause);
                            // Optional: onSelectTag(null) if we want to reset tag on cause change,
                            // typically handled by parent but good to trigger here if needed or just rely on parent.
                        }}
                        className="glass"
                        data-test={`filter-btn-${cause}`}
                        style={{
                            padding: '0.5rem 1.25rem',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid',
                            borderColor: selectedCause === cause ? 'hsl(var(--color-primary))' : 'var(--glass-border)',
                            backgroundColor: selectedCause === cause ? 'hsl(var(--color-primary) / 0.1)' : 'transparent',
                            color: selectedCause === cause ? 'hsl(var(--color-primary))' : 'hsl(var(--color-text-muted))',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            whiteSpace: 'nowrap',
                            transition: 'all var(--transition-fast)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            boxShadow: selectedCause === cause ? '0 0 15px -3px hsl(var(--color-primary) / 0.3)' : 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {cause}
                    </button>
                ))}
            </div>

            {/* Sub-category Tags */}
            {availableTags.length > 0 && (
                <div style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    animation: 'fadeIn 0.3s ease-out'
                }} data-test="tag-filter-bar">
                    {availableTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => onSelectTag(selectedTag === tag ? null : tag)}
                            className="glass"
                            style={{
                                padding: '0.3rem 0.8rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.8rem',
                                cursor: 'pointer',
                                border: selectedTag === tag ? '1px solid hsl(var(--color-primary))' : '1px solid var(--glass-border)',
                                background: selectedTag === tag ? 'hsla(var(--color-primary), 0.1)' : 'var(--glass-bg)',
                                color: selectedTag === tag ? 'hsl(var(--color-primary))' : 'hsl(var(--color-text-muted))',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            #{tag}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
