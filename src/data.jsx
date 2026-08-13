// 站点内容都集中在这里，改这个文件即可更新主页文字。

// 简历路径。文件名带年月，别人存下来一眼知道是哪一版。
// 更新简历时：把新 PDF 放进 public/（用新的年月命名），然后改这一行。
// 正文和左栏的 CV 链接共用这个常量，改一处即可。
export const CV_URL = "Sirui_Zou_CV_Aug2026.pdf";

export const profile = {
  nameEn: "Sirui Zou",
  nameCn: "邹思瑞",
  role: [
    "Undergraduate in Economics,",
    "Southwestern University of Finance and Economics",
  ],
  location: "Chengdu, China",
  photo: "photo.jpg", // 放到 public/ 目录下；没有照片时显示灰色占位
  links: [
    { label: "Email", href: "mailto:siruizou2005@gmail.com" },
    { label: "GitHub", href: "https://github.com/siruizou2005" },
    {
      label: "Google Scholar",
      // 去掉了原链接里的 &hl=zh-CN：那个参数会强制把 Scholar 界面切成中文，
      // 不带它则由访客自己的语言设置决定。
      href: "https://scholar.google.com/citations?user=lpaB53UAAAAJ",
    },
    { label: "CV (PDF)", href: CV_URL, newTab: true }, // 新标签页打开＝浏览器内预览
  ],
};

export const about = [
  <>
    I am a sophomore studying Economics at the Southwestern University of
    Finance and Economics (SWUFE), advised by Prof.{" "}
    <a href="https://econ.swufe.edu.cn/info/1041/1764.htm">Hong Zou</a>, Dean
    of the School of Economics. I spent Spring 2026 as a visiting student at
    UC Berkeley. Currently, I am a research intern working with{" "}
    <a href="https://kehang-zhu.github.io/">Kehang Zhu</a> (Harvard) on
    LLM-based market simulation, on a project advised by{" "}
    <a href="https://john-joseph-horton.com/">Prof. John Horton</a> (MIT
    Sloan).
  </>,
  <>
    I use computational methods to study economic questions. My main focus is
    using LLM agents to simulate economic behavior, which makes it possible to
    ask how markets, rules, and institutions shape what people do. These are
    questions that are often hard to test with human subjects alone. I have
    also worked with NLP methods on policy text, building a structured
    database of China’s consumption-promotion policies from over 5 million
    government documents.
  </>,
  <>
    I am still in the early stages of my research journey and actively
    exploring these areas. If your interests intersect with computational
    social science, LLM agents, or text-as-data, I’d love to connect. You can
    find my CV{" "}
    <a href={CV_URL} target="_blank" rel="noopener noreferrer">
      here
    </a>
    .
  </>,
];

export const education = [
  {
    org: "Southwestern University of Finance and Economics",
    role: "B.A. in Economics",
    date: "Sep 2024 – Jun 2028 (expected)",
    logo: "logos/swufe.png",
  },
  {
    org: "University of California, Berkeley",
    role: "Visiting Student",
    date: "Jan 2026 – May 2026",
    logo: "logos/berkeley.png",
  },
  {
    // 北大是主办方，国发院只是选课来源——把 NSD 放在 role 里而不是机构名里，
    // 免得被读成「国发院办的暑校」。
    org: "Peking University",
    role: "Summer School, coursework at the National School of Development",
    date: "Jul 2025 – Aug 2025",
    logo: "logos/pku.png",
  },
];

export const publications = [
  {
    title:
      "PersonaForge: Psychology-Grounded Dual-Process Architecture for " +
      "Personality-Consistent Role-Playing Agents",
    authors: (
      <>
        Jizhou Tong and <strong>Sirui Zou</strong> (equal contribution)
      </>
    ),
    venue: <em>Findings of the ACL: ACL 2026</em>,
    abstract:
      "Large Language Models excel at role-playing but struggle to maintain " +
      "consistent personalities across extended multi-turn interactions. We " +
      "propose PersonaForge, combining (1) a three-layer personality " +
      "architecture grounded in psychological theory and (2) a dual-process " +
      "generation mechanism inspired by cognitive science. We test two " +
      "falsifiable claims: Claim 1 (Orthogonality): Psychology-grounded " +
      "dimensions (Big Five + Defense Mechanisms) provide more orthogonal " +
      "constraints than natural language descriptions, reducing long-dialogue " +
      "drift. Claim 2 (Integration Necessity): High-dimensional personality " +
      "constraints create “production interference” requiring a cognitive " +
      "workspace (Inner Monologue) to resolve—removing it degrades " +
      "performance below simpler baselines. Experiments on 88 characters " +
      "demonstrate: (1) +19.4% personality consistency (PC) with human " +
      "correlation r=0.82, (2) reduced drift over 50-turn conversations " +
      "(6.3% vs. 24.8% baseline), and (3) +64.7% defense mechanism " +
      "manifestation. External validation on RoleBench confirms " +
      "generalization (73.2% win-rate, drift 8.4% vs. 20.4%). Selective " +
      "dual-process activation achieves 96% of full-system performance with " +
      "only 13.4% token overhead. Human evaluation confirms more authentic " +
      "and psychologically coherent character behaviors.",
    bibtex: `@inproceedings{tong-zou-2026-personaforge,
    title = "{P}ersona{F}orge: Psychology-Grounded Dual-Process Architecture for Personality-Consistent Role-Playing Agents",
    author = "Tong, Jizhou  and
      Zou, Sirui",
    editor = "Liakata, Maria  and
      Moreira, Viviane P.  and
      Zhang, Jiajun  and
      Jurgens, David",
    booktitle = "Findings of the {A}ssociation for {C}omputational {L}inguistics: {ACL} 2026",
    month = jul,
    year = "2026",
    address = "San Diego, California, United States",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2026.findings-acl.386/",
    doi = "10.18653/v1/2026.findings-acl.386",
    pages = "7845--7874",
    ISBN = "979-8-89176-395-1"
}`,
    // Code 链接暂不放出（仓库还在整理）。要加回来时补一条
    // { label: "Code", href: "..." } 即可，按钮会自动出现。
    links: [
      {
        label: "Paper",
        href: "https://aclanthology.org/2026.findings-acl.386/",
      },
    ],
  },
];

// 暂无在投/在写的论文。有了之后往这里加条目，
// Working Papers 板块会自动出现（数组为空时不渲染）。
export const workingPapers = [];

// 进行中的项目放这里而不是 Working Papers：后者意味着已有可外发的稿子。
// 等某个项目成稿并有了正式标题，再挪到 workingPapers。
export const experience = [
  {
    org: "Generative Market Simulation",
    desc: "Building a prediction market where LLM agents trade through the same interface a human trader would, to study which strategies emerge and how prices form.",
    role: "Supervised by Kehang Zhu (Harvard), advised by Prof. John Horton (MIT Sloan)",
    date: "Apr 2026 – Present",
  },
  {
    org: "Decoding China’s Consumption Policy",
    desc: "A two-stage text-as-data pipeline over government documents (mainly 2006–2024), measuring which policy instruments are used, at what intensity, and for whom.",
    role: "Project lead, advised by Prof. Hong Zou and Dr. Han Xiao (SWUFE)",
    date: "Jan 2026 – Present",
  },
  {
    org: "Basic Public Service Equalization and Common Prosperity",
    desc: "A city-year panel of 280 cities (2012–2024) asking whether unequal access to public services widens the urban–rural income gap.",
    role: "Research assistant, advised by Prof. Fan Wei (SWUFE)",
    date: "Jan 2026 – May 2026",
  },
];

// 只放拿了奖的两个比赛项目；CV 里的 Course Prism 不是竞赛，主页从简不列。
export const projects = [
  {
    org: "ScrollWeaver & Soulverse",
    desc: "A multi-agent engine that turns novels and worldbuilding documents into interactive, co-creatable worlds. Its personality architecture was written up as PersonaForge, our Findings of ACL 2026 paper.",
    role: "Team lead · Global 3rd Prize, 2025 Soul AI Agent Competition",
    date: "Oct 2025 – Dec 2025",
    links: [
      { label: "Code", href: "https://github.com/siruizou2005/ScrollWeaver" },
    ],
  },
  {
    org: "Magic Brush",
    desc: "An AI drawing tutor that walks children through a sketch step by step with real-time feedback.",
    role: "Bronze Prize (Top 30), Doubao × Intel “Make Ideas Real” AI App Challenge",
    date: "Nov 2025 – Dec 2025",
  },
];

export const lastUpdated = "August 2026";
