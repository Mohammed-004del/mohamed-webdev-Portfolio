import { ExternalLink, Github } from "lucide-react";
import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import project4 from "./images/project4.png";
import project5 from "./images/project5.png";
import project6 from "./images/project6.png";
import project8 from "./images/project8.png";


const Projects = () => {
  const projects = [
    {
      title: "Adidas project",
      description: "A modern and responsive Adidas website clone showcasing product layouts, navigation, and styling using HTML and CSS. This project highlights clean design, interactive elements, and attention to detail, perfect for demonstrating front-end skills.",
      tags: ["HTML", "CSS"],
      image: project1,
      live: "https://mohammed-004del.github.io/mohamed-webdev-project-1/",
      code: "https://github.com/Mohammed-004del/mohamed-webdev-project-1/blob/main/index.html",
    },
    {
      title: "Iphone design",
      description: "A detailed iPhone product page clone built with HTML and CSS, featuring organized layouts, interactive elements, and modern design aesthetics. This project showcases clean coding practices and strong attention to visual presentation.",
      tags: ["HTML", "CSS", "JS"],
      image: project2,
      live: "https://mohammed-004del.github.io/mohamed-webdev-iphone-design/",
      code: "https://github.com/Mohammed-004del/mohamed-webdev-iphone-design/blob/main/index.html",
    },
    {
      title: "E-Learning Landing page",
      description: "A modern and responsive E-Learning landing page built with HTML and CSS, showcasing clear layouts, engaging sections, and visually appealing design. This project highlights attention to detail, organized content structure, and front-end development skills.",
      tags: ["HTML", "CSS"],
      image: project3,
      live: "https://mohammed-004del.github.io/mohamed-webdev-E-Learning-Landingpage/",
      code: "https://github.com/Mohammed-004del/mohamed-webdev-E-Learning-Landingpage/blob/main/index.html",
    },
    {
      title: "Equalizer App Landing page",
      description: "A modern landing page for a premium audio equalizer app for Android and iOS. Built with HTML5 and CSS3 featuring creative geometric shapes, bold typography, and smooth animations. Includes pricing display ($4/month), dual platform downloads, and fully responsive layout.",
      tags: ["HTML", "CSS"],
      image: project4,
      live: "https://mohammed-004del.github.io/mohamed-webdev-Equalizer_App/",
      code: "https://github.com/Mohammed-004del/mohamed-webdev-Equalizer_App/blob/main/index.html",
    },
    {
      title: "Photo Editor",
      description: "A browser-based image editor with real-time filters and adjustments. Built with HTML5, CSS3, and Canvas API featuring seven filters (Saturate, Contrast, Brightness, Sepia, Grayscale, Blur, Hue Rotate). Includes file upload, live preview, download option, and responsive design.",
      tags: ["HTML", "CSS", "JS"],
      image: project5,
      live: "https://mohammed-004del.github.io/mohamed-webdev-Photo_Editor/",
      code: "https://github.com/Mohammed-004del/mohamed-webdev-Photo_Editor/blob/main/index.html",
    },
    {
      title: "CRUD project",
      description: "A product management system with full CRUD operations for inventory control. Built with JavaScript, HTML5, and CSS3 featuring LocalStorage integration, dynamic search by title or category, and automatic price calculation with taxes and discounts. Supports bulk operations and individual product management with a clean dark interface.",
      tags: ["HTML", "CSS", "JS"],
      image: project6,
      live: " https://mohammed-004del.github.io/mohamed-webdev-CRUD_Project/",
      code: "https://github.com/Mohammed-004del/mohamed-webdev-CRUD_Project/blob/main/index.html",
    },
    {
      title: "Dashboard",
      description: "A modern admin dashboard for monitoring business metrics and inventory. Built with HTML5, CSS3, and Font Awesome featuring collapsible sidebar navigation, statistics cards for users/products/posts/earnings, and detailed product tables. Fully responsive with smooth hover effects and elegant dark purple theme.",
      tags: ["HTML", "CSS"],
      image: project8,
      live: "https://mohammed-004del.github.io/mohamed-webdev-Dashboard/",
      code: "https://github.com/Mohammed-004del/mohamed-webdev-Dashboard/blob/main/index.html",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-teal-light bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-foreground/70 text-lg">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-teal/20 rounded-xl mb-6 flex items-center justify-center group-hover:from-primary/30 group-hover:to-teal/30 transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Info */}
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-muted rounded-full text-teal-light border border-teal/30">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                  <a
                    href={project.code}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 border border-primary/30">
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-teal/10 hover:bg-teal/20 text-teal-light rounded-lg transition-all duration-300 border border-teal/30">
                    <ExternalLink size={18} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
