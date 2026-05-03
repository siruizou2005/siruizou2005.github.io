import { Link } from 'react-router-dom';

const updates = [
  {
    date: 'April 2026',
    title: 'ACL 2026 Findings — PersonaForge Accepted',
    body: 'Co-first author. PersonaForge accepted to ACL 2026 Findings.',
  },
  {
    date: 'Spring 2026',
    title: 'UC Berkeley — Visiting Student',
    body: 'Visiting Student at UC Berkeley via the BGA Program.',
  },
  {
    date: 'Fall 2025',
    title: 'Soul AI Contest — Global 3rd Place',
    body: 'Awarded 3rd place globally with ScrollWeaver.',
  },
];

const researchAreas = [
  {
    icon: 'groups',
    label: 'Computational Social Science',
    desc: 'Benchmarking LLMs as simulated survey respondents against household microdata (CHFS).',
  },
  {
    icon: 'bar_chart',
    label: 'NLP × Economics',
    desc: 'Measuring policy signals and institutional behavior from large-scale administrative text.',
  },
  {
    icon: 'psychology',
    label: 'LLM Agent Simulation',
    desc: 'Scalable persona generation and multi-agent social simulation grounded in real behavioral data.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section — full viewport, centered */}
      <section className="min-h-screen flex items-center px-6 md:px-10 lg:px-16 pt-28 lg:pt-20 pb-16 lg:pb-0">
        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Left: Identity — top group up top, CTA group pinned to bottom */}
          <div className="flex flex-col py-4 lg:justify-between gap-10">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 bg-secondary-fixed text-on-secondary-fixed text-xs uppercase tracking-widest font-bold rounded-full whitespace-nowrap">
                  SWUFE · UC Berkeley BGA Program
                </span>
              </div>

              {/* Headline row: name left, portrait right on mobile */}
              <div className="flex items-start justify-between gap-4">
                <h1
                  className="serif-headline font-bold text-primary tracking-tighter leading-[0.86]"
                  style={{ fontSize: 'clamp(4rem, 8.5vw, 10rem)' }}
                >
                  Sirui <br />
                  <span className="italic text-primary/80">Zou.</span>
                </h1>
                {/* Portrait — mobile only, floated to right of headline */}
                <div
                  className="lg:hidden w-24 h-24 rounded-full overflow-hidden shrink-0 mt-1"
                  style={{ boxShadow: '0 6px 20px -8px rgba(0, 29, 61, 0.22)' }}
                >
                  <img
                    src="/avatar.jpg"
                    alt="Portrait of Sirui Zou"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
              </div>

              <p className="text-on-surface-variant text-base leading-relaxed max-w-xl">
                2nd-year undergrad at SWUFE · Visiting Student at UC Berkeley (BGA Program).
                Researching on LLM agent simulation and NLP × economics.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Computational Social Science', 'LLM Agent Simulation', 'NLP × Economics'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-on-surface-variant text-sm font-medium rounded-full border border-outline-variant/40 bg-surface-container"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-5 flex-wrap">
                <Link
                  to="/research"
                  className="group flex items-center gap-2 bg-primary text-on-primary px-7 py-3 rounded-lg text-base font-medium transition-all hover:-translate-y-0.5 active:scale-95"
                >
                  View Research
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
                <Link
                  to="/cv"
                  className="text-primary text-base font-semibold border-b border-primary/20 pb-0.5 hover:border-primary transition-all"
                >
                  Download CV
                </Link>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href="mailto:siruizou2005@gmail.com"
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-base">mail</span>
                  Email
                </a>
                <a
                  href="https://github.com/siruizou2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-base">code</span>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/siruizou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-base">people</span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right: portrait + Recent Updates — bottom-aligned with the left column */}
          <div className="flex flex-col gap-6 py-4 lg:items-center lg:justify-end">
            {/* Portrait — desktop only */}
            <div
              className="hidden lg:block w-80 h-80 rounded-full overflow-hidden shrink-0"
              style={{ boxShadow: '0 12px 40px -16px rgba(0, 29, 61, 0.22)' }}
            >
              <img
                src="/avatar.jpg"
                alt="Portrait of Sirui Zou"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>

            {/* Recent Updates */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Recent Updates
              </h3>
              <div className="flex flex-col gap-4">
                {updates.map((u) => (
                  <div key={u.title} className="flex gap-3">
                    <div className="w-0.5 shrink-0 bg-amber-400 rounded-full" />
                    <div>
                      <span className="text-[11px] font-medium text-on-surface-variant/50 uppercase tracking-widest block mb-0.5">
                        {u.date}
                      </span>
                      <h4 className="text-sm font-semibold text-primary leading-snug mb-1">
                        {u.title}
                      </h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{u.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/cv"
                className="self-start flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-primary border border-primary/30 px-4 py-2 rounded hover:bg-primary hover:text-on-primary transition-all group"
              >
                Full Timeline
                <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About & Research Areas Section */}
      <section className="px-8 md:px-12 lg:px-24 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
          {/* About Content + Quote */}
          <div className="lg:col-span-7">
            <h2 className="serif-headline text-4xl font-bold text-primary mb-8 border-l-4 border-tertiary-fixed-dim pl-6">
              Research &amp; Collaboration
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                Based at <span className="text-primary font-medium">SWUFE</span> and currently a
                Visiting Student at <span className="text-primary font-medium">UC Berkeley</span>{' '}
                via the BGA Program, my work sits at the intersection of{' '}
                <span className="text-primary font-medium">natural language processing and empirical economics</span>.
                I specialize in LLM-based agent and persona systems, with a focus on how language
                models can serve as proxies for human behavior in structured social contexts.
              </p>
              <p>
                My current research investigates whether large language models can faithfully
                replicate the distributional responses of real survey populations — benchmarked
                against household microdata from{' '}
                <span className="text-primary font-medium">CHFS</span> — and what systematic biases
                emerge when they fail to do so. A parallel line of work develops multi-agent persona
                frameworks for scalable social simulation.
              </p>
            </div>

            {/* Pull Quote */}
            <div className="mt-12 p-8 bg-surface-container-low relative overflow-hidden">
              <div className="relative z-10">
                <span className="serif-headline text-tertiary-fixed-dim leading-none mb-2 block" style={{ fontSize: '4rem' }}>&ldquo;</span>
                <p className="serif-headline text-2xl text-primary leading-snug mb-3">
                  A life of consistent effort, never slackening. The small accumulations of each day will determine the final outcome.
                </p>
                <p className="text-sm text-on-surface-variant/40 leading-relaxed mb-4">
                  一以贯之的努力，不得懈怠的人生。每天的微小积累会决定最终结果。
                </p>
                <p className="text-sm text-on-surface-variant/70 tracking-wide">— The Heart of Genius · 《天才基本法》</p>
              </div>
            </div>
          </div>

          {/* Research Areas */}
          <aside className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4 justify-start pt-2">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/50 mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/40" />
              Research Areas
            </h3>
            {researchAreas.map((area) => (
              <div
                key={area.label}
                className="p-5 border border-outline-variant/20 bg-white hover:bg-surface-container-low transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-symbols-outlined text-primary/60 text-xl">
                    {area.icon}
                  </span>
                  <h4 className="text-base font-semibold text-primary">{area.label}</h4>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{area.desc}</p>
              </div>
            ))}
            <Link
              to="/research"
              className="mt-2 self-start flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30 px-4 py-2 rounded hover:bg-primary hover:text-on-primary transition-all group"
            >
              View All Research
              <span className="material-symbols-outlined text-sm group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}
