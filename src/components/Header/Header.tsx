import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="container flex-center" style={{ height: '80px', justifyContent: 'space-between' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
                    <img src={logo} alt="Altruistic Logo" style={{ height: '40px', width: 'auto' }} />
                    <span>Altruistic<span style={{ color: 'hsl(var(--color-primary))' }}>SA</span></span>
                </Link>
                <nav style={{ display: 'flex', gap: '1.5rem' }}>
                    <Link to="/" className="btn-text" style={{ fontWeight: 600 }}>Home</Link>
                    <Link to="/glossary" className="btn-text" style={{ fontWeight: 600 }}>Glossary</Link>
                </nav>
            </div>
        </header>
    );
}
