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

export function NotebooksSection() {
  return (
    <section id="notebooks" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
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
