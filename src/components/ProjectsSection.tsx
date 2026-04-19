import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, LayoutDashboard, Users, FlaskConical, Atom, BookOpen, TrendingUp, Calculator, LucideIcon } from "lucide-react";

const projects: { title: string; category: string; description: string; tags: string[]; github: string; demo: string; icon: LucideIcon }[] = [
  {
    title: "SmartData / SmartPeople / SmartPlan",
    category: "Product",
    description:
      "Search and recommender systems for labor market intelligence, and agentic AI workflows for workforce planning and organizational restructuring at scale.",
    tags: ["LLM", "Agentic AI", "Recommender Systems"],
    github: "",
    demo: "/#/smart-apps",
    icon: LayoutDashboard,
  },
  {
    title: "AI for Jobs & Profiles",
    category: "Product",
    description:
      "Designed and deployed 20+ AI models — deep learning and custom LLM-based — as the intelligence backbone of Smart Apps, covering data cleaning, normalization, extraction, and prediction across TB-scale global workforce data.",
    tags: ["Deep Learning", "LLM", "NLP"],
    github: "",
    demo: "/#/ai-jobs",
    icon: Users,
  },
  {
    title: "LiveProjects — Manning Publications",
    category: "Project",
    description:
      "A Python tutorial published by Manning covering four real-world NLP projects — from data pipelines to text classification and information extraction.",
    tags: ["Python", "NLP", "Tutorial"],
    github: "",
    demo: "https://www.manning.com/liveprojectseries/ds-pipeline-ser",
    icon: BookOpen,
  },
  {
    title: "Labor Cost Prediction",
    category: "Project",
    description:
      "End-to-end deep learning model predicting and planning labor budgets for 5,000+ employees. Reduced labor planning costs by 50% with automated cross-departmental data acquisition and analysis.",
    tags: ["Deep Learning", "Forecasting", "Time Series"],
    github: "",
    demo: "#",
    icon: TrendingUp,
  },
  {
    title: "Auto Report Agents",
    category: "Research",
    description:
      "Conversational AI agent for generating and reviewing accounting reports — upload Excel data, generate Word reports from templates, and ask questions about results.",
    tags: ["Agentic AI", "LLM", "Python"],
    github: "https://github.com/RuihaoQiu/auto-report-agents",
    demo: "#",
    icon: Calculator,
  },
  {
    title: "FiberX",
    category: "Research",
    description:
      "GUI application for scientific researchers to analyze optical fiber sensor spectrum data in real-time — supports multi-sensor types, spectral range selection, and live data acquisition.",
    tags: ["Python", "Spectrum Analysis", "GUI"],
    github: "https://github.com/RuihaoQiu/FiberX",
    demo: "#",
    icon: FlaskConical,
  },
  {
    title: "ML for Material Science",
    category: "Research",
    description:
      "ML models for classification and physical property prediction trained on 10,000+ materials. Simulated electronic structures across 50+ nanomaterials using first-principles optimization on distributed HPC clusters.",
    tags: ["Graph Neural Networks", "DFT", "PyTorch"],
    github: "https://github.com/RuihaoQiu/Machine-learning-on-materials-research",
    demo: "#",
    icon: Atom,
  },
  {
    title: "Real-Time Water Consumption Simulation",
    category: "Project",
    description:
      "Maintenance forecasting for railway operators predicting water consumption based on passenger data, operating schedules, and weather patterns to reduce operational costs.",
    tags: ["Simulation", "Time Series", "IoT"],
    github: "",
    demo: "#",
    icon: BookOpen,
  },
];

const catalogues: { label: string; category: string }[] = [
  { label: "Products at Scale", category: "Product" },
  { label: "Products for Labs & Startups", category: "Research" },
  { label: "Projects", category: "Project" },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const link = project.demo !== "#" ? project.demo : project.github;
  return (
    <Card className="relative flex flex-col transition-all hover:shadow-md hover:border-primary cursor-pointer">
      {link && (
        <a
          href={link}
          {...(!link.startsWith("/#/") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="absolute inset-0 z-0"
          aria-label={project.title}
        />
      )}
      <CardHeader>
        <project.icon className="h-8 w-8 text-primary mb-2" />
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
        <div className="relative z-10 flex gap-2">
          {project.github && (
            <Button variant="outline" size="sm" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-3.5 w-3.5" />
                Code
              </a>
            </Button>
          )}
          {project.demo !== "#" && (
            <Button size="sm" asChild>
              {project.demo.startsWith("/#/") ? (
                <a href={project.demo}>Details</a>
              ) : (
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  Demo
                </a>
              )}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">Products & Projects</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            A selection of AI and data science products and projects — from scientific research to large-scale production.
          </p>
        </div>
        <div className="max-w-6xl mx-auto space-y-16">
          {catalogues.map(({ label, category }) => {
            const group = projects.filter((p) => p.category === category);
            if (!group.length) return null;
            return (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-6 pb-2 border-b">{label}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
