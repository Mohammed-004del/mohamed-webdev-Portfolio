import profileImage from "./images/proffetional profile photo.png";

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - About Me Text */}
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-2">
                <p className="text-teal-light text-lg font-medium">Hello, I'm</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary-dark to-teal-light bg-clip-text text-transparent">
                  Mohamed Mahmood
                </h1>
                <p className="text-xl md:text-2xl text-teal-light">Front-end Developer</p>
              </div>

              <p className="text-foreground/90 text-lg leading-relaxed">
                specializing in building responsive websites and web
                applications. Experienced with HTML5, CSS3, JavaScript, and Tailwind CSS.
                I focus on writing clean code and creating seamless user experiences that
                bring ideas to life.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-lg text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 glass rounded-lg text-foreground font-semibold hover:border-primary transition-all duration-300 hover:scale-105"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right Side - Profile Image */}
            <div className="flex justify-center md:justify-end animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal rounded-full blur-3xl opacity-30 animate-glow-pulse"></div>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/30 glow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
