interface FilterBarProps {
    causes: string[];
    selectedCause: string;
    onSelectCause: (cause: string) => void;
}

export default function FilterBar({ causes, selectedCause, onSelectCause }: FilterBarProps) {
    return (
        <div className="container" style={{ marginBottom: '2rem', overflowX: 'auto' }}>
            <div style={{ display: 'flex', gap: '0.75rem', paddingBottom: '1rem' }}>
                {causes.map(cause => (
                    <button
                        key={cause}
                        onClick={() => onSelectCause(cause)}
                        style={{
                            padding: '0.5rem 1.25rem',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid',
                            borderColor: selectedCause === cause ? 'hsl(var(--color-primary))' : 'hsl(var(--color-text-muted) / 0.3)',
                            backgroundColor: selectedCause === cause ? 'hsl(var(--color-primary))' : 'transparent',
                            color: selectedCause === cause ? 'white' : 'hsl(var(--color-text-muted))',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            whiteSpace: 'nowrap',
                            transition: 'all var(--transition-fast)'
                        }}
                    >
                        {cause}
                    </button>
                ))}
            </div>
        </div>
    );
}
