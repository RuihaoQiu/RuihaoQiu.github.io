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
  questions: string[];
};

const pillars: Pillar[] = [
  {
    icon: Globe,
    label: "Market Intelligence",
    title: "Seamlessly integrate data into your strategic planning workflows",
    description:
      "The external labor market affects business plans at every turn. Uncover the supply, demand, and cost of talent across regions to inform current and future workforce strategy. Keep tabs on competitors and emerging skills to stay ahead of market shifts.",
    questions: [
      "How difficult will filling a role in a specific region be?",
      "In which locations can we find untapped and affordable talent?",
      "Which skills will be essential for future success?",
    ],
  },
  {
    icon: LayoutGrid,
    label: "Job Architecture",
    title: "Build and assess job profiles to fulfill company needs",
    description:
      "Organize a dynamic database of internal roles, skills, and training — automatically updated with external labor market intelligence. Benchmark against competitors and industry standards, and standardize roles to support clearer career paths and talent development.",
    questions: [
      "Which roles are likely to grow in importance due to technological advancements?",
      "Which job profiles can be deprioritized or automated to reduce costs?",
      "What are the blind spots in our skill architecture and how can we close them?",
    ],
  },
  {
    icon: Network,
    label: "Workforce Planning",
    title: "Translate strategy into concrete workforce needs and actions",
    description:
      "Adapting company structure, size, and talent is vital in a changing world. Simulate anticipated scenarios to see how they affect workforce supply and demand. Automated gap-closing proposals, powered by labor market intelligence, inform proactive strategies that avoid talent gaps and mitigate risk.",
    questions: [
      "How might labor demand and internal shifts impact my talent needs?",
      "Where should we focus upskilling, reskilling, and recruiting to meet future capacity?",
      "What is our timeline for filling or automating these roles?",
    ],
  },
  {
    icon: Users,
    label: "Talent Marketplace",
    title: "Foster growth and internal mobility to empower your workforce",
    description:
      "Maintain a transparent bank of employee skills, gaps, and career aspirations. Automatically match employees to full-time, gig, or project-based openings — avoiding recruiting costs and cutting time-to-hire. Where reskilling is needed, AI-recommended learning journeys close the gap.",
    questions: [
      "Which employees can fill this opening, and how do we craft internal posts to improve buy-in?",
      "Which training programs bridge skill gaps and support career mobility?",
      "Do we have adjacent skills to efficiently repurpose into \"skills of the future\"?",
    ],
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
            Build a future-ready organization. A successful workforce strategy demands more than isolated data — it requires an integrated approach that unites internal workforce insights with global labor market intelligence to drive decisions that shape your organization's future.
          </p>
        </div>

        {/* Pillars */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Four Integrated Pillars</h2>
          <p className="text-muted-foreground mb-8">
            Each pillar answers a different class of planning question — together they form one connected platform.
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
                      Questions it answers
                    </div>
                    <ul className="space-y-1.5">
                      {pillar.questions.map((q) => (
                        <li key={q} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary shrink-0">—</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
