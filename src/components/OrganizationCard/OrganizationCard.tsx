import { Organization } from '../../types';
import './OrganizationCard.css';

interface OrganizationCardProps {
    org: Organization;
}

export default function OrganizationCard({ org }: OrganizationCardProps) {
    const isAcute = org.cause === "Humanitarian" || org.cause === "Healthcare" || org.cause === "Animals";
    const causeClass = isAcute ? 'acute' : 'relief';

    return (
        <article
            className={`glass org-card ${causeClass}`}
            data-test={`org-card-${org.id}`}
        >
            <div className="org-image-container">
                <img
                    src={org.imageUrl}
                    alt={org.name}
                    className="org-image"
                />
                <div className="org-overlay" />
            </div>

            <div className="org-content">
                <div className="org-header">
                    <div className={`cause-badge ${causeClass}`}>
                        {org.cause}
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
        </article>
    );
}
