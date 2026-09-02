import heroPoster from "../assets/img/hero-poster.png";
import heroVideo from "../assets/video/hero.mp4";

function Hero() {
  return (
    <section id="home" className="hero">
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1>
          Abitare il futuro,
          <br />
          partendo dalle radici.
        </h1>
        <p>
          Architettura naturale, precisione costruttiva
          <br />e nuovi modi di abitare.
        </p>

        <a className="hero__cta" href="#manifesto">
          Esplora Radici <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
