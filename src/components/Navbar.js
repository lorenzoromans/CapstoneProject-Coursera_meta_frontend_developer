import logoImg from "./../assets/Logo.svg";

const Navbar = () => {
    return (
        <header className="site-header">
            <div>
                <img src={logoImg} alt="Little lemon logo" />
            </div>
            <nav aria-label="Navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/booking">Reservations</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;