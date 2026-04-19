import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, FlaskConical, ExternalLink } from "lucide-react";

const features = [
  { title: "Real-Time Spectrum Loading", description: "Load and display spectra from optical fiber sensors with configurable integration and sampling times." },
  { title: "Calibration Reference", description: "Store and retrieve bright and dark spectrum calibration data for accurate measurements." },
  { title: "Range Selection", description: "Define specific spectral ranges for focused analysis." },
  { title: "Multi-Sensor Support", description: "Select sensor types and configure analysis parameters via the control block." },
  { title: "Live Visualization", description: "Multi-tab real-time spectrum display with zoom capabilities for detailed examination." },
];

export function FiberXPage() {
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
            <FlaskConical className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Product</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">FiberX</h1>
          <p className="text-lg text-muted-foreground mb-6">
            A GUI application for scientific researchers to analyze optical fiber sensor spectrum data in real-time — supports multi-sensor types, spectral range selection, and live data acquisition.
          </p>
          <Button variant="outline" asChild>
            <a href="https://github.com/RuihaoQiu/FiberX" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View on GitHub
            </a>
          </Button>
        </div>

        <div className="space-y-12">

          <section>
            <h2 className="text-2xl font-semibold mb-6">Features</h2>
            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={f.title} className="flex gap-4 border rounded-xl p-4">
                  <div className="text-primary font-semibold text-sm w-5 shrink-0">{i + 1}</div>
                  <div>
                    <div className="font-medium text-sm mb-1">{f.title}</div>
                    <div className="text-sm text-muted-foreground">{f.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              FiberX was built for laboratory researchers working with optical fiber sensors. A production version exists as a standalone Windows executable with full capabilities. The GitHub repository provides a demo version using Tkinter for open-source exploration.
            </p>
          </section>

          <section className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {["Python", "Spectrum Analysis", "GUI", "Tkinter", "Scientific Computing"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
