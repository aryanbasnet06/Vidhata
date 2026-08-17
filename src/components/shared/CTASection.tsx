import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  primaryExternal?: boolean;
  secondaryExternal?: boolean;
}

function CTAButton({
  href,
  label,
  external,
  variant,
}: {
  href: string;
  label: string;
  external?: boolean;
  variant: "primary" | "secondary";
}) {
  const isExternal = external ?? !href.startsWith("/");
  const baseClass =
    variant === "primary"
      ? "inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] h-12 px-6 rounded-xl bg-vidhata-coral text-white font-medium shadow-lg hover:bg-vidhata-coral-dark hover:scale-[1.02] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-vidhata-teal"
      : "inline-flex items-center justify-center w-full sm:w-auto min-w-[160px] h-12 px-6 rounded-xl bg-white text-vidhata-navy font-medium shadow-md hover:bg-gray-50 hover:scale-[1.02] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-vidhata-teal focus-visible:ring-offset-2";

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        {label}
        {variant === "primary" && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
      </a>
    );
  }

  return (
    <Link to={href} className={baseClass}>
      {label}
      {variant === "primary" && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </Link>
  );
}

export function CTASection({
  title = "Ready to Make a Difference?",
  description = "Join our community of volunteers and help empower underserved students across Nepal through holistic learning.",
  primaryLabel = "Join Us",
  primaryHref = "/join-us",
  secondaryLabel = "Contact Us",
  secondaryHref = "/contact",
  primaryExternal,
  secondaryExternal,
}: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-vidhata-teal to-vidhata-teal-dark px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center shadow-xl">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-vidhata-coral blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-vidhata-yellow blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5">
              {title}
            </h2>
            <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <CTAButton
                href={primaryHref}
                label={primaryLabel}
                external={primaryExternal}
                variant="primary"
              />
              <CTAButton
                href={secondaryHref}
                label={secondaryLabel}
                external={secondaryExternal}
                variant="secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
