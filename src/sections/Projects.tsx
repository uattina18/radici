import { useState } from "react";
import villaCover from "../assets/img/villa-alessandra-cover.jpg";
import villaPlan from "../assets/img/villa-alessandra-planimetria.jpg";
import villaScala from "../assets/img/villa-alessandra-scala.jpg";
import villaTerrazza from "../assets/img/villa-alessandra-terrazza.jpg";
import villaSuite from "../assets/img/villa-alessandra-suite.jpg";

const projectAreas = [
  {
    id: "scala",
    name: "Scala e connessioni",
    description:
      "La scala centrale collega i due livelli e diventa un elemento protagonista dello spazio.",
    image: villaScala,
    imageAlt:
      "Scala interna di Villa Alessandra con struttura scura e parapetti in vetro.",
  },

  {
    id: "suite",
    name: "Suite principale",
    description:
      "Uno spazio intimo e luminoso, caratterizzato da materiali naturali e grandi aperture.",
    image: villaSuite,
    imageAlt:
      "Suite principale di Villa Alessandra con arredi in legno e ampie vetrate.",
  },
  {
    id: "terrazza",
    name: "Terrazza",
    description:
      "Uno spazio esterno continuo che amplia gli ambienti del piano superiore.",
    image: villaTerrazza,
    imageAlt: "Terrazza al piano superiore di villa Alessandra.",
  },
];

function Projects() {
  const [activeArea, setActiveArea] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);

  const selectedArea = projectAreas[activeArea];

  return (
    <section
      id="progetti"
      className="projects"
      data-header-color="dark"
      aria-labelledby="projects-title"
    >
      <header className="projects__header">
        <p className="projects__label">Progetti</p>

        <h2 id="projects-title">Progetti nati dal luogo</h2>

        <p>
          Spazi progettati partendo dalle persone, dal paesaggio e dai
          materiali.
        </p>
      </header>

      <article className="project">
        <div className="project__intro">
          <div>
            <p className="project__number">01</p>
            <h3>Villa Alessandra</h3>
          </div>
          <p>Abitazione privata - Nuova costruzione</p>
        </div>

        <img
          className="project__cover"
          src={villaCover}
          alt="Vista esterna di Villa Alessandra immersa nel verde"
        />
        <div className="project__expl">
          <div className="project__plan">
            <img
              src={villaPlan}
              alt="Planimetria illustrativa di Villa Alessandra"
            />

            {projectAreas.map((area, index) => {
              const isActive = activeArea === index;

              return (
                <button
                  className={`project__hotspot project__hotspot--${area.id} ${
                    isActive ? "project__hotspot--active" : ""
                  }`}
                  type="button"
                  key={area.id}
                  aria-label={`Scopri: ${area.name}`}
                  aria-pressed={isActive}
                  onClick={() => setActiveArea(index)}
                >
                  <span aria-hidden="true">+</span>
                </button>
              );
            })}
          </div>
          <div className="project__detail">
            <button
              className="project__detail-button"
              type="button"
              onClick={() => setIsImageOpen(true)}
              aria-label={`Ingrandisci l'immagine: ${selectedArea.name}`}
            >
              <img
                className={`project__detail-image project__detail-image--${selectedArea.id}`}
                key={selectedArea.image}
                src={selectedArea.image}
                alt={selectedArea.imageAlt}
              />
            </button>
            <div>
              <h4>{selectedArea.name}</h4>
              <p>{selectedArea.description}</p>
            </div>
          </div>
        </div>
      </article>

      <a className="projects__cta" href="/progetti">
        Scopri tutti i progetti
        <span aria-hidden="true">→</span>
      </a>

      {isImageOpen && (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Immagine ingrandita: ${selectedArea.name}`}
          onClick={() => setIsImageOpen(false)}
        >
          <button
            className="project-lightbox__close"
            type="button"
            aria-label="Chiudi l'immagine"
            onClick={() => setIsImageOpen(false)}
          >
            x
          </button>

          <img
            src={selectedArea.image}
            alt={selectedArea.imageAlt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
export default Projects;
