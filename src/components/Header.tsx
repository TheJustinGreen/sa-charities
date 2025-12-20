export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="container flex-center" style={{ height: '80px', justifyContent: 'space-between' }}>
                <div style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
                    Altruistic<span style={{ color: 'hsl(var(--color-primary))' }}>SA</span>
                </div>
            </div>
        </header>
    );
}
