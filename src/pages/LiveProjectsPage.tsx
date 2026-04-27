import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react";

const projects = [
  {
    index: 1,
    title: "Data Processing Tools with NumPy",
    description: "Building practical extraction tools from unstructured text using trie structures, TF-IDF, and SVD methods.",
  },
  {
    index: 2,
    title: "Pandas for Feature Extraction",
    description: "Processing numerical, categorical, time-series, and text data into ML-ready features.",
  },
  {
    index: 3,
    title: "Data Visualization for Exploratory Analysis",
    description: "Creating interactive Matplotlib visualizations to identify data quality issues and build analytics dashboards.",
  },
  {
    index: 4,
    title: "Data Augmentation for ML",
    description: "Addressing data scarcity through augmentation tools using probability distributions and object-oriented programming.",
  },
];

const skills = [
  "Feature extraction with NumPy",
  "Text vectorization (TF-IDF, SVD)",
  "Feature engineering with pandas",
  "Interactive data visualization (Matplotlib)",
  "Data augmentation via OOP",
  "Statistical modeling with SciPy",
];

export function LiveProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Project</Badge>
            <Badge variant="outline">Manning Publications</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            LiveProjects — DS Pipeline with Python
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            A four-project series simulating real-world data science roles in recruiting and HR departments — covering end-to-end data pipelines for processing, extracting, and transforming various data types.
          </p>
          <Button asChild>
            <a href="https://www.manning.com/liveprojectseries/ds-pipeline-ser" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View on Manning
            </a>
          </Button>
        </div>

        <div className="space-y-12">

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.index} className="flex gap-4 border rounded-xl p-5">
                  <div className="text-primary font-semibold text-sm w-5 shrink-0">{project.index}</div>
                  <div>
                    <div className="font-medium mb-1">{project.title}</div>
                    <div className="text-sm text-muted-foreground">{project.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Skills Covered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Tags */}
          <section className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {["Python", "NLP", "Data Engineering", "NumPy", "Pandas", "Matplotlib"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
