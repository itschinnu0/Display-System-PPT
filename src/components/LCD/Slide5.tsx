import "../../styles/LCD/slide5.css";

export function LCDSlide5() {
  return (
    <section data-slide="2">
      <div className="slide-container flex flex-col">
        <div className="background-overlay"></div>
        <div className="tech-circle tech-circle-1"></div>
        <div className="tech-circle tech-circle-2"></div>

        <div className="px-16 pt-12">
          <h1 className="section-title text-4xl mb-2">
            Liquid Crystals <span className="qled-accent">All Around Us!</span>
          </h1>
        </div>

        <div className="flex-grow px-16 py-4">
          <div className="grid grid-rows gap-6">
            <div className="advantage-card p-5 rounded-lg delay-100">
              <p className="text-white-300">
                Liquid crystals are fascinating substances that behave like both
                solids and liquids at the same time. Their molecules flow freely
                like a liquid but maintain a certain order like a solid crystal.
              </p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-200">
              <p className="text-white-300">
                They're not just inside our screens — they're everywhere around
                us! Thermochromic mood rings, digital thermometers, and even
                simple calculators use liquid crystals to display information.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6 mt-6">
            <div className="advantage-card p-5 rounded-lg delay-300">
              <div className="flex items-center justify-center mb-2">
                <h3 className="text-2xl mr-3 mt-1">💍</h3>
                <h3 className="text-xl font-semibold text-center">Mood Rings</h3>
              </div>
              <p className="text-gray-300">Color-changing jewelry</p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-300">
              <div className="flex items-center justify-center mb-2">
                <h3 className="text-2xl mr-3 mt-1">🌡️</h3>
                <h3 className="text-xl font-semibold text-center">Thermometers</h3>
              </div>
              <p className="text-gray-300">Digital temperature displays</p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-300">
              <div className="flex items-center justify-center mb-2">
                <h3 className="text-2xl mr-3 mt-1">🔢</h3>
                <h3 className="text-xl font-semibold text-center">Calculators</h3>
              </div>
              <p className="text-gray-300">Simple LCD screens</p>
            </div>
            <div className="advantage-card p-5 rounded-lg delay-300">
              <div className="flex items-center justify-center mb-2">
                <h3 className="text-2xl mr-3 mt-1">⌚</h3>
                <h3 className="text-xl font-semibold text-center">Digital Watches</h3>
              </div>
              <p className="text-gray-300">Time displays</p>
            </div>
          </div>
          <div className="advantage-card p-5 rounded-lg mt-6 delay-500">
            <div className="flex items-center justify-center mb-2">
              <h3 className="text-2xl mr-3 mt-1">💡</h3>
              <h3 className="text-xl font-semibold text-center">
                So, the next time you see a brilliant shimmer of color in
                nature, remember — that's a liquid crystal effect in action!
              </h3>
            </div>
          </div>
        </div>
        <div className="px-16 py-4 mt-2">
          <p className="section-subtitle text-gray-400 text-center">
            The bright colors of butterfly wings, beetle shells, and peacock
            feathers come from crystal-like molecular arrangements.
          </p>
        </div>
      </div>

      {/* Speaker Notes */}
      <aside className="notes">
        <h3>Speaker Notes for Slide 2:</h3>
        <ul>
          <li>Welcome the audience</li>
          <li>Introduce QLED technology overview</li>
          <li>Mention quantum dots, performance, and innovations</li>
          <li>Estimated time: 2 minutes</li>
        </ul>
      </aside>
    </section>
  );
}
