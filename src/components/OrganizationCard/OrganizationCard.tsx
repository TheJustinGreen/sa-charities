import { useState } from 'react';
import { Organization } from '../../types';
import './OrganizationCard.css';

interface OrganizationCardProps {
    org: Organization;
}

export default function OrganizationCard({ org }: OrganizationCardProps) {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };
    const getCauseClass = (cause: string) => {
        switch (cause) {
            case "Survival": return "survival";
            case "Safety & Freedom": return "safety-freedom";
            case "Health": return "health";
            case "Opportunity": return "opportunity";
            case "Sustainability": return "sustainability";
            default: return "relief";
        }
    };

    return (
        <article
            className="glass org-card"
            data-test={`org-card-${org.id}`}
        >
            <div className="org-image-container">
                {isLoading && <div className="org-image-skeleton" />}
                <img
                    src={org.imageUrl}
                    alt={org.name}
                    className={`org-image ${isLoading ? 'loading' : 'loaded'}`}
                    onLoad={handleImageLoad}
                    loading="lazy"
                />
                <div className="org-overlay" />
            </div>

            <div className="org-content">
                <div className="org-header">
                    <div className="badges-group">
                        <div className="cause-badges-scroll">
                            {org.causes.map(cause => (
                                <div key={cause} className={`cause-badge ${getCauseClass(cause)}`}>
                                    {cause}
                                </div>
                            ))}
                        </div>
                        {org.section18a && (
                            <div
                                className="tax-badge"
                                title="Donations to this organization are tax deductible (Section 18A)"
                            >
                                <span>✓</span> Tax Cert. 18A
                            </div>
                        )}
                    </div>
                </div>


                <h3 className="org-name">
                    {org.name}
                </h3>

                <p className="org-description">
                    {org.description}
                </p>

                {org.tags && org.tags.length > 0 && (
                    <div className="org-tags">
                        {org.tags.map(tag => (
                            <span key={tag} className="org-tag">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}

                <a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="org-link"
                >
                    Visit Website <span>→</span>
                </a>
            </div>
        </article >
    );
}
