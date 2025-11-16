import React from "react";
import "./Academic.css";

const Academic = () => {
  return (
    <div className="academic-page animated-grid-background">
      {/* Hero Title Section */}
      <section className="hero-title-section">
        <div className="hero-title-container">
          <h1 className="hero-title">🎓 Academic Portfolio</h1>
          <p className="hero-subtitle">
            Research Journey & Scholarly Achievements
          </p>
        </div>
      </section>

      {/* Publications Section */}
      <section
        className="publications-section home-section section-animate"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="section-container">
          <h2>📚 Publications</h2>
          <p className="section-subtitle">My published research work.</p>
          <div className="articles-list articles-spaced">
            <article className="article-card">
              <div className="publication-status">
                <span className="status-badge accepted">✅ Accepted</span>
              </div>
              <h3>Visualizing genetic information flow in Space and Time</h3>
              <p className="article-date">2025-11-11</p>
              <p className="article-journal">Science China Life Sciences</p>
              <p>
                This review synthesizes the historical development, underlying
                principles, and technical implementations of dynamic DNA and RNA
                imaging approaches, comparing their capabilities, limitations,
                and optimal applications.
              </p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(
                    "📄 Paper Status: Accepted for Publication\n\n🎉 This paper has been accepted by Science China Life Sciences and is currently in the publication process.\n\n📅 Acceptance Date: November 11, 2025\n\n⏳ Status: Awaiting final publication and DOI assignment\n\nThe full text will be available once the journal completes the publication process."
                  );
                }}
              >
                Read more →
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section
        className="publications-section home-section section-animate"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="section-container">
          <h2>🏆 Awards & Recognition</h2>
          <p className="section-subtitle">
            Honors and achievements in academics and research.
          </p>
          <div className="articles-list articles-spaced">
            <article className="article-card">
              <h3>🏛️ Zhejiang Provincial Government Scholarship</h3>
              <p className="article-date">2025</p>
              <p className="article-journal">Zhejiang Provincial Government</p>
              <p>
                Recognizing outstanding academic performance and comprehensive
                quality
              </p>
            </article>

            <article className="article-card">
              <h3>🏅 Westlake University Dean's Medal</h3>
              <p className="article-date">2025</p>
              <p className="article-journal">Westlake University</p>
              <p>Highest student honor medal personally awarded by the Dean</p>
            </article>

            <article className="article-card">
              <h3>🥈 iGEM Silver Medal</h3>
              <p className="article-date">2024</p>
              <p className="article-journal">
                International Genetically Engineered Machine Competition
              </p>
              <p>Silver medal in premier synthetic biology competition</p>
            </article>

            <article className="article-card">
              <h3>🎓 Westlake University Third-Class Scholarship</h3>
              <p className="article-date">2024</p>
              <p className="article-journal">Westlake University</p>
              <p>
                Academic excellence scholarship for outstanding academic
                performance
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Research Experience Section */}
      <section
        className="publications-section home-section section-animate"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="section-container">
          <h2>💼 Research Experience</h2>
          <p className="section-subtitle">
            My research journey and laboratory experience.
          </p>
          <div className="articles-list articles-spaced">
            <article className="article-card">
              <h3>🔬 Undergraduate Research Student</h3>
              <p className="article-date">2024 - Present</p>
              <p className="article-journal">
                Westlake University - Ma Qiufu Lab (Systems Physiology and
                Bioelectronic Medicine)
              </p>
              <p>
                Participating in research on systems physiology and acupuncture
                mechanisms under Prof. Ma Qiufu's guidance. Learning about pain
                pathways, neural-immune-target tissue interactions, and the
                scientific basis of traditional medicine through
                electroacupuncture studies.
              </p>
            </article>

            <article className="article-card">
              <h3>🔬 Undergraduate Research Student</h3>
              <p className="article-date">2023 - 2024</p>
              <p className="article-journal">
                Westlake University - Wan Yihan Lab (Single-molecule Dynamic
                Transcriptomics Systems Biology)
              </p>
              <p>
                Participated in cutting-edge single-cell and single-molecule
                live cell imaging research under Prof. Wan Yihan's supervision.
                Gained experience in dynamic nascent RNA imaging projects and
                explored transcription dynamics at the molecular level.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        className="publications-section home-section section-animate"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="section-container">
          <h2>🎓 Education</h2>
          <p className="section-subtitle">
            My academic background and educational journey.
          </p>
          <div className="articles-list articles-spaced">
            <article className="article-card">
              <h3>📖 Bachelor of Science</h3>
              <p className="article-date">2023 - Present</p>
              <p className="article-journal">
                Westlake University - School of Life Sciences
              </p>
              <p>Major: Biology</p>
            </article>

            <article className="article-card">
              <h3>🌍 Visiting Student</h3>
              <p className="article-date">2025</p>
              <p className="article-journal">
                UC Berkeley - Department of Molecular and Cell Biology (MCB)
              </p>
              <p>Visiting student program in Molecular and Cell Biology</p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academic;
