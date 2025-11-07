import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center gap-8 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Alamin Isah Bala"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-background shadow-2xl"
            />
          </div>

          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              Hi, I'm <span className="gradient-text">Alamin Isah Bala</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              A creative web developer passionate about modern design and building exceptional digital experiences
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-gradient">
              See My Work
            </a>
            <a
              href="#contact"
              className="py-3 px-8 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300"
            >
              Hire Me
            </a>
          </div>

          <a
            href="#about"
            className="mt-8 animate-bounce text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-8 w-8" />
          </a>
        </div>
      </div>
    </section>
  );
};
