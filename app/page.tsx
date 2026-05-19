import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junoon Coaching — Shifting the Culture",
  description:
    "Elite fitness coaching for Indians and South Asians. Build a strong, confident body without giving up the foods you love.",
};

const testimonials = [
  {
    quote:
      "Working with Arjav has been absolutely transformative. I lost over 10 kg — a goal I had struggled to achieve for years. He understood my lifestyle, challenges, and crafted a plan that actually worked.",
    name: "Sagar Pandya",
    age: 28,
    img: "/images/IMG_1005.webp",
  },
  {
    quote:
      "At 52 and mostly sedentary, I needed a realistic plan. Arjav delivered exactly that — clear, easy-to-follow workouts and nutrition. In just 4–6 weeks, I saw measurable results and felt motivated again.",
    name: "Baljinder Sandhu",
    age: 52,
    img: "/images/IMG_3802.webp",
  },
  {
    quote:
      "Arjav's style is the most sustainable I've experienced. He makes small but impactful adjustments that fit your lifestyle. I've seen major muscle growth and toning — and my friends have noticed too!",
    name: "Varun V",
    age: 34,
    img: "/images/varad.webp",
  },
  {
    quote:
      "Dieting used to feel like punishment. Arjav taught me how to enjoy the foods I love and still hit my goals. His practical tips helped me finally gain control, even during school stress.",
    name: "Arpan P",
    age: 21,
    img: "/images/arpan.webp",
  },
];

const galleryImages = [
  { src: "/images/IMG_3793.webp", alt: "Client transformation" },
  { src: "/images/IMG_3689.webp", alt: "Client result" },
  { src: "/images/IMG_3693.webp", alt: "Client result" },
  { src: "/images/montage.webp", alt: "Client montage" },
  { src: "/images/IMG_1418.webp", alt: "Client training" },
  { src: "/images/IMG_5067.webp", alt: "Client progress" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-end bg-bark overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_3793.webp"
            alt="Junoon Coaching hero"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bark via-bark/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bark/60 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 pb-20 md:pb-28 pt-24 w-full">
          <p className="eyebrow mb-6">
            Coaching built for the community
          </p>
          <h1
            className="font-display text-[clamp(3rem,8vw,6rem)] font-light leading-[0.95] tracking-tight text-ivory mb-2"
          >
            Junoon
          </h1>
          <h1
            className="font-display text-[clamp(3rem,8vw,6rem)] font-light leading-[0.95] tracking-tight text-clay italic mb-8"
          >
            Coaching
          </h1>
          <p className="text-ivory/70 text-base md:text-lg font-light max-w-lg leading-relaxed mb-10">
            We&apos;re on a mission to redefine what fitness looks like for the South Asian community. Build a strong, confident, and healthy body — without giving up the foods you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://form.typeform.com/to/LrpoZN7n"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label inline-flex items-center justify-center bg-clay text-parchment px-8 py-4 text-xs uppercase hover:bg-saffron transition-colors"
            >
              Start Your Journey →
            </a>
            <Link
              href="/coaches"
              className="mono-label inline-flex items-center justify-center border border-ivory/30 text-ivory/80 px-8 py-4 text-xs uppercase hover:border-clay hover:text-clay transition-colors"
            >
              Meet Our Coaches
            </Link>
          </div>
        </div>

        {/* Scrolling indicator */}
        <div className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-2 z-10">
          <span className="mono-label text-driftwood text-[10px] uppercase" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-driftwood to-transparent" />
        </div>
      </section>

      {/* ── MISSION STRIP ── */}
      <section className="bg-clay">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          <div className="shrink-0">
            <p className="mono-label text-parchment/60 text-[10px] uppercase">
              Our Mission
            </p>
          </div>
          <p className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-light text-parchment leading-relaxed max-w-3xl">
            No more low-protein diets, generational health issues, or outdated advice from uncles and aunties. We blend cultural understanding with elite training to help Indians and South Asians thrive.
          </p>
        </div>
      </section>

      {/* ── TRANSFORMATION GALLERY ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex items-baseline gap-4 mb-12">
            <span className="mono-label text-clay text-[10px] uppercase">
              Results
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-bark tracking-tight">
              Real transformations
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden bg-linen ${i === 0 ? "row-span-2" : ""}`}
                style={{ aspectRatio: i === 0 ? "3/4" : "4/5" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  // Grid is 2 cols on mobile, 3 cols on desktop — tell the browser
                  // exactly how wide each cell is so it doesn't download 100vw images
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENT STORIES ── */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex items-baseline gap-4 mb-16">
            <span className="mono-label text-clay text-[10px] uppercase">
              01
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-bark tracking-tight">
              Client stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-parchment p-8 md:p-10 flex flex-col gap-6 border-t-2 border-clay"
              >
                <p className="font-display text-soil text-lg md:text-xl font-light leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-linen shrink-0">
                    {/* Avatar is always rendered at 48×48px (96px on retina) */}
                    <Image src={t.img} alt={t.name} fill sizes="48px" className="object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-bark font-medium text-sm">{t.name}</p>
                    <p className="mono-label text-driftwood text-xs tracking-wider">
                      Age {t.age}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/testimonials"
              className="mono-label inline-flex items-center gap-2 text-clay text-xs uppercase hover:gap-3 transition-all"
            >
              Read all testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY JUNOON ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="mono-label text-clay text-[10px] uppercase mb-4">
                Why Junoon
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-bark tracking-tight leading-[1.1] mb-8">
                Coaching that understands <em className="italic text-clay">your</em> culture
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  {
                    title: "Culturally informed nutrition",
                    desc: "Plans built around Indian and South Asian foods — dal, roti, sabzi and all — not restrictive Western templates.",
                  },
                  {
                    title: "Personalised programming",
                    desc: "Every workout and meal plan is tailored to your lifestyle, schedule, and goals. No cookie-cutter approaches.",
                  },
                  {
                    title: "Sustainable, not punishing",
                    desc: "Small, compounding adjustments you can actually stick to. Fitness should fit your life, not replace it.",
                  },
                  {
                    title: "Daily accountability",
                    desc: "Your coach checks in, adjusts your plan, and keeps you motivated — through the tough weeks too.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-0.5 bg-clay shrink-0 mt-1" />
                    <div>
                      <h3 className="text-bark font-medium text-sm mb-1">{title}</h3>
                      <p className="text-soil text-sm font-light leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/IMG_3689.webp"
                  alt="Coaching result"
                  fill
                  // Half of 1200px container on desktop; full width on mobile
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              {/* Stat overlay */}
              <div className="absolute -bottom-6 -left-6 bg-bark px-6 py-5">
                <p className="font-display text-[2rem] font-light text-ivory leading-none">
                  60 lbs
                </p>
                <p className="mono-label text-driftwood text-[10px] uppercase mt-1">
                  Arjav&apos;s own journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-bark py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <p className="mono-label text-clay text-[10px] uppercase mb-6">
            Your journey starts here
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-light text-ivory leading-[1.0] tracking-tight mb-8">
            Ready to shift
            <br />
            <em className="italic text-clay">your culture?</em>
          </h2>
          <p className="text-driftwood text-base font-light max-w-md mx-auto mb-10 leading-relaxed">
            Apply today and get matched with a coach who truly understands your background, your diet, and your goals.
          </p>
          <a
            href="https://form.typeform.com/to/LrpoZN7n"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label inline-flex items-center gap-3 bg-clay text-parchment px-10 py-5 text-xs uppercase hover:bg-saffron transition-colors"
          >
            Start Your Journey →
          </a>
        </div>
      </section>
    </>
  );
}
