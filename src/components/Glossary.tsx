import { CAUSE_TOOLTIPS } from "../data/organizations";

export default function Glossary() {
    // Filter out "All" as it's not a specific cause definition
    const definitions = Object.entries(CAUSE_TOOLTIPS).filter(([key]) => key !== "All");

    return (
        <section className="container" style={{ marginBottom: '3rem' }} data-test="glossary-section">
            <h2
                style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: 'hsl(var(--color-primary))',
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                    letterSpacing: '-0.02em'
                }}
            >
                Understanding the Suffering We Alleviate
            </h2>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.5rem'
                }}
                data-test="glossary-grid"
            >
                {definitions.map(([cause, definition]) => (
                    <div
                        key={cause}
                        className="glass"
                        style={{
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-lg)',
                            border: '1px solid var(--glass-border)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                        data-test={`glossary-card-${cause}`}
                    >
                        {/* Decorative accent */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            background: `var(--gradient-${cause === 'Humanitarian' ? 'acute' : 'systemic'})`,
                            opacity: 0.8
                        }} />

                        <h3
                            style={{
                                fontSize: '1rem',
                                fontWeight: 700,
                                color: 'hsl(var(--color-text-main))',
                                marginBottom: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            {cause}
                        </h3>
                        <p
                            style={{
                                fontSize: '0.9rem',
                                lineHeight: '1.6',
                                color: 'hsl(var(--color-text-muted))',
                                margin: 0
                            }}
                        >
                            {definition}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
