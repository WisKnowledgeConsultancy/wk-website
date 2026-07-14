import { Link } from "react-router-dom";
import "../../styles/BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <article className="blog-card">

      <Link
        to={`/blogs/${blog.slug}`}
        className="blog-card-image-wrapper"
      >
        <img
          src={blog.coverImage}
          alt={blog.title}
          className="blog-card-image"
        />
      </Link>

      <div className="blog-card-content">

        <span className="blog-card-category">
          {blog.category}
        </span>

        <h3 className="blog-card-title">

          <Link to={`/blogs/${blog.slug}`}>
            {blog.title}
          </Link>

        </h3>

        <p className="blog-card-description">
          {blog.metaDescription}
        </p>

        <div className="blog-card-footer">

          <div className="blog-card-meta">

            <span>{blog.date}</span>

            <span>•</span>

            <span>{blog.readTime}</span>

          </div>

          <Link
            to={`/blogs/${blog.slug}`}
            className="blog-read-more"
          >
            Read Article →
          </Link>

        </div>

      </div>

    </article>
  );
}