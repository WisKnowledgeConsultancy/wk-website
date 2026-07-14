import BlogHero from "../components/blog/BlogHero";
import FeaturedBlog from "../components/blog/FeaturedBlog";
import BlogCard from "../components/blog/BlogCard";

import blogs from "../utils/getBlogs";

import "../styles/Blogs.css";

export default function Blogs() {

  const featured = blogs[0];

  const latestBlogs = blogs.slice(1);

  return (
    <>

      <BlogHero />

      <FeaturedBlog />

      <section className="latest-blogs">

        <div className="container">

          <div className="section-heading">

            <h2>Latest Articles</h2>

            <p>
              Practical guides, expert insights and resources to help you
              achieve your academic and career goals.
            </p>

          </div>

          <div className="blogs-grid">

            {latestBlogs.length > 0 ? (

              latestBlogs.map((blog) => (

                <BlogCard
                  key={blog.slug}
                  blog={blog}
                />

              ))

            ) : (

              <p className="coming-soon">

                More blogs are coming soon.

              </p>

            )}

          </div>

        </div>

      </section>

    </>
  );

}