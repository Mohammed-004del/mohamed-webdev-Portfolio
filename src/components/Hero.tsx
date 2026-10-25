import { ArrowDown, ArrowUpRight } from "lucide-react";
import profileImage from "./images/portrait.webp";
const Hero = () => <section id="home" className="hero section-shell">
  <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> FRONTEND DEVELOPER · CO-FOUNDER AT ORVEN</p>
  <h1>Thoughtful code.<br /><span>Distinctive</span><br />digital experiences.</h1>
  <p className="hero-intro">I’m Mohammed Mahmood. I turn ideas into responsive websites and practical web interfaces, with care for the details that make them feel right.</p>
  <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDown size={17}/></a><a className="text-link" href="#contact">Let’s talk <ArrowUpRight size={18}/></a></div>
  <div className="hero-tech"><span>MY EVERYDAY TOOLKIT</span><p>React / TypeScript / Tailwind CSS</p></div></div>
  <div className="portrait-composition"><div className="portrait-topline"><span>THE PERSON BEHIND THE PIXELS</span><span>01 / ABOUT</span></div><div className="portrait-frame"><img src={profileImage} alt="Mohammed Mahmood" width="640" height="760"/><span className="portrait-code" aria-hidden="true">&lt;/&gt;</span></div><div className="portrait-caption"><div><strong>Mohammed Mahmood</strong><span>Frontend Developer</span></div><a href="#about" aria-label="More about Mohammed"><ArrowDown size={22}/></a></div></div>
</section>;
export default Hero;
