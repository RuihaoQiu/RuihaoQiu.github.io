import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, ArrowRight, Users } from "lucide-react";

function Field({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="mb-2">
      <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className={`text-xs ${muted ? "text-muted-foreground" : "text-foreground"}`}>{value}</div>
    </div>
  );
}

function TagRow({ level, label }: { level: "high" | "medium"; label: string }) {
  return (
    <div className="flex items-center gap-1.5 mb-0.5">
      <Badge variant={level === "high" ? "default" : "secondary"} className="text-[10px] py-0 px-1.5">
        {level}
      </Badge>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

const pipelineStages = [
  {
    label: "Raw Input",
    color: "bg-muted/60",
    border: "border-border",
    content: (
      <div>
        <Field label="title" value="Responsabile HR (Cosenza)" />
        <Field label="company" value="OPENJOBMETIS" />
        <Field label="location" value="Cosenza" />
        <Field label="salary" value="NULL" muted />
        <Field label="contract" value="NULL" muted />
        <div className="mb-1">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">description</div>
          <div className="text-xs text-muted-foreground line-clamp-3">
            Departamento S.p.A., Permanent Placement Division, is looking for an HR Manager for a significant company operating in the healthcare sector…
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Extraction",
    color: "bg-green-50",
    border: "border-green-200",
    content: (
      <div>
        <Field label="title (translated)" value="HR Manager" />
        <Field label="company" value="OPENJOBMETIS" />
        <Field label="location" value="Cosenza" />
        <Field label="salary" value="range between 30,000 and 35,000€" />
        <Field label="contract" value="full time" />
        <div className="mb-1">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">introduction</div>
          <div className="text-xs text-muted-foreground line-clamp-2">Significant company operating in the healthcare sector is opening an HR Manager role…</div>
        </div>
        <div className="mb-1">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">tasks</div>
          <div className="text-xs text-muted-foreground line-clamp-2">Complete management of recruitment and selection, onboarding, payroll coordination…</div>
        </div>
        <div className="mb-1">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">requirements</div>
          <div className="text-xs text-muted-foreground line-clamp-2">2-3 years experience, degree in Economics or related field, problem-solving skills…</div>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">benefits</div>
          <div className="text-xs text-muted-foreground line-clamp-1">Full time employment, stable company environment…</div>
        </div>
      </div>
    ),
  },
  {
    label: "Normalization",
    color: "bg-yellow-50",
    border: "border-yellow-200",
    content: (
      <div>
        <Field label="standard title" value="HR Manager" />
        <Field label="education" value="bachelor" />
        <Field label="employment" value="full time" />
        <Field label="work mode" value="onsite" />
        <div className="mb-2">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">tasks</div>
          <TagRow level="high" label="labor law" />
          <TagRow level="medium" label="recruitment" />
          <TagRow level="medium" label="onboarding" />
          <span className="text-[10px] text-muted-foreground">+ 5 more…</span>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">skills</div>
          <TagRow level="medium" label="HR management software" />
          <TagRow level="medium" label="problem-solving" />
          <span className="text-[10px] text-muted-foreground">+ 7 more…</span>
        </div>
      </div>
    ),
  },
  {
    label: "Mapping",
    color: "bg-red-50",
    border: "border-red-200",
    content: (
      <div>
        <Field label="standard title" value="HR Manager" />
        <Field label="education" value="bachelor" />
        <Field label="employment" value="full time" />
        <div className="mb-2">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">location</div>
          <div className="text-xs text-muted-foreground">city: Cosenza · state: null · country: Italy</div>
        </div>
        <div className="mb-2">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">salary</div>
          <div className="text-xs text-muted-foreground">min: 30,000 · max: 35,000 · currency: EUR · period: year</div>
        </div>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">company</div>
          <div className="text-xs text-muted-foreground">name: OPENJOBMETIS · industry: staffing</div>
        </div>
      </div>
    ),
  },
];

const relatedArticles = [
  {
    title: "Designing LLM Pipelines for Job Post Extraction",
    excerpt: "Three architectures for turning unstructured job posts into clean, queryable data — and a framework for choosing between single-call, two-call, and hybrid regex approaches.",
    tag: "LLM",
    href: "/#/llm-extraction",
  },
  {
    title: "Why LLM Evaluation Is Hard (And What to Do About It)",
    excerpt: "\"Looks good\" is not a metric. A practical guide to evaluating probabilistic systems — pick the right scorer per field, test the judge, and version your results.",
    tag: "Evaluation",
    href: "/#/llm-evals",
  },
  {
    title: "Introduce LLM to Labor Market Analysis",
    excerpt: "Applying large language models to job analysis tasks — bridging modern AI capabilities with labor market intelligence.",
    tag: "LLM",
    href: "https://medium.com/@ruihao.qiu",
  },
];

export function AIJobsPage() {
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

      <main className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Product</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">AI for Jobs & Profiles</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The foundation layer of our business. A job post is a marketing document pretending to be a specification — and a profile is the same story. LLMs turn both into clean, queryable data: title, skills, salary, location, company, experience. Every product, dashboard, and analysis we build sits on top of this layer.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mt-4">
            Previously this job was split across dozens of small, hand-tuned models — one per field, per language, per edge case. A single LLM pipeline now delivers higher quality, works across languages out of the box, and is far cheaper to evolve when the schema changes.
          </p>
        </div>

        {/* Pipeline */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Job Processing Pipeline</h2>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-3 items-stretch">
            {pipelineStages.map((stage, index) => (
              <>
                <div key={stage.label} className={`rounded-xl border-2 ${stage.border} ${stage.color} p-4 flex flex-col`}>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 pb-2 border-b border-current/10">
                    {stage.label}
                  </div>
                  <div className="flex-1">{stage.content}</div>
                </div>
                {index < pipelineStages.length - 1 && (
                  <div key={`arrow-${index}`} className="hidden lg:flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0" />
                  </div>
                )}
              </>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Related Articles</h2>
          <p className="text-muted-foreground mb-8">Deep dives into how this foundation layer is designed and evaluated.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedArticles.map((article) => (
              <a
                key={article.title}
                href={article.href}
                {...(!article.href.startsWith("/#/") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="border rounded-xl p-5 hover:border-primary hover:shadow-md transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <Badge variant="secondary" className="text-xs shrink-0">{article.tag}</Badge>
                  <ArrowRight className="h-4 w-4 text-primary shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div className="font-medium text-base leading-snug mb-2">{article.title}</div>
                <div className="text-sm text-muted-foreground">{article.excerpt}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Tags */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["Deep Learning", "LLM", "NLP", "Transformers", "Python", "Elasticsearch", "AWS"].map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
