import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

import Hero from "./sections/Hero";
import Manifesto from "./sections/Manifesto";
import Method from "./sections/Method";
import Materials from "./sections/Materials";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import ProjectsPage from "./Pages/ProjectsPage";
import ProjectDetailPage from "./Pages/ProjectDetailPage";

import "./App.css";

function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Manifesto />
      <Method />
      <Materials />
      <Projects />
      <Contacts />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <a className="skip-link" href="#main-content">
          Vai al contenuto principale
        </a>

        <SmoothScroll />
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/progetti"
            element={
              <main id="main-content" tabIndex={-1}>
                <ProjectsPage />
              </main>
            }
          />

          <Route
            path="/progetti/:slug"
            element={
              <main id="main-content" tabIndex={-1}>
                <ProjectDetailPage />
              </main>
            }
          />
        </Routes>

        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;
