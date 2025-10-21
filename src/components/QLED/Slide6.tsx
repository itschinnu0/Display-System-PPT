import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import "../../styles/QLED/slide6.css";

export function QLEDSlide6() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initChart = () => {
      if (!chartRef.current || !containerRef.current) {
        console.log("Refs not ready");
        return false;
      }

      // Force container to have dimensions
      const container = containerRef.current;
      const width = container.offsetWidth;
      const height = container.offsetHeight;

      console.log("Container dimensions:", width, height);

      if (width === 0 || height === 0) {
        console.log("Container has zero dimensions, waiting...");
        return false;
      }

      const ctx = chartRef.current.getContext("2d");
      if (!ctx) {
        console.log("No context");
        return false;
      }

      // Destroy existing chart
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }

      console.log("Creating chart now...");

      chartInstanceRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Peak Brightness",
            "Color Accuracy",
            "Black Levels",
            "Energy Efficiency",
            "View Angles",
            "Burn Resistance",
            "Cost Effectiveness",
            "Lifespan",
            "Gaming Performance",
          ],
          datasets: [
            {
              label: "QLED",
              data: [9, 8, 7, 8, 6, 10, 8, 9, 7],
              backgroundColor: "#00b2e3",
              borderWidth: 0,
            },
            {
              label: "OLED",
              data: [7, 9, 10, 9, 9, 6, 6, 7, 9],
              backgroundColor: "#e3506e",
              borderWidth: 0,
            },
          ],
        },
        options: {
          indexAxis: "y",
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              min: 0,
              max: 10,
              grid: {
                color: "rgba(255, 255, 255, 0.1)",
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.7)",
              },
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                color: "rgba(255, 255, 255, 0.7)",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return context.dataset.label + ": " + context.parsed.x + "/10";
                },
              },
            },
          },
          animation: {
            duration: 1500,
            easing: "easeOutQuart",
          },
        },
      });

      console.log("Chart created:", chartInstanceRef.current);
      return true;
    };

    // Try multiple times with delays
    const attempts = [100, 300, 500, 1000, 1500, 2000];
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    attempts.forEach((delay) => {
      const timeout = setTimeout(() => {
        if (!chartInstanceRef.current) {
          console.log(`Attempt at ${delay}ms`);
          initChart();
        }
      }, delay);
      timeouts.push(timeout);
    });

    // Listen for reveal.js events if available
    const handleSlideChanged = () => {
      console.log("Slide changed event");
      setTimeout(() => {
        if (!chartInstanceRef.current) {
          initChart();
        }
      }, 100);
    };

    // Check if Reveal is available
    const checkReveal = setInterval(() => {
      const revealElement = document.querySelector('.reveal');
      if (revealElement) {
        revealElement.addEventListener('slidechanged', handleSlideChanged as EventListener);
        clearInterval(checkReveal);
      }
    }, 100);

    return () => {
      timeouts.forEach((t) => clearTimeout(t));
      clearInterval(checkReveal);
      const revealElement = document.querySelector('.reveal');
      if (revealElement) {
        revealElement.removeEventListener('slidechanged', handleSlideChanged as EventListener);
      }
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section data-slide="6">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-7">
          <h1 className="content-title text-4xl mb-2">
            <span className="qled-accent">QLED</span> vs{" "}
            <span className="oled-accent">OLED</span>: Technology Comparison
          </h1>
        </div>

        <div className="flex-grow px-16 py-2">
          <div className="flex justify-center items-center mb-4">
            <div className="chart-legend-item">
              <div className="legend-color qled-color"></div>
              <span>QLED</span>
            </div>
            <div className="chart-legend-item">
              <div className="legend-color oled-color"></div>
              <span>OLED</span>
            </div>
          </div>

          <div className="chart-container" ref={containerRef}>
            <canvas ref={chartRef}></canvas>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="comparison-item delay-100 bg-opacity-30 bg-blue-900 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 qled-accent">
                <i className="fas fa-check-circle mr-2"></i>QLED Advantages
              </h3>
              <ul className="text-sm text-gray-300 list-disc pl-5">
                <li>Superior brightness (up to 4,000+ nits)</li>
                <li>Longer lifespan with consistent performance</li>
                <li>Better burn-in resistance for static content</li>
                <li>More cost-effective manufacturing</li>
                <li>Ideal for bright rooms and HDR content</li>
              </ul>
            </div>
            <div className="comparison-item delay-200 bg-opacity-30 bg-red-900 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 oled-accent">
                <i className="fas fa-check-circle mr-2"></i>OLED Advantages
              </h3>
              <ul className="text-sm text-gray-300 list-disc pl-5">
                <li>Perfect black levels (pixel-level dimming)</li>
                <li>Superior gaming performance (faster response)</li>
                <li>Better viewing angles for wider seating</li>
                <li>More energy efficient in typical content</li>
                <li>Ideal for dark room movie watching</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-16 py-4 mb-2">
          <p className="content-subtitle text-sm text-gray-400 text-center">
            Each technology has distinct advantages, making them suitable for
            different viewing environments and content types
          </p>
        </div>
      </div>
    </section>
  );
}
