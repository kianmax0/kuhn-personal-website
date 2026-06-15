import React from "react";
import "./Academic.css";

const publications = [
  {
    date: "Nov 21, 2025",
    status: "published",
    statusText: "Published",
    title: "Visualizing genetic information flow in Space and Time",
    journal: "Science China Life Sciences",
    abstract:
      "This review synthesizes the historical development, underlying principles, and technical implementations of dynamic DNA and RNA imaging approaches, comparing their capabilities, limitations, and optimal applications.",
    doi: "https://doi.org/10.1007/s11427-025-3158-6",
  },
];

const awards = [
  {
    year: "2025",
    title: "🏛️ Zhejiang Provincial Government Scholarship",
    issuer: "Zhejiang Provincial Government",
    description:
      "Recognizing outstanding academic performance and comprehensive quality.",
  },
  {
    year: "2025",
    title: "🏅 Westlake University Dean's Medal",
    issuer: "Westlake University",
    description:
      "Highest student honor medal personally awarded by the Dean.",
  },
  {
    year: "2025",
    title: "💡 Westlake University Learning Innovation Award",
    issuer: "Westlake University",
    description:
      "Recognition for innovative learning approaches and academic excellence.",
  },
  {
    year: "2024",
    title: "🥈 iGEM Silver Medal",
    issuer: "International Genetically Engineered Machine Competition",
    description: "Silver medal in premier synthetic biology competition.",
  },
  {
    year: "2024",
    title: "💡 Westlake University Learning Innovation Award",
    issuer: "Westlake University",
    description:
      "Recognition for innovative learning approaches and academic excellence.",
  },
  {
    year: "2024",
    title: "🤝 Westlake University Social Responsibility Award",
    issuer: "Westlake University",
    description:
      "Awarded for outstanding contributions to social responsibility and community service.",
  },
  {
    year: "2024",
    title: "🎓 Westlake University Third-Class Scholarship",
    issuer: "Westlake University",
    description:
      "Academic excellence scholarship for outstanding academic performance.",
  },
];

const experiences = [
  {
    period: "2025 - Present",
    role: "🔬 Undergraduate Research Student",
    lab: "Westlake University - Liu Ding Lab (Social Neural Networks Laboratory)",
    description:
      "Conducting research in the Social Neural Networks Laboratory under Prof. Liu Ding. The lab studies the neural basis of social instinctive behaviors—how social behaviors are represented and processed in the brain—and the principles of neural network dynamics, including social homeostasis, touch in social behavior, and the mechanisms underlying social needs and loneliness.",
  },
  {
    period: "2024 - 2025",
    role: "🔬 Undergraduate Research Student",
    lab: "Westlake University - Ma Qiufu Lab (Systems Physiology and Bioelectronic Medicine)",
    description:
      "Worked on systems physiology and acupuncture mechanisms under Prof. Ma Qiufu. Learned about pain pathways, neural-immune-target tissue interactions, and the scientific basis of traditional medicine through electroacupuncture studies.",
  },
  {
    period: "2023 - 2024",
    role: "🔬 Undergraduate Research Student",
    lab: "Westlake University - Wan Yihan Lab (Single-molecule Dynamic Transcriptomics Systems Biology)",
    description:
      "Participated in cutting-edge single-cell and single-molecule live cell imaging research under Prof. Wan Yihan. Gained experience in dynamic nascent RNA imaging projects and explored transcription dynamics at the molecular level.",
  },
];

const education = [
  {
    period: "2023 - Present",
    degree: "📖 Bachelor of Science",
    school: "Westlake University - School of Life Sciences",
    description: "Major: Biology",
  },
  {
    period: "2025",
    degree: "🌍 Visiting Student",
    school: "UC Berkeley - Department of Molecular and Cell Biology (MCB)",
    description: "Visiting student program in Molecular and Cell Biology",
  },
];

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
          <ul className="awards-row-list">
            {publications.map((pub, index) => (
              <li className="award-row exp-row" key={`pub-${index}`}>
                <span className="award-row-year exp-row-period">{pub.date}</span>
                <div className="award-row-main">
                  <h3 className="award-row-title">
                    {pub.title}
                    {pub.status && (
                      <span className={`status-badge ${pub.status}`}>
                        ✅ {pub.statusText}
                      </span>
                    )}
                  </h3>
                  {pub.journal && (
                    <p className="award-row-issuer">{pub.journal}</p>
                  )}
                  {pub.abstract && (
                    <p className="award-row-desc">{pub.abstract}</p>
                  )}
                  {pub.doi && (
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="award-row-doi"
                    >
                      DOI: {pub.doi}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
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
          <ul className="awards-row-list">
            {awards.map((award, index) => (
              <li className="award-row" key={`award-${index}`}>
                <span className="award-row-year">{award.year}</span>
                <div className="award-row-main">
                  <h3 className="award-row-title">{award.title}</h3>
                  <p className="award-row-issuer">{award.issuer}</p>
                  {award.description && (
                    <p className="award-row-desc">{award.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
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
          <ul className="awards-row-list">
            {experiences.map((exp, index) => (
              <li className="award-row exp-row" key={`exp-${index}`}>
                <span className="award-row-year exp-row-period">
                  {exp.period}
                </span>
                <div className="award-row-main">
                  <h3 className="award-row-title">{exp.role}</h3>
                  <p className="award-row-issuer">{exp.lab}</p>
                  {exp.description && (
                    <p className="award-row-desc">{exp.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
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
          <ul className="awards-row-list">
            {education.map((edu, index) => (
              <li className="award-row exp-row" key={`edu-${index}`}>
                <span className="award-row-year exp-row-period">
                  {edu.period}
                </span>
                <div className="award-row-main">
                  <h3 className="award-row-title">{edu.degree}</h3>
                  <p className="award-row-issuer">{edu.school}</p>
                  {edu.description && (
                    <p className="award-row-desc">{edu.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Academic;
