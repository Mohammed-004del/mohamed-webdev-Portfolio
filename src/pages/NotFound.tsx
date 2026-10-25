import { Link } from "react-router-dom";
export default function NotFound() {
  return <main className="not-found section-shell"><p className="eyebrow">A SMALL DETOUR</p><h1>Nothing here.<br /><em>Plenty to explore.</em></h1><Link className="button button-primary" to="/">Back to the portfolio ↗</Link></main>;
}
