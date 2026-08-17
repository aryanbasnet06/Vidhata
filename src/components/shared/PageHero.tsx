interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-vidhata-navy pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-vidhata-navy/95 via-vidhata-teal-dark/90 to-vidhata-teal/80" />
        </>
      )}

      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-vidhata-navy via-vidhata-teal-dark to-vidhata-teal opacity-95" />
      )}

      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-vidhata-coral blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-vidhata-yellow blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        {eyebrow && (
          <p className="text-vidhata-yellow text-sm sm:text-base font-semibold tracking-widest uppercase mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 sm:mb-6 max-w-4xl mx-auto">
          {title}
        </h1>
        {description && (
          <p className="text-white/85 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
