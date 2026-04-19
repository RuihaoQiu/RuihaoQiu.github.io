import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, Calculator, ExternalLink } from "lucide-react";

const reportTypes = [
  {
    title: "Financial Report",
    description: "LLM-driven generation — fills Word templates section-by-section with live streaming progress.",
  },
  {
    title: "Asset Report",
    description: "Rule-based calculations from structured Excel data, exported to Word automatically.",
  },
  {
    title: "Juesuan Report",
    description: "Structured Excel-to-Word automation for year-end settlement reporting.",
  },
];

const stack = [
  { label: "Interface", value: "Chainlit" },
  { label: "LLM", value: "DeepSeek Chat (OpenAI-compatible)" },
  { label: "Language", value: "Python 3.12" },
  { label: "Document Processing", value: "python-docx, pandas, openpyxl" },
  { label: "Package Manager", value: "uv" },
];

export function AutoReportPage() {
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
            <Calculator className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Product</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">Auto Report Agents</h1>
          <p className="text-lg text-muted-foreground mb-6">
            A conversational AI agent for generating and reviewing accounting reports — upload Excel data, generate Word reports from templates, then ask questions about the results.
          </p>
          <Button variant="outline" asChild>
            <a href="https://github.com/RuihaoQiu/auto-report-agents" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>

        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
            <p className="text-muted-foreground mb-6">
              The application uses intent routing to distinguish report generation requests from conversational Q&A. After generating a report, users can ask follow-up questions — the agent maintains full context of the output.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border rounded-xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Input</div>
                <p className="text-sm text-muted-foreground">Upload Excel data files with accounting records.</p>
              </div>
              <div className="border border-primary/40 bg-primary/5 rounded-xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Output</div>
                <p className="text-sm text-muted-foreground">Word reports generated from pre-loaded templates, with conversational Q&A on results.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Report Types</h2>
            <div className="space-y-4">
              {reportTypes.map((r, i) => (
                <div key={r.title} className="flex gap-4 border rounded-xl p-4">
                  <div className="text-primary font-semibold text-sm w-5 shrink-0">{i + 1}</div>
                  <div>
                    <div className="font-medium text-sm mb-1">{r.title}</div>
                    <div className="text-sm text-muted-foreground">{r.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
            <div className="space-y-3">
              {stack.map((item) => (
                <div key={item.label} className="flex gap-4 text-sm border rounded-xl px-4 py-3">
                  <div className="text-muted-foreground w-40 shrink-0">{item.label}</div>
                  <div className="font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {["Agentic AI", "LLM", "Python", "Chainlit", "DeepSeek"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
