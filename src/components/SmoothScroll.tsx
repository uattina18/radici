import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      anchors: true,
    });

    // Ogni volta che Lenis aggiorna lo scroll, avvisa ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Fai girare Lenis dentro al ciclo di GSAP, non per conto suo
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);

    // Evita che GSAP "salti" dei frame per recuperare ritardi:
    // con Lenis attivo questo causerebbe scatti, meglio disattivarlo
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
  return null;
}

export default SmoothScroll;
