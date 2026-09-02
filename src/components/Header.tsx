import { useEffect, useState } from "react";
import logoWhite from "../assets/img/radici_logo_whitesvg.svg";
import logoDark from "../assets/img/radici_logo_black.svg";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <a className="header__logo" href="#home" aria-label="Radici- Home">
        <img src={isScrolled ? logoDark : logoWhite} alt="Radici" />
      </a>
      <button className="header__menu" type="button">
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
