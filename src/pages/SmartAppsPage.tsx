import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, LayoutDashboard, Braces, Tags, Building2, DollarSign, TrendingUp, Sparkles } from "lucide-react";

const features = [
  {
    icon: Tags,
    title: "Job Standardization",
    description:
      "Normalizes job titles, locations, company names, and salary information across diverse data sources into a consistent, structured format.",
  },
  {
    icon: Sparkles,
    title: "Skill Extraction",
    description:
      "The key feature of Smart Apps — extracts skills and proficiency levels from job descriptions and CVs using custom NLP models.",
  },
  {
    icon: Braces,
    title: "Job Segmentation",
    description:
      "Categorizes job descriptions into four structured sections: Introduction, Task, Requirement, and Benefit for deeper analysis.",
  },
  {
    icon: Building2,
    title: "Industry Classification",
    description:
      "Assigns companies to industry categories based on their job postings using multi-label classification models.",
  },
  {
    icon: DollarSign,
    title: "Salary Estimation",
    description:
      "Projects compensation figures from raw job descriptions using regression models trained on large-scale labor market data.",
  },
  {
    icon: TrendingUp,
    title: "Career Recommendation",
    description:
      "Suggests next career positions based on employment history using sequence modeling and graph-based recommendation systems.",
  },
];

const products = [
  {
    name: "smartData",
    description: "Data management and normalization layer — cleans, standardizes, and enriches raw labor market data at TB scale.",
  },
  {
    name: "smartPlan",
    description: "Workforce planning and forecasting tool — helps large organizations plan headcount, budgets, and restructuring scenarios.",
  },
  {
    name: "smartPeople",
    description: "Talent intelligence platform — profiles employees and candidates, maps skills, and supports hiring and mobility decisions.",
  },
];

export function SmartAppsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
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

      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <LayoutDashboard className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Product</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">Smart Apps</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            The main products of TalentNeuron: smartData, smartPlan, and smartPeople — an AI-powered suite for labor market intelligence and workforce management.
          </p>
        </div>

        {/* Products */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Algorithms */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-2">Core Algorithms</h2>
          <p className="text-muted-foreground mb-8">
            LLM and Agentic AI form the backbone of Smart Apps — delivering high-quality data, deep labor market intelligence, and a seamless user experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <feature.icon className="h-7 w-7 text-primary mb-2" />
                  <CardTitle className="text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tags */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {["LLM", "Agentic AI", "NLP", "Transformers", "Recommender Systems", "Python", "AWS", "MLOps"].map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
