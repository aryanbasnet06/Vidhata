import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { CONTACT_EMAIL, NAV_ITEMS, SOCIAL_LINKS } from "../data/constants";

const iconMap = {
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
  Email: Mail,
} as const;

export function Footer() {
  return (
    <footer className="bg-[#1F3839] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/vidhata_logo.png"
                alt="Vidhata Logo"
                className="h-11 w-11"
              />

              <span className="text-2xl font-semibold">Vidhata</span>
            </div>

            <p className="text-white/90 mb-6 max-w-md leading-relaxed">
              Empowering underserved students across Nepal through structured
              non-academic learning that fosters holistic development and
              creates lasting impact.
            </p>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon =
                  iconMap[link.label as keyof typeof iconMap] ?? Mail;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-vidhata-coral transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h5 className="mb-4 text-lg font-semibold">Quick Links</h5>

            <ul className="space-y-2.5">
              {NAV_ITEMS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-vidhata-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  to="/join-us"
                  className="text-white/80 hover:text-vidhata-yellow transition-colors"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="mb-4 text-lg font-semibold">Get in Touch</h5>

            <ul className="space-y-3 text-white/80">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-vidhata-yellow transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>

              <li>Kathmandu, Nepal</li>
            </ul>

            <Link
              to="/join-us"
              className="inline-flex mt-6 items-center justify-center h-11 px-6 rounded-xl bg-vidhata-coral text-white font-medium hover:bg-vidhata-coral-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1F3839]"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/75 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Vidhata. All rights reserved.
          </p>

          <p className="text-white/60 text-sm">
            Empowering students through holistic learning
          </p>
        </div>
      </div>
    </footer>
  );
}