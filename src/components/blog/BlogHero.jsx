import "../../styles/BlogHero.css";

const categories = [
  "All",
  "Study Abroad",
  "IELTS",
  "Spoken English",
  "Visa Guidance",
  "Scholarships",
  "Career Tips",
];

export default function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="blog-hero-container">

        <span className="blog-badge">
          📚 WisKnowledge Knowledge Center
        </span>

        <h1 className="blog-hero-title">
          Learn. Prepare. <span>Succeed.</span>
        </h1>

        <p className="blog-hero-description">
          Discover expert insights on IELTS, Study Abroad, Spoken English,
          Scholarships, and Career Growth. Our practical guides are designed
          to help students make informed decisions and achieve their academic
          goals with confidence.
        </p>

        {/* Search */}

        <div className="blog-search">

          <input
            type="text"
            placeholder="Search articles..."
          />

          <button>
            Search
          </button>

        </div>

        {/* Categories */}

        <div className="blog-categories">

          {categories.map((category) => (

            <button
              key={category}
              className="category-btn"
            >
              {category}
            </button>

          ))}

        </div>

      </div>
    </section>
  );
}