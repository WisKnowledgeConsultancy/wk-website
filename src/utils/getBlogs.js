import fm from "front-matter";

// Markdown files
const markdownFiles = import.meta.glob("../blogs/**/index.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

// Cover images
const coverImages = import.meta.glob("../blogs/**/cover.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const blogs = Object.entries(markdownFiles).map(([path, content]) => {
  const { attributes, body } = fm(content);

  const folder = path.split("/").slice(-2, -1)[0];

  // Find matching cover image
  const imagePath = Object.keys(coverImages).find((img) =>
    img.includes(`/${folder}/cover`)
  );

  return {
    ...attributes,
    content: body,
    folder,
    coverImage: imagePath ? coverImages[imagePath] : null,
  };
});

// Latest first
blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

export default blogs;