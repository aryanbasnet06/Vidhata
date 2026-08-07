import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Partners", href: "#partners" },
    { label: "Recognitions", href: "#recognitions" },
    { label: "Our Team", href: "#team" },
    { label: "Contact", href: "#contact" },
    {
      label: "Join Us",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScv_6fRDRiEsQXGr45T3pJVbA-kop2gEB3Dhkte1DnF55Vwcg/viewform?usp=dialog",
    },
  ];

  const linkItems = navItems.slice(0, -1);
  const joinUs = navItems[navItems.length - 1];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  // Lock body scroll and enable Escape-to-close while the mobile menu is open
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);

    if (!target) return;

    const navHeight = navRef.current?.getBoundingClientRect().height || 72;
    const targetY =
      target.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;

    window.scrollTo({ top: targetY, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-sm shadow-md z-50"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-3 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex min-w-0 flex-shrink items-center gap-2 sm:gap-3 cursor-pointer"
          >
            <img
              src="/images/vidhata_logo.png"
              alt="Vidhata Logo"
              className="w-auto flex-shrink-0 object-contain"
              style={{ height: "clamp(2.5rem, 7vw, 4.25rem)" }}
            />
            <span
              className="truncate font-normal leading-none text-[#5B8A8D]"
              style={{ fontSize: "clamp(1.5rem, 4.5vw, 2.9rem)" }}
            >
              Vidhata
            </span>
          </a>

          {/* Desktop Navigation (>= lg) */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {linkItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="whitespace-nowrap text-gray-700 transition-colors hover:text-[#5B8A8D] text-base xl:text-lg"
              >
                {item.label}
              </a>
            ))}

            <a
              href={joinUs.href}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-xl bg-[#EB8F78] px-5 py-2.5 text-base text-white transition-colors hover:bg-[#d87f69] xl:px-7 xl:text-lg"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button (< lg) */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay + Panel (< lg) */}
      {isOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 top-16 z-40 bg-black/30 backdrop-blur-[2px] sm:top-20"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="absolute left-0 right-0 top-full z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-gray-100 bg-white shadow-xl sm:max-h-[calc(100vh-5rem)]"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
              {linkItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block rounded-lg px-3 py-3 text-base text-gray-700 transition-colors hover:bg-[#F0F9F9] hover:text-[#5B8A8D]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={joinUs.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 block rounded-lg bg-[#EB8F78] px-6 py-3 text-center text-base text-white transition-colors hover:bg-[#d87f69]"
              >
                Join Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
