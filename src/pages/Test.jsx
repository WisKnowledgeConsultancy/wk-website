import blogs from "../utils/getBlogs";

export default function Test() {
  return (
    <div style={{ padding: 50 }}>
      <pre>{JSON.stringify(blogs, null, 2)}</pre>
    </div>
  );
}