import Image from "next/image";
import type { Metadata } from "next";
import Gallery from "./components/Gallery";
import type { GalleryImage } from "./components/Gallery";
import Button from "./components/Button";
import Container from "./components/Container";
import SectionHeader from "./components/SectionHeader";
import DashList from "./components/DashList";

export const metadata: Metadata = {
  title: "Junoon Coaching - Elite Fitness Coaching for South Asians",
  description:
    "Elite online fitness coaching for Indians and South Asians. Lose weight, build muscle, and get healthy without giving up your culture or the foods you love. NASM-certified coaches who understand your world.",
  alternates: { canonical: "https://junooncoaching.com" },
  openGraph: {
    title: "Junoon Coaching - Elite Fitness Coaching for South Asians",
    description:
      "Online fitness coaching built for Indians and South Asians. Personalised plans, cultural understanding, and real results.",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
  },
};

const testimonials = [
  {
    quote:
      "Working with Arjav has been absolutely transformative. I lost over 10 kg - a goal I had struggled to achieve for years. He understood my lifestyle and crafted a plan that actually worked.",
    name: "Sagar Pandya",
    age: 28,
    img: "/images/IMG_1005.webp",
  },
  {
    quote:
      "At 52 and mostly sedentary, I needed a realistic plan. Arjav delivered exactly that - clear, easy-to-follow workouts and nutrition. In just 4–6 weeks I saw measurable results.",
    name: "Baljinder Sandhu",
    age: 52,
    img: "/images/IMG_3802.webp",
  },
  {
    quote:
      "Arjav's style is the most sustainable I've experienced. He makes small but impactful adjustments that fit your lifestyle. I've seen major muscle growth and toning.",
    name: "Varun V",
    age: 34,
    img: "/images/varad.webp",
  },
  {
    quote:
      "Dieting used to feel like punishment. Arjav taught me how to enjoy the foods I love and still hit my goals. His practical tips helped me finally gain control.",
    name: "Arpan P",
    age: 21,
    img: "/images/arpan.webp",
  },
];

const galleryImages: GalleryImage[] = [
  { src: "/images/IMG_3693.webp", alt: "Client transformation" },
  { src: "/images/IMG_3689.webp", alt: "Client result" },
  { src: "/images/IMG_3802.webp", alt: "Client result" },
  { src: "/images/montage.webp", alt: "Client montage" },
  { src: "/images/arpan.webp", alt: "Client progress" },
  { src: "/images/IMG_5067.webp", alt: "Client training" },
  { src: "/images/IMG_2321.webp", alt: "Client transformation" },
  { src: "/images/IMG_1418.webp", alt: "Client progress" },
  { src: "/images/IMG_2625.webp", alt: "Client result" },
  { src: "/images/varad.webp", alt: "Client transformation" },
  { src: "/images/IMG_1005.webp", alt: "Client result" },
  { src: "/images/IMG_3793.webp", alt: "Client training" },
];

const pillars = [
  {
    number: "01",
    title: "Family-First Fitness",
    desc: "We build plans that fit around your family commitments, cultural obligations, and busy life - not the other way around. Your health journey should strengthen relationships, not strain them.",
  },
  {
    number: "02",
    title: "Food Without Guilt",
    desc: "Desi food is not the enemy. Our coaches understand dal, roti, biryani, and everything in between. We work with your cultural diet to create sustainable, enjoyable nutrition - not restriction.",
  },
  {
    number: "03",
    title: "Realistic Expectations",
    desc: "No miracle promises. We set honest, achievable milestones and give you the tools to sustain them long-term. Real progress over Instagram perfection.",
  },
];

const whyJunoonFeatures = [
  {
    title: "Culturally informed nutrition",
    desc: "Plans built around Indian and South Asian foods - dal, roti, sabzi and all - not restrictive Western templates.",
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
    desc: "Your coach checks in, adjusts your plan, and keeps you motivated - through the tough weeks too.",
  },
];

const faqs = [
  {
    q: "Do I have to give up Indian food?",
    a: "Absolutely not. Our plans are built around South Asian diets - we adapt dal, roti, sabzi, and your family recipes to fit your goals. Food is culture, and we respect that.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients notice changes in 4–6 weeks. Sustainable fat loss, muscle gain, and energy improvements happen faster than you'd expect when the plan actually fits your lifestyle.",
  },
  {
    q: "Is this for men and women?",
    a: "Yes - we coach both. Plans are fully personalised to your body, goals, hormonal considerations, and lifestyle. Gender-specific adjustments are part of our process.",
  },
  {
    q: "What does a typical week look like?",
    a: "You receive a customised training plan, a nutrition guide built around your diet, daily check-ins with your coach, and weekly plan adjustments based on your progress.",
  },
  {
    q: "I have a very busy schedule. Can this still work for me?",
    a: "That's exactly who we designed this for. Short workouts, flexible meal timing, and plans that adapt to your week - not the other way around.",
  },
  {
    q: "How do I get started?",
    a: "Fill out our application form. We review your goals and lifestyle, then match you with the right coach. Most clients hear back within 48 hours.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[88vh] flex items-end bg-bark overflow-hidden">
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

        <Container className="relative z-10 pb-14 md:pb-20 pt-20 w-full">
          <p className="mono-label text-turmeric text-[10px] uppercase mb-4">
            Coaching built for the community
          </p>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-light leading-[0.95] tracking-tight text-ivory">
            Junoon
          </h1>
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-light leading-[0.95] tracking-tight text-clay italic mb-6">
            Coaching
          </h1>
          <p className="text-ivory/70 text-base md:text-lg font-light max-w-lg leading-relaxed mb-8">
            We&apos;re on a mission to redefine what fitness looks like for the South Asian community. Build a strong, confident body - without giving up the foods you love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="https://form.typeform.com/to/LrpoZN7n">
              Start Your Journey →
            </Button>
            <Button href="/coaches" variant="ghost">
              Meet Our Coaches
            </Button>
          </div>
        </Container>

        <div className="absolute bottom-6 right-8 md:right-12 flex flex-col items-center gap-2 z-10">
          <span className="mono-label text-driftwood text-[10px] uppercase" style={{ writingMode: "vertical-rl" }}>
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-driftwood to-transparent" />
        </div>
      </section>

      {/* ── MISSION STRIP ── */}
      <section className="bg-clay">
        <Container className="py-8 md:py-12 flex flex-col md:flex-row items-start gap-6 md:gap-16">
          <p className="mono-label text-parchment/60 text-[10px] uppercase shrink-0">Our Mission</p>
          <p className="font-display text-[clamp(1.15rem,2.5vw,1.6rem)] font-light text-parchment leading-relaxed max-w-3xl">
            No more low-protein diets, generational health issues, or outdated advice from uncles and aunties. We blend cultural understanding with elite training to help South Asians thrive.
          </p>
        </Container>
      </section>

      {/* ── THREE PILLARS ── */}
      <section className="bg-ivory py-14 md:py-20">
        <Container>
          <SectionHeader label="Our approach" heading="What makes us different" mb="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {pillars.map((p, i) => (
              <div
                key={p.number}
                className={`py-8 md:py-10 px-0 md:px-8 border-t border-linen ${i < 2 ? "md:border-r md:border-linen" : ""}`}
              >
                <p className="mono-label text-clay text-[10px] uppercase mb-4">{p.number}</p>
                <h3 className="font-display text-[clamp(1.25rem,2vw,1.6rem)] font-light text-bark tracking-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-soil text-sm font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── TRANSFORMATION GALLERY ── */}
      <section className="py-14 md:py-20 bg-cream">
        <Container>
          <SectionHeader label="Results" heading="Real transformations" mb="mb-8" />
          <Gallery
            images={galleryImages}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            gridClassName="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3 space-y-2 md:space-y-3"
          />
        </Container>
      </section>

      {/* ── CLIENT STORIES ── */}
      <section className="py-14 md:py-20 bg-ivory">
        <Container>
          <SectionHeader label="Stories" heading="Client stories" mb="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-parchment p-7 md:p-9 flex flex-col gap-5 border-t-2 border-clay"
              >
                <p className="font-display text-soil text-lg md:text-xl font-light leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-linen shrink-0">
                    <Image src={t.img} alt={t.name} fill sizes="48px" className="object-cover object-top" />
                  </div>
                  <div>
                    <p className="text-bark font-medium text-sm">{t.name}</p>
                    <p className="mono-label text-driftwood text-xs tracking-wider">Age {t.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/testimonials" variant="text">
              Read all testimonials →
            </Button>
          </div>
        </Container>
      </section>

      {/* ── WHY JUNOON ── */}
      <section className="py-14 md:py-20 bg-cream">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                label="Why Junoon"
                heading={<>Coaching that understands <em className="italic text-clay">your</em> culture</>}
                layout="stacked"
                headingSize="lg"
                mb="mb-7"
              />
              <div className="flex flex-col gap-5">
                {whyJunoonFeatures.map(({ title, desc }) => (
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
                  src="/images/IMG_3793.webp"
                  alt="Arjav coaching in the gym"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-bark px-5 py-4">
                <p className="font-display text-[1.75rem] font-light text-ivory leading-none">60 lbs</p>
                <p className="mono-label text-driftwood text-[10px] uppercase mt-1">Arjav&apos;s own journey</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-bark py-14 md:py-20">
        <Container>
          <SectionHeader label="FAQs" heading="Common questions" theme="dark" mb="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-t border-soil py-7 md:py-8 md:pr-12">
                <h3 className="text-ivory font-medium text-sm mb-2">{faq.q}</h3>
                <p className="text-driftwood text-sm font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-soil py-14 md:py-20">
        <Container className="text-center">
          <SectionHeader
            label="Your journey starts here"
            heading={<>Ready to shift <br /><em className="italic text-clay">your culture?</em></>}
            layout="stacked"
            theme="dark"
            headingSize="xl"
            mb="mb-6"
          />
          <p className="text-driftwood text-base font-light max-w-md mx-auto mb-8 leading-relaxed">
            Apply today and get matched with a coach who truly understands your background, your diet, and your goals.
          </p>
          <Button href="https://form.typeform.com/to/LrpoZN7n" className="border border-clay">
            Start Your Journey →
          </Button>
        </Container>
      </section>
    </>
  );
}
