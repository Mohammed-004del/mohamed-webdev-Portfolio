import { Code2, Palette, Zap, Wind, Layers, GitBranch, Monitor } from "lucide-react";

const Skills = () => {
  const skills = [
    { 
      name: "HTML5", 
      icon: Code2, 
      level: "Advanced",
      color: "from-orange-500 to-red-500",
      bg: "bg-orange-500/10",
      iconColor: "text-orange-500"
    },
    { 
      name: "CSS3", 
      icon: Palette, 
      level: "Advanced",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    { 
      name: "JavaScript", 
      icon: Zap, 
      level: "Intermediate",
      color: "from-yellow-500 to-amber-500",
      bg: "bg-yellow-500/10",
      iconColor: "text-yellow-500"
    },
    { 
      name: "Tailwind CSS", 
      icon: Wind, 
      level: "Intermediate",
      color: "from-teal-500 to-cyan-500",
      bg: "bg-teal-500/10",
      iconColor: "text-teal-500"
    },
    { 
      name: "Git", 
      icon: GitBranch, 
      level: "Intermediate",
      color: "from-red-500 to-orange-500",
      bg: "bg-red-500/10",
      iconColor: "text-red-500"
    },
    { 
      name: "Responsive Design", 
      icon: Monitor, 
      level: "Advanced",
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-500/10",
      iconColor: "text-purple-500"
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-teal-light bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-foreground/70 text-lg">Technologies I master and work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.name}
                className="glass rounded-2xl p-6 group hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Icon Container */}
                  <div className={`${skill.bg} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-12 h-12 ${skill.iconColor}`} strokeWidth={1.5} />
                  </div>
                  
                  {/* Skill Name */}
                  <h3 className="text-xl font-bold text-foreground">
                    {skill.name}
                  </h3>
                  
                  {/* Level Badge */}
                  <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${skill.color} text-white text-sm font-medium shadow-lg`}>
                    {skill.level}
                  </div>
                  
                  {/* Decorative Line */}
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-muted to-transparent rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center glass rounded-xl p-6 animate-fade-in">
          <p className="text-foreground/80 text-sm md:text-base">
            🚀 Always learning and exploring new technologies to stay up-to-date with the latest trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;