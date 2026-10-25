import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
const Navbar = () => {
 const [isOpen,setIsOpen]=useState(false);
 useEffect(()=>{const close=(event:KeyboardEvent)=>{if(event.key==='Escape')setIsOpen(false)};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[]);
 return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation"><a className="wordmark" href="#home" aria-label="Mohammed Mahmood home">m<span>.</span></a><div className="desktop-nav"><a href="#projects">Selected work</a><a href="#about">About</a><a href="#skills">Toolkit</a></div><a className="nav-contact" href="#contact">Let’s talk <ArrowUpRight size={16}/></a><button className="menu-toggle" aria-label={isOpen?'Close navigation':'Open navigation'} aria-expanded={isOpen} aria-controls="mobile-nav" onClick={()=>setIsOpen(!isOpen)}>{isOpen?<X/>:<Menu/>}</button>{isOpen&&<div id="mobile-nav" className="mobile-nav">{[['Selected work','#projects'],['About','#about'],['Toolkit','#skills'],['Contact','#contact']].map(([name,href])=><a key={href} href={href} onClick={()=>setIsOpen(false)}>{name}</a>)}</div>}</nav></header>
};
export default Navbar;
