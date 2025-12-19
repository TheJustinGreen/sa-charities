export default function OrganizationCard({ org }) {
    return (
        <div className="glass" style={{
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'transform var(--transition-fast)'
        }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
            <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                    src={org.imageUrl}
                    alt={org.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'hsl(var(--color-primary) / 0.1)',
                    color: 'hsl(var(--color-primary))',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    alignSelf: 'flex-start'
                }}>
                    {org.cause}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{org.name}</h3>
                <p style={{ color: 'hsl(var(--color-text-muted))', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                    {org.description}
                </p>
                <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-text"
                    style={{ alignSelf: 'flex-start', paddingLeft: 0, fontWeight: 700 }}
                >
                    Visit Website →
                </a>
            </div>
        </div>
    );
}
