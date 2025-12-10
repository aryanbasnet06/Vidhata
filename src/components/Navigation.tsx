import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Partners", href: "#partners" }, // ✅ Updated label
    { label: "Recognitions", href: "#recognitions" },
    { label: "Our Team", href: "#team" },
    { label: "Contact", href: "#contact" },
    {
      label: "Join Us",
      href: "https://docs.google.com/forms/d/e/1FAIpQLScv_6fRDRiEsQXGr45T3pJVbA-kop2gEB3Dhkte1DnF55Vwcg/viewform?usp=dialog",
    },
  ];

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);

    if (!target) return;

    const navHeight = navRef.current?.getBoundingClientRect().height || 80;
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
      {/* Embedded CSS */}
      <style>{`
        .nav-logo img {
          height: 4rem;
          width: 4rem;
        }

        .nav-logo span {
          font-size: 2.25rem;
          font-weight: 400;
          color: #5B8A8D;
        }

        .join-us-btn {
          margin-left: 2rem;
          padding: 0.55rem 1.8rem;
          font-size: 1.125rem;
          border-radius: 0.75rem;
          background-color: #EB8F78;
          color: white;
          transition: all 0.3s ease;
        }

        .join-us-btn:hover {
          background-color: #d87f69;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="nav-logo flex items-center space-x-3 cursor-pointer"
          >
            <img src="/images/vidhata_logo.png" alt="Vidhata Logo" />
            <span>Vidhata</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center pl-10">
            <div className="flex items-center space-x-8">
              {navItems.slice(0, -1).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-700 hover:text-[#5B8A8D] transition-colors text-lg"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Join Us */}
            <a
              href={navItems[navItems.length - 1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="join-us-btn"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 pl-4">
            {navItems.slice(0, -1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-gray-700 hover:text-[#5B8A8D] py-2 text-base"
              >
                {item.label}
              </a>
            ))}

            <a
              href={navItems[navItems.length - 1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#EB8F78] hover:bg-[#d87f69] text-white px-6 py-2 text-center rounded-lg text-base"
            >
              Join Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
