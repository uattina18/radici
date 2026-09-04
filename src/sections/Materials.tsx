import legnoImage from "../assets/img/materiale-legno.jpg";
import canapaImage from "../assets/img/materiale-canapa.jpg";
import pagliaImage from "../assets/img/materiale-paglia.jpg";
import sugheroImage from "../assets/img/materiale-sughero.jpg";
import calceImage from "../assets/img/materiale-calce.jpg";
import { useEffect, useRef, useState } from "react";

const materials = [
  {
    name: "Legno",
    description:
      "Strutture solide, rinnovabili e capaci di dialogare con il paesaggio.",
    image: legnoImage,
    imageAlt: "Struttura architettonica realizzata con travi in legno",
  },

  {
    name: "Canapa",
    description: "Isolante naturale, traspirante e resistente al fuoco.",
    image: canapaImage,
    imageAlt:
      "Parete in canapa realizzata all'interno di una struttura di legno.",
  },
  {
    name: "Paglia",
    description:
      "Isolamento naturale ad alte prestazioni, leggero e rinnovabile.",
    image: pagliaImage,
    imageAlt: "Posa della paglia isolante in una struttura edilizia in legno.",
  },
  {
    name: "Sughero",
    description:
      "Isolante naturale, durevole e ricavato dalla corteccia senza abbattere l'albero.",
    image: sugheroImage,
    imageAlt: "Produzione di blocchi in sughero destinati all'edilizia.",
  },
  {
    name: "Calce",
    description:
      "Finiture naturali e traspiranti, applicate con cura artigianale.",
    image: calceImage,
    imageAlt: "Operaio che applica una finitura murale con il frattazzo.",
  },
];

function Materials() {
  const [activeMaterial, setActiveMaterial] = useState<number | null>(0);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;
    const safeSection = section;
    const safeTrack = track;

    const desktop = window.matchMedia("(min-width: 769px)");
    let animationFrame = 0;

    function updateHorizontalScroll() {
      if (!desktop.matches) return;

      const sectionRect = safeSection.getBoundingClientRect();

      const scrollDistance = safeSection.offsetHeight - window.innerHeight;

      const maxHorizontalScroll = safeTrack.scrollWidth - safeTrack.clientWidth;

      if (scrollDistance <= 0 || maxHorizontalScroll <= 0) return;

      const rawProgress = -sectionRect.top / scrollDistance;

      const progress = Math.min(Math.max(rawProgress, 0), 1);

      safeTrack.scrollLeft = progress * maxHorizontalScroll;
    }

    function updateMeasurements() {
      if (!desktop.matches) {
        safeSection.style.height = "auto";
        safeTrack.scrollLeft = 0;
        return;
      }

      const maxHorizontalScroll = safeTrack.scrollWidth - safeTrack.clientWidth;

      safeSection.style.height = `${window.innerHeight + maxHorizontalScroll}px`;

      updateHorizontalScroll();
    }

    function handleScroll() {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(updateHorizontalScroll);
    }

    updateMeasurements();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateMeasurements);
    desktop.addEventListener("change", updateMeasurements);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateMeasurements);
      desktop.removeEventListener("change", updateMeasurements);

      safeSection.style.height = "";
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="materiali"
      className="materials"
      data-header-color="light"
      aria-labelledby="materials-title"
    >
      <div className="materials__sticky">
        <header className="materials__header">
          <p className="materials__label">Materiali</p>

          <h2 id="materials-title">La materia al centro</h2>

          <p>
            Materiali naturali scelti per costruire spazi sani, efficienti e
            destinati a durare.
          </p>
        </header>

        <div ref={trackRef} className="materials__track" data-lenis-prevent>
          {materials.map((material, index) => {
            const isActive = activeMaterial === index;

            return (
              <button
                className={`materials__card ${
                  isActive ? "materials__card--active" : ""
                }`}
                type="button"
                key={material.name}
                aria-expanded={isActive}
                aria-controls="material-description"
                onMouseEnter={() => setActiveMaterial(index)}
                onFocus={() => setActiveMaterial(index)}
                onClick={() => setActiveMaterial(index)}
              >
                <img src={material.image} alt={material.imageAlt} />
                <span className="materials__name">{material.name}</span>
              </button>
            );
          })}
        </div>
        <div
          id="material-description"
          className="materials__description"
          aria-live="polite"
        >
          {activeMaterial !== null && (
            <>
              <h3>{materials[activeMaterial].name}</h3>
              <p>{materials[activeMaterial].description}</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Materials;
