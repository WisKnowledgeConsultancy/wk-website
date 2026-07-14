import "../../styles/FeaturedBlog.css";
import blogs from "../../utils/getBlogs";
import { Link } from "react-router-dom";

export default function FeaturedBlog() {
  const featured = blogs[0];

  if (!featured) return null;

  return (
    <section className="featured-blog">

      <div className="featured-container">

        <div className="featured-image">

          <img
src={featured.coverImage}
alt={featured.title}
/>

        </div>

        <div className="featured-content">

          <span className="featured-category">
            {featured.category}
          </span>

          <h2>{featured.title}</h2>

          <p>

            {featured.metaDescription}

          </p>

          <div className="featured-meta">

            <span>{featured.date}</span>

            <span>{featured.readTime}</span>

          </div>

          <Link
  to={`/blogs/${featured.slug}`}
  className="featured-btn"
>
  Read Article →
</Link>

        </div>

      </div>

    </section>
  );
}