import React from "react";
import GithubIcon from "../assets/GithubIcon";
import { Link } from "react-router-dom";
import MomentsFeed from "../modules/MomentsFeed";
import BlogFeed from "../modules/BlogFeed";
import "./Home.css";

const articles = [
  {
    id: 1,
    title: "Visualizing genetic information flow in Space and Time",
    date: "Nov 21, 2025",
    journal: "Science China Life Sciences",
    abstract:
      "This review synthesizes the historical development, underlying principles, and technicalimplementations of dynamic DNA and RNA imaging approaches, comparing their capabilities, limitations, and optimal applications.",
    status: "published",
    statusText: "Published",
    doi: "https://doi.org/10.1007/s11427-025-3158-6",
  },
];

const Home = () => {
  return (
    <div className="home-container animated-grid-background">
      {/* ===== Greeting Section ===== */}
      <section className="hero-dark-animated">
        <div className="hero-inner">
          <div style={{ animation: "fadeInDown 0.8s ease-out" }}>
            <h1 className="hero-title">Hi, I'm Kuhn 👋</h1>
          </div>
          <p className="hero-tagline">A Neuroscience Undergraduate</p>
          <p className="hero-description">
            Welcome to my digital space. <br></br>Explore my work, thoughts, and
            creative moments.
          </p>
          <div className="hero-cta">
            <a href="#about" className="cta-button cta-primary">
              Learn About Me
            </a>
            <a href="#contact" className="cta-button cta-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* ===== About Me Section ===== */}
      <section id="about" className="home-section about-section">
        <div className="section-container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-block">
              <h3>1. My "Official" Title 📜</h3>
              <p>
                On paper? I'm a third-year Bioscience student at Westlake
                University.
              </p>
              <p>
                But my real obsession? I&apos;m studying social need—what the
                brain treats as socially relevant—and how that information is
                encoded in the medial preoptic nucleus (MPN), a hypothalamic hub
                that helps orchestrate social and motivational behavior.
              </p>
              <p>
                In short: I want to know how need-like social signals get
                represented in neural activity—and what that tells us about how
                brains navigate belonging, conflict, and everything in between.
              </p>
            </div>
            <div className="about-block">
              <h3>2. My Brain's Other Tabs 🖥️</h3>
              <p>
                My brain refuses to stick to one major. It currently has way too
                many tabs open...
              </p>
              <p>
                One minute it's Neuroscience ("How does the brain decide what's
                for dinner?"), the next it's Computer Science ("Can I code a bot
                to attend this lecture for me?"), and occasionally it wanders
                into Finance ("How to... well, you get the idea 😉").
              </p>
            </div>
            <div className="about-block">
              <h3>3. How I Recharge 🔋</h3>
              <ul className="interests-list">
                <li>
                  Staging epic mental battles over a Go board ⚫⚪️ (or at
                  least, they're epic in my head).
                </li>
                <li>Learning all kinds of knowledges in books.</li>
                <li>
                  Exploring new digital worlds (and probably shouting at my
                  screen) while playing games 🎮
                </li>
                <li>
                  Finally remembering to move my body with some sports —whether
                  it's badminton, basketball, some cardio, skiing, or just...
                  existing. Anything counts!
                </li>
              </ul>
            </div>
            <div className="about-block">
              <h3>4. The Plot Twist? 🎬</h3>
              <p>
                So, what's the grand plan? Will I be a brain-researching
                programmer? A Go-playing financial analyst? Honestly, your guess
                is as good as mine. I’m still exploring the plot. 🤷
              </p>
              <p className="plot-twist-note">Consider this just the trailer.</p>
            </div>
          </div>
          <Link to="/about" className="section-link">
            View Full Profile →
          </Link>
        </div>
      </section>

      {/* ===== Publications Section ===== */}
      <section id="publications" className="home-section publications-section">
        <div className="section-container">
          <h2>Publications</h2>
          <p className="section-subtitle">
            My thoughts and insights on various topics.
          </p>
          <div className="articles-list articles-spaced">
            {articles.map((article) => (
              <article key={article.id} className="article-card">
                <div className="publication-status">
                  <span className={`status-badge ${article.status}`}>
                    ✅ {article.statusText}
                  </span>
                </div>
                <h3>{article.title}</h3>
                <p className="article-date">{article.date}</p>
                {article.journal && (
                  <p className="article-journal">{article.journal}</p>
                )}
                <p>{article.abstract}</p>
                {article.doi && (
                  <a
                    href={article.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-doi-link"
                    style={{
                      color: "#166534",
                      fontWeight: 600,
                      wordBreak: "break-all",
                    }}
                  >
                    DOI: {article.doi}
                  </a>
                )}
              </article>
            ))}
          </div>
          <Link to="/academic" className="section-link">
            View Academic & Professional →
          </Link>
          <Link to="/resources" className="section-link">
            Learning Resources →
          </Link>
        </div>
      </section>

      {/* ===== Blog Section ===== */}
      <section className="home-section blog-section">
        <div className="section-container">
          <h2>Blog</h2>
          <p className="section-subtitle">
            Long-form notes and derivations.
          </p>
          <BlogFeed />
          <Link to="/blog" className="section-link">
            View All Posts →
          </Link>
        </div>
      </section>

      {/* ===== Moments Feed Section (social-style) ===== */}
      <section className="home-section moments-section">
        <div className="section-container">
          <h2>Moments</h2>
          <p className="section-subtitle">
            My thoughts, discoveries, and the occasional weirdness.
          </p>
          <MomentsFeed />
          <Link to="/moments" className="section-link">
            View All Moments →
          </Link>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section id="contact" className="home-section contact-section">
        <div className="section-container">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to reach out for inquiries or just to say hello!
          </p>
          <div className="contact-block">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">📧 Email:</span>
                <ul className="email-list">
                  <li>
                    <a
                      href="mailto:zhaokun@westlake.edu.cn"
                      className="contact-link"
                    >
                      zhaokun@westlake.edu.cn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:kuhnkuhn@berkeley.edu"
                      className="contact-link"
                    >
                      kuhnkuhn@berkeley.edu
                    </a>
                  </li>
                </ul>
              </div>
              <div className="contact-item">
                <span className="contact-label">💬 WeChat:</span>
                <span className="contact-value">Dogedogedogecoin</span>
              </div>
            </div>

            <div className="social-links">
              <h3>Find me elsewhere</h3>
              <div className="social-buttons">
                <a
                  href="https://steamcommunity.com/profiles/76561198993237339/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button steam-button"
                >
                  <span className="social-icon">🎮</span>
                  <span>Steam</span>
                </a>
                <a
                  href="https://github.com/kianmax0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button github-button"
                  style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                  <span
                    className="social-icon"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <GithubIcon size={22} color="#181717" />
                  </span>
                  <span style={{ fontWeight: 600 }}>GitHub</span>
                </a>
                <a
                  href="https://scholar.google.com/citations?user=MFsbreQAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button scholar-button"
                  style={{ display: "flex", alignItems: "center", gap: 6 }}
                >
                  <span className="social-icon" style={{ fontSize: 20 }}>
                    🎓
                  </span>
                  <span style={{ fontWeight: 600 }}>Google Scholar</span>
                </a>
                <a
                  href="https://space.bilibili.com/256800766?spm_id_from=333.1007.0.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button bilibili-button"
                >
                  <span className="social-icon">📺</span>
                  <span>Bilibili</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
