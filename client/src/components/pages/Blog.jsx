import React from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../data/blogData";
import "./Blog.css";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const Blog = () => {
  const posts = getAllPosts();

  return (
    <div className="blog-page animated-grid-background">
      <section className="hero-title-section">
        <div className="hero-title-container">
          <h1 className="hero-title">📝 Blog</h1>
          <p className="hero-subtitle">Writing &amp; Notes</p>
        </div>
      </section>

      <section className="home-section blog-list-section section-animate">
        <div className="section-container">
          <h2>All Posts</h2>
          <p className="section-subtitle">
            Long-form notes, derivations, and things worth writing down.
          </p>
          <div className="blog-posts-list">
            {posts.map((post) => (
              <article key={post.slug} className="article-card blog-card">
                <p className="article-date">{formatDate(post.date)}</p>
                <h3 className="blog-card-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                {post.subtitle && (
                  <p className="blog-card-subtitle">{post.subtitle}</p>
                )}
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="blog-excerpt">{post.excerpt}</p>
                <p className="blog-meta">
                  {post.readTime} read ·{" "}
                  <Link to={`/blog/${post.slug}`}>Read more →</Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
