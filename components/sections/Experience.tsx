import { Reveal } from "@/components/ui/reveal";

const experiences = [
  {
    role: "AI Product Builder",
    company: "Independent / Self-directed",
    period: "",
    location: "Remote",
    summary:
      "Designing and building proactive health AI systems end-to-end — from data ingestion pipelines to clinical-grade ML models to production web apps.",
    highlights: [  
       "Trained a lung sound binary classifier model to reduce manual screening time. Pilot study at KIMS Hospital bhubaneswar", "Built Lung sound Auscultation learning platform for medical students" , "Built an early illness detection Prototype for wearbles (Whoop, Oura) that using continuous wearable data to infer illlness",
    
     "Built prototype -Partner app for postpartum care",
    ],
  },
  
];

export function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Reveal>
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4">
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Where I&apos;ve focused.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 100}>
              <div className="grid lg:grid-cols-5 gap-6 lg:gap-12">
                <div className="lg:col-span-2 space-y-1">
                  <p className="font-semibold text-neutral-900">{exp.role}</p>
                  <p className="text-sm text-neutral-500">{exp.company}</p>
                  <p className="text-xs text-neutral-400 mt-2">
                    {exp.period} · {exp.location}
                  </p>
                </div>

                <div className="lg:col-span-3 space-y-4">
                  <p className="text-neutral-600 leading-relaxed text-sm">
                    {exp.summary}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm text-neutral-500 leading-relaxed"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-300 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
