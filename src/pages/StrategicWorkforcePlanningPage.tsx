import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  Compass,
  Globe,
  LayoutGrid,
  Network,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type AgenticModule = {
  icon: LucideIcon;
  label: string;
  title: string;
  bullets: string[];
  articleTitle: string;
  articleHref: string;
};

const agenticModules: AgenticModule[] = [
  {
    icon: Sparkles,
    label: "Agentic Module",
    title: "Automation Potential Scoring",
    bullets: [
      "Duty-level decomposition instead of job-level averages",
      "Four LLM agents cover feasibility, value, risk, and readiness",
      "Time-weighted to reflect real automation impact",
    ],
    articleTitle: "Scoring Automation Potential",
    articleHref: "/#/automation-potentials",
  },
  {
    icon: Bot,
    label: "Agentic Module",
    title: "Gap Filling Planning",
    bullets: [
      "Multi-year, multi-role optimization beyond local decisions",
      "Balances hiring, retention, retraining, and attrition costs",
      "Automated, explainable plans grounded in business constraints",
    ],
    articleTitle: "Workforce Planning: Closing the Gap with AI",
    articleHref: "/#/workforce-planning",
  },
];

const SECTION = "container mx-auto px-4 max-w-5xl";

export function StrategicWorkforcePlanningPage() {
  return (
    <div className="min-h-screen">
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

      {/* Hero */}
      <section className="py-20 bg-background">
        <div className={SECTION}>
          <div className="flex items-center gap-3 mb-4">
            <Compass className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Product</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            Strategic Workforce Planning
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Four pillars. And where each one actually breaks.
          </p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-20 bg-muted/50">
        <div className={SECTION}>
          <h2 className="text-2xl font-semibold mb-4">
            The half-life of a role is getting shorter — unevenly.
          </h2>
          <div className="space-y-4 text-muted-foreground max-w-3xl">
            <p>
              Generative AI is collapsing some tasks to seconds, shifting others from specialist to generalist work, and creating roles that didn't exist two years ago.
            </p>
            <p>
              The old cadence — refresh the plan every year, hire against the gaps — assumes the target holds still.{" "}
              <strong className="text-foreground">It doesn't.</strong> Deciding what to hire, automate, or reskill can no longer wait for the next strategic cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-background">
        <div className={SECTION}>
          <h2 className="text-2xl font-semibold mb-2">The Four Pillars</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">Each breaks in a predictable place.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Globe, label: "Market Intelligence", text: "Data is deep for common roles, shallow for everything else. Plans silently revert to gut feel." },
              { icon: LayoutGrid, label: "Job Architecture", text: "Definitions rot. Without market signal flowing back in, the catalog drifts within months." },
              { icon: Network, label: "Workforce Planning", text: "The decision space is combinatorial. Spreadsheets default to proportional cuts." },
              { icon: Users, label: "Talent Marketplace", text: "\"Move 40 people\" means nothing if employees can't see the path and managers won't approve." },
            ].map(({ icon: Icon, label, text }) => (
              <div key={label} className="flex gap-4 p-5 rounded-lg border bg-card">
                <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</div>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Stack */}
      <section className="py-20 bg-muted/50">
        <div className={SECTION}>
          <h2 className="text-2xl font-semibold mb-2">Most orgs skip the first three layers.</h2>
          <p className="text-muted-foreground mb-8">They build the marketplace. They skip the plumbing.</p>
          <ol className="space-y-5 max-w-3xl">
            {[
              ["A living job architecture", "Tied to market data and updated monthly — not annually. Each role carries a skill vector benchmarked externally."],
              ["A programmatic planning layer", "Produces a concrete action plan — hires, moves, upskilling — with costs attached. Not a deck. An output that reruns when inputs change."],
              ["A duty-level automation view", "Distinguishes \"this job shrinks 30%\" from \"this job disappears.\" Scored at the task level, not the job level."],
              ["A marketplace wired to the plan", "Internal openings come from planning decisions, not posted ad-hoc. Learning recommendations pulled from the same skill vectors."],
            ].map(([title, desc], i) => (
              <li key={title} className="flex gap-5 items-start">
                <span className="text-3xl font-bold text-primary/30 leading-none w-8 shrink-0">{i + 1}</span>
                <div>
                  <div className="font-medium mb-1">{title}</div>
                  <div className="text-sm text-muted-foreground">{desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Agentic Modules */}
      <section className="py-20 bg-background">
        <div className={SECTION}>
          <h2 className="text-2xl font-semibold mb-2">Agentic Modules</h2>
          <p className="text-muted-foreground mb-8">
            Modules I am currently leading — LLM agents turning workforce strategy into concrete, explainable decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agenticModules.map((mod) => (
              <Card key={mod.title} className="flex flex-col">
                <CardHeader>
                  <mod.icon className="h-7 w-7 text-primary mb-2" />
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {mod.label}
                  </div>
                  <CardTitle className="text-lg leading-snug">{mod.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-4">
                  <ul className="space-y-1.5">
                    {mod.bullets.map((b) => (
                      <li key={b} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-primary shrink-0">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={mod.articleHref}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline pt-2"
                  >
                    Read: {mod.articleTitle}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion + Tags */}
      <section className="py-20 bg-muted/50">
        <div className={SECTION}>
          <h2 className="text-2xl font-semibold mb-4">
            Skill vocabulary &gt; model choice.
          </h2>
          <div className="space-y-4 text-muted-foreground max-w-3xl mb-8">
            <p>
              Every SWP conversation ends up on "which AI do we use." That's the wrong question. The hard problem is a shared{" "}
              <strong className="text-foreground">skill vocabulary</strong> — a representation of skills, roles, and tasks that every pillar agrees on and every system keeps current.
            </p>
            <p>
              Get that right and the model choice is almost a detail. Get it wrong and every handoff between pillars loses information. SWP works when the four pillars are built on the same foundation. It fails when each team ships their own.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Labor Market Intelligence", "LLM", "Agentic AI", "Optimization", "Skill Graph", "Forecasting"].map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm py-1 px-3">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
