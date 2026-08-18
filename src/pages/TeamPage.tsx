import { Team } from "../components/Team";

export default function TeamPage() {
  return (
    <>
      {/* =========================================================
          TEAM PAGE HERO

          Desktop target:
          Full width × 483px

          Background image:
          /images/volunteer_training.jpg

          Text is intentionally positioned on the LEFT,
          matching the About Us hero style.
      ========================================================= */}

      <section className="team-page-hero">
        {/* Background image */}
        <div className="team-page-hero-image" />

        {/* Green/teal overlay */}
        <div className="team-page-hero-overlay" />

        {/* Hero content */}
        <div className="team-page-hero-content">
          {/* Eyebrow */}
          <p className="team-page-hero-eyebrow">
            OUR TEAM
          </p>

          {/* Main heading */}
          <h1 className="team-page-hero-title">
            Meet the People Behind Vidhata
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

      <section className="team-cta">
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
          WHITE SPACE BETWEEN CTA AND FOOTER
      ========================================================= */}

      <div
        className="team-footer-spacer"
        aria-hidden="true"
      />

      {/* =========================================================
          PAGE-SPECIFIC STYLES
      ========================================================= */}

      <style>{`

        /* =======================================================
           TEAM HERO
           
           Desktop target:
           483px high
           100% viewport width
        ======================================================= */

        .team-page-hero {
          position: relative;

          width: 100%;

          height: 483px;

          min-height: 483px;

          max-height: 483px;

          overflow: hidden;

          background: #1f3839;

          isolation: isolate;
        }


        /* =======================================================
           HERO BACKGROUND IMAGE
        ======================================================= */

        .team-page-hero-image {
          position: absolute;

          inset: 0;

          width: 100%;

          height: 100%;

          background-image:
            url("/images/volunteer_training.jpg");

          background-size: cover;

          background-position: center center;

          background-repeat: no-repeat;

          filter:
            brightness(0.78)
            saturate(0.68)
            contrast(0.94);

          z-index: 0;
        }


        /* =======================================================
           GREEN / TEAL OVERLAY
        ======================================================= */

        .team-page-hero-overlay {
          position: absolute;

          inset: 0;

          width: 100%;

          height: 100%;

          background:
            rgba(
              31,
              67,
              68,
              0.68
            );

          mix-blend-mode: multiply;

          pointer-events: none;

          z-index: 1;
        }


        /* =======================================================
           SECOND SOFT TEAL LAYER
        ======================================================= */

        .team-page-hero::after {
          content: "";

          position: absolute;

          inset: 0;

          background:
            rgba(
              42,
              78,
              79,
              0.30
            );

          pointer-events: none;

          z-index: 2;
        }


        /* =======================================================
           HERO CONTENT
           
           TEXT HAS BEEN MOVED SLIGHTLY DOWN.
           
           Previous:
           padding-top: 68px;
           
           New:
           padding-top: 105px;
        ======================================================= */

        .team-page-hero-content {
          position: relative;

          z-index: 5;

          width: calc(100% - 370px);

          max-width: 1400px;

          margin-left: 185px;

          margin-right: auto;

          padding-top: 105px;

          text-align: left;
        }


        /* =======================================================
           EYEBROW
        ======================================================= */

        .team-page-hero-eyebrow {
          margin: 0 0 24px;

          color: #ff795c;

          font-size: 16px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: 5px;

          text-transform: uppercase;
        }


        /* =======================================================
           MAIN HERO TITLE
        ======================================================= */

        .team-page-hero-title {
          margin: 0;

          max-width: 1250px;

          color: #ffffff;

          font-size: clamp(
            52px,
            4.1vw,
            78px
          );

          line-height: 1.03;

          font-weight: 800;

          letter-spacing: -3.5px;

          text-align: left;
        }


        /* =======================================================
           HERO DESCRIPTION
        ======================================================= */

        .team-page-hero-description {
          max-width: 1100px;

          margin: 30px 0 0;

          color: rgba(
            255,
            255,
            255,
            0.80
          );

          font-size: 24px;

          line-height: 1.55;

          font-weight: 400;

          text-align: left;
        }


        /* =======================================================
           CTA SECTION
        ======================================================= */

        .team-cta {
          position: relative;

          width: 100%;

          min-height: 659px;

          margin: 0;

          padding: 100px 30px;

          display: flex;

          align-items: center;

          justify-content: center;

          overflow: hidden;

          background: #1F3839;

          color: #ffffff;
        }


        /* =======================================================
           CTA CONTENT
        ======================================================= */

        .team-cta-inner {
          position: relative;

          width: 100%;

          max-width: 1100px;

          margin: 0 auto;

          text-align: center;
        }


        /* =======================================================
           CTA EYEBROW
        ======================================================= */

        .team-cta-eyebrow {
          margin: 0 0 28px;

          color: #ff795c;

          font-size: 15px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: 5px;

          text-transform: uppercase;
        }


        /* =======================================================
           CTA MAIN HEADING
        ======================================================= */

        .team-cta-title {
          margin: 0;

          color: #ffffff;

          font-size: clamp(
            48px,
            4.4vw,
            66px
          );

          line-height: 1.05;

          font-weight: 800;

          letter-spacing: -3px;
        }


        /* =======================================================
           CTA DESCRIPTION
        ======================================================= */

        .team-cta-description {
          max-width: 900px;

          margin: 27px auto 0;

          color: rgba(
            255,
            255,
            255,
            0.78
          );

          font-size: 24px;

          line-height: 1.55;

          font-weight: 400;
        }


        /* =======================================================
           CTA BUTTON CONTAINER
        ======================================================= */

        .team-cta-buttons {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 22px;

          margin-top: 53px;
        }


        /* =======================================================
           SHARED BUTTON STYLES
        ======================================================= */

        .team-cta-primary,
        .team-cta-secondary {
          min-height: 78px;

          border-radius: 28px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          font-size: 20px;

          font-weight: 700;

          text-decoration: none;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        /* =======================================================
           PRIMARY BUTTON
        ======================================================= */

        .team-cta-primary {
          min-width: 324px;

          padding: 0 35px;

          gap: 16px;

          background: #f27d63;

          color: #ffffff;

          box-shadow:
            0 10px 20px
            rgba(
              0,
              0,
              0,
              0.08
            );
        }


        /* =======================================================
           PRIMARY BUTTON ARROW
        ======================================================= */

        .team-cta-arrow {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          font-size: 28px;

          line-height: 1;

          transition:
            transform 0.25s ease;
        }


        /* =======================================================
           SECONDARY BUTTON
        ======================================================= */

        .team-cta-secondary {
          min-width: 253px;

          padding: 0 35px;

          background: #ffffff;

          color: #1F3839;

          box-shadow:
            0 10px 20px
            rgba(
              0,
              0,
              0,
              0.08
            );
        }


        /* =======================================================
           BUTTON HOVER
        ======================================================= */

        .team-cta-primary:hover,
        .team-cta-secondary:hover {
          transform: translateY(-3px);

          box-shadow:
            0 14px 28px
            rgba(
              0,
              0,
              0,
              0.14
            );
        }


        .team-cta-primary:hover
        .team-cta-arrow {
          transform: translateX(5px);
        }


        /* =======================================================
           WHITE SPACE BEFORE FOOTER
        ======================================================= */

        .team-footer-spacer {
          width: 100%;

          height: 95px;

          background: #ffffff;
        }


        /* =======================================================
           LARGE DESKTOP
        ======================================================= */

        @media (min-width: 1600px) {

          .team-page-hero-content {
            margin-left: 185px;

            width: calc(100% - 370px);

            max-width: 1400px;

            padding-top: 105px;
          }


          .team-footer-spacer {
            height: 105px;
          }

        }


        /* =======================================================
           DESKTOP / LAPTOP
        ======================================================= */

        @media (max-width: 1599px) {

          .team-page-hero-content {
            margin-left: 120px;

            width: calc(100% - 240px);

            max-width: 1200px;

            padding-top: 100px;
          }

        }


        /* =======================================================
           TABLET
        ======================================================= */

        @media (max-width: 1200px) {

          .team-page-hero {
            height: 483px;

            min-height: 483px;

            max-height: 483px;
          }


          .team-page-hero-content {
            width: calc(100% - 160px);

            margin-left: 80px;

            padding-top: 95px;

            max-width: 850px;
          }


          .team-page-hero-title {
            font-size: 58px;

            letter-spacing: -2.5px;
          }


          .team-page-hero-description {
            max-width: 760px;

            font-size: 21px;
          }


          .team-cta {
            min-height: 590px;

            padding:
              90px
              25px;
          }


          .team-cta-title {
            font-size: 50px;

            letter-spacing: -2px;
          }


          .team-cta-description {
            max-width: 750px;

            font-size: 20px;
          }


          .team-cta-buttons {
            margin-top: 45px;
          }


          .team-cta-primary,
          .team-cta-secondary {
            min-height: 70px;

            font-size: 18px;

            border-radius: 25px;
          }


          .team-cta-primary {
            min-width: 290px;
          }


          .team-cta-secondary {
            min-width: 220px;
          }


          .team-footer-spacer {
            height: 85px;
          }

        }


        /* =======================================================
           MOBILE
        ======================================================= */

        @media (max-width: 768px) {

          .team-page-hero {
            height: 560px;

            min-height: 560px;

            max-height: 560px;
          }


          .team-page-hero-image {
            background-position: center center;
          }


          .team-page-hero-content {
            width: calc(100% - 44px);

            max-width: 500px;

            margin-left: 22px;

            margin-right: 22px;

            padding-top: 90px;

            text-align: left;
          }


          .team-page-hero-eyebrow {
            margin-bottom: 22px;

            font-size: 12px;

            letter-spacing: 4px;
          }


          .team-page-hero-title {
            max-width: 500px;

            font-size: 46px;

            line-height: 1.05;

            letter-spacing: -2px;

            text-align: left;
          }


          .team-page-hero-description {
            max-width: 500px;

            margin-top: 25px;

            font-size: 18px;

            line-height: 1.55;

            text-align: left;
          }


          .team-cta {
            min-height: auto;

            padding:
              85px
              22px
              90px;
          }


          .team-cta-inner {
            max-width: 500px;
          }


          .team-cta-eyebrow {
            margin-bottom: 23px;

            font-size: 11px;

            letter-spacing: 4px;
          }


          .team-cta-title {
            font-size: 40px;

            line-height: 1.06;

            letter-spacing: -1.7px;
          }


          .team-cta-description {
            margin-top: 23px;

            font-size: 17px;

            line-height: 1.55;
          }


          .team-cta-buttons {
            width: 100%;

            margin-top: 38px;

            flex-direction: column;

            gap: 14px;
          }


          .team-cta-primary,
          .team-cta-secondary {
            width: 100%;

            max-width: 350px;

            min-width: 0;

            min-height: 67px;

            border-radius: 23px;

            font-size: 17px;
          }


          .team-footer-spacer {
            height: 70px;
          }

        }


        /* =======================================================
           SMALL MOBILE
        ======================================================= */

        @media (max-width: 480px) {

          .team-page-hero {
            height: 560px;

            min-height: 560px;

            max-height: 560px;
          }


          .team-page-hero-content {
            width: calc(100% - 40px);

            margin-left: 20px;

            margin-right: 20px;

            padding-top: 82px;
          }


          .team-page-hero-title {
            font-size: 40px;

            line-height: 1.06;

            letter-spacing: -1.5px;
          }


          .team-page-hero-description {
            margin-top: 23px;

            font-size: 16px;

            line-height: 1.55;
          }


          .team-cta {
            padding:
              75px
              20px
              80px;
          }


          .team-cta-title {
            font-size: 35px;

            letter-spacing: -1.4px;
          }


          .team-cta-description {
            font-size: 16px;
          }


          .team-cta-primary,
          .team-cta-secondary {
            max-width: 320px;

            min-height: 63px;

            font-size: 16px;
          }


          .team-cta-arrow {
            font-size: 24px;
          }


          .team-footer-spacer {
            height: 60px;
          }

        }


        /* =======================================================
           ACCESSIBILITY
        ======================================================= */

        @media (prefers-reduced-motion: reduce) {

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