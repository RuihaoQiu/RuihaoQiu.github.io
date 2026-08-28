import { useState } from "react";
import { Badge } from "./ui/badge";
import { ArrowRight, ChevronDown } from "lucide-react";

const INITIAL_ARTICLES_COUNT = 4;

const articles = [
  {
    title: "When Execution Is Cheap, Judgment Is the Moat",
    excerpt: "AI makes producing answers free. What it can't replicate is knowing which ones to throw away — and betting your reputation on that call.",
    tag: "Career",
    readTime: "8 min read",
    href: "/#/ai-personal-evolution",
  },
  {
    title: "From Tweaking Rules to Building Agents: It's All the Same Thing",
    excerpt: "Rules, ML, agents — every automated optimization is the same loop: read context, change code, check results, repeat. The update target is just a detail.",
    tag: "Agentic AI",
    readTime: "6 min read",
    href: "/#/auto-engineering",
  },
  {
    title: "Why LLM Evaluation Is Hard (And What to Do About It)",
    excerpt: "\"Looks good\" is not a metric. A practical guide to evaluating probabilistic systems — pick the right scorer per field, test the judge, and version your results.",
    tag: "Evaluation",
    readTime: "6 min read",
    href: "/#/llm-evals",
  },
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


export function ArticlesSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleArticles = expanded ? articles : articles.slice(0, INITIAL_ARTICLES_COUNT);
  const hiddenCount = articles.length - INITIAL_ARTICLES_COUNT;

  return (
    <section id="articles" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">Articles</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Thoughts on AI, data science, and building things that matter.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-3">
          {visibleArticles.map((article) => (
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
          {hiddenCount > 0 && (
            <div className="flex justify-center pt-3">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {expanded ? "Show less" : `Show ${hiddenCount} more`}
                <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
