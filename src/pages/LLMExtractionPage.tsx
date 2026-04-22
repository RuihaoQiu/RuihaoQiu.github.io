import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, FileSearch } from "lucide-react";

const schema = [
  { field: "title", type: "string", example: "HR Manager" },
  { field: "skills", type: "list[{name, level}]", example: "[{recruitment, medium}, {labor law, high}]" },
  { field: "salary", type: "{min, max, currency, period}", example: "{30000, 35000, EUR, year}" },
  { field: "education", type: "string", example: "bachelor" },
  { field: "work_type", type: "string", example: "full time" },
  { field: "work_mode", type: "string", example: "onsite" },
  { field: "location", type: "{city, state, country}", example: "{Cosenza, null, Italy}" },
  { field: "company", type: "{name, industry}", example: "{OPENJOBMETIS, staffing}" },
];

const architectures = [
  {
    n: "1",
    label: "Arch 1 — single call",
    title: "One Call, Everything at Once",
    pipeline: "Job Post → [LLM: Extract & Standardize] → structured output",
    body: "The simplest approach: send the raw job post and ask the LLM to extract and standardize every field in one shot. One round-trip, one API call, minimal orchestration code.",
    downside: "The prompt grows proportionally with the number of fields and rules. Multi-objective prompts dilute focus — the model is simultaneously a salary parser, a skill tagger, a location resolver, and a title normalizer. Quality degrades in hard-to-predict ways, and you're paying for a large prompt on every post. Fine for prototyping; tends not to survive contact with production volumes.",
    cost: "Highest",
    quality: "Best",
    speed: "Slowest",
    costColor: "text-red-500",
    qualityColor: "text-green-600",
    speedColor: "text-red-500",
  },
  {
    n: "2",
    label: "Arch 2 — two calls",
    title: "Structure First, Then Extract",
    pipeline: "Job Post → [LLM 1: Structure] → clean sections → [LLM 2: Standardize] → output",
    body: "Split the work across two sequential calls. LLM 1 restructures the raw post into named sections — title, tasks, requirements, salary, location, company — with no normalization. LLM 2 reads those compact sections and produces the final schema.",
    downside: "LLM 2 is reading structured input rather than noisy raw text, which means better focus and fewer tokens at the extraction step. The tradeoff: two API calls per post, sequential dependency, and real latency cost at scale. The right choice when skill quality is critical or when building evaluation datasets — the structured intermediate makes it easy to inspect exactly what went wrong.",
    cost: "Medium",
    quality: "Good",
    speed: "Medium",
    costColor: "text-yellow-600",
    qualityColor: "text-green-600",
    speedColor: "text-yellow-600",
  },
  {
    n: "3",
    label: "Arch 3 — single call + regex",
    title: "One Call Plus a Regex Layer",
    pipeline: "Job Post → [LLM: Structure + Standardize] → clean sections → [Regex: Skill matching] → output",
    body: "Keep the single LLM call but remove skill extraction from its scope. The LLM handles everything else — structure, salary, location, education, work type, company — and produces clean tasks and requirements bullets. Skill extraction is then handled by a lightweight post-processing step: scan bullets against a skills taxonomy, match and tag with associated levels.",
    downside: "The cheapest architecture by a significant margin. One LLM call, skill tagging at near-zero cost. The tradeoff: regex misses implicit skills and paraphrased variants. An LLM would infer \"experience managing cross-functional teams\" as a management skill; the regex finds it or it doesn't, depending on vocabulary coverage. In practice, Architecture 3 also produces a useful by-product: a clean structured job description — intro, tasks, requirements as separate fields — that's independently valuable for search, matching, and display. The production default at scale.",
    cost: "Lowest",
    quality: "Acceptable",
    speed: "Fastest",
    costColor: "text-green-600",
    qualityColor: "text-yellow-600",
    speedColor: "text-green-600",
  },
];

export function LLMExtractionPage() {
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
            <FileSearch className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Article</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            Designing LLM Pipelines for Job Post Extraction: From Messy to Structured
          </h1>
          <p className="text-lg text-muted-foreground">
            Three architectures for turning unstructured job posts into clean, queryable data — and how to choose between them.
          </p>
        </div>

        <div className="space-y-12 text-base leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold mb-4">The Messy Reality of Job Post Data</h2>
            <p className="text-muted-foreground">
              A job post is a marketing document pretending to be a specification.
            </p>
            <p className="text-muted-foreground mt-4">
              It buries the salary in a paragraph, scatters required skills across three sections, writes the location as "Munich / remote considered," and describes seniority nowhere at all. Every recruiter writes them differently. Every job board renders them differently. And yet every workforce analytics system, every matching engine, every labor market study needs the same clean answer: title, skills, salary, location, company — in a consistent, queryable schema.
            </p>
            <p className="text-muted-foreground mt-4">
              Getting from raw text to that schema is the extraction problem. And the way you solve it has real consequences for cost, quality, and scale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What Structured Extraction Actually Means</h2>
            <p className="text-muted-foreground mb-6">
              The target schema is straightforward. The challenge isn't reading the post — LLMs do that easily. The challenge is doing it reliably, at low cost, across millions of posts, in a dozen languages, with wildly inconsistent formatting.
            </p>
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Field</th>
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Type</th>
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {schema.map((row, i) => (
                    <tr key={row.field} className={i < schema.length - 1 ? "border-b" : ""}>
                      <td className="px-4 py-2 font-mono text-xs text-primary">{row.field}</td>
                      <td className="px-4 py-2 text-xs text-muted-foreground">{row.type}</td>
                      <td className="px-4 py-2 text-xs text-muted-foreground hidden md:table-cell">{row.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Three Architectures</h2>
            <div className="space-y-6">
              {architectures.map((a) => (
                <div key={a.n} className="border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary font-semibold text-sm w-5 shrink-0">{a.n}</div>
                    <div className="font-semibold text-base">{a.title}</div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground bg-muted/50 rounded-lg px-4 py-3 mb-4 whitespace-pre-wrap">{a.pipeline}</div>
                  <p className="text-sm text-muted-foreground mb-3">{a.body}</p>
                  <p className="text-sm text-muted-foreground">{a.downside}</p>
                  <div className="flex gap-4 mt-4 pt-4 border-t">
                    <div className="text-xs"><span className="text-muted-foreground">Cost: </span><span className={`font-medium ${a.costColor}`}>{a.cost}</span></div>
                    <div className="text-xs"><span className="text-muted-foreground">Quality: </span><span className={`font-medium ${a.qualityColor}`}>{a.quality}</span></div>
                    <div className="text-xs"><span className="text-muted-foreground">Speed: </span><span className={`font-medium ${a.speedColor}`}>{a.speed}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Choose</h2>
            <p className="text-muted-foreground">
              The decision usually comes down to what "acceptable quality" means for your use case.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { label: "At scale", body: "Architecture 3 wins. One call, fast, cheap — and you invest the savings into maintaining a high-quality skills taxonomy." },
                { label: "For evaluation datasets or skill-critical use cases", body: "Architecture 2 is worth the extra cost. The structured intermediate output also makes debugging and human review easier." },
                { label: "In early prototyping", body: "Architecture 1 has its place when simplicity matters more than cost and you haven't yet decided which fields need the most care." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 border rounded-xl p-4">
                  <div className="h-2 w-2 mt-1.5 rounded-full bg-primary shrink-0" />
                  <div>
                    <div className="font-medium text-sm mb-1">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              The cleaner principle: <strong>separate concerns</strong>. Job post structuring and field standardization are different tasks. Keeping them separate — whether across two LLM calls or across an LLM and a regex layer — produces better results than asking one model to do everything at once.
            </p>
          </section>

          <section className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {["LLM", "NLP", "Pipeline Design", "Data Engineering", "Extraction"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
