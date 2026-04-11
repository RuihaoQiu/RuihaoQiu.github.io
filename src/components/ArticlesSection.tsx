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
            <Card key={article.title} className="flex flex-col">
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
                <div className="flex items-center justify-between">
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
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <a href="https://tulip-production-6e8.notion.site/Articles-a4268d2bbbcf457284e4f86353ca1651" target="_blank" rel="noopener noreferrer">
              View all articles <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
