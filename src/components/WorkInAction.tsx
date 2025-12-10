import { Play, Users, BookOpen, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function WorkInAction() {
  const galleryItems = [
    {
      type: "image",
      title: "Interactive Learning Sessions",
      description: "Students engaged in hands-on activities",
      icon: BookOpen,
      image: "/images/interactive_sessions.jpg",
    },
    {
      type: "image",
      title: "Volunteer Training Programs",
      description: "Preparing volunteers for impactful teaching",
      icon: Users,
      image: "/images/volunteer_training.jpg",
    },
    {
      type: "image",
      title: "Community Workshops",
      description: "Building skills through collaborative learning",
      icon: Heart,
      image: "/images/community_workshops.jpg",
    },
    {
      type: "image",
      title: "Creative Arts Programs",
      description: "Fostering creativity and self-expression",
      icon: BookOpen,
      image: "/images/creative_art_programs.jpg",
    },
    {
      type: "image",
      title: "Student Success Stories",
      description: "Celebrating achievements and growth",
      icon: Heart,
      image: "/images/student_celebration.jpg",
    },
    {
      type: "image",
      title: "Outdoor Learning Activities",
      description: "Learning beyond the classroom walls",
      icon: Users,
      image: "/images/outdoor_learning.webp",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#5B8A8D] text-lg mb-3 tracking-wide">
            WORK IN ACTION
          </h2>
          <h3 className="text-4xl sm:text-5xl text-gray-900 mb-6">
            See Our Impact in Communities
          </h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience the transformative power of holistic education through
            real stories and moments from our programs across Nepal.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[4/3]"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#EA8166] rounded-full flex items-center justify-center shadow-md">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="text-xl text-white font-semibold drop-shadow-md">
                      {item.title}
                    </h4>
                  </div>

                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-sm">
                    {item.description}
                  </p>
                </div>

                <div
                  className="absolute top-4 right-4 w-12 h-12 bg-white/30 backdrop-blur-sm 
                             rounded-full flex items-center justify-center group-hover:opacity-0 
                             transition-opacity z-20"
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/vidhata.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#EA8166] hover:bg-[#d97359] text-white px-8 py-4 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl"
          >
            View All Stories
          </a>
        </div>
      </div>
    </section>
  );
}
