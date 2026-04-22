import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Designing LLM Pipelines for Job Post Extraction",
    excerpt: "Three architectures for turning unstructured job posts into clean, queryable data — and a framework for choosing between single-call, two-call, and hybrid regex approaches.",
    tag: "LLM",
    readTime: "6 min read",
    href: "/#/llm-extraction",
  },
  {
    title: "Scoring Automation Potential: How Much of a Job Can Actually Be Automated?",
    excerpt: "Most automation assessments produce one blended score per job. That number hides more than it reveals — here's a duty-level, time-weighted approach using four LLM agents.",
    tag: "Agentic AI",
    readTime: "5 min read",
    href: "/#/automation-potentials",
  },
  {
    title: "Workforce Planning: Closing the Gap with AI",
    excerpt: "Why the cheapest path through headcount change is impossible to find by hand — and what optimization changes.",
    tag: "AI",
    readTime: "6 min read",
    href: "/#/workforce-planning",
  },
  {
    title: "Attrition Prediction with AutoML",
    excerpt: "ML approaches addressing employee attrition — using automated machine learning to predict and understand workforce turnover.",
    tag: "Machine Learning",
    readTime: "5 min read",
    href: "/#/attrition-prediction",
  },
  {
    title: "Job Recommender Systems",
    excerpt: "An overview of different job recommendation architectures designed for online recruitment platforms.",
    tag: "NLP",
    href: "https://medium.com/@ruihao.qiu",
    readTime: "6 min read",
  },
  {
    title: "Introduce LLM to Labor Market Analysis",
    excerpt: "Applying large language models to job analysis tasks — bridging modern AI capabilities with labor market intelligence.",
    tag: "LLM",
    href: "https://medium.com/@ruihao.qiu",
    readTime: "7 min read",
  },
];

const notebooks = [
  {
    title: "Machine Learning in NLP",
    description: "Common use cases in my daily NLP projects.",
    href: "https://mlnlp.readthedocs.io/en/latest/index.html",
  },
  {
    title: "Recommender Systems in NLP",
    description: "Several recommender systems in NLP, specifically for online recruitment.",
    href: "https://recsys-nlp.readthedocs.io/en/latest/index.html",
  },
  {
    title: "Python Notes for Data Engineering",
    description: "Practical knowledge, concepts and tricks of Python in data engineering.",
    href: "https://pynotes.readthedocs.io/en/latest",
  },
  {
    title: "Algorithms and Use Cases",
    description: "Different algorithms and data structures with code examples.",
    href: "https://algonotes.readthedocs.io/en/latest/",
  },
];

export function ArticlesSection() {
  return (
    <section id="articles" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">Articles</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Thoughts on AI, data science, and building things that matter.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.href}
              {...(!article.href.startsWith("/#/") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center justify-between gap-6 border rounded-xl px-6 py-4 hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="min-w-0 flex-1">
                <div className="font-medium text-base leading-snug">{article.title}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{article.excerpt}</div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <Badge variant="secondary" className="text-xs">{article.tag}</Badge>
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </a>
          ))}
        </div>
        {/* Notebooks */}
        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-xl font-semibold mb-6 pb-2 border-b">Notebooks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {notebooks.map((nb) => (
              <a key={nb.title} href={nb.href} target="_blank" rel="noopener noreferrer"
                className="border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="font-medium text-sm mb-1">{nb.title}</div>
                <div className="text-xs text-muted-foreground">{nb.description}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
