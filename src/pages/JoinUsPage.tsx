import {
  ArrowUpRight,
  Building2,
  Clock3,
  HandCoins,
  HandHeart,
  Megaphone,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function JoinUsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the hero text reveal after the page mounts
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <main className="join-us-page bg-[#FCFAF7] text-[#1F2533]">
      {/* =========================
          HERO
      ========================== */}
      <section className="relative min-h-[614px] overflow-hidden">
        <img
          src="/images/student_celebration.jpg"
          alt="Students celebrating success with Vidhata"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark teal overlay */}
        <div className="absolute inset-0 bg-[#123B3C]/85" />

        <div className="relative z-10 mx-auto flex min-h-[614px] max-w-7xl items-center px-6 sm:px-8 lg:px-12">
          <div
            className={`join-hero-content max-w-[1000px] pb-2 ${
              isVisible ? "join-hero-visible" : ""
            }`}
          >
            {/* Eyebrow */}
            <p className="join-hero-eyebrow mb-7 text-[14px] font-semibold uppercase tracking-[0.28em] text-[#FF7657]">
              Join Us
            </p>

            {/* Main heading */}
            <h1 className="join-hero-title max-w-[1000px] text-[58px] font-bold leading-[1.03] tracking-[-0.045em] text-white sm:text-[68px] lg:text-[78px]">
              Your Journey to Making an{" "}
              <span className="text-[#FF7657]">Impact</span>
            </h1>

            {/* Description */}
            <p className="join-hero-description mt-8 max-w-[950px] text-[21px] font-normal leading-[1.8] text-white/75 sm:text-[23px]">
              Join our community of dedicated volunteers in just three simple
              steps. We make it easy for you to start transforming lives.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          VOLUNTEER TRAJECTORY
      ========================== */}
      <section className="bg-[#FCFAF7] px-6 py-[100px] sm:px-8 lg:px-12 lg:py-[116px]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[14px] font-semibold uppercase tracking-[0.28em] text-[#FF6346]">
              Volunteer Trajectory
            </p>

            <h2 className="mt-6 text-[48px] font-bold leading-none tracking-[-0.045em] text-[#1F2533] sm:text-[54px] lg:text-[60px]">
              Three Simple Steps
            </h2>
          </div>

          <div className="relative mt-[88px]">
            {/* Connecting line */}
            <div className="absolute left-[4%] right-[4%] top-[42px] border-t-[3px] border-dashed border-[#D9DEDD]" />

            <div className="relative grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10">
              {/* Step 1 */}
              <div className="relative">
                <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#185B5D] text-[25px] font-semibold text-white shadow-[0_10px_20px_rgba(24,91,93,0.18)]">
                  01
                </div>

                <h3 className="mt-9 text-[29px] font-bold leading-tight tracking-[-0.025em] text-[#1F2533]">
                  Fill Out Application
                </h3>

                <p className="mt-5 max-w-[500px] text-[20px] leading-[1.55] text-[#747985]">
                  Complete our simple application form with your details,
                  interests, and availability.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#185B5D] text-[25px] font-semibold text-white shadow-[0_10px_20px_rgba(24,91,93,0.18)]">
                  02
                </div>

                <h3 className="mt-9 text-[29px] font-bold leading-tight tracking-[-0.025em] text-[#1F2533]">
                  Interview Response
                </h3>

                <p className="mt-5 max-w-[500px] text-[20px] leading-[1.55] text-[#747985]">
                  Receive a response for an interview within 48 hours of
                  submitting your application.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center rounded-full bg-[#185B5D] text-[25px] font-semibold text-white shadow-[0_10px_20px_rgba(24,91,93,0.18)]">
                  03
                </div>

                <h3 className="mt-9 text-[29px] font-bold leading-tight tracking-[-0.025em] text-[#1F2533]">
                  Start Your Journey
                </h3>

                <p className="mt-5 max-w-[500px] text-[20px] leading-[1.55] text-[#747985]">
                  Get matched with a project and start making an impact in
                  students&apos; lives right away.
                </p>
              </div>
            </div>
          </div>

          {/* Apply button */}
          <div className="mt-[76px] flex flex-col items-center">
            <a
              href="https://forms.gle/nQzovtKror3Ujb1H9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[74px] min-w-[235px] items-center justify-center gap-3 rounded-full bg-[#FF6547] px-9 text-[20px] font-semibold text-white shadow-[0_10px_20px_rgba(255,101,71,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F45B3D] hover:shadow-[0_14px_25px_rgba(255,101,71,0.24)]"
            >
              Apply Now
              <ArrowUpRight className="h-5 w-5" strokeWidth={2.2} />
            </a>

            <div className="mt-7 flex items-center gap-3 text-[17px] text-[#8A8D94]">
              <Clock3 className="h-[21px] w-[21px] text-[#FF6547]" />
              <span>You&apos;ll hear back from us within 48 hours</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          GET INVOLVED
      ========================== */}
      <section className="bg-white px-6 pb-[112px] pt-[112px] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center">
            <p className="text-[14px] font-semibold uppercase tracking-[0.28em] text-[#FF6346]">
              Get Involved
            </p>

            <h2 className="mt-6 text-[48px] font-bold leading-none tracking-[-0.045em] text-[#1F2533] sm:text-[54px] lg:text-[60px]">
              Be Part of the Change
            </h2>

            <p className="mx-auto mt-7 max-w-[1050px] text-[21px] leading-[1.55] text-[#747985] sm:text-[22px]">
              There are many ways to support our mission and help empower
              underserved students
              <br className="hidden sm:block" />
              across Nepal.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-[76px] grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {/* Become a Volunteer */}
            <div className="flex min-h-[374px] flex-col rounded-[20px] border border-[#E8E7E4] bg-[#FCFAF7] px-9 py-9 shadow-[0_2px_5px_rgba(20,30,30,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(20,30,30,0.08)]">
              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#E8ECEA]">
                <HandHeart
                  className="h-8 w-8 text-[#15585A]"
                  strokeWidth={2}
                />
              </div>

              <h3 className="mt-8 text-[24px] font-bold tracking-[-0.025em] text-[#1F2533]">
                Become a Volunteer
              </h3>

              <p className="mt-4 text-[18px] leading-[1.6] text-[#747985]">
                Join our community of 125+ passionate volunteers making a real
                difference in students&apos; lives.
              </p>

              <a
                href="https://forms.gle/nQzovtKror3Ujb1H9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-3 pt-8 text-[17px] font-semibold text-[#FF6346] transition-colors hover:text-[#E95135]"
              >
                Apply to Volunteer
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </a>
            </div>

            {/* Donate */}
            <div className="flex min-h-[374px] flex-col rounded-[20px] border border-[#E8E7E4] bg-[#FCFAF7] px-9 py-9 shadow-[0_2px_5px_rgba(20,30,30,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(20,30,30,0.08)]">
              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#E8ECEA]">
                <HandCoins
                  className="h-8 w-8 text-[#15585A]"
                  strokeWidth={2}
                />
              </div>

              <h3 className="mt-8 text-[24px] font-bold tracking-[-0.025em] text-[#1F2533]">
                Donate
              </h3>

              <p className="mt-4 text-[18px] leading-[1.6] text-[#747985]">
                Your financial support helps us expand our reach and provide
                quality learning experiences to more students.
              </p>

              <a
                href="https://forms.gle/nQzovtKror3Ujb1H9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-3 pt-8 text-[17px] font-semibold text-[#FF6346] transition-colors hover:text-[#E95135]"
              >
                Make a Donation
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </a>
            </div>

            {/* Partner With Us */}
            <div className="flex min-h-[374px] flex-col rounded-[20px] border border-[#E8E7E4] bg-[#FCFAF7] px-9 py-9 shadow-[0_2px_5px_rgba(20,30,30,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(20,30,30,0.08)]">
              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#E8ECEA]">
                <Building2
                  className="h-8 w-8 text-[#15585A]"
                  strokeWidth={2}
                />
              </div>

              <h3 className="mt-8 text-[24px] font-bold tracking-[-0.025em] text-[#1F2533]">
                Partner With Us
              </h3>

              <p className="mt-4 text-[18px] leading-[1.6] text-[#747985]">
                Join our network of 18 partner organizations to create
                sustainable impact across Nepal.
              </p>

              <a
                href="https://forms.gle/xCYWYBoA3AK2YoXN7"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-3 pt-8 text-[17px] font-semibold text-[#FF6346] transition-colors hover:text-[#E95135]"
              >
                Become a Partner
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </a>
            </div>

            {/* Spread the Word */}
            <div className="flex min-h-[374px] flex-col rounded-[20px] border border-[#E8E7E4] bg-[#FCFAF7] px-9 py-9 shadow-[0_2px_5px_rgba(20,30,30,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(20,30,30,0.08)]">
              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#E8ECEA]">
                <Megaphone
                  className="h-8 w-8 text-[#15585A]"
                  strokeWidth={2}
                />
              </div>

              <h3 className="mt-8 text-[24px] font-bold tracking-[-0.025em] text-[#1F2533]">
                Spread the Word
              </h3>

              <p className="mt-4 text-[18px] leading-[1.6] text-[#747985]">
                Help us reach more students and volunteers by sharing our
                mission with your network.
              </p>

              <a
                href="#share"
                className="mt-auto flex items-center gap-3 pt-8 text-[17px] font-semibold text-[#FF6346] transition-colors hover:text-[#E95135]"
              >
                Share Our Mission
                <ArrowUpRight className="h-5 w-5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HERO ANIMATION
      ========================================================= */}

      <style>{`
        /* =========================================================
           HERO CONTENT INITIAL STATE
        ========================================================= */

        .join-hero-content {
          opacity: 0;
          transform: translateY(35px);
        }


        /* =========================================================
           HERO CONTENT REVEAL
        ========================================================= */

        .join-hero-visible {
          animation:
            joinHeroReveal
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }


        @keyframes joinHeroReveal {
          0% {
            opacity: 0;
            transform: translateY(35px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* =========================================================
           EYEBROW INITIAL STATE
        ========================================================= */

        .join-hero-eyebrow {
          opacity: 0;
          transform: translateY(25px);
        }


        .join-hero-visible .join-hero-eyebrow {
          animation:
            joinTextReveal
            0.75s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.05s
            forwards;
        }


        /* =========================================================
           HERO TITLE INITIAL STATE
        ========================================================= */

        .join-hero-title {
          opacity: 0;
          transform: translateY(35px);
        }


        .join-hero-visible .join-hero-title {
          animation:
            joinTextReveal
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.15s
            forwards;
        }


        /* =========================================================
           HERO DESCRIPTION INITIAL STATE
        ========================================================= */

        .join-hero-description {
          opacity: 0;
          transform: translateY(30px);
        }


        .join-hero-visible .join-hero-description {
          animation:
            joinTextReveal
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.30s
            forwards;
        }


        /* =========================================================
           TEXT REVEAL
        ========================================================= */

        @keyframes joinTextReveal {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {
          .join-hero-content,
          .join-hero-eyebrow,
          .join-hero-title,
          .join-hero-description {
            opacity: 1;
            transform: none;
            animation: none !important;
          }
        }
      `}</style>
    </main>
  );
}