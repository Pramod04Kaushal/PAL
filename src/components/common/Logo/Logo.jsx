import { useTheme } from "../../../context/ThemeContext";

import logoLight from "../../../assets/images/logo/logo-light.png";
import logoDark from "../../../assets/images/logo/logo-dark.png";

import "./Logo.css";

function Logo({ size = "medium" }) {

    const { theme } = useTheme();

    const logo = theme === "dark"
        ? logoLight
        : logoDark;

    return (
        <img
            src={logo}
            alt="PAL Fish Farm"
            className={`logo logo-${size}`}
        />
    );
}

export default Logo;
