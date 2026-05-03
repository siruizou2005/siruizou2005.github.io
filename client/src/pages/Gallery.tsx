import { useState } from 'react';

const coastPhotos = [
  {
    id: 1,
    span: 'md:col-span-8',
    aspect: 'aspect-[16/9]',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUqrgEOGqKOAXsA7DnkO_tSkzdyqTFD7ApW4vo0vU3p9K7L1uEhfc9sL6772eLCtY5iZtw0lJ3L9nQCBVV2FBeY1OGbFJpiBjLmxR3LIYnndZaipm3Nv96JB3pcoRSeZEsoOZv-VpIsUH3GSoJgbf2HMjVS9OFaqqftAwvqw9s60Tg54Q7z4b4R0G6ZQLsIV586OryH6ppIrIMUi_fpWQ2mDL9XYMdrchGbNci0KEwY_pe9QhwA01LVyL940U3rowCjoOnUJI0I7g',
    alt: 'Big Sur Cliffs',
    label: 'Big Sur, California',
  },
  {
    id: 2,
    span: 'md:col-span-4',
    aspect: 'aspect-square md:aspect-auto',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUhfA2d6V7TeiqBFpXfoaqPRQZIewcq8SLiC57-Gy9iHDAubH5uRcXGFHzt_t2OcLocjbYU4ejJOsKICrGB9i5LhaXC2Xg7TM1khaC8ebn_Od1myEkUdFTcy352OY8h1EkcB9RdTJ0voq4R8F5vXlzFCFs6_pt6bTVb13YnmY4TMyewox-ZVao7rW6yoMG6BPxFCQ26oQs9W2P_cTwWwEIpmAQTjr_GEjcqrZ0MbtZ6y6mghtdRW3Etd9ZZYhPneNYILQhOgvi4_g',
    alt: 'Coastal Wildflowers',
    label: 'Flora at Point Reyes',
  },
  {
    id: 3,
    span: 'md:col-span-4',
    aspect: 'aspect-[4/5]',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDK2o0J3h4pL4WG8TIETUGpMRIL8r2WbWzYvj__VddgCIy5tS2JpBIi0cPvF8fvOj4AirXn8nrRajLiypXR5VzytmBHKRzgQbKq0p30p1CeBoMzvMzKzW9yiTmPcVC_1I299rM_UDzJ0rzhXNafkC02FwSL18Cq1tTGN0Oe76Fi7KrcT-CO5DvfqvGv12ZuzkUNLTaTzRJvqLwAYRhy0iIpkDFhnBCLXr2a-FLCUtB-cZJXjA_Ukz7EY86lswmymR5cn12PNbYtVmM',
    alt: 'Coastal Fog',
    label: 'Marin Headlands',
  },
  {
    id: 4,
    span: 'md:col-span-8',
    aspect: 'aspect-[16/9]',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJXow2EpZk-BHL4-QwfmCMYHEfOQcFxq2j1KR5mZZA7ydbJhk2edYD8BuMVdCo25xfN8OXmcBzA1Nlv8VM079IaWDI1nnt3IeYGost-G9JnAGyWV2KM46zdysaWlCCjzU0E46oaRK_6jSWYDracPSE1p2U0THZNrbHYI_LYqj1vILXe-G-WNtebVxDYDyMkyWXVJHko-1LjX0fO1vxA6cixpG6QsRZe3uwuh8RQ6jYlb8JsT0jDmYXVJre9oyTqgOHaoqpBxACio8',
    alt: 'Pacific Sunset',
    label: 'Solitude at Sunset',
  },
];

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function Gallery() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto">
      {/* Hero */}
      <header className="mb-24 md:flex items-end justify-between gap-12">
        <div className="max-w-2xl">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-on-surface-variant mb-6 block">
            Curated Perspectives
          </span>
          <h1 className="font-headline text-6xl md:text-8xl text-primary leading-[0.9] mb-8">
            Beyond <br />
            <span className="italic font-normal">the Lab</span>
          </h1>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed font-light">
            A visual diary exploring the intersection of rigorous research and the stillness of the
            California coast. From morning laps at Spieker Pool to the golden hour on Highway 1.
          </p>
        </div>
        <div className="hidden md:block pb-4 text-right mt-8 md:mt-0">
          <div className="inline-flex items-center gap-3 py-2 px-4 bg-surface-container-low rounded-full border border-outline-variant/20">
            <span
              className="material-symbols-outlined text-tertiary-fixed-dim"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-label text-[10px] uppercase tracking-widest text-primary">
              Globalist Selection
            </span>
          </div>
        </div>
      </header>

      {/* California Coast Gallery */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="font-headline text-3xl text-primary">California Coast Travels</h2>
          <div className="h-px flex-grow bg-outline-variant/30" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {coastPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`${photo.span} group relative overflow-hidden bg-surface-container-low ${photo.aspect}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/20 transition-all duration-500" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="font-label text-xs uppercase tracking-widest">{photo.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="mb-32 max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl mb-8">
            format_quote
          </span>
          <h3 className="font-headline text-3xl md:text-4xl text-primary leading-snug italic border-l-4 border-tertiary px-8">
            Research is a high-speed sprint of the mind; nature is the calibration of the soul.
            Finding the balance between the precision of data and the vastness of the horizon is
            where true insight begins.
          </h3>
          <div className="mt-8 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
            — Notes from the Field
          </div>
        </div>
      </section>

      {/* Berkeley Life & Swimming */}
      <section className="mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Berkeley Life */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-headline text-3xl text-primary">Berkeley Life</h2>
            </div>
            <div className="space-y-12">
              <div className="group">
                <div className="overflow-hidden bg-surface-container-low aspect-[4/3] mb-4">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg8Ba6Co0yLml1b2qCI5ffMNtYHzurC9RWXI-ntlBLtzcLwmv6rcSxYzBF0EIO7FF4tfkncyZe2CqpXlV68CfR-C0R8wPokjptzBe1wcQrpxnV-aysbz4IkufHI_Ot4mdKbRoF39w8GTQHEnDH-1-ZNSerHm5jW4p717E_G1hfGRxzFlQopjxCwRV-GVHJ0aF4OjDtR9hRN5GLTISxxZuL0aVQjXoMx6GPFuhk-EGwlrDA9hHTKbjeaDvPFMpXJyAKkzQUc9PrECU"
                    alt="Sather Tower"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h4 className="font-headline text-xl text-primary mb-1">Morning Ritual</h4>
                <p className="font-body text-sm text-on-surface-variant font-light">
                  The quiet hour before campus awakens. Thinking through architectures under the
                  Campanile.
                </p>
              </div>
              <div className="group">
                <div className="overflow-hidden bg-surface-container-low aspect-square mb-4">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ud-g1ViSdC1JZt9S7dSgjm4ptlgqYMWb9xjeNT_pwnjqPSK2S-gEeTR1wD_3eEyETxHFkXumzrBHEdSaWYWur4hjBwXIbU2srxtzvKUM4WMzldidetNyizHzOeqias7B3hcBx0lLUbJDmspPF_MstdgJ-iXFK81O8WBo2Lp0ceEtBLVqcmQQ7LI7Ty7KFyblTIDvXZQ-9dLG5jE3sYsR233_tha9T-2aU8c2fKL25fGetmkfXGbNV93GhvLBfqWLHwS5Aw3CUTI"
                    alt="Library Stacks"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h4 className="font-headline text-xl text-primary mb-1">Deep Work</h4>
                <p className="font-body text-sm text-on-surface-variant font-light">
                  Doe Library's North Reading Room. Where legacy meets the modern algorithm.
                </p>
              </div>
            </div>
          </div>

          {/* Swimming */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-10 md:justify-end">
              <h2 className="font-headline text-3xl text-primary">The Rhythm of Water</h2>
            </div>
            <div className="relative group">
              <div className="overflow-hidden bg-surface-container-low aspect-[4/5]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLBTRtu5qfePVHvCDpc7ZnbeA5f1-a8LL7sZYXIWZsIU4voIvjHOCE21xw0Z2xlKek8T4JN55OM7PzSfl31dYidLWzJQKKy2kJJTsGYYInKeINcTAwp7whGWKu5yWVzqo-ZsavpHhMu5iE28RCygAZ5_VVAJPW8CYuxmSmelGm3MEK_jj0cVIBByfrzdo35AoGJVkyqIzN0Fo4BMX9RTGI9ormhs_WIui-iqre2dfLuVIqGB6pjLoErKnEY98m2PztkOq7D2PmzOI"
                  alt="Outdoor Pool"
                  className="w-full h-full object-cover grayscale-[40%] group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="md:absolute -bottom-12 -left-12 md:max-w-xs bg-surface-container-lowest p-8 shadow-xl md:shadow-none border border-outline-variant/10 mt-6 md:mt-0">
                <h4 className="font-headline text-2xl text-primary mb-4">Spieker Pool</h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed font-light mb-6">
                  Swimming provides a mental clarity that no other environment can match. In the
                  silence of the water, the noise of research settles into clear patterns.
                </p>
                <div className="flex items-center gap-2 text-primary font-label text-[10px] uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">timer</span>
                  2500m / Session
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mt-48 bg-surface-container-low p-12 md:p-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="font-headline text-4xl text-primary mb-6">
              Contact &amp; <br />
              <span className="italic font-normal">Correspondence</span>
            </h2>
            <p className="font-body text-on-surface-variant mb-12 max-w-sm">
              For research inquiries, collaborative projects, or intellectual exchanges, please
              reach out through the form or via professional networks.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined">location_on</span>
                <span className="text-sm font-medium">UC Berkeley · California</span>
              </div>
              <div className="flex items-center gap-4 text-primary">
                <span className="material-symbols-outlined">mail</span>
                <span className="text-sm font-medium">siruizou2005@gmail.com</span>
              </div>
            </div>
          </div>

          <form className="space-y-10" onSubmit={handleSubmit}>
            {[
              { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Your Name' },
              {
                label: 'Email Address',
                key: 'email',
                type: 'email',
                placeholder: 'email@example.com',
              },
            ].map(({ label, key, type, placeholder }) => (
              <div key={key} className="group">
                <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  value={form[key as keyof ContactForm]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  placeholder={placeholder}
                  className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-2 px-0 focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant/60 font-body text-sm outline-none"
                  required
                />
              </div>
            ))}
            <div className="group">
              <label className="block font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Briefly describe the nature of your inquiry"
                rows={4}
                className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-2 px-0 focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant/60 font-body text-sm resize-none outline-none"
                required
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-primary text-on-primary px-10 py-4 font-label text-xs uppercase tracking-[0.2em] hover:bg-primary-container transition-all hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
            </button>
            {status === 'sent' && (
              <p className="text-sm text-secondary font-medium">
                Your inquiry has been received. I will respond shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-error font-medium">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
