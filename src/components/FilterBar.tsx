import Tooltip from './Tooltip';
import { CAUSE_TOOLTIPS } from '../data/organizations';

interface FilterBarProps {
    causes: string[];
    selectedCause: string;
    onSelectCause: (cause: string) => void;
}

export default function FilterBar({ causes, selectedCause, onSelectCause }: FilterBarProps) {
    return (
        <div className="container" style={{ marginBottom: '2rem', overflowX: 'auto' }} data-test="filter-bar">
            <div style={{ display: 'flex', gap: '1rem', paddingBottom: '1rem', flexWrap: 'nowrap' }}>
                {causes.map(cause => (
                    <button
                        key={cause}
                        onClick={() => onSelectCause(cause)}
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
        </div>
    );
}
