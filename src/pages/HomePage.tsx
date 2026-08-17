import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Hero } from "../components/Hero";
import { ImpactMetrics } from "../components/ImpactMetrics";

/* =========================================================
   PROGRAMS
   ========================================================= */

const programs = [
  {
    title: "Life Skills Education",
    description:
      "Teaching essential skills like critical thinking, communication, and problem-solving that empower students beyond the classroom.",
    image: "/images/lifeskills.jpg",
    featured: true,
  },
  {
    title: "Creative Arts",
    description:
      "Fostering creativity through art, crafts, and design workshops that help students express themselves and discover their talents.",
    image: "/images/creative_arts.png",
    featured: false,
  },
  {
    title: "Music & Performance",
    description:
      "Building confidence and teamwork through music, dance, and drama activities that celebrate cultural expression.",
    image: "/images/music_and_performance.jpg",
    featured: false,
  },
  {
    title: "Innovation & Technology",
    description:
      "Introducing students to technology, coding, and innovative thinking to prepare them for the digital future.",
    image: "/images/innovation_and_technology.jpg",
    featured: false,
  },
  {
    title: "Environmental Awareness",
    description:
      "Educating students about environmental conservation and sustainable practices for a better tomorrow.",
    image: "/images/environmental_awareness.png",
    featured: false,
  },
  {
    title: "Social Emotional Learning",
    description:
      "Developing emotional intelligence, empathy, and interpersonal skills for healthy relationships and well-being.",
    image: "/images/underserved.jpg",
    featured: false,
  },
];

/* =========================================================
   PARTNER LOGOS
   ========================================================= */

const partnerLogos = [
  {
    src: "/images/OFG_Nepal.png",
    alt: "OFG Nepal",
  },
  {
    src: "/images/artbeat_nepal.jpg",
    alt: "Artbeat",
  },
  {
    src: "/images/rising_star_school.png",
    alt: "Rising Star School",
  },
  {
    src: "/images/pravananda.png",
    alt: "Pravandana Ashram",
  },
  {
    src: "/images/bigyan_school.webp",
    alt: "Bigyan School",
  },
  {
    src: "/images/minnath_aadarsha_shikshya_sadan.png",
    alt: "Minnath Aadarsha Shikshya Sadan",
  },
  {
    src: "/images/mahendra_sewa.jpg",
    alt: "Nepal Secondary School",
  },
  {
    src: "/images/jantra.png",
    alt: "JANTRA",
  },
  {
    src: "/images/gaga_nepal.jpg",
    alt: "Gaga Nepal",
  },
];

/* =========================================================
   PROGRAM CARD
   ========================================================= */

function ProgramCard({
  title,
  description,
  image,
  featured = false,
}: {
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`
        group
        relative
        isolate
        h-full
        min-h-0
        overflow-hidden
        rounded-[22px]
        bg-[#0b3536]
        ${
          featured
            ? "min-h-[480px] sm:min-h-[520px] lg:min-h-[600px]"
            : "min-h-[360px] sm:min-h-[380px] lg:min-h-[290px]"
        }
      `}
    >
      {/* =====================================================
          FULL-BLEED IMAGE
          ===================================================== */}
      <img
        src={image}
        alt={title}
        className="
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-center
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.06]
        "
        loading="lazy"
      />

      {/* =====================================================
          BASE IMAGE OVERLAY
          ===================================================== */}
      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-gradient-to-t
          from-[#062f30]
          via-[#073d3e]/55
          to-black/10
        "
      />

      {/* Additional subtle overlay on hover */}
      <div
        className="
          absolute
          inset-0
          z-[2]
          bg-[#0b3536]/10
          transition-colors
          duration-300
          group-hover:bg-[#0b3536]/25
        "
      />

      {/* =====================================================
          CONTENT
          ===================================================== */}
      <div
        className={`
          absolute
          inset-x-0
          bottom-0
          z-10
          p-6
          sm:p-7
          ${featured ? "lg:p-10" : "lg:p-7"}
        `}
      >
        <div className="flex items-end justify-between gap-5">
          {/* Text */}
          <div className="min-w-0 flex-1">
            <h3
              className={`
                font-bold
                leading-[1.08]
                tracking-[-0.025em]
                text-white
                ${
                  featured
                    ? "text-[30px] sm:text-[36px] lg:text-[46px]"
                    : "text-[25px] sm:text-[28px] lg:text-[30px]"
                }
              `}
            >
              {title}
            </h3>

            <p
              className={`
                mt-4
                max-w-[700px]
                text-white/80
                ${
                  featured
                    ? "text-[17px] leading-[1.55] sm:text-[18px] lg:text-[20px]"
                    : "text-[15px] leading-[1.5] sm:text-[16px] lg:text-[17px]"
                }
              `}
            >
              {description}
            </p>
          </div>

          {/* Arrow */}
          <Link
            to="/programs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Learn more about ${title}`}
            className="
              flex
              h-14
              w-14
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#ff6948]
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
              hover:bg-[#f25d3d]
            "
          >
            <ArrowUpRight className="h-6 w-6" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   PARTNERS SECTION
   ========================================================= */

function PartnersSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:px-12
          lg:py-28
          xl:px-16
        "
      >
        <div className="mx-auto max-w-[1100px] text-center">
          <p
            className="
              mb-6
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#f26546]
              sm:text-[13px]
              lg:text-[14px]
            "
          >
            PARTNERS
          </p>

          <h2
            className="
              text-[40px]
              font-bold
              leading-[1]
              tracking-[-0.045em]
              text-[#18202f]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[64px]
              xl:text-[68px]
            "
          >
            Trusted by Leading Organizations
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[900px]
              text-[17px]
              leading-[1.55]
              text-[#6d7078]
              sm:text-[18px]
              lg:text-[20px]
            "
          >
            We collaborate with 30 partner organizations across Nepal to
            maximize our impact.
          </p>
        </div>
      </div>

      {/* Logo marquee */}
      <div className="relative w-full overflow-hidden pb-10 sm:pb-12 lg:pb-14">
        <div className="partner-marquee flex w-max items-center">
          <div
            className="
              flex
              shrink-0
              items-center
              gap-20
              px-10
              sm:gap-28
              sm:px-14
              lg:gap-36
              lg:px-20
              xl:gap-44
              xl:px-24
            "
          >
            {partnerLogos.map((partner, index) => (
              <div
                key={`partner-first-${index}`}
                className="
                  flex
                  h-[100px]
                  w-[150px]
                  shrink-0
                  items-center
                  justify-center
                  sm:h-[110px]
                  sm:w-[170px]
                  lg:h-[120px]
                  lg:w-[190px]
                "
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="
                    max-h-[90px]
                    max-w-[145px]
                    object-contain
                    opacity-75
                    grayscale
                    transition-all
                    duration-300
                    hover:opacity-100
                    hover:grayscale-0
                    sm:max-h-[100px]
                    sm:max-w-[165px]
                    lg:max-h-[110px]
                    lg:max-w-[185px]
                  "
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div
            className="
              flex
              shrink-0
              items-center
              gap-20
              px-10
              sm:gap-28
              sm:px-14
              lg:gap-36
              lg:px-20
              xl:gap-44
              xl:px-24
            "
            aria-hidden="true"
          >
            {partnerLogos.map((partner, index) => (
              <div
                key={`partner-second-${index}`}
                className="
                  flex
                  h-[100px]
                  w-[150px]
                  shrink-0
                  items-center
                  justify-center
                  sm:h-[110px]
                  sm:w-[170px]
                  lg:h-[120px]
                  lg:w-[190px]
                "
              >
                <img
                  src={partner.src}
                  alt=""
                  className="
                    max-h-[90px]
                    max-w-[145px]
                    object-contain
                    opacity-75
                    grayscale
                    transition-all
                    duration-300
                    hover:opacity-100
                    hover:grayscale-0
                    sm:max-h-[100px]
                    sm:max-w-[165px]
                    lg:max-h-[110px]
                    lg:max-w-[185px]
                  "
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-20 sm:pb-24 lg:pb-28">
        <Link
          to="/partners"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            inline-flex
            items-center
            gap-3
            text-[16px]
            font-semibold
            text-[#0b5557]
            transition-colors
            duration-200
            hover:text-[#f26546]
            sm:text-[17px]
            lg:text-[18px]
          "
        >
          <span>Meet all our partners</span>

          <ArrowRight
            className="
              h-[19px]
              w-[19px]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>
      </div>

      <style>{`
        @keyframes vidhataPartnerMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .partner-marquee {
          animation: vidhataPartnerMarquee 95s linear infinite;
          will-change: transform;
        }

        .partner-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 1024px) {
          .partner-marquee {
            animation-duration: 80s;
          }
        }

        @media (max-width: 768px) {
          .partner-marquee {
            animation-duration: 65s;
          }
        }

        @media (max-width: 480px) {
          .partner-marquee {
            animation-duration: 55s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   RECOGNITION SECTION
   ========================================================= */

function RecognitionSection() {
  return (
    <section
      id="recognition"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0b3536]
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1700px]
          grid-cols-1
          items-center
          gap-12
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]
          lg:gap-16
          lg:px-12
          lg:py-28
          xl:gap-24
          xl:px-16
          xl:py-32
          2xl:gap-28
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-[18px]
            sm:rounded-[20px]
            lg:rounded-[21px]
          "
        >
          <img
            src="/images/glocal-award.png"
            alt="Vidhata receiving recognition for youth leadership and social impact"
            className="
              block
              aspect-[1.5/1]
              h-auto
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              hover:scale-[1.025]
            "
            loading="lazy"
          />
        </div>

        <div className="flex min-w-0 flex-col items-start">
          <p
            className="
              mb-6
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#f6b51b]
              sm:text-[13px]
              lg:text-[14px]
            "
          >
            RECOGNITION
          </p>

          <h2
            className="
              max-w-[850px]
              text-[42px]
              font-bold
              leading-[0.98]
              tracking-[-0.045em]
              text-white
              sm:text-[50px]
              md:text-[58px]
              lg:text-[58px]
              xl:text-[64px]
              2xl:text-[68px]
            "
          >
            Recognized for Youth
            <br />
            Leadership &amp; Social Impact
          </h2>

          <p
            className="
              mt-7
              max-w-[760px]
              text-[17px]
              leading-[1.58]
              text-white/65
              sm:text-[18px]
              md:text-[19px]
              lg:text-[20px]
              xl:text-[21px]
            "
          >
            Our work has received formal recognition for its contribution to
            social impact, youth leadership, and community development at both
            national and international platforms — including the Glocal Teen
            Hero award.
          </p>

          <div
            className="
              mt-9
              flex
              w-full
              flex-col
              items-start
              gap-6
              sm:mt-10
              sm:flex-row
              sm:items-center
              sm:gap-8
              lg:mt-11
              xl:gap-9
            "
          >
            <Link
              to="/recognitions"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                min-h-[58px]
                items-center
                justify-center
                gap-4
                rounded-full
                bg-[#ff6948]
                px-8
                text-[16px]
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#f25d3d]
                hover:shadow-xl
                sm:min-h-[60px]
                sm:px-9
                sm:text-[17px]
                lg:px-10
              "
            >
              <span>Our Recognitions</span>

              <ArrowRight
                className="
                  h-[19px]
                  w-[19px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              to="https://glocalteenhero.com/aryan-basnet/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                border-b
                border-[#ff7658]/70
                pb-1
                text-[15px]
                font-semibold
                text-white/75
                transition-all
                duration-300
                hover:border-[#ff7658]
                hover:text-white
                sm:text-[16px]
                lg:text-[17px]
              "
            >
              <span>Read the Glocal Teen Hero feature</span>

              <ArrowUpRight
                className="
                  ml-2
                  h-[17px]
                  w-[17px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                "
              />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #recognition h2 br {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #recognition img,
          #recognition a {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   VOLUNTEER TRAJECTORY SECTION
   ========================================================= */

function VolunteerTrajectorySection() {
  const steps = [
    {
      number: "01",
      title: "Fill Out Application",
      description:
        "Complete our simple application form with your details, interests, and availability.",
    },
    {
      number: "02",
      title: "Interview Response",
      description:
        "Receive a response for an interview within 48 hours of submitting your application.",
    },
    {
      number: "03",
      title: "Start Your Journey",
      description:
        "Get matched with a project and start making an impact in students' lives right away.",
    },
  ];

  return (
    <section
      id="volunteer-trajectory"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#fbfaf8]
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1700px]
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:px-12
          lg:py-28
          xl:px-16
        "
      >
        <div className="mx-auto max-w-[1100px] text-center">
          <p
            className="
              mb-6
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.34em]
              text-[#f26546]
              sm:text-[13px]
              lg:text-[14px]
            "
          >
            VOLUNTEER TRAJECTORY
          </p>

          <h2
            className="
              text-[40px]
              font-bold
              leading-[0.98]
              tracking-[-0.045em]
              text-[#18202f]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[64px]
              xl:text-[68px]
            "
          >
            Your Journey to Making an Impact
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-[1000px]
              text-[17px]
              leading-[1.55]
              text-[#6d7078]
              sm:text-[18px]
              lg:text-[20px]
            "
          >
            Join our community of dedicated volunteers in just three simple
            steps. We make it easy for you to start transforming lives.
          </p>
        </div>

        <div
          className="
            relative
            mx-auto
            mt-20
            max-w-[1450px]
            sm:mt-24
            lg:mt-28
          "
        >
          <div
            className="
              absolute
              left-[40px]
              right-[40px]
              top-[40px]
              hidden
              border-t-2
              border-dashed
              border-[#d2d8d7]
              lg:block
            "
            aria-hidden="true"
          />

          <div
            className="
              relative
              grid
              grid-cols-1
              gap-14
              lg:grid-cols-3
              lg:gap-16
            "
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-start
                "
              >
                {index < steps.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[40px]
                      top-[80px]
                      h-[calc(100%+56px)]
                      border-l-2
                      border-dashed
                      border-[#d2d8d7]
                      lg:hidden
                    "
                    aria-hidden="true"
                  />
                )}

                <div
                  className="
                    relative
                    flex
                    h-20
                    w-20
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#15595a]
                    text-[22px]
                    font-bold
                    text-white
                    shadow-[0_12px_25px_rgba(11,53,54,0.16)]
                    sm:h-[82px]
                    sm:w-[82px]
                    sm:text-[23px]
                    lg:h-20
                    lg:w-20
                  "
                >
                  {step.number}
                </div>

                <div className="mt-9 max-w-[430px]">
                  <h3
                    className="
                      text-[27px]
                      font-bold
                      leading-[1.05]
                      tracking-[-0.035em]
                      text-[#18202f]
                      sm:text-[30px]
                      lg:text-[32px]
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-[16px]
                      leading-[1.55]
                      text-[#70727a]
                      sm:text-[17px]
                      lg:text-[18px]
                    "
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center sm:mt-20 lg:mt-16">
          <Link
            to="/volunteer"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              min-h-[64px]
              items-center
              justify-center
              gap-4
              rounded-full
              bg-[#ff6948]
              px-10
              text-[17px]
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#f25d3d]
              hover:shadow-xl
              sm:min-h-[70px]
              sm:px-12
              sm:text-[19px]
            "
          >
            <span>Start Your Application</span>

            <ArrowRight
              className="
                h-5
                w-5
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          <p
            className="
              mt-5
              text-[14px]
              font-medium
              text-[#8a8c93]
              sm:text-[15px]
            "
          >
            You'll hear back from us within 48 hours
          </p>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   GET INVOLVED SECTION
   ========================================================= */

function GetInvolvedSection() {
  return (
    <section
      id="get-involved"
      className="relative mb-8 w-full overflow-hidden bg-[#0b3536] sm:mb-10"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 0% 0%, rgba(83,87,78,0.38) 0%, rgba(83,87,78,0.16) 22%, transparent 46%), radial-gradient(circle at 100% 100%, rgba(91,119,91,0.28) 0%, transparent 38%)",
        }}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1600px]
          flex-col
          items-center
          px-5
          py-[88px]
          text-center
          sm:px-8
          sm:py-[104px]
          lg:px-12
          lg:py-[132px]
          xl:px-16
          xl:py-[154px]
        "
      >
        <p
          className="
            mb-7
            text-[12px]
            font-semibold
            uppercase
            tracking-[0.34em]
            text-[#ff7658]
            sm:mb-8
            sm:text-[13px]
            lg:text-[14px]
          "
        >
          GET INVOLVED
        </p>

        <h2
          className="
            max-w-[1000px]
            text-[42px]
            font-bold
            leading-[0.98]
            tracking-[-0.045em]
            text-white
            sm:text-[50px]
            md:text-[58px]
            lg:text-[64px]
            xl:text-[68px]
          "
        >
          Be Part of the Change
        </h2>

        <p
          className="
            mx-auto
            mt-7
            max-w-[900px]
            text-[17px]
            leading-[1.55]
            text-white/65
            sm:text-[18px]
            md:text-[19px]
            lg:text-[20px]
          "
        >
          Join our community of volunteers and partners helping underserved
          students
          <br className="hidden sm:block" />
          across Nepal discover their potential.
        </p>

        <div
          className="
            mt-12
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-4
            sm:mt-14
            sm:flex-row
            sm:gap-5
          "
        >
          <Link
            to="/volunteer"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              min-h-[58px]
              w-full
              max-w-[258px]
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#ff6948]
              px-8
              text-[16px]
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#f25d3d]
              hover:shadow-xl
              sm:w-auto
              sm:px-9
              sm:text-[17px]
            "
          >
            <span>Get Involved</span>

            <ArrowRight
              className="
                h-[19px]
                w-[19px]
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

          <Link
            to="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              min-h-[58px]
              w-full
              max-w-[210px]
              items-center
              justify-center
              rounded-full
              bg-white
              px-8
              text-[16px]
              font-semibold
              text-[#123b3c]
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#f5f5f3]
              hover:shadow-xl
              sm:w-auto
              sm:px-10
              sm:text-[17px]
            "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HOME PAGE
   ========================================================= */

export default function HomePage() {
  return (
    <>
      {/* =====================================================
          HERO
          ===================================================== */}
      <Hero />

      {/* =====================================================
          IMPACT METRICS
          ===================================================== */}
      <ImpactMetrics />

      {/* =====================================================
          ABOUT VIDHATA
          ===================================================== */}
      <section
        id="about-preview"
        className="relative overflow-hidden bg-[#faf9f6]"
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]
            px-5
            py-20
            sm:px-8
            sm:py-24
            lg:px-12
            lg:py-28
            xl:px-16
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[220px_minmax(0,1fr)]
              lg:gap-10
              xl:grid-cols-[260px_minmax(0,1fr)]
              xl:gap-12
            "
          >
            <div className="relative hidden lg:block">
              <div className="sticky top-28">
                <div
                  className="
                    select-none
                    text-[145px]
                    font-bold
                    leading-[0.75]
                    tracking-[-0.08em]
                    text-[#e5e7e6]
                    xl:text-[170px]
                    2xl:text-[185px]
                  "
                >
                  01
                </div>

                <div
                  className="
                    ml-1
                    mt-8
                    text-[12px]
                    font-semibold
                    tracking-[0.38em]
                    text-[#f26546]
                    xl:text-[13px]
                  "
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  WHO WE ARE
                </div>
              </div>
            </div>

            <div className="min-w-0">
              <div className="mb-8 flex items-center gap-4 lg:hidden">
                <span
                  className="
                    text-7xl
                    font-bold
                    leading-none
                    tracking-[-0.06em]
                    text-[#e5e7e6]
                  "
                >
                  01
                </span>

                <span
                  className="
                    text-xs
                    font-semibold
                    tracking-[0.28em]
                    text-[#f26546]
                  "
                >
                  WHO WE ARE
                </span>
              </div>

              <p
                className="
                  mb-5
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-[#f26546]
                  sm:text-[13px]
                  lg:text-[14px]
                "
              >
                ABOUT VIDHATA
              </p>

              <h2
                className="
                  max-w-[1100px]
                  text-[40px]
                  font-bold
                  leading-[1]
                  tracking-[-0.045em]
                  text-[#18202f]
                  sm:text-[48px]
                  md:text-[56px]
                  lg:text-[62px]
                  xl:text-[68px]
                "
              >
                Transforming Education in Nepal
              </h2>

              <p
                className="
                  mt-7
                  max-w-[1000px]
                  text-[17px]
                  leading-[1.58]
                  text-[#6d7078]
                  sm:text-[18px]
                  md:text-[19px]
                  lg:text-[20px]
                  xl:text-[21px]
                "
              >
                Vidhata is dedicated to providing structured non-academic
                learning opportunities that foster holistic development among
                underserved students. Through our streamlined volunteering
                gateway, we connect passionate educators with students across
                Nepal, creating lasting impact in communities that need it
                most.
              </p>

              <div
                className="
                  mt-12
                  rounded-[20px]
                  bg-[#0b3536]
                  px-7
                  py-8
                  sm:mt-14
                  sm:px-9
                  sm:py-10
                  md:px-11
                  md:py-11
                  lg:mt-16
                  lg:rounded-[23px]
                  lg:px-14
                  lg:py-14
                  xl:px-16
                  xl:py-14
                "
              >
                <p
                  className="
                    mb-6
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.32em]
                    text-[#ff7658]
                    sm:text-[13px]
                    lg:text-[14px]
                  "
                >
                  OUR MISSION
                </p>

                <p
                  className="
                    max-w-[1120px]
                    text-[19px]
                    font-medium
                    leading-[1.45]
                    tracking-[-0.015em]
                    text-white
                    sm:text-[21px]
                    md:text-[23px]
                    lg:text-[25px]
                    xl:text-[27px]
                  "
                >
                  To bridge the gap in educational opportunities by providing
                  comprehensive, non-academic learning experiences that empower
                  underserved students across Nepal to develop into confident,
                  creative, and compassionate individuals ready to shape their
                  own futures and contribute meaningfully to their communities.
                </p>
              </div>

              <div className="mt-9 sm:mt-11">
                <Link
                  to="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    text-[15px]
                    font-semibold
                    text-[#0b5557]
                    transition-colors
                    duration-200
                    hover:text-[#f26546]
                    sm:text-[16px]
                  "
                >
                  <span>Learn more about our story</span>

                  <ArrowRight
                    className="
                      h-[18px]
                      w-[18px]
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
          ===================================================== */}
      <section className="relative w-full overflow-hidden bg-white">
        <div
          className="
            relative
            w-full
            overflow-hidden
            border-y
            border-gray-100
            py-5
            sm:py-6
            lg:py-7
          "
        >
          <div className="values-marquee flex w-max whitespace-nowrap">
            {[1, 2].map((set) => (
              <div
                key={set}
                className="flex items-center"
                aria-hidden={set === 2}
              >
                {[
                  "Confidence",
                  "Community",
                  "Innovation",
                  "Empathy",
                  "Leadership",
                  "Holistic Growth",
                  "Life Skills",
                ].map((value) => (
                  <div key={`${set}-${value}`} className="flex items-center">
                    <span
                      className="
                        mx-7
                        text-[20px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#a7a9ad]
                        sm:mx-10
                        sm:text-[25px]
                        lg:mx-12
                        lg:text-[32px]
                      "
                    >
                      {value}
                    </span>

                    <span
                      className="
                        text-[22px]
                        text-[#f26546]
                        sm:text-[27px]
                        lg:text-[32px]
                      "
                    >
                      *
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PROGRAMS — COMPREHENSIVE LEARNING EXPERIENCES
          ========================================================= */}
      <section
        id="programs-preview"
        className="
          bg-[#faf9f6]
          py-20
          sm:py-24
          lg:py-28
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]
            px-5
            sm:px-8
            lg:px-12
            xl:px-16
          "
        >
          {/* =====================================================
              HEADING
              ===================================================== */}
          <div
            className="
              mx-auto
              mb-12
              max-w-[950px]
              text-center
              sm:mb-14
              lg:mb-16
            "
          >
            <p
              className="
                mb-5
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.32em]
                text-[#f26546]
                sm:text-[13px]
                lg:text-[14px]
              "
            >
              OUR PROGRAMS
            </p>

            <h2
              className="
                text-[42px]
                font-bold
                leading-[0.98]
                tracking-[-0.045em]
                text-[#18202f]
                sm:text-[50px]
                md:text-[58px]
                lg:text-[64px]
              "
            >
              Comprehensive Learning
              <br className="hidden sm:block" />
              Experiences
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-[900px]
                text-[17px]
                leading-[1.55]
                text-[#6d7078]
                sm:text-[18px]
                lg:text-[20px]
              "
            >
              Diverse programs designed to nurture every aspect of student
              development — from creativity and innovation to emotional
              intelligence and social responsibility.
            </p>
          </div>

          {/* =====================================================
              DESKTOP BENTO GRID
              ===================================================== */}
          <div
            className="
              hidden
              grid-cols-12
              gap-6
              lg:grid
            "
          >
            <div className="col-span-8 row-span-2 min-h-[600px]">
              <ProgramCard {...programs[0]} />
            </div>

            <div className="col-span-4 min-h-[290px]">
              <ProgramCard {...programs[1]} />
            </div>

            <div className="col-span-4 min-h-[290px]">
              <ProgramCard {...programs[2]} />
            </div>

            <div className="col-span-4 min-h-[290px]">
              <ProgramCard {...programs[3]} />
            </div>

            <div className="col-span-4 min-h-[290px]">
              <ProgramCard {...programs[4]} />
            </div>

            <div className="col-span-4 min-h-[290px]">
              <ProgramCard {...programs[5]} />
            </div>
          </div>

          {/* =====================================================
              TABLET / MOBILE GRID
              ===================================================== */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:hidden">
            {programs.map((program) => (
              <div
                key={program.title}
                className={program.featured ? "sm:col-span-2" : ""}
              >
                <ProgramCard {...program} />
              </div>
            ))}
          </div>

          {/* =====================================================
              EXPLORE PROGRAMS
              ===================================================== */}
          <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
            <Link
              to="/programs"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                min-h-[54px]
                w-full
                max-w-[390px]
                items-center
                justify-center
                gap-3
                rounded-full
                border-[2px]
                border-[#155657]
                px-6
                py-3
                text-[17px]
                font-medium
                text-[#155657]
                transition-all
                duration-300
                hover:bg-[#155657]
                hover:text-white
                sm:min-h-[58px]
                sm:max-w-[420px]
                sm:px-7
                sm:text-[19px]
                lg:min-h-[60px]
                lg:max-w-[440px]
                lg:text-[20px]
              "
            >
              <span>Explore Our Programs</span>

              <ArrowRight
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          PARTNERS
          ========================================================= */}
      <PartnersSection />

      {/* =========================================================
          RECOGNITION
          ========================================================= */}
      <RecognitionSection />

      {/* =========================================================
          VOLUNTEER TRAJECTORY
          ========================================================= */}
      <VolunteerTrajectorySection />

      {/* =========================================================
          GET INVOLVED
          ========================================================= */}
      <GetInvolvedSection />

      {/* =========================================================
          MARQUEE CSS
          ========================================================= */}
      <style>{`
        @keyframes vidhataTextMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .values-marquee {
          animation: vidhataTextMarquee 34s linear infinite;
          will-change: transform;
        }

        .values-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .values-marquee {
            animation-duration: 28s;
          }
        }

        @media (max-width: 480px) {
          .values-marquee {
            animation-duration: 24s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .values-marquee {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
