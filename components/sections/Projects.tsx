"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
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
    <Card className="group h-[320px] border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
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
    </Card>
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
