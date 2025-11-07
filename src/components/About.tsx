import { Code2, Palette, Zap, Database } from "lucide-react";

const skills = [
  { name: "HTML & CSS", icon: Code2, color: "text-orange-500" },
  { name: "JavaScript", icon: Zap, color: "text-yellow-500" },
  { name: "Python", icon: Code2, color: "text-blue-500" },
  { name: "Design", icon: Palette, color: "text-pink-500" },
  { name: "React", icon: Code2, color: "text-cyan-500" },
  { name: "Databases", icon: Database, color: "text-green-500" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm a passionate web developer with a keen eye for modern design and user experience. 
                I specialize in creating beautiful, responsive websites that not only look great but also 
                perform exceptionally well.
              </p>
              <p>
                With expertise in both frontend and backend technologies, I bring ideas to life through 
                clean code and innovative solutions. I'm constantly learning and adapting to new technologies 
                to deliver the best results for my clients.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-card p-6 rounded-2xl card-hover shadow-md"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className={`h-8 w-8 mb-3 ${skill.color}`} />
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
