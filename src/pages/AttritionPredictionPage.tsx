import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, TrendingDown } from "lucide-react";

const pipelineStages = [
  {
    title: "Data Validation",
    description: "Validate data type, range, missing values, outliers etc.",
  },
  {
    title: "Data Processing",
    description: "Aggregate data; fill missing values; add external data.",
  },
  {
    title: "Feature Engineering",
    description: "Create new features; augment data with SMOTE for class imbalance.",
  },
  {
    title: "Model Training",
    description: "AutoML — hyperparameter tuning, model stacking, bagging.",
  },
  {
    title: "Model Testing",
    description: "Calculate metrics: F1, AUC, Precision, Recall. Feature importance analysis.",
  },
  {
    title: "Deployment & Prediction",
    description: "AWS: SageMaker + S3. Returns attrition prediction, probability, and contributing reasons.",
  },
];

const references = [
  {
    name: "AutoGluon",
    description: "An AutoML package that uses stacking and bagging strategy for model building and hyperparameter tuning.",
    link: "https://arxiv.org/abs/2003.06505",
    linkLabel: "arXiv:2003.06505",
  },
  {
    name: "SHAP",
    description: "A game theoretic approach to explain the output of any machine learning model.",
    link: "http://papers.nips.cc/paper/7062-a-unified-approach-to-interpreting-model-predictions",
    linkLabel: "A Unified Approach to Interpreting Model Predictions",
  },
  {
    name: "Pandera",
    description: "A flexible and expressive API for performing data validation on dataframe-like objects to make data processing pipelines more readable and robust.",
  },
  {
    name: "imbalanced-learn (SMOTE)",
    description: "Provides tools for dealing with classification with imbalanced classes. SMOTE is used here for over-sampling.",
  },
];

export function AttritionPredictionPage() {
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

      <main className="container mx-auto px-4 py-16 max-w-3xl">
        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Article</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            Attrition Prediction with AutoML
          </h1>
          <p className="text-lg text-muted-foreground">
            ML approaches addressing employee attrition — using automated machine learning to predict and understand workforce turnover.
          </p>
        </div>

        <div className="space-y-12 text-base leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              Understanding why employees leave can help organizations implement strategies to retain their workforce. By predicting attrition, companies can proactively address issues and improve employee satisfaction.
            </p>
            <p className="text-muted-foreground mt-4">
              The goal is to deliver a ML system — not just a model — that a client can use with minimal technical overhead. The client uploads employee historical data, and the system returns attrition predictions, probabilities, and the contributing reasons within minutes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">ML Pipeline</h2>
            <div className="space-y-3">
              {pipelineStages.map((stage, i) => (
                <div key={stage.title} className="flex gap-4 border rounded-xl p-4">
                  <div className="text-primary font-semibold text-sm w-5 shrink-0">{i + 1}</div>
                  <div>
                    <div className="font-medium text-sm mb-1">{stage.title}</div>
                    <div className="text-sm text-muted-foreground">{stage.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Use Case</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Training</div>
                <p className="text-sm text-muted-foreground">
                  The user uploads employees' historical data with labels and starts training. The system builds and validates a model automatically.
                </p>
              </div>
              <div className="border border-primary/40 bg-primary/5 rounded-xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Inference</div>
                <p className="text-sm text-muted-foreground">
                  The user uploads employees' current data without labels and starts inference. The system returns attrition risk, probability, and key contributing factors.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">References</h2>
            <div className="space-y-4">
              {references.map((ref) => (
                <div key={ref.name} className="border rounded-xl p-4">
                  <div className="font-medium text-sm mb-1">
                    <code className="bg-muted px-1.5 py-0.5 rounded text-xs mr-2">{ref.name}</code>
                    {ref.link && (
                      <a href={ref.link} target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">
                        {ref.linkLabel}
                      </a>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{ref.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Tags */}
          <section className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {["AutoML", "Machine Learning", "Attrition", "HR Tech", "Python"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
