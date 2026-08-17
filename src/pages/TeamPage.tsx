import { PageHero } from "../components/shared/PageHero";
import { Team } from "../components/Team";

export default function TeamPage() {
  return (
    <>
      {/* =========================================================
          PAGE HERO
      ========================================================= */}

      <PageHero
        eyebrow="Our Team"
        title="Meet the People Behind Vidhata"
        description="Our dedicated leadership team brings together expertise in education, operations, technology, and curriculum development."
        image="/images/volunteer_training.jpg"
        imageAlt="Vidhata team and volunteers"
      />


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
          
          This visually separates the Join the Team section
          from the global footer.
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
           EYEBROW
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
           MAIN HEADING
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
           DESCRIPTION
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
           BUTTON CONTAINER
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

          .team-footer-spacer {
            height: 105px;
          }

        }


        /* =======================================================
           TABLET
        ======================================================= */

        @media (max-width: 900px) {

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