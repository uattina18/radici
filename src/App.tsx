import Header from "./components/Header";
import Hero from "./sections/Hero";
import Manifesto from "./sections/Manifesto";
import SmoothScroll from "./components/SmoothScroll";
import Method from "./sections/Method";
import "./App.css";

function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main-content">
        Vai al contenuto principale
      </a>
      <SmoothScroll />
      <Header />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Manifesto />
        <Method />
      </main>
    </div>
  );
}

export default App;
