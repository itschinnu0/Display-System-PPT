import "../../styles/OLED/slide4.css";

export function OLEDSlide4() {
  return (
    <section data-slide="4">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-7">
          <h1 className="content-title text-4xl mb-2">
            Types of <span className="qled-accent">OLED Technologies</span>
          </h1>
        </div>

        <div className="flex-grow px-16 py-4">
          <div className="grid grid-cols-2 gap-6 h-full">
            <div className="col-span-1">
              <div className="advantage-card delay-100 h-full">
                <div className="advantage-metric">PMOLED</div>
                <h3 className="text-xl font-semibold mb-2">v/s</h3>
                <div className="advantage-metric">AMOLED</div>
                <h3 className="text-xl font-semibold mt-6 mb-6">
                  Passive Matrix OLED (PMOLED) for simple displays,
                  <br></br>Active Matrix OLED (AMOLED) for high-resolution
                  applications with individual pixel control.
                </h3>
                <ul className="text-gray-300 mt-6 mb-6">
                  <li className="flex items-center m-4">
                    <i className="fas fa-check text-xs mr-2 text-blue-300"></i>
                    PMOLED: Simple structure, lower cost
                  </li>
                  <li className="flex items-center m-4">
                    <i className="fas fa-check text-xs mr-2 text-blue-300"></i>
                    AMOLED: Higher resolution, better performance
                  </li>
                  <li className="flex items-center m-4">
                    <i className="fas fa-check text-xs mr-2 text-blue-300"></i>
                    AMOLED: Used in smartphones and premium TVs
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-1">
              <div className="grid grid-rows-1 gap-6 h-full">
                <div className="advantage-card delay-200">
                  <div className="advantage-metric">Specialized OLED Types</div>
                  <h3 className="text-xl font-semibold mb-6 mt-6">
                    Advanced OLED variants designed for specific applications
                    and enhanced functionality.
                  </h3>
                  <ul className="text-gray-300 mt-10">
                    <li className="flex items-center m-4">
                      <i className="fas fa-check text-lg mr-2 text-blue-300"></i>
                      Transparent OLED: See-through displays
                    </li>
                    <li className="flex items-center m-4">
                      <i className="fas fa-check text-lg mr-2 text-blue-300"></i>
                      Top-Emitting OLED: Better efficiency
                    </li>
                    <li className="flex items-center m-4">
                      <i className="fas fa-check text-lg mr-2 text-blue-300"></i>
                      Flexible OLED: Bendable and foldable screens
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
