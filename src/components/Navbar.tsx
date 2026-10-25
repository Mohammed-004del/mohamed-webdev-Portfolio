import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => { setIsOpen(false); }, [location]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setIsOpen(false); menuButton.current?.focus({ preventScroll: true }); } };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  const links = [["Selected work", "/#projects"], ["About", "/#about"], ["Toolkit", "/#skills"]];
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation">
    <Link className="wordmark" to="/#home" aria-label="Mohammed Mahmood home">m<span>.</span><small>MOHAMMED<br />MAHMOOD</small></Link>
    <div className="desktop-nav">{links.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}</div>
    <Link className="nav-contact" to="/#contact">Let’s talk <ArrowUpRight size={16} /></Link>
    <button ref={menuButton} className="menu-toggle" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="mobile-nav" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
    <div id="mobile-nav" className={`mobile-nav${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>{[...links, ["Contact", "/#contact"]].map(([label, to]) => <Link key={to} to={to} tabIndex={isOpen ? 0 : -1} onClick={() => { setIsOpen(false); menuButton.current?.focus({ preventScroll: true }); }}>{label}</Link>)}</div>
  </nav></header>;
}
