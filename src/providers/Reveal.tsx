import React, { useEffect, useRef } from "react";

import Reveal from "reveal.js";
// import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import "../styles/main.css";
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

    document.documentElement.classList.add("reveal-full-page");

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
      backgroundTransition: "fade",

      // Layout
      disableLayout: true,
      width: "100%",
      height: "100%",
      margin: 0,
      minScale: 1,
      maxScale: 1,

      plugins: [
        RevealSpeakerView,
        RevealSpeakerNotes,
        RevealSearch,
        RevealMarkdown,
        RevealHighlight,
      ],
    });

    deckRef.current?.initialize().then(() => {
      console.log("Reveal.js initialized!");
      console.log("Press 'S' for Speaker View");

      // Nuclear option: Disable reveal.js sync method temporarily
      const originalSync = deckRef.current?.sync;
      deckRef.current!.sync = function () {
        originalSync!.call(this);

        // After every sync, remove transforms
        requestAnimationFrame(() => {
          const slides = document.querySelectorAll(".reveal .slides section");
          slides.forEach((slide: any) => {
            slide.style.transform = "none";
            slide.style.transformOrigin = "0 0";
          });

          const slidesContainer = document.querySelector(".reveal .slides");
          if (slidesContainer) {
            //@ts-ignore
            slidesContainer.style.transform = "none";
            //@ts-ignore
            slidesContainer.style.transformOrigin = "0 0";
          }
        });
      };

      // Initial cleanup
      setTimeout(() => {
        const slides = document.querySelectorAll(".reveal .slides section");
        slides.forEach((slide: any) => {
          slide.style.transform = "none";
          slide.style.transformOrigin = "0 0";
        });
      }, 100);

      // Animation restart on slide change
      deckRef.current?.on("slidechanged", (event: any) => {
        console.log("Slide changed to:", event.indexh);

        const currentSlide = event.currentSlide;
        if (!currentSlide) return;

        // Force remove transforms
        currentSlide.style.transform = "none";
        currentSlide.style.transformOrigin = "0 0";

        // Restart animations
        requestAnimationFrame(() => {
          const animatedElements =
            currentSlide.querySelectorAll('[class*="styles"]');

          animatedElements.forEach((element: any) => {
            const computed = window.getComputedStyle(element);
            if (computed.animationName && computed.animationName !== "none") {
              element.style.animation = "none";
              void element.offsetHeight; // Force reflow
              element.style.animation = "";
            }
          });
        });
      });
    });

    // Handle window resize
    const handleResize = () => {
      if (deckRef.current) {
        deckRef.current.layout();

        setTimeout(() => {
          const slides = document.querySelectorAll(".reveal .slides section");
          slides.forEach((slide: any) => {
            slide.style.transform = "none";
          });
        }, 50);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.documentElement.classList.remove("reveal-full-page");
      window.removeEventListener("resize", handleResize);
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

  return (
    <>
      <div ref={deckDivRef} className="reveal">
        <div className="slides">{children}</div>
      </div>
    </>
  );
};

export { RevealProvider };
