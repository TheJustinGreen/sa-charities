import React, { useState } from 'react';
import './CollapsibleSection.css';

interface CollapsibleSectionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
    title,
    children,
    defaultOpen = true,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`collapsible-section ${className}`}>
            <button
                className="section-header"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h2 className="section-title">{title}</h2>
                <span className={`chevron ${isOpen ? 'open' : ''}`}>
                    ▼
                </span>
            </button>
            <div
                className={`section-content ${isOpen ? 'open' : ''}`}
                aria-hidden={!isOpen}
            >
                <div className="content-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default CollapsibleSection;
