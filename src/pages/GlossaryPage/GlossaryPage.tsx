import Glossary from '../../components/Glossary/Glossary';
import './GlossaryPage.css';
import '../Home/Home.css'; // Reusing site-footer

export default function GlossaryPage() {
    return (
        <main className="glossary-page-main">
            <div className="container">
                <section className="intro-section">
                    <h1 className="intro-title">
                        Understanding Our Impact
                    </h1>
                    <p className="intro-text">
                        To effectively alleviate suffering, we must first understand it. We categorize our partner organizations not by who they help, but by the specific <strong>type of suffering</strong> they address—ensuring targeted, effective intervention.
                    </p>
                </section>

                <Glossary />

                <section className="content-section">
                    <h2 className="section-title text-primary">
                        Effective Altruism
                    </h2>
                    <div className="glass info-card">
                        <p className="info-text">
                            <strong>Effective Altruism</strong> is a philosophy and social movement that advocates using evidence and reason to determine the most effective ways to benefit others. It's not just about doing good; it's about doing the <em>most</em> good we can with the resources we have.
                        </p>
                        <p className="info-text">
                            By analyzing data and focusing on high-impact areas—such as global health, poverty alleviation, and animal welfare—we can ensure that every donation saves more lives and reduces more suffering than it would elsewhere.
                        </p>
                    </div>
                </section>

                <section className="section-margin">
                    <h2 className="section-title text-accent-awareness">
                        Understanding Suffering
                    </h2>
                    <div className="glass info-card">
                        <p className="info-text">
                            Suffering takes many forms, and effective intervention requires distinguishing between them to apply the right solution.
                        </p>
                        <div className="suffering-grid">
                            <div>
                                <h3 className="suffering-title">Acute Suffering</h3>
                                <p className="suffering-desc">
                                    Immediate, intense distress caused by sudden events like natural disasters, war, or accidents. Intervention is usually time-critical (e.g., emergency relief, medical aid).
                                </p>
                            </div>
                            <div>
                                <h3 className="suffering-title">Chronic Suffering</h3>
                                <p className="suffering-desc">
                                    Long-term, persistent distress caused by systemic issues like poverty, disease, or lack of education. Intervention requires sustainable, structural solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-margin">
                    <h2 className="section-title text-accent-relief">
                        What is a Section 18A Tax Certificate?
                    </h2>
                    <div className="glass tax-card">
                        <p className="info-text">
                            A <strong>Section 18A certificate</strong> is a receipt issued by an actively registered Public Benefit Organisation (PBO) in South Africa. This certificate allows you, as a taxpayer (individual or corporate), to deduct the value of your donation from your taxable income.
                        </p>
                        <p className="info-text-last">
                            By donating to organizations that issue Section 18A certificates, you effectively lower the cost of your donation, allowing you to give more for the same net cost to yourself. Look for the <span className="tax-badge-highlight">✓ Tax Cert. 18A</span> badge on our organization cards.
                        </p>
                    </div>
                </section>
            </div>

            <footer className="site-footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} AltruisticSA. Built for Impact.</p>
                </div>
            </footer>
        </main>
    );
}
