import { Card } from "./ui/card";
import { Instagram, Mail } from "lucide-react";

export function Team() {
  const teamMembers = [
    {
      name: "Aryan Basnet",
      position: "Founder & Chief Executive Officer",
      image: "/images/aryanbasnet_founder.png",
      description:
        "Aryan is an emerging engineer and social entrepreneur with a strong commitment to social impact. With key expertise in social design, human-centric design, design thinking, and organizational leadership, Aryan spearheads change in the community through being an inventor. Using technology and design thinking as his foothold for innovation, he approaches every problem with a unique 360-degree view that keeps the user at the centre of solution building.",
      instagram: "https://www.instagram.com/__aryanbasnet__/",
      email: "mailto:basnetaryan05@gmail.com",
    },
    {
      name: "Akhilesh Regmi",
      position: "Chief Technology Officer",
      image: "/images/akhilesh_regmi.png",
      description:
        "Akhilesh Regmi is a multidisciplinary technologist and creative problem-solver with a strong commitment to innovation. As Chief Technology Officer, he blends technical expertise with design-oriented thinking to build intuitive, scalable digital solutions. His logical approach and creative perspective guide the organization’s technology strategy and its mission-driven impact.",
      instagram: "https://www.instagram.com/akhilesh_regmi/",
      email: "mailto:akhileshregmi@gmail.com",
    },
    {
      name: "Swapnil Bhattarai",
      position: "Chief of Curriculum Development",
      image: "/images/swapnil_bhattarai.png",
      description:
        "Swapnil Bhattarai is an aspiring educator, interdisciplinary thinker, and purpose-driven leader committed to shaping meaningful learning experiences for young students across Nepal. As the Chief of Curriculum Development, he blends pedagogical insight, storytelling, and design-driven thinking to create interactive modules that spark curiosity and build foundational life skills in learners. Swapnil brings a rare combination of empathy, clarity, and creativity into every classroom he steps into.",
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
        "Bigyashree Khatri is a committed youth activist and a student of psychology and social work, serving as the Chief of Project Management. She has strong experience in planning and executing impact-driven projects in areas such as mental health, climate advocacy, and SRHR awareness. Through her leadership in events, volunteering initiatives, and Model United Nations, she effectively translates ideas into organized action. Her structured approach and community-focused mindset make her a vital force behind Vidhata’s programs and impact.",
      instagram: "https://www.instagram.com/bigyashre.e/",
      email: "mailto:bigyashreez@gmail.com",
    },
    {
      name: "Bharat Oli",
      position: "Chief of Outreach and Media",
      image: "images/bharat_oli.png",
      description:
        "Bharat Oli is a dynamic student leader serving as the Chief of Outreach and Media, with a strong focus on public engagement and strategic communication. He brings experience in outreach planning, media coordination, and content creation to amplify organizational impact. Through his work at Vidhata, he has supported programs for underserved students while driving campaigns and audience engagement across platforms. His clarity in messaging and partnership-building strengthens Vidhata’s visibility and outreach.",
      instagram: "https://www.instagram.com/_olibharat/",
      email: "mailto:olibharat947@gmail.com",
    },
  ];

  return (
    <section id="team" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[#5B8A8D] text-base sm:text-lg mb-3 tracking-wide font-semibold">
            OUR TEAM
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Meet the People Behind Vidhata
          </h3>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Our dedicated leadership team brings together expertise in
            education, operations, technology, and curriculum development to
            create lasting impact across Nepal.
          </p>
        </div>

        {/* Team Grid — 3 Rows × 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="
                rounded-xl
                shadow-md
                hover:shadow-xl
                transition-all
                p-10
                flex
                flex-col
                items-center
                text-center
                bg-white
                border border-gray-100
              "
            >
              {/* Image */}
              <div className="mb-6">
                <div className="h-40 w-40 rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-3xl font-semibold">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>

              {/* Name */}
              <h4 className="text-2xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h4>

              {/* Position */}
              <p className="text-[#5B8A8D] font-medium text-lg mb-4">
                {member.position}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-auto">
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      w-11 h-11
                      rounded-full
                      flex items-center justify-center
                      bg-[#5B8A8D]/10
                      text-[#5B8A8D]
                      hover:bg-[#5B8A8D]
                      hover:text-white
                      transition-all
                    "
                  >
                    <Instagram size={20} />
                  </a>
                )}

                {member.email && (
                  <a
                    href={member.email}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
              w-11 h-11
              rounded-full
              flex items-center justify-center
              bg-[#EA8166]/10
              text-[#EA8166]
              hover:bg-[#EA8166]
              hover:text-white
              transition-all
            "
                  >
                    <Mail size={20} />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
