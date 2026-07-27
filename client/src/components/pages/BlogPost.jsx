import React from "react";
import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../../data/blogData";
import MarkdownRenderer from "../modules/MarkdownRenderer";
import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="blog-post-page animated-grid-background">
        <section className="hero-title-section">
          <div className="hero-title-container">
            <h1 className="hero-title">Post Not Found</h1>
            <p className="hero-subtitle">
              The note you are looking for does not exist.
            </p>
            <Link to="/notes" className="blog-back-link">
              ← Back to Notes
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="blog-post-page animated-grid-background">
      <section className="hero-title-section blog-post-hero">
        <div className="hero-title-container">
          <h1 className="hero-title blog-post-title">{post.title}</h1>
          {post.subtitle && <p className="hero-subtitle">{post.subtitle}</p>}
          <div className="blog-post-meta">
            <span>{post.readTime} read</span>
            <div className="blog-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-section blog-content-section">
        <div className="section-container">
          <article className="blog-prose">
            <MarkdownRenderer content={post.content} />
          </article>
          <div className="blog-post-actions">
            {post.pdfUrl && (
              <a
                href={post.pdfUrl}
                download="Langevin-Fokker-Planck-Notes.pdf"
                className="blog-action-button"
              >
                Download PDF
              </a>
            )}
            <Link
              to="/notes"
              className="blog-action-button blog-action-secondary"
            >
              ← Back to Notes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
