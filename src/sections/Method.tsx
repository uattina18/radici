import { useState } from "react";
import ascoltoImage from "../assets/img/metodo-ascolto.jpg";
import progettoImage from "../assets/img/metodo-progetto.jpg";
import cantiereImage from "../assets/img/metodo-cantiere.jpg";
import consegnaImage from "../assets/img/metodo-consegna.jpg";

const steps = [
  {
    number: "01",
    title: "Ascolto",
    description:
      "Comprendiamo esigenze, abitudini, caratteristiche del luogo e budget.",
    image: ascoltoImage,
    imageAlt: "Confronto iniziale con il cliente presso l'abitazione",
  },
  {
    number: "02",
    title: "Progetto",
    description:
      "Definiamo spazi, materiali e prestazioni per trovare il giusto equilibrio.",
    image: progettoImage,
    imageAlt: "Professionisti durante la fase di progettazione",
  },
  {
    number: "03",
    title: "Cantiere",
    description:
      "Coordiniamo lavorazioni, tempi e qualità con attenzione a ogni dettaglio.",
    image: cantiereImage,
    imageAlt: "Lavorazioni durante la fase di cantiere",
  },
  {
    number: "04",
    title: "Consegna",
    description:
      "La casa prende vita: efficiente, confortevole e costruita per durare.",
    image: consegnaImage,
    imageAlt: "Abitazione completata e pronta per essere vissuta",
  },
];

function Method() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="metodo"
      className="method"
      data-header-color="dark"
      aria-labelledby="method-title"
    >
      <header className="method__header">
        <h2 id="method-title">Il nostro metodo</h2>

        <p>Dall'ascolto alla casa, ogni fase è parte dello stesso progetto.</p>
      </header>
      <div className="method__body">
        <div className="method__image method__image--desktop">
          <img
            key={steps[activeStep].image}
            src={steps[activeStep].image}
            alt={steps[activeStep].imageAlt}
          />
        </div>

        <div className="method__steps">
          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <div
                className={`method__step ${
                  isActive ? "method__step--active" : ""
                }`}
                key={step.number}
              >
                <button
                  className="method__button"
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={`method-description-${index}`}
                  onClick={() => setActiveStep(index)}
                >
                  <span>{step.number}</span>
                  <span>{step.title}</span>
                </button>
                <div
                  id={`method-description-${index}`}
                  className={`method__description ${isActive ? "method__description--open" : ""}`}
                  aria-hidden={!isActive}
                >
                  <div className="method__description-inner">
                    <div className="method__image method__image--mobile">
                      <img src={step.image} alt={step.imageAlt} />
                    </div>
                    <p>{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Method;
