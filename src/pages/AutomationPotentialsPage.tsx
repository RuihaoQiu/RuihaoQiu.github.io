import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, Bot } from "lucide-react";

const levels = [
  { level: "T0", meaning: "No automation potential — fully human" },
  { level: "T1", meaning: "Minimal — technology assists, human decides" },
  { level: "T2", meaning: "Moderate — automates sub-tasks, human oversees" },
  { level: "T3", meaning: "High — mostly automated, human handles exceptions" },
  { level: "T4", meaning: "Full — no human required" },
];

const agents = [
  {
    n: "1",
    title: "Automation Potential Agent",
    body: "Scores each duty across AI, BPA, and IA using N parallel evaluations averaged for stability. Validates and repairs missing duties.",
  },
  {
    n: "2",
    title: "Time Share Agent",
    body: "Estimates how much of the working week each duty actually takes. Multiple evaluations are averaged, then re-normalized to 100%.",
  },
  {
    n: "3",
    title: "Duty Explanation Agent",
    body: "For each duty, generates a rationale naming specific tools and technologies. Runs all duties concurrently.",
  },
  {
    n: "4",
    title: "Job Summary Agent",
    body: "Produces a single job-level narrative once the duty-level picture is complete.",
  },
];

const outputs = [
  {
    title: "Decomposed, not blended",
    body: "Instead of one opaque score per job, you see the duty-by-duty breakdown across three automation types. No hidden weights.",
  },
  {
    title: "Time-weighted reality",
    body: "Scores are grounded in how much of the working week each duty actually consumes, not in which duty sounds most impressive.",
  },
  {
    title: "Tool-specific explanations",
    body: 'The rationale names the technology — "GPT-based drafting tools," "RPA for invoice matching," "collaborative robotic arms" — not vague statements about "AI potential."',
  },
  {
    title: "Comparable across jobs",
    body: "Because every job is scored on the same T0–T4 scale, the same three types, with the same time-share normalization, jobs can be compared honestly.",
  },
];

export function AutomationPotentialsPage() {
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

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Article</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            Scoring Automation Potential: How Much of a Job Can Actually Be Automated?
          </h1>
          <p className="text-lg text-muted-foreground">
            "How automatable is this job?" is the defining question of the AI era. Most answers are wrong.
          </p>
        </div>

        <div className="space-y-12 text-base leading-relaxed">

          <section>
            <p className="text-muted-foreground">
              It's the question every leader, planner, and workforce researcher ends up asking — and the one every report answers badly. Headlines collapse nuance into a single percentage ("45% of this job can be automated") that travels well in slides but hides the work it took to arrive at.
            </p>
            <p className="text-muted-foreground mt-4">
              The truth is messier. Jobs aren't monolithic. They're bundles of duties, each with its own automation story. And the technology that automates each duty isn't a single thing — it's at least three different things.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Why a Single Automation Score Is Misleading</h2>
            <p className="text-muted-foreground">
              Most automation assessments treat a job as one unit and produce one number — usually a weighted average of duty-level guesses, but the weights and the guesses are rarely surfaced.
            </p>
            <p className="text-muted-foreground mt-4">
              Two problems with that. First, different duties within the same job have wildly different automation profiles. An accountant might spend 40% of their time on reconciliation (highly automatable) and 10% on client negotiation (not). A 30% blended score tells you neither.
            </p>
            <p className="text-muted-foreground mt-4">
              Second, the <em>kind</em> of automation matters. A duty that AI can take over is a completely different economic and organizational change than a duty that business process automation streamlines or that industrial automation replaces with a machine.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Three Types of Automation, Not One</h2>
            <p className="text-muted-foreground mb-6">
              Automation potential breaks down into three distinct types — each with a different scope, cost structure, and organizational implication.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "AI", desc: "Cognitive tasks: language, judgment, prediction, pattern recognition." },
                { label: "BPA", desc: "Business Process Automation. Structured, rule-based workflow steps: forms, approvals, data transfers." },
                { label: "IA", desc: "Industrial Automation. Physical tasks: manufacturing, handling, logistics." },
              ].map((t) => (
                <div key={t.label} className="border rounded-xl p-4">
                  <div className="font-semibold text-sm mb-1">{t.label}</div>
                  <div className="text-xs text-muted-foreground">{t.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mb-4">
              Each duty is scored separately for each type on a T0–T4 scale:
            </p>
            <div className="space-y-2">
              {levels.map((l) => (
                <div key={l.level} className="flex gap-4 border rounded-xl px-4 py-3">
                  <div className="text-primary font-semibold text-sm w-6 shrink-0">{l.level}</div>
                  <div className="text-sm text-muted-foreground">{l.meaning}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Scoring at the Duty Level, Not the Job Level</h2>
            <p className="text-muted-foreground">
              The unit of analysis is the duty, not the job. For each duty the assessment produces an automation level per type (T0–T4), a time share — what proportion of total working time the duty actually occupies — and an explanation with specific tools and technologies.
            </p>
            <p className="text-muted-foreground mt-4">
              The job-level summary is built <em>from</em> these, not the other way around. When someone asks "how much of this role is AI-automatable?", the answer is grounded in concrete duties and their time shares — and you can drill in to see why.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">The Pipeline: Four Agents in Sequence</h2>
            <div className="space-y-4">
              {agents.map((a) => (
                <div key={a.title} className="flex gap-4 border rounded-xl p-4">
                  <div className="text-primary font-semibold text-sm w-5 shrink-0">{a.n}</div>
                  <div>
                    <div className="font-medium text-sm mb-1">{a.title}</div>
                    <div className="text-sm text-muted-foreground">{a.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              All four agents draw from a shared knowledge base: accumulated expert data, client feedback, academic research, and industry reports. That grounding is what stops the model from hallucinating plausible-sounding but wrong automation narratives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What Planners and Leaders Get Out of It</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outputs.map((o) => (
                <div key={o.title} className="border rounded-xl p-4">
                  <div className="font-medium text-sm mb-1">{o.title}</div>
                  <div className="text-sm text-muted-foreground">{o.body}</div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">The Point</h2>
            <p className="text-muted-foreground">
              A single automation percentage is a conversation-ender. A duty-level, time-weighted, tool-specific assessment is a conversation-starter. It tells planners what to actually do next: which duties to automate, with what kind of technology, and how much of the role would remain.
            </p>
            <p className="text-muted-foreground mt-4">
              That's the version of the question worth answering.
            </p>
          </section>

          <section className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {["AI", "Automation", "Agentic AI", "Workforce", "LLM"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
