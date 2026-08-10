import { Link } from "react-router-dom";
import "./Footer.css";

import {
    Phone,
    Mail,
    MapPin,
    Clock3,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

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
                                href="https://www.facebook.com/profile.php?id=61556134812388"
                                className="footer-social"
                                aria-label="Facebook"
                                data-label="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebookF size={18} />
                            </a>

                            <a
                                href="#"
                                className="footer-social"
                                aria-label="Instagram"
                                data-label="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a
                                href="#"
                                className="footer-social"
                                aria-label="YouTube"
                                data-label="YouTube"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube size={18} />
                            </a>

                            <a
                                href="+94760769334"
                                className="footer-social"
                                aria-label="WhatsApp"
                                data-label="WhatsApp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaWhatsapp size={18} />
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
                                <Phone size={18} />
                            </div>

                            <div>

                                <span>Call Us</span>

                                <a href="tel:+94760769334">
                                    +94 76 076 9334
                                </a>

                            </div>

                        </div>


                        {/* Email */}
                        <div className="footer-contact-item">

                            <div className="footer-contact-icon">
                                <Mail size={18} />
                            </div>

                            <div>

                                <span>Email Us</span>

                                <a href="mailto:contact.palservice@gmail.com">
                                    contact.palservice@gmail.com
                                </a>

                            </div>

                        </div>


                        {/* Location */}
                        <div className="footer-contact-item">

                            <div className="footer-contact-icon">
                                <MapPin size={18} />
                            </div>

                            <div>

                                <span>Visit Us</span>

                                <a href="https://maps.app.goo.gl/ztNsXC4seWsqoeeF8">
                                    Negombo, Sri Lanka
                                </a>

                            </div>

                        </div>


                        {/* Working Hours */}
                        <div className="footer-contact-item">

                            <div className="footer-contact-icon">
                                <Clock3 size={18} />
                            </div>

                            <div>

                                <span>Working Hours</span>

                                <p>
                                    Mon - Sat : 8:00 AM - 6:00 PM
                                </p>

                            </div>

                        </div>

                        <a
                            href="https://maps.app.goo.gl/ztNsXC4seWsqoeeF8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-map"
                        >
                            <MapPin size={18} />
                            <span>View on Google Maps</span>
                        </a>

                    </div>

                </div>

            </div>


            {/* Bottom Bar */}
            <div className="footer-bottom">

                <div className="container footer-bottom-container">

                    <p>
                        © 2026 PAL Fish Farm. All Rights Reserved.
                    </p>



                </div>

            </div>

        </footer>
    );
}

export default Footer;