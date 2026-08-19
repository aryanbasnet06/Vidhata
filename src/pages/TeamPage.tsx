import React, { useEffect, useRef } from "react";
import { Team } from "../components/Team";

export default function TeamPage() {
  const ctaRef = useRef(null);

  /* =========================================================
     SCROLL REVEAL
     ========================================================= */

  useEffect(() => {
    const ctaElement = ctaRef.current;

    if (!ctaElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("team-cta-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    observer.observe(ctaElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* =========================================================
          TEAM PAGE HERO
      ========================================================= */}

      <section className="team-page-hero">

        {/* Background image */}
        <div className="team-page-hero-background" />

        {/* Main teal color wash */}
        <div className="team-page-hero-overlay" />

        {/* Subtle dark overlay */}
        <div className="team-page-hero-dark-overlay" />

        {/* Hero content */}
        <div className="team-page-hero-content">

          {/* Eyebrow */}
          <p className="team-page-hero-eyebrow">
            OUR TEAM
          </p>

          {/* Main heading */}
          <h1 className="team-page-hero-title">
            Meet the People Behind{" "}
            <span>Vidhata</span>
          </h1>

          {/* Description */}
          <p className="team-page-hero-description">
            Our dedicated leadership team brings together expertise in
            education, operations, technology, and curriculum development.
          </p>

        </div>
      </section>


      {/* =========================================================
          TEAM SECTION
      ========================================================= */}

      <Team hideHeader />


      {/* =========================================================
          JOIN THE TEAM CTA
      ========================================================= */}

      <section
        ref={ctaRef}
        className="team-cta"
      >

        {/* Decorative glow */}
        <div
          className="team-cta-glow team-cta-glow-left"
          aria-hidden="true"
        />

        <div
          className="team-cta-glow team-cta-glow-right"
          aria-hidden="true"
        />

        {/* Subtle decorative ring */}
        <div
          className="team-cta-ring"
          aria-hidden="true"
        />

        <div className="team-cta-inner">

          {/* Eyebrow */}
          <p className="team-cta-eyebrow">
            JOIN THE TEAM
          </p>

          {/* Main heading */}
          <h2 className="team-cta-title">
            Want to Lead Change With Us?
          </h2>

          {/* Description */}
          <p className="team-cta-description">
            Our volunteers are the heartbeat of Vidhata. Bring your skills,
            energy, and passion — we'll help you turn them into impact.
          </p>

          {/* Buttons */}
          <div className="team-cta-buttons">

            {/* Primary button */}
            <a
              href="/join-us"
              className="team-cta-primary"
            >
              <span>
                Apply to Volunteer
              </span>

              <span className="team-cta-arrow">
                →
              </span>
            </a>

            {/* Secondary button */}
            <a
              href="/contact"
              className="team-cta-secondary"
            >
              Contact Us
            </a>

          </div>

        </div>
      </section>


      {/* =========================================================
          WHITE SPACE BEFORE FOOTER
      ========================================================= */}

      <div
        className="team-footer-spacer"
        aria-hidden="true"
      />


      {/* =========================================================
          PAGE CSS
      ========================================================= */}

      <style>{`

        /* =========================================================
           PAGE
        ========================================================= */

        .team-page-hero {
          --team-green: #1f3839;
          --team-orange: #ff795c;

          position: relative;

          width: 100%;

          height: 570px;

          overflow: hidden;

          display: flex;

          align-items: center;

          background: #1f3839;

          isolation: isolate;
        }


        .team-page-hero *,
        .team-page-hero *::before,
        .team-page-hero *::after,
        .team-cta *,
        .team-cta *::before,
        .team-cta *::after {
          box-sizing: border-box;
        }


        /* =========================================================
           HERO BACKGROUND
        ========================================================= */

        .team-page-hero-background {
          position: absolute;

          inset: -2%;

          width: 104%;

          height: 104%;

          background-image:
            url("/images/volunteer_training.jpg");

          background-size: cover;

          background-position: center center;

          background-repeat: no-repeat;

          transform: scale(1.04);

          z-index: 0;

          animation:
            teamHeroImageZoom 14s
            ease-out
            forwards;
        }


        /* =========================================================
           HERO IMAGE ANIMATION
        ========================================================= */

        @keyframes teamHeroImageZoom {

          0% {
            transform:
              scale(1.10)
              translate3d(0, 0, 0);
          }

          100% {
            transform:
              scale(1.04)
              translate3d(-0.4%, -0.2%, 0);
          }

        }


        /* =========================================================
           MAIN TEAL COLOR WASH
        ========================================================= */

        .team-page-hero-overlay {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          z-index: 1;

          pointer-events: none;

          background:
            linear-gradient(
              90deg,
              rgba(31, 56, 57, 0.92) 0%,
              rgba(31, 56, 57, 0.86) 30%,
              rgba(31, 56, 57, 0.74) 60%,
              rgba(31, 56, 57, 0.65) 100%
            );
        }


        /* =========================================================
           SUBTLE DARK OVERLAY
        ========================================================= */

        .team-page-hero-dark-overlay {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          z-index: 2;

          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              rgba(8, 24, 25, 0.08) 0%,
              rgba(8, 24, 25, 0.12) 55%,
              rgba(8, 24, 25, 0.25) 100%
            );
        }


        /* =========================================================
           HERO CONTENT
        ========================================================= */

        .team-page-hero-content {
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
        }


        /* =========================================================
           HERO EYEBROW ANIMATION
        ========================================================= */

        .team-page-hero-eyebrow {
          margin: 0 0 30px;

          color: #ff795c;

          font-size: 15px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: 5px;

          text-transform: uppercase;

          opacity: 0;

          transform: translateY(24px);

          animation:
            teamHeroReveal 0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.15s
            forwards;
        }


        /* =========================================================
           HERO TITLE
        ========================================================= */

        .team-page-hero-title {
          max-width: 1250px;

          margin: 0;

          color: #ffffff;

          font-size:
            clamp(
              55px,
              5vw,
              82px
            );

          line-height: 0.99;

          font-weight: 800;

          letter-spacing: -4px;

          text-align: left;

          opacity: 0;

          transform: translateY(35px);

          animation:
            teamHeroReveal 1s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.28s
            forwards;
        }


        .team-page-hero-title span {
          color: #ff795c;

          display: inline-block;

          animation:
            teamVidhataGlow 4s
            ease-in-out
            1.3s
            infinite;
        }


        /* =========================================================
           TITLE GLOW
        ========================================================= */

        @keyframes teamVidhataGlow {

          0%,
          100% {
            text-shadow:
              0 0 0
              rgba(255, 121, 92, 0);
          }

          50% {
            text-shadow:
              0 0 24px
              rgba(255, 121, 92, 0.18);
          }

        }


        /* =========================================================
           HERO DESCRIPTION
        ========================================================= */

        .team-page-hero-description {
          max-width: 940px;

          margin: 36px 0 0;

          color:
            rgba(
              255,
              255,
              255,
              0.78
            );

          font-size: 24px;

          line-height: 1.55;

          font-weight: 400;

          text-align: left;

          opacity: 0;

          transform: translateY(30px);

          animation:
            teamHeroReveal 0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.48s
            forwards;
        }


        /* =========================================================
           GENERIC HERO REVEAL
        ========================================================= */

        @keyframes teamHeroReveal {

          0% {
            opacity: 0;

            transform:
              translateY(35px);
          }

          100% {
            opacity: 1;

            transform:
              translateY(0);
          }

        }


        /* =========================================================
           CTA
        ========================================================= */

        .team-cta {
          position: relative;

          width: 100%;

          min-height: 630px;

          overflow: hidden;

          display: flex;

          align-items: center;

          justify-content: center;

          padding:
            110px
            30px;

          background:
            radial-gradient(
              circle at 0% 100%,
              rgba(
                255,
                255,
                255,
                0.055
              ),
              transparent 28%
            ),
            radial-gradient(
              circle at 100% 0%,
              rgba(
                242,
                100,
                65,
                0.025
              ),
              transparent 25%
            ),
            #1f3839;

          color: #ffffff;
        }


        /* =========================================================
           CTA CONTENT
           
           Initially hidden.
           Becomes visible when section enters viewport.
        ========================================================= */

        .team-cta-inner {
          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 1200px;

          margin: 0 auto;

          text-align: center;
        }


        .team-cta-eyebrow,
        .team-cta-title,
        .team-cta-description,
        .team-cta-buttons {
          opacity: 0;

          transform: translateY(35px);

          transition:
            opacity 0.9s
            cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.9s
            cubic-bezier(0.22, 1, 0.36, 1);
        }


        /* =========================================================
           CTA REVEAL DELAYS
        ========================================================= */

        .team-cta-visible .team-cta-eyebrow {
          opacity: 1;

          transform: translateY(0);

          transition-delay: 0.05s;
        }


        .team-cta-visible .team-cta-title {
          opacity: 1;

          transform: translateY(0);

          transition-delay: 0.16s;
        }


        .team-cta-visible .team-cta-description {
          opacity: 1;

          transform: translateY(0);

          transition-delay: 0.28s;
        }


        .team-cta-visible .team-cta-buttons {
          opacity: 1;

          transform: translateY(0);

          transition-delay: 0.40s;
        }


        /* =========================================================
           CTA EYEBROW
        ========================================================= */

        .team-cta-eyebrow {
          margin: 0;

          color: #ff795c;

          font-size: 15px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: 5px;

          text-transform: uppercase;
        }


        /* =========================================================
           CTA TITLE
        ========================================================= */

        .team-cta-title {
          margin:
            27px
            0
            27px;

          color: #ffffff;

          font-size:
            clamp(
              48px,
              4.6vw,
              68px
            );

          line-height: 1.03;

          font-weight: 800;

          letter-spacing: -3px;
        }


        /* =========================================================
           CTA DESCRIPTION
        ========================================================= */

        .team-cta-description {
          max-width: 950px;

          margin: 0 auto;

          color:
            rgba(
              255,
              255,
              255,
              0.70
            );

          font-size: 22px;

          line-height: 1.6;

          font-weight: 400;
        }


        /* =========================================================
           CTA BUTTONS
        ========================================================= */

        .team-cta-buttons {
          margin-top: 52px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 22px;
        }


        .team-cta-primary,
        .team-cta-secondary {
          min-height: 79px;

          padding:
            0
            45px;

          border-radius: 50px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          text-decoration: none;

          font-size: 20px;

          font-weight: 700;

          transition:
            transform 0.3s
            cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.3s ease,
            background 0.3s ease;
        }


        /* =========================================================
           PRIMARY BUTTON
        ========================================================= */

        .team-cta-primary {
          min-width: 315px;

          gap: 18px;

          background: #f26441;

          color: #ffffff;

          box-shadow:
            0 10px 30px
            rgba(
              242,
              100,
              65,
              0.12
            );
        }


        /* =========================================================
           PRIMARY BUTTON ARROW
        ========================================================= */

        .team-cta-arrow {
          display: inline-block;

          font-size: 29px;

          line-height: 1;

          transition:
            transform 0.3s
            cubic-bezier(0.22, 1, 0.36, 1);
        }


        /* =========================================================
           SECONDARY BUTTON
        ========================================================= */

        .team-cta-secondary {
          min-width: 240px;

          background: #ffffff;

          color: #1f3839;

          box-shadow:
            0 10px 30px
            rgba(
              0,
              0,
              0,
              0.08
            );
        }


        /* =========================================================
           BUTTON HOVER
        ========================================================= */

        .team-cta-primary:hover,
        .team-cta-secondary:hover {
          transform:
            translateY(-5px);

          box-shadow:
            0 18px 38px
            rgba(
              0,
              0,
              0,
              0.18
            );
        }


        .team-cta-primary:hover {
          background: #f87556;
        }


        .team-cta-primary:hover
        .team-cta-arrow {
          transform:
            translateX(6px);
        }


        /* =========================================================
           CTA GLOW
        ========================================================= */

        .team-cta-glow {
          position: absolute;

          width: 500px;

          height: 500px;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(100px);

          z-index: 1;

          opacity: 0.8;
        }


        .team-cta-glow-left {
          left: -260px;

          bottom: -250px;

          background:
            rgba(
              242,
              100,
              65,
              0.045
            );

          animation:
            teamGlowLeft 9s
            ease-in-out
            infinite;
        }


        .team-cta-glow-right {
          right: -220px;

          top: -250px;

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );

          animation:
            teamGlowRight 11s
            ease-in-out
            infinite;
        }


        /* =========================================================
           GLOW ANIMATIONS
        ========================================================= */

        @keyframes teamGlowLeft {

          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform:
              translate3d(50px, -30px, 0)
              scale(1.08);
          }

        }


        @keyframes teamGlowRight {

          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          50% {
            transform:
              translate3d(-45px, 35px, 0)
              scale(1.1);
          }

        }


        /* =========================================================
           DECORATIVE RING
        ========================================================= */

        .team-cta-ring {
          position: absolute;

          width: 650px;

          height: 650px;

          right: -420px;

          bottom: -470px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.055
            );

          border-radius: 50%;

          z-index: 1;

          pointer-events: none;

          animation:
            teamRingFloat 12s
            ease-in-out
            infinite;
        }


        @keyframes teamRingFloat {

          0%,
          100% {
            transform:
              translate3d(0, 0, 0);
          }

          50% {
            transform:
              translate3d(-25px, -25px, 0);
          }

        }


        /* =========================================================
           FOOTER SPACER
        ========================================================= */

        .team-footer-spacer {
          width: 100%;

          height: 95px;

          background: #ffffff;
        }


        /* =========================================================
           LARGE DESKTOP
        ========================================================= */

        @media (min-width: 1600px) {

          .team-page-hero-content {
            padding-left: 8.7%;

            padding-right: 8.7%;
          }


          .team-footer-spacer {
            height: 105px;
          }

        }


        /* =========================================================
           SMALL DESKTOP
        ========================================================= */

        @media (max-width: 1200px) {

          .team-page-hero {
            height: 560px;
          }


          .team-page-hero-content {
            width:
              calc(
                100% - 70px
              );

            padding-top: 10px;
          }


          .team-page-hero-title {
            font-size: 65px;

            letter-spacing: -3px;
          }


          .team-page-hero-description {
            max-width: 760px;

            font-size: 20px;
          }


          .team-cta {
            min-height: 570px;
          }


          .team-cta-title {
            font-size: 55px;
          }


          .team-cta-description {
            font-size: 19px;
          }


          .team-footer-spacer {
            height: 90px;
          }

        }


        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 900px) {

          .team-page-hero {
            height: 520px;
          }


          .team-page-hero-content {
            width:
              calc(
                100% - 60px
              );

            padding-top: 10px;
          }


          .team-page-hero-title {
            font-size: 58px;

            line-height: 1.02;

            letter-spacing: -2.8px;
          }


          .team-page-hero-description {
            font-size: 19px;

            line-height: 1.55;
          }


          .team-cta {
            min-height: 540px;

            padding:
              90px
              25px;
          }


          .team-cta-title {
            font-size: 48px;

            letter-spacing: -2px;
          }


          .team-cta-description {
            font-size: 19px;
          }


          .team-cta-primary,
          .team-cta-secondary {
            min-height: 70px;

            font-size: 18px;
          }


          .team-footer-spacer {
            height: 80px;
          }

        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 768px) {

          .team-page-hero {
            min-height: 600px;

            height: auto;

            align-items: flex-end;
          }


          /* =====================================================
             MOBILE OVERLAY
          ===================================================== */

          .team-page-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(
                  31,
                  56,
                  57,
                  0.48
                ) 0%,

                rgba(
                  31,
                  56,
                  57,
                  0.64
                ) 35%,

                rgba(
                  31,
                  56,
                  57,
                  0.84
                ) 65%,

                rgba(
                  31,
                  56,
                  57,
                  0.97
                ) 100%
              );
          }


          .team-page-hero-dark-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(
                  8,
                  24,
                  25,
                  0.05
                ) 0%,

                rgba(
                  8,
                  24,
                  25,
                  0.18
                ) 100%
              );
          }


          .team-page-hero-background {
            background-position:
              center center;
          }


          .team-page-hero-content {
            width:
              calc(
                100% - 40px
              );

            height: auto;

            margin:
              0 20px;

            padding:
              170px
              0
              55px;

            justify-content:
              flex-end;
          }


          .team-page-hero-eyebrow {
            margin-bottom: 23px;

            font-size: 11px;

            letter-spacing: 4px;
          }


          .team-page-hero-title {
            max-width: 100%;

            font-size: 45px;

            line-height: 1;

            letter-spacing: -2.2px;
          }


          .team-page-hero-description {
            margin-top: 25px;

            font-size: 17px;

            line-height: 1.55;
          }


          /* =====================================================
             CTA
          ===================================================== */

          .team-cta {
            min-height: 580px;

            padding:
              85px
              22px;
          }


          .team-cta-title {
            margin:
              22px
              0
              24px;

            font-size: 40px;

            line-height: 1.06;

            letter-spacing: -1.5px;
          }


          .team-cta-description {
            font-size: 17px;

            line-height: 1.55;
          }


          .team-cta-buttons {
            width: 100%;

            flex-direction: column;

            gap: 14px;

            margin-top: 40px;
          }


          .team-cta-primary,
          .team-cta-secondary {
            width: 100%;

            max-width: 350px;

            min-width: 0;

            min-height: 68px;

            padding:
              0
              30px;

            font-size: 17px;
          }


          .team-cta-ring {
            width: 450px;

            height: 450px;

            right: -320px;

            bottom: -340px;
          }


          .team-footer-spacer {
            height: 70px;
          }

        }


        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 480px) {

          .team-page-hero {
            min-height: 560px;
          }


          .team-page-hero-content {
            width:
              calc(
                100% - 44px
              );

            margin-left: 22px;

            margin-right: 22px;

            padding:
              150px
              0
              50px;
          }


          .team-page-hero-title {
            font-size: 39px;

            letter-spacing: -1.7px;
          }


          .team-page-hero-description {
            font-size: 16px;
          }


          .team-cta {
            min-height: 550px;

            padding:
              75px
              20px;
          }


          .team-cta-title {
            font-size: 35px;
          }


          .team-cta-description {
            font-size: 16px;
          }


          .team-cta-primary,
          .team-cta-secondary {
            max-width: 320px;

            min-height: 64px;

            font-size: 16px;
          }


          .team-footer-spacer {
            height: 60px;
          }

        }


        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {

          .team-page-hero-background,
          .team-page-hero-title span,
          .team-cta-glow-left,
          .team-cta-glow-right,
          .team-cta-ring {
            animation: none;
          }


          .team-page-hero-eyebrow,
          .team-page-hero-title,
          .team-page-hero-description {
            opacity: 1;

            transform: none;

            animation: none;
          }


          .team-cta-eyebrow,
          .team-cta-title,
          .team-cta-description,
          .team-cta-buttons {
            opacity: 1;

            transform: none;

            transition: none;
          }


          .team-cta-primary,
          .team-cta-secondary,
          .team-cta-arrow {
            transition: none;
          }

        }

      `}</style>
    </>
  );
}