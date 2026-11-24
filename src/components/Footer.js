import logoImg from "./../assets/logoFooter.png";

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div>
                    <img className="footer-logo" src={logoImg} alt="Little lemon logo" />
                </div>
                <p>Copyright Little Lemon</p>
            </div>
        </footer>
    );
};

export default Footer;