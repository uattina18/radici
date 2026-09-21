const YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <p className="footer__logo">Radici</p>
          <p className="footer__tagline">
            Architettura nata dal luogo, pensata per durare nel tempo.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Naviga">
          <p className="footer__nav-title">Naviga</p>
          <a href="/#home">Home</a>
          <a href="/#manifesto">Manifesto</a>
          <a href="/#metodo">Metodo</a>
          <a href="/#materiali">Materiali</a>
          <a href="/progetti">Progetti</a>
          <a href="/#contatti">Contatti</a>
        </nav>

        <div className="footer__contacts">
          <p className="footer__nav-title">Contatti</p>
          <a href="mailto:info@radiciarchitettura.it">
            info@radiciarchitettura.it
          </a>
          <a href="tel:+390583123456">"tel:+390583123456"</a>
        </div>

        <div className="footer__social">
          <p className="footer__nav-title">Social</p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {YEAR} Radici. Tutti i diritti riservati.</p>
        <div className="footer__legal">
          <a href="/privacy">Privacy</a>
          <a href="/cookie">Cookie</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
