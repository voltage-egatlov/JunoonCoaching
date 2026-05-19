import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Coaches",
  description:
    "Meet the Junoon Coaching team — culturally informed fitness experts dedicated to the South Asian community.",
};

const coaches = [
  {
    name: "Arjav Chhabra",
    role: "Founder & Head Coach",
    img: "/images/IMG_3793.webp",
    bio: "Arjav started his fitness journey at 16 years old. After being overweight his entire childhood, he set out on a 60 lb weight loss journey that changed his life. Along the way he experienced extreme weight fluctuation, eating disorders, and every mistake a beginner could make. He turned those hard lessons into a coaching philosophy — helping others avoid the same pitfalls and build a relationship with fitness that actually lasts.",
    handles: [
      { label: "Instagram", href: "http://instagram.com/arjavchhabra", display: "@arjavchhabra" },
      { label: "TikTok", href: "http://tiktok.com/@singhaesthetics", display: "@singhaesthetics" },
    ],
  },
  {
    name: "Bhargava Elavarthi",
    role: "Coach",
    img: "/images/coaches-hero.webp",
    bio: "Bhargava began his fitness journey in powerlifting and transitioned into bodybuilding — a discipline he has been training in for over five years. He brings deep practical knowledge of South Indian diets and how to optimise protein and macros within those eating patterns. His approach is grounded in both the science of hypertrophy and the cultural nuance his clients need.",
    handles: [],
  },
  {
    name: "Tej Chhabra",
    role: "Director of Operations",
    img: "/images/og-image.webp",
    bio: "Tej is a graduate of Tufts University in Medford, MA, with experience in business consulting. He currently resides in New York, NY, and oversees the operational side of Junoon Coaching — ensuring that every client experience is seamless, from onboarding through to ongoing coaching support.",
    handles: [],
  },
];

export default function CoachesPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="relative bg-bark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/coaches-hero.webp"
            alt="Our coaches"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bark to-bark/60" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 py-24 md:py-36">
          <p className="mono-label text-[10px] uppercase text-clay mb-4">
            The team
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light text-ivory leading-[0.95] tracking-tight">
            Our coaches
          </h1>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="font-display text-[clamp(1.1rem,2vw,1.4rem)] font-light text-soil leading-relaxed max-w-2xl">
            Every coach on our team has lived experience navigating South Asian culture, food, and family pressures around health. We don&apos;t just understand the science — we understand your world.
          </p>
        </div>
      </section>

      {/* ── COACH PROFILES ── */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-1">
          {coaches.map((coach, i) => (
            <div
              key={coach.name}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-linen ${i === coaches.length - 1 ? "border-b" : ""}`}
            >
              {/* Image — half width on desktop, full width on mobile */}
              <div
                className={`relative aspect-[4/5] md:aspect-auto md:min-h-[520px] bg-linen overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <Image
                  src={coach.img}
                  alt={coach.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                {/* Number badge */}
                <div className="absolute top-6 left-6 bg-bark/80 backdrop-blur-sm px-3 py-1.5">
                  <span className="mono-label text-clay text-[10px]">
                    0{i + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center px-8 md:px-14 py-12 md:py-16 bg-parchment ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <p className="mono-label text-clay text-[10px] uppercase mb-3">
                  {coach.role}
                </p>
                <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-bark tracking-tight leading-[1.05] mb-6">
                  {coach.name}
                </h2>
                <div className="w-8 h-px bg-clay mb-6" />
                <p className="text-soil text-sm font-light leading-relaxed mb-8">
                  {coach.bio}
                </p>
                {coach.handles.length > 0 && (
                  <div className="flex flex-wrap gap-4">
                    {coach.handles.map((h) => (
                      <a
                        key={h.href}
                        href={h.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mono-label text-[10px] uppercase text-clay hover:text-saffron transition-colors flex items-center gap-1.5"
                      >
                        {h.label}: {h.display}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <p className="mono-label text-clay text-[10px] uppercase mb-4">
            Ready to get started?
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-bark tracking-tight mb-8">
            Apply for coaching today
          </h2>
          <a
            href="https://form.typeform.com/to/LrpoZN7n"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label inline-flex items-center gap-3 bg-clay text-parchment px-10 py-4 text-xs uppercase hover:bg-saffron transition-colors"
          >
            Start Your Journey →
          </a>
        </div>
      </section>
    </>
  );
}
