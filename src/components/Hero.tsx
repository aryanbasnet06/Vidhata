import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

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

            {/* Heading */}
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
              <span className="block">
                Empowering Students Through
              </span>

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

            {/* Description */}
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

            {/* CTA Buttons */}
            <div className="hero-buttons">

              {/* Get Involved */}
              <Link
                to="/join-us"
                className="hero-button hero-button-primary"
              >
                Get Involved
              </Link>

              {/* Learn More */}
              <Link
                to="/about"
                className="hero-button hero-button-secondary"
              >
                <span>Learn more</span>

                <ArrowDown className="hero-button-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive button CSS */}
      <style>{`
        /* ==========================================
           BUTTON CONTAINER
           ========================================== */

        .hero-buttons {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 18px;

          width: 100%;

          margin-top: 44px;
        }

        /* ==========================================
           BASE BUTTON
           ========================================== */

        .hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          box-sizing: border-box;

          height: 62px;

          border-radius: 9999px;

          font-size: 17px;
          font-weight: 600;

          line-height: 1;

          text-decoration: none;

          white-space: nowrap;

          transition:
            transform 200ms ease,
            box-shadow 200ms ease,
            background-color 200ms ease;

          -webkit-tap-highlight-color: transparent;
        }

        /* ==========================================
           GET INVOLVED
           ========================================== */

        .hero-button-primary {
          width: 190px;

          background: #f96546;
          color: #ffffff;

          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .hero-button-primary:hover {
          background: #ed5739;

          transform: translateY(-1px);

          box-shadow:
            0 6px 16px rgba(0, 0, 0, 0.20);
        }

        /* ==========================================
           LEARN MORE
           ========================================== */

        .hero-button-secondary {
          width: 208px;

          gap: 12px;

          background: #ffffff;
          color: #163638;

          box-shadow:
            0 4px 12px rgba(0, 0, 0, 0.13);
        }

        .hero-button-secondary:hover {
          background: #f8f8f8;

          transform: translateY(-1px);

          box-shadow:
            0 6px 16px rgba(0, 0, 0, 0.17);
        }

        /* ==========================================
           ARROW
           ========================================== */

        .hero-button-arrow {
          width: 18px;
          height: 18px;

          stroke-width: 2;

          flex-shrink: 0;

          transition:
            transform 200ms ease;
        }

        .hero-button-secondary:hover .hero-button-arrow {
          transform: translateY(2px);
        }

        /* ==========================================
           FOCUS ACCESSIBILITY
           ========================================== */

        .hero-button:focus-visible {
          outline: 3px solid rgba(255, 255, 255, 0.9);
          outline-offset: 4px;
        }

        .hero-button-secondary:focus-visible {
          outline-color: #163638;
        }

        /* ==========================================
           TABLETS
           ========================================== */

        @media (max-width: 1024px) {
          .hero-buttons {
            gap: 16px;
            margin-top: 40px;
          }

          .hero-button {
            height: 58px;
            font-size: 16px;
          }

          .hero-button-primary {
            width: 175px;
          }

          .hero-button-secondary {
            width: 192px;
          }

          .hero-button-arrow {
            width: 17px;
            height: 17px;
          }
        }

        /* ==========================================
           SMALL TABLETS
           ========================================== */

        @media (max-width: 768px) {
          .hero-buttons {
            gap: 14px;
            margin-top: 34px;
          }

          .hero-button {
            height: 56px;
            font-size: 16px;
          }

          .hero-button-primary {
            width: 165px;
          }

          .hero-button-secondary {
            width: 180px;
          }

          .hero-button-secondary {
            gap: 10px;
          }

          .hero-button-arrow {
            width: 17px;
            height: 17px;
          }
        }

        /* ==========================================
           MOBILE PHONES
           ========================================== */

        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column;

            align-items: center;

            width: 100%;

            max-width: 320px;

            gap: 10px;

            margin-top: 28px;

            padding-left: 12px;
            padding-right: 12px;

            box-sizing: border-box;
          }

          .hero-button {
            width: 100% !important;

            max-width: 320px;

            height: 52px;

            font-size: 15px;

            border-radius: 9999px;
          }

          .hero-button-secondary {
            gap: 10px;
          }

          .hero-button-arrow {
            width: 17px;
            height: 17px;
          }
        }

        /* ==========================================
           SMALL PHONES
           ========================================== */

        @media (max-width: 480px) {
          .hero-buttons {
            max-width: 290px;

            gap: 9px;

            margin-top: 24px;

            padding-left: 8px;
            padding-right: 8px;
          }

          .hero-button {
            height: 50px;

            font-size: 15px;
          }

          .hero-button-arrow {
            width: 16px;
            height: 16px;
          }
        }

        /* ==========================================
           VERY SMALL PHONES
           ========================================== */

        @media (max-width: 360px) {
          .hero-buttons {
            max-width: 260px;

            gap: 8px;

            margin-top: 20px;
          }

          .hero-button {
            height: 48px;

            font-size: 14px;
          }

          .hero-button-secondary {
            gap: 8px;
          }

          .hero-button-arrow {
            width: 15px;
            height: 15px;
          }
        }

        /* ==========================================
           TOUCH DEVICES
           ========================================== */

        @media (hover: none) {
          .hero-button-primary:hover,
          .hero-button-secondary:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}