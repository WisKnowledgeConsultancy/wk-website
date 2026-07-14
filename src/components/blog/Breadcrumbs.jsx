import { Link } from "react-router-dom";
import "../../styles/Breadcrumbs.css";

export default function Breadcrumbs({ title }) {
  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>

      <span>/</span>

      <Link to="/blogs">Knowledge Center</Link>

      <span>/</span>

      <span className="current">{title}</span>
    </nav>
  );
}