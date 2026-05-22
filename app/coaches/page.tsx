import Image from "next/image";
import type { Metadata } from "next";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Our Coaches",
  description:
    "Meet the Junoon Coaching team - NASM-certified coaches who understand South Asian culture, food, and lifestyle. Expert guidance for Indians worldwide.",
  alternates: { canonical: "https://junooncoaching.com/coaches" },
  openGraph: {
    title: "Our Coaches | Junoon Coaching",
    description:
      "NASM-certified coaches who understand South Asian culture, food, and lifestyle. Founded by Arjav Chhabra after his own 60 lb transformation.",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
  },
};

const coaches = [
  {
    name: "Arjav Chhabra",
    role: "Founder & Head Coach",
    cert: "NASM Certified Personal Trainer",
    img: "/images/IMG_3793.webp",
    bio: "Arjav started his fitness journey at 16 years old. After being overweight his entire childhood, he set out on a 60 lb weight loss journey that changed his life. Along the way he experienced extreme weight fluctuation, disordered eating, and every mistake a beginner could make. He turned those hard lessons into a coaching philosophy - helping others avoid the same pitfalls and build a relationship with fitness that actually lasts.",
    extended: "Founded in 2022, Junoon Coaching was built from Arjav's lived experience navigating South Asian culture, family pressures, and a food environment that wasn't designed with his community in mind. His NASM certification, combined with that cultural fluency, is what makes his approach uniquely effective for Indian and South Asian clients worldwide.",
    handles: [
      { label: "Instagram", href: "http://instagram.com/arjavchhabra", display: "@arjavchhabra" },
    ],
  },
  {
    name: "Bhargava Elavarthi",
    role: "Coach",
    cert: "Specialisation: Hypertrophy & South Indian Nutrition",
    img: "/images/coaches-hero.webp",
    bio: "Bhargava began his fitness journey in powerlifting and transitioned into bodybuilding - a discipline he has been training in for over five years. He brings deep practical knowledge of South Indian diets and how to optimise protein and macros within those eating patterns.",
    extended: "Growing up with multiple food allergies, Bhargava learned early how to build a high-performance diet with significant constraints. That experience makes him especially skilled at crafting nutrition plans for clients with dietary restrictions, intolerances, or specific regional food preferences.",
    handles: [],
  },
  {
    name: "Tej Chhabra",
    role: "Director of Operations",
    cert: "Tufts University · Business Consulting",
    img: "/images/coaches-hero.webp",
    bio: "Tej oversees the operational side of Junoon Coaching - ensuring that every client experience is seamless, from onboarding through to ongoing coaching support. Based in New York, he brings a consulting mindset to how the business runs.",
    extended: "A graduate of Tufts University, Tej is responsible for the systems and processes that let our coaches focus entirely on their clients. From client intake to weekly reporting, he ensures nothing falls through the cracks.",
    handles: [],
  },
];

const philosophy = [
  {
    label: "Understand first",
    desc: "Every client starts with a deep intake process - lifestyle, diet, culture, goals, and health history. We don't prescribe before we understand.",
  },
  {
    label: "Adjust constantly",
    desc: "Weekly check-ins and plan adjustments mean your programme evolves as you do. Static plans don't work. We don't use them.",
  },
  {
    label: "Build for life",
    desc: "The goal is independence. We give you the knowledge and habits to stay fit without a coach - even if you choose to keep one.",
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
        <Container className="relative z-10 py-16 md:py-24">
          <p className="mono-label text-turmeric text-[10px] uppercase mb-4">The team</p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light text-ivory leading-[0.95] tracking-tight">
            Our coaches
          </h1>
        </Container>
      </section>

      {/* ── INTRO ── */}
      <section className="bg-cream py-10 md:py-14">
        <Container>
          <p className="font-display text-[clamp(1.05rem,2vw,1.35rem)] font-light text-soil leading-relaxed max-w-2xl">
            Every coach on our team has lived experience navigating South Asian culture, food, and family pressures around health. We don&apos;t just understand the science - we understand your world.
          </p>
        </Container>
      </section>

      {/* ── COACH PROFILES ── */}
      <section className="bg-cream pb-14 md:pb-20">
        <Container className="flex flex-col gap-1">
          {coaches.map((coach, i) => (
            <div
              key={coach.name}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-linen ${i === coaches.length - 1 ? "border-b" : ""}`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[4/5] md:aspect-auto md:min-h-[480px] bg-linen overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <Image
                  src={coach.img}
                  alt={coach.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 bg-bark/80 backdrop-blur-sm px-3 py-1.5">
                  <span className="mono-label text-clay text-[10px]">0{i + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center px-7 md:px-12 py-10 md:py-14 bg-parchment ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="mono-label text-clay text-[10px] uppercase mb-1">{coach.role}</p>
                <p className="mono-label text-driftwood text-[10px] mb-4">{coach.cert}</p>
                <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-bark tracking-tight leading-[1.05] mb-5">
                  {coach.name}
                </h2>
                <div className="w-6 h-px bg-clay mb-5" />
                <p className="text-soil text-sm font-light leading-relaxed mb-3">{coach.bio}</p>
                <p className="text-driftwood text-sm font-light leading-relaxed mb-6">{coach.extended}</p>
                {coach.handles.length > 0 && (
                  <div className="flex flex-wrap gap-4">
                    {coach.handles.map((h) => (
                      <a
                        key={h.href}
                        href={h.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mono-label text-[10px] uppercase text-clay hover:text-turmeric transition-colors flex items-center gap-1.5"
                      >
                        {h.label}: {h.display}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="bg-bark py-14 md:py-18">
        <Container>
          <SectionHeader label="Philosophy" heading="How we coach" theme="dark" mb="mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {philosophy.map((v, i) => (
              <div
                key={v.label}
                className={`py-8 border-t border-soil ${i < 2 ? "md:border-r md:border-soil md:pr-10" : ""} ${i > 0 ? "md:pl-10" : ""}`}
              >
                <p className="mono-label text-turmeric text-[10px] uppercase mb-3">{v.label}</p>
                <p className="text-driftwood text-sm font-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ivory py-14 md:py-18">
        <Container className="text-center">
          <SectionHeader
            label="Ready to get started?"
            heading="Apply for coaching today"
            layout="stacked"
            headingSize="lg"
            mb="mb-6"
          />
          <Button href="https://form.typeform.com/to/LrpoZN7n">Start Your Journey →</Button>
        </Container>
      </section>
    </>
  );
}
