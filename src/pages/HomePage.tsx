import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Target, Sparkles, Users } from "lucide-react";
import { Hero } from "../components/Hero";
import { ImpactMetrics } from "../components/ImpactMetrics";
import { WorkInAction } from "../components/WorkInAction";
import { SectionHeading } from "../components/shared/SectionHeading";
import { CTASection } from "../components/shared/CTASection";

const features = [
  {
    icon: GraduationCap,
    title: "Non-Academic Learning",
    description: "Structured programs beyond textbooks that develop essential life skills.",
    image: "/images/non_academic.png",
  },
  {
    icon: Target,
    title: "Holistic Development",
    description: "Fostering intellectual, emotional, and social growth for well-rounded individuals.",
    image: "/images/holistic_development.jpg",
  },
  {
    icon: Users,
    title: "Streamlined Volunteering",
    description: "Connecting passionate volunteers with meaningful opportunities across Nepal.",
    image: "/images/streamlined_volunteering.png",
  },
  {
    icon: Sparkles,
    title: "Underserved Communities",
    description: "Reaching students who need it most with equal learning opportunities.",
    image: "/images/underserved.jpg",
  },
];

const featuredPrograms = [
  {
    title: "Life Skills Education",
    description: "Critical thinking, communication, and problem-solving beyond the classroom.",
    image: "/images/lifeskills.jpg",
    color: "from-vidhata-teal to-vidhata-teal-dark",
  },
  {
    title: "Creative Arts",
    description: "Art, crafts, and design workshops that help students express themselves.",
    image: "/images/creative_arts.png",
    color: "from-vidhata-coral to-vidhata-coral-dark",
  },
  {
    title: "Innovation & Technology",
    description: "Introducing students to technology and innovative thinking for the future.",
    image: "/images/innovation_and_technology.jpg",
    color: "from-vidhata-yellow to-[#e0b77a]",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactMetrics />

      {/* Mission Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-vidhata-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="About Vidhata"
            title="Transforming Education in Nepal"
            description="Vidhata provides structured non-academic learning that fosters holistic development among underserved students. Through our volunteering gateway, we connect passionate educators with students across Nepal."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 bg-vidhata-teal rounded-lg flex items-center justify-center shadow-md">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-semibold text-vidhata-navy mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-vidhata-teal font-semibold hover:text-vidhata-teal-dark transition-colors group"
            >
              Learn more about our mission
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Programs"
            title="Comprehensive Learning Experiences"
            description="Diverse programs designed to nurture creativity, innovation, emotional intelligence, and social responsibility."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredPrograms.map((program) => (
              <article
                key={program.title}
                className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${program.color}`} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-vidhata-navy mb-2">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-vidhata-coral text-white font-medium hover:bg-vidhata-coral-dark transition-colors shadow-md hover:shadow-lg"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      <WorkInAction />

      <CTASection />
    </>
  );
}
