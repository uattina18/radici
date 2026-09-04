import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.08,
      smoothWheel: true,
      anchors: true,        
    });
    return () => {
      lenis.destroy();
    };
  }, []);
  return null;
}

export default SmoothScroll;
