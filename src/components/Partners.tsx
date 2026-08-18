import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// =========================================================
// PARTNER LOGO
// =========================================================

function PartnerCircle({
  name,
  image,
}: {
  name: string;
  image?: string;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className="
        w-16 h-16
        sm:w-[72px] sm:h-[72px]
        rounded-full
        mx-auto mb-3
        flex items-center justify-center
        overflow-hidden
        bg-gradient-to-br from-[#5B8A8D] to-[#3F696C]
        shadow-lg
        ring-4 ring-[#5B8A8D]/10
        transition-transform duration-300
        group-hover:scale-105
      "
    >
      {image && !imageError ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-white text-2xl sm:text-3xl font-semibold">
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
}

// =========================================================
// TYPES
// =========================================================

interface PartnersProps {
  hideHeader?: boolean;
}

// =========================================================
// COMPONENT
// =========================================================

export function Partners({ hideHeader = false }: PartnersProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // Normal automatic scrolling speed
  const autoSpeedRef = useRef(0.35);

  // Current scrolling speed
  const currentSpeedRef = useRef(0.35);

  // Whether user is hovering over carousel
  const isHoveredRef = useRef(false);

  // Prevent multiple timeout issues
  const boostTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // =========================================================
  // PARTNERS
  // =========================================================

  const partners = [
    {
      name: "ArtBeat Nepal",
      image: "/images/artbeat_nepal.jpg",
    },
    {
      name: "OFG Nepal",
      image: "/images/OFG_Nepal.png",
    },
    {
      name: "Matri Nepal Bal Griha",
      image: "/images/matri_nepal_bal_griha.png",
    },
    {
      name: "Rising Star School",
      image: "/images/rising_star_school.png",
    },
    {
      name: "Bigyan School",
      image: "/images/bigyan_school.webp",
    },
    {
      name: "Minnath Aadarsha Shikshya Sadan",
      image: "/images/minnath_aadarsha_shikshya_sadan.png",
    },
    {
      name: "Mahendra Sewa School",
      image: "/images/Mahendra_Sewa.jpg",
    },
    {
      name: "Gaga Nepal",
      image: "/images/gaga_nepal.jpg",
    },
    {
      name: "Hamro Mutu",
      image: "/images/hamro_mutu.webp",
    },
    {
      name: "Disabled Care Nepal",
      image: "/images/disabled_care_center_nepal.jpeg",
    },
    {
      name: "Pravananda Ashram",
      image: "/images/pravananda.png",
    },
    {
      name: "JANTRA",
      image: "/images/jantra.png",
    },
  ];

  // =========================================================
  // AUTO-SCROLL
  // =========================================================

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    const animate = () => {
      if (!isHoveredRef.current) {
        track.scrollLeft += currentSpeedRef.current;
      }

      /*
       * We have duplicated the partner list.
       *
       * Once we reach the end of the first set,
       * jump back by exactly half of the scroll width.
       *
       * Because the second set is identical to the first,
       * this creates a seamless infinite loop.
       */
      const halfWidth = track.scrollWidth / 2;

      if (track.scrollLeft >= halfWidth) {
        track.scrollLeft -= halfWidth;
      }

      if (track.scrollLeft <= 0 && currentSpeedRef.current < 0) {
        track.scrollLeft += halfWidth;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }

      if (boostTimeoutRef.current) {
        clearTimeout(boostTimeoutRef.current);
      }
    };
  }, []);

  // =========================================================
  // ARROW CONTROL
  // =========================================================

  const moveCarousel = (direction: "left" | "right") => {
    const track = trackRef.current;

    if (!track) return;

    /*
     * Move immediately when clicking.
     * This makes the arrow feel responsive instead of
     * waiting for the animation.
     */
    const amount = 280;

    track.scrollLeft += direction === "left" ? -amount : amount;

    /*
     * Temporarily increase automatic movement speed.
     */
    currentSpeedRef.current = direction === "left" ? -3 : 3;

    /*
     * Clear an existing timeout so repeated clicks
     * behave properly.
     */
    if (boostTimeoutRef.current) {
      clearTimeout(boostTimeoutRef.current);
    }

    boostTimeoutRef.current = setTimeout(() => {
      currentSpeedRef.current = autoSpeedRef.current;
    }, 450);
  };

  // =========================================================
  // MOUSE ENTER / LEAVE
  // =========================================================

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-vidhata-light">
      {/* =====================================================
          HEADER
      ===================================================== */}

      {!hideHeader && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center">
          <h2 className="text-vidhata-teal text-base sm:text-lg mb-3 tracking-wide font-semibold uppercase">
            Partners
          </h2>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl text-vidhata-navy font-bold mb-4">
            Trusted by Leading Organizations
          </h3>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We collaborate with 30 partner organizations across Nepal to
            maximize our impact
          </p>
        </div>
      )}

      {/* =====================================================
          CAROUSEL
      ===================================================== */}

      <div
        className="
          relative
          max-w-7xl
          mx-auto
          group/carousel
        "
      >
        {/* ===================================================
            LEFT ARROW
        =================================================== */}

        <button
          type="button"
          aria-label="Move partners left"
          onClick={() => moveCarousel("left")}
          className="
            partner-arrow
            left-2
            sm:left-4
            lg:left-2
          "
        >
          <ChevronLeft
            size={24}
            strokeWidth={2.5}
            className="sm:w-7 sm:h-7"
          />
        </button>

        {/* ===================================================
            RIGHT ARROW
        =================================================== */}

        <button
          type="button"
          aria-label="Move partners right"
          onClick={() => moveCarousel("right")}
          className="
            partner-arrow
            right-2
            sm:right-4
            lg:right-2
          "
        >
          <ChevronRight
            size={24}
            strokeWidth={2.5}
            className="sm:w-7 sm:h-7"
          />
        </button>

        {/* ===================================================
            LEFT FADE
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            bottom-0
            w-16
            sm:w-24
            lg:w-32
            z-10
            bg-gradient-to-r
            from-vidhata-light
            via-vidhata-light/80
            to-transparent
          "
        />

        {/* ===================================================
            RIGHT FADE
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            right-0
            top-0
            bottom-0
            w-16
            sm:w-24
            lg:w-32
            z-10
            bg-gradient-to-l
            from-vidhata-light
            via-vidhata-light/80
            to-transparent
          "
        />

        {/* ===================================================
            TRACK
        =================================================== */}

        <div
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="
            partner-track
            flex
            gap-4
            sm:gap-6
            overflow-hidden
            px-8
            sm:px-16
            lg:px-20
            py-5
            select-none
          "
        >
          {/* FIRST SET + DUPLICATE SET */}

          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="
                partner-card
                group
                flex-shrink-0

                w-48
                sm:w-56
                lg:w-60

                h-32
                sm:h-36
                lg:h-40

                bg-white
                rounded-2xl

                flex
                items-center
                justify-center

                px-4
                sm:px-5

                border
                border-gray-100

                shadow-[0_8px_30px_rgba(0,0,0,0.06)]

                transition-all
                duration-300
              "
            >
              <div className="text-center w-full">
                <PartnerCircle
                  name={partner.name}
                  image={partner.image}
                />

                <p
                  className="
                    text-gray-800
                    text-xs
                    sm:text-sm
                    font-medium
                    leading-snug
                    line-clamp-2
                    px-1
                  "
                >
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`
        /*
         * Partner cards
         */
        .partner-card {
          position: relative;
        }

        .partner-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 1px;
          background: linear-gradient(
            135deg,
            rgba(91, 138, 141, 0.18),
            transparent,
            rgba(91, 138, 141, 0.12)
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .partner-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 18px 40px rgba(0, 0, 0, 0.10),
            0 5px 15px rgba(91, 138, 141, 0.10);
        }

        /*
         * Hide scrollbar
         */
        .partner-track {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .partner-track::-webkit-scrollbar {
          display: none;
        }

        /*
         * Arrow buttons
         */
        .partner-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);

          z-index: 30;

          width: 44px;
          height: 44px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 9999px;

          color: #5b8a8d;

          background:
            linear-gradient(
              145deg,
              rgba(255, 255, 255, 0.98),
              rgba(247, 250, 250, 0.98)
            );

          border: 1px solid rgba(91, 138, 141, 0.15);

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.10),
            0 2px 6px rgba(91, 138, 141, 0.08);

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease;

          cursor: pointer;
        }

        @media (min-width: 640px) {
          .partner-arrow {
            width: 52px;
            height: 52px;
          }
        }

        .partner-arrow:hover {
          color: white;

          background:
            linear-gradient(
              135deg,
              #5b8a8d,
              #456f72
            );

          transform:
            translateY(-50%)
            scale(1.08);

          box-shadow:
            0 12px 28px rgba(91, 138, 141, 0.30),
            0 4px 10px rgba(0, 0, 0, 0.10);
        }

        .partner-arrow:active {
          transform:
            translateY(-50%)
            scale(0.94);
        }

        /*
         * Mobile arrows
         */
        @media (max-width: 639px) {
          .partner-arrow {
            width: 40px;
            height: 40px;
          }
        }

        /*
         * Subtle entrance animation for cards
         */
        @keyframes partnerGlow {
          0% {
            box-shadow:
              0 8px 30px rgba(0, 0, 0, 0.06);
          }

          50% {
            box-shadow:
              0 10px 32px rgba(91, 138, 141, 0.08);
          }

          100% {
            box-shadow:
              0 8px 30px rgba(0, 0, 0, 0.06);
          }
        }

        /*
         * Accessibility
         */
        .partner-arrow:focus-visible {
          outline: 3px solid rgba(91, 138, 141, 0.35);
          outline-offset: 3px;
        }
      `}</style>
    </section>
  );
}