import { useState } from "react";
import {
  profile,
  about,
  education,
  publications,
  workingPapers,
  experience,
  projects,
  lastUpdated,
} from "./data.jsx";

function Sidebar() {
  return (
    <aside>
      <div className="avatar-wrap">
        <img
          className="avatar"
          src={profile.photo}
          alt={`Portrait of ${profile.nameEn}`}
          onError={(e) => e.currentTarget.removeAttribute("src")}
        />
      </div>
      <div>
        <h2 className="side-name">{profile.nameEn}</h2>
        <p className="side-role muted">
          {profile.role.map((line, i) => (
            <span key={i}>
              {line}
              {i < profile.role.length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
      <div className="side-links">
        <span className="muted">{profile.location}</span>
        {profile.links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.newTab && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {l.label}
          </a>
        ))}
      </div>
    </aside>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h2>{title}</h2>
      <hr />
      {children}
    </section>
  );
}

// Education 和 Research Experience 共用：可选校徽在左，机构名和角色居中，
// 日期右对齐成一列。两个板块用同一个组件，排版不会走样。
function EntryList({ items }) {
  const withLogo = items.some((e) => e.logo);
  return (
    <div className={"entries" + (withLogo ? " has-logo" : "")}>
      {items.map((e) => (
        <div className="entry" key={e.org}>
          {withLogo && (
            <span className="entry-logo">
              {e.logo && <img src={e.logo} alt="" />}
            </span>
          )}
          <div>
            <p className="entry-org">
              <strong>{e.org}</strong>
            </p>
            {/* 描述在前、指导老师在后：先让人知道这是什么，再交代由谁指导 */}
            {e.desc && <p className="entry-desc">{e.desc}</p>}
            {/* 链接接在角色行末尾，用「·」分隔，避免单个按钮孤零零占一行 */}
            {(e.role || e.links?.length > 0) && (
              <p className="entry-role muted">
                {e.role}
                {e.links?.map((l, i) => (
                  <span key={l.label}>
                    {(e.role || i > 0) && " · "}
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label}
                    </a>
                  </span>
                ))}
              </p>
            )}
          </div>
          <span className="entry-date muted-2">{e.date}</span>
        </div>
      ))}
    </div>
  );
}

// 论文条目：标题 / 作者 / 出处，下面一排方框按钮。
// Abstract 和 BibTeX 就地展开，Paper、Code 直接跳外链。
function PubItem({ title, authors, venue, abstract, bibtex, links = [], meta }) {
  const [open, setOpen] = useState(null); // 'abstract' | 'bibtex' | null
  const [copied, setCopied] = useState(false);
  const toggle = (k) => setOpen((cur) => (cur === k ? null : k));

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false); // 剪贴板不可用时静默失败，文本仍可手动选中
    }
  };

  return (
    <div className="pub">
      <p className="pub-title">
        <strong>{title}</strong>
      </p>
      {authors && <p className="pub-meta muted">{authors}</p>}
      {venue && <p className="pub-venue">{venue}</p>}
      {meta && <p className="pub-meta muted">{meta}</p>}

      {(abstract || bibtex || links.length > 0) && (
        <div className="pub-actions">
          {abstract && (
            <button
              type="button"
              className={"pill" + (open === "abstract" ? " is-open" : "")}
              aria-expanded={open === "abstract"}
              onClick={() => toggle("abstract")}
            >
              Abstract
            </button>
          )}
          {links.map((l) => (
            <a
              key={l.label}
              className="pill"
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label}
            </a>
          ))}
          {bibtex && (
            <button
              type="button"
              className={"pill" + (open === "bibtex" ? " is-open" : "")}
              aria-expanded={open === "bibtex"}
              onClick={() => toggle("bibtex")}
            >
              BibTeX
            </button>
          )}
        </div>
      )}

      {open === "abstract" && <div className="pub-panel">{abstract}</div>}
      {open === "bibtex" && (
        <div className="pub-panel">
          <button type="button" className="pill pill-copy" onClick={copyBibtex}>
            {copied ? "Copied" : "Copy"}
          </button>
          <pre>{bibtex}</pre>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* 通栏姓名栏：细线 full-bleed 横跨视口，标题与下方内容左对齐 */}
      <header className="site-header">
        <h1>
          {profile.nameEn} <span className="cn">{profile.nameCn}</span>
        </h1>
      </header>

      <div className="page">
        <Sidebar />

        <main>
          <Section id="about" title="About Me">
            <div className="prose">
              {about.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </Section>

          <Section id="education" title="Education">
            <EntryList items={education} />
          </Section>

          <Section id="publications" title="Publications">
            {publications.map((p) => (
              <PubItem key={p.title} {...p} />
            ))}
          </Section>

          {workingPapers.length > 0 && (
            <Section id="working-papers" title="Working Papers">
              {workingPapers.map((p) => (
                <PubItem key={p.title} {...p} />
              ))}
            </Section>
          )}

          <Section id="experience" title="Research Experience">
            <EntryList items={experience} />
          </Section>

          <Section id="projects" title="Projects">
            <EntryList items={projects} />
          </Section>

          <footer>Last updated {lastUpdated}</footer>
        </main>
      </div>
    </>
  );
}
