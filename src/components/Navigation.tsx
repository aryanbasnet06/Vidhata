import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "../data/constants";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const location = useLocation();

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  /*
   * Desktop navigation links
   * Active page = Vidhata coral
   * Inactive links = dark gray / black
   */
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "whitespace-nowrap",
      "text-[0.95rem]",
      "xl:text-base",
      "font-medium",
      "transition-colors",
      "duration-200",
      isActive
        ? "text-vidhata-coral"
        : "text-gray-800 hover:text-vidhata-coral",
    ].join(" ");

  /*
   * Mobile navigation links
   */
  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "block",
      "rounded-lg",
      "px-3",
      "py-3",
      "text-base",
      "font-medium",
      "transition-colors",
      "duration-200",
      isActive
        ? "bg-orange-50 text-vidhata-coral"
        : "text-gray-800 hover:bg-gray-50 hover:text-vidhata-coral",
    ].join(" ");

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white shadow-sm"
      aria-label="Main navigation"
    >
      {/* Main navigation container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[4.75rem]">
          {/* =========================
              LOGO / BRAND
          ========================== */}
          <Link
            to="/"
            className="flex min-w-0 flex-shrink-0 items-center gap-2 sm:gap-3"
            aria-label="Vidhata home"
          >
            <img
              src="/images/vidhata_logo.png"
              alt="Vidhata Logo"
              className="w-auto flex-shrink-0 object-contain"
              style={{
                height: "clamp(2.5rem, 5vw, 3.75rem)",
              }}
            />

            <span
              className="font-semibold leading-none text-[#5B8A8D]"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
              }}
            >
              Vidhata
            </span>
          </Link>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}

            {/* Join Us Button */}
            <Link
              to="/join-us"
              className="
                ml-1
                inline-flex
                h-12
                items-center
                justify-center
                gap-2
                whitespace-nowrap
                rounded-full
                bg-vidhata-coral
                px-7
                text-base
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-vidhata-coral-dark
                hover:shadow-md
                hover:scale-[1.02]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-vidhata-coral
                focus-visible:ring-offset-2
              "
            >
              <span>Join Us</span>
              <ArrowRight className="h-5 w-5" strokeWidth={2} />
            </Link>
          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="
              inline-flex
              h-11
              w-11
              flex-shrink-0
              items-center
              justify-center
              rounded-lg
              text-gray-800
              transition-colors
              hover:bg-gray-100
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-vidhata-teal
              lg:hidden
            "
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      {isOpen && (
        <div className="lg:hidden">
          {/* Background overlay */}
          <div
            className="
              fixed
              inset-0
              top-16
              z-40
              bg-black/30
              backdrop-blur-[2px]
              sm:top-[4.75rem]
            "
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Menu panel */}
          <div
            id="mobile-menu"
            className="
              absolute
              left-0
              right-0
              top-full
              z-50
              max-h-[calc(100dvh-4rem)]
              overflow-y-auto
              border-t
              border-gray-200
              bg-white
              shadow-xl
              sm:max-h-[calc(100dvh-4.75rem)]
              animate-slide-down
            "
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {/* Mobile navigation links */}
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={mobileLinkClass}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Mobile Join Us button */}
              <Link
                to="/join-us"
                onClick={() => setIsOpen(false)}
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-vidhata-coral
                  px-6
                  py-3
                  text-center
                  text-base
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-vidhata-coral-dark
                "
              >
                <span>Join Us</span>
                <ArrowRight className="h-5 w-5" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}