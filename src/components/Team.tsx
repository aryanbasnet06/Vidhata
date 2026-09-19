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
      image: "/images/aryan_basnet_founder_vidhata.png",
      description:
        "Aryan is a technologist, social entrepreneur, policy researcher, and AI engineer. As the Founder & CEO, he leads the organization’s vision, strategy, and growth, bringing together his interests in technology, education, and social development. His work spans artificial intelligence, entrepreneurship, research, and public policy, with a particular focus on using technology and innovation to address complex societal challenges. His areas of interest include AI, education, economics, and public policy, with a broader commitment to creating practical and sustainable solutions that expand opportunities for underserved communities.",
      instagram: "https://www.instagram.com/__aryanbasnet__/",
      email: "mailto:basnetaryan05@gmail.com",
    },
    {
      name: "Yunisha Mainali",
      position: "Chief Operating Officer",
      image: "/images/yunisha_mainali.png",
      description:
        "Yunisha is a dedicated and thoughtful leader with a strong foundation in business and organizational management. As the Chief Operating Officer, she oversees daily operations, coordinates teams, and works to ensure that the organization’s initiatives are executed smoothly and effectively. With a BBA background, she brings a practical understanding of planning, management, and organizational strategy to her role. Her ability to align people, streamline processes, and keep teams focused on shared goals helps strengthen Vidhata’s operations and ensures that its programs reach students effectively.",
      instagram: "http://instagram.com/yuni.tuni/",
      email: "mailto:yunishamainali@gmail.com",
    },
    {
      name: "Irashu Karki",
      position: "Chief of Curriculum Development",
      image: "/images/irashu_karki.png",
      description:
        "Irashu is an aspiring educator, interdisciplinary thinker, and purpose-driven leader committed to shaping meaningful learning experiences for young students across Nepal. As the Chief of Curriculum Development, she blends pedagogical insight, storytelling, and design-driven thinking to create interactive modules that spark curiosity and build foundational life skills in learners. Irashu brings a rare combination of empathy, clarity, and creativity into every classroom she steps into.",
      email: "mailto:irashukarki200@gmail.com",
    },
    {
      name: "Krizma Poudel",
      position: "Chief of Project Management",
      image: "/images/krizma_poudel.png",
      description:
        "Krizma is a dedicated and organized leader with a strong focus on turning ideas into meaningful action. As Chief of Project Management, she brings a structured approach to planning, coordination, and execution, ensuring that Vidhata’s initiatives are carried out effectively and with purpose. Her ability to manage teams, connect different areas of work, and keep projects moving forward makes her an important part of Vidhata’s leadership and impact.",
      instagram: "http://instagram.com/_kreezma/",
      email: "mailto:krizmapoudel1@gmail.com",
    },
     {
      name: "Siddhant Pokharel",
      position: "Chief Administrative Officer",
      image: "/images/siddhant_pokharel.png",
      description:
        "Siddhant is a youth leader, entrepreneur, and aspiring aerospace engineer with experience spanning across engineering, environmental science, and STEM education. He has worked in embedded systems, contributed to the development and testing of Nepal’s first rocket, and founded and led STEM outreach programs across Nepal that have engaged thousands of students.As Chief Administrative Officer at Vidhata, Siddhant oversees the organization’s administrative and operational functions, including internal coordination, volunteer recruitment, onboarding, and team management. He works closely with Vidhata’s leadership and program teams to strengthen internal systems, streamline communication, coordinate activities, and ensure effective execution of organizational initiatives.",
      instagram: "https://www.instagram.com/__siddhant_69__/",
      email: "mailto:pokhrel.siddhant69@gmail.com",
    },
    {
      name: "Anish Acharya",
      position: "Chief of Outreach and Media",
      image: "/images/anish_acharya.png",
      description:
        "Anish is a dedicated youth leader and a student of Development Studies, serving as the Chief of Outreach and Media. He brings experience in community engagement, communication, and youth-led initiatives, with a strong interest in creating meaningful connections between people and organizations. Through his involvement in outreach activities, volunteering, and collaborative projects, he has developed a thoughtful approach to building partnerships and communicating ideas effectively. His strong communication skills and community-focused perspective make him an important part of Vidhata’s outreach, visibility, and engagement.",
      instagram: "https://www.instagram.com/krazyyanishh/",
      email: "mailto:acharyaanish34@gmail.com",
    },
    
    {
      name: "Bharat Oli",
      position: "Chief Community Officer",
      image: "/images/bharat_oli.png",
      description:
        "Bharat is a people-focused student leader serving as the Chief Community Officer, dedicated to building a strong, connected, and welcoming organizational community. He brings a thoughtful approach to volunteer engagement, team-building, and creating meaningful opportunities for members to connect beyond their regular responsibilities. Through his work at Vidhata, he contributes to fostering a positive and inclusive culture where volunteers feel valued, involved, and motivated to grow together. His leadership and initiative strengthen the sense of community that lies at the heart of Vidhata.",
      instagram: "https://www.instagram.com/inochiren/",
      email: "mailto:olibharat947@gmail.com",
    },
    {
      name: "Sapana Bastola",
      position: "Chief Financial Officer",
      image: "/images/sapana_bastola.png",
      description:
        "Sapana is a finance enthusiast, writer, and emerging youth leader aspiring to be a people-oriented changemaker. As the Chief Financial Officer, she works at the intersection of financial strategy, resource management, and organizational growth. Her interests extend across literature, mathematics, finance, and volunteering, bringing together both analytical thinking and a curiosity for people and ideas. She is someone who looks beyond the obvious, searching for depth and meaning as she explores the world around her. Through her work, decisions, and ideas, she hopes to keep learning, contributing, and growing while creating meaningful impact along the way.",
      instagram: "http://instagram.com/citentia.felix/",
      email: "mailto:sapanabastola9@gmail.com",
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
              {/* LARGE CIRCULAR PROFILE IMAGE */}
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

              {/* CONTENT */}
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
                      <Instagram size={21} strokeWidth={1.8} />
                    </a>
                  )}

                  {member.email && (
                    <a
                      href={member.email}
                      target="_blank"
                      rel="noopener noreferrer"
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
                      <Mail size={21} strokeWidth={1.8} />
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