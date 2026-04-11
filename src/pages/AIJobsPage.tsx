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

const models = [
  { name: "Job Segmentation", description: "Splits raw description into Introduction, Task, Requirement, Benefit sections" },
  { name: "Skill Extraction", description: "Extracts skills and proficiency levels from tasks and requirements" },
  { name: "Job Standardization", description: "Normalizes titles, locations, company names and salary figures" },
  { name: "Industry Classification", description: "Assigns company to industry category from job posting content" },
  { name: "Salary Estimation", description: "Projects compensation range from raw description when not provided" },
  { name: "Career Recommendation", description: "Suggests next roles based on employment history and skill graph" },
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
            A pipeline that transforms raw job postings into structured, normalized intelligence — powering search, recommendation, and workforce analytics at scale.
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

        {/* Models */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">ML Models</h2>
          <p className="text-muted-foreground mb-8">Each stage in the pipeline is powered by a dedicated ML model.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((model) => (
              <div key={model.name} className="border rounded-xl p-4">
                <div className="font-medium mb-1">{model.name}</div>
                <div className="text-sm text-muted-foreground">{model.description}</div>
              </div>
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
