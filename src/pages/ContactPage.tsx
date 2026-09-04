import { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Instagram,
  Send,
  Check,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  /* =========================================================
     HERO REVEAL
  ========================================================= */

  useEffect(() => {
    // Trigger the hero text reveal after the page mounts
    const timer = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  /* =========================================================
     FORM SUBMIT
  ========================================================= */

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setSendError(false);

    const form = event.currentTarget;

    try {
      // The form field named "email" is sent to EmailJS as {{email}}.
      // In your EmailJS template, use {{email}} for the sender's email
      // and set the template's Reply-To field to {{email}}.
      await emailjs.sendForm(
        "service_mp2zfsb",
        "template_d4tiham",
        form,
        {
          publicKey: "ZpGq0EY0TbFbHhGBX",
        }
      );

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSendError(true);
    } finally {
      setIsSending(false);
    }
  };

  const handleDone = () => {
    setSubmitted(false);
  };

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    if (!submitted) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSubmitted(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [submitted]);

  /* =========================================================
     PREVENT BACKGROUND SCROLL WHEN MODAL IS OPEN
  ========================================================= */

  useEffect(() => {
    if (!submitted) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [submitted]);

  return (
    <>
      <main className="contact-page min-h-screen bg-[#fbfaf8]">

        {/* =========================================================
            CONTACT HERO
        ========================================================= */}

        <section className="contact-hero">

          {/* Background image */}
          <div className="contact-hero-background" />

          {/* Main teal wash */}
          <div className="contact-hero-overlay" />

          {/* Dark overlay */}
          <div className="contact-hero-dark-overlay" />

          {/* =====================================================
              HERO CONTENT
          ===================================================== */}

          <div
            className={`contact-hero-content ${
              isVisible ? "contact-hero-visible" : ""
            }`}
          >

            {/* EYEBROW */}

            <div className="contact-hero-eyebrow">
              CONTACT
            </div>


            {/* TITLE */}

            <h1 className="contact-hero-title">

              <span className="contact-title-normal">
                Get in{" "}
              </span>

              <span className="contact-title-highlight">
                Touch
              </span>

            </h1>


            {/* DESCRIPTION */}

            <p className="contact-hero-description">
              Have questions or want to get involved? We'd love to hear from
              you.
            </p>

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

              <h2 className="mb-5 text-[38px] font-extrabold leading-[1.12] tracking-[-0.04em] text-[#172033] sm:text-[43px] lg:text-[45px]">
                Let's Start a Conversation
              </h2>

              <p className="max-w-[650px] text-[20px] leading-[1.7] text-[#707581]">
                Whether you're a school, a potential volunteer, or an
                organization looking to partner — our team is ready to help
                you make a difference.
              </p>


              {/* ===================================================
                  CONTACT INFORMATION
              =================================================== */}

              <div className="mt-12 space-y-7">

                {/* EMAIL */}

                <div className="flex items-center gap-5">

                  <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#e8edeb]">

                    <Mail
                      size={24}
                      strokeWidth={2}
                      className="text-[#1F3839]"
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
                      className="text-[#1F3839]"
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
                      className="text-[#1F3839]"
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
                RIGHT SIDE — MESSAGE CARD
            ===================================================== */}

            <div className="rounded-[24px] border border-[#e8e8e8] bg-white p-8 shadow-[0_2px_8px_rgba(0,0,0,0.035)] sm:p-10 lg:p-12">

              <h3 className="mb-9 text-[30px] font-extrabold leading-[1.2] tracking-[-0.035em] text-[#172033]">
                Send Us a Message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

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
                    className="h-[60px] w-full rounded-[14px] border border-[#ddd9d5] bg-white px-4 text-[16px] text-[#202634] outline-none transition-all placeholder:text-[#737c87] focus:border-[#1F3839] focus:ring-2 focus:ring-[#1F3839]/10"
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
                    className="h-[60px] w-full rounded-[14px] border border-[#ddd9d5] bg-white px-4 text-[16px] text-[#202634] outline-none transition-all placeholder:text-[#737c87] focus:border-[#1F3839] focus:ring-2 focus:ring-[#1F3839]/10"
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
                    className="min-h-[145px] w-full resize-y rounded-[14px] border border-[#ddd9d5] bg-white px-4 py-4 text-[16px] leading-[1.5] text-[#202634] outline-none transition-all placeholder:text-[#737c87] focus:border-[#1F3839] focus:ring-2 focus:ring-[#1F3839]/10"
                  />

                </div>


                {/* SEND ERROR */}

                {sendError && (
                  <p
                    className="rounded-[14px] bg-red-50 px-4 py-3 text-[14px] leading-[1.5] text-red-700"
                    role="alert"
                  >
                    We couldn't send your message. Please try again, or email us
                    directly at contact.vidhata@gmail.com.
                  </p>
                )}

                {/* SEND BUTTON */}

                <button
                  type="submit"
                  disabled={isSending}
                  aria-busy={isSending}
                  className="group flex h-[61px] w-full items-center justify-center gap-3 rounded-full bg-[#f76543] text-[17px] font-semibold text-white shadow-[0_3px_7px_rgba(247,101,67,0.18)] transition-all duration-200 hover:bg-[#ed5b3a] hover:shadow-[0_5px_12px_rgba(247,101,67,0.22)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:bg-[#f76543] disabled:hover:shadow-[0_3px_7px_rgba(247,101,67,0.18)]"
                >

                  <Send
                    size={20}
                    strokeWidth={2}
                    className={`transition-transform duration-300 ${
                      isSending
                        ? "animate-pulse"
                        : "group-hover:translate-x-1"
                    }`}
                  />

                  <span>
                    {isSending ? "Sending..." : "Send Message"}
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
          className="success-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              handleDone();
            }
          }}
        >

          {/* BACKDROP */}

          <div className="success-backdrop" />


          {/* PARTICLE FIELD */}

          <div className="success-particles" aria-hidden="true">

            <span className="particle particle-1" />
            <span className="particle particle-2" />
            <span className="particle particle-3" />
            <span className="particle particle-4" />
            <span className="particle particle-5" />
            <span className="particle particle-6" />
            <span className="particle particle-7" />
            <span className="particle particle-8" />

          </div>


          {/* SUCCESS CARD */}

          <div className="success-card">

            <div className="success-card-glow" />


            {/* SUCCESS ICON */}

            <div className="success-icon-wrapper">

              <div className="success-ring success-ring-1" />

              <div className="success-ring success-ring-2" />

              <div className="success-ring success-ring-3" />


              <div className="success-icon-circle">

                <Check
                  size={44}
                  strokeWidth={3}
                  className="success-check"
                />

              </div>


              <Sparkles
                size={25}
                strokeWidth={2}
                className="success-sparkle success-sparkle-1"
                fill="#ff795c"
              />

              <Sparkles
                size={16}
                strokeWidth={2}
                className="success-sparkle success-sparkle-2"
                fill="#1f3839"
              />

            </div>


            {/* SUCCESS TEXT */}

            <div className="success-content">

              <div className="success-small-label">
                SUCCESS
              </div>

              <h2
                id="success-title"
                className="success-title"
              >
                Message Sent!
              </h2>

              <p className="success-description">
                Thank you for reaching out to Vidhata. Your message has been
                received successfully. We'll get back to you soon.
              </p>


              {/* STATUS */}

              <div className="success-status">

                <span className="success-status-dot" />

                <span>
                  Message received successfully
                </span>

              </div>


              {/* DONE */}

              <button
                type="button"
                onClick={handleDone}
                className="success-done-button group"
              >

                <span>
                  Done
                </span>

                <span className="success-button-icon">

                  <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                  />

                </span>

              </button>

            </div>

          </div>

        </div>
      )}


      {/* =========================================================
          SAME-FILE CSS
      ========================================================= */}

      <style>{`

        /* =========================================================
           CONTACT HERO
        ========================================================= */

        .contact-hero {
          --contact-green: #1f3839;
          --contact-orange: #ff795c;

          position: relative;
          width: 100%;
          height: 570px;

          overflow: hidden;

          display: flex;
          align-items: center;

          background: #1f3839;

          isolation: isolate;
        }


        /* =========================================================
           HERO BACKGROUND
        ========================================================= */

        .contact-hero-background {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          background-image: url("/images/contact.jpg");

          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;

          transform: scale(1.01);

          z-index: 0;
        }


        /* =========================================================
           TEAL OVERLAY
        ========================================================= */

        .contact-hero-overlay {
          position: absolute;
          inset: 0;

          z-index: 1;

          pointer-events: none;

          background:
            linear-gradient(
              90deg,
              rgba(31, 56, 57, 0.92) 0%,
              rgba(31, 56, 57, 0.86) 28%,
              rgba(31, 56, 57, 0.76) 58%,
              rgba(31, 56, 57, 0.68) 100%
            );
        }


        /* =========================================================
           DARK OVERLAY
        ========================================================= */

        .contact-hero-dark-overlay {
          position: absolute;
          inset: 0;

          z-index: 2;

          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              rgba(8, 24, 25, 0.08) 0%,
              rgba(8, 24, 25, 0.12) 55%,
              rgba(8, 24, 25, 0.22) 100%
            );
        }


        /* =========================================================
           HERO CONTENT
           
           THIS IS THE SAME STRUCTURE/EFFECT AS JOIN US
        ========================================================= */

        .contact-hero-content {
          position: relative;

          z-index: 3;

          width: calc(100% - 80px);
          max-width: 1690px;

          height: 100%;

          margin: 0 auto;

          display: flex;
          flex-direction: column;

          justify-content: center;
          align-items: flex-start;

          padding-top: 15px;

          opacity: 0;

          transform: translateY(35px);
        }


        /* =========================================================
           HERO CONTENT REVEAL

           SAME AS JOIN US
        ========================================================= */

        .contact-hero-visible {
          animation:
            contactHeroReveal
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }


        /* =========================================================
           EYEBROW INITIAL STATE

           SAME AS JOIN US
        ========================================================= */

        .contact-hero-eyebrow {
          margin-bottom: 30px;

          color: #ff795c;

          font-size: 15px;
          line-height: 1;

          font-weight: 700;

          letter-spacing: 5px;

          text-transform: uppercase;

          opacity: 0;

          transform: translateY(25px);
        }


        /* =========================================================
           EYEBROW REVEAL

           SAME TIMING AS JOIN US
        ========================================================= */

        .contact-hero-visible .contact-hero-eyebrow {
          animation:
            contactTextReveal
            0.75s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.05s
            forwards;
        }


        /* =========================================================
           HERO TITLE INITIAL STATE
        ========================================================= */

        .contact-hero-title {
          max-width: 1250px;

          margin: 0;

          color: #ffffff;

          font-size: clamp(55px, 5vw, 82px);

          line-height: 0.99;

          font-weight: 800;

          letter-spacing: -4px;

          text-align: left;

          opacity: 0;

          transform: translateY(35px);
        }


        /* =========================================================
           TITLE REVEAL

           SAME TIMING AS JOIN US
        ========================================================= */

        .contact-hero-visible .contact-hero-title {
          animation:
            contactTextReveal
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.15s
            forwards;
        }


        /* =========================================================
           NORMAL TITLE TEXT
        ========================================================= */

        .contact-title-normal {
          display: inline;
        }


        /* =========================================================
           ORANGE HIGHLIGHT

           No separate animation.

           This makes the entire title reveal together,
           exactly like the Join Us title.
        ========================================================= */

        .contact-title-highlight {
          display: inline;

          color: #ff795c;
        }


        /* =========================================================
           HERO DESCRIPTION INITIAL STATE
        ========================================================= */

        .contact-hero-description {
          max-width: 940px;

          margin: 36px 0 0;

          color: rgba(255, 255, 255, 0.78);

          font-size: 24px;

          line-height: 1.55;

          font-weight: 400;

          text-align: left;

          opacity: 0;

          transform: translateY(30px);
        }


        /* =========================================================
           DESCRIPTION REVEAL

           SAME TIMING AS JOIN US
        ========================================================= */

        .contact-hero-visible .contact-hero-description {
          animation:
            contactTextReveal
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.30s
            forwards;
        }


        /* =========================================================
           JOIN US STYLE HERO KEYFRAMES
        ========================================================= */

        @keyframes contactHeroReveal {

          0% {
            opacity: 0;
            transform: translateY(35px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }

        }


        @keyframes contactTextReveal {

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
           LARGE DESKTOP
        ========================================================= */

        @media (min-width: 1600px) {

          .contact-hero-content {
            padding-left: 8.7%;
            padding-right: 8.7%;
          }

        }


        /* =========================================================
           TABLET / SMALL DESKTOP
        ========================================================= */

        @media (max-width: 1200px) {

          .contact-hero {
            height: 560px;
          }

          .contact-hero-content {
            width: calc(100% - 70px);

            padding-top: 10px;
          }

          .contact-hero-title {
            font-size: 65px;

            letter-spacing: -3px;
          }

          .contact-hero-description {
            max-width: 760px;

            font-size: 20px;
          }

        }


        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 900px) {

          .contact-hero {
            height: 520px;
          }

          .contact-hero-content {
            width: calc(100% - 60px);

            padding-top: 10px;
          }

          .contact-hero-title {
            font-size: 58px;

            line-height: 1.02;

            letter-spacing: -2.8px;
          }

          .contact-hero-description {
            font-size: 19px;

            line-height: 1.55;
          }

        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 768px) {

          .contact-hero {
            min-height: 600px;

            height: auto;

            align-items: flex-end;
          }


          .contact-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(31, 56, 57, 0.48) 0%,
                rgba(31, 56, 57, 0.64) 35%,
                rgba(31, 56, 57, 0.84) 65%,
                rgba(31, 56, 57, 0.97) 100%
              );
          }


          .contact-hero-dark-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(8, 24, 25, 0.05) 0%,
                rgba(8, 24, 25, 0.18) 100%
              );
          }


          .contact-hero-content {
            width: calc(100% - 40px);

            height: auto;

            margin: 0 20px;

            padding:
              170px
              0
              55px;

            justify-content: flex-end;
          }


          .contact-hero-eyebrow {
            margin-bottom: 23px;

            font-size: 11px;

            letter-spacing: 4px;
          }


          .contact-hero-title {
            max-width: 100%;

            font-size: 45px;

            line-height: 1;

            letter-spacing: -2.2px;
          }


          .contact-hero-description {
            margin-top: 25px;

            font-size: 17px;

            line-height: 1.55;
          }

        }


        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 480px) {

          .contact-hero {
            min-height: 560px;
          }

          .contact-hero-content {
            width: calc(100% - 44px);

            margin-left: 22px;
            margin-right: 22px;

            padding:
              150px
              0
              50px;
          }


          .contact-hero-title {
            font-size: 39px;

            letter-spacing: -1.7px;
          }


          .contact-hero-description {
            font-size: 16px;
          }

        }


        /* =========================================================
           SUCCESS MODAL
        ========================================================= */

        .success-overlay {
          position: fixed;
          inset: 0;

          z-index: 99999;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 24px;

          overflow: hidden;

          isolation: isolate;

          animation:
            successOverlayIn
            0.45s
            ease-out
            both;
        }


        .success-backdrop {
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at center,
              rgba(31, 56, 57, 0.15),
              transparent 50%
            ),
            rgba(13, 25, 30, 0.72);

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          z-index: -1;
        }


        .success-particles {
          position: absolute;
          inset: 0;

          pointer-events: none;

          z-index: 1;
        }


        .particle {
          position: absolute;

          display: block;

          width: 8px;
          height: 8px;

          border-radius: 999px;

          opacity: 0;

          animation:
            particleFloat
            2.2s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }


        .particle-1 {
          left: 24%;
          top: 36%;

          width: 9px;
          height: 9px;

          background: #f76543;

          --x: -100px;
          --y: -110px;

          animation-delay: 0.15s;
        }


        .particle-2 {
          left: 72%;
          top: 32%;

          width: 7px;
          height: 7px;

          background: #ff795c;

          --x: 100px;
          --y: -90px;

          animation-delay: 0.25s;
        }


        .particle-3 {
          left: 27%;
          top: 66%;

          width: 6px;
          height: 6px;

          background: #1f3839;

          --x: -110px;
          --y: 90px;

          animation-delay: 0.35s;
        }


        .particle-4 {
          left: 75%;
          top: 67%;

          width: 9px;
          height: 9px;

          background: #f76543;

          --x: 110px;
          --y: 90px;

          animation-delay: 0.2s;
        }


        .particle-5 {
          left: 58%;
          top: 21%;

          width: 5px;
          height: 5px;

          background: #ff795c;

          --x: 45px;
          --y: -120px;

          animation-delay: 0.45s;
        }


        .particle-6 {
          left: 40%;
          top: 74%;

          width: 6px;
          height: 6px;

          background: #1f3839;

          --x: -40px;
          --y: 100px;

          animation-delay: 0.3s;
        }


        .particle-7 {
          left: 19%;
          top: 52%;

          width: 5px;
          height: 5px;

          background: #ff795c;

          --x: -120px;
          --y: 10px;

          animation-delay: 0.5s;
        }


        .particle-8 {
          left: 82%;
          top: 52%;

          width: 6px;
          height: 6px;

          background: #f76543;

          --x: 120px;
          --y: 10px;

          animation-delay: 0.4s;
        }


        .success-card {
          position: relative;

          z-index: 10;

          width: 100%;

          max-width: 510px;

          overflow: hidden;

          border-radius: 30px;

          padding:
            48px
            40px
            42px;

          text-align: center;

          background:
            linear-gradient(
              145deg,
              #ffffff 0%,
              #ffffff 70%,
              #f7faf9 100%
            );

          box-shadow:
            0 35px 100px rgba(0, 0, 0, 0.30),
            0 10px 35px rgba(31, 56, 57, 0.15);

          transform-origin: center center;

          animation:
            successCardIn
            0.72s
            cubic-bezier(0.16, 1, 0.3, 1)
            both;
        }


        .success-card-glow {
          position: absolute;

          top: -80px;
          left: 50%;

          width: 340px;
          height: 220px;

          transform: translateX(-50%);

          border-radius: 999px;

          background:
            radial-gradient(
              circle,
              rgba(31, 56, 57, 0.13) 0%,
              rgba(31, 56, 57, 0.05) 40%,
              transparent 72%
            );

          filter: blur(25px);

          pointer-events: none;

          animation:
            successGlow
            3s
            ease-in-out
            infinite;
        }


        .success-icon-wrapper {
          position: relative;

          width: 125px;
          height: 125px;

          margin:
            0
            auto
            28px;

          display: flex;
          align-items: center;
          justify-content: center;
        }


        .success-icon-circle {
          position: relative;

          z-index: 5;

          width: 82px;
          height: 82px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background:
            linear-gradient(
              145deg,
              #264b4c 0%,
              #1f3839 100%
            );

          box-shadow:
            0 15px 35px rgba(31, 56, 57, 0.28),
            inset 0 1px 1px rgba(255, 255, 255, 0.18);

          animation:
            successCirclePop
            0.75s
            cubic-bezier(0.34, 1.56, 0.64, 1)
            0.1s
            both;
        }


        .success-check {
          color: white;

          stroke-dasharray: 100;

          stroke-dashoffset: 100;

          animation:
            successCheckDraw
            0.7s
            cubic-bezier(0.65, 0, 0.35, 1)
            0.55s
            forwards;
        }


        .success-ring {
          position: absolute;

          left: 50%;
          top: 50%;

          width: 82px;
          height: 82px;

          border-radius: 50%;

          transform:
            translate(-50%, -50%)
            scale(0.55);

          pointer-events: none;
        }


        .success-ring-1 {
          border: 2px solid rgba(31, 56, 57, 0.30);

          animation:
            successRingOne
            1.5s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0.2s
            both;
        }


        .success-ring-2 {
          border: 2px solid rgba(31, 56, 57, 0.18);

          animation:
            successRingTwo
            1.7s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0.35s
            both;
        }


        .success-ring-3 {
          border: 1px solid rgba(247, 101, 67, 0.18);

          animation:
            successRingThree
            1.9s
            cubic-bezier(0.2, 0.8, 0.2, 1)
            0.5s
            both;
        }


        .success-sparkle {
          position: absolute;

          z-index: 8;

          pointer-events: none;

          opacity: 0;
        }


        .success-sparkle-1 {
          top: 8px;
          right: 4px;

          color: #ff795c;

          animation:
            sparkleAppear
            0.7s
            cubic-bezier(0.34, 1.56, 0.64, 1)
            0.7s
            forwards,
            sparkleFloat
            2.5s
            ease-in-out
            1.4s
            infinite;
        }


        .success-sparkle-2 {
          bottom: 9px;
          left: 5px;

          color: #1f3839;

          animation:
            sparkleAppear
            0.7s
            cubic-bezier(0.34, 1.56, 0.64, 1)
            0.9s
            forwards,
            sparkleFloatReverse
            2.8s
            ease-in-out
            1.5s
            infinite;
        }


        .success-content {
          position: relative;

          z-index: 3;
        }


        .success-small-label {
          margin-bottom: 9px;

          color: #ff795c;

          font-size: 11px;

          line-height: 1;

          font-weight: 800;

          letter-spacing: 4px;

          opacity: 0;

          animation:
            successTextUp
            0.5s
            ease-out
            0.7s
            forwards;
        }


        .success-title {
          margin: 0 0 14px;

          color: #172033;

          font-size: 36px;

          line-height: 1.05;

          font-weight: 800;

          letter-spacing: -1.8px;

          opacity: 0;

          animation:
            successTextUp
            0.6s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.78s
            forwards;
        }


        .success-description {
          max-width: 390px;

          margin:
            0
            auto
            25px;

          color: #707581;

          font-size: 17px;

          line-height: 1.65;

          opacity: 0;

          animation:
            successTextUp
            0.6s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.9s
            forwards;
        }


        .success-status {
          width: fit-content;

          margin:
            0
            auto
            28px;

          display: flex;
          align-items: center;
          gap: 9px;

          padding:
            9px
            15px;

          border-radius: 999px;

          background: rgba(31, 56, 57, 0.08);

          color: #1f3839;

          font-size: 13px;

          font-weight: 700;

          opacity: 0;

          animation:
            successStatusIn
            0.6s
            cubic-bezier(0.22, 1, 0.36, 1)
            1.05s
            forwards;
        }


        .success-status-dot {
          position: relative;

          width: 8px;
          height: 8px;

          border-radius: 50%;

          background: #1f3839;
        }


        .success-status-dot::after {
          content: "";

          position: absolute;

          inset: -4px;

          border-radius: 50%;

          background: rgba(31, 56, 57, 0.18);

          animation:
            statusPulse
            1.7s
            ease-out
            infinite;
        }


        .success-done-button {
          position: relative;

          width: 100%;

          max-width: 280px;

          height: 57px;

          margin: 0 auto;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          border: none;

          border-radius: 999px;

          background:
            linear-gradient(
              135deg,
              #f76543 0%,
              #ed5b3a 100%
            );

          color: white;

          font-size: 16px;

          font-weight: 700;

          cursor: pointer;

          box-shadow:
            0 10px 25px rgba(247, 101, 67, 0.22);

          opacity: 0;

          animation:
            successButtonIn
            0.65s
            cubic-bezier(0.22, 1, 0.36, 1)
            1.15s
            forwards;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }


        .success-done-button:hover {
          transform: translateY(-3px);

          box-shadow:
            0 15px 32px rgba(247, 101, 67, 0.30);
        }


        .success-done-button:active {
          transform: translateY(0);
        }


        .success-button-icon {
          width: 27px;
          height: 27px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.18);

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }


        .success-done-button:hover .success-button-icon {
          transform: translateX(4px);

          background: rgba(255, 255, 255, 0.25);
        }


        /* =========================================================
           SUCCESS KEYFRAMES
        ========================================================= */

        @keyframes successOverlayIn {

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

            transform:
              translateY(45px)
              scale(0.82)
              rotateX(8deg);
          }

          55% {
            opacity: 1;

            transform:
              translateY(-8px)
              scale(1.025)
              rotateX(0deg);
          }

          75% {
            transform:
              translateY(3px)
              scale(0.995);
          }

          100% {
            opacity: 1;

            transform:
              translateY(0)
              scale(1)
              rotateX(0deg);
          }

        }


        @keyframes successCirclePop {

          0% {
            opacity: 0;

            transform:
              scale(0.15)
              rotate(-25deg);
          }

          55% {
            opacity: 1;

            transform:
              scale(1.13)
              rotate(5deg);
          }

          75% {
            transform:
              scale(0.96)
              rotate(-2deg);
          }

          100% {
            opacity: 1;

            transform:
              scale(1)
              rotate(0);
          }

        }


        @keyframes successCheckDraw {

          0% {
            stroke-dashoffset: 100;
          }

          100% {
            stroke-dashoffset: 0;
          }

        }


        @keyframes successRingOne {

          0% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scale(0.55);
          }

          25% {
            opacity: 0.8;
          }

          100% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scale(1.55);
          }

        }


        @keyframes successRingTwo {

          0% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scale(0.55);
          }

          25% {
            opacity: 0.65;
          }

          100% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scale(1.85);
          }

        }


        @keyframes successRingThree {

          0% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scale(0.55);
          }

          25% {
            opacity: 0.5;
          }

          100% {
            opacity: 0;

            transform:
              translate(-50%, -50%)
              scale(2.15);
          }

        }


        @keyframes sparkleAppear {

          0% {
            opacity: 0;

            transform:
              scale(0)
              rotate(-45deg);
          }

          65% {
            opacity: 1;

            transform:
              scale(1.15)
              rotate(10deg);
          }

          100% {
            opacity: 1;

            transform:
              scale(1)
              rotate(0);
          }

        }


        @keyframes sparkleFloat {

          0%,
          100% {
            transform:
              translateY(0)
              rotate(0deg);
          }

          50% {
            transform:
              translateY(-7px)
              rotate(8deg);
          }

        }


        @keyframes sparkleFloatReverse {

          0%,
          100% {
            transform:
              translateY(0)
              rotate(0deg);
          }

          50% {
            transform:
              translateY(6px)
              rotate(-8deg);
          }

        }


        @keyframes successGlow {

          0%,
          100% {
            opacity: 0.5;

            transform:
              translateX(-50%)
              scale(0.9);
          }

          50% {
            opacity: 0.9;

            transform:
              translateX(-50%)
              scale(1.12);
          }

        }


        @keyframes successTextUp {

          from {
            opacity: 0;

            transform:
              translateY(18px);
          }

          to {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        @keyframes successStatusIn {

          from {
            opacity: 0;

            transform:
              translateY(12px)
              scale(0.92);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }

        }


        @keyframes successButtonIn {

          from {
            opacity: 0;

            transform:
              translateY(15px)
              scale(0.94);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }

        }


        @keyframes statusPulse {

          0% {
            opacity: 0.8;

            transform: scale(0.7);
          }

          70%,
          100% {
            opacity: 0;

            transform: scale(1.8);
          }

        }


        @keyframes particleFloat {

          0% {
            opacity: 0;

            transform:
              translate(0, 30px)
              scale(0);
          }

          20% {
            opacity: 1;

            transform:
              translate(
                calc(var(--x) * 0.15),
                calc(var(--y) * 0.15)
              )
              scale(1);
          }

          100% {
            opacity: 0;

            transform:
              translate(var(--x), var(--y))
              scale(0.8);
          }

        }


        /* =========================================================
           MOBILE SUCCESS CARD
        ========================================================= */

        @media (max-width: 640px) {

          .success-overlay {
            padding: 18px;
          }


          .success-card {
            max-width: 100%;

            border-radius: 25px;

            padding:
              38px
              24px
              32px;
          }


          .success-icon-wrapper {
            width: 110px;
            height: 110px;

            margin-bottom: 23px;
          }


          .success-icon-circle {
            width: 75px;
            height: 75px;
          }


          .success-title {
            font-size: 32px;

            letter-spacing: -1.4px;
          }


          .success-description {
            font-size: 16px;
          }


          .success-status {
            font-size: 12px;

            padding:
              8px
              12px;
          }

        }


        /* =========================================================
           VERY SMALL MOBILE
        ========================================================= */

        @media (max-width: 380px) {

          .success-card {
            padding:
              32px
              18px
              28px;
          }


          .success-title {
            font-size: 29px;
          }


          .success-description {
            font-size: 15px;
          }


          .success-status {
            font-size: 11px;
          }

        }


        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {

          .contact-hero-content,
          .contact-hero-eyebrow,
          .contact-hero-title,
          .contact-hero-description,
          .success-overlay,
          .success-card,
          .success-icon-circle,
          .success-check,
          .success-ring,
          .success-sparkle,
          .success-card-glow,
          .success-small-label,
          .success-title,
          .success-description,
          .success-status,
          .success-done-button,
          .particle {
            animation: none !important;
          }


          .contact-hero-content,
          .contact-hero-eyebrow,
          .contact-hero-title,
          .contact-hero-description,
          .success-overlay,
          .success-card,
          .success-icon-circle,
          .success-small-label,
          .success-title,
          .success-description,
          .success-status,
          .success-done-button {
            opacity: 1 !important;

            filter: none !important;

            transform: none !important;
          }


          .success-check {
            stroke-dashoffset: 0 !important;
          }

        }

      `}</style>
    </>
  );
}