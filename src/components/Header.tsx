import { useEffect, useState } from "react";

import logoWhite from "../assets/img/radici_logo_whitesvg.svg";
import logoDark from "../assets/img/radici_logo_black.svg";

type HeaderColor = "light" | "dark";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileColor, setMobileColor] = useState<HeaderColor>("light");

  useEffect(() => {
    function updateHeader() {
      setIsScrolled(window.scrollY > 60);

      const sections = document.querySelectorAll<HTMLElement>(
        "[data-header-color]",
      );

      const checkpoint = 80;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        const isUnderHeader =
          rect.top <= checkpoint && rect.bottom > checkpoint;

        if (!isUnderHeader) return;

        const color = section.dataset.headerColor;

        if (color === "light" || color === "dark") {
          setMobileColor(color);
        }
      });
    }

    updateHeader();

    window.addEventListener("scroll", updateHeader, {
      passive: true,
    });

    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  return (
    <header
      className={`header ${
        isScrolled ? "header--scrolled" : ""
      } header--mobile-${mobileColor}`}
    >
      <a className="header__logo" href="#home" aria-label="Radici - Home">
        <picture>
          <source
            media="(max-width:768px)"
            srcSet={mobileColor === "light" ? logoWhite : logoDark}
          />

          <img src={isScrolled ? logoDark : logoWhite} alt="Radici" />
        </picture>
      </a>
      <button className="header__menu" type="button" aria-label="Apri il menu">
        <span>MENU</span>
        <span className="header__menu-icon" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>
    </header>
  );
}

export default Header;
