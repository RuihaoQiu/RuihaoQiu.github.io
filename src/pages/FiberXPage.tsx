import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, FlaskConical, ExternalLink } from "lucide-react";

const hardware = [
  { component: "Spectrometers (×2 / ×8)", interface: "Ocean Optics SeaBreeze SDK", details: "USB, device indices 0–1 (V2) / 0–7 (V8)" },
  { component: "3D Motion Controller", interface: "Serial COM, 9600 baud, Modbus RTU", details: "800 steps/mm, 3-axis XYZ stepper" },
  { component: "Vibration Platform", interface: "Serial COM, 9600 baud", details: "Temperature 0–99°C, speed 0–500 RPM" },
];

const versions = [
  { label: "Spectrometers", v2: "2 devices", v8: "8 devices" },
  { label: "Acquisition", v2: "Sequential, ~0.4s/update", v8: "Parallel via ThreadPoolExecutor, ~0.2s/update" },
  { label: "Flow control", v2: "Well-based (A1–H12), XYZ movement", v8: "Column-based (1–12), X+Z only" },
  { label: "Visualization", v2: "2 spectrum lines + 2 centroid markers", v8: "8 spectrum lines + 8 centroid markers" },
  { label: "Excel export", v2: "2 columns per sheet", v8: "8 columns per sheet (A–H)" },
];

const stack = [
  { label: "GUI", value: "Python 3.13+ · PyQt6" },
  { label: "Signal processing", value: "SciPy · NumPy · Matplotlib" },
  { label: "Data export", value: "Pandas (Excel)" },
  { label: "Hardware interface", value: "ctypes · SeaBreeze SDK" },
  { label: "Parallel acquisition", value: "concurrent.futures.ThreadPoolExecutor" },
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
            <Badge variant="secondary">Research</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">FiberX</h1>
          <p className="text-lg text-muted-foreground mb-4">
            A desktop application built for laboratory researchers to study how biomolecules bind and dissociate in real time. It bridges hardware control and data analysis in a single interface — removing the need for manual coordination between instruments and spreadsheets.
          </p>
          <p className="text-muted-foreground mb-6">
            The system controls optical spectrometers, a 3D XYZ motion controller, and a vibration/heating platform. As samples flow through a 96-well plate, it continuously measures absorption spectra, tracks centroid shifts, and fits binding and dissociation kinetic curves automatically.
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
            <h2 className="text-2xl font-semibold mb-4">Hardware</h2>
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Component</th>
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">Interface</th>
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground hidden md:table-cell">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {hardware.map((h, i) => (
                    <tr key={h.component} className={i < hardware.length - 1 ? "border-b" : ""}>
                      <td className="px-4 py-2 font-medium text-xs">{h.component}</td>
                      <td className="px-4 py-2 text-xs text-muted-foreground">{h.interface}</td>
                      <td className="px-4 py-2 text-xs text-muted-foreground hidden md:table-cell">{h.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">V2 vs V8</h2>
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground w-1/3"></th>
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">V2 (Current)</th>
                    <th className="text-left px-4 py-2 font-semibold text-xs uppercase tracking-wider text-primary">V8 (Planned)</th>
                  </tr>
                </thead>
                <tbody>
                  {versions.map((v, i) => (
                    <tr key={v.label} className={i < versions.length - 1 ? "border-b" : ""}>
                      <td className="px-4 py-2 font-medium text-xs">{v.label}</td>
                      <td className="px-4 py-2 text-xs text-muted-foreground">{v.v2}</td>
                      <td className="px-4 py-2 text-xs text-muted-foreground">{v.v8}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Algorithms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Centroid Detection</div>
                <ol className="space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Find minimum absorption index in normalized spectrum</li>
                  <li>Extract ±25-pixel window around minimum</li>
                  <li>Weighted average: weights = max(y) − y</li>
                </ol>
              </div>
              <div className="border rounded-xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Kinetics Fitting</div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li><span className="font-medium">Binding (ON):</span> a·(1 − e<sup>−kx</sup>)</li>
                  <li><span className="font-medium">Dissociation (OFF):</span> a·e<sup>−kx</sup> − a</li>
                  <li><span className="font-medium">Output:</span> k_on, k_off, k_d, binding/release position</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Software Stack</h2>
            <div className="space-y-2">
              {stack.map((s, i) => (
                <div key={s.label} className={`flex gap-4 px-4 py-3 ${i < stack.length - 1 ? "border-b" : ""}`}>
                  <div className="text-xs text-muted-foreground w-36 shrink-0">{s.label}</div>
                  <div className="text-xs font-medium">{s.value}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {["Python", "PyQt6", "Spectrum Analysis", "Kinetics", "Scientific Computing", "Hardware Control"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
