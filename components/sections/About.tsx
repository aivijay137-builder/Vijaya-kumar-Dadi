import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="py-28 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <Reveal>
              <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4">
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                Why I build
                <br />
                in healthcare.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <Reveal delay={100}>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Most healthcare software is reactive — it helps you manage
                illness after it arrives. I&apos;m interested in the opposite
                problem: screening and proactive care using continuous data signals to surface risk before a
                patient ever feels sick.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-lg text-neutral-600 leading-relaxed">
                I come at this as a product builder. That
                means I think about the full loop, from data to
                clinical trust. The hardest part of health AI isn&apos;t the
                model; it&apos;s earning the confidence of clinicians and
                patients to act on what it says.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="text-lg text-neutral-600 leading-relaxed">
                I care deeply about systems that
                are not just accurate, but{" "}
                <span className="text-neutral-900 font-medium">
                  explainable, trustworthy, and worth using.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
