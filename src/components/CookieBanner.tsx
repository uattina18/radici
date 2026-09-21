import { useState } from "react";

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-label="Informativa cookie"
    >
      <p>
        Questo sito utilizza cookie tecnici necessari al suo funzionamento.
        Continuando a navigazione accetti il loro utilizzo.
      </p>
      <button
        className="cookie-banner__accept"
        type="button"
        onClick={() => setIsVisible(false)}
      >
        Accetta
      </button>
    </div>
  );
}

export default CookieBanner;
