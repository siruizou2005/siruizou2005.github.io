import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Blog() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filtered = posts.filter(
    (p) =>
      !p.hidden &&
      (p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()))
  );

  const handlePostClick = (id: number, hasContent: boolean) => {
    if (hasContent) navigate(`/blog/${id}`);
  };

  return (
    <div className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="font-body text-[0.75rem] uppercase tracking-widest font-medium text-on-surface-variant mb-4 block">
            Personal Journal &amp; Technical Notes
          </span>
          <h1 className="font-headline font-light tracking-tight text-6xl md:text-7xl text-primary leading-[1.1]">
            Archives &amp; <br />
            <i className="font-normal">Insights</i>
          </h1>
        </div>
        <div className="flex flex-wrap gap-3 pb-2">
          {['Economics', 'LLM', 'Social Science'].map((tag, i) => (
            <span
              key={tag}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide ${
                i === 0
                  ? 'bg-secondary-fixed text-on-secondary-fixed'
                  : 'bg-surface-container-high text-on-surface-variant'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Search Bar */}
      <div className="mb-16 border-b border-outline-variant/20 pb-4 flex items-center gap-4">
        <span className="material-symbols-outlined text-outline">search</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Explore thoughts, research notes, and reflections..."
          className="w-full bg-transparent border-none focus:ring-0 text-primary font-headline italic text-xl placeholder:text-outline/50 outline-none"
        />
      </div>

      {/* Blog Feed */}
      <div className="space-y-0">
        {filtered.length === 0 && (
          <p className="text-on-surface-variant py-12 font-headline italic text-xl">
            No posts match your search.
          </p>
        )}
        {filtered.map((post) => {
          const hasContent = !!post.content;
          return (
            <article
              key={post.id}
              onClick={() => handlePostClick(post.id, hasContent)}
              className={`group py-12 border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors duration-500 -mx-6 md:-mx-12 px-6 md:px-12 ${hasContent ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className="flex flex-col md:grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <time className="font-body text-[0.7rem] uppercase tracking-widest font-semibold text-outline">
                    {post.date}
                  </time>
                </div>
                <div className="md:col-span-7">
                  <span
                    className={`inline-block px-2 py-0.5 mb-4 rounded text-[0.65rem] uppercase font-bold tracking-tighter ${post.categoryBg}`}
                  >
                    {post.category}
                  </span>
                  <h2 className="font-headline text-3xl md:text-4xl text-primary leading-tight group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-on-surface-variant font-light leading-relaxed max-w-xl">
                    {post.excerpt}
                  </p>
                  {hasContent && (
                    <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-medium uppercase tracking-widest text-primary flex items-center gap-2">
                        Read Essay{' '}
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </span>
                    </div>
                  )}
                </div>
                {post.image && (
                  <div className="md:col-span-3 hidden md:block overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700 aspect-video md:aspect-square">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Newsletter CTA — hidden until email service is configured */}
      {false && (
      <section className="mt-32 p-16 md:p-24 bg-[#f8f9fa] border border-outline-variant/10 rounded-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h3 className="font-headline text-4xl md:text-5xl text-[#003262] mb-6 leading-tight">
            Stay informed on <i className="font-normal">emerging research</i>.
          </h3>
          <p className="text-on-surface-variant text-lg mb-12 leading-relaxed font-light font-body">
            I occasionally send out summaries of new working papers and technical notes on AI and
            socio-economics.
          </p>
          <form
            className="flex border-b border-[#003262]/30 pb-3 max-w-md group focus-within:border-[#003262] transition-colors"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="email address"
              className="bg-transparent border-none focus:ring-0 w-full placeholder:text-outline/40 placeholder:font-light italic font-headline text-xl p-0 px-1 outline-none text-primary"
            />
            <button
              type="submit"
              className="material-symbols-outlined text-[#003262] hover:translate-x-1 transition-transform"
            >
              arrow_forward
            </button>
          </form>
        </div>
        <div className="absolute right-[-5%] top-[-10%] w-80 h-80 border-[0.5px] border-[#003262]/5 rounded-full pointer-events-none" />
        <div className="absolute right-[-10%] bottom-[-20%] w-[500px] h-[500px] border-[0.5px] border-[#003262]/5 rounded-full pointer-events-none" />
      </section>
      )}
    </div>
  );
}
