import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const skills = [
  "Agentic Systems", "GenAI", "LLMs", "NLP",
  "Deep Learning", "MLOps", "Recommender Systems",
  "Data Visualization", "Data Engineering", "Parallel Computing",
  "Python", "SQL", "Shell Scripts", "Docker", "Git", "CI/CD",
  "AWS (S3, EC2, Redshift)", "GCP", "Elasticsearch", "PowerBI",
];

const timeline = [
  {
    role: "Senior Manager, AI and Data Science",
    org: "TalentNeuron, Munich",
    period: "2025 – Present",
    description: "Led LLM integration replacing 30+ ML models, reducing ~$1M in operational costs. Built an internal agentic AI system eliminating 80% of manual consultant work. Leading a team of 4 data scientists cross-functionally with engineering and product.",
  },
  {
    role: "Lead Data Scientist, ML Engineer",
    org: "PeopleForecast GmbH, Munich",
    period: "2018 – 2024",
    description: "Achieved 10x processing speed increase on an AWS pipeline handling billions of global labor market records. Built and deployed an MLOps system enabling continuous retraining of 20+ production models.",
  },
  {
    role: "PhD Candidate, Research Assistant",
    org: "ICMCB, CNRS, Bordeaux",
    period: "2014 – 2018",
    description: "Simulated electronic structures of 50+ nanomaterials. Built ML models for material classification and property prediction trained on 10,000+ materials.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">About</h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="space-y-4">
            {timeline.map((item) => (
              <Card key={item.role}>
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="font-medium">{item.role}</div>
                      <div className="text-sm text-muted-foreground">{item.org}</div>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                    <Badge variant="secondary" className="shrink-0 text-xs whitespace-nowrap">{item.period}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
