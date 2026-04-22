import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    label: "Problem",
    content:
      "Acute illness is almost always diagnosed reactively. Patients wait until symptoms are severe enough to seek care — by which point treatment windows have narrowed significantly. Wearables generate continuous physiological data that goes almost entirely unused for early risk detection.",
  },
  {
    label: "Insight",
    content:
      "Illness doesn't appear suddenly — it builds. Heart rate variability, sleep fragmentation, and subtle temperature drift begin changing 24–72 hours before the body registers what we call \"symptoms\". These deviations are detectable if you're listening.",
  },
  {
    label: "Approach",
    content:
      "I built a multi-signal fusion pipeline that ingests continuous wearable streams and computes a rolling deviation score against each user's personal baseline. An isolation forest model flags anomaly clusters. The system surfaces these via a clean alert interface — not anxiety-inducing numbers, but a clear signal: something may be changing.",
  },
  {
    label: "Outcome",
    content:
      "In early testing, the system surfaces meaningful physiological shifts 18–36 hours before users self-reported feeling unwell. The next phase focuses on clinical validation and explainability — helping users (and clinicians) understand why an alert was generated, not just that it was.",
  },
];

export function CaseStudy() {
  return (
    <section id="case-study" className="py-28 bg-neutral-900">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Reveal>
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-4">
              Featured Case Study
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Proactive Illness
              <br />
              Detection System
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 100}>
              <div className="border border-neutral-700 rounded-2xl p-7 hover:border-neutral-500 transition-colors duration-300">
                <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-3">
                  {String(i + 1).padStart(2, "0")} — {step.label}
                </p>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {step.content}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-14 pt-10 border-t border-neutral-800">
            <div className="flex flex-wrap gap-x-12 gap-y-5">
              {[
                { label: "Detection window", value: "18–36 hrs early" },
                { label: "Signals fused", value: "HRV, SpO₂, Temp, Sleep" },
                { label: "Model type", value: "Isolation Forest + Fusion" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
