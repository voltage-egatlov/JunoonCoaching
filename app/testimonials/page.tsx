import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Real client stories from Junoon Coaching — weight loss, muscle gain, and lasting lifestyle change for the South Asian community.",
};

const reviews = [
  {
    name: "Sagar Pandya",
    age: 28,
    img: "/images/IMG_1005.webp",
    short: "Lost over 10 kg",
    review:
      "Working with Arjav over the last three months has been an absolutely transformative experience. His expertise as a fitness and diet coach is unmatched, and his unwavering support has been key in helping me lose over 10 kg — a goal I had struggled to achieve for a long time. What sets Arjav apart is his personalized approach. He took the time to understand my lifestyle, preferences, and challenges, crafting a diet and exercise plan that was not only effective but also sustainable. His daily follow-ups kept me accountable and motivated, and his encouragement during difficult moments made all the difference. Thanks to his dedication, I feel healthier, more confident, and energized than ever. If you're looking for someone who is truly committed to your success, Arjav is the coach to have by your side.",
  },
  {
    name: "Varun V",
    age: 34,
    img: "/images/varad.webp",
    short: "Major muscle growth and toning",
    review:
      "Arjav's style of guidance is the most sustainable. He considers your own lifestyle and diet and then makes sustainable adjustments. I have seen very good muscle growth and toning under Arjav's guidance and he has my positive feedback even in private. All my friends acknowledge that I'm looking fit. Keep it up mate!",
  },
  {
    name: "Baljinder Sandhu",
    age: 52,
    img: "/images/IMG_3802.webp",
    short: "Visible results in 4–6 weeks",
    review:
      "It was a great experience having coaching from Arjav. I had three key issues: consuming a proper balanced diet without compromising much of my current diet; weight training exercises and a schedule I could follow; and proper nutrition intake from both food and supplements. Arjav addressed each area with great diligence. Being 52 years of age and leading a semi-active lifestyle with the majority of my day at a desk, I was able to see the results clearly after 4–6 weeks. The best thing about my fitness journey with Arjav was that everything was clearly laid out on Google Sheets and Docs — easy to follow and communicate. I would definitely recommend Arjav for fitness journeys for all age groups.",
  },
  {
    name: "Arpan P",
    age: 21,
    img: "/images/arpan.webp",
    short: "Finally in control of his diet",
    review:
      "Arjav did a great job helping me stick to my diet, which was one of my biggest issues. Rather than completely cutting out things I enjoyed, he showed me how to utilize them so they fit into my diet and so I could still have a good time. He also really helped with making sure I was feeling okay — a lot of the time because of school I overate, and he gave me different strategies I could use to avoid that.",
  },
  {
    name: "Ambica N",
    age: 32,
    img: "/images/IMG_2321.webp",
    short: "The only coach for the Indian community",
    review:
      "Arjav's unique, one-of-a-kind fitness and nutrition program is incredibly effective and targeted to those who prefer an Indian cuisine for their regular diet. He was the only person I could find whose plans specifically served the Indian community. The best part of his program is his unique Eating Out Guide. As a busy physician, I often relied on eating out while travelling, and he really helped me stay on track with my inconsistent lifestyle. Personally, Arjav is reliable, honest, trustworthy, supportive and professional. He helped motivate me when I felt sad and overwhelmed with life. His plan is also a great deal — very reasonably priced compared to other fitness coaches.",
  },
  {
    name: "Anonymous Client",
    age: 32,
    img: "/images/IMG_2625.webp",
    short: "Sustainable habits, genuine care",
    review:
      "My heartfelt gratitude goes to Arjav for the incredible support and guidance he has provided throughout my fitness and nutrition journey. Arjav's personalized approach to designing my diet plan and fitness routine has made all the difference. He meticulously reviewed my blood work, considered my food habits, and took the time to gain a detailed understanding of me and my fitness goals. His thoughtful planning has helped me build sustainable habits that seamlessly fit into my lifestyle. This coaching journey has been about so much more than numbers or routines — it's been about Arjav's genuine care and commitment to helping me become the best version of myself.",
  },
  {
    name: "Anonymous Client",
    age: 24,
    img: "/images/IMG_5067.webp",
    short: "Awesome progress",
    review:
      "Arjav's knowledge in fitness and nutrition is unmatched. He designed a plan that fit my specific needs. He's always available for questions and offers advice and explanations, making the whole process easy to understand. I've started to see awesome progress.",
  },
  {
    name: "Anonymous Client",
    age: null,
    img: "/images/IMG_1418.webp",
    short: "Grateful",
    review: "Thank you Arjav for all you do!",
  },
];

const transformationPhotos = [
  "/images/IMG_3693.webp",
  "/images/IMG_3689.webp",
  "/images/IMG_3802.webp",
  "/images/montage.webp",
  "/images/arpan.webp",
  "/images/IMG_5067.webp",
  "/images/IMG_2321.webp",
  "/images/IMG_1418.webp",
  "/images/IMG_2625.webp",
  "/images/varad.webp",
];

export default function TestimonialsPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-bark py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="mono-label text-[10px] uppercase text-clay mb-4">
            What our clients say
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light text-ivory leading-[0.95] tracking-tight">
            Testimonials
          </h1>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-clay">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-10 grid grid-cols-3 gap-6 md:gap-12 text-center">
          {[
            { stat: "60 lbs", label: "Arjav's personal journey" },
            { stat: "10+ kg", label: "Average client fat loss" },
            { stat: "4–6 wks", label: "Avg. time to visible results" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <p className="font-display text-[clamp(1.5rem,4vw,2.5rem)] font-light text-parchment leading-none mb-2">
                {stat}
              </p>
              <p className="mono-label text-parchment/60 text-[10px] uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-0">
            {reviews.map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0 border-t border-linen py-12 md:py-16"
              >
                {/* Left: client info */}
                <div className="flex md:flex-col items-center md:items-start gap-4 mb-6 md:mb-0 md:pr-10">
                  <div className="relative w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden bg-linen shrink-0">
                    <Image
                      src={r.img}
                      alt={r.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-bark font-medium text-sm">{r.name}</p>
                    {r.age && (
                      <p className="mono-label text-driftwood text-[10px] tracking-widest mt-0.5">
                        Age {r.age}
                      </p>
                    )}
                    <p className="text-clay text-xs mt-2 font-medium">{r.short}</p>
                  </div>
                </div>

                {/* Right: review */}
                <div>
                  <div className="w-6 h-px bg-clay mb-6" />
                  <p className="font-display text-soil text-[clamp(1rem,1.5vw,1.2rem)] font-light leading-relaxed">
                    &ldquo;{r.review}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Close border */}
          <div className="border-t border-linen" />
        </div>
      </section>

      {/* ── TRANSFORMATION GALLERY ── */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex items-baseline gap-4 mb-10">
            <span className="mono-label text-clay text-[10px] uppercase">
              Visuals
            </span>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-light text-bark tracking-tight">
              Transformation gallery
            </h2>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-5 gap-2 md:gap-3 space-y-2 md:space-y-3">
            {transformationPhotos.map((src, i) => (
              <div key={i} className="relative overflow-hidden bg-linen break-inside-avoid">
                <Image
                  src={src}
                  alt={`Client transformation ${i + 1}`}
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bark py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 text-center">
          <p className="mono-label text-clay text-[10px] uppercase mb-4">
            Write your own story
          </p>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-ivory tracking-tight mb-8">
            Your transformation begins today
          </h2>
          <a
            href="https://form.typeform.com/to/LrpoZN7n"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label inline-flex items-center gap-3 bg-clay text-parchment px-10 py-4 text-xs uppercase hover:bg-saffron transition-colors"
          >
            Apply for Coaching →
          </a>
        </div>
      </section>
    </>
  );
}
