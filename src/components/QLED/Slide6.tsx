import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "../../styles/QLED/slide6.css";

// CRITICAL: Must register ALL components you use
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function QLEDSlide6() {
  const data = {
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
  };

  const options = {
    indexAxis: "y" as const,
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
          label: function (context: any) {
            return context.dataset.label + ": " + context.parsed.x + "/10";
          },
        },
      },
    },
    animation: {
      duration: 1500,
      easing: "easeOutQuart" as const,
    },
  };

  return (
    <section data-slide="6">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        {/* Header section with title */}
        <div className="px-16 pt-7">
          <h1 className="content-title text-4xl mb-2">
            <span className="qled-accent">QLED</span> vs{" "}
            <span className="oled-accent">OLED</span>: Technology Comparison
          </h1>
        </div>

        {/* Chart section */}
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

          <div className="chart-container">
            <Bar data={data} options={options} />
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

        {/* Footer section */}
        <div className="px-16 py-4 mb-2">
          <p className="content-subtitle text-sm text-gray-400 text-center">
            Each technology has distinct advantages, making them suitable for
            different viewing environments and content types
          </p>
        </div>
      </div>
      
      {/* Speaker Notes */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 6:</h3>
        <ul>
          <li>
            QLED and OLED represent two distinct philosophies in display
            technology, each excelling in different scenarios.
          </li>
          <li>
            QLED's strengths: superior brightness reaching 4,000+ nits—ideal for
            bright rooms and HDR content. It has zero burn-in risk with
            inorganic quantum dots, longer lifespan, and more cost-effective
            manufacturing, especially at larger screen sizes.
          </li>
          <li>
            OLED's advantages: perfect black levels with pixel-level control
            delivering infinite contrast, faster response times for gaming,
            wider viewing angles, and better energy efficiency with typical
            content—making it perfect for dark-room cinematic experiences.
          </li>
          <li>
            Neither is objectively better. QLED dominates bright environments
            and offers durability. OLED wins for contrast and immersion in
            controlled lighting. Your choice depends on viewing environment and
            content preferences.
          </li>
        </ul>
      </aside>
    </section>
  );
}
