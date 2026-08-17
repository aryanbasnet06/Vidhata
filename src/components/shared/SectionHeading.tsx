interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`mb-10 sm:mb-14 lg:mb-16 max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-vidhata-teal text-sm sm:text-base font-semibold tracking-widest uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vidhata-navy leading-tight mb-4 sm:mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
