import { useState, useMemo } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FilterBar from './components/FilterBar'
import OrganizationCard from './components/OrganizationCard'
import { organizations, causes } from './data/organizations'

function App() {
  const [selectedCause, setSelectedCause] = useState("All");

  const filteredOrgs = useMemo(() => {
    if (selectedCause === "All") return organizations;
    return organizations.filter(org => org.cause === selectedCause);
  }, [selectedCause]);

  return (
    <div className="min-h-screen">
      <Header />

      <main style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '4rem' }}>
        <Hero />

        <section>
          <FilterBar
            causes={causes}
            selectedCause={selectedCause}
            onSelectCause={setSelectedCause}
          />

          <div className="container">
            <div className="grid-cards animate-fade-in" key={selectedCause}>
              {filteredOrgs.map(org => (
                <OrganizationCard key={org.id} org={org} />
              ))}
            </div>

            {filteredOrgs.length === 0 && (
              <div style={{ textAlign: 'center', padding: '4rem', color: 'hsl(var(--color-text-muted))' }}>
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
