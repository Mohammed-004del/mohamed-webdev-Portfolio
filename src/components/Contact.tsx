import { Mail, Github, Linkedin, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Mohammed-004del/mohamed-webdev", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mohammed-mahmood-7327b0301/", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/mohammed.front.end/", label: "Facebook" },
    { icon: Mail, href: "mailto:mohammedmahmoodhamed004@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass rounded-2xl p-8 md:p-12 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-teal-light bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl hover:border-primary/50 transition-all duration-300 hover:scale-110 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <a
            href="mailto:mohammedmahmoodhamed004@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-lg text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
