import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => <><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main"><Hero/><div className="discipline-strip" aria-label="Focus areas"><span>RESPONSIVE WEBSITES</span><span aria-hidden="true">✳</span><span>THOUGHTFUL INTERFACES</span><span aria-hidden="true">✳</span><span>WEB APPLICATIONS</span><span aria-hidden="true">✳</span><span>FRONTEND DEVELOPMENT</span></div><Projects/><Skills/><Contact/></main><Footer/></>;
export default Index;
