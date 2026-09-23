import { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../ui/Logo/Logo";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";

function Navbar() {

    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {

        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }

                });

            },
            {
                rootMargin: "-120px 0px -55% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };

    }, []);

    return (
        <header className="navbar">

            <div className="container navbar-container">

                <div className="navbar-logo">
                    <Logo />
                </div>

                <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>

                    <a
                        href="#home"
                        className={activeSection === "home" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className={activeSection === "about" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        About Us
                    </a>

                    <a
                        href="#fish"
                        className={activeSection === "fish" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Our Fish
                    </a>

                    <a
                        href="#services"
                        className={activeSection === "services" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Services
                    </a>

                    <a
                        href="#gallery"
                        className={activeSection === "gallery" ? "active" : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Gallery
                    </a>

                    <a href="#blog">

                        Blog
                    </a>

                    <a
                        href="#"
                        className={
                            activeSection === "contact"
                                ? "active"
                                : ""
                        }
                        onClick={(e) => {

                            e.preventDefault();

                            setActiveSection("contact");
                            setMenuOpen(false);

                            window.scrollTo({
                                top: document.documentElement.scrollHeight,
                                behavior: "smooth",
                            });

                        }}
                    >
                        Contact
                    </a>

                </nav>

                <div className="navbar-right">

                    <ThemeToggle />

                    <button
                        className={`navbar-menu-button ${menuOpen ? "open" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                </div>

            </div>

        </header>
    );
}

export default Navbar;