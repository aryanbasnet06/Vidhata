import React from "react";

export default function ProgramsPage() {
  const programs = [
    {
      title: "Life Skills Education",
      description:
        "Teaching essential skills like critical thinking, communication, and problem-solving that empower students beyond the classroom.",
      image: "/images/lifeskills.jpg",
      type: "featured",
    },
    {
      title: "Creative Arts",
      description:
        "Fostering creativity through art, crafts, and design workshops that help students express themselves and discover their talents.",
      image: "/images/creative_arts.png",
      type: "side",
    },
    {
      title: "Music & Performance",
      description:
        "Building confidence and teamwork through music, dance, and drama activities that celebrate cultural expression.",
      image: "/images/music_and_performance.jpg",
      type: "side",
    },
    {
      title: "Innovation & Technology",
      description:
        "Introducing students to technology, coding, and innovative thinking to prepare them for the digital future.",
      image: "/images/innovation_and_technology.jpg",
      type: "bottom",
    },
    {
      title: "Environmental Awareness",
      description:
        "Educating students about environmental conservation and sustainable practices for a better tomorrow.",
      image: "/images/environmental_awareness.png",
      type: "bottom",
    },
    {
      title: "Social Emotional Learning",
      description:
        "Developing emotional intelligence, empathy, and interpersonal skills for healthy relationships and well-being.",
      image: "/images/underserved.jpg",
      type: "bottom",
    },
  ];

  const impactStories = [
    {
      title: "Community Workshops",
      image: "/images/community_workshops.jpg",
    },
    {
      title: "Outdoor Learning Activities",
      image: "/images/outdoor_learning.webp",
    },
    {
      title: "Student Success Stories",
      image: "/images/student_celebration.jpg",
    },
    {
      title: "Interactive Learning Sessions",
      image: "/images/interactive_sessions.jpg",
    },
    {
      title: "Volunteer Training Programs",
      image: "/images/volunteer_training.jpg",
    },
  ];

  const featuredProgram = programs.find(
    (program) => program.type === "featured"
  );

  const sidePrograms = programs.filter(
    (program) => program.type === "side"
  );

  const bottomPrograms = programs.filter(
    (program) => program.type === "bottom"
  );

  return (
    <main className="programs-page">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="program-hero">
        <div className="hero-overlay" />

        <div className="program-hero-content">
          <p className="section-eyebrow">
            OUR PROGRAMS
          </p>

          <h1>
            Learning Beyond <span>Textbooks</span>
          </h1>

          <p className="hero-description">
            Our diverse programs are designed to nurture every aspect of
            student development, from creativity and innovation to emotional
            intelligence and social responsibility.
          </p>
        </div>
      </section>


      {/* =========================================================
          PROGRAMS SECTION
      ========================================================= */}

      <section className="programs-section">
        <div className="programs-layout">

          {/* =====================================================
              TOP ROW
          ===================================================== */}

          <div className="programs-top">

            {/* LARGE FEATURED CARD */}

            {featuredProgram && (
              <ProgramCard
                program={featuredProgram}
                className="program-card-featured"
              />
            )}

            {/* RIGHT COLUMN */}

            <div className="programs-side">
              {sidePrograms.map((program) => (
                <ProgramCard
                  key={program.title}
                  program={program}
                  className="program-card-side"
                />
              ))}
            </div>

          </div>


          {/* =====================================================
              BOTTOM ROW
          ===================================================== */}

          <div className="programs-bottom">
            {bottomPrograms.map((program) => (
              <ProgramCard
                key={program.title}
                program={program}
                className="program-card-bottom"
              />
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================
          IMPACT SECTION
      ========================================================= */}

      <section className="impact-section">

        <div className="impact-heading">

          <p className="section-eyebrow">
            WORK IN ACTION
          </p>

          <h2>
            See Our Impact in Communities
          </h2>

          <p>
            Experience the transformative power of holistic education through
            real moments from our programs across Nepal.
          </p>

        </div>


        {/* =====================================================
            AUTOMATIC HORIZONTAL CAROUSEL
        ===================================================== */}

        <div className="impact-slider-wrapper">

          <div className="impact-slider">

            {/* FIRST SET */}

            <div className="impact-slider-group">
              {impactStories.map((story) => (
                <ImpactCard
                  key={story.title}
                  story={story}
                />
              ))}
            </div>


            {/* DUPLICATE SET */}

            <div
              className="impact-slider-group"
              aria-hidden="true"
            >
              {impactStories.map((story) => (
                <ImpactCard
                  key={`duplicate-${story.title}`}
                  story={story}
                />
              ))}
            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA SECTION
      ========================================================= */}

      <section className="program-cta">

        <div className="cta-glow cta-glow-left" />
        <div className="cta-glow cta-glow-right" />

        <div className="cta-content">

          <p className="section-eyebrow">
            BRING VIDHATA TO YOU
          </p>

          <h2>
            Want These Programs in Your
            <br />
            Community?
          </h2>

          <p>
            Partner with us to bring structured, skill-based learning to the
            students who need it most.
          </p>

          <div className="cta-buttons">

            <a
              href="/join-us"
              className="cta-primary"
            >
              Become a Partner
              <span>→</span>
            </a>

            <a
              href="/volunteer"
              className="cta-secondary"
            >
              Explore Volunteering
            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHITE SPACE BETWEEN CTA AND FOOTER

          This creates a completely white separation between
          the "Bring Vidhata to You" CTA section and the footer.
      ========================================================= */}

      <div
        className="cta-footer-spacer"
        aria-hidden="true"
      />


      {/* =========================================================
          INLINE CSS
      ========================================================= */}

      <style>{`

        /* =====================================================
           GLOBAL
        ===================================================== */

        .programs-page {
          width: 100%;
          overflow-x: hidden;

          background: #ffffff;
          color: #171d2b;

          font-family: inherit;
        }

        .programs-page *,
        .programs-page *::before,
        .programs-page *::after {
          box-sizing: border-box;
        }

        .section-eyebrow {
          margin: 0;

          color: #ff6848;

          font-size: 14px;
          line-height: 1.2;

          font-weight: 700;

          letter-spacing: 5px;

          text-transform: uppercase;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .program-hero {
          position: relative;

          min-height: 480px;

          display: flex;
          align-items: center;

          overflow: hidden;

          background-image: url("/images/lifeskills.jpg");

          background-size: cover;

          background-position: center;
        }

        .hero-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(8, 38, 39, 0.90) 0%,
              rgba(8, 38, 39, 0.76) 45%,
              rgba(8, 38, 39, 0.70) 100%
            );
        }

        .program-hero-content {
          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 1650px;

          margin: 0 auto;

          padding: 115px 8%;
        }

        .program-hero h1 {
          margin: 25px 0 22px;

          color: #ffffff;

          font-size: clamp(48px, 5vw, 72px);

          line-height: 1.05;

          font-weight: 800;

          letter-spacing: -3px;
        }

        .program-hero h1 span {
          color: #ff6848;
        }

        .hero-description {
          max-width: 850px;

          margin: 0;

          color: rgba(255, 255, 255, 0.78);

          font-size: 21px;

          line-height: 1.6;

          font-weight: 400;
        }


        /* =====================================================
           PROGRAMS SECTION
        ===================================================== */

        .programs-section {
          width: 100%;

          background: #ffffff;

          padding: 90px 3% 150px;
        }

        .programs-layout {
          width: 100%;

          max-width: 1680px;

          margin: 0 auto;
        }


        /* =====================================================
           TOP ROW
        ===================================================== */

        .programs-top {
          width: 100%;

          display: grid;

          grid-template-columns: 2.05fr 1fr;

          gap: 30px;
        }

        .programs-side {
          min-width: 0;

          display: grid;

          grid-template-rows: 1fr 1fr;

          gap: 30px;
        }


        /* =====================================================
           BOTTOM ROW
        ===================================================== */

        .programs-bottom {
          width: 100%;

          margin-top: 30px;

          display: grid;

          grid-template-columns: repeat(3, 1fr);

          gap: 30px;
        }


        /* =====================================================
           PROGRAM CARD
        ===================================================== */

        .program-card {
          position: relative;

          overflow: hidden;

          border-radius: 18px;

          background: #0b2d2e;

          isolation: isolate;
        }

        .program-card-featured {
          min-height: 750px;
        }

        .program-card-side {
          min-height: 360px;
        }

        .program-card-bottom {
          min-height: 450px;
        }

        .program-card-image {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 0.6s cubic-bezier(0.2, 0.65, 0.3, 1);
        }

        .program-card:hover .program-card-image {
          transform: scale(1.045);
        }


        /* =====================================================
           CARD OVERLAY
        ===================================================== */

        .program-card-overlay {
          position: absolute;

          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              to top,
              rgba(5, 40, 41, 0.96) 0%,
              rgba(5, 40, 41, 0.80) 25%,
              rgba(5, 40, 41, 0.38) 55%,
              rgba(5, 40, 41, 0.08) 82%,
              rgba(5, 40, 41, 0.02) 100%
            );
        }


        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .program-card-content {
          position: absolute;

          left: 42px;
          right: 42px;
          bottom: 38px;

          z-index: 3;
        }

        .program-card h2 {
          max-width: 720px;

          margin: 0 0 12px;

          color: #ffffff;

          font-size: 34px;

          line-height: 1.15;

          font-weight: 750;

          letter-spacing: -1px;
        }

        .program-card p {
          max-width: 680px;

          margin: 0;

          color: rgba(255, 255, 255, 0.78);

          font-size: 17px;

          line-height: 1.55;

          font-weight: 400;
        }


        /* =====================================================
           FEATURED CARD TYPOGRAPHY
        ===================================================== */

        .program-card-featured h2 {
          font-size: 45px;

          line-height: 1.1;

          letter-spacing: -1.7px;
        }

        .program-card-featured p {
          max-width: 720px;

          font-size: 20px;

          line-height: 1.55;
        }


        /* =====================================================
           SIDE CARD TYPOGRAPHY
        ===================================================== */

        .program-card-side .program-card-content {
          left: 38px;
          right: 38px;
          bottom: 34px;
        }

        .program-card-side h2 {
          font-size: 30px;

          line-height: 1.15;

          letter-spacing: -1px;
        }

        .program-card-side p {
          font-size: 17px;

          line-height: 1.5;

          max-width: 480px;
        }


        /* =====================================================
           BOTTOM CARD TYPOGRAPHY
        ===================================================== */

        .program-card-bottom .program-card-content {
          left: 38px;
          right: 38px;
          bottom: 34px;
        }

        .program-card-bottom h2 {
          font-size: 31px;

          line-height: 1.15;
        }

        .program-card-bottom p {
          font-size: 17px;

          line-height: 1.55;
        }


        /* =====================================================
           PROGRAM ARROW
        ===================================================== */

        .program-arrow {
          position: absolute;

          right: 0;
          bottom: 0;

          width: 58px;
          height: 58px;

          border: 0;

          border-radius: 50%;

          background: #ff6848;

          color: #ffffff;

          display: flex;

          align-items: center;
          justify-content: center;

          font-size: 27px;

          line-height: 1;

          cursor: pointer;

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .program-card:hover .program-arrow {
          transform: translateY(-4px);
        }

        .program-arrow:hover {
          background: #ff7659;
        }


        /* =====================================================
           IMPACT SECTION
        ===================================================== */

        .impact-section {
          width: 100%;

          overflow: hidden;

          background: #ffffff;

          margin-top: 20px;

          padding: 135px 0 150px;

          border-top: 1px solid #f3f4f4;
        }

        .impact-heading {
          max-width: 1100px;

          margin: 0 auto;

          padding: 0 30px;

          text-align: center;
        }

        .impact-heading h2 {
          margin: 26px 0 22px;

          color: #171d2b;

          font-size: clamp(42px, 4.2vw, 60px);

          line-height: 1.08;

          font-weight: 800;

          letter-spacing: -2.5px;
        }

        .impact-heading > p:last-child {
          max-width: 1000px;

          margin: 0 auto;

          color: #70747e;

          font-size: 20px;

          line-height: 1.55;
        }


        /* =====================================================
           IMPACT CAROUSEL
        ===================================================== */

        .impact-slider-wrapper {
          width: 100%;

          overflow: hidden;

          margin-top: 75px;

          position: relative;
        }

        .impact-slider {
          display: flex;

          width: max-content;

          animation:
            impact-horizontal-scroll 38s linear infinite;

          will-change: transform;
        }

        .impact-slider:hover {
          animation-play-state: paused;
        }

        .impact-slider-group {
          display: flex;

          flex-shrink: 0;

          gap: 38px;

          padding-right: 38px;
        }


        /* =====================================================
           IMPACT CARD
        ===================================================== */

        .impact-card {
          position: relative;

          flex: 0 0 395px;

          width: 395px;

          height: 350px;

          overflow: hidden;

          border-radius: 18px;

          background: #0b2d2e;

          isolation: isolate;
        }

        .impact-card img {
          position: absolute;

          inset: 0;

          width: 100%;
          height: 100%;

          object-fit: cover;

          transition:
            transform 0.5s ease;
        }

        .impact-card:hover img {
          transform: scale(1.04);
        }

        .impact-card-overlay {
          position: absolute;

          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              to top,
              rgba(5, 40, 41, 0.90) 0%,
              rgba(5, 40, 41, 0.15) 60%,
              rgba(5, 40, 41, 0.02) 100%
            );
        }

        .impact-card h3 {
          position: absolute;

          z-index: 2;

          left: 28px;
          right: 28px;
          bottom: 25px;

          margin: 0;

          color: #ffffff;

          font-size: 18px;

          line-height: 1.3;

          font-weight: 600;
        }


        /* =====================================================
           HORIZONTAL ANIMATION
        ===================================================== */

        @keyframes impact-horizontal-scroll {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }

        }


        /* =====================================================
           CTA SECTION
        ===================================================== */

        .program-cta {
          position: relative;

          min-height: 620px;

          overflow: hidden;

          display: flex;

          align-items: center;

          justify-content: center;

          background: #5b8a8d;

          padding: 100px 30px;
        }

        .cta-glow {
          position: absolute;

          width: 500px;
          height: 500px;

          border-radius: 50%;

          pointer-events: none;

          filter: blur(100px);
        }

        .cta-glow-left {
          left: -220px;
          top: -150px;

          background: rgba(255, 255, 255, 0.08);
        }

        .cta-glow-right {
          right: -200px;
          bottom: -220px;

          background: rgba(26, 55, 45, 0.25);
        }

        .cta-content {
          position: relative;

          z-index: 2;

          width: 100%;

          max-width: 1000px;

          text-align: center;
        }

        .cta-content h2 {
          margin: 27px 0 30px;

          color: #ffffff;

          font-size: clamp(46px, 5vw, 68px);

          line-height: 1.02;

          font-weight: 800;

          letter-spacing: -3px;
        }

        .cta-content > p:not(.section-eyebrow) {
          max-width: 900px;

          margin: 0 auto;

          color: rgba(255, 255, 255, 0.72);

          font-size: 21px;

          line-height: 1.65;
        }


        /* =====================================================
           CTA BUTTONS
        ===================================================== */

        .cta-buttons {
          margin-top: 52px;

          display: flex;

          align-items: center;

          justify-content: center;

          gap: 22px;
        }

        .cta-primary,
        .cta-secondary {
          min-width: 280px;

          min-height: 78px;

          padding: 0 40px;

          border-radius: 50px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          text-decoration: none;

          font-size: 19px;

          font-weight: 700;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .cta-primary {
          gap: 18px;

          background: #ff6848;

          color: #ffffff;
        }

        .cta-primary span {
          font-size: 27px;

          line-height: 1;
        }

        .cta-secondary {
          background: #ffffff;

          color: #173b3c;
        }

        .cta-primary:hover,
        .cta-secondary:hover {
          transform: translateY(-3px);

          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.12);
        }


        /* =====================================================
           WHITE SPACE BETWEEN CTA AND FOOTER

           THIS IS THE IMPORTANT PART.

           The CTA ends with the teal background.
           This element creates a completely white area
           before your footer begins.
        ===================================================== */

        .cta-footer-spacer {
          width: 100%;

          height: 90px;

          background: #ffffff;
        }


        /* =====================================================
           TABLET / SMALL DESKTOP
        ===================================================== */

        @media (max-width: 1200px) {

          .programs-section {
            padding-left: 4%;
            padding-right: 4%;
            padding-bottom: 130px;
          }

          .program-card-featured {
            min-height: 650px;
          }

          .program-card-side {
            min-height: 310px;
          }

          .program-card-bottom {
            min-height: 400px;
          }

          .program-card-content {
            left: 32px;
            right: 32px;
            bottom: 30px;
          }

          .program-card-featured h2 {
            font-size: 38px;
          }

          .program-card-side h2,
          .program-card-bottom h2 {
            font-size: 27px;
          }

          .impact-card {
            flex-basis: 370px;

            width: 370px;
          }

          .impact-section {
            padding-top: 120px;
            padding-bottom: 140px;
          }

          .cta-footer-spacer {
            height: 80px;
          }
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 900px) {

          .programs-top {
            grid-template-columns: 1.6fr 1fr;

            gap: 20px;
          }

          .programs-side {
            gap: 20px;
          }

          .programs-bottom {
            gap: 20px;

            margin-top: 20px;
          }

          .program-card-featured {
            min-height: 580px;
          }

          .program-card-side {
            min-height: 280px;
          }

          .program-card-bottom {
            min-height: 360px;
          }

          .program-card-featured h2 {
            font-size: 34px;
          }

          .program-card-featured p {
            font-size: 17px;
          }

          .program-card-side h2,
          .program-card-bottom h2 {
            font-size: 24px;
          }

          .program-card-side p,
          .program-card-bottom p {
            font-size: 15px;
          }

          .program-arrow {
            width: 50px;

            height: 50px;

            font-size: 23px;
          }


          /* IMPACT */

          .impact-section {
            margin-top: 15px;

            padding-top: 110px;

            padding-bottom: 125px;
          }

          .impact-slider-group {
            gap: 25px;

            padding-right: 25px;
          }

          .impact-card {
            flex-basis: 340px;

            width: 340px;

            height: 320px;
          }

          .impact-slider {
            animation-duration: 34s;
          }

          .cta-footer-spacer {
            height: 70px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {

          .program-hero {
            min-height: 540px;
          }

          .program-hero-content {
            padding: 100px 25px 80px;
          }

          .program-hero h1 {
            margin-top: 20px;

            font-size: 48px;

            line-height: 1.05;

            letter-spacing: -2px;
          }

          .hero-description {
            font-size: 18px;

            line-height: 1.55;
          }


          /* PROGRAMS */

          .programs-section {
            padding: 70px 20px 110px;
          }

          .programs-top {
            display: flex;

            flex-direction: column;

            gap: 20px;
          }

          .programs-side {
            display: flex;

            flex-direction: column;

            gap: 20px;
          }

          .programs-bottom {
            display: flex;

            flex-direction: column;

            gap: 20px;

            margin-top: 20px;
          }

          .program-card-featured,
          .program-card-side,
          .program-card-bottom {
            min-height: 390px;
          }

          .program-card-content,
          .program-card-side .program-card-content,
          .program-card-bottom .program-card-content {
            left: 25px;

            right: 25px;

            bottom: 25px;
          }

          .program-card-featured h2 {
            font-size: 30px;

            line-height: 1.12;
          }

          .program-card h2,
          .program-card-side h2,
          .program-card-bottom h2 {
            font-size: 28px;

            line-height: 1.15;
          }

          .program-card-featured p,
          .program-card p {
            font-size: 16px;

            line-height: 1.5;

            max-width: calc(100% - 65px);
          }

          .program-arrow {
            width: 48px;

            height: 48px;

            font-size: 22px;
          }


          /* IMPACT */

          .impact-section {
            margin-top: 10px;

            padding-top: 95px;

            padding-bottom: 105px;

            border-top: 1px solid #f3f4f4;
          }

          .impact-heading {
            padding: 0 25px;
          }

          .impact-heading h2 {
            font-size: 42px;

            letter-spacing: -1.5px;
          }

          .impact-heading > p:last-child {
            font-size: 18px;
          }

          .impact-slider-wrapper {
            margin-top: 55px;
          }

          .impact-slider-group {
            gap: 18px;

            padding-right: 18px;
          }

          .impact-card {
            flex-basis: 330px;

            width: 330px;

            height: 300px;
          }

          .impact-slider {
            animation-duration: 30s;
          }


          /* CTA */

          .program-cta {
            min-height: 600px;

            padding: 90px 25px;
          }

          .cta-content h2 {
            font-size: 46px;

            letter-spacing: -2px;
          }

          .cta-content > p:not(.section-eyebrow) {
            font-size: 18px;
          }

          .cta-buttons {
            flex-direction: column;

            gap: 15px;

            width: 100%;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;

            max-width: 350px;

            min-width: 0;

            min-height: 68px;
          }


          /* WHITE SPACE */

          .cta-footer-spacer {
            height: 60px;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .section-eyebrow {
            font-size: 11px;

            letter-spacing: 4px;
          }

          .program-hero {
            min-height: 500px;
          }

          .program-hero h1 {
            font-size: 40px;
          }

          .hero-description {
            font-size: 16px;
          }


          /* Programs */

          .program-card-featured,
          .program-card-side,
          .program-card-bottom {
            min-height: 360px;
          }

          .program-card h2,
          .program-card-featured h2,
          .program-card-side h2,
          .program-card-bottom h2 {
            font-size: 25px;
          }

          .program-card p,
          .program-card-featured p {
            font-size: 15px;
          }


          /* Impact */

          .impact-section {
            padding-top: 85px;

            padding-bottom: 95px;
          }

          .impact-heading h2 {
            font-size: 35px;
          }

          .impact-heading > p:last-child {
            font-size: 16px;
          }

          .impact-slider-group {
            gap: 16px;

            padding-right: 16px;
          }

          .impact-card {
            flex-basis: 300px;

            width: 300px;

            height: 280px;
          }

          .impact-slider {
            animation-duration: 27s;
          }


          /* CTA */

          .cta-content h2 {
            font-size: 38px;
          }

          .cta-content > p:not(.section-eyebrow) {
            font-size: 16px;
          }


          /* WHITE SPACE */

          .cta-footer-spacer {
            height: 50px;
          }
        }


        /* =====================================================
           REDUCED MOTION ACCESSIBILITY
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .impact-slider {
            animation: none;
          }

          .program-card-image,
          .impact-card img {
            transition: none;
          }

        }

      `}</style>
    </main>
  );
}


/* =============================================================
   PROGRAM CARD COMPONENT
============================================================= */

function ProgramCard({ program, className = "" }) {
  return (
    <article
      className={`program-card ${className}`}
    >

      <img
        src={program.image}
        alt={program.title}
        className="program-card-image"
      />

      <div className="program-card-overlay" />

      <div className="program-card-content">

        <h2>
          {program.title}
        </h2>

        <p>
          {program.description}
        </p>

        <button
          className="program-arrow"
          aria-label={`Learn more about ${program.title}`}
        >
          ↗
        </button>

      </div>

    </article>
  );
}


/* =============================================================
   IMPACT CARD COMPONENT
============================================================= */

function ImpactCard({ story }) {
  return (
    <article className="impact-card">

      <img
        src={story.image}
        alt={story.title}
      />

      <div className="impact-card-overlay" />

      <h3>
        {story.title}
      </h3>

    </article>
  );
}