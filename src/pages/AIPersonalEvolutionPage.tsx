import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, Scale } from "lucide-react";

export function AIPersonalEvolutionPage() {
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
        {/* Hero */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Article</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            When Execution Is Cheap, Judgment Is the Moat
          </h1>
          <p className="text-lg text-muted-foreground">
            AI makes producing answers free. What it can't replicate is knowing which ones to throw away.
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">No position is safe</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                In 2012, the <em>Harvard Business Review</em> called data scientist "the sexiest job of the 21st century." I finished my physics PhD in 2018 and switched into data science without hesitation — then ML engineering, then LLM applications, then agents. Each wave, I was in it. Each wave, the previous title quietly became a prefix: <em>pre-</em> something.
              </p>
              <p>
                That pattern used to apply to specific roles. Now it applies to the entire pyramid.
              </p>
              <p>
                At the base: junior positions are contracting. Work that used to go to new hires now goes directly to agents. In the middle: Block cut 40% of its workforce; Jack Dorsey framed it not as cost-cutting but as replacing middle management with AI. Above that: whole teams and departments have disappeared at companies across the industry. And even at the top: CTOs from Workday, Instagram, You.com, and Adept have left their C-suite titles to become individual contributors at Anthropic.
              </p>
              <p>
                There is no layer that is structurally safe. And the direction of pressure is unmistakable.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">The horizontal gap has closed</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dan Koe offers a useful test: take any task, replace me with a different person — as long as both of us have AI access, does the output change? If the answer is no, then there is no "me" in the equation. The task has become a commodity.
              </p>
              <p>
                Apply that test honestly. Writing code: solvable. I might write more elegant code, but the task is solved. Analysis: solvable. I might go deeper, but it is solved. Modeling: largely solved. I have years in machine learning — but so what.
              </p>
              <p>
                Horizontally, the gap has closed. Vertically — in code quality, architecture, analytical depth — differences still exist. But the right question is not whether the gap exists today. It is how long it will take a motivated person with AI assistance to close it. Not years. Possibly months.
              </p>
              <p>
                If something separates us from each other, it no longer lives on the axis of who can do the task or who does it better. It lives somewhere else.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Addition is free. Subtraction is the moat.</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                When execution becomes free, two things remain scarce: knowing which answers are wrong, and knowing which correct answers are actually good. The first is judgment. The second is taste. Both are subtractive — they remove, not add.
              </p>
              <p>
                Taleb makes this point precisely. You can never confirm a thing will work — more evidence only raises probability. But you can confirm a thing will not work: test it, watch it fail, now you know. Every failure is a falsification. The space of possibilities shrinks. What remains is more likely to be right. The full force of judgment lives in that word <em>subtract</em>: not generating another answer, but eliminating the wrong ones until the right one is what's left.
              </p>
              <p>
                AI is an infinite addition machine. Ask it for ten options and you get ten — each plausible, each defensible, each polished. It has made addition essentially free. That means all the value has moved to the other side: to judgment and taste.
              </p>
              <p>
                AI is also a median machine. It produces the most likely, the most defensible, the least controversial output — consensus-grade plausibility. Judgment and taste are precisely the capacity to know that consensus-grade is not enough: to have a preference that deviates from the average and turns out to be right. AI can generate. It cannot be discerning. <strong className="text-foreground">In a world of abundant output, the ability to reject — to be genuinely hard to please — is what gets valuable.</strong>
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Judgment is built through evaluation, not execution</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Knowing that value has shifted to judgment is not enough. Judgment is not installed by reading about it or watching demos. Where does it actually come from?
              </p>
              <p>
                Taleb's underlying logic: generate randomly, test, eliminate. Nature doesn't plan — it tries things, keeps what survives. The expensive "generate" step is now handled by the model, which can instantly cover an enormous possibility space. The division of labor is now clear: <strong className="text-foreground">the model adds, you subtract.</strong> It tries, you falsify. It covers the directions, you decide which ones are worth pursuing.
              </p>
              <p>
                Consider the food critic, the film critic, the football manager. Elite judgment — but they cannot cook the meal, shoot the film, or score the goal. Why? Because judgment and execution are separate capabilities. A chef's skill is built by cooking. A critic's palate is built by eating — thousands of meals, most forgettable, a few remarkable, each one sharpening the sense of "this works" or "this doesn't." The critic never held a knife. The judgment is still more accurate than most chefs'.
              </p>
              <p>
                Judgment comes not from personally executing every trial, but from repeatedly evaluating and having those evaluations tested by reality. The more you judge, and the more often you learn whether you were right, the sharper the instrument becomes.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Trust is built through visible bets</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Judgment and taste live inside your head. They do not generate opportunities on their own. Clients do not hand problems to people who "probably see clearly." They hand problems to people they trust. So there is one more step — the most underestimated one: making others trust your judgment.
              </p>
              <p>
                That trust is built through skin in the game. You put something real on the line — reputation, time, money — for a specific judgment. If you are wrong, it costs you. People do not trust the conclusion; they trust the fact that you have been willing to be wrong about it in a way that hurts. Someone who has never paid a price for their judgment, no matter how eloquently they speak, registers as opinion. Someone who has repeatedly staked something and been right when it mattered — problems begin to flow to them before they even speak.
              </p>
              <p>
                There is a condition: the bets have to be visible. Being quietly right a hundred times builds nothing. What you need to show is not the polished conclusion but the cut — how you personally eliminated the options that looked most reasonable, how you spotted the flaw inside something that appeared perfect, and why you discarded the sophisticated solution in favor of the simple one. Conclusions can be fabricated. The act of elimination cannot — because elimination <em>is</em> the judgment.
              </p>
              <p>
                The mechanism is then complete: sharpen judgment through evaluation, stake it publicly, let the record accumulate. <strong className="text-foreground">In a world where everyone can produce a polished answer, the only thing that still separates people is how many others are willing to hand them problems that don't have answers yet.</strong>
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">It's a role shift, not a loss</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                What I'm describing is simple: when AI becomes the chef, stop competing to be the chef. Become the food critic — tell it which dish is good. Become the restaurant owner — know what your guests want. Whether a restaurant succeeds has nothing to do with which stove it uses. It depends entirely on one thing: whether the person outside the kitchen understands what good means and understands their guests.
              </p>
              <p>
                At that point, if someone tells you they are a better cook — sharper knife skills, superior technique — does it matter? No. Because you were never trying to cook. The person who fears being overtaken by the next wave is still standing in the water. Once you've shifted roles, you're on the shore.
              </p>
              <p>
                AI has not rewritten this rule. It has stripped away the noise of the kitchen and made the rule visible again: <strong className="text-foreground">a restaurant's fate has always rested on the person who understands "good" and understands people. That was always true. Now it's just the only thing left.</strong>
              </p>
            </div>
          </section>

          {/* Tags */}
          <section className="pt-4">
            <div className="flex flex-wrap gap-2">
              {["Career", "AI", "Judgment", "Personal Growth"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">
                  {tag}
                </Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
