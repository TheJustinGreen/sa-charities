import { useState, useMemo } from 'react'
import Hero from '../../components/Hero/Hero'
import FilterBar from '../../components/FilterBar/FilterBar'
import OrganizationCard from '../../components/OrganizationCard/OrganizationCard'
import { organizations, causes } from '../../data/organizations'
import { Organization } from '../../types'
import './Home.css';

export default function Home() {
    const [selectedCause, setSelectedCause] = useState<string>("All");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const availableTags = useMemo(() => {
        if (selectedCause === "All") return [];
        const tags = new Set<string>();
        organizations
            .filter(org => org.cause === selectedCause)
            .forEach(org => org.tags.forEach(tag => tags.add(tag)));
        return Array.from(tags).sort();
    }, [selectedCause]);

    const filteredOrgs = useMemo<Organization[]>(() => {
        let filtered = organizations;

        if (selectedCause !== "All") {
            filtered = filtered.filter(org => org.cause === selectedCause);
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
                        <div className="grid-cards animate-fade-in" key={selectedCause} data-test="org-grid">
                            {filteredOrgs.map(org => (
                                <OrganizationCard key={org.id} org={org} />
                            ))}
                        </div>

                        {filteredOrgs.length === 0 && (
                            <div className="no-results" data-test="no-results-message">
                                No organizations found for this category yet.
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} AltruisticSA. Built for Impact.</p>
                </div>
            </footer>
        </>
    )
}
