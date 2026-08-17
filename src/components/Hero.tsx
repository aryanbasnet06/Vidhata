import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section
      className="relative w-full h-screen min-h-[100vh] overflow-hidden flex items-center"
      aria-label="Hero"
    >
      {/* Full-screen background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/bg_image_home.png"
          alt="Vidhata students and volunteers learning together"
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />

        {/* Main teal overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(135deg, rgba(26,54,56,0.82) 0%, rgba(44,79,82,0.72) 50%, rgba(91,138,141,0.65) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Bottom gradient for better text contrast */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to top, rgba(13,31,33,0.78) 0%, rgba(13,31,33,0.18) 45%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full h-full flex items-center animate-fade-in">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center text-center">
          <div className="w-full flex flex-col items-center justify-center">
            <h1
              className="text-white font-bold text-center m-0 p-0 w-full hero-heading"
              style={{
                fontSize: "clamp(2rem, 5.5vw, 4.25rem)",
                lineHeight: "1.12",
                letterSpacing: "-0.025em",
                textShadow:
                  "0 5px 16px rgba(0,0,0,0.60), 0 2px 6px rgba(0,0,0,0.45)",
              }}
            >
              <span className="block">Empowering Students Through</span>

              <span
                className="block text-vidhata-coral-light mt-1.5 sm:mt-2"
                style={{
                  textShadow:
                    "0 5px 16px rgba(0,0,0,0.65), 0 2px 6px rgba(0,0,0,0.50)",
                }}
              >
                Holistic Learning
              </span>
            </h1>

            <p
              className="w-full max-w-[820px] mx-auto text-white text-center mt-5 sm:mt-6 lg:mt-7 mb-0 px-2 sm:px-4"
              style={{
                fontSize: "clamp(1rem, 1.7vw, 1.3rem)",
                lineHeight: "1.55",
                textShadow: "0 3px 10px rgba(0,0,0,0.60)",
              }}
            >
              We provide structured non-academic and skill-based learning to
              foster holistic development among underserved students through a
              streamlined volunteering gateway across Nepal.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-8 lg:mt-10 w-full max-w-md sm:max-w-none">
              <Link
                to="/join-us"
                className="inline-flex items-center justify-center rounded-xl bg-vidhata-coral text-white shadow-lg hover:bg-vidhata-coral-dark hover:scale-[1.02] transition-all duration-200 h-12 px-6 sm:min-w-[145px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Get Involved
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-xl bg-white text-gray-700 border border-gray-200 shadow-md hover:bg-gray-50 hover:scale-[1.02] transition-all duration-200 h-12 px-6 sm:min-w-[155px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vidhata-teal focus-visible:ring-offset-2"
              >
                Learn more ↓
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}