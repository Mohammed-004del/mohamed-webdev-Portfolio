import { Link } from "react-router-dom";
export default function Footer() {
  return <footer className="section-shell footer"><p>© {new Date().getFullYear()} Mohammed Mahmood</p><span>Thoughtfully built. Detail by detail.</span><Link to="/#home">Back to top ↑</Link></footer>;
}
