import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, LayoutDashboard, Users, FlaskConical, Atom, BookOpen, TrendingUp, LucideIcon } from "lucide-react";

const projects: { title: string; category: string; description: string; tags: string[]; github: string; demo: string; icon: LucideIcon }[] = [
  {
    title: "SmartData / SmartPeople / SmartPlan",
    category: "Product",
    description:
      "Designed and deployed 20+ AI models — deep learning and custom LLM/Transformer-based — as the intelligence backbone of Smart Apps, covering data cleaning, normalization, extraction, and prediction across TB-scale global workforce data.",
    tags: ["LLM", "Transformers", "NLP", "MLOps", "AWS"],
    github: "https://github.com/RuihaoQiu",
    demo: "#",
    icon: LayoutDashboard,
  },
  {
    title: "AI for Jobs & Profiles",
    category: "Product",
    description:
      "AI-driven platform matching candidates to roles using deep understanding of profiles, skills, and job requirements. Published as a Python tutorial through Manning Publications covering four real-world NLP projects.",
    tags: ["NLP", "Embeddings", "RAG", "Recommender Systems"],
    github: "https://github.com/RuihaoQiu",
    demo: "https://www.manning.com/liveprojectseries/ds-pipeline-ser",
    icon: Users,
  },
  {
    title: "Labor Cost Prediction",
    category: "Project",
    description:
      "End-to-end deep learning model predicting and planning labor budgets for 5,000+ employees at Deutsche Telekom Croatia. Reduced labor planning costs by 50% with automated cross-departmental data acquisition and analysis.",
    tags: ["Deep Learning", "Forecasting", "Python", "Time Series"],
    github: "https://github.com/RuihaoQiu",
    demo: "#",
    icon: TrendingUp,
  },
  {
    title: "AutoFlow — Drug Discovery",
    category: "Product",
    description:
      "Software platform automating molecular screening, ADMET prediction, and hit-to-lead optimization using state-of-the-art ML models.",
    tags: ["Cheminformatics", "GNN", "RDKit", "Python"],
    github: "https://github.com/RuihaoQiu",
    demo: "#",
    icon: FlaskConical,
  },
  {
    title: "ML for Material Science",
    category: "Research",
    description:
      "ML models for classification and physical property prediction trained on 10,000+ materials. Simulated electronic structures across 50+ nanomaterials using first-principles optimization on distributed HPC clusters.",
    tags: ["Graph Neural Networks", "DFT", "PyTorch", "HPC"],
    github: "https://github.com/RuihaoQiu",
    demo: "https://scholar.google.com/citations?user=tMmlSnEAAAAJ&hl=en&oi=ao",
    icon: Atom,
  },
  {
    title: "Real-Time Water Consumption Simulation",
    category: "Project",
    description:
      "Maintenance forecasting for railway operators predicting water consumption based on passenger data, operating schedules, and weather patterns to reduce operational costs.",
    tags: ["Simulation", "Time Series", "Python", "IoT"],
    github: "https://github.com/RuihaoQiu",
    demo: "#",
    icon: BookOpen,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">Projects</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of AI and data science projects — from scientific research to production software.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <project.icon className="h-8 w-8 text-primary mb-2" />
                  <Badge variant="outline" className="text-xs">{project.category}</Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-between gap-4">
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-3.5 w-3.5" />
                      Code
                    </a>
                  </Button>
                  {project.demo !== "#" && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
