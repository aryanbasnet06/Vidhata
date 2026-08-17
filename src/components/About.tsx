import { GraduationCap, Target, Sparkles, Users } from "lucide-react";
import nonAcademicImage from "/images/non_academic.png";

import holisticDevImage from "/images/holistic_development.jpg";
import volunteeringImage from "/images/streamlined_volunteering.png";
import underservedImage from "/images/underserved.jpg";

interface AboutProps {
  hideHeader?: boolean;
}

export function About({ hideHeader = false }: AboutProps) {
  const features = [
    {
      icon: GraduationCap,
      title: "Non-Academic Learning",
      description:
        "Structured programs that go beyond textbooks to develop essential life skills and creativity.",
      image: nonAcademicImage,
    },
    {
      icon: Target,
      title: "Holistic Development",
      description:
        "Fostering intellectual, emotional, and social growth for well-rounded individuals.",
      image: holisticDevImage,
    },
    {
      icon: Users,
      title: "Streamlined Volunteering",
      description:
        "Connecting passionate volunteers with meaningful opportunities to make a difference.",
      image: volunteeringImage,
    },
    {
      icon: Sparkles,
      title: "Underserved Communities",
      description:
        "Reaching students who need it most across Nepal with equal learning opportunities.",
      image: underservedImage,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-vidhata-light pb-20 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-vidhata-teal text-base sm:text-lg mb-3 tracking-wide font-semibold uppercase">
              About Vidhata
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl text-vidhata-navy font-bold mb-4 sm:mb-6">
              Transforming Education in Nepal
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Vidhata is dedicated to providing structured non-academic learning
              opportunities that foster holistic development among underserved
              students. Through our streamlined volunteering gateway, we connect
              passionate educators with students across Nepal, creating lasting
              impact in communities that need it most.
            </p>
          </div>
        )}

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-[#EA8166] hover:transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Image Section (if available) */}
                {feature.image && (
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {!feature.image && (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#5B8A8D] to-[#4a7174] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                    </div>
                  )}
                  <h4 className="text-lg sm:text-xl text-gray-900 mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-14 sm:mt-20 bg-gradient-to-r from-[#5B8A8D] to-[#4a7174] rounded-2xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-4 sm:mb-6">Our Mission</h3>
          <p className="text-white/95 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            To bridge the gap in educational opportunities by providing
            comprehensive, non-academic learning experiences that empower
            underserved students across Nepal to develop into confident,
            creative, and compassionate individuals ready to shape their own
            futures and contribute meaningfully to their communities.
          </p>
        </div>
      </div>
    </section>
  );
}
