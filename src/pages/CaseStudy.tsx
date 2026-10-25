import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import NotFound from "./NotFound";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  const next = projects.find(item => item.slug !== slug);
  if (!project) return <NotFound />;
  return (
    <><a className="skip-link" href="#case-main">Skip to content</a><Navbar />
      <main id="case-main" className={`case-page case-${project.slug}`}>
        <section className="section-shell case-hero">
          <Link to="/#projects" className="back-link"><ArrowLeft size={16} /> Back to selected work</Link>
          <div className="case-title-row hero-enter"><div><p className="eyebrow">CASE STUDY {project.number} / {project.category}</p><h1>{project.name}<span>{project.line}</span></h1></div><span className="case-monogram" aria-hidden="true">{project.number}</span></div>
          <div className="case-intro-row hero-enter"><p>{project.summary}</p><a className="button button-primary" href={project.live} target="_blank" rel="noopener noreferrer">Visit live project <ArrowUpRight size={18} /></a></div>
          <figure className="case-cover hero-enter"><img src={project.cover} alt={project.coverAlt} width="1440" height="900" /><figcaption>THE INTERFACE / {project.name.toUpperCase()}</figcaption></figure>
          <div className="case-facts reveal"><div><span>FOCUS</span><p>{project.scope}</p></div><div><span>CONTRIBUTION</span><p>{project.contribution}</p></div><div><span>BUILT WITH</span><p>{project.stack.join(" · ")}</p></div></div>
        </section>
        <div className="section-shell case-body">
          <aside className="case-index"><span>IN THIS STUDY</span><a href="#overview">01 / Overview</a><a href="#approach">02 / The approach</a><a href="#interface">03 / The interface</a><a href="#reflection">04 / Reflection</a></aside>
          <div className="case-content">
            <section id="overview" className="case-section reveal"><p className="eyebrow">01 / THE CONTEXT</p><h2>{project.slug === 'spiky' ? 'Two sides of one routine.' : 'Discovery, with a clear direction.'}</h2><p className="case-lead">{project.context}</p><div className="challenge-solution"><div><h3>The interface challenge</h3><p>{project.challenge}</p></div><div><h3>The approach</h3><p>{project.solution}</p></div></div></section>
            <section id="approach" className="case-section reveal"><p className="eyebrow">02 / DESIGN & IMPLEMENTATION</p><h2>Decisions in the details.</h2><div className="decision-list">{project.decisions.map((decision, index) => <div key={decision.title}><span>0{index + 1}</span><div><h3>{decision.title}</h3><p>{decision.text}</p></div></div>)}</div></section>
            <section id="interface" className="case-section"><p className="eyebrow reveal">03 / A CLOSER LOOK</p>{project.gallery.map(item => <figure className="case-gallery-item reveal" key={item.label}><div className="gallery-image"><img src={item.image} alt={item.alt} loading="lazy" /></div><figcaption><span className="eyebrow">{item.label}</span><h3>{item.title}</h3><p>{item.text}</p></figcaption></figure>)}</section>
            <section id="reflection" className="case-section reveal"><p className="eyebrow">04 / THE RESULT & REFLECTION</p><h2>{project.slug === 'spiky' ? 'A workflow, brought together.' : 'A connected storefront experience.'}</h2><p className="case-lead">{project.outcome}</p><blockquote>{project.takeaway}</blockquote><div className="case-final-links"><a className="button button-primary" href={project.live} target="_blank" rel="noopener noreferrer">Explore the live project <ArrowUpRight size={18} /></a>{project.source && <a className="text-link" href={project.source} target="_blank" rel="noopener noreferrer"><Github size={17} /> View source</a>}</div></section>
          </div>
        </div>
        {next && <Link className="section-shell next-project reveal" to={`/work/${next.slug}`}><div><p className="eyebrow">KEEP EXPLORING / NEXT PROJECT</p><h2>{next.name}</h2></div><ArrowUpRight size={46} /></Link>}
        <Contact />
      </main><Footer /></>
  );
}
