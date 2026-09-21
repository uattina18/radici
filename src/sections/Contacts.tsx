import { useRef, useState, type FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Contacts() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".contacts__label", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
      })
        .from(
          ".contacts__intro h2",
          { opacity: 0, y: 36, duration: 0.7, ease: "power2.out" },
          "-=0.35",
        )
        .from(
          ".contacts__detail",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.3",
        )
        .from(
          ".contacts__form",
          { opacity: 0, y: 40, duration: 0.7, ease: "power3.out" },
          "-=0.5s",
        );
    },
    { scope: sectionRef },
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitted(true);
  }

  return (
    <section
      className="contacts"
      id="contatti"
      data-header-color="dark"
      aria-labelledby="contacts-title"
      ref={sectionRef}
    >
      <div className="contacts__intro">
        <p className="contacts__label">Contatti</p>

        <h2 id="contacts-title">
          Raccontateci
          <br />
          la vostra visione
        </h2>

        <p className="contacts__text">
          Parlateci del luogo, delle persone che lo abiteranno, dei materiali
          che vi appartengono: vi risponderemo per fissare un primo confronto.
        </p>
        <dl className="contacts__details">
          <div className="contacts__detail">
            <dt>Telefono</dt>
            <dd>
              <a href="tel:+390583123456">+39 0583 123 456</a>
            </dd>
          </div>

          <div className="contacts__detail">
            <dt>Email</dt>
            <dd>
              <a href="mailto:info@radiciarchitettura.it">
                info@radiciarchitettura.it
              </a>
            </dd>
          </div>

          <div className="contacts__detail">
            <dt>Social</dt>
            <dd>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="contacts__form">
        {isSubmitted ? (
          <div className="contact__form-success" role="status">
            <h3>Grazie!</h3>
            <p>
              Abbiamo ricevuto la vostra richiesta e vi risponderemo il prima
              possibile.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="contacts__field">
              <label htmlFor="contact-name">Nome e cognome</label>
              <input id="contact-name" name="name" type="text" required />
            </div>

            <div className="contacts__field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" required />
            </div>

            <div className="contacts__field">
              <label htmlFor="contact-message">Raccontateci il progetto</label>
              <textarea id="contact-message" name="message" rows={5} required />
            </div>

            <button className="contacts__submit" type="submit">
              Invia richiesta
              <span aria-hidden="true">→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contacts;
