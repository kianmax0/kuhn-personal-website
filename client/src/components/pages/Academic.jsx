import React from "react";
import "./Academic.css";

const publications = [
  {
    date: "2025",
    status: "published",
    statusText: "Published",
    title: "Visualizing genetic information flow in space and time",
    journal: "Science China Life Sciences, 68, 3450–3465",
    description:
      "Chen, K.*, Zhao, K.*, & Wan, Y. (2025). Co-first author; Review.",
    doi: "https://doi.org/10.1007/s11427-025-3158-6",
  },
];

const awards = [
  {
    year: "2025",
    title: "🏅 Westlake University Dean's Award",
    issuer: "Westlake University",
    description:
      "One of the university's highest student honors.",
  },
  {
    year: "2025",
    title: "🏛️ Zhejiang Provincial Government Scholarship",
    issuer: "Zhejiang Provincial Government",
    description:
      "Recognizing outstanding academic performance and comprehensive quality.",
  },
  {
    year: "2025",
    title: "🎓 Westlake University Outstanding Bachelor's Student",
    issuer: "Westlake University",
    description: "Recognition for outstanding undergraduate achievement.",
  },
  {
    year: "2024 – 2025",
    title: "🗣️ Student Ambassador, Westlake University",
    issuer: "Westlake University",
    description: "Representing Westlake University as a student ambassador.",
  },
  {
    year: "2024",
    title: "🥈 iGEM International Silver Medal",
    issuer: "International Genetically Engineered Machine Competition",
    description: "Silver medal in the premier synthetic biology competition.",
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
    period: "July 2026 – Present",
    role: "🔬 Research Intern",
    lab: "Yusi Chen Lab, Institute of Neuroscience, CAS — Shanghai, China",
    highlights: [
      "Developing an RNN-based social agent to investigate how internal states shape social interaction and adaptive behavior.",
      "Analyzing hidden-unit dynamics and comparing emergent representations with behavioral and medial preoptic nucleus (MPN) population signatures from mouse isolation–reunion experiments.",
    ],
  },
  {
    period: "Jan. 2026 – Present",
    role: "🔬 Undergraduate Researcher",
    lab: "Ding Liu Lab, Westlake University — Hangzhou, China",
    highlights: [
      "Built a behavioral-quantification pipeline combining SLEAP pose estimation and semantic segmentation to parse social and non-social epochs across longitudinal isolation–reunion sessions.",
      "Characterized isolation-, reunion-, social-activated, and social-inhibited MPN populations and their experience-dependent changes in calcium activity and response gain.",
      "Applied CEBRA and recurrent switching linear dynamical systems (rSLDS) to decode social state and identify latent high- and low-need dynamics, including time-shift controls.",
    ],
  },
  {
    period: "Sept. 2024 – Aug. 2025",
    role: "🔬 Undergraduate Researcher",
    lab: "Qiufu Ma Lab, Westlake University — Hangzhou, China",
    highlights: [
      "Mapped auricular projections to the jugular-nodose and trigeminal ganglia using Fluoro-Gold tracing, CUBIC tissue clearing, light-sheet microscopy, and Cre-driver lines.",
      "Investigated vagal pathways underlying the anti-inflammatory effects of concha electroacupuncture in endotoxemic mice, using c-Fos immunohistochemistry to assess central relay recruitment.",
    ],
  },
  {
    period: "Sept. 2023 – Aug. 2024",
    role: "🔬 Undergraduate Intern",
    lab: "Yihan Wan Lab, Westlake University — Hangzhou, China",
    highlights: [
      "Trained in molecular biology and high-throughput sequencing analysis; co-authored a review on spatiotemporal visualization of genetic information flow.",
    ],
  },
];

const projects = [
  {
    period: "Feb. 2024 – Nov. 2024",
    role: "🧬 Core Team Member",
    lab: "iGEM 2024 – Engineered Bacterial Cancer Therapy — Hangzhou, China",
    highlights: [
      "Contributed to a tumor-targeting Salmonella platform and modeled bacterial diffusion and apoptosis dynamics in the tumor microenvironment; the team received an iGEM Silver Medal.",
    ],
  },
];

const education = [
  {
    period: "Sept. 2023 – June 2027 (Expected)",
    degree: "📖 B.S. in Life Sciences",
    school: "Westlake University — Hangzhou, China",
    description: "GPA: 3.990/4.30",
    highlights: [
      "Selected Quantitative Coursework: Machine Learning, Probability and Mathematical Statistics, Linear Algebra, Calculus, Biostatistics, and Computer Fundamentals and Programming.",
      "Early Admission Program: Admitted to Westlake University during high school as one of 90 students selected nationwide.",
    ],
  },
  {
    period: "Aug. 2025 – Dec. 2025",
    degree: "🌍 Visiting Student",
    school:
      "University of California, Berkeley — Department of Molecular and Cell Biology",
    description: "GPA: 3.9/4.0",
    highlights: [],
  },
];

const skills = [
  {
    title: "Modeling and Data Analysis",
    description:
      "Recurrent neural networks, Bayesian and mixed-effects models, state-space models, rSLDS, CEBRA, representation learning, computer vision, and calcium-imaging analysis.",
  },
  {
    title: "Scientific Computing",
    description:
      "Python, PyTorch, JAX, PyMC, SciPy, scikit-learn, MATLAB, Linux/Bash, Git, Docker, HPC/Slurm.",
  },
  {
    title: "Experimental Methods",
    description:
      "Neural tracing, c-Fos immunohistochemistry, tissue clearing, light-sheet/confocal microscopy, and calcium imaging.",
  },
  {
    title: "Languages",
    description: "Mandarin Chinese (native); English (IELTS 7.0).",
  },
];

const ExperienceList = ({ items }) => (
  <ul className="awards-row-list">
    {items.map((exp, index) => (
      <li className="award-row exp-row" key={`item-${index}`}>
        <span className="award-row-year exp-row-period">{exp.period}</span>
        <div className="award-row-main">
          <h3 className="award-row-title">{exp.role}</h3>
          <p className="award-row-issuer">{exp.lab}</p>
          {exp.highlights?.length > 0 && (
            <ul className="award-row-highlights">
              {exp.highlights.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </div>
      </li>
    ))}
  </ul>
);

const Academic = () => {
  return (
    <div className="academic-page animated-grid-background">
      <section className="hero-title-section">
        <div className="hero-title-container">
          <h1 className="hero-title">🎓 Academic Portfolio</h1>
          <p className="hero-subtitle">
            Computational &amp; Systems Neuroscience | Neural Population
            Dynamics | NeuroAI
          </p>
        </div>
      </section>

      <section
        className="publications-section home-section section-animate"
        style={{ animationDelay: "0.15s" }}
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
                  {edu.highlights?.length > 0 && (
                    <ul className="award-row-highlights">
                      {edu.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="publications-section home-section section-animate"
        style={{ animationDelay: "0.3s" }}
      >
        <div className="section-container">
          <h2>💼 Research Experience</h2>
          <p className="section-subtitle">
            Laboratory experience and ongoing research.
          </p>
          <ExperienceList items={experiences} />
        </div>
      </section>

      <section
        className="publications-section home-section section-animate"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="section-container">
          <h2>🧬 Selected Project</h2>
          <p className="section-subtitle">Team research and competition work.</p>
          <ExperienceList items={projects} />
        </div>
      </section>

      <section
        className="publications-section home-section section-animate"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="section-container">
          <h2>📚 Publications</h2>
          <p className="section-subtitle">Published research work.</p>
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
                  {pub.description && (
                    <p className="award-row-desc">{pub.description}</p>
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

      <section
        className="publications-section home-section section-animate"
        style={{ animationDelay: "0.65s" }}
      >
        <div className="section-container">
          <h2>🏆 Honors and Awards</h2>
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

      <section
        className="publications-section home-section section-animate"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="section-container">
          <h2>🛠️ Skills</h2>
          <p className="section-subtitle">
            Modeling, computing, experimental methods, and languages.
          </p>
          <ul className="awards-row-list">
            {skills.map((skill, index) => (
              <li className="award-row" key={`skill-${index}`}>
                <span className="award-row-year exp-row-period">—</span>
                <div className="award-row-main">
                  <h3 className="award-row-title">{skill.title}</h3>
                  <p className="award-row-desc">{skill.description}</p>
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
