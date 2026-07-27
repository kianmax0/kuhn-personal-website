import React from "react";
import { Link } from "react-router-dom";
import { getLatestPosts } from "../../data/blogData";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const BlogFeed = () => {
  const posts = getLatestPosts(1);

  return (
    <div className="blog-feed">
      {posts.map((post) => (
        <article key={post.slug} className="article-card blog-feed-card">
          <p className="article-date">{formatDate(post.date)}</p>
          <h3 className="blog-card-title">
            <Link to={`/notes/${post.slug}`}>{post.title}</Link>
          </h3>
          {post.subtitle && (
            <p className="blog-feed-subtitle">{post.subtitle}</p>
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
            <Link to={`/notes/${post.slug}`}>Read more →</Link>
          </p>
        </article>
      ))}
    </div>
  );
};

export default BlogFeed;
