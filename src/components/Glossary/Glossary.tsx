import { CAUSE_TOOLTIPS } from "../../data/organizations";
import './Glossary.css';

export default function Glossary() {
    // Filter out "All" as it's not a specific cause definition
    const definitions = Object.entries(CAUSE_TOOLTIPS).filter(([key]) => key !== "All");

    return (
        <section className="container glossary-section" data-test="glossary-section">
            <h2 className="glossary-title">
                Understanding the Suffering We Alleviate
            </h2>

            <div className="glossary-grid" data-test="glossary-grid">
                {definitions.map(([cause, definition]) => (
                    <div
                        key={cause}
                        className="glass glossary-card"
                        data-test={`glossary-card-${cause}`}
                    >
                        {/* Decorative accent */}
                        <div
                            className="glossary-accent"
                            style={{
                                background: `var(--gradient-${cause === 'Humanitarian' ? 'acute' : 'systemic'})`
                            }}
                        />

                        <h3 className="glossary-card-title">
                            {cause}
                        </h3>
                        <p className="glossary-card-text">
                            {definition}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
