import { useParams, Link, useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post || !post.content) {
    return (
      <div className="pt-40 pb-24 px-6 md:px-12 max-w-3xl mx-auto text-center">
        <p className="text-on-surface-variant text-lg mb-8">Post not found.</p>
        <Link to="/blog" className="text-primary underline">Back to Blog</Link>
      </div>
    );
  }

  const sections = post.content;
  const bodySections = sections.filter((s) => s.heading !== 'References');
  const references = sections.find((s) => s.heading === 'References');

  return (
    <div className="pt-40 pb-32 px-6 md:px-12 max-w-3xl mx-auto">
      {/* Back */}
      <button
        onClick={() => navigate('/blog')}
        className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-on-surface-variant hover:text-primary transition-colors mb-16"
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Blog
      </button>

      {/* Header */}
      <header className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className={`px-2 py-0.5 rounded text-[0.65rem] uppercase font-bold tracking-tighter ${post.categoryBg}`}>
            {post.category}
          </span>
          <time className="text-[0.7rem] uppercase tracking-widest font-semibold text-outline">
            {post.date}
          </time>
        </div>
        <h1 className="font-headline text-4xl md:text-5xl text-primary leading-tight">
          {post.title}
        </h1>
        <div className="mt-8 h-px bg-outline-variant/20" />
      </header>

      {/* Body */}
      <article className="space-y-10">
        {bodySections.map((section, i) => (
          <div key={i}>
            {section.heading && (
              <h2 className="font-headline text-2xl text-primary font-semibold mb-4">
                {section.heading}
              </h2>
            )}
            {section.body && (
              <p className="text-on-surface-variant leading-relaxed text-[1.05rem]">
                {section.body}
              </p>
            )}
          </div>
        ))}
      </article>

      {/* References */}
      {references && references.items && (
        <div className="mt-20 pt-10 border-t border-outline-variant/20">
          <h2 className="font-headline text-lg text-primary font-semibold mb-6">References</h2>
          <ol className="space-y-3">
            {references.items.map((ref, i) => (
              <li key={i} className="flex gap-3 text-sm text-on-surface-variant leading-relaxed">
                <span className="shrink-0 text-outline font-medium">[{i + 1}]</span>
                <span>{ref}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
