import { Card } from "./ui/card";
import { Instagram, Mail } from "lucide-react";

interface TeamProps {
  hideHeader?: boolean;
}

export function Team({ hideHeader = false }: TeamProps) {
  const teamMembers = [
    {
      name: "Aryan Basnet",
      position: "Founder & Chief Executive Officer",
      image: "/images/aryan-basnet-founder-vidhata-nepal.png",
      description:
        "Aryan is a technologist, social entrepreneur, policy researcher, and AI engineer. As the Founder & CEO of Vidhata, he leads the organization’s vision, strategy, and growth, bringing together his interests in technology, education, and social development. His work spans artificial intelligence, entrepreneurship, research, and public policy, with a particular focus on using technology and innovation to address complex societal challenges. His areas of interest include AI, education, economics, and public policy, with a broader commitment to creating practical and sustainable solutions that expand opportunities for underserved communities.",
      instagram: "https://www.instagram.com/__aryanbasnet__/",
      email: "mailto:basnetaryan05@gmail.com",
    },
    {
      name: "Akhilesh Regmi",
      position: "Chief Technology Officer",
      image: "/images/akhilesh_regmi.png",
      description:
        "Akhilesh is a multidisciplinary technologist and creative problem-solver with a strong commitment to innovation. As Chief Technology Officer, he blends technical expertise with design-oriented thinking to build intuitive, scalable digital solutions. His logical approach and creative perspective guide the organization’s technology strategy and its mission-driven impact.",
      instagram: "https://www.instagram.com/akhilesh_regmi/",
      email: "mailto:akhileshregmi@gmail.com",
    },
    {
      name: "Swapnil Bhattarai",
      position: "Chief of Curriculum Development",
      image: "/images/swapnil_bhattarai.png",
      description:
        "Swapnil is an aspiring educator, interdisciplinary thinker, and purpose-driven leader committed to shaping meaningful learning experiences for young students across Nepal. As the Chief of Curriculum Development, he blends pedagogical insight, storytelling, and design-driven thinking to create interactive modules that spark curiosity and build foundational life skills in learners. Swapnil brings a rare combination of empathy, clarity, and creativity into every classroom he steps into.",
      instagram: "https://www.instagram.com/swap.nilbhattarai/",
      email: "mailto:swapnilbhattarai2006@gmail.com",
    },
    {
      name: "Aryan Bhattarai",
      position: "Chief Operating Officer",
      image: "/images/aryan_bhattarai.png",
      description:
        "Aryan is a dedicated leader, guided by integrity and a strong will to serve his community. As the Chief Operating Officer, he oversees daily operations and ensures that all projects and members share Vidhata's core values. By designing strategies, aligning teams, and removing operational bottlenecks, he maintains efficient executions within the organization. Through his efforts, Vidhata's quality learning opportunities reach students as smoothly as possible.",
      instagram: "https://www.instagram.com/aryanbhattarai_/",
      email: "mailto:aryanbhattarai007@gmail.com",
    },
    {
      name: "Bigyashree Khatri",
      position: "Chief of Project Management",
      image: "/images/bigyashree_khatri.png",
      description:
        "Bigyashree is a committed youth activist and a student of psychology and social work, serving as the Chief of Project Management. She has strong experience in planning and executing impact-driven projects in areas such as mental health, climate advocacy, and SRHR awareness. Through her leadership in events, volunteering initiatives, and Model United Nations, she effectively translates ideas into organized action. Her structured approach and community-focused mindset make her a vital force behind Vidhata’s programs and impact.",
      instagram: "https://www.instagram.com/bigyashre.e/",
      email: "mailto:bigyashreez@gmail.com",
    },
    {
      name: "Bharat Oli",
      position: "Chief Community Officer",
      image: "/images/bharatoli.png",
      description:
        "Bharat is a people-focused student leader serving as Vidhata’s Chief Community Officer, dedicated to building a strong, connected, and welcoming organizational community. He brings a thoughtful approach to volunteer engagement, team-building, and creating meaningful opportunities for members to connect beyond their regular responsibilities. Through his work at Vidhata, he contributes to fostering a positive and inclusive culture where volunteers feel valued, involved, and motivated to grow together. His leadership and initiative strengthen the sense of community that lies at the heart of Vidhata.",
      instagram: "https://www.instagram.com/_olibharat/",
      email: "mailto:olibharat947@gmail.com",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!hideHeader && (
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-vidhata-teal text-base sm:text-lg mb-3 tracking-wide font-semibold uppercase">
              Our Team
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-vidhata-navy mb-6">
              Meet the People Behind Vidhata
            </h3>
            <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              Our dedicated leadership team brings together expertise in
              education, operations, technology, and curriculum development to
              create lasting impact across Nepal.
            </p>
          </div>
        )}

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14">

          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="
                rounded-xl
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                overflow-hidden
                bg-white
                border
                border-gray-100
                flex
                flex-col
                items-center
                text-center
              "
            >

              {/* =========================================
                  LARGE CIRCULAR PROFILE IMAGE
                  ========================================= */}
              <div className="w-full flex justify-center pt-6 sm:pt-8 px-4">
                <div
                  className="
                    w-full
                    max-w-[550px]
                    aspect-square
                    rounded-full
                    overflow-hidden
                    bg-gray-50
                    border
                    border-gray-200
                    flex
                    items-center
                    justify-center
                  "
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        rounded-full
                      "
                    />
                  ) : (
                    <span className="text-gray-400 text-5xl font-semibold">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>

              {/* =========================================
                  CONTENT
                  ========================================= */}
              <div
                className="
                  w-full
                  px-6
                  sm:px-8
                  lg:px-10
                  pt-8
                  sm:pt-10
                  pb-8
                  sm:pb-10
                  flex
                  flex-col
                  flex-1
                  items-center
                "
              >

                {/* Name */}
                <h4
                  className="
                    text-2xl
                    sm:text-3xl
                    font-semibold
                    text-gray-900
                    mb-3
                  "
                >
                  {member.name}
                </h4>

                {/* Position */}
                <p
                  className="
                    text-[#5B8A8D]
                    font-semibold
                    text-base
                    sm:text-lg
                    lg:text-xl
                    mb-7
                  "
                >
                  {member.position}
                </p>

                {/* Description */}
                <p
                  className="
                    text-gray-600
                    text-base
                    sm:text-lg
                    leading-relaxed
                    max-w-xl
                    mb-8
                  "
                >
                  {member.description}
                </p>

                {/* Social Icons */}
                <div className="flex gap-4 mt-auto">

                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s Instagram`}
                      className="
                        w-12
                        h-12
                        rounded-full
                        flex
                        items-center
                        justify-center
                        bg-[#5B8A8D]/10
                        text-[#5B8A8D]
                        hover:bg-[#5B8A8D]
                        hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      <Instagram
                        size={21}
                        strokeWidth={1.8}
                      />
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={member.email}
                      aria-label={`Email ${member.name}`}
                      className="
                        w-12
                        h-12
                        rounded-full
                        flex
                        items-center
                        justify-center
                        bg-[#EA8166]/10
                        text-[#EA8166]
                        hover:bg-[#EA8166]
                        hover:text-white
                        transition-all
                        duration-300
                      "
                    >
                      <Mail
                        size={21}
                        strokeWidth={1.8}
                      />
                    </a>
                  )}

                </div>
              </div>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}