import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, Network } from "lucide-react";

export function WorkforcePlanningPage() {
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
            <Network className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Article</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            Workforce Planning: Closing the Gap with AI
          </h1>
          <p className="text-lg text-muted-foreground">
            Why the cheapest path through headcount change is impossible to find by hand — and what optimization changes.
          </p>
        </div>

        <div className="space-y-12 text-base leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold mb-4">The Painful Problem for Large Organizations</h2>
            <p className="text-muted-foreground">
              Workforce planning is fundamentally a restructuring problem: given projected headcount needs, how do you best reorganize — through hires, layoffs, or internal moves — while respecting cost, available resources, and organizational priorities?
            </p>
            <p className="text-muted-foreground mt-4">
              The difficulty is that with several roles, multiple years of forecasts, and competing constraints, the right combination of actions is impossible to work out by hand. There are too many trade-offs, and a decision that looks locally reasonable (hire here, let go there) often misses a globally cheaper path.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">The Optimization Approach</h2>
            <p className="text-muted-foreground mb-6">
              Given your headcount forecast, employment costs, and organizational priorities and constraints, the Workforce Gap Optimizer <strong>automatically produces the optimal action plan</strong> to close all projected gaps — year by year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Given</div>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>How many people you need (or have too many of) per role, per year</li>
                  <li>What each role costs to hire, retain, and let go</li>
                  <li>How similar the roles are to each other (retraining cost)</li>
                </ul>
              </div>
              <div className="border border-primary/40 bg-primary/5 rounded-xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">It tells you exactly</div>
                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  <li>How many people to <strong>hire</strong> into each role</li>
                  <li>How many people to <strong>lay off</strong> from each role</li>
                  <li>How many people to <strong>move</strong> from one role to another</li>
                  <li>The <strong>total cost</strong> of each year's plan</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">The Core Insight: When Is a Move Worth It?</h2>
            <p className="text-muted-foreground">
              Moving someone from one role to another costs money — retraining, productivity ramp-up, possible salary adjustment. But it avoids paying both a hiring fee <em>and</em> severance at the same time. However, when the gap between two roles is large enough, the move cost outweighs the savings, and a direct hire/layoff becomes the better option.
            </p>
            <p className="text-muted-foreground mt-4">
              Whether a move is worth it depends on how similar the two roles are and the salary gap between them. Roles that are close in skill (e.g. QA and DA) will often be moved rather than replaced. Roles that are far apart (e.g. IT and DS) will typically be treated as independent hire/layoff decisions.
            </p>
            <p className="text-muted-foreground mt-4">
              The optimizer calculates that trade-off for every possible role pair and finds the combination that minimizes total spend across all years.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What This Enables for Planners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Cost visibility before commitment", body: "See the projected cost of your workforce plan before headcount decisions are made." },
                { title: "Smarter internal mobility", body: "Identify which role transitions are genuinely cost-effective, and which are not worth the retraining effort." },
                { title: "Year-over-year planning", body: "Gaps are tracked as changes year on year, so the plan accounts for what is already in motion, not just the end-state." },
                { title: "Scenario testing", body: "Adjust salaries, similarity scores, or cost weights and instantly see how the plan and total cost change." },
              ].map((item) => (
                <div key={item.title} className="border rounded-xl p-4">
                  <div className="font-medium text-sm mb-1">{item.title}</div>
                  <div className="text-sm text-muted-foreground">{item.body}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">The Next Layer: AI Agent for Decision Support</h2>
            <p className="text-muted-foreground">
              The optimizer tells you <em>what</em> to do. The next step is helping you understand <em>why</em> — and making it easier to act on.
            </p>
            <p className="text-muted-foreground mt-4">
              An AI agent alongside the plan provides three layers of support:
            </p>
            <div className="mt-6 space-y-4">
              {[
                { title: "Decision explanation", body: "Why each action was chosen over the alternatives, in plain language any stakeholder can follow." },
                { title: "Business impact", body: "How much the plan saves versus a naive hire/layoff approach, and what the investment in retraining unlocks over time." },
                { title: "Action guidance", body: "Concrete next steps for each recommended action — who to involve, what a transition timeline looks like, and what risks to watch for." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 border rounded-xl p-4">
                  <div className="h-2 w-2 mt-1.5 rounded-full bg-primary shrink-0" />
                  <div>
                    <div className="font-medium text-sm mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              The goal is to turn the optimizer from a calculation tool into something that can be used directly in planning conversations.
            </p>
          </section>

          {/* Tags */}
          <section className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {["Workforce Planning", "AI", "Optimization", "HR Tech"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
