import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="container flex-center header-container">
                <Link to="/" className="brand-link">
                    <img src={logo} alt="Altruistic Logo" className="brand-logo" />
                    <span>Altruistic<span className="brand-highlight">SA</span></span>
                </Link>
                <nav className="nav-links">
                    <Link to="/" className="btn-text nav-link">Home</Link>
                    <Link to="/glossary" className="btn-text nav-link">Glossary</Link>
                </nav>
            </div>
        </header>
    );
}
