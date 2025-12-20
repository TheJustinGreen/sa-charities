import { useState, useMemo } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Glossary from './components/Glossary'
import FilterBar from './components/FilterBar'
import OrganizationCard from './components/OrganizationCard'
import { organizations, causes } from './data/organizations'
import { Organization } from './types'

function App() {
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
    <div className="min-h-screen">
      <Header />

      <main style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '4rem' }}>
        <Hero />

        <Glossary />

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
              <div style={{ textAlign: 'center', padding: '4rem', color: 'hsl(var(--color-text-muted))' }} data-test="no-results-message">
                No organizations found for this category yet.
              </div>
            )}
          </div>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid var(--glass-border)', marginTop: '4rem', padding: '2rem 0', textAlign: 'center', color: 'hsl(var(--color-text-muted))', fontSize: '0.9rem' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} AltruisticSA. Built for Impact.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
