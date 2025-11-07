import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce website with shopping cart, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Template",
    description: "A beautiful and responsive portfolio template for creative professionals.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity app to manage tasks, projects, and team collaboration.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tags: ["React", "Firebase", "Tailwind"],
    demo: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with forecasts and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    tags: ["Python", "API", "Data Viz"],
    demo: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="card-hover overflow-hidden border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-4">
                <Button variant="default" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
