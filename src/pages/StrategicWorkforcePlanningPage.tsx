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

type Pillar = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  breaks: string;
};

const pillars: Pillar[] = [
  {
    icon: Globe,
    label: "Market Intelligence",
    title: "External labor supply, demand, and cost — per skill and region",
    description:
      "The external labor market moves business plans at every turn. Uncover the supply, demand, and cost of talent across regions and skills. Keep tabs on competitors and emerging skills to stay ahead of market shifts.",
    breaks:
      "Coverage. Most companies buy a subscription, pull reports for a handful of roles, and call it done. The data is deep for software engineers in Munich and shallow for everything else — any plan that depends on uncovered roles silently reverts to gut feel.",
  },
  {
    icon: LayoutGrid,
    label: "Job Architecture",
    title: "A standardized internal catalog of roles, skills, and career paths",
    description:
      "Organize a dynamic database of internal roles, skills, and training — continuously benchmarked against the external market. Standardize roles to support clearer career paths and talent development.",
    breaks:
      "Drift. The architecture rots the day it ships. Role definitions written in 2022 don't describe the same work in 2026 — especially where AI has redrawn task boundaries. Without a mechanism to pull market signal back into the internal catalog, it stops being useful as a planning primitive.",
  },
  {
    icon: Network,
    label: "Workforce Planning",
    title: "The decision layer — who to hire, move, upskill, or automate, and when",
    description:
      "Given the forecast and the architecture, decide who to hire, retain, move, upskill, or let go. Simulate anticipated scenarios to see how they affect workforce supply and demand, and translate strategy into concrete actions on a timeline.",
    breaks:
      "Math. The decision space — hire, retain, move, upskill, automate, let go, per role, per year — is combinatorial, and no spreadsheet captures the trade-offs honestly. People default to proportional adjustments (\"cut 5% everywhere\") because the real optimization is too hard to do by hand.",
  },
  {
    icon: Users,
    label: "Talent Marketplace",
    title: "The execution layer — matching employees to openings, gigs, and learning",
    description:
      "Maintain a transparent bank of employee skills, gaps, and aspirations. Automatically match employees to full-time, gig, or project-based openings. Where reskilling is needed, AI-recommended learning journeys close the gap.",
    breaks:
      "Last-mile. A plan that says \"move 40 people from QA to DA over two years\" means nothing if employees don't see the path, managers don't approve the transfer, and content isn't ready. Marketplaces fail quietly when supply and demand are maintained by systems that don't share a skill vocabulary.",
  },
];

type StackLayer = {
  title: string;
  description: string;
};

const stackLayers: StackLayer[] = [
  {
    title: "A living job architecture",
    description:
      "Tied to market data and updated monthly, not annually. Each role carries a skill vector that is benchmarked externally.",
  },
  {
    title: "A programmatic planning layer",
    description:
      "Takes the forecast and produces a concrete action plan — hires, moves, upskilling — with costs attached. Not a deck. An output that can be re-run when inputs change.",
  },
  {
    title: "A duty-level automation view",
    description:
      "For each role, so the plan can distinguish \"this job shrinks 30%\" from \"this job disappears.\" Scored at the task level, not the job level.",
  },
  {
    title: "A marketplace wired to the plan",
    description:
      "Internal openings are generated from planning decisions, not posted ad-hoc. Learning recommendations are pulled from the same skill vectors.",
  },
];

type AgenticModule = {
  icon: LucideIcon;
  label: string;
  title: string;
  summary: string;
  bullets: string[];
  articleTitle: string;
  articleHref: string;
};

const agenticModules: AgenticModule[] = [
  {
    icon: Sparkles,
    label: "Agentic Module",
    title: "Automation Potential Scoring",
    summary:
      "Most automation assessments produce a single blended score per job — a number that hides more than it reveals. This module drops to the duty level, scores each task with four specialized LLM agents, and reweights by the time actually spent on it. The result: an interpretable picture of where automation will and won't land.",
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
    summary:
      "Given headcount forecasts and competing constraints, the cheapest path through hires, layoffs, and internal moves is impossible to find by hand. This module formulates gap closing as an optimization problem and produces the lowest-cost action plan year by year — respecting cost, capacity, and organizational priorities.",
    bullets: [
      "Multi-year, multi-role optimization beyond local decisions",
      "Balances hiring, retention, retraining, and attrition costs",
      "Automated, explainable plans grounded in business constraints",
    ],
    articleTitle: "Workforce Planning: Closing the Gap with AI",
    articleHref: "/#/workforce-planning",
  },
];

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

      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Compass className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Product</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            Strategic Workforce Planning
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Four pillars, and where each one actually breaks.
          </p>
        </div>

        {/* Why it matters */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Why it matters now</h2>
          <div className="space-y-4 text-muted-foreground max-w-3xl">
            <p>
              The labor market is being rewritten in real time. Generative AI is collapsing some tasks to seconds, shifting others from specialist to generalist work, and creating roles that didn't exist two years ago. The half-life of a role is getting shorter — and it is getting shorter unevenly.
            </p>
            <p>
              For large organizations, this is a planning problem different in kind, not just degree. The old cadence — refresh the plan every year or two, hire against the gaps — assumes the target doesn't move between cycles. It moves now. Deciding what to hire, what to automate, and what to reskill can no longer wait for the next strategic cycle.
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">The Four Pillars</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Industry frameworks converge on four capabilities. They're useful not as a taxonomy but as a checklist of where the system breaks. A plan is only as good as the architecture it references, and an architecture is only as good as the market data it's benchmarked against.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <Card key={pillar.label} className="flex flex-col">
                <CardHeader>
                  <pillar.icon className="h-7 w-7 text-primary mb-2" />
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {pillar.label}
                  </div>
                  <CardTitle className="text-lg leading-snug">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 gap-4">
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  <div className="border-t pt-4">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Where it breaks
                    </div>
                    <p className="text-sm text-muted-foreground">{pillar.breaks}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What a working stack looks like */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">What a working stack looks like</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Only the last layer is user-facing. The other three are plumbing — and the plumbing is what most organizations skip.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stackLayers.map((layer, i) => (
              <Card key={layer.title} className="flex flex-col">
                <CardHeader>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    Layer {i + 1}
                  </div>
                  <CardTitle className="text-lg leading-snug">{layer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{layer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Agentic Modules */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Agentic Modules</h2>
          <p className="text-muted-foreground mb-8">
            Modules I am currently leading — where LLM agents turn workforce strategy into concrete, explainable decisions.
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
                  <p className="text-sm text-muted-foreground">{mod.summary}</p>
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
        </section>

        {/* The hard part */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            The hard part isn't the model — it's the data contract
          </h2>
          <div className="space-y-4 text-muted-foreground max-w-3xl">
            <p>
              Every conversation about SWP eventually turns to "which AI do we use." That's the wrong question. The hard problem is the shared <strong className="text-foreground">skill vocabulary</strong>: a representation of skills, roles, and tasks that every pillar agrees on and every system updates.
            </p>
            <p>
              Get that right, and the model choice is almost a detail — the plan can be a linear program, the marketplace a simple matcher, the automation score an LLM pipeline. Get it wrong, and no amount of modeling sophistication will save you: every handoff between pillars loses information.
            </p>
            <p>
              SWP works when the four pillars are built on the same foundation. It fails when each team ships their own.
            </p>
          </div>
        </section>

        {/* Tags */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Built With</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Labor Market Intelligence",
              "LLM",
              "Agentic AI",
              "Optimization",
              "Skill Graph",
              "Forecasting",
            ].map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm py-1 px-3">
                {tag}
              </Badge>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
