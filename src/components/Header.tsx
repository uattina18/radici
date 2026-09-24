import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { scrollToTop } from "../lib/lenis";
import ThemeToggle from "./ThemeToggle";

import logoWhite from "../assets/img/radici_logo_whitesvg.svg";
import logoDark from "../assets/img/radici_logo_black.svg";

function getIsDarkTheme() {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem("radici-theme");
  if (saved === "dark") return true;
  if (saved === "light") return false;

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

type HeaderColor = "light" | "dark";

const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Manifesto", href: "/#manifesto" },
  { label: "Metodo", href: "/#metodo" },
  { label: "Materiali", href: "/#materiali" },
  { label: "Progetti", href: "/progetti" },
  { label: "Contatti", href: "/#contatti" },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileColor, setMobileColor] = useState<HeaderColor>("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(getIsDarkTheme);
  const location = useLocation();

  useEffect(() => {
    function updateHeader() {
      const scrolled = window.scrollY > 60;
      setIsScrolled(scrolled);

      const sections = document.querySelectorAll<HTMLElement>(
        "[data-header-color]",
      );

      if (sections.length === 0) {
        setMobileColor(scrolled ? "dark" : "light");
        return;
      }

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

    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkTheme(getIsDarkTheme());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Chiude il menu ogni volta che cambia pagina

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [location]);

  // Blocca lo scroll del body quando il menu è aperto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`header ${
          isScrolled || isMenuOpen ? "header--scrolled" : ""
        } header--mobile-${isMenuOpen ? "dark" : mobileColor}`}
      >
        <Link
          className="header__logo"
          to="/"
          aria-label="Radici - Home"
          onClick={(event) => {
            if (location.pathname === "/") {
              event.preventDefault();
              scrollToTop();
            }
          }}
        >
          <picture>
            <source
              media="(max-width:768px)"
              srcSet={
                isDarkTheme
                  ? logoWhite
                  : (isMenuOpen ? "dark" : mobileColor) === "light"
                    ? logoWhite
                    : logoDark
              }
            />
            <img
              src={
                isDarkTheme
                  ? logoWhite
                  : isScrolled || isMenuOpen
                    ? logoDark
                    : logoWhite
              }
              alt="Radici"
            />
          </picture>
        </Link>

        <div className="header__controls">
          <ThemeToggle />

          <button
            className="header__menu"
            type="button"
            aria-label={isMenuOpen ? "Chiudi il menu" : "Apri il menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span>{isMenuOpen ? "Chiudi" : "Menu"}</span>
            <span
              className={`header__menu-icon ${
                isMenuOpen ? "header__menu-icon--open" : ""
              }`}
              aria-hidden="true"
            >
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <nav
        className={`nav-overlay ${isMenuOpen ? "nav-overlay--open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="nav-overlay__list">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href} className="nav-overlay__item">
              {link.href.startsWith("/#") ? (
                <a
                  href={link.href}
                  className="nav-overlay__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="nav-overlay__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="nav-overlay__link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="nav-overlay__index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-overlay__footer">
          <p>info@radiciarchitettura.it</p>
          <p>+39 0583 123 456</p>
        </div>
      </nav>
    </>
  );
}

export default Header;
