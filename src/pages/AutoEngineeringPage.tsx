import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, Repeat } from "lucide-react";

const generations = [
  { label: "Rule systems", body: "Expert knowledge hand-written into if-else. Interpretable and controllable, but the world changes and the rules must be updated by hand." },
  { label: "Machine learning", body: "Stop writing rules, learn from data. Better results, but switch the task and the model is useless." },
  { label: "Deep learning", body: "Networks learn features automatically; bigger is better. Generalization solved, classification problems fall one by one." },
  { label: "LLMs", body: "Generation, not just classification. One model understands, writes, reasons — but it's static. It can answer, not act." },
  { label: "Agents", body: "Add reasoning and tool use: think, act, observe feedback. The new layer that can operate every layer beneath it.", active: true },
];

const loopTargets = [
  { n: "01", target: "Write a training script", effect: "code runs, gradients update model weights" },
  { n: "02", target: "Write rules and policies", effect: "code runs, system behavior changes directly" },
  { n: "03", target: "Write a CUDA kernel", effect: "code runs, GPU inference gets faster" },
  { n: "04", target: "Write agent configs", effect: "code runs, another agent gets updated" },
];

const proofs = [
  {
    title: "Heuristic learning",
    body: "Weng Jiayi's argument: the real problem with rule systems was maintenance cost, not capability. If a coding agent maintains the rules — read, edit, test, write back, repeat — that reason to abandon them disappears. Rule systems get continuous learning for the first time.",
  },
  {
    title: "Autoresearch on nanoGPT",
    body: "Karpathy let an agent keep improving the nanoGPT training script — each run, read the loss curve, propose a change, write it in, run again. Overnight, training efficiency climbed with no one tuning parameters or reading logs.",
  },
  {
    title: "End-to-end fine-tuning",
    body: "Hugging Face's Ben Burtenshaw: one sentence of intent, an agent fine-tunes a model end to end. Four agents form a research team — find papers, propose hypotheses, write training code, monitor results — pushing to a live dashboard.",
  },
  {
    title: "The loop edits itself",
    body: "Anthropic uses Claude Code to build Claude Code. Prompts, tool configs, agent behavior — all of it is code, all of it read and modified by the agent. The loop can now update itself.",
  },
];

export function AutoEngineeringPage() {
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
            <Repeat className="h-10 w-10 text-primary" />
            <Badge variant="secondary">Article</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight mb-4">
            From Tweaking Rules to Building Agents: It's All the Same Thing
          </h1>
          <p className="text-lg text-muted-foreground">
            Every kind of automated optimization is, underneath, the same move: the agent updates code, and code governs everything else.
          </p>
        </div>

        <div className="space-y-12 text-base leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold mb-4">From if-else to Agents, Nothing Disappeared</h2>
            <p className="text-muted-foreground">
              The earliest "intelligent" programs were rule systems — expert knowledge encoded as if-else. Interpretable and controllable, but expensive to maintain: the world shifts, the rules must follow, and updating them takes a human. Then machine learning arrived: don't write rules, learn from data. Better, but brittle when the task changes.
            </p>
            <p className="text-muted-foreground mt-4">
              Deep learning solved generalization. The direction turned toward generation — GPT could understand, write, reason. But an LLM is static: it can answer, not act. Add reasoning and tool use, and you get something that can think, act, and observe feedback. That's an agent.
            </p>
            <div className="space-y-2 mt-6">
              {generations.map((g) => (
                <div
                  key={g.label}
                  className={`flex gap-4 border rounded-xl px-4 py-3 ${g.active ? "border-primary" : ""}`}
                >
                  <div className={`font-semibold text-sm w-28 shrink-0 ${g.active ? "text-primary" : ""}`}>{g.label}</div>
                  <div className="text-sm text-muted-foreground">{g.body}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              Intuition says each generation kills the last. It doesn't. Each gains capability but also cost and complexity, so each survives where it fits. But the agent differs in kind, not degree: it isn't just one more solution — <em>it can operate all the others.</em>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Read Context, Change Code, Check Results, Repeat</h2>
            <p className="text-muted-foreground">
              What a coding agent does is simple to state: read the context, change a piece of code, run it, look at the result, change again. Picture a lab — a scientist writes a direction on the whiteboard and leaves; the lab tech reads the literature, writes a protocol, runs the experiment, records results, proposes adjustments, repeats. The scientist returns, reviews, redirects. The developer is the scientist; the agent is the tech; the code is the protocol.
            </p>
            <p className="text-muted-foreground mt-4">
              The work pattern isn't magic. What's magic is that it wraps around <em>anything.</em> Only the thing the code controls changes:
            </p>
            <div className="space-y-2 mt-6">
              {loopTargets.map((t) => (
                <div key={t.n} className="flex gap-4 border rounded-xl px-4 py-3">
                  <div className="text-primary font-semibold text-sm w-6 shrink-0">{t.n}</div>
                  <div className="text-sm">
                    <span className="font-medium">{t.target}</span>
                    <span className="text-muted-foreground"> → {t.effect}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              Gradient descent didn't go away. It became one option inside the loop. When the target is weights, let the code run gradient descent; when the target is rules, let it rewrite the if-else. <strong>The loop is uniform; the update target is a detail.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">The Loop Is Already Running</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proofs.map((p) => (
                <div key={p.title} className="border rounded-xl p-4">
                  <div className="font-medium text-sm mb-1">{p.title}</div>
                  <div className="text-sm text-muted-foreground">{p.body}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              One loop, running on different update targets. <strong>Anything expressible as code can be optimized automatically.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Direction Is Still a Human Judgment</h2>
            <p className="text-muted-foreground">
              It sounds utopian: engineers stop writing code and instead set direction, design feedback, judge quality — the lab tech vanishes and everyone becomes a scientist. But being the scientist is the harder job. Weng, Karpathy, Burtenshaw spent years in their fields. Knowing how to define a problem, design a reward signal, set direction, and draw boundaries is accumulated, not granted by picking up an agent.
            </p>
            <p className="text-muted-foreground mt-4">
              Which method your problem needs may be something only you can answer. I once rebuilt a text-classification task with an expert system; the accuracy curve topped out fast. Swap in an agent and it burned tokens to climb a little. Next: change the model, the architecture, or the optimization target? The agent doesn't know — I have to tell it. Scaling is harder still: how agents collaborate, how to control cost against output. There's no template; you learn by hitting the wall.
            </p>
            <p className="text-muted-foreground mt-4">
              <strong>The loop can run fast, but which direction it runs is still a human's job.</strong> Is someone who doesn't write code still a programmer? Is someone who doesn't train models still an ML engineer? Wrong question. The problem is still there, the tools are still there — the job is to solve it with the best tools available. <strong>People should evolve standing on the model's shoulders.</strong>
            </p>
          </section>

          <section className="pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {["AI", "Agentic AI", "Coding Agents", "Automation", "LLM"].map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm py-1 px-3">{tag}</Badge>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
