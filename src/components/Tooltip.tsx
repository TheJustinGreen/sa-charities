import { useState, useRef, useEffect, ReactNode } from 'react';

interface TooltipProps {
    content: string;
    children: ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState<'top' | 'bottom'>('top');
    const triggerRef = useRef<HTMLDivElement>(null);

    // Simple positioning logic to prevent overflow
    useEffect(() => {
        if (isVisible && triggerRef.current) {
            const rect = triggerRef.current.getBoundingClientRect();
            if (rect.top < 100) {
                setPosition('bottom');
            } else {
                setPosition('top');
            }
        }
    }, [isVisible]);

    return (
        <div
            ref={triggerRef}
            className="tooltip-container"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
        >
            {children}
            {isVisible && (
                <div
                    className="tooltip-content animate-fade-in"
                    style={{
                        position: 'absolute',
                        [position]: '100%',
                        left: '50%',
                        transform: `translateX(-50%) ${position === 'top' ? 'translateY(-8px)' : 'translateY(8px)'}`,
                        padding: '1rem',
                        backgroundColor: 'hsl(var(--color-bg))',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
                        borderRadius: 'var(--radius-lg)',
                        width: 'max-content',
                        maxWidth: '320px',
                        zIndex: 100,
                        fontSize: '0.9rem',
                        lineHeight: '1.5',
                        color: 'hsl(var(--color-text-main))',
                        marginBottom: position === 'top' ? '0.75rem' : 0,
                        marginTop: position === 'bottom' ? '0.75rem' : 0,
                        textAlign: 'center',
                        pointerEvents: 'none',
                        whiteSpace: 'normal'
                    }}
                >
                    {content}
                    {/* Arrow */}
                    <div style={{
                        position: 'absolute',
                        [position === 'top' ? 'bottom' : 'top']: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%) rotate(45deg)',
                        width: '10px',
                        height: '10px',
                        backgroundColor: 'hsl(var(--color-bg))',
                        borderRight: '1px solid var(--glass-border)',
                        borderBottom: '1px solid var(--glass-border)',
                        zIndex: 101,
                        // Adjust border based on position to make it look correct
                        borderTop: position === 'bottom' ? '1px solid var(--glass-border)' : 'none',
                        borderLeft: position === 'bottom' ? '1px solid var(--glass-border)' : 'none',
                        borderBottom: position === 'top' ? '1px solid var(--glass-border)' : 'none',
                        borderRight: position === 'top' ? '1px solid var(--glass-border)' : 'none',

                    }} />
                </div>
            )}
        </div>
    );
}
