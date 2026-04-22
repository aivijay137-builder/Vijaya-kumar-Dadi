import { Button } from "@/components/ui/button";
import { Mail, Link2, Code2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "vijay.dadi123@gmail.com",
    href: "mailto:vijay@example.com",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/vijayakumar",
    href: "https://www.linkedin.com/in/vijayakumardadi/",
  },
  {
    icon: Code2,
    label: "GitHub",
    value: "github.com/vijayakumar",
    href: "https://github.com/aivijay137-builder",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <Reveal>
              <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                Let&apos;s work
                <br />
                together.
              </h2>
              <p className="mt-5 text-neutral-500 text-sm leading-relaxed">
                Open to collaborations in healthcare AI — whether that&apos;s
                building together, advising, or just a good conversation.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-3 space-y-5">
            {links.map((link, i) => (
              <Reveal key={link.label} delay={i * 80}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors duration-200">
                    <link.icon className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-neutral-400 uppercase tracking-wider mb-0.5">
                      {link.label}
                    </p>
                    <p className="text-sm font-medium text-neutral-700 group-hover:text-neutral-900 transition-colors truncate">
                      {link.value}
                    </p>
                  </div>
                  <div className="text-neutral-300 group-hover:text-neutral-600 transition-colors text-lg">
                    →
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={320}>
              <div className="pt-6">
                <a href="mailto:vijay@example.com">
                  <Button
                    size="lg"
                    className="bg-neutral-900 hover:bg-neutral-700 text-white rounded-full px-8 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Get in touch
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 mt-24 pt-8 border-t border-neutral-200">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Vijay Kumar
          </p>
          <p className="text-sm text-neutral-400">
            Built with Next.js · Tailwind · shadcn/ui
          </p>
        </div>
      </div>
    </section>
  );
}
