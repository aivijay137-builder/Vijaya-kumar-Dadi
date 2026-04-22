import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto px-6 md:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-2">
              <p className="text-sm font-medium text-neutral-400 tracking-widest uppercase">
                AI + Healthcare
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05] whitespace-nowrap">
                Vijaya kumar Dadi
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-neutral-500 font-light leading-relaxed max-w-md">
              I&apos;ve spent 8+ years in pharma and digital health, building products that solve real-world healthcare problems. I enjoy spotting gaps in how care actually works and turning them into simple, useful solutions—often using AI and data. I work closely with clinicians, data scientists, and engineers to build products that genuinely help patients and fit into everyday clinical workflows.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <a href="#projects">
                <Button
                  size="lg"
                  className="bg-neutral-900 hover:bg-neutral-700 text-white rounded-full px-7 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Projects
                </Button>
              </a>
              <a href="/Resume_Vijaya kumar.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-7 border-neutral-300 text-neutral-600 hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200 hover:-translate-y-0.5"
                >
                  Resume
                </Button>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-2 justify-end items-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full border border-neutral-200" />
              <div className="absolute inset-6 rounded-full border border-neutral-150" />
              <div className="absolute inset-12 rounded-full border border-neutral-100" />
              <div className="absolute inset-[72px] rounded-full overflow-hidden">
                <img
                  src="/vijay_photo.jpg"
                  alt="Vijay Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
