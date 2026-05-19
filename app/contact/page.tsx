import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Junoon Coaching — reach us on Instagram, TikTok, or email.",
};

const socials = [
  {
    platform: "Instagram",
    handle: "@arjavchhabra",
    href: "http://instagram.com/arjavchhabra",
    desc: "Follow for daily fitness tips, nutrition content, and South Asian health insights.",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    platform: "TikTok",
    handle: "@singhaesthetics",
    href: "http://tiktok.com/@singhaesthetics",
    desc: "Watch workout videos, transformation content, and cultural fitness commentary.",
    icon: (
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.25 8.25 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z" />
      </svg>
    ),
  },
  {
    platform: "Email",
    handle: "Arjavfitness@gmail.com",
    href: "mailto:Arjavfitness@gmail.com",
    desc: "Reach out directly for partnership enquiries or general questions.",
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-bark py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="mono-label text-[10px] uppercase text-clay mb-4">
            Get in touch
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light text-ivory leading-[0.95] tracking-tight">
            Contact
          </h1>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

          {/* Left: apply CTA */}
          <div>
            <p className="mono-label text-clay text-[10px] uppercase mb-4">
              Primary contact
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-bark tracking-tight leading-[1.1] mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-soil text-sm font-light leading-relaxed mb-8 max-w-md">
              The best way to get started is to fill out our coaching application. We&apos;ll review your goals, background, and lifestyle — and match you with the right coach.
            </p>

            <a
              href="https://form.typeform.com/to/LrpoZN7n"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label inline-flex items-center gap-3 bg-clay text-parchment px-10 py-4 text-xs uppercase hover:bg-saffron transition-colors mb-12"
            >
              Apply for Coaching →
            </a>

            {/* Image — hidden on mobile, ~half the container width on desktop */}
            <div className="relative aspect-[4/3] overflow-hidden bg-linen hidden md:block">
              <Image
                src="/images/IMG_3689.webp"
                alt="Junoon Coaching"
                fill
                sizes="(max-width: 768px) 0px, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right: socials */}
          <div>
            <p className="mono-label text-clay text-[10px] uppercase mb-8">
              Find us on socials
            </p>
            <div className="flex flex-col gap-0">
              {socials.map((s, i) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target={s.platform !== "Email" ? "_blank" : undefined}
                  rel={s.platform !== "Email" ? "noopener noreferrer" : undefined}
                  className={`group flex items-start gap-5 py-8 border-t border-linen hover:bg-parchment transition-colors -mx-4 px-4 ${i === socials.length - 1 ? "border-b" : ""}`}
                >
                  <div className="text-clay mt-0.5 shrink-0 group-hover:text-saffron transition-colors">
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <p className="text-bark font-medium text-sm">{s.platform}</p>
                      <p className="mono-label text-clay text-[10px] tracking-wider">
                        {s.handle}
                      </p>
                    </div>
                    <p className="text-soil text-sm font-light leading-relaxed">{s.desc}</p>
                  </div>
                  <span className="text-driftwood group-hover:text-clay transition-colors mt-1 text-sm">→</span>
                </a>
              ))}
            </div>

            {/* FAQ-style quick answers */}
            <div className="mt-12">
              <p className="mono-label text-clay text-[10px] uppercase mb-6">
                Quick answers
              </p>
              <div className="flex flex-col gap-6">
                {[
                  {
                    q: "How do I apply for coaching?",
                    a: "Click 'Apply for Coaching' and fill out our Typeform. We will review your details and reach out within 48 hours.",
                  },
                  {
                    q: "Where are your coaches based?",
                    a: "We coach clients globally — online coaching only, so your location doesn't matter.",
                  },
                  {
                    q: "What does coaching include?",
                    a: "A personalised training plan, nutrition plan built around your diet, daily check-ins, and weekly adjustments.",
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border-l-2 border-linen pl-4">
                    <p className="text-bark text-sm font-medium mb-1">{q}</p>
                    <p className="text-soil text-sm font-light leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── LOGO STRIP ── */}
      <section className="bg-bark py-16 border-t border-soil">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <Image
            src="/logos/logo-ivory.png"
            alt="Junoon Coaching"
            width={150}
            height={45}
            className="h-10 w-auto object-contain opacity-80"
          />
          <p className="mono-label text-driftwood text-xs text-center" style={{ letterSpacing: "0.1em" }}>
            Coached By Arjav LLC · 2025 · Shifting the culture
          </p>
          <div className="flex items-center gap-5">
            <a
              href="http://instagram.com/arjavchhabra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-driftwood hover:text-clay transition-colors"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="http://tiktok.com/@singhaesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-driftwood hover:text-clay transition-colors"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.25 8.25 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
