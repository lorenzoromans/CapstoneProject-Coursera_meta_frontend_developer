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
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;