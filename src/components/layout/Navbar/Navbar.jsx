import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../ui/Logo/Logo";
import ThemeToggle from "../../ui/ThemeToggle/ThemeToggle";

function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar-container">

                <div className="navbar-logo">
                    <Logo />
                </div>

                <nav className="navbar-links">

                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        About Us
                    </NavLink>

                    <NavLink
                        to="/fish"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Our Fish
                    </NavLink>

                    <NavLink
                        to="/services"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to="/gallery"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Gallery
                    </NavLink>

                    <NavLink
                        to="/blog"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Blog
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Contact
                    </NavLink>

                </nav>

                <div className="navbar-right">

                    <ThemeToggle />

                </div>


            </div>
        </header>
    );
}

export default Navbar;