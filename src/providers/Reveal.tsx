import React, { useEffect, useRef } from "react";

import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
// import "reveal.js/dist/theme/black.css";
import RevealSearch from "reveal.js/plugin/search/search.js";
import RevealSpeakerView from "reveal.js/plugin/zoom/zoom.js";
import RevealSpeakerNotes from "reveal.js/plugin/notes/notes.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.js";

const RevealProvider = ({ children }: React.PropsWithChildren) => {
  const deckDivRef = useRef<HTMLDivElement>(null);
  const deckRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      // Display
      controls: "speaker-only",
      progress: true,
      hash: true,

      // Navigation
      keyboard: true,
      overview: true,
      center: false,
      touch: true,
      loop: false,
      rtl: false,

      // Transitions
      transition: "fade",
      transitionSpeed: "default",
      backgroundTransition: "slide",

      // Layout
      disableLayout: true,
      width: "100%",
      height: "100%",
      margin: 0,
      minScale: 1,
      maxScale: 1,

      //PDF
      pdfMaxPagesPerSlide: 1,
      pdfSeparateFragments: false,
      // view: "print",

      plugins: [
        RevealSpeakerView,
        RevealSpeakerNotes,
        RevealSearch,
        RevealMarkdown,
        RevealHighlight,
      ],
    });

    deckRef.current.initialize().then(() => {
      console.log("Reveal.js initialized!");

      deckRef.current!.on("slidechanged", (event: any) => {
        restartSlideAnimations(event.currentSlide);
      });

      const currentSlide = deckRef.current!.getCurrentSlide();
      if (currentSlide) {
        restartSlideAnimations(currentSlide);
      }
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);

  const restartSlideAnimations = (slide: any) => {
    if (!slide) return;

    const slideContainer = slide.querySelector(".slide-container");
    if (!slideContainer) return;

    // Check if this slide contains a Chart.js canvas
    const hasChart = slideContainer.querySelector(".chart-container canvas");

    if (hasChart) {
      const animatedElements = slideContainer.querySelectorAll(
        ".content-title, .content-subtitle, .comparison-item, .tech-circle, .background-overlay, .chart-container canvas"
      );

      animatedElements.forEach((element: any) => {
        const animationName = window.getComputedStyle(element).animationName;

        if (animationName && animationName !== "none") {
          element.style.animation = "none";
          element.offsetHeight;
          element.style.animation = "";
        }
      });
    } else {
      const clone = slideContainer.cloneNode(true);
      slideContainer.parentNode.replaceChild(clone, slideContainer);
    }
  };

  return (
    <>
      <div ref={deckDivRef} className="reveal">
        <div className="slides">{children}</div>
      </div>
    </>
  );
};

export { RevealProvider };
