import React from "react";

export default function RecognitionsPage() {
  return (
    <>
      <main className="recognitions-page">

        {/* =========================================================
            RECOGNITION HERO
        ========================================================= */}

        <section className="recognition-hero">

          {/* Background image */}
          <div className="recognition-hero-background" />

          {/* Green color overlay */}
          <div className="recognition-hero-overlay" />

          {/* Extra subtle dark overlay */}
          <div className="recognition-hero-dark-overlay" />

          {/* Content */}
          <div className="recognition-hero-container">

            <div className="recognition-eyebrow">
              RECOGNITION
            </div>

            <h1 className="recognition-title">
              Honored for{" "}
              <span>Social Impact</span>
            </h1>

            <p className="recognition-description">
              Our work has received formal recognition for its contribution
              to social impact, youth leadership, and community development
              at national and international platforms.
            </p>

          </div>

        </section>


        {/* =========================================================
            REST OF RECOGNITIONS PAGE
        ========================================================= */}

        <section className="recognitions-content">

          <div className="recognitions-content-inner">

            <div className="content-eyebrow">
              GLOCAL TEEN HERO
            </div>

            <h2>
              A National Platform for Change-
              <br className="desktop-break" />
              Makers
            </h2>

            <div className="recognition-feature">

              <div className="recognition-feature-image">
                <img
                  src="/images/glocal-award.png"
                  alt="Glocal Teen Hero recognition"
                />
              </div>

              <div className="recognition-feature-text">

                <h3>
                  Vidhata's Founder Featured as a Glocal Teen Hero
                </h3>

                <p>
                  The Glocal Teen Hero award recognizes outstanding teenagers
                  whose work creates meaningful change in their communities.
                  Vidhata's founder, Aryan Basnet, was featured for building a
                  volunteering gateway that brings holistic, skill-based
                  education to underserved students across Nepal.
                </p>

                <a
                  href="#"
                  className="feature-button"
                >
                  Read the full feature
                  <span>↗</span>
                </a>

              </div>

            </div>

          </div>

        </section>


        {/* =========================================================
            CTA
        ========================================================= */}

        <section className="recognition-cta">

          <div className="cta-container">

            <div className="cta-eyebrow">
              BE PART OF THE STORY
            </div>

            <h2>
              Help Us Write the Next Chapter
            </h2>

            <p>
              Every volunteer and partner adds to the impact that platforms
              like Glocal Teen Hero celebrate.
            </p>

            <div className="cta-buttons">

              <a
                href="#"
                className="cta-button cta-button-primary"
              >
                Get Involved
                <span>→</span>
              </a>

              <a
                href="#"
                className="cta-button cta-button-secondary"
              >
                Contact Us
              </a>

            </div>

          </div>

        </section>

      </main>


      {/* =========================================================
          CSS
      ========================================================= */}

      <style>{`

        /* =========================================================
           GLOBAL PAGE
        ========================================================= */

        .recognitions-page {
          --green: #4a7174;
          --green-dark: #17383a;
          --orange: #f87556;
          --orange-light: #ff876b;
          --dark: #192130;
          --cream: #fdfbf8;
          --text-gray: #686e76;

          width: 100%;
          margin: 0;
          padding: 0;

          background: var(--cream);

          overflow-x: hidden;
        }


        .recognitions-page *,
        .recognitions-page *::before,
        .recognitions-page *::after {
          box-sizing: border-box;
        }


        .recognitions-page a {
          text-decoration: none;
        }


        /* =========================================================
           HERO
        ========================================================= */

        .recognition-hero {
          position: relative;

          width: 100%;
          height: 570px;

          overflow: hidden;

          background: var(--green-dark);
        }


        /* =========================================================
           HERO BACKGROUND IMAGE

           Make sure the image is located at:

           public/images/students_celebration.jpg

           Do not import the image in TypeScript.
        ========================================================= */

        .recognition-hero-background {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          background-image: url("/images/student_celebration.jpg");

          background-size: cover;

          /*
            Slightly shift the image so the students remain visible
            while leaving enough dark space behind the text.
          */
          background-position: center center;

          background-repeat: no-repeat;

          z-index: 0;

          transform: scale(1.01);
        }


        /* =========================================================
           GREEN COLOR EFFECT

           Main effect used to reproduce the reference screenshot.

           The image remains visible underneath while the entire
           hero receives a dark teal/green photographic treatment.
        ========================================================= */

        .recognition-hero-overlay {
          position: absolute;

          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              90deg,
              rgba(24, 61, 63, 0.88) 0%,
              rgba(48, 88, 90, 0.82) 32%,
              rgba(57, 96, 98, 0.76) 65%,
              rgba(36, 70, 72, 0.80) 100%
            );

          pointer-events: none;
        }


        /* =========================================================
           EXTRA DARKENING

           Gives the image the darker cinematic appearance visible
           in the reference design.
        ========================================================= */

        .recognition-hero-dark-overlay {
          position: absolute;

          inset: 0;

          z-index: 2;

          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              rgba(8, 25, 27, 0.12) 0%,
              rgba(8, 25, 27, 0.18) 55%,
              rgba(8, 25, 27, 0.24) 100%
            );
        }


        /* =========================================================
           HERO CONTENT
        ========================================================= */

        .recognition-hero-container {
          position: relative;

          z-index: 3;

          width: calc(100% - 80px);

          max-width: 1690px;

          height: 100%;

          margin: 0 auto;

          display: flex;

          flex-direction: column;

          justify-content: center;

          padding-top: 5px;
        }


        /* =========================================================
           EYEBROW
        ========================================================= */

        .recognition-eyebrow {
          margin-bottom: 30px;

          color: var(--orange-light);

          font-size: 15px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: 5px;

          text-transform: uppercase;
        }


        /* =========================================================
           MAIN TITLE
        ========================================================= */

        .recognition-title {
          margin: 0;

          max-width: 1100px;

          color: #ffffff;

          font-size: clamp(
            55px,
            5vw,
            82px
          );

          line-height: 0.98;

          font-weight: 800;

          letter-spacing: -4px;
        }


        .recognition-title span {
          color: var(--orange-light);
        }


        /* =========================================================
           DESCRIPTION
        ========================================================= */

        .recognition-description {
          max-width: 940px;

          margin: 37px 0 0;

          color: rgba(
            255,
            255,
            255,
            0.76
          );

          font-size: 25px;

          line-height: 1.55;

          font-weight: 400;

          letter-spacing: 0;
        }


        /* =========================================================
           CONTENT SECTION
        ========================================================= */

        .recognitions-content {
          width: 100%;

          padding: 75px 0 100px;

          background: var(--cream);
        }


        .recognitions-content-inner {
          width: calc(100% - 80px);

          max-width: 1730px;

          margin: 0 auto;
        }


        .content-eyebrow {
          margin-bottom: 25px;

          color: var(--orange);

          font-size: 14px;

          font-weight: 700;

          letter-spacing: 5px;

          text-align: center;
        }


        .recognitions-content h2 {
          margin: 0 auto 75px;

          max-width: 1050px;

          color: var(--dark);

          font-size: clamp(
            48px,
            4.5vw,
            72px
          );

          line-height: 0.98;

          font-weight: 800;

          letter-spacing: -3px;

          text-align: center;
        }


        /* =========================================================
           FEATURE
        ========================================================= */

        .recognition-feature {
          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 0.92fr);

          gap: 95px;

          align-items: center;
        }


        .recognition-feature-image {
          width: 100%;

          height: 465px;

          overflow: hidden;

          border-radius: 20px;

          background: #eeeeee;

          box-shadow:
            0 18px 35px
            rgba(25, 33, 48, 0.12);
        }


        .recognition-feature-image img {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;
        }


        .recognition-feature-text h3 {
          margin: 0 0 25px;

          color: var(--dark);

          font-size: clamp(
            35px,
            3vw,
            50px
          );

          line-height: 1.08;

          font-weight: 800;

          letter-spacing: -2px;
        }


        .recognition-feature-text p {
          max-width: 780px;

          margin: 0;

          color: var(--text-gray);

          font-size: 22px;

          line-height: 1.55;
        }


        /* =========================================================
           FEATURE BUTTON
        ========================================================= */

        .feature-button {
          display: inline-flex;

          align-items: center;

          gap: 18px;

          margin-top: 38px;

          min-height: 60px;

          padding: 0 34px;

          border-radius: 999px;

          background: var(--orange);

          color: #ffffff;

          font-size: 17px;

          font-weight: 700;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }


        .feature-button span {
          font-size: 20px;
        }


        .feature-button:hover {
          transform: translateY(-2px);

          background: #f15f40;
        }


        /* =========================================================
           CTA SECTION
        ========================================================= */

        .recognition-cta {
          width: 100%;

          min-height: 360px;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 90px 40px;

          background: var(--green);
        }


        .cta-container {
          width: 100%;

          max-width: 1200px;

          text-align: center;
        }


        .cta-eyebrow {
          margin-bottom: 28px;

          color: var(--orange-light);

          font-size: 14px;

          font-weight: 700;

          letter-spacing: 5px;
        }


        .cta-container h2 {
          margin: 0;

          color: #ffffff;

          font-size: clamp(
            48px,
            4.5vw,
            70px
          );

          line-height: 1;

          font-weight: 800;

          letter-spacing: -3px;
        }


        .cta-container p {
          max-width: 920px;

          margin: 28px auto 0;

          color: rgba(
            255,
            255,
            255,
            0.75
          );

          font-size: 21px;

          line-height: 1.55;
        }


        /* =========================================================
           CTA BUTTONS
        ========================================================= */

        .cta-buttons {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 22px;

          margin-top: 43px;
        }


        .cta-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 17px;

          min-height: 60px;

          padding: 0 35px;

          border-radius: 999px;

          font-size: 18px;

          font-weight: 700;

          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }


        .cta-button:hover {
          transform: translateY(-2px);
        }


        .cta-button-primary {
          min-width: 255px;

          background: var(--orange);

          color: #ffffff;
        }


        .cta-button-primary:hover {
          background: #f15f40;
        }


        .cta-button-secondary {
          min-width: 210px;

          background: #ffffff;

          color: var(--green);
        }


        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1100px) {

          .recognition-hero {
            height: 530px;
          }


          .recognition-hero-container {
            width: calc(100% - 60px);
          }


          .recognition-title {
            font-size: clamp(
              52px,
              6vw,
              70px
            );
          }


          .recognition-description {
            max-width: 800px;

            font-size: 21px;
          }


          .recognitions-content-inner {
            width: calc(100% - 60px);
          }


          .recognition-feature {
            grid-template-columns: 1fr;

            gap: 50px;
          }


          .recognition-feature-image {
            height: 500px;
          }
        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 700px) {

          .recognition-hero {
            min-height: 600px;

            height: auto;

            display: flex;

            align-items: flex-end;
          }


          .recognition-hero-background {
            background-position: center center;
          }


          /*
            Stronger green gradient on mobile.
            This keeps the text readable while preserving
            the students in the background.
          */

          .recognition-hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(32, 70, 72, 0.58) 0%,
                rgba(42, 82, 84, 0.72) 42%,
                rgba(29, 61, 63, 0.91) 78%,
                rgba(20, 48, 50, 0.97) 100%
              );
          }


          .recognition-hero-dark-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(8, 25, 27, 0.05) 0%,
                rgba(8, 25, 27, 0.14) 100%
              );
          }


          .recognition-hero-container {
            width: calc(100% - 40px);

            height: auto;

            padding-top: 170px;

            padding-bottom: 55px;

            justify-content: flex-end;
          }


          .recognition-eyebrow {
            margin-bottom: 23px;

            font-size: 11px;

            letter-spacing: 4px;
          }


          .recognition-title {
            max-width: 100%;

            font-size: 45px;

            line-height: 1;

            letter-spacing: -2.5px;
          }


          .recognition-description {
            margin-top: 25px;

            font-size: 18px;

            line-height: 1.55;
          }


          /* =====================================================
             CONTENT
          ===================================================== */

          .recognitions-content {
            padding: 60px 0 75px;
          }


          .recognitions-content-inner {
            width: calc(100% - 40px);
          }


          .content-eyebrow {
            font-size: 11px;

            letter-spacing: 4px;
          }


          .recognitions-content h2 {
            margin-bottom: 45px;

            font-size: 42px;

            letter-spacing: -2px;
          }


          .desktop-break {
            display: none;
          }


          .recognition-feature {
            gap: 38px;
          }


          .recognition-feature-image {
            height: 310px;

            border-radius: 15px;
          }


          .recognition-feature-text h3 {
            font-size: 34px;

            letter-spacing: -1.5px;
          }


          .recognition-feature-text p {
            font-size: 18px;
          }


          /* =====================================================
             CTA
          ===================================================== */

          .recognition-cta {
            min-height: 420px;

            padding: 70px 20px;
          }


          .cta-container h2 {
            font-size: 43px;

            letter-spacing: -2px;
          }


          .cta-container p {
            font-size: 18px;
          }


          .cta-buttons {
            flex-direction: column;

            gap: 13px;
          }


          .cta-button {
            width: 100%;

            max-width: 300px;
          }
        }


        /* =========================================================
           SMALL PHONES
        ========================================================= */

        @media (max-width: 400px) {

          .recognition-hero-container {
            width: calc(100% - 30px);
          }


          .recognition-title {
            font-size: 40px;
          }


          .recognition-description {
            font-size: 17px;
          }


          .recognitions-content-inner {
            width: calc(100% - 30px);
          }


          .recognitions-content h2 {
            font-size: 37px;
          }


          .recognition-feature-image {
            height: 260px;
          }


          .recognition-feature-text h3 {
            font-size: 30px;
          }


          .cta-container h2 {
            font-size: 38px;
          }
        }

      `}</style>
    </>
  );
}