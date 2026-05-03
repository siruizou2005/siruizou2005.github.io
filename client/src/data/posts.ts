export interface Post {
  id: number;
  date: string;
  category: string;
  categoryBg: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  content?: Section[];
  hidden?: boolean;
}

export interface Section {
  heading?: string;
  body: string;
  items?: string[];
}

export const posts: Post[] = [
  {
    id: 4,
    date: 'March 2026',
    category: 'Literature Review',
    categoryBg: 'bg-secondary-container/30 text-on-secondary-container',
    title: 'LLM-Driven Simulation of Economic Behavior: Two Paradigms, One Calibration Problem',
    excerpt:
      'A structured review of the emerging literature on using LLMs to simulate economic agents. The field splits into two trajectories — questionnaire respondents and interactive multi-agent environments — and both converge on the same unresolved challenge: calibration.',
    image: '',
    imageAlt: '',
    content: [
      {
        body: 'The literature on LLM-driven simulation of economic behavior has grown rapidly over the past two years, and reading through it this week I found that it organizes more cleanly than it might first appear. Two distinct research trajectories have emerged, differing substantially in method and empirical focus, yet ultimately converging on a single unresolved problem: how to calibrate LLM agents so their behavioral distributions stay aligned with real population heterogeneity.',
      },
      {
        heading: 'Trajectory One: The Questionnaire Paradigm (Homo Silicus)',
        body: 'The first trajectory begins from a deceptively simple proposition: LLMs trained on large-scale human-generated text are not just text generators but implicit computational models of human behavior. Horton (2023) formalizes this as the "Homo Silicus" framework — just as economists historically simplified agents into "Homo economicus," we can now assign LLM agents endowments, preferences, and information conditions and observe the resulting behavioral outputs under controlled prompts.',
      },
      {
        body: 'The key empirical question this opens is whether LLMs can reproduce the distributional properties of human survey data — not whether any single response is plausible, but whether the shape of the response distribution matches. Brand et al. (2023) provide an early positive result in market research: willingness-to-pay estimates from batch GPT responses align closely with findings from real human studies. But there\'s a catch — directly prompting LLMs to produce Likert-scale values introduces distributional distortions. Maier et al. (2025) address this with the Semantic Similarity Rating (SSR) method, which first elicits open-text responses then maps them to a Likert distribution via embedding similarity, achieving 90% human test-retest reliability and KS similarity above 0.85 on a consumer-goods dataset.',
      },
      {
        body: 'Manning et al. (2024) push furthest in this paradigm with the "Automated Social Science" framework, using structural causal models to assign LLMs a dual role: both the scientist who proposes causal hypotheses and designs experiments, and the subject who populates the simulated world. This is methodologically elegant, but the paradigm\'s ceiling is visible: it still treats the model primarily as an advanced survey respondent. Economic behavior unfolds through repeated adjustment under feedback and strategic interdependence — dynamics a questionnaire design structurally cannot capture.',
      },
      {
        heading: 'Trajectory Two: The Interactive Paradigm (Micro to Macro Emergence)',
        body: 'The second trajectory places LLM agents inside multi-period, multi-agent environments and asks whether macro-level phenomena can emerge from local decisions. The architectural foundation is Park et al. (2023)\'s Generative Agents, which equips agents with memory and personality systems and shows that spontaneous social behaviors — party organization, companionship — emerge in the "Smallville" virtual environment. Not an economics paper, but it provides the template for everything that follows.',
      },
      {
        body: 'Within economics, Li et al. (2024)\'s EconAgent marks the critical translation. By giving household and firm agents perception, memory, and reflection modules, the system reproduces inflation and unemployment dynamics in labor and consumer markets — a meaningful advance over rule-based and RL baselines. Morishita et al.\'s EconGrowthAgent extends this to the central question of growth theory: in simulations of 100 agents over 25 years, GDP growth trajectories emerge. But there is a methodological issue worth scrutinizing — growth outcomes depend not only on agent decisions but on built-in mechanisms like the Solow growth equation. It becomes hard to separate what emerges from agents versus what was already embedded in the equation structure.',
      },
      {
        body: 'TwinMarket (Yang et al., 2025) offers a cleaner demonstration. In a financial market setting, LLM agents exchange information and propagate sentiment through a social-media-like environment; individual decisions aggregate into bubbles, crashes, volatility clustering, and fat-tailed return distributions — all generated endogenously through interaction rather than imposed externally. The BDI (Belief-Desire-Intention) cognitive framework makes the attribution of emergence to agent behavior more explicit.',
      },
      {
        body: 'Two more recent papers extend the scale and rigor of this paradigm. AgentSociety (Piao et al., 2025) generates over five million interactions across 10,000+ agents, reproducing political polarization, inflammatory information diffusion, and Universal Basic Income effects — suggesting LLM simulation may eventually support not just ABM but traditional social-scientific methods like surveys and policy interventions. Shachi (Kuroki et al., 2025) trades scale for rigor, decomposing agent strategy into Configuration, Memory, Tools, and the LLM Inference Engine to enable systematic attribution of outcomes to architectural choices. LLM Economist (Karten et al., 2025) connects this to mechanism design by fitting agent skill distributions to ACS census microdata inside an optimal-taxation environment — showing a concrete pathway toward grounding generative simulation in real empirical data.',
      },
      {
        heading: 'The Common Challenge: Calibration',
        body: 'Despite their differences, both trajectories face the same fundamental problem. Uncalibrated LLMs tend to produce an "average human" profile, compressing meaningful variation across income, education, and risk preference. In the questionnaire paradigm, the typical fix is demographic reweighting — Horton (2023) shows this substantially narrows the gap between simulated and human survey responses. In the interactive paradigm, calibration appears at initialization: EconGrowthAgent samples wages from an empirical distribution; LLM Economist fits skill distributions to census data.',
      },
      {
        body: 'The problem is that both approaches largely stop at initialization. They ensure agent attributes look plausible at the start but provide no framework for continuously evaluating whether behavioral distributions remain aligned with real data as the simulation evolves. This is the gap: the transition from initial variable fitting to deep, ongoing distributional calibration. No existing paper provides a principled benchmark for this. That methodological void is where I think the most important work in this space needs to happen next — and it is, not coincidentally, the focal concern of my current research.',
      },
      {
        heading: 'References',
        body: '',
        items: [
          'Brand, J., Israeli, A., & Ngwe, D. (2023). Using LLMs for market research. Harvard Business School Marketing Unit Working Paper (23-062).',
          'Horton, J. J. (2023). Large language models as simulated economic agents: What can we learn from homo silicus? NBER Technical Report.',
          'Karten, S., Li, W., Ding, Z., Kleiner, S., Bai, Y., & Jin, C. (2025). LLM Economist: Large population models and mechanism design in multi-agent generative simulacra. arXiv:2507.15815.',
          'Kuroki, S., Tian, Y., Misaki, K., Ikegami, T., Akiba, T., & Tang, Y. (2025). Reimagining agent-based modeling with large language model agents via Shachi. arXiv:2509.21862.',
          'Li, N., Gao, C., Li, M., Li, Y., & Liao, Q. (2024). EconAgent: Large language model-empowered agents for simulating macroeconomic activities. ACL 2024.',
          'Maier, B. F., et al. (2025). LLMs reproduce human purchase intent via semantic similarity elicitation of Likert ratings. arXiv:2510.08338.',
          'Manning, B. S., Zhu, K., & Horton, J. J. (2024). Automated social science: Language models as scientist and subjects. NBER Technical Report.',
          'Morishita, T., Yamaguchi, A., Tsunokake, M., Morio, G., & Sogawa, Y. EconGrowthAgent: Economic growth simulation based on LLM agents and growth theory.',
          'Park, J. S., O\'Brien, J., Cai, C. J., Morris, M. R., Liang, P., & Bernstein, M. S. (2023). Generative agents: Interactive simulacra of human behavior. UIST 2023.',
          'Piao, J., et al. (2025). AgentSociety: Large-scale simulation of LLM-driven generative agents advances understanding of human behaviors and society.',
          'Yang, Y., Zhang, Y., Wu, M., Zhang, K., Zhang, Y., Yu, H., Hu, Y., & Wang, B. (2025). TwinMarket: A scalable behavioral and social simulation for financial markets. arXiv:2502.01506.',
        ],
      },
    ],
  },
  {
    id: 1,
    hidden: true,
    date: 'October 2023',
    category: 'AI/Economics',
    categoryBg: 'bg-secondary-container/30 text-on-secondary-container',
    title: 'Simulating Human Behavior: Reflections on the Homo Silicus Framework',
    excerpt:
      'An examination of how large language models can act as representative agents in economic simulations, exploring both the structural potential and the inherent biases of silicon-based subjects.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0uvKOCmsnCMvAKdx9tTS8pZ0cuXJtO-ooGk0z1ndI5EfV7iZFxr5qZIDoOEbcKzovFc0czRC2MwwVZKw0AnhzuazP24KjmxdLZUhp4ZzQU0QcSNjZy1vjEx2YSd4lhSwETTrr09AoT4MWT-r_pHNPvzYk2wqoC_heW8GTnmWulcyG0Ee_SpaPY0fVZpVp1a9Eiuo1m8CJ0DGCTXH4SKXPIbpkI4kk7B_6AH6KyKsoOEq-G4FJPJ0914ClZ7Ke_UQ6efuTUtnIUBA',
    imageAlt: 'Vintage mechanical calculator next to modern processor',
  },
  {
    id: 2,
    hidden: true,
    date: 'August 2023',
    category: 'Academic Life',
    categoryBg: 'bg-tertiary-fixed text-on-tertiary-fixed-variant',
    title: 'From SWUFE to Berkeley: Navigating the BGA Program',
    excerpt:
      'Reflecting on the trans-Pacific journey of scholarship, adapting to the intellectual rigor of Berkeley while maintaining the foundational perspectives from the Southwestern University of Finance and Economics.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuADuj4D4h4ncdo9X9AQcvJDkBENCY0HKxLf_uT7HlJDPbebThvJyXeefNd1dTiQ7hXNf9_6n5tH0wej4e7jwQGH5HwBdcdyY8U5RHut53HQRzqwhSxudAzTeJJKS1llh-VIc2OmtHTaI1KZjLVc-GyRy3XDW1Hz8-V9xoBa2CVgMhR7L-MJ-B-ANAQenBvwNN7j_kxJv4fJWa_1TEBMpzlFFez1JLrfSpQnylYoEgIWqpcgpPwl12jLXZWfMDtQolesLFU',
    imageAlt: 'Sather Tower at UC Berkeley',
  },
  {
    id: 3,
    hidden: true,
    date: 'June 2023',
    category: 'NLP',
    categoryBg: 'bg-secondary-container/30 text-on-secondary-container',
    title: 'Large Scale NLP for Policy Analysis: Methods and Challenges',
    excerpt:
      'A technical deep-dive into extracting legislative intent and policy shifts from massive corpora using state-of-the-art transformer architectures.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBgOXBB-dbHKSpMfkcaEsPats17vrs65o53JXFkNh4DtD1-2mmzQXxs_gZCNK2gFzD8gmt7-wvI4tSN0qTrxaX3DnJ3pi-t3CFl-SS-iarfjMRvmrcA3UTSf3nZvgZJ0a2PTxuEEcjqcY-4I9vyBKyZk12MhOIKDb6TWwRRlI7J2WT1Qx-H63cYHtpIDTcPpXJtRYO4qBgGRe-dqtmGWjfd6BX1UmBTZDekvUtHtrOBtDHas1luYN-0ONfLBqVFYtN-zCOy-ZwD8',
    imageAlt: 'Abstract digital data node visualization',
  },
];
