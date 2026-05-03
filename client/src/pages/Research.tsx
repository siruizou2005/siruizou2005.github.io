export default function Research() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-20 max-w-3xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px w-12 bg-on-tertiary-container" />
          <span className="font-label text-xs uppercase tracking-[0.2em] text-on-tertiary-container">
            Scientific Inquiry
          </span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-primary leading-tight">
          Selected Research <br />
          <span className="italic font-normal">&amp; Projects.</span>
        </h1>
        <p className="mt-8 text-lg text-on-surface-variant leading-relaxed font-light">
          Bridging the intersection of computational social science, large language models, and
          behavioral economics through rigorous empirical analysis and cognitive architecture.
        </p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Project 1: Consumption Policy */}
        <div className="md:col-span-4 min-h-[320px] group relative flex flex-col overflow-hidden bg-surface-container-lowest border border-outline-variant/20 hover:border-primary/20 transition-all duration-500">
          <div className="p-8 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tag-primary">NLP</span>
              <span className="tag-primary">Economics</span>
              <span className="tag-primary">LLM</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-4 md:line-clamp-2">
              LLM-Assisted Consumption Policy Evaluation
            </h3>
            <p className="text-sm text-on-surface-variant font-body mb-8 leading-relaxed">
              Research Assistant under Prof. Hong Zou (Dean, School of Economics, SWUFE) and Dr. Han Xiao.
              Building an automated NLP pipeline to quantify consumption policy intensity across
              3–5M government documents (2000–2022), and evaluating macroeconomic ROI on GDP and
              household Marginal Propensity to Consume using CHFS data.
            </p>
            <div className="mt-auto text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
              Jan 2026 – Present
            </div>
          </div>
        </div>

        {/* Project 2: PersonaForge */}
        <div className="md:col-span-4 min-h-[320px] group flex flex-col bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container-lowest transition-all duration-500">
          <div className="p-8 flex flex-col h-full">
            <div className="flex gap-2 mb-4">
              <span className="tag-accent">ACL 2026 Findings</span>
              <span className="tag-primary">Co-first Author</span>
            </div>
            <h3 className="font-headline text-2xl font-bold text-primary mb-1 md:line-clamp-2">PersonaForge</h3>
            <p className="text-xs text-on-surface-variant/60 italic mb-4">Role-Playing Agent Research based on Dual-Process Architecture</p>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
              Designed a dual-process cognitive architecture fusing System 1/System 2 reasoning and Big Five personality traits to combat LLM "persona drift" in long-text simulations.
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-primary font-bold text-lg">75%</span>
                <span className="text-xs text-on-surface-variant">persona drift reduction</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-primary font-bold text-lg">87%</span>
                <span className="text-xs text-on-surface-variant">token cost reduction · 96% performance retained</span>
              </div>
            </div>
            <div className="mt-auto pt-6 border-t border-outline-variant/20 text-xs uppercase tracking-widest text-on-surface-variant font-semibold">
              Nov 2025 – Jan 2026
            </div>
          </div>
        </div>

        {/* Project 3: ScrollWeaver */}
        <div className="md:col-span-4 min-h-[320px] group bg-primary p-8 text-on-primary relative overflow-hidden">
          <div className="relative z-10">
            <div className="mb-4">
              <span className="px-3 py-1 bg-white/10 text-white text-[10px] uppercase tracking-widest font-semibold border border-white/20 rounded-sm">
                3rd Place @ Soul AI
              </span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 md:line-clamp-2">ScrollWeaver</h3>
            <p className="text-sm text-primary-fixed leading-relaxed mb-5">
              A multi-agent simulation engine that turns static texts — novels, worldbuilding documents, lore collections — into interactive, co-creatable living worlds.
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <div className="text-sm text-primary-fixed/90">
                <span className="font-semibold text-white">Orchestrator</span>
                <span className="text-primary-fixed"> — World director. Manages lore, schedules scenes, cues characters.</span>
              </div>
              <div className="text-sm text-primary-fixed/90">
                <span className="font-semibold text-white">Performer</span>
                <span className="text-primary-fixed"> — Character agent. Has personality, memory, and goals. Acts and evolves autonomously.</span>
              </div>
            </div>
            <a
              href="https://github.com/siruizou2005/ScrollWeaver"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pb-1 border-b border-white/40 hover:border-white transition-colors text-sm font-medium mb-6"
            >
              View Demo Project
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
            <div className="text-xs uppercase tracking-widest text-white/50 font-semibold">
              Oct 2025 – Dec 2025
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-tertiary-fixed/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Thesis Quote */}
      <section className="mt-32 py-20 border-t border-outline-variant/10">
        <div className="max-w-4xl border-l-4 border-tertiary pl-10">
          <h2 className="font-headline text-3xl md:text-4xl italic text-primary leading-snug">
            "The convergence of large-scale linguistic modeling and behavioral economics offers a
            unique window into the latent structures of human decision-making that were previously
            invisible to traditional survey methods."
          </h2>
        </div>
      </section>
    </div>
  );
}
