import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-shell work-section">
      <div className="section-heading reveal">
        <div><p className="eyebrow">01 / SELECTED WORK</p><h2>Different worlds.<br /><span>The same care.</span></h2></div>
        <p>A closer look at the thinking,<br />the interfaces, and the details.</p>
      </div>
      <div className="projects-grid">
        {projects.map(project => (
          <article key={project.slug} className={`project project-${project.slug} reveal`}>
            <Link className="project-visual" to={`/work/${project.slug}`} aria-label={`Read ${project.name} case study`}>
              <div className="project-image-wrap"><img src={project.cover} alt={project.coverAlt} loading="lazy" width="1440" height="900" /></div>
              <span className="visual-label">{project.category}</span><span className="project-open"><ArrowUpRight size={24} /></span>
            </Link>
            <div className="project-meta"><span>{project.number} / {project.category}</span><span>SELECTED PROJECT</span></div>
            <h3>{project.name}<span>{project.line}</span></h3>
            <p>{project.summary}</p>
            <div className="tags">{project.stack.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}</div>
            <div className="project-links">
              <Link className="project-link" to={`/work/${project.slug}`}>Read case study <ArrowUpRight size={18} /></Link>
              <a className="live-link" href={project.live} target="_blank" rel="noopener noreferrer">Visit live project <ArrowUpRight size={16} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
