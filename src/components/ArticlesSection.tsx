import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "Attrition Prediction with AutoML",
    excerpt: "ML approaches addressing employee attrition — using automated machine learning to predict and understand workforce turnover.",
    tag: "Machine Learning",
    readTime: "5 min read",
    href: "https://medium.com/@ruihao.qiu",
  },
  {
    title: "Job Recommender Systems",
    excerpt: "An overview of different job recommendation architectures designed for online recruitment platforms.",
    tag: "NLP",
    href: "https://medium.com/@ruihao.qiu",
    readTime: "6 min read",
  },
  {
    title: "Introduce LLM to Labor Market Analysis",
    excerpt: "Applying large language models to job analysis tasks — bridging modern AI capabilities with labor market intelligence.",
    tag: "LLM",
    href: "https://medium.com/@ruihao.qiu",
    readTime: "7 min read",
  },
];

const notebooks = [
  {
    title: "Machine Learning in NLP",
    description: "Common use cases in my daily NLP projects.",
    href: "https://mlnlp.readthedocs.io/en/latest/index.html",
  },
  {
    title: "Recommender Systems in NLP",
    description: "Several recommender systems in NLP, specifically for online recruitment.",
    href: "https://recsys-nlp.readthedocs.io/en/latest/index.html",
  },
  {
    title: "Python Notes for Data Engineering",
    description: "Practical knowledge, concepts and tricks of Python in data engineering.",
    href: "https://pynotes.readthedocs.io/en/latest",
  },
  {
    title: "Algorithms and Use Cases",
    description: "Different algorithms and data structures with code examples.",
    href: "https://algonotes.readthedocs.io/en/latest/",
  },
];

export function ArticlesSection() {
  return (
    <section id="articles" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4">Articles</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Thoughts on AI, data science, and building things that matter.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {articles.map((article) => (
            <Card key={article.title} className="relative flex flex-col transition-all hover:shadow-md hover:border-primary cursor-pointer">
              <a href={article.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0" aria-label={article.title} />
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">{article.tag}</Badge>
                </div>
                <CardTitle className="text-base leading-snug">{article.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 justify-between gap-4">
                <CardDescription className="text-sm leading-relaxed">
                  {article.excerpt}
                </CardDescription>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={article.href} target="_blank" rel="noopener noreferrer">
                      Read <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Notebooks */}
        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-xl font-semibold mb-6 pb-2 border-b">Notebooks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {notebooks.map((nb) => (
              <a key={nb.title} href={nb.href} target="_blank" rel="noopener noreferrer"
                className="border rounded-xl p-4 hover:border-primary transition-colors">
                <div className="font-medium text-sm mb-1">{nb.title}</div>
                <div className="text-xs text-muted-foreground">{nb.description}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
