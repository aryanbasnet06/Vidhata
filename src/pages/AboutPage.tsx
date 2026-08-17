import React from "react";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="about-hero">
        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <span className="about-eyebrow">ABOUT US</span>

          <h1>
            Transforming Education in
            <span>Nepal</span>
          </h1>

          <p>
            Vidhata is dedicated to providing structured non-academic
            learning opportunities that foster holistic development among
            underserved students across Nepal.
          </p>
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="about-story">
        {/* =======================================================
            01 — OUR MISSION
        ======================================================= */}
        <div className="story-block story-block-left">
          <div className="story-number">01</div>

          <div className="story-image-wrapper">
            <img
              src="/images/non_academic.png"
              alt="Students participating in a Vidhata learning program"
              className="story-image"
            />
          </div>

          <div className="story-content">
            <h2>Our Mission</h2>

            <p>
              To bridge the gap in educational opportunities by providing
              comprehensive, non-academic learning experiences that empower
              underserved students across Nepal to develop into confident,
              creative, and compassionate individuals ready to shape their own
              futures and contribute meaningfully to their communities.
            </p>
          </div>
        </div>

        {/* =======================================================
            02 — OUR APPROACH
        ======================================================= */}
        <div className="story-block story-block-right">
          <div className="story-number">02</div>

          <div className="story-content">
            <h2>Our Approach</h2>

            <p>
              Through our streamlined volunteering gateway, we connect
              passionate educators with students across Nepal. Every program
              is structured, skill-based, and designed to create lasting
              impact in communities that need it most — going far beyond
              textbooks.
            </p>
          </div>

          <div className="story-image-wrapper">
            <img
              src="/images/holistic_development.jpg"
              alt="Students participating in a classroom learning session"
              className="story-image"
            />
          </div>
        </div>

        {/* =======================================================
            03 — OUR COMMUNITIES
        ======================================================= */}
        <div className="story-block story-block-left">
          <div className="story-number">03</div>

          <div className="story-image-wrapper">
            <img
              src="/images/underserved.jpg"
              alt="Students from an underserved community participating in learning"
              className="story-image"
            />
          </div>

          <div className="story-content">
            <h2>Our Communities</h2>

            <p>
              We reach students who need it most. From schools to care homes
              across Nepal, Vidhata brings equal learning opportunities to
              underserved communities — nurturing confident, creative, and
              compassionate individuals.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUR PILLARS OF HOLISTIC GROWTH
      ========================================================= */}
      <section className="pillars-section">
        <div className="section-heading">
          <span className="about-eyebrow">WHAT DRIVES US</span>

          <h2>Four Pillars of Holistic Growth</h2>

          <p>
            Every Vidhata program is built on the values that shape
            confident, creative, and compassionate young people.
          </p>
        </div>

        <div className="pillars-grid">
          {/* Pillar 1 */}
          <div className="pillar-card">
            <div className="pillar-image-wrapper">
              <img
                src="/images/non_academic.png"
                alt="Students learning together"
              />
            </div>

            <div className="pillar-content">
              <h3>Non-Academic Learning</h3>

              <p>
                Structured programs that go beyond textbooks to develop
                essential life skills and creativity.
              </p>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="pillar-card">
            <div className="pillar-image-wrapper">
              <img
                src="/images/holistic_development.jpg"
                alt="Students participating in holistic development activities"
              />
            </div>

            <div className="pillar-content">
              <h3>Holistic Development</h3>

              <p>
                Fostering intellectual, emotional, and social growth for
                well-rounded individuals.
              </p>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="pillar-card">
            <div className="pillar-image-wrapper">
              <img
                src="/images/streamlined_volunteering.png"
                alt="Vidhata volunteers working with students"
              />
            </div>

            <div className="pillar-content">
              <h3>Streamlined Volunteering</h3>

              <p>
                Connecting passionate volunteers with meaningful
                opportunities to make a difference.
              </p>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="pillar-card">
            <div className="pillar-image-wrapper">
              <img
                src="/images/underserved.jpg"
                alt="Students from underserved communities"
              />
            </div>

            <div className="pillar-content">
              <h3>Underserved Communities</h3>

              <p>
                Reaching students who need it most across Nepal with equal
                learning opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IMPACT
      ========================================================= */}
      <section className="impact-section">
        <div className="section-heading impact-heading">
          <span className="about-eyebrow">OUR IMPACT</span>

          <h2>The Numbers Behind the Change</h2>

          <p>
            Real outcomes from real classrooms, communities, and volunteers
            across Nepal.
          </p>
        </div>

        <div className="impact-grid">
          {/* Students */}
          <div className="impact-item">
            <div className="impact-icon">⌂</div>

            <strong>5,600+</strong>

            <span>STUDENTS REACHED</span>
          </div>

          {/* Organizations */}
          <div className="impact-item">
            <div className="impact-icon">♧</div>

            <strong>18</strong>

            <span>PARTNER ORGANIZATIONS</span>
          </div>

          {/* Volunteers */}
          <div className="impact-item">
            <div className="impact-icon">♧</div>

            <strong>128</strong>

            <span>VOLUNTEERS ENGAGED</span>
          </div>

          {/* Hours */}
          <div className="impact-item">
            <div className="impact-icon">◷</div>

            <strong>450+</strong>

            <span>LEARNING HOURS</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHITE VERTICAL GAP
          
          The CTA intentionally starts after a white gap so that
          the green section does not directly touch the Impact
          section.
      ========================================================= */}
      <div className="cta-gap" />

      {/* =========================================================
          JOIN THE MISSION / CTA
      ========================================================= */}
      <section className="about-cta">
        <div className="cta-content">
          <span className="about-eyebrow">JOIN THE MISSION</span>

          <h2>Help Us Reach Every Student</h2>

          <p>
            Whether you volunteer, partner, or simply spread the word —
            you can help bridge the education gap in Nepal.
          </p>

          <div className="cta-buttons">
            <a href="/join-us" className="cta-primary">
              Get Involved
              <span>→</span>
            </a>

            <a href="/contact" className="cta-secondary">
              Contact Us
            </a>
          </div>
        </div>

        {/* =======================================================
            FOOTER AREA
        ======================================================= */}
      </section>

      {/* =========================================================
          PAGE CSS
      ========================================================= */}
      <style>{`
        /* =====================================================
           VARIABLES
        ===================================================== */

        .about-page {
          --green: #5B8A8D;
          --green-dark: #5B8A8D;
          --green-light: #EAF1F1;

          --orange: #FF6545;
          --orange-light: #FFF0EC;

          --cream: #FCFAF7;
          --white: #FFFFFF;

          --text: #1C2433;
          --text-light: #69707D;
          --border: #E9E7E3;

          --radius: 22px;

          width: 100%;

          background: var(--white);

          color: var(--text);

          overflow: hidden;
        }


        /* =====================================================
           GLOBAL
        ===================================================== */

        .about-page *,
        .about-page *::before,
        .about-page *::after {
          box-sizing: border-box;
        }

        .about-page img {
          display: block;
          max-width: 100%;
        }

        .about-page a {
          text-decoration: none;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .about-hero {
          position: relative;

          min-height: 590px;

          display: flex;
          align-items: center;

          background-image:
            url("/images/holistic_development.jpg");

          background-size: cover;

          background-position: center;

          isolation: isolate;
        }

        .about-hero-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(17, 57, 59, 0.94) 0%,
              rgba(17, 57, 59, 0.84) 45%,
              rgba(17, 57, 59, 0.55) 100%
            );

          z-index: -1;
        }

        .about-hero-content {
          width: min(100%, 1440px);

          margin: 0 auto;

          padding: 100px 8%;

          color: var(--white);
        }

        .about-eyebrow {
          display: block;

          margin-bottom: 24px;

          color: var(--orange);

          font-size: 14px;

          font-weight: 700;

          letter-spacing: 5px;

          text-transform: uppercase;
        }

        .about-hero h1 {
          max-width: 900px;

          margin: 0;

          font-size: clamp(52px, 5.2vw, 82px);

          line-height: 0.98;

          font-weight: 800;

          letter-spacing: -3px;
        }

        .about-hero h1 span {
          display: block;

          color: var(--orange);
        }

        .about-hero p {
          max-width: 800px;

          margin: 32px 0 0;

          color: rgba(255, 255, 255, 0.78);

          font-size: 21px;

          line-height: 1.7;
        }


        /* =====================================================
           OUR STORY
        ===================================================== */

        .about-story {
          width: min(100%, 1440px);

          margin: 0 auto;

          padding: 120px 8% 80px;

          background: var(--cream);
        }

        .story-block {
          position: relative;

          display: grid;

          grid-template-columns:
            minmax(0, 1fr)
            minmax(0, 1fr);

          align-items: center;

          gap: 90px;

          min-height: 600px;

          margin-bottom: 120px;
        }

        .story-block:last-child {
          margin-bottom: 0;
        }

        .story-block-left {
          grid-template-areas:
            "image content";
        }

        .story-block-right {
          grid-template-areas:
            "content image";
        }

        .story-block-left .story-image-wrapper {
          grid-area: image;
        }

        .story-block-left .story-content {
          grid-area: content;
        }

        .story-block-right .story-image-wrapper {
          grid-area: image;
        }

        .story-block-right .story-content {
          grid-area: content;
        }

        .story-image-wrapper {
          position: relative;

          width: 100%;
        }

        .story-image {
          width: 100%;

          height: 520px;

          object-fit: cover;

          border-radius: var(--radius);
        }

        .story-number {
          position: absolute;

          top: -55px;

          left: -30px;

          z-index: 3;

          color: var(--orange);

          font-size: 112px;

          line-height: 1;

          font-weight: 800;

          letter-spacing: -7px;

          pointer-events: none;
        }

        .story-block-right .story-number {
          left: auto;

          right: calc(50% - 35px);
        }

        .story-content {
          padding: 20px 0;
        }

        .story-content h2 {
          margin: 0 0 28px;

          font-size: clamp(42px, 4vw, 64px);

          line-height: 1.05;

          font-weight: 800;

          letter-spacing: -2.5px;
        }

        .story-content p {
          max-width: 650px;

          margin: 0;

          color: var(--text-light);

          font-size: 20px;

          line-height: 1.7;
        }


        /* =====================================================
           FOUR PILLARS
        ===================================================== */

        .pillars-section {
          padding: 130px 6%;

          background: var(--white);
        }

        .section-heading {
          max-width: 1000px;

          margin: 0 auto 70px;

          text-align: center;
        }

        .section-heading .about-eyebrow {
          margin-bottom: 20px;
        }

        .section-heading h2 {
          margin: 0;

          font-size: clamp(44px, 4.3vw, 66px);

          line-height: 1.05;

          font-weight: 800;

          letter-spacing: -3px;
        }

        .section-heading p {
          max-width: 850px;

          margin: 26px auto 0;

          color: var(--text-light);

          font-size: 20px;

          line-height: 1.65;
        }

        .pillars-grid {
          width: min(100%, 1400px);

          display: grid;

          grid-template-columns: repeat(4, 1fr);

          gap: 28px;

          margin: 0 auto;
        }

        .pillar-card {
          overflow: hidden;

          background: var(--cream);

          border: 1px solid var(--border);

          border-radius: var(--radius);

          box-shadow:
            0 8px 30px rgba(28, 36, 51, 0.05);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .pillar-card:hover {
          transform: translateY(-7px);

          box-shadow:
            0 18px 45px rgba(28, 36, 51, 0.1);
        }

        .pillar-image-wrapper {
          height: 250px;

          overflow: hidden;
        }

        .pillar-image-wrapper img {
          width: 100%;

          height: 100%;

          object-fit: cover;

          transition:
            transform 0.5s ease;
        }

        .pillar-card:hover .pillar-image-wrapper img {
          transform: scale(1.04);
        }

        .pillar-content {
          padding: 28px 28px 32px;
        }

        .pillar-content h3 {
          margin: 0 0 18px;

          font-size: 22px;

          line-height: 1.25;

          font-weight: 800;
        }

        .pillar-content p {
          margin: 0;

          color: var(--text-light);

          font-size: 17px;

          line-height: 1.7;
        }


        /* =====================================================
           IMPACT
        ===================================================== */

        .impact-section {
          padding: 120px 6% 130px;

          background: var(--cream);
        }

        .impact-heading {
          margin-bottom: 80px;
        }

        .impact-grid {
          width: min(100%, 1400px);

          display: grid;

          grid-template-columns: repeat(4, 1fr);

          margin: 0 auto;

          background: var(--white);

          border-radius: 28px;

          border: 1px solid var(--border);

          overflow: hidden;
        }

        .impact-item {
          position: relative;

          display: flex;

          flex-direction: column;

          align-items: center;

          padding: 60px 30px;

          text-align: center;
        }

        .impact-item + .impact-item {
          border-left: 1px solid var(--border);
        }

        .impact-icon {
          width: 62px;

          height: 62px;

          display: flex;

          align-items: center;

          justify-content: center;

          margin-bottom: 25px;

          border-radius: 50%;

          background: var(--green-light);

          color: var(--green);

          font-size: 27px;
        }

        .impact-item strong {
          display: block;

          color: var(--green);

          font-size: clamp(44px, 4vw, 62px);

          line-height: 1;

          font-weight: 800;

          letter-spacing: -2px;
        }

        .impact-item span {
          display: block;

          margin-top: 17px;

          color: #777D87;

          font-size: 14px;

          font-weight: 700;

          letter-spacing: 3px;
        }


        /* =====================================================
           WHITE GAP BETWEEN IMPACT & CTA
        ===================================================== */

        .cta-gap {
          width: 100%;

          height: 80px;

          background: #FFFFFF;
        }


        /* =====================================================
           CTA
        ===================================================== */

        .about-cta {
          position: relative;

          min-height: 700px;

          padding: 120px 7% 0;

          background: #5B8A8D;

          color: var(--white);

          overflow: hidden;

          /*
            WHITE GAP BETWEEN CTA AND FOOTER
          */
          margin-bottom: 80px;
        }

        .cta-content {
          max-width: 900px;

          margin: 0 auto;

          text-align: center;
        }

        .cta-content .about-eyebrow {
          margin-bottom: 25px;
        }

        .cta-content h2 {
          margin: 0;

          font-size: clamp(48px, 5vw, 72px);

          line-height: 1.05;

          font-weight: 800;

          letter-spacing: -3px;
        }

        .cta-content p {
          max-width: 820px;

          margin: 28px auto 0;

          color: rgba(255, 255, 255, 0.78);

          font-size: 20px;

          line-height: 1.65;
        }

        .cta-buttons {
          display: flex;

          justify-content: center;

          align-items: center;

          gap: 20px;

          margin-top: 42px;
        }

        .cta-primary,
        .cta-secondary {
          min-width: 220px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 15px;

          padding: 22px 34px;

          border-radius: 60px;

          font-size: 18px;

          font-weight: 700;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .cta-primary {
          background: var(--orange);

          color: var(--white);
        }

        .cta-secondary {
          background: var(--white);

          color: #5B8A8D;
        }

        .cta-primary:hover,
        .cta-secondary:hover {
          transform: translateY(-3px);

          box-shadow:
            0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .cta-primary span {
          font-size: 24px;

          line-height: 1;
        }


        /* =====================================================
           CTA FOOTER
        ===================================================== */

        .cta-footer {
          width: min(100%, 1500px);

          display: grid;

          grid-template-columns:
            1.5fr
            1fr
            1fr
            1fr;

          align-items: center;

          margin: 180px auto 0;

          padding: 38px 0 50px;

          border-top:
            1px solid rgba(255, 255, 255, 0.2);
        }

        .footer-brand {
          display: flex;

          align-items: center;

          gap: 14px;

          font-size: 26px;

          font-weight: 800;
        }

        .footer-logo-circle {
          width: 48px;

          height: 48px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background: var(--white);

          color: #5B8A8D;

          font-weight: 800;
        }

        .footer-column {
          text-align: center;
        }

        .footer-column span {
          color: var(--orange);

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 4px;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {
          .about-hero-content {
            padding-left: 7%;

            padding-right: 7%;
          }

          .story-block {
            gap: 55px;
          }

          .pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .impact-item:nth-child(3) {
            border-left: none;

            border-top:
              1px solid var(--border);
          }

          .impact-item:nth-child(4) {
            border-top:
              1px solid var(--border);
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {
          .about-hero {
            min-height: 620px;

            background-position: center;
          }

          .about-hero-content {
            padding: 80px 25px;
          }

          .about-eyebrow {
            font-size: 11px;

            letter-spacing: 3px;
          }

          .about-hero h1 {
            font-size: clamp(45px, 13vw, 65px);

            letter-spacing: -2px;
          }

          .about-hero p {
            margin-top: 25px;

            font-size: 17px;

            line-height: 1.6;
          }


          /* STORY */

          .about-story {
            padding: 100px 25px 40px;
          }

          .story-block,
          .story-block-left,
          .story-block-right {
            display: flex;

            flex-direction: column;

            gap: 45px;

            min-height: auto;

            margin-bottom: 120px;
          }

          .story-block-right .story-content {
            order: 1;
          }

          .story-block-right .story-image-wrapper {
            order: 2;
          }

          .story-image {
            height: 380px;
          }

          .story-number,
          .story-block-right .story-number {
            top: -40px;

            left: -5px;

            right: auto;

            font-size: 85px;

            letter-spacing: -5px;
          }

          .story-content h2 {
            font-size: 43px;

            letter-spacing: -1.5px;

            margin-bottom: 20px;
          }

          .story-content p {
            font-size: 17px;

            line-height: 1.7;
          }


          /* PILLARS */

          .pillars-section {
            padding: 90px 20px;
          }

          .section-heading {
            margin-bottom: 50px;
          }

          .section-heading h2 {
            font-size: 43px;

            letter-spacing: -1.5px;
          }

          .section-heading p {
            font-size: 17px;
          }

          .pillars-grid {
            grid-template-columns: 1fr;

            gap: 22px;
          }

          .pillar-image-wrapper {
            height: 250px;
          }


          /* IMPACT */

          .impact-section {
            padding: 90px 20px;
          }

          .impact-grid {
            grid-template-columns: 1fr;
          }

          .impact-item,
          .impact-item:nth-child(3),
          .impact-item:nth-child(4) {
            border-left: none;

            border-top:
              1px solid var(--border);
          }

          .impact-item:first-child {
            border-top: none;
          }

          .impact-item {
            padding: 50px 25px;
          }


          /* WHITE GAP */

          .cta-gap {
            height: 60px;
          }


          /* CTA */

          .about-cta {
            min-height: auto;

            padding: 90px 25px 0;

            background: #5B8A8D;

            /*
              WHITE GAP BETWEEN CTA AND FOOTER
            */
            margin-bottom: 60px;
          }

          .cta-content h2 {
            font-size: 46px;

            letter-spacing: -2px;
          }

          .cta-content p {
            font-size: 17px;
          }

          .cta-buttons {
            flex-direction: column;

            width: 100%;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
          }

          .cta-footer {
            grid-template-columns: 1fr 1fr;

            gap: 35px;

            margin-top: 100px;
          }

          .footer-brand {
            grid-column: 1 / -1;

            justify-content: center;
          }

          .footer-column {
            text-align: center;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {
          .about-hero {
            min-height: 580px;
          }

          .about-hero-content {
            padding: 70px 22px;
          }

          .about-hero h1 {
            font-size: 46px;
          }

          .story-image {
            height: 320px;
          }

          .story-number,
          .story-block-right .story-number {
            font-size: 70px;
          }

          .story-content h2,
          .section-heading h2 {
            font-size: 38px;
          }

          .cta-content h2 {
            font-size: 40px;
          }

          .cta-gap {
            height: 45px;
          }

          .cta-footer {
            grid-template-columns: 1fr;
          }

          .footer-brand {
            grid-column: auto;
          }

          /*
            WHITE GAP BETWEEN CTA AND FOOTER
          */
          .about-cta {
            margin-bottom: 45px;
          }
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .pillar-card,
          .pillar-image-wrapper img,
          .cta-primary,
          .cta-secondary {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}