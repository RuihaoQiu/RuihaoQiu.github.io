import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, Gauge } from "lucide-react";

const metricTable = [
  { type: "Enum / categorical", right: "Exact match", wrong: "LLM judge (adds noise)" },
  { type: "Short text with variants", right: "Fuzzy match", wrong: "Exact match (misses synonyms)" },
  { type: "Open-ended text", right: "LLM judge", wrong: "Exact match (too strict)" },
  { type: "Unordered lists", right: "LLM judge with list rubric", wrong: "Order-sensitive comparison" },
];

const fieldScorers = [
  { field: "title", scorer: "LLM judge", why: "\"Senior Backend Dev\" vs \"Sr. Backend Developer\" — needs semantic match" },
  { field: "seniority", scorer: "Exact match", why: "Fixed enum; no partial credit for wrong value" },
  { field: "work_mode", scorer: "Exact match", why: "Same reason" },
  { field: "location", scorer: "Fuzzy match", why: "Handles abbreviations, punctuation, small variants" },
  { field: "skills", scorer: "LLM judge", why: "Synonym handling (\"k8s\" = \"Kubernetes\"), list overlap" },
];

const fieldScores = [
  { field: "title", score: "1.00" },
  { field: "work_mode", score: "0.98" },
  { field: "seniority", score: "0.92" },
  { field: "skills", score: "0.91" },
  { field: "location", score: "0.68" },
];

const failureModes = [
  {
    n: "1",
    title: "False confidence",
    body: "You measure one number (e.g. \"90% accuracy\") without asking what that number actually captures. If your metric is exact string match on open-ended text, a correct answer phrased differently counts as wrong. Your real accuracy is higher than reported — but you don't know where the actual failures are.",
  },
  {
    n: "2",
    title: "Silent regressions",
    body: "You swap models, tweak a prompt, or update a dependency. Output quality drops on 5% of cases. Without automated evals that run on every change, you won't notice until users complain.",
  },
  {
    n: "3",
    title: "Misplaced trust in LLM judges",
    body: "Using an LLM to grade another LLM's output is powerful, but the judge itself can be inconsistent. If your judge gives different scores for the same input on different runs, your eval results are noise — you're making decisions on random numbers.",
  },
];

export function LLMEvalsPage() {
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
            <Gauge className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Article</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            Why LLM Evaluation Is Hard (And What to Do About It)
          </h1>
          <p className="text-lg text-muted-foreground">
            "Looks good" is not a metric. Probabilistic systems need probabilistic evaluation — structured, versioned, multi-metric, and grounded in the kind of output you're scoring.
          </p>
        </div>

        <div className="space-y-12 text-base leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
            <p className="text-muted-foreground">
              You build an LLM pipeline. It looks great on a few examples. You ship it. Then users report garbage outputs that your spot-checks never caught.
            </p>
            <p className="text-muted-foreground mt-4">
              This happens because most teams evaluate LLMs the way they test traditional software — run a handful of examples, eyeball the results, and move on. But LLMs are probabilistic. The same prompt can produce different outputs each time. "Looks good" is not a metric.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Why It Matters</h2>
            <p className="text-muted-foreground mb-6">Bad evaluation leads to three failure modes:</p>
            <div className="space-y-4">
              {failureModes.map((m) => (
                <div key={m.n} className="border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary font-semibold text-sm w-5 shrink-0">{m.n}</div>
                    <div className="font-semibold text-base">{m.title}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">{m.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Pick the Right Metric for Each Output Type</h2>
            <p className="text-muted-foreground mb-6">
              Not every field deserves the same scorer. Enum fields (e.g. "remote" / "hybrid" / "onsite") have a single correct answer — exact match is the right metric, and using an LLM judge here just adds variance. Free-text fields like job titles need semantic comparison because "Senior Backend Developer" and "Sr. Backend Dev" are the same thing.
            </p>
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Output type</th>
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Right metric</th>
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">Wrong metric</th>
                  </tr>
                </thead>
                <tbody>
                  {metricTable.map((row, i) => (
                    <tr key={row.type} className={i < metricTable.length - 1 ? "border-b" : ""}>
                      <td className="px-4 py-2 text-xs text-primary">{row.type}</td>
                      <td className="px-4 py-2 text-xs text-muted-foreground">{row.right}</td>
                      <td className="px-4 py-2 text-xs text-muted-foreground hidden md:table-cell">{row.wrong}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Evaluate the Evaluator</h2>
            <p className="text-muted-foreground">
              If you use an LLM as a judge, you need to test the judge itself. Run the same comparison multiple times and check that scores are consistent. If the variance is too high, your eval is unreliable — you're measuring judge randomness, not model quality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use a Different Model for Judging</h2>
            <p className="text-muted-foreground">
              When the same model generates output and judges it, you risk self-evaluation bias — the model may rate its own style of errors more favorably. Using a separate (often stronger) model as the judge produces more objective scores.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Track More Than Accuracy</h2>
            <p className="text-muted-foreground">
              Accuracy alone doesn't tell you if a model upgrade is worth the cost. Track latency and token usage alongside scores so you can answer questions like: "Model B is 2% more accurate but 3× more expensive — is the tradeoff worth it?"
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Version Your Results</h2>
            <p className="text-muted-foreground">
              Eval results should be JSON artifacts committed to version control, not numbers in a notebook that disappear when you restart the kernel. This lets you diff results across model versions, reproduce past runs, and build visualizations without re-running expensive API calls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What This Project Demonstrates</h2>
            <p className="text-muted-foreground mb-6">
              The ideas above are abstract until you see them applied. So I built a small eval harness on a concrete task — extracting structured information from a raw job posting — and wired each principle into a working example.
            </p>
            <p className="text-muted-foreground mb-6">The extractor returns five fields, each scored differently:</p>
            <div className="border rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Field</th>
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Scorer</th>
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {fieldScorers.map((row, i) => (
                    <tr key={row.field} className={i < fieldScorers.length - 1 ? "border-b" : ""}>
                      <td className="px-4 py-2 font-mono text-xs text-primary">{row.field}</td>
                      <td className="px-4 py-2 text-xs text-muted-foreground">{row.scorer}</td>
                      <td className="px-4 py-2 text-xs text-muted-foreground hidden md:table-cell">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mb-4">
              Every scorer returns a score in <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">[0, 1]</span> — not pass/fail — so partial credit is visible.
            </p>
            <p className="text-muted-foreground mb-4">
              The LLM judge itself is tested before being trusted: it scores the same pairs multiple times, and the eval fails if variance is too high. A judge model is also different from the extraction model (e.g. <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">gpt-4o</span> judging <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">gpt-4o-mini</span>) to avoid self-evaluation bias.
            </p>
            <p className="text-muted-foreground">
              The dataset is 50 hand-curated job postings across 10 failure-mode categories — ambiguous seniority, non-English titles, sparse descriptions, dense skills lists, executive roles, unusual salary formats, and so on. Each category is a hypothesis about where the model will break. When a score drops, you know <em>which kind</em> of input is failing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Results That Tell a Real Story</h2>
            <p className="text-muted-foreground mb-6">
              Latest run with <span className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">gpt-4o-mini</span>: mean score 0.90, pass rate 94%.
            </p>
            <p className="text-muted-foreground mb-6">But the field-level breakdown is where it gets interesting:</p>
            <div className="border rounded-xl overflow-hidden mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Field</th>
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Mean score</th>
                  </tr>
                </thead>
                <tbody>
                  {fieldScores.map((row, i) => (
                    <tr key={row.field} className={i < fieldScores.length - 1 ? "border-b" : ""}>
                      <td className="px-4 py-2 font-mono text-xs text-primary">{row.field}</td>
                      <td className="px-4 py-2 text-xs text-muted-foreground">{row.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mb-4">
              <strong>Title scores perfectly</strong> because the LLM judge handles translations and reformulations that string matching would reject. <strong>Location is the weakest field</strong> — fuzzy match degrades on city-vs-city+country mismatches. Both signals would be invisible in a single blended accuracy number.
            </p>
            <p className="text-muted-foreground">
              Latency and token counts are tracked alongside — so when the next model arrives, you can actually answer "2% more accurate but 3× more expensive: is that worth it?"
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">The Point</h2>
            <p className="text-muted-foreground mb-4">
              "Looks good" is not a metric. Probabilistic systems need probabilistic evaluation — structured, versioned, multi-metric, and grounded in the kind of output you're scoring. A title needs a judge, an enum needs exact match, a location needs fuzzy match. Mix them up and your numbers lie to you.
            </p>
            <p className="text-muted-foreground">
              Get the eval loop right and everything else — model selection, prompt iteration, cost/quality tradeoffs — gets easier. The repo is at{" "}
              <a
                href="https://github.com/ruihaoqiu/llm-eval"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/ruihaoqiu/llm-eval
              </a>.
            </p>
          </section>

          <section className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {["LLM", "Evaluation", "Job Search", "NLP", "MLOps"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
