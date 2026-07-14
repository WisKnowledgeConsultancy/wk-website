import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import blogs from "../utils/getBlogs";

import Breadcrumbs from "../components/blog/Breadcrumbs";

import "../styles/BlogPost.css";

export default function BlogPost() {

    const { slug } = useParams();
    console.log("URL Slug:", slug);
console.log("Blogs:", blogs);

    const blog = blogs.find(item => item.slug === slug);

    if (!blog) {

        return (
            <div className="blog-not-found">

                <h2>Article Not Found</h2>

                <p>The article you are looking for doesn't exist.</p>

            </div>
        );

    }

    return (

        <article className="blog-post">

            <div className="blog-container">

                <Breadcrumbs title={blog.title} />

                <div className="blog-header">

                    <span className="blog-category">

                        {blog.category}

                    </span>

                    <h1>{blog.title}</h1>

                    <p className="blog-description">

                        {blog.metaDescription}

                    </p>

                    <div className="blog-meta">

                        <span>{blog.author}</span>

                        <span>•</span>

                        <span>{blog.date}</span>

                        <span>•</span>

                        <span>{blog.readTime}</span>

                    </div>

                </div>

                {blog.coverImage && (

                    <img

                        src={blog.coverImage}

                        alt={blog.title}

                        className="blog-cover"

                    />

                )}

                <div className="blog-content">

                    <ReactMarkdown
                        rehypePlugins={[
                            rehypeSlug,
                            rehypeAutolinkHeadings
                        ]}
                    >
                        {blog.content}
                    </ReactMarkdown>

                </div>

            </div>

        </article>

    );

}