import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Partner logo circle with fallback
function PartnerCircle({ name, image }: { name: string; image?: string }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-16 h-16 bg-gradient-to-br from-[#5B8A8D] to-[#4a7174] rounded-full mx-auto mb-3 flex items-center justify-center overflow-hidden shadow-md">
      {image && !imageError ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-white text-2xl font-medium">
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
}

export function Partners() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const speedRef = useRef(0.35);

  const partners = [
    { name: "ArtBeat Nepal", image: "/images/artbeat_nepal.jpg" },
    { name: "OFG Nepal", image: "/images/OFG_Nepal.png" },
    {
      name: "Matri Nepal Bal Griha",
      image: "/images/matri_nepal_bal_griha.png",
    },
    { name: "Rising Star School", image: "/images/rising_star_school.png" },
    { name: "Bigyan School", image: "/images/bigyan_school.webp" },
    {
      name: "Minnath Aadarsha Shikshya Sadan",
      image: "/images/minnath_aadarsha_shikshya_sadan.png",
    },
    { name: "Gaga Nepal", image: "/images/gaga_nepal.jpg" },
    { name: "Hamro Mutu", image: "/images/hamro_mutu.webp" },
    {
      name: "Disabled Care Nepal",
      image: "/images/disabled_care_center_nepal.jpeg",
    },
    { name: "JANTRA", image: "/images/jantra.png" },
  ];

  // Auto-scroll animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const animate = () => {
      track.scrollLeft += speedRef.current;

      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const boostSpeed = (direction: "left" | "right") => {
    speedRef.current = direction === "left" ? -3 : 3;

    setTimeout(() => {
      speedRef.current = 0.35;
    }, 400);
  };

  return (
    /* ✅ THIS ID IS THE FIX */
    <section
      id="partners"
      className="py-16 bg-gradient-to-b from-white to-[#F0F9F9] scroll-mt-24"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center">
        <h2 className="text-[#5B8A8D] text-lg mb-3 tracking-wide">PARTNERS</h2>
        <h3 className="text-4xl sm:text-5xl text-gray-900 mb-4">
          Trusted by Leading Organizations
        </h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We collaborate with 18 partner organizations across Nepal to maximize
          our impact
        </p>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={() => boostSpeed("left")}
          className="partner-arrow left-4"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={() => boostSpeed("right")}
          className="partner-arrow right-4"
        >
          <ChevronRight size={28} />
        </button>

        <div
          ref={trackRef}
          className="partner-track flex gap-6 overflow-hidden px-24"
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-32 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center p-6 border border-gray-100"
            >
              <div className="text-center">
                <PartnerCircle name={partner.name} image={partner.image} />
                <p className="text-gray-800 text-sm line-clamp-2">
                  {partner.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .partner-track:hover {
          cursor: grab;
        }

        .partner-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          background: white;
          width: 52px;
          height: 52px;
          border-radius: 9999px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #5b8a8d;
          transition: all 0.25s ease;
        }

        .partner-arrow:hover {
          background: #5b8a8d;
          color: white;
          transform: translateY(-50%) scale(1.08);
        }
      `}</style>
    </section>
  );
}
