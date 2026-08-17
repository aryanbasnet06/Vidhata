import { FormEvent, useState } from "react";
import { Mail, MapPin, Instagram, Send, Check, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Show beautiful success state
    setSubmitted(true);
  };

  const handleDone = () => {
    setSubmitted(false);
  };

  return (
    <>
      <main className="min-h-screen bg-[#fbfaf8]">

        {/* =========================================================
            CONTACT HERO
        ========================================================= */}
        <section
          className="relative w-full overflow-hidden bg-[#537D80]"
          style={{ minHeight: "372px" }}
        >
          <div className="mx-auto flex min-h-[372px] max-w-[1500px] items-center px-6 py-16 sm:px-10 lg:px-20 xl:px-28">
            <div className="w-full max-w-[1100px]">

              {/* Eyebrow */}
              <div className="mb-7">
                <span className="text-[15px] font-bold uppercase tracking-[0.28em] text-[#ff795b]">
                  Contact
                </span>
              </div>

              {/* Heading */}
              <h1 className="mb-7 text-[54px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[64px] lg:text-[72px]">
                <span className="text-white">Get in </span>
                <span className="text-[#ff8064]">Touch</span>
              </h1>

              {/* Description */}
              <p className="max-w-[900px] text-[21px] leading-[1.6] text-white/80 sm:text-[23px]">
                Have questions or want to get involved? We'd love to hear from you.
              </p>

            </div>
          </div>
        </section>


        {/* =========================================================
            CONTACT CONTENT
        ========================================================= */}
        <section className="w-full bg-[#fbfaf8] px-6 py-16 sm:px-10 md:py-20 lg:px-20 xl:px-28">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

            {/* =====================================================
                LEFT SIDE
            ===================================================== */}
            <div className="pt-1 lg:pt-0">

              {/* Main heading */}
              <h2 className="mb-5 text-[38px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#172033] sm:text-[43px] lg:text-[45px]">
                Let's Start a Conversation
              </h2>

              {/* Description */}
              <p className="max-w-[650px] text-[20px] leading-[1.7] text-[#707581]">
                Whether you're a school, a potential volunteer, or an
                organization looking to partner — our team is ready to help
                you make a difference.
              </p>

              {/* Contact information */}
              <div className="mt-12 space-y-7">

                {/* EMAIL */}
                <div className="flex items-center gap-5">
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#e8edeb]">
                    <Mail
                      size={24}
                      strokeWidth={2}
                      className="text-[#125d63]"
                    />
                  </div>

                  <div>
                    <div className="mb-1 text-[14px] font-semibold uppercase tracking-[0.2em] text-[#96999f]">
                      Email
                    </div>

                    <div className="text-[19px] font-semibold text-[#202634]">
                      contact.vidhata@gmail.com
                    </div>
                  </div>
                </div>


                {/* LOCATION */}
                <div className="flex items-center gap-5">
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#e8edeb]">
                    <MapPin
                      size={24}
                      strokeWidth={2}
                      className="text-[#125d63]"
                    />
                  </div>

                  <div>
                    <div className="mb-1 text-[14px] font-semibold uppercase tracking-[0.2em] text-[#96999f]">
                      Location
                    </div>

                    <div className="text-[19px] font-semibold text-[#202634]">
                      Kathmandu, Nepal
                    </div>
                  </div>
                </div>


                {/* INSTAGRAM */}
                <div className="flex items-center gap-5">
                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#e8edeb]">
                    <Instagram
                      size={24}
                      strokeWidth={2}
                      className="text-[#125d63]"
                    />
                  </div>

                  <div>
                    <div className="mb-1 text-[14px] font-semibold uppercase tracking-[0.2em] text-[#96999f]">
                      Instagram
                    </div>

                    <div className="text-[19px] font-semibold text-[#202634]">
                      @vidhata.np
                    </div>
                  </div>
                </div>

              </div>
            </div>


            {/* =====================================================
                RIGHT SIDE - MESSAGE CARD
            ===================================================== */}
            <div className="rounded-[24px] border border-[#e8e8e8] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.035)] sm:p-10 lg:p-12">

              {/* Card heading */}
              <h3 className="mb-9 text-[30px] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#172033]">
                Send Us a Message
              </h3>


              <form onSubmit={handleSubmit} className="space-y-6">

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-[16px] font-semibold text-[#202634]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="h-[60px] w-full rounded-[14px] border border-[#ddd9d5] bg-white px-4 text-[16px] text-[#202634] outline-none transition-all placeholder:text-[#737c87] focus:border-[#537D80] focus:ring-2 focus:ring-[#537D80]/10"
                  />
                </div>


                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-[16px] font-semibold text-[#202634]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-[60px] w-full rounded-[14px] border border-[#ddd9d5] bg-white px-4 text-[16px] text-[#202634] outline-none transition-all placeholder:text-[#737c87] focus:border-[#537D80] focus:ring-2 focus:ring-[#537D80]/10"
                  />
                </div>


                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-[16px] font-semibold text-[#202634]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us how you'd like to get involved..."
                    className="min-h-[145px] w-full resize-y rounded-[14px] border border-[#ddd9d5] bg-white px-4 py-4 text-[16px] leading-[1.5] text-[#202634] outline-none transition-all placeholder:text-[#737c87] focus:border-[#537D80] focus:ring-2 focus:ring-[#537D80]/10"
                  />
                </div>


                {/* SEND BUTTON */}
                <button
                  type="submit"
                  className="group flex h-[61px] w-full items-center justify-center gap-3 rounded-full bg-[#f76543] text-[17px] font-semibold text-white shadow-[0_3px_7px_rgba(247,101,67,0.18)] transition-all duration-200 hover:bg-[#ed5b3a] hover:shadow-[0_5px_12px_rgba(247,101,67,0.22)] active:scale-[0.99]"
                >
                  <Send
                    size={20}
                    strokeWidth={2}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span>
                    Send Message
                  </span>
                </button>

              </form>
            </div>

          </div>
        </section>

      </main>


      {/* =========================================================
          SUCCESS MODAL
      ========================================================= */}
      {submitted && (
        <div
          className="success-overlay fixed inset-0 z-[9999] flex items-center justify-center px-5"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >

          {/* Background */}
          <div className="absolute inset-0 bg-[#172033]/60 backdrop-blur-md" />


          {/* Decorative particles */}
          <div className="success-particle particle-one" />
          <div className="success-particle particle-two" />
          <div className="success-particle particle-three" />
          <div className="success-particle particle-four" />
          <div className="success-particle particle-five" />


          {/* Success Card */}
          <div className="success-card relative z-10 w-full max-w-[500px] overflow-hidden rounded-[30px] bg-white px-7 py-10 text-center shadow-[0_30px_100px_rgba(0,0,0,0.25)] sm:px-12 sm:py-12">

            {/* Decorative top glow */}
            <div className="success-glow absolute left-1/2 top-0 h-[180px] w-[300px] -translate-x-1/2 rounded-full bg-[#537D80]/10 blur-[60px]" />


            {/* Icon */}
            <div className="relative mx-auto mb-7 flex h-[105px] w-[105px] items-center justify-center">

              {/* Outer rings */}
              <div className="success-ring absolute inset-0 rounded-full border-[2px] border-[#537D80]/20" />
              <div className="success-ring-two absolute inset-[7px] rounded-full border-[2px] border-[#537D80]/10" />

              {/* Main circle */}
              <div className="success-icon relative flex h-[78px] w-[78px] items-center justify-center rounded-full bg-[#537D80] shadow-[0_12px_30px_rgba(83,125,128,0.30)]">

                <Check
                  size={43}
                  strokeWidth={3}
                  className="check-animation text-white"
                />

              </div>
            </div>


            {/* Sparkle */}
            <div className="sparkle-animation absolute right-[25%] top-[85px]">
              <Sparkles
                size={24}
                className="text-[#ff8064]"
                fill="#ff8064"
              />
            </div>


            {/* Heading */}
            <h2
              id="success-title"
              className="success-title relative mb-4 text-[31px] font-extrabold tracking-[-0.04em] text-[#172033] sm:text-[35px]"
            >
              Message Sent!
            </h2>


            {/* Description */}
            <p className="relative mx-auto mb-8 max-w-[390px] text-[17px] leading-[1.7] text-[#707581]">
              Thank you for reaching out to Vidhata. Your message has been
              received successfully. We'll get back to you soon.
            </p>


            {/* Success indicator */}
            <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full bg-[#537D80]/10 px-4 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#537D80]" />

              <span className="text-[13px] font-semibold text-[#537D80]">
                Message received successfully
              </span>
            </div>


            {/* Done button */}
            <button
              type="button"
              onClick={handleDone}
              className="group mx-auto flex h-[56px] w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-[#f76543] text-[16px] font-semibold text-white shadow-[0_8px_20px_rgba(247,101,67,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ed5b3a] hover:shadow-[0_12px_28px_rgba(247,101,67,0.28)] active:translate-y-0"
            >
              <span>Done</span>

              <Check
                size={18}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </button>

          </div>
        </div>
      )}


      {/* =========================================================
          SAME-FILE CSS
      ========================================================= */}
      <style>{`

        /* =====================================================
           SUCCESS OVERLAY
        ===================================================== */

        .success-overlay {
          animation: overlayFadeIn 0.35s ease-out forwards;
        }


        /* =====================================================
           SUCCESS CARD
        ===================================================== */

        .success-card {
          animation:
            successCardIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }


        /* =====================================================
           ICON
        ===================================================== */

        .success-icon {
          animation:
            successIconPop 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) 0.12s
            both;
        }


        .check-animation {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation:
            drawCheck 0.65s ease-out 0.55s forwards;
        }


        /* =====================================================
           RINGS
        ===================================================== */

        .success-ring {
          animation:
            ringExpand 1.2s ease-out 0.35s both;
        }


        .success-ring-two {
          animation:
            ringExpandTwo 1.2s ease-out 0.45s both;
        }


        /* =====================================================
           TEXT
        ===================================================== */

        .success-title {
          animation:
            successTextIn 0.5s ease-out 0.35s both;
        }


        /* =====================================================
           SPARKLE
        ===================================================== */

        .sparkle-animation {
          animation:
            sparkleIn 0.7s ease-out 0.75s both,
            sparkleFloat 2.5s ease-in-out 1.5s infinite;
        }


        /* =====================================================
           GLOW
        ===================================================== */

        .success-glow {
          animation:
            glowPulse 2.5s ease-in-out infinite;
        }


        /* =====================================================
           PARTICLES
        ===================================================== */

        .success-particle {
          position: absolute;
          z-index: 5;
          width: 9px;
          height: 9px;
          border-radius: 9999px;
          opacity: 0;
        }


        .particle-one {
          left: 28%;
          top: 35%;
          background: #f76543;
          animation: particleOne 1.8s ease-out 0.2s forwards;
        }


        .particle-two {
          left: 68%;
          top: 30%;
          width: 7px;
          height: 7px;
          background: #537D80;
          animation: particleTwo 1.8s ease-out 0.35s forwards;
        }


        .particle-three {
          left: 25%;
          top: 65%;
          width: 6px;
          height: 6px;
          background: #ff8064;
          animation: particleThree 1.8s ease-out 0.45s forwards;
        }


        .particle-four {
          left: 73%;
          top: 66%;
          width: 8px;
          height: 8px;
          background: #537D80;
          animation: particleFour 1.8s ease-out 0.3s forwards;
        }


        .particle-five {
          left: 57%;
          top: 22%;
          width: 5px;
          height: 5px;
          background: #f76543;
          animation: particleFive 1.8s ease-out 0.5s forwards;
        }


        /* =====================================================
           KEYFRAMES
        ===================================================== */

        @keyframes overlayFadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }


        @keyframes successCardIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.92);
          }

          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.015);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }


        @keyframes successIconPop {
          0% {
            opacity: 0;
            transform: scale(0.2) rotate(-20deg);
          }

          65% {
            opacity: 1;
            transform: scale(1.12) rotate(3deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }


        @keyframes drawCheck {
          from {
            stroke-dashoffset: 100;
          }

          to {
            stroke-dashoffset: 0;
          }
        }


        @keyframes ringExpand {
          0% {
            opacity: 0;
            transform: scale(0.65);
          }

          50% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: scale(1.35);
          }
        }


        @keyframes ringExpandTwo {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }

          50% {
            opacity: 0.7;
          }

          100% {
            opacity: 0;
            transform: scale(1.55);
          }
        }


        @keyframes successTextIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }


        @keyframes sparkleIn {
          from {
            opacity: 0;
            transform: scale(0) rotate(-45deg);
          }

          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }


        @keyframes sparkleFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }

          50% {
            transform: translateY(-7px) rotate(8deg);
          }
        }


        @keyframes glowPulse {
          0%,
          100% {
            opacity: 0.5;
            transform: translateX(-50%) scale(0.9);
          }

          50% {
            opacity: 0.9;
            transform: translateX(-50%) scale(1.1);
          }
        }


        @keyframes particleOne {
          0% {
            opacity: 0;
            transform: translate(0, 30px) scale(0);
          }

          25% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(-80px, -100px) scale(1);
          }
        }


        @keyframes particleTwo {
          0% {
            opacity: 0;
            transform: translate(0, 30px) scale(0);
          }

          25% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(90px, -80px) scale(1);
          }
        }


        @keyframes particleThree {
          0% {
            opacity: 0;
            transform: translate(0, -10px) scale(0);
          }

          25% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(-100px, 80px) scale(1);
          }
        }


        @keyframes particleFour {
          0% {
            opacity: 0;
            transform: translate(0, -10px) scale(0);
          }

          25% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(100px, 80px) scale(1);
          }
        }


        @keyframes particleFive {
          0% {
            opacity: 0;
            transform: translate(0, 20px) scale(0);
          }

          25% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translate(40px, -110px) scale(1);
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 640px) {

          .success-card {
            border-radius: 24px;
            padding-top: 36px;
            padding-bottom: 36px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .success-overlay,
          .success-card,
          .success-icon,
          .check-animation,
          .success-ring,
          .success-ring-two,
          .success-title,
          .sparkle-animation,
          .success-glow,
          .success-particle {
            animation: none !important;
          }

          .check-animation {
            stroke-dashoffset: 0;
          }

        }

      `}</style>
    </>
  );
}