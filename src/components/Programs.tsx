import {
  BookOpen,
  Palette,
  Music,
  Lightbulb,
  Globe,
  Heart,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import lifeSkillsImage from "/images/holistic_development.jpg";
import creativeArtsImage from "/images/creative_arts.png";
import musicPerformanceImage from "/images/music_and_performance.jpg";
import innovationTechImage from "/images/innovation_and_technology.jpg";
import environmentalImage from "/images/environmental_awareness.png";
import socialEmotionalImage from "/images/underserved.jpg";

export function Programs() {
  const programs = [
    {
      icon: BookOpen,
      title: "Life Skills Education",
      description:
        "Teaching essential skills like critical thinking, communication, and problem-solving that empower students beyond the classroom.",
      color: "from-[#5B8A8D] to-[#4a7174]",
      image: lifeSkillsImage,
    },
    {
      icon: Palette,
      title: "Creative Arts",
      description:
        "Fostering creativity through art, crafts, and design workshops that help students express themselves and discover their talents.",
      color: "from-[#EA8166] to-[#d97359]",
      image: creativeArtsImage,
    },
    {
      icon: Music,
      title: "Music & Performance",
      description:
        "Building confidence and teamwork through music, dance, and drama activities that celebrate cultural expression.",
      color: "from-[#F0C78A] to-[#e0b77a]",
      image: musicPerformanceImage,
    },
    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description:
        "Introducing students to technology, coding, and innovative thinking to prepare them for the digital future.",
      color: "from-[#5B8A8D] to-[#4a7174]",
      image: innovationTechImage,
    },
    {
      icon: Globe,
      title: "Environmental Awareness",
      description:
        "Educating students about environmental conservation and sustainable practices for a better tomorrow.",
      color: "from-[#EA8166] to-[#d97359]",
      image: environmentalImage,
    },
    {
      icon: Heart,
      title: "Social Emotional Learning",
      description:
        "Developing emotional intelligence, empathy, and interpersonal skills for healthy relationships and well-being.",
      color: "from-[#F0C78A] to-[#e0b77a]",
      image: socialEmotionalImage,
    },
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#5B8A8D] text-lg mb-3 tracking-wide">
            OUR PROGRAMS
          </h2>
          <h3 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            Comprehensive Learning Experiences
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our diverse programs are designed to nurture every aspect of student
            development, from creativity and innovation to emotional
            intelligence and social responsibility.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <Card
                key={program.title}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
              >
                {program.image && (
                  <div className="relative w-full aspect-square overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}

                <CardHeader className="pb-4">
                  {!program.image && (
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  )}
                  <CardTitle className="text-xl text-gray-900">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div
                    className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${program.color} transition-all duration-500 rounded-full`}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg mb-6">
            Want to learn more about our programs or bring them to your
            community?
          </p>
          <a
            href="https://www.instagram.com/vidhata.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#EA8166] hover:bg-[#d97359] text-white px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Our Programs
          </a>
        </div>
      </div>
    </section>
  );
}
