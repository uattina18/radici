import { useEffect, useRef, useState } from "react";
import manifestoImage from "../assets/img/manifesto-legno.jpg";

const manifestoText =
  "Crediamo in un'architettura che nasce dalla materia, dialoga con il paesaggio e dà forma a un modo più consapevole di abitare.";

const words = manifestoText.split(" ");

function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const revealedWords = Math.floor(progress * words.length);
  useEffect(() => {
    function updateReveal() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      const scrollDistance =
        sectionRef.current.offsetHeight - window.innerHeight;

      const rawProgress = -rect.top / (scrollDistance * 0.8);

      const limitedProgress = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(limitedProgress);
    }

    updateReveal();

    window.addEventListener("scroll", updateReveal, {
      passive: true,
    });

    window.addEventListener("resize", updateReveal);

    return () => {
      window.removeEventListener("scroll", updateReveal);
      window.removeEventListener("resize", updateReveal);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="manifesto"
      aria-labelledby="manifesto-title"
    >
      <div className="manifesto__sticky">
        <div className="manifesto__image">
          <img
            src={manifestoImage}
            alt="Pilastri strutturali realizzati in legno"
          />
        </div>
        <div className="manifesto__content">
          <p className="manifesto__label">Manifesto</p>

          <h2 id="manifesto-title" className="manifesto__text">
            {words.map((word, index) => (
              <span
                className={`manifesto__word ${
                  index < revealedWords ? "manifesto__word--revealed" : ""
                }`}
                key={`${word}-${index}`}
              >
                {word}{" "}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
export default Manifesto;
