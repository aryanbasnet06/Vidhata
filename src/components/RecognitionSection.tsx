"use client";

export function RecognitionSection() {
  return (
    <>
      <section id="recognitions" className="recognition-section">
        <div className="recognition-container">
          <span className="recognition-eyebrow">RECOGNITION</span>

          <h2 className="recognition-title">Our Recognition</h2>

          <p className="recognition-intro">
            Our work has received formal recognition for its contribution to
            social impact, youth leadership, and community development at both
            national and international platforms.
          </p>

          <div className="recognition-grid">
            {/* LEFT */}
            <div className="recognition-left">
              <div className="certificate-frame">
                <img
                  src="/images/glocal-award.png"
                  alt="Glocal Teen Hero Recognition"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="recognition-right">
              <img
                src="/images/Glocal_logo.png"
                alt="Glocal Teen Hero Award Logo"
                className="award-image"
              />

              <a
                href="https://glocalteenhero.com/aryan-basnet/"
                target="_blank"
                rel="noopener noreferrer"
                className="award-link"
              >
                Read our feature in Glocal Teen Hero
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .recognition-section {
          background: #f8fcfb;
          padding: 110px 24px;
        }

        .recognition-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .recognition-eyebrow {
          display: block;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #6fa7a6;
          margin-bottom: 12px;
        }

        .recognition-title {
          font-size: 40px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 18px;
        }

        .recognition-intro {
          max-width: 720px;
          margin: 0 auto 70px;
          font-size: 16px;
          line-height: 1.75;
          color: #475569;
        }

        .recognition-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .recognition-left {
          display: flex;
          justify-content: center;
        }

        /* ✅ FIXED */
        .certificate-frame {
          display: inline-block;
          background: #ffffff;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
        }

        .certificate-frame img {
          width: 600px;
          hieght:600px
          max-width: 100%;
          display: block;
        }

        .recognition-right {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .award-image {
          max-width: 320px;
          margin-bottom: 20px;
        }

        .award-link {
          font-size: 14px;
          font-weight: 500;
          color: #e97457;
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        .award-link:hover {
          opacity: 0.75;
        }

        @media (max-width: 900px) {
          .recognition-section {
            padding: 90px 20px;
          }

          .recognition-title {
            font-size: 32px;
          }

          .recognition-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .certificate-frame img {
            width: 360px;
          }

          .award-image {
            max-width: 280px;
          }
        }
      `}</style>
    </>
  );
}
