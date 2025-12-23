import { CAUSE_TOOLTIPS } from "../../data/organizations";
import './Glossary.css';

export default function Glossary() {
    // Filter out "All" as it's not a specific cause definition
    const definitions = Object.entries(CAUSE_TOOLTIPS).filter(([key]) => key !== "All");

    return (
        <section className="container glossary-section" data-test="glossary-section">


            <div className="glossary-grid" data-test="glossary-grid">
                {definitions.map(([cause]) => (
                    <div
                        key={cause}
                        className="glass glossary-card"
                        data-test={`glossary-card-${cause}`}
                    >
                        {/* Decorative accent */}
                        <div
                            className="glossary-accent"
                            style={{
                                background:
                                    cause === 'Survival' ? 'hsl(10 90% 55%)' :
                                        cause === 'Safety & Freedom' ? 'hsl(270 70% 60%)' :
                                            cause === 'Health' ? 'hsl(190 80% 45%)' :
                                                cause === 'Opportunity' ? 'hsl(45 90% 45%)' :
                                                    'hsl(140 70% 40%)' // Sustainability
                            }}
                        />

                        <h3 className="glossary-card-title">
                            {cause}
                        </h3>

                    </div>
                ))}
            </div>
        </section>
    );
}
