export default function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200/60 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-12 w-full gap-6 max-w-7xl mx-auto">
        <div>
          <p className="font-headline text-lg text-[#003262] mb-1">Sirui Zou</p>
          <p className="text-[#003262]/50 font-body text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Sirui Zou · UC Berkeley · Intellectual Modernism
          </p>
        </div>
        <div className="flex items-center gap-8">
          {[
            { label: 'Contact', href: 'mailto:siruizou2005@gmail.com' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siruizou' },
            { label: 'Scholar', href: '#' },
            { label: 'GitHub', href: 'https://github.com/siruizou2005' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-slate-400 hover:text-[#003262] underline decoration-amber-400/40 underline-offset-4 transition-colors duration-200 text-xs uppercase tracking-widest font-body"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
