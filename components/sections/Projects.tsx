"use client";

import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Maximize2, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type Category = "healthcare" | "others";

type Project = {
  id: number;
  label: string;
  title: string;
  problem: string;
  solution: string;
  tags: string[];
  href: string;
};

const healthcareProjects: Project[] = [
  {
    id: 5,
    label: "EVALS",
    title: "CareEval — LLM Eval Harness for Caregiver AI",
    problem:
      "Caregiver-support AI gives high-stakes medical guidance with no way to verify it's safe before shipping — a prompt change that reads as \"more helpful\" can silently regress on safety, and nobody notices until a real caregiver is affected.",
    solution:
      "A validated evaluation harness: a binary safety rubric, 50 hand-labelled Hindi caregiver conversations, and an LLM judge validated against human labels (TPR 1.00, TNR 0.93) before its scores are trusted. Caught a real regression — a prompt version that looked better on completeness silently failed on triage safety — and blocked it via an automated gate.",
    tags: ["LLM Evals", "Python", "Claude API"],
    href: "https://aivijay137-builder.github.io/careEval/",
  },
  {
    id: 1,
    label: "Model",
    title: "Lung Sound Classification Model",
    problem:
      "Auscultation diagnosis is highly subjective and requires trained clinicians.",
    solution:
      "A binary classification model (normal vs. abnormal) trained on digitized lung audio, enabling automated respiratory screening.",
    tags: ["Audio ML", "Python"],
    href: "#",
  },
  {
    id: 2,
    label: "WebApp",
    title: "Lung Sound Auscultation platform for medical students",
    problem:
      "Medical students struggle to master lung auscultation because real patient exposure is limited, abnormal sounds are hard to differentiate, and feedback during practice is inconsistent.",
    solution:
      "Interactive platform with labeled sounds (normal vs abnormal) for guided, repeatable practice—building diagnostic confidence faster.",
    tags: ["React", "Python"],
    href: "https://lung-lab.vercel.app/",
  },
  {
    id: 3,
    label: "Wearables",
    title: "Proactive Illness Early Warning System",
    problem:
      "By the time most people seek care, illness has already progressed for days. Existing health tools wait for symptoms.",
    solution:
      "A continuous monitoring system that fuses wearable data streams — HRV, SpO₂, temperature, and sleep patterns — to flag early deviation with explanation before symptoms appear.",
    tags: ["AI / ML", "Wearables", "React", "Python"],
    href: "https://frontend-livid-ten-22.vercel.app/",
  },
  {
    id: 4,
    label: "App",
    title: "Postpartum care App",
    problem:
      "Partners are often left out of maternal healthcare — underprepared and anxious.",
    solution:
      "Gives husbands a clear view of their wife's daily symptoms and mood, with contextual recommendations on how to support her better.",
    tags: ["React Native", "NLP", "Product Design"],
    href: "https://postpartum-sooty.vercel.app/",
  },
];

const otherProjects: Project[] = [
  {
    id: 101,
    label: "Coming Soon",
    title: "Coming Soon",
    problem: "",
    solution: "Other projects will be added here.",
    tags: [],
    href: "#",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        nativeButton={false}
        render={
          <Card className="group relative h-[320px] cursor-pointer text-left border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
            <CardContent className="p-7 flex flex-col h-full overflow-y-auto card-scroll">
              <div className="flex items-start justify-between mb-5">
                <Badge
                  variant="outline"
                  className="text-xs uppercase tracking-wider border-neutral-200 text-neutral-500"
                >
                  {project.label}
                </Badge>
                {project.href !== "#" && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 hover:text-neutral-900"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-neutral-900 leading-snug mb-3">
                {project.title}
              </h3>

              <div className="space-y-3 flex-1">
                {project.problem && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                      Problem
                    </p>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                    Solution
                  </p>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-neutral-100">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-neutral-200 text-neutral-500"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>

            <span className="pointer-events-none absolute bottom-4 right-4 flex h-8 w-8 animate-pulse items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-neutral-400">
              <Maximize2 className="h-3.5 w-3.5" />
            </span>
          </Card>
        }
      />

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/40" />
        <Dialog.Popup className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 max-h-[85vh] overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-7 shadow-xl">
          <div className="flex items-start justify-between mb-5">
            <Badge
              variant="outline"
              className="text-xs uppercase tracking-wider border-neutral-200 text-neutral-500"
            >
              {project.label}
            </Badge>
            <Dialog.Close className="text-neutral-400 hover:text-neutral-900 transition-colors">
              <X className="w-4 h-4" />
            </Dialog.Close>
          </div>

          <Dialog.Title className="text-lg font-bold text-neutral-900 leading-snug mb-3">
            {project.title}
          </Dialog.Title>

          <div className="space-y-3">
            {project.problem && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  Problem
                </p>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                Solution
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-neutral-100">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs border-neutral-200 text-neutral-500"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          {project.href !== "#" && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-5 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              Visit project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export function Projects() {
  const [active, setActive] = useState<Category>("healthcare");
  const projects = active === "healthcare" ? healthcareProjects : otherProjects;

  return (
    <section id="projects" className="py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Reveal>
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4">
              Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Things I&apos;ve built.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex gap-2 mb-10">
            <Button
              variant="outline"
              onClick={() => setActive("healthcare")}
              className={`rounded-full px-5 text-sm transition-all duration-200 ${
                active === "healthcare"
                  ? "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800 hover:text-white"
                  : "border-neutral-200 text-neutral-500 hover:border-neutral-400 hover:text-neutral-900"
              }`}
            >
              Healthcare
            </Button>
            <Button
              variant="outline"
              onClick={() => setActive("others")}
              className={`rounded-full px-5 text-sm transition-all duration-200 ${
                active === "others"
                  ? "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800 hover:text-white"
                  : "border-neutral-200 text-neutral-500 hover:border-neutral-400 hover:text-neutral-900"
              }`}
            >
              Others
            </Button>
          </div>
        </Reveal>

        <div
          key={active}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-fade-in"
          style={{ animation: "fadeIn 0.3s ease" }}
        >
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
