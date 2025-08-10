import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function PattayaDigitalAdvertisingTruck() {
  const fileRef = useRef(null as HTMLInputElement | null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  function handlePick() {
    fileRef.current?.click();
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    const url = URL.createObjectURL(f);
    setVideoSrc(url);
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-white/10 grid place-items-center text-lg">🚚</div>
            <span className="font-semibold tracking-wide">Pattaya Digital Advertising Truck</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#pricing" className="hover:text-white">Pricing Message</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <input ref={fileRef} type="file" accept="video/*" onChange={handleFile} className="hidden" />
        </div>
      </header>

      {/* Hero with video header */}
      <section className="relative">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          {videoSrc ? (
            <video src={videoSrc} className="h-full w-full object-cover" autoPlay loop muted playsInline controls />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-neutral-800 to-neutral-900 grid place-items-center">
              <div className="text-center opacity-80">
                <div className="text-5xl">🎬</div>
                <p className="mt-2 text-sm text-white/70">Video coming soon</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 pb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
                <span>🏠 🍔 PETER</span>
                <span className="text-white/60">00:38</span>
              </div>
              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
                More Flexible, More Effective, More Affordable than Traditional Billboards
              </h1>
              <p className="mt-4 text-white/80 max-w-xl text-base">
                LED truck ads that meet people where they are. Simple setup. Fast launch. Strong results.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href="#contact" className="rounded-2xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold">Get a Quote</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits bullets */}
      <section id="benefits" className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Flexible", text: "Change routes and creatives any time. Target busy zones by hour." },
            { title: "Effective", text: "High recall in the real world. Your message fills the whole view." },
            { title: "Affordable", text: "Great cost per thousand views. Pay only for what works." },
          ].map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl bg-white/5 p-6 border border-white/10 shadow-xl">
              <div className="text-4xl">{i === 0 ? "🧭" : i === 1 ? "⚡" : "💸"}</div>
              <h3 className="mt-3 text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Communication Strategy */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-14">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span>🏠 🍔 PETER</span>
            <span className="text-white/60">00:40</span>
          </div>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold">Pricing Communication Strategy</h2>
          <p className="mt-2 text-white/70">Value Based Messaging</p>

          <ul className="mt-6 space-y-3 text-base">
            <li className="flex items-start gap-3"><span className="mt-1">•</span><span>Focus on outcomes</span></li>
          </ul>

          <div className="mt-6 grid gap-3">
            {["Reach 50,000+ potential customers daily","97% higher recall rate than online advertising","Flexible targeting saves 40% vs traditional media","Real-time optimization increases effectiveness by 60%"].map((line) => (
              <div key={line} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <div className="text-sm">{line}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple contact block */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-14">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold">Start your campaign</h3>
            <p className="mt-2 text-white/70 text-sm">Tell us your city, dates, and budget. We will reply fast with a simple plan.</p>
            <div className="mt-6 flex gap-3">
              <a href="mailto:hello@yourbrand.com" className="rounded-2xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold">Email us</a>
              <a href="tel:+6612345678" className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10">Call now</a>
            </div>
          </div>
          <form className="grid gap-3">
            <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none" placeholder="Name" />
            <input className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none" placeholder="Email" />
            <textarea className="rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none min-h-[120px]" placeholder="Message" />
            <button className="rounded-2xl bg-white text-neutral-900 px-5 py-3 text-sm font-semibold">Send</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/60 flex flex-wrap items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Pattaya Digital Advertising Truck</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
