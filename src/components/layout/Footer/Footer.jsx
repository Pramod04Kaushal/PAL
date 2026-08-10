import { Link } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Fish", path: "/fish" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
];

const fishLinks = [
    "Tilapia",
    "Catfish",
    "Guppy",
    "Betta",
    "Koi",
];

function Footer() {
    return (
        <footer className="footer">

            {/* Main Footer */}
            <div className="footer-main">

                <div className="container footer-container">

                    {/* Brand */}
                    <div className="footer-brand">

                        <Link to="/" className="footer-logo">
                            <span className="footer-logo-main">
                                PAL
                            </span>

                            <span className="footer-logo-sub">
                                FISH FARM
                            </span>
                        </Link>

                        <p className="footer-description">
                            Premium freshwater fish farm in Sri Lanka.
                            Healthy fish, natural environment and
                            quality you can trust.
                        </p>

                        <div className="footer-socials">

                            <a
                                href="#"
                                className="footer-social"
                                aria-label="Facebook"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                className="footer-social"
                                aria-label="Instagram"
                            >
                                ig
                            </a>

                            <a
                                href="#"
                                className="footer-social"
                                aria-label="YouTube"
                            >
                                ▶
                            </a>

                            <a
                                href="#"
                                className="footer-social"
                                aria-label="WhatsApp"
                            >
                                wa
                            </a>

                        </div>

                    </div>


                    {/* Quick Links */}
                    <div className="footer-column">

                        <h3>Quick Links</h3>

                        <ul>
                            {quickLinks.map((link) => (
                                <li key={link.name}>

                                    <Link to={link.path}>
                                        <span>→</span>
                                        {link.name}
                                    </Link>

                                </li>
                            ))}
                        </ul>

                    </div>


                    {/* Our Fish */}
                    <div className="footer-column">

                        <h3>Our Fish</h3>

                        <ul>
                            {fishLinks.map((fish) => (
                                <li key={fish}>

                                    <Link to="/fish">
                                        <span>→</span>
                                        {fish}
                                    </Link>

                                </li>
                            ))}
                        </ul>

                    </div>


                    {/* Contact */}
                    <div className="footer-column footer-contact">

                        <h3>Contact Info</h3>


                        {/* Phone */}
                        <div className="footer-contact-item">

                            <div className="footer-contact-icon">
                                ☎
                            </div>

                            <div>

                                <span>Call Us</span>

                                <a href="tel:+94771234567">
                                    +94 77 123 4567
                                </a>

                            </div>

                        </div>


                        {/* Email */}
                        <div className="footer-contact-item">

                            <div className="footer-contact-icon">
                                @
                            </div>

                            <div>

                                <span>Email Us</span>

                                <a href="mailto:info@palfishfarm.lk">
                                    info@palfishfarm.lk
                                </a>

                            </div>

                        </div>


                        {/* Location */}
                        <div className="footer-contact-item">

                            <div className="footer-contact-icon">
                                ◉
                            </div>

                            <div>

                                <span>Visit Us</span>

                                <p>
                                    Kurunegala, Sri Lanka
                                </p>

                            </div>

                        </div>


                        {/* Working Hours */}
                        <div className="footer-contact-item">

                            <div className="footer-contact-icon">
                                ◷
                            </div>

                            <div>

                                <span>Working Hours</span>

                                <p>
                                    Mon - Sun : 8:00 AM - 6:00 PM
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Bottom Bar */}
            <div className="footer-bottom">

                <div className="container footer-bottom-container">

                    <p>
                        © 2026 PAL Fish Farm. All Rights Reserved.
                    </p>

                    <p>
                        Designed with
                        <span className="footer-heart">
                            {" "}♥{" "}
                        </span>
                        for Quality Fish Farming
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;