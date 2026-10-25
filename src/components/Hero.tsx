import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";
import profileImage from "./images/portrait.webp";

export default function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow hero-enter"><span className="status-dot" /> MOHAMMED MAHMOOD / FRONTEND DEVELOPER</p>
        <h1 className="hero-enter">A little logic.<br />A lot of <em>care.</em><br /><span>Made for the web.</span></h1>
        <p className="hero-intro hero-enter">I build responsive websites and thoughtful web interfaces. Co-founder at ORVEN, with an eye for the details and a practical approach to bringing ideas to the screen.</p>
        <div className="hero-actions hero-enter"><a className="button button-primary" href="#projects">Discover my work <ArrowDown size={17} /></a><a className="text-link" href="#contact">Start a conversation <ArrowUpRight size={18} /></a></div>
        <div className="hero-tech hero-enter"><span>THE CRAFT, EVERY DAY</span><p>React <i /> TypeScript <i /> Tailwind CSS</p></div>
      </div>
      <div className="portrait-stage hero-enter">
        <span className="portrait-orbit" aria-hidden="true" />
        <span className="portrait-outline" aria-hidden="true" />
        <div className="portrait-arch"><img src={profileImage} alt="Mohammed Mahmood, frontend developer" width="640" height="760" /></div>
        <div className="portrait-stamp" aria-hidden="true"><Asterisk /><span>IDEAS INTO<br />INTERFACES</span></div>
        <span className="portrait-side-note">BASED IN EGYPT · BUILDING FOR THE WEB</span>
        <div className="portrait-name"><span>THE PERSON BEHIND THE WORK</span><strong>Mohammed<br /><em>Mahmood.</em></strong></div>
        <a href="#about" className="portrait-more" aria-label="More about Mohammed"><ArrowDown size={20} /></a>
      </div>
    </section>
  );
}
