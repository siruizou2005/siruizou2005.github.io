const techStack = [
  { icon: 'terminal', name: 'Python', sub: 'PyTorch, Pandas, NumPy', featured: false },
  { icon: 'query_stats', name: 'Stata / SQL', sub: 'Econometrics', featured: false },
  { icon: 'hub', name: 'LangChain', sub: 'LLM Agents', featured: false },
  { icon: 'deployed_code', name: 'Docker', sub: 'DevOps', featured: false },
  { icon: 'code', name: 'Next.js / React', sub: 'Full-stack Web', featured: false },
  { icon: 'science', name: 'LaTeX / Git', sub: 'Research Tools', featured: true },
];

const education = [
  {
    school: 'University of California, Berkeley',
    badge: 'BGA Program',
    period: 'Jan 2026 – May 2026',
    location: 'Berkeley, CA, USA',
    degree: 'Focus: Economics & Computational Social Science',
    bullets: [
      'Core Courses: ECON141 (Econometrics), Psych C123 (Computational Models of Cognition), Challenge Lab',
    ],
    current: true,
  },
  {
    school: 'Peking University (National School of Development)',
    badge: 'Summer School',
    period: 'Jul 2025 – Aug 2025',
    location: 'Beijing, China',
    degree: 'Quantitative Finance',
    bullets: ['Grade: A+ (Top 10/150). Stochastic analysis and quantitative pricing models.'],
    current: false,
  },
  {
    school: 'Southwestern University of Finance and Economics',
    badge: 'SWUFE',
    period: 'Sep 2024 – Jun 2028',
    location: 'Chengdu, China',
    degree: 'Bachelor of Science in Economics',
    bullets: [
      'GPA: 3.9/4.0 | GRE Quant: 170/170 | GMAT FE: 655 (Top 9% Globally, Pre-enrollment)',
      'Core Courses: Macroeconomics (A+), Python (A+), Advanced Math (A), Linear Algebra (A), Probability & Statistics (A-)',
      "Scholarships: Academic Scholarship ('24, '25), Innovation & Entrepreneurship Scholarship ('24)",
    ],
    current: false,
  },
];

const research = [
  {
    title: 'PersonaForge: Role-Playing Agent Research based on Dual-Process Architecture',
    role: 'Co-first Author · Accepted to ACL 2026 Findings',
    period: 'Nov 2025 – Jan 2026',
    bullets: [
      'Designed a dual-process cognitive architecture fusing "System 1/System 2" and Big Five personality traits to build a dynamic defense mechanism addressing LLM "persona drift" in long-text simulations.',
      'Reduced persona drift by 75% and token cost by 87% (maintaining 96% performance) across 50 dialogue rounds with 88 characters.',
    ],
  },
  {
    title: 'LLM-Assisted Consumption Policy Efficacy Quantification & Evaluation',
    role: 'Research Assistant · Advisors: Prof. Hong Zou (Dean, School of Economics) & Dr. Han Xiao',
    period: 'Jan 2026 – Present',
    bullets: [
      'Developing an automated NLP pipeline using fine-tuned open-source LLMs (e.g., Qwen) to score and quantify "consumption policy" intensity across an estimated 3–5M government documents (2000–2022).',
      'Designing a multi-dimensional evaluation system to calculate macroeconomic ROI on GDP and retail sales, integrating CHFS data to measure heterogeneous impacts on household Marginal Propensity to Consume (MPC).',
    ],
  },
];

const projects = [
  {
    title: 'ScrollWeaver & Soulverse: Multi-Agent Social Simulation Engine',
    role: 'Team Lead',
    period: 'Oct 2025 – Dec 2025',
    award: 'Global 3rd Prize, 2025 Soul AI Agent Competition',
    bullets: [
      'Designed a multi-agent social simulation engine that transforms static texts (novels, worldbuilding documents, lore collections) into interactive, co-creatable living worlds.',
      'Built a LangChain-based Orchestrator-Performer architecture with FastAPI/WebSockets for real-time streaming and D3.js for dynamic maps. Empowered multi-LLM agents (GPT, Claude) via RAG, ChromaDB/SQLite memory, a 3-layer personality model, and dual-process cognitive architecture.',
    ],
  },
  {
    title: 'Course Prism: Course Evaluation & Retrieval Community',
    role: 'Private Developer',
    period: 'Mar 2025 – Jun 2025',
    award: '',
    bullets: [
      "Independently developed SWUFE's open-source course evaluation platform with interactive UI via Next.js/React and RESTful APIs using Django REST, PostgreSQL, and Redis.",
      'Configured Docker Compose, Nginx reverse proxy, and Huey async task queues for one-click containerized deployment, automated data backup, and rapid recovery.',
    ],
  },
];

export default function CV() {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      {/* Header */}
      <section className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-headline font-medium tracking-tight text-primary mb-4">
            Curriculum Vitae
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">call</span>
              +1 510-542-3302
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">mail</span>
              siruizou2005@gmail.com
            </span>
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-base">code</span>
              github.com/siruizou2005
            </span>
          </div>
        </div>
        <a
          href="/Sirui_Zou_CV.pdf"
          download
          className="flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-lg hover:-translate-y-0.5 transition-all duration-300 shadow-sm active:scale-95 group w-fit"
        >
          <span className="material-symbols-outlined">download</span>
          <span className="font-medium tracking-tight uppercase text-xs">Download PDF CV</span>
        </a>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-20">

          {/* Education */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-semibold mb-10 flex items-center gap-4">
              <span className="w-8 h-px bg-outline-variant" />
              Education
            </h2>
            <div className="space-y-12">
              {education.map((edu) => (
                <div key={edu.school} className="relative pl-8 border-l border-outline-variant">
                  <div className={`absolute -left-[5px] top-1 w-2 h-2 rounded-full ${edu.current ? 'bg-primary' : 'bg-outline'}`} />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-2">
                    <h3 className="text-xl font-headline font-medium text-primary">{edu.school}</h3>
                    <span className="text-sm font-medium text-on-surface-variant italic shrink-0">{edu.period}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between mb-3 gap-1">
                    <p className="text-on-surface-variant text-sm">{edu.degree}</p>
                    <span className="text-xs text-on-surface-variant/60">{edu.location}</span>
                  </div>
                  <ul className="space-y-1.5">
                    {edu.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
                        <span className="text-tertiary-fixed-dim shrink-0">●</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Research Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-semibold mb-10 flex items-center gap-4">
              <span className="w-8 h-px bg-outline-variant" />
              Academic & Research Experience
            </h2>
            <div className="space-y-12">
              {research.map((item) => (
                <div key={item.title} className="relative pl-8 border-l border-outline-variant">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-primary" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-2">
                    <h3 className="text-lg font-headline font-medium text-primary leading-snug">{item.title}</h3>
                    <span className="text-sm font-medium text-on-surface-variant italic shrink-0">{item.period}</span>
                  </div>
                  <p className="text-secondary font-medium text-sm mb-4">{item.role}</p>
                  <ul className="space-y-3">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
                        <span className="text-tertiary-fixed-dim shrink-0">●</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-semibold mb-10 flex items-center gap-4">
              <span className="w-8 h-px bg-outline-variant" />
              Technical & Engineering Projects
            </h2>
            <div className="space-y-12">
              {projects.map((item) => (
                <div key={item.title} className="relative pl-8 border-l border-outline-variant">
                  <div className="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-outline" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-2">
                    <h3 className="text-lg font-headline font-medium text-primary leading-snug">{item.title}</h3>
                    <span className="text-sm font-medium text-on-surface-variant italic shrink-0">{item.period}</span>
                  </div>
                  <p className="text-secondary font-medium text-sm mb-2">{item.role}</p>
                  {item.award && (
                    <span className="inline-block mb-4 text-xs font-bold text-on-secondary-container bg-secondary-container px-3 py-1 rounded-full">
                      {item.award}
                    </span>
                  )}
                  <ul className="space-y-3">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
                        <span className="text-tertiary-fixed-dim shrink-0">●</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-4 space-y-12">
          {/* Tech Stack */}
          <div className="bg-surface-container-lowest border border-outline-variant/20 p-8 rounded-xl">
            <h2 className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-semibold mb-8">
              Technical Stack
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {techStack.map(({ icon, name, sub, featured }) => (
                <div
                  key={name}
                  className={`p-4 rounded-lg flex flex-col gap-3 transition-colors ${
                    featured ? 'bg-primary' : 'bg-surface hover:bg-surface-container-high'
                  }`}
                >
                  <span className={`material-symbols-outlined ${featured ? 'text-on-primary' : 'text-primary'}`}>
                    {icon}
                  </span>
                  <span className={`text-sm font-semibold ${featured ? 'text-on-primary' : 'text-primary'}`}>
                    {name}
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider ${featured ? 'text-primary-fixed' : 'text-on-surface-variant'}`}>
                    {sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="p-8 border-l border-outline-variant/40 space-y-6">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Location</h4>
              <p className="text-sm font-medium text-primary">Berkeley, CA / Chengdu, China</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Languages</h4>
              <p className="text-sm font-medium text-primary">English (IELTS 7.0)</p>
              <p className="text-sm font-medium text-primary">Mandarin (Native)</p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {['Computational Social Science', 'Economics', 'NLP', 'LLM Agents'].map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-surface-container-low border border-outline-variant/20 text-on-surface-variant">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">GRE / GMAT</h4>
              <p className="text-sm font-medium text-primary">GRE Quant: 170/170</p>
              <p className="text-sm font-medium text-primary">GMAT FE: 655 (Top 9% Globally)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
