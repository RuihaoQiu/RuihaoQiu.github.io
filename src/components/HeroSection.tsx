import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6">
          PhD · Tech Lead, AI and Data Science
        </Badge>
        <h1 className="mx-auto max-w-4xl text-4xl md:text-6xl lg:text-7xl tracking-tight mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Ruihao (Ray) Qiu
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          Tech Lead of AI and Data Science at TalentNeuron, Munich.
          Building AI and data science products for large organizations, small businesses, and researchers.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button variant="outline" size="icon" asChild aria-label="GitHub">
            <a href="https://github.com/RuihaoQiu" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild aria-label="LinkedIn">
            <a href="https://www.linkedin.com/in/ruihaoqiu/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild aria-label="Email">
            <a href="mailto:qiuruihao@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
