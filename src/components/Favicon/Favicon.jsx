import { useEffect } from "react";

import logoDark from "../../assets/images/logo/logo-dark.png";
import logoLight from "../../assets/images/logo/logo-light.png";

function Favicon() {

    useEffect(() => {

        const updateFavicon = () => {

            const isDarkMode =
                document.body.classList.contains("theme-dark");

            const favicon = isDarkMode
                ? logoLight
                : logoDark;

            let link = document.querySelector(
                "link[rel~='icon']"
            );

            if (!link) {
                link = document.createElement("link");
                link.rel = "icon";
                document.head.appendChild(link);
            }

            link.type = "image/png";
            link.href = favicon;
        };

        updateFavicon();

        const observer = new MutationObserver(() => {
            updateFavicon();
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => {
            observer.disconnect();
        };

    }, []);

    return null;
}

export default Favicon;