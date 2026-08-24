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
          <span className="about-eyebrow hero-reveal hero-delay-1">
            ABOUT US
          </span>

          <h1 className="hero-title">
            <span className="hero-line hero-delay-2">
              Empowering Students
            </span>

            <span className="hero-line hero-highlight hero-delay-3">
              Through Holistic Learning
            </span>
          </h1>

          <p className="hero-description hero-delay-4">
            We provide structured non-academic and skill-based learning to
            foster holistic development among underserved students through a
            streamlined volunteering gateway across Nepal.
          </p>
        </div>

        <div className="hero-scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="about-story">
        {/* 01 — OUR MISSION */}
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
            <span className="story-label">OUR MISSION</span>

            <h2>Bridging the Education Gap</h2>

            <p>
              To bridge the gap in educational opportunities by providing
              comprehensive, non-academic learning experiences that empower
              underserved students across Nepal to develop into confident,
              creative, and compassionate individuals ready to shape their own
              futures and contribute meaningfully to their communities.
            </p>
          </div>
        </div>

        {/* 02 — OUR APPROACH */}
        <div className="story-block story-block-right">
          <div className="story-number">02</div>

          <div className="story-content">
            <span className="story-label">OUR APPROACH</span>

            <h2>Learning Beyond Textbooks</h2>

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

        {/* 03 — OUR COMMUNITIES */}
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
            <span className="story-label">OUR COMMUNITIES</span>

            <h2>Reaching Those Who Need It Most</h2>

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
          FOUR PILLARS
      ========================================================= */}
      <section className="pillars-section">
        <div className="section-heading">
          <span className="about-eyebrow">WHAT DRIVES US</span>

          <h2>Four Pillars of Holistic Growth</h2>

          <p>
            Every Vidhata program is built on the values that shape confident,
            creative, and compassionate young people.
          </p>
        </div>

        <div className="pillars-grid">
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
                Connecting passionate volunteers with meaningful opportunities
                to make a difference.
              </p>
            </div>
          </div>

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
          <div className="impact-item">
            <div className="impact-icon">⌂</div>
            <strong>12000+</strong>
            <span>STUDENTS REACHED</span>
          </div>

          <div className="impact-item">
            <div className="impact-icon">♧</div>
            <strong>30</strong>
            <span>PARTNER ORGANIZATIONS</span>
          </div>

          <div className="impact-item">
            <div className="impact-icon">♧</div>
            <strong>128</strong>
            <span>VOLUNTEERS ENGAGED</span>
          </div>

          <div className="impact-item">
            <div className="impact-icon">◷</div>
            <strong>450+</strong>
            <span>LEARNING HOURS</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHITE GAP
      ========================================================= */}
      <div className="cta-gap" />

      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="about-cta">
        <div className="cta-content">
          <span className="about-eyebrow">JOIN THE MISSION</span>

          <h2>Help Us Reach Every Student</h2>

          <p>
            Whether you volunteer, partner, or simply spread the word — you
            can help bridge the education gap in Nepal.
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

     
      </section>

      {/* =========================================================
          PAGE CSS
      ========================================================= */}
      <style>{`
        .about-page {
          --green: #1F3839;
          --green-dark: #1F3839;
          --green-light: #1F3839;

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
          min-height: 680px;

          display: flex;
          align-items: center;

          background-image:
            url("/images/holistic_development.jpg");

          background-size: cover;
          background-position: center;
          isolation: isolate;

          overflow: hidden;
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(31, 56, 57, 0.96) 0%,
              rgba(31, 56, 57, 0.88) 42%,
              rgba(31, 56, 57, 0.62) 72%,
              rgba(31, 56, 57, 0.40) 100%
            );

          z-index: -1;
        }

        .about-hero-content {
          width: min(100%, 1440px);
          margin: 0 auto;
          padding: 110px 8%;
          color: var(--white);
        }

        /* =====================================================
           HERO REVEAL ANIMATION
        ===================================================== */

        .hero-reveal,
        .hero-line,
        .hero-description {
          opacity: 0;
          transform: translateY(42px);
          animation:
            heroReveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hero-delay-1 {
          animation-delay: 0.12s;
        }

        .hero-delay-2 {
          animation-delay: 0.28s;
        }

        .hero-delay-3 {
          animation-delay: 0.43s;
        }

        .hero-delay-4 {
          animation-delay: 0.64s;
        }

        @keyframes heroReveal {
          0% {
            opacity: 0;
            transform: translateY(42px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
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

        .hero-title {
          max-width: 1050px;
          margin: 0;

          font-size: clamp(50px, 6vw, 88px);
          line-height: 0.98;
          font-weight: 800;
          letter-spacing: -4px;
        }

        .hero-line {
          display: block;
          width: fit-content;
          overflow: hidden;
        }

        .hero-highlight {
          color: var(--orange);
        }

        .hero-description {
          max-width: 800px;
          margin: 34px 0 0;

          color: rgba(255, 255, 255, 0.82);

          font-size: 21px;
          line-height: 1.7;
        }

        /* =====================================================
           HERO SCROLL INDICATOR
        ===================================================== */

        .hero-scroll-indicator {
          position: absolute;
          right: 7%;
          bottom: 45px;

          display: flex;
          align-items: center;
          gap: 15px;

          color: rgba(255, 255, 255, 0.7);

          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;

          opacity: 0;
          animation:
            heroFade 1s ease 1s forwards;
        }

        @keyframes heroFade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        .scroll-line {
          width: 70px;
          height: 1px;
          background: rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
        }

        .scroll-line::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 25px;
          height: 100%;
          background: var(--orange);

          animation: scrollLine 2s ease-in-out infinite;
        }

        @keyframes scrollLine {
          0% {
            transform: translateX(-30px);
          }

          50% {
            transform: translateX(75px);
          }

          100% {
            transform: translateX(-30px);
          }
        }

        /* =====================================================
           STORY
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

          transition:
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.6s ease;
        }

        .story-image-wrapper:hover .story-image {
          transform: scale(1.025);
          box-shadow: 0 25px 60px rgba(31, 56, 57, 0.16);
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

        .story-label {
          display: block;
          margin-bottom: 18px;

          color: var(--orange);

          font-size: 12px;
          font-weight: 800;
          letter-spacing: 4px;
          text-transform: uppercase;
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
           PILLARS
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
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .pillar-card:hover {
          transform: translateY(-8px);

          box-shadow:
            0 20px 50px rgba(28, 36, 51, 0.12);
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
            transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .pillar-card:hover .pillar-image-wrapper img {
          transform: scale(1.06);
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
          background: #1F3839;
          color: var(--white);

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
           GAP
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

          background: #1F3839;
          color: var(--white);

          overflow: hidden;
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
          color: #1F3839;
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
          color: #1F3839;

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

          .hero-title {
            font-size: clamp(50px, 7vw, 76px);
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
            border-top: 1px solid var(--border);
          }

          .impact-item:nth-child(4) {
            border-top: 1px solid var(--border);
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {
          .about-hero {
            min-height: 650px;
            background-position: center;
          }

          .about-hero-content {
            padding: 90px 25px;
          }

          .about-eyebrow {
            font-size: 11px;
            letter-spacing: 3px;
          }

          .hero-title {
            font-size: clamp(44px, 12vw, 64px);
            letter-spacing: -2.5px;
            line-height: 1;
          }

          .hero-description {
            margin-top: 26px;
            font-size: 17px;
            line-height: 1.65;
          }

          .hero-scroll-indicator {
            display: none;
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
            border-top: 1px solid var(--border);
          }

          .impact-item:first-child {
            border-top: none;
          }

          .impact-item {
            padding: 50px 25px;
          }

          /* GAP */

          .cta-gap {
            height: 60px;
          }

          /* CTA */

          .about-cta {
            min-height: auto;
            padding: 90px 25px 0;
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
            min-height: 600px;
          }

          .about-hero-content {
            padding: 75px 22px;
          }

          .hero-title {
            font-size: 45px;
          }

          .hero-description {
            font-size: 16px;
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

          .about-cta {
            margin-bottom: 45px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .hero-reveal,
          .hero-line,
          .hero-description,
          .hero-scroll-indicator {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .pillar-card,
          .pillar-image-wrapper img,
          .story-image,
          .cta-primary,
          .cta-secondary {
            transition: none;
          }

          .scroll-line::after {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}