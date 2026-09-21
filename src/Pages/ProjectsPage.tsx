import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Observer } from "gsap/Observer";

gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin, ScrollTrigger);

import { projects } from "../data/projects";

function ProjectsPage() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slider = sliderRef.current;
      const track = trackRef.current;

      if (!slider || !track) return;

      const media = gsap.matchMedia();

      media.add("(min-width: 769px)", () => {
        const getDistance = () => {
          const lastProject = track.lastElementChild as HTMLElement | null;

          if (!lastProject) return 0;

          const centeredPosition =
            lastProject.offsetLeft -
            (slider.clientWidth - lastProject.offsetWidth) / 2;

          return Math.max(0, centeredPosition);
        };

        const HOLD_DISTANCE = 400;

        const horizontalTween = gsap
          .timeline({ paused: true })
          .to(track, {
            x: () => -getDistance(),
            ease: "none",
            duration: () => getDistance(),
          })
          .to(track, {
            x: () => -getDistance(),
            duration: HOLD_DISTANCE,
          });

        const scrollTrigger = ScrollTrigger.create({
          trigger: slider,
          start: "top 50px",
          end: () => `+=${getDistance() + HOLD_DISTANCE}`,
          pin: true,
          scrub: 1,
          animation: horizontalTween,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        });

        const images = Array.from(track.querySelectorAll("img"));
        const imagesReady = images.map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise<void>((resolve) => {
                img.addEventListener("load", () => resolve(), { once: true });
                img.addEventListener("error", () => resolve(), { once: true });
              }),
        );

        const fontsReady =
          "fonts" in document ? document.fonts.ready : Promise.resolve();

        Promise.all([fontsReady, ...imagesReady]).then(() => {
          requestAnimationFrame(() => {
            ScrollTrigger.refresh();
          });
        });

        const proxy = document.createElement("div");

        const updateScrollFromDrag = function (this: Draggable) {
          const distance = getDistance();

          if (distance <= 0) return;

          const progress = gsap.utils.clamp(0, 1, -this.x / distance);

          const scrollPosition =
            scrollTrigger.start +
            progress * (scrollTrigger.end - scrollTrigger.start);

          scrollTrigger.scroll(scrollPosition);
        };

        const draggable = Draggable.create(proxy, {
          type: "x",
          trigger: slider,
          inertia: true,
          dragClickables: true,
          cursor: "grab",
          activeCursor: "grabbing",

          onPress() {
            gsap.set(proxy, {
              x: -scrollTrigger.progress * getDistance(),
            });
            this.update();
          },
          onDrag: updateScrollFromDrag,
          onThrowUpdate: updateScrollFromDrag,
        })[0];
        return () => {
          draggable.kill();
          scrollTrigger.kill();
          horizontalTween.kill();
        };
      });

      return () => media.revert();
    },
    { scope: sliderRef },
  );
  return (
    <section
      className="projects-page"
      data-header-color="dark"
      aria-labelledby="projects-page-title"
    >
      <header className="projects-page__hero">
        <div className="projects-page__top">
          <p>Archivio progetti</p>

          <Link to="/">
            <span aria-hidden="true">←</span>
            Torna alla home
          </Link>
        </div>

        <h1 id="projects-page-title">
          Architetture
          <span>nate dal luogo</span>
        </h1>

        <div className="projects-page__intro">
          <p>
            Abitazioni progettate attraverso l’ascolto del paesaggio, delle
            persone e dei materiali.
          </p>

          <p>
            Una raccolta di spazi capaci di evolvere nel tempo e mantenere un
            legame autentico con il territorio.
          </p>
        </div>
      </header>
      <div className="projects-page__list" ref={sliderRef} data-lenis-prevent>
        <div className="projects-page__track" ref={trackRef}>
          {projects.map((project) => (
            <article className="projects-page__project" key={project.slug}>
              <img
                className="projects-page__project-image"
                src={project.image}
                alt={project.imageAlt}
                draggable={false}
              />

              <div className="projects-page__project-info">
                <div>
                  <p>
                    {project.id} · {project.category}
                  </p>
                  <h2>{project.name}</h2>
                </div>
                <Link
                  className="projects__cta projects-page__cta"
                  to={`/progetti/${project.slug}`}
                >
                  Esplora il progetto
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
