import logo from '../assets/logo.png';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="container flex-center" style={{ height: '80px', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
                    <img src={logo} alt="Altruistic Logo" style={{ height: '40px', width: 'auto' }} />
                    <span>Altruistic<span style={{ color: 'hsl(var(--color-primary))' }}>SA</span></span>
                </div>
            </div>
        </header>
    );
}
