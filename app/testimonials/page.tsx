import type { Metadata } from "next";
import Gallery from "../components/Gallery";
import type { GalleryImage } from "../components/Gallery";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Real results from real South Asian clients. Read how Junoon Coaching helped Indians worldwide lose weight, build muscle, and transform their health.",
  alternates: { canonical: "https://junooncoaching.com/testimonials" },
  openGraph: {
    title: "Client Testimonials | Junoon Coaching",
    description:
      "Real results from real South Asian clients - 10+ kg fat loss, visible results in 4–6 weeks, and lasting lifestyle change.",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
  },
};

const reviews = [
  {
    name: "Sagar Pandya",
    age: 28,
    short: "Lost over 10 kg",
    review:
      "Working with Arjav over the last three months has been an absolutely transformative experience. His expertise as a fitness and diet coach is unmatched, and his unwavering support has been key in helping me lose over 10 kg - a goal I had struggled to achieve for a long time. What sets Arjav apart is his personalized approach. He took the time to understand my lifestyle, preferences, and challenges, crafting a diet and exercise plan that was not only effective but also sustainable.",
  },
  {
    name: "Varun V",
    age: 34,
    short: "Major muscle growth and toning",
    review:
      "Arjav's style of guidance is the most sustainable. He considers your own lifestyle and diet and then makes sustainable adjustments. I have seen very good muscle growth and toning under Arjav's guidance. All my friends acknowledge that I'm looking fit. Keep it up mate!",
  },
  {
    name: "Baljinder Sandhu",
    age: 52,
    short: "Visible results in 4–6 weeks",
    review:
      "It was a great experience having coaching from Arjav. I had three key issues: consuming a proper balanced diet without compromising much of my current diet; weight training exercises and a schedule I could follow; and proper nutrition intake from both food and supplements. Arjav addressed each area with great diligence. Being 52 years of age and leading a semi-active lifestyle with the majority of my day at a desk, I was able to see the results clearly after 4–6 weeks.",
  },
  {
    name: "Arpan P",
    age: 21,
    short: "Finally in control of his diet",
    review:
      "Arjav did a great job helping me stick to my diet, which was one of my biggest issues. Rather than completely cutting out things I enjoyed, he showed me how to utilize them so they fit into my diet and so I could still have a good time. He also really helped with making sure I was feeling okay - a lot of the time because of school I overate, and he gave me different strategies I could use to avoid that.",
  },
  {
    name: "Ambica N",
    age: 32,
    short: "The only coach for the Indian community",
    review:
      "Arjav's unique, one-of-a-kind fitness and nutrition program is incredibly effective and targeted to those who prefer an Indian cuisine for their regular diet. He was the only person I could find whose plans specifically served the Indian community. The best part of his program is his unique Eating Out Guide. As a busy physician, I often relied on eating out while travelling, and he really helped me stay on track with my inconsistent lifestyle.",
  },
  {
    name: "Anonymous Client",
    age: 32,
    short: "Sustainable habits, genuine care",
    review:
      "My heartfelt gratitude goes to Arjav for the incredible support and guidance he has provided throughout my fitness and nutrition journey. Arjav's personalized approach to designing my diet plan and fitness routine has made all the difference. He meticulously reviewed my blood work, considered my food habits, and took the time to gain a detailed understanding of me and my fitness goals.",
  },
  {
    name: "Anonymous Client",
    age: 24,
    short: "Awesome progress",
    review:
      "Arjav's knowledge in fitness and nutrition is unmatched. He designed a plan that fit my specific needs. He's always available for questions and offers advice and explanations, making the whole process easy to understand. I've started to see awesome progress.",
  },
  {
    name: "Anonymous Client",
    age: null,
    short: "Grateful",
    review: "Thank you Arjav for all you do!",
  },
];

const transformationPhotos: GalleryImage[] = [
  { src: "/images/IMG_3693.webp", alt: "Client transformation" },
  { src: "/images/IMG_3689.webp", alt: "Client result" },
  { src: "/images/IMG_3802.webp", alt: "Client before and after" },
  { src: "/images/montage.webp", alt: "Client montage" },
  { src: "/images/arpan.webp", alt: "Client progress" },
  { src: "/images/IMG_5067.webp", alt: "Client training" },
  { src: "/images/IMG_2321.webp", alt: "Client transformation" },
  { src: "/images/IMG_1418.webp", alt: "Client progress" },
  { src: "/images/IMG_2625.webp", alt: "Client result" },
  { src: "/images/varad.webp", alt: "Client transformation" },
];

export default function TestimonialsPage() {
  return (
    <>
      <PageHero label="What our clients say" title="Testimonials" />

      {/* ── STATS BAR ── */}
      <section className="bg-clay">
        <Container className="py-8 grid grid-cols-3 gap-6 md:gap-12 text-center">
          {[
            { stat: "60 lbs", label: "Arjav's personal journey" },
            { stat: "10+ kg", label: "Average client fat loss" },
            { stat: "4–6 wks", label: "Avg. time to visible results" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p className="font-display text-[clamp(1.5rem,4vw,2.5rem)] font-light text-parchment leading-none mb-1">
                {stat}
              </p>
              <p className="mono-label text-parchment/60 text-[10px] uppercase">{label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-cream py-14 md:py-20">
        <Container>
          <div className="flex flex-col gap-0">
            {reviews.map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-0 border-t border-linen py-9 md:py-12"
              >
                {/* Left: client info */}
                <div className="flex md:flex-col gap-3 mb-5 md:mb-0 md:pr-8">
                  <div>
                    <p className="text-bark font-medium text-sm">{r.name}</p>
                    {r.age && (
                      <p className="mono-label text-driftwood text-[10px] tracking-widest mt-0.5">
                        Age {r.age}
                      </p>
                    )}
                    <p className="text-clay text-xs mt-1.5 font-medium">{r.short}</p>
                  </div>
                </div>

                {/* Right: review */}
                <div>
                  <div className="w-5 h-px bg-clay mb-5" />
                  <p className="font-display text-soil text-[clamp(1rem,1.5vw,1.15rem)] font-light leading-relaxed">
                    &ldquo;{r.review}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-linen" />
        </Container>
      </section>

      {/* ── TRANSFORMATION GALLERY ── */}
      <section className="bg-ivory py-14 md:py-18">
        <Container>
          <SectionHeader label="Visuals" heading="Transformation gallery" mb="mb-8" />
          <Gallery
            images={transformationPhotos}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            gridClassName="columns-2 md:columns-3 lg:columns-5 gap-2 md:gap-3 space-y-2 md:space-y-3"
          />
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bark py-14 md:py-18">
        <Container className="text-center">
          <SectionHeader
            label="Write your own story"
            heading="Your transformation begins today"
            layout="stacked"
            theme="dark"
            headingSize="lg"
            mb="mb-6"
          />
          <Button href="https://form.typeform.com/to/LrpoZN7n">Apply for Coaching →</Button>
        </Container>
      </section>
    </>
  );
}
