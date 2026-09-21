import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { setLenisInstance } from "../lib/lenis";

gsap.registerPlugin(ScrollTrigger);

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      anchors: true,
    });

    setLenisInstance(lenis);

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      setLenisInstance(null);
      lenis.destroy();
    };
  }, []);
  return null;
}

export default SmoothScroll;
