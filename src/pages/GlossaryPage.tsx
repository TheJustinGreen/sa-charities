import Glossary from '../components/Glossary/Glossary';

export default function GlossaryPage() {
    return (
        <main style={{ paddingTop: '80px', minHeight: '100vh', paddingBottom: '4rem' }}>
            <div className="container">
                <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                        Understanding Our Impact
                    </h1>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'hsl(var(--color-text-muted))' }}>
                        To effectively alleviate suffering, we must first understand it. Here we explore the core concepts that drive our mission.
                    </p>
                </section>

                <Glossary />

                <section style={{ marginTop: '6rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'hsl(var(--color-primary))' }}>
                        Effective Altruism
                    </h2>
                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            **Effective Altruism** is a philosophy and social movement that advocates using evidence and reason to determine the most effective ways to benefit others. It's not just about doing good; it's about doing the *most* good we can with the resources we have.
                        </p>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            By analyzing data and focusing on high-impact areas—such as global health, poverty alleviation, and animal welfare—we can ensure that every donation saves more lives and reduces more suffering than it would elsewhere.
                        </p>
                    </div>
                </section>

                <section style={{ marginTop: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'hsl(var(--color-accent-awareness))' }}>
                        Understanding Suffering
                    </h2>
                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            Suffering takes many forms, and effective intervention requires distinguishing between them to apply the right solution.
                        </p>
                        <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                            <div>
                                <h3 style={{ marginBottom: '1rem', color: 'hsl(var(--color-text-main))' }}>Acute Suffering</h3>
                                <p style={{ color: 'hsl(var(--color-text-muted))' }}>
                                    Immediate, intense distress caused by sudden events like natural disasters, war, or accidents. Intervention is usually time-critical (e.g., emergency relief, medical aid).
                                </p>
                            </div>
                            <div>
                                <h3 style={{ marginBottom: '1rem', color: 'hsl(var(--color-text-main))' }}>Chronic Suffering</h3>
                                <p style={{ color: 'hsl(var(--color-text-muted))' }}>
                                    Long-term, persistent distress caused by systemic issues like poverty, disease, or lack of education. Intervention requires sustainable, structural solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section style={{ marginTop: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'hsl(var(--color-accent-relief))' }}>
                        What is a Section 18A Tax Certificate?
                    </h2>
                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid hsl(var(--color-accent-relief))' }}>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            A **Section 18A certificate** is a receipt issued by an actively registered Public Benefit Organisation (PBO) in South Africa. This certificate allows you, as a taxpayer (individual or corporate), to deduct the value of your donation from your taxable income.
                        </p>
                        <p style={{ marginBottom: '0', lineHeight: '1.8' }}>
                            By donating to organizations that issue Section 18A certificates, you effectively lower the cost of your donation, allowing you to give more for the same net cost to yourself. Look for the <span style={{ fontWeight: 700, color: 'hsl(var(--color-accent-relief))' }}>✓ Tax Cert. 18A</span> badge on our organization cards.
                        </p>
                    </div>
                </section>
            </div>

            <footer style={{ borderTop: '1px solid var(--glass-border)', marginTop: '4rem', padding: '2rem 0', textAlign: 'center', color: 'hsl(var(--color-text-muted))', fontSize: '0.9rem' }}>
                <div className="container">
                    <p>© {new Date().getFullYear()} AltruisticSA. Built for Impact.</p>
                </div>
            </footer>
        </main>
    );
}
