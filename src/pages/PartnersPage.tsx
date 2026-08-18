import { Partners } from "../components/Partners";
import { PARTNER_FORM } from "../data/constants";

export default function PartnersPage() {
  return (
    <main className="partners-page">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="partners-hero">

        {/* Background image */}
        <div className="partners-hero-background" />

        {/* Dark teal color wash */}
        <div className="partners-hero-overlay" />

        {/* Subtle dark overlay */}
        <div className="partners-hero-dark-overlay" />

        {/* Hero content */}
        <div className="partners-hero-inner">

          <p className="partners-eyebrow">
            PARTNERS
          </p>

          <h1>
            Trusted by Leading{" "}
            <span>Organizations</span>
          </h1>

          <p className="partners-hero-description">
            We collaborate with 30 partner organizations across Nepal —
            schools, care homes, and community groups — to maximize our impact.
          </p>

        </div>

      </section>


      {/* =========================================================
          PARTNER NETWORK SECTION
      ========================================================= */}

      <section className="partners-network">

        <div className="partners-network-inner">

          {/* Section heading */}
          <div className="partners-network-heading">

            <p className="partners-eyebrow">
              OUR NETWORK
            </p>

            <h2>
              The Organizations Behind Our
              <br className="desktop-break" />
              Reach
            </h2>

            <p>
              Each partnership helps us bring holistic learning to more
              students, in more communities,
              <br className="desktop-break" />
              every single month.
            </p>

          </div>


          {/* Partner cards / logos */}
          <div className="partners-grid-wrapper">
            <Partners hideHeader />
          </div>

        </div>

      </section>


      {/* =========================================================
          CTA SECTION
      ========================================================= */}

      <section className="partners-cta">

        {/* Decorative background elements */}
        <div
          className="partners-cta-glow partners-cta-glow-left"
          aria-hidden="true"
        />

        <div
          className="partners-cta-glow partners-cta-glow-right"
          aria-hidden="true"
        />

        <div className="partners-cta-inner">

          <p className="partners-eyebrow">
            PARTNER WITH US
          </p>

          <h2>
            Join Our Network of 30 Partners
          </h2>

          <p className="partners-cta-description">
            Together we can create sustainable impact and bring equal learning
            <br className="desktop-break" />
            opportunities to students across Nepal.
          </p>


          {/* CTA buttons */}
          <div className="partners-cta-buttons">

            <a
              href="https://forms.gle/vQBP7QE4ak5LaUG39"
              target="_blank"
              rel="noopener noreferrer"
              className="partners-cta-primary"
            >
              <span className="partners-primary-text">
                Become a Partner
              </span>

              <span className="partners-primary-arrow">
                →
              </span>
            </a>


            <a
              href="/programs"
              className="partners-cta-secondary"
            >
              Our Programs
            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHITE SPACE BEFORE FOOTER
      ========================================================= */}

      <div
        className="partners-footer-spacer"
        aria-hidden="true"
      />


      {/* =========================================================
          PAGE CSS
      ========================================================= */}

      <style>{`

        /* =========================================================
           BRAND VARIABLES
        ========================================================= */

        .partners-page {
          --green: #1F3839;
          --green-dark: #1F3839;

          --orange: #f26441;
          --orange-light: #ff795c;

          --dark: #171d2b;
          --gray: #747780;

          width: 100%;
          min-height: 100vh;

          margin: 0;
          padding: 0;

          overflow-x: hidden;

          background: #ffffff;

          color: var(--dark);

          font-family: inherit;
        }


        .partners-page *,
        .partners-page *::before,
        .partners-page *::after {
          box-sizing: border-box;
        }


        .partners-page a {
          text-decoration: none;
        }


        /* =========================================================
           SHARED EYEBROW
        ========================================================= */

        .partners-eyebrow {
          margin: 0;

          color: var(--orange-light);

          font-size: 15px;

          line-height: 1;

          font-weight: 700;

          letter-spacing: 5px;

          text-transform: uppercase;
        }


        /* =========================================================
           HERO
        ========================================================= */

        .partners-hero {
          position: relative;

          width: 100%;

          height: 570px;

          overflow: hidden;

          display: flex;

          align-items: center;

          background: #1F3839;
        }


        /* =========================================================
           HERO BACKGROUND IMAGE
        ========================================================= */

        .partners-hero-background {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          background-image:
            url("/images/non_academic.png");

          background-size: cover;

          background-position: center center;

          background-repeat: no-repeat;

          z-index: 0;

          transform: scale(1.01);
        }


        /* =========================================================
           DARK TEAL COLOR WASH

           Uses #1F3839 as the main brand background.
        ========================================================= */

        .partners-hero-overlay {
          position: absolute;

          inset: 0;

          z-index: 1;

          pointer-events: none;

          background:
            rgba(
              31,
              56,
              57,
              0.76
            );
        }


        /* =========================================================
           SUBTLE DARK OVERLAY
        ========================================================= */

        .partners-hero-dark-overlay {
          position: absolute;

          inset: 0;

          z-index: 2;

          pointer-events: none;

          background:
            rgba(
              8,
              24,
              25,
              0.15
            );
        }


        /* =========================================================
           HERO CONTENT
        ========================================================= */

        .partners-hero-inner {
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
           HERO EYEBROW
        ========================================================= */

        .partners-hero-inner .partners-eyebrow {
          margin-bottom: 30px;

          color: var(--orange-light);
        }


        /* =========================================================
           HERO TITLE
        ========================================================= */

        .partners-hero h1 {
          max-width: 1200px;

          margin: 0;

          color: #ffffff;

          font-size:
            clamp(
              58px,
              5.2vw,
              82px
            );

          line-height: 0.99;

          font-weight: 800;

          letter-spacing: -4px;
        }


        .partners-hero h1 span {
          color: var(--orange-light);
        }


        /* =========================================================
           HERO DESCRIPTION
        ========================================================= */

        .partners-hero-description {
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

          letter-spacing: 0;
        }


        /* =========================================================
           PARTNER NETWORK SECTION
        ========================================================= */

        .partners-network {
          width: 100%;

          padding:
            110px
            0
            150px;

          background: #ffffff;
        }


        .partners-network-inner {
          width: 100%;

          max-width: 1700px;

          margin: 0 auto;
        }


        /* =========================================================
           NETWORK HEADING
        ========================================================= */

        .partners-network-heading {
          width: 100%;

          padding:
            0
            30px;

          text-align: center;
        }


        .partners-network-heading .partners-eyebrow {
          color: var(--orange);
        }


        .partners-network-heading h2 {
          margin:
            25px
            0
            25px;

          color: var(--dark);

          font-size:
            clamp(
              48px,
              4.3vw,
              66px
            );

          line-height: 0.99;

          font-weight: 800;

          letter-spacing: -3px;
        }


        .partners-network-heading > p:last-child {
          max-width: 1100px;

          margin: 0 auto;

          color: var(--gray);

          font-size: 21px;

          line-height: 1.6;

          font-weight: 400;
        }


        /* =========================================================
           PARTNER GRID
        ========================================================= */

        .partners-grid-wrapper {
          width: 100%;

          margin-top: 75px;

          padding:
            0
            8%;
        }


        /* =========================================================
           PARTNER CARD HOVER
        ========================================================= */

        .partners-grid-wrapper article {
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }


        .partners-grid-wrapper article:hover {
          transform: translateY(-5px);
        }


        /* =========================================================
           CTA SECTION

           ALL GREEN BACKGROUND REPLACED WITH #1F3839
        ========================================================= */

        .partners-cta {
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
            #1F3839;
        }


        .partners-cta-inner {
          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 1200px;

          text-align: center;
        }


        /* =========================================================
           CTA EYEBROW
        ========================================================= */

        .partners-cta .partners-eyebrow {
          color: var(--orange-light);
        }


        /* =========================================================
           CTA HEADING
        ========================================================= */

        .partners-cta h2 {
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

        .partners-cta-description {
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

        .partners-cta-buttons {
          margin-top: 52px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 22px;
        }


        .partners-cta-primary,
        .partners-cta-secondary {
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
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        /* =========================================================
           PRIMARY BUTTON
        ========================================================= */

        .partners-cta-primary {
          min-width: 315px;

          gap: 18px;

          background: var(--orange);

          color: #ffffff;
        }


        .partners-primary-text {
          display: inline-block;
        }


        .partners-primary-arrow {
          display: inline-block;

          font-size: 29px;

          line-height: 1;

          transition:
            transform 0.25s ease;
        }


        /* =========================================================
           SECONDARY BUTTON
        ========================================================= */

        .partners-cta-secondary {
          min-width: 240px;

          background: #ffffff;

          color: #1F3839;
        }


        /* =========================================================
           BUTTON HOVER
        ========================================================= */

        .partners-cta-primary:hover,
        .partners-cta-secondary:hover {
          transform: translateY(-4px);

          box-shadow:
            0 15px 35px
            rgba(
              0,
              0,
              0,
              0.16
            );
        }


        .partners-cta-primary:hover
        .partners-primary-arrow {
          transform: translateX(5px);
        }


        /* =========================================================
           CTA DECORATIVE GLOWS
        ========================================================= */

        .partners-cta-glow {
          position: absolute;

          width: 500px;

          height: 500px;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(100px);
        }


        .partners-cta-glow-left {
          left: -260px;

          bottom: -250px;

          background:
            rgba(
              242,
              100,
              65,
              0.045
            );
        }


        .partners-cta-glow-right {
          right: -220px;

          top: -250px;

          background:
            rgba(
              255,
              255,
              255,
              0.035
            );
        }


        /* =========================================================
           FOOTER SPACER
        ========================================================= */

        .partners-footer-spacer {
          width: 100%;

          height: 95px;

          background: #ffffff;
        }


        /* =========================================================
           LARGE DESKTOP
        ========================================================= */

        @media (min-width: 1600px) {

          .partners-hero-inner {
            padding-left: 8.7%;

            padding-right: 8.7%;
          }


          .partners-grid-wrapper {
            padding-left: 8%;

            padding-right: 8%;
          }


          .partners-footer-spacer {
            height: 105px;
          }

        }


        /* =========================================================
           SMALL DESKTOP
        ========================================================= */

        @media (max-width: 1200px) {

          .partners-hero {
            height: 560px;

            background: #1F3839;
          }


          .partners-hero-inner {
            width: calc(100% - 70px);

            padding:
              90px
              0;
          }


          .partners-hero h1 {
            font-size: 65px;

            letter-spacing: -3px;
          }


          .partners-hero-description {
            max-width: 760px;

            font-size: 20px;
          }


          .partners-network {
            padding-top: 100px;

            padding-bottom: 120px;
          }


          .partners-grid-wrapper {
            padding-left: 5%;

            padding-right: 5%;

            margin-top: 65px;
          }


          .partners-network-heading h2 {
            font-size: 54px;
          }


          .partners-network-heading > p:last-child {
            font-size: 19px;
          }


          .partners-cta {
            min-height: 570px;
          }


          .partners-cta h2 {
            font-size: 55px;
          }


          .partners-footer-spacer {
            height: 90px;
          }

        }


        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 900px) {

          .partners-hero {
            height: 520px;

            background: #1F3839;
          }


          .partners-hero-inner {
            width: calc(100% - 60px);

            padding:
              80px
              0;
          }


          .partners-hero h1 {
            font-size: 58px;

            line-height: 1.02;

            letter-spacing: -2.8px;
          }


          .partners-hero-description {
            font-size: 19px;

            line-height: 1.55;
          }


          .partners-network {
            padding:
              90px
              0
              110px;
          }


          .partners-network-heading h2 {
            font-size: 48px;

            letter-spacing: -2px;
          }


          .partners-network-heading > p:last-child {
            font-size: 18px;
          }


          .partners-grid-wrapper {
            margin-top: 55px;

            padding:
              0
              4%;
          }


          .partners-cta {
            min-height: 540px;

            padding:
              90px
              25px;

            background: #1F3839;
          }


          .partners-cta h2 {
            font-size: 48px;

            letter-spacing: -2px;
          }


          .partners-cta-description {
            font-size: 19px;
          }


          .partners-cta-primary,
          .partners-cta-secondary {
            min-height: 70px;

            font-size: 18px;
          }


          .partners-footer-spacer {
            height: 80px;
          }

        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 768px) {

          .partners-eyebrow {
            font-size: 11px;

            letter-spacing: 4px;
          }


          /* =====================================================
             MOBILE HERO
          ===================================================== */

          .partners-hero {
            min-height: 600px;

            height: auto;

            align-items: flex-end;

            background: #1F3839;
          }


          .partners-hero-overlay {
            background:
              rgba(
                31,
                56,
                57,
                0.79
              );
          }


          .partners-hero-dark-overlay {
            background:
              rgba(
                8,
                24,
                25,
                0.17
              );
          }


          .partners-hero-background {
            background-position: center center;
          }


          .partners-hero-inner {
            width: calc(100% - 40px);

            height: auto;

            padding:
              170px
              0
              55px;

            justify-content: flex-end;
          }


          .partners-hero-inner .partners-eyebrow {
            margin-bottom: 23px;
          }


          .partners-hero h1 {
            margin: 0;

            font-size: 46px;

            line-height: 1.02;

            letter-spacing: -2px;
          }


          .partners-hero-description {
            margin-top: 25px;

            font-size: 17px;

            line-height: 1.55;
          }


          /* =====================================================
             NETWORK
          ===================================================== */

          .partners-network {
            padding:
              80px
              0
              95px;
          }


          .partners-network-heading {
            padding:
              0
              22px;
          }


          .partners-network-heading h2 {
            margin:
              20px
              0
              22px;

            font-size: 39px;

            line-height: 1.05;

            letter-spacing: -1.5px;
          }


          .partners-network-heading > p:last-child {
            font-size: 17px;

            line-height: 1.55;
          }


          .desktop-break {
            display: none;
          }


          .partners-grid-wrapper {
            margin-top: 48px;

            padding:
              0
              20px;
          }


          /* =====================================================
             CTA
          ===================================================== */

          .partners-cta {
            min-height: 580px;

            padding:
              85px
              22px;

            background: #1F3839;
          }


          .partners-cta h2 {
            margin:
              22px
              0
              24px;

            font-size: 40px;

            line-height: 1.06;

            letter-spacing: -1.5px;
          }


          .partners-cta-description {
            font-size: 17px;

            line-height: 1.55;
          }


          .partners-cta-buttons {
            width: 100%;

            flex-direction: column;

            gap: 14px;

            margin-top: 40px;
          }


          .partners-cta-primary,
          .partners-cta-secondary {
            width: 100%;

            max-width: 350px;

            min-width: 0;

            min-height: 68px;

            padding:
              0
              30px;

            font-size: 17px;
          }


          /* =====================================================
             FOOTER SPACER
          ===================================================== */

          .partners-footer-spacer {
            height: 70px;
          }

        }


        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 480px) {

          .partners-hero {
            min-height: 560px;

            background: #1F3839;
          }


          .partners-hero-inner {
            width: calc(100% - 44px);

            padding:
              150px
              0
              50px;
          }


          .partners-hero h1 {
            font-size: 39px;

            letter-spacing: -1.7px;
          }


          .partners-hero-description {
            font-size: 16px;
          }


          /* =====================================================
             NETWORK
          ===================================================== */

          .partners-network {
            padding:
              70px
              0
              85px;
          }


          .partners-network-heading h2 {
            font-size: 34px;
          }


          .partners-network-heading > p:last-child {
            font-size: 16px;
          }


          .partners-grid-wrapper {
            padding:
              0
              16px;

            margin-top: 42px;
          }


          /* =====================================================
             CTA
          ===================================================== */

          .partners-cta {
            min-height: 550px;

            padding:
              75px
              20px;

            background: #1F3839;
          }


          .partners-cta h2 {
            font-size: 35px;
          }


          .partners-cta-description {
            font-size: 16px;
          }


          .partners-cta-primary,
          .partners-cta-secondary {
            max-width: 320px;

            min-height: 64px;

            font-size: 16px;
          }


          /* =====================================================
             FOOTER
          ===================================================== */

          .partners-footer-spacer {
            height: 60px;
          }

        }


        /* =========================================================
           REDUCED MOTION
        ========================================================= */

        @media (prefers-reduced-motion: reduce) {

          .partners-cta-primary,
          .partners-cta-secondary,
          .partners-grid-wrapper article {
            transition: none;
          }

        }

      `}</style>

    </main>
  );
}