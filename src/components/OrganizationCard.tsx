import { useState } from 'react';
import { Organization } from '../types';

interface OrganizationCardProps {
    org: Organization;
}

export default function OrganizationCard({ org }: OrganizationCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    const isAcute = org.cause === "Humanitarian" || org.cause === "Healthcare" || org.cause === "Animals";
    // We use CSS variables for colors, but for the dynamic glow we need the HSL values
    // Assuming --color-accent-awareness is roughly 48 96% 51% (Amber)
    // And --color-accent-relief is roughly 168 76% 50% (Teal)
    // We'll stick to using the vars if possible, or hardcode the logic for now if vars aren't easily interpolated in JS without a helper.
    // However, the previous code used `var(--color-accent-...)` which worked because it might have been set to a value that works in hsl()?
    // Actually, looking at the broken code: `hsl(${glowColor} / 0.5)` implies glowColor is "deg sat% light%".
    // Let's assume the vars in index.css are defined as just values.

    // To be safe and avoid "hsl(var(...))" nesting issues if the var contains "hsl",
    // I'll check how I defined them. I defined them as hex/hsl values in previous steps?
    // Let's use the class logic or inline styles that worked before.
    // The previous code had: const glowColor = isAcute ? 'var(--color-accent-awareness)' : 'var(--color-accent-relief)';
    // And then `borderColor: hsl(${glowColor} / 0.5)` -> This would be `hsl(var(--color...) / 0.5)` which is valid CSS if the var is just numbers.
    // But usually simple vars are colors.

    // Let's simplify.
    const glowVar = isAcute ? 'var(--color-accent-awareness)' : 'var(--color-accent-relief)';

    return (
        <article
            className="glass"
            data-test={`org-card-${org.id}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'all 0.3s ease',
                border: '1px solid',
                borderColor: isHovered ? `hsl(from ${glowVar} h s l / 0.5)` : 'var(--glass-border)',
                background: 'var(--glass-surface)',
                position: 'relative',
                transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: isHovered ? `0 10px 30px -5px hsl(from ${glowVar} h s l / 0.3)` : 'var(--glass-shadow)',
            }}
        >
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                <img
                    src={org.imageUrl}
                    alt={org.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)',
                    pointerEvents: 'none'
                }} />
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: `hsl(from ${glowVar} h s l / 0.1)`,
                    color: glowVar,
                    border: `1px solid hsl(from ${glowVar} h s l / 0.2)`,
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    alignSelf: 'flex-start',
                    boxShadow: `0 0 10px -2px hsl(from ${glowVar} h s l / 0.3)`
                }}>
                    {org.cause}
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'hsl(var(--color-text-main))' }}>
                    {org.name}
                </h3>

                <p style={{ color: 'hsl(var(--color-text-muted))', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                    {org.description}
                </p>

                <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        alignSelf: 'flex-start',
                        padding: '0',
                        fontWeight: 700,
                        color: 'hsl(var(--color-primary))',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'gap 0.2s'
                    }}
                >
                    Visit Website <span style={{ transition: 'transform 0.2s', transform: isHovered ? 'translateX(3px)' : 'none' }}>→</span>
                </a>
            </div>
        </article>
    );
}
