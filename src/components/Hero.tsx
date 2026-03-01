export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/bg_image_home.png"
          alt="Vidhata students and volunteers"
          className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
          style={{ objectPosition: "center 35%" }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3638]/85 via-[#2c4f52]/75 to-[#5B8A8D]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f21]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-32">
          <h1
            className="text-white font-semibold mb-6"
            style={{
              fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)",
              lineHeight: "1.1",
              textShadow:
                "0 6px 20px rgba(0,0,0,0.6), 0 3px 8px rgba(0,0,0,0.5)",
            }}
          >
            Empowering Students Through
            <span
              className="block text-[#FFB199] mt-2"
              style={{
                fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)",
                textShadow:
                  "0 6px 20px rgba(0,0,0,0.7), 0 3px 8px rgba(0,0,0,0.6)",
              }}
            >
              Holistic Learning
            </span>
          </h1>

          <p
            className="text-white max-w-3xl mx-auto leading-relaxed mb-8"
            style={{
              fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)",
              textShadow: "0 4px 12px rgba(0,0,0,0.6)",
            }}
          >
            We provide structured non-academic and skill-based learning to
            foster holistic development among underserved students through a
            streamlined volunteering gateway across Nepal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("#get-involved")}
              className="h-12 px-8 text-lg rounded-xl bg-[#EA8166] text-white shadow-xl hover:bg-[#d4653f] hover:scale-105 transition-all"
            >
              Get Involved
            </button>

            <a
              href="#about"
              className="h-12 px-8 text-lg rounded-xl bg-white text-gray-700 border hover:bg-gray-100 hover:scale-105 transition-all flex items-center"
            >
              Learn more ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
