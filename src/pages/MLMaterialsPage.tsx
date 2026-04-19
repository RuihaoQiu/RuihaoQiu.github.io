import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, Atom, ExternalLink } from "lucide-react";

const research = [
  {
    title: "Li-ion Battery Materials Discovery",
    description: "Searching for novel materials suitable for lithium-ion battery applications using ML-guided screening.",
  },
  {
    title: "Semiconductor Property Prediction",
    description: "Predicting bandgap and formation energy values for semiconductors using regression models.",
  },
  {
    title: "Phonon Spectrum Analysis",
    description: "Filtering and identifying materials based on their phonon spectroscopic characteristics.",
  },
  {
    title: "Functional Materials Classification",
    description: "Categorizing materials into functional material types using multi-label classification.",
  },
];

export function MLMaterialsPage() {
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
            <Atom className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Research</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">ML for Material Science</h1>
          <p className="text-lg text-muted-foreground mb-6">
            ML models for classification and physical property prediction trained on 10,000+ materials. Simulated electronic structures across 50+ nanomaterials using first-principles optimization on distributed HPC clusters.
          </p>
          <Button variant="outline" asChild>
            <a href="https://github.com/RuihaoQiu/Machine-learning-on-materials-research" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>

        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-semibold mb-6">Research Areas</h2>
            <div className="space-y-4">
              {research.map((r, i) => (
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
            <h2 className="text-2xl font-semibold mb-4">Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Machine Learning</div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Graph Neural Networks for molecular structure</li>
                  <li>Classification and regression models</li>
                  <li>Multi-label classification</li>
                </ul>
              </div>
              <div className="border rounded-xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Simulation</div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Density Functional Theory (DFT)</li>
                  <li>First-principles optimization</li>
                  <li>Distributed HPC clusters</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {["Graph Neural Networks", "DFT", "PyTorch", "Python", "HPC", "Materials Science"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
