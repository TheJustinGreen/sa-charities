import { useState, useMemo } from 'react'
import Hero from '../../components/Hero/Hero'
import FilterBar from '../../components/FilterBar/FilterBar'
import OrganizationCard from '../../components/OrganizationCard/OrganizationCard'
import { organizations, causes, CAUSE_TOOLTIPS } from '../../data/organizations'
import { Organization } from '../../types'
import CollapsibleSection from '../../components/CollapsibleSection/CollapsibleSection'
import './Home.css';

export default function Home() {
    const [selectedCause, setSelectedCause] = useState<string>("All");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const availableTags = useMemo(() => {
        if (selectedCause === "All") return [];
        const tags = new Set<string>();
        organizations
            .filter(org => org.causes.includes(selectedCause))
            .forEach(org => org.tags.forEach(tag => tags.add(tag)));
        return Array.from(tags).sort();
    }, [selectedCause]);

    const filteredOrgs = useMemo<Organization[]>(() => {
        let filtered = organizations;

        if (selectedCause !== "All") {
            filtered = filtered.filter(org => org.causes.includes(selectedCause));
        }

        if (selectedTag) {
            filtered = filtered.filter(org => org.tags.includes(selectedTag));
        }

        return filtered;
    }, [selectedCause, selectedTag]);

    const handleCauseSelect = (cause: string) => {
        setSelectedCause(cause);
        setSelectedTag(null);
    };

    return (
        <>
            <main className="home-main">
                <Hero />

                <section>
                    <FilterBar
                        causes={causes}
                        selectedCause={selectedCause}
                        onSelectCause={handleCauseSelect}
                        availableTags={availableTags}
                        selectedTag={selectedTag}
                        onSelectTag={setSelectedTag}
                    />

                    <div className="container">
                        {selectedCause !== "All" && (
                            <div className="cause-header animate-fade-in">
                                <p className="cause-description" style={{
                                    fontSize: '1.2rem',
                                    fontStyle: 'italic',
                                    color: 'var(--text-secondary)',
                                    textAlign: 'center',
                                    maxWidth: '800px',
                                    margin: '0 auto'
                                }}>
                                    {CAUSE_TOOLTIPS[selectedCause]}
                                </p>
                            </div>
                        )}

                        {filteredOrgs.length > 0 ? (
                            Object.entries(
                                filteredOrgs.reduce((acc, org) => {
                                    const type = org.type || 'NPO'; // Default to NPO
                                    if (!acc[type]) acc[type] = [];
                                    acc[type].push(org);
                                    return acc;
                                }, {} as Record<string, Organization[]>)
                            )
                                .sort(([typeA], [typeB]) => {
                                    // Specific order: NPO first, then others
                                    if (typeA === 'NPO') return -1;
                                    if (typeB === 'NPO') return 1;
                                    return typeA.localeCompare(typeB);
                                })
                                .map(([type, orgs]) => (
                                    <CollapsibleSection
                                        key={type}
                                        title={type === 'NPO' ? 'Non-Profit Organizations' : type === 'Social Enterprise' ? 'Social Enterprises' : 'Businesses'}
                                        className="animate-fade-in"
                                    >
                                        <div className="grid-cards" data-test={`org-grid-${type}`}>
                                            {orgs.map(org => (
                                                <OrganizationCard key={org.id} org={org} />
                                            ))}
                                        </div>
                                    </CollapsibleSection>
                                ))
                        ) : (
                            <div className="no-results" data-test="no-results-message">
                                No organizations found for this category yet.
                            </div>
                        )}
                    </div>
                </section>
            </main >

            <footer className="site-footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} AltruisticSA. Built for Impact.</p>
                </div>
            </footer>
        </>
    )
}
