import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Button from "../components/Button";
import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Blog - Fitness & Nutrition for South Asians",
  description:
    "The Junoon Coaching blog - fitness training, Indian nutrition, and cultural health insights written by NASM-certified coaches for the South Asian community.",
  alternates: { canonical: "https://junooncoaching.com/blog" },
  openGraph: {
    title: "Blog - Fitness & Nutrition for South Asians | Junoon Coaching",
    description:
      "Expert fitness and nutrition articles written specifically for Indians and South Asians - from protein guides to cultural habit-building.",
    images: [{ url: "/images/og-image.webp", width: 1200, height: 630 }],
  },
};

// Pexels CDN helper - all images free under the Pexels License (no attribution required).
const PEXELS = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750`;

const posts = [
  {
    title: "How to Manage Summer Travel and Still Maintain Your Fitness Progress",
    date: "July 16, 2025",
    slug: "how-to-manage-summer-travel-and-still-maintain-your-fitness-progress",
    img: PEXELS(7368218), // person packing a suitcase - travel & preparation
    preview:
      "Summer travel is one of the biggest curveballs for anyone trying to stay on track with their fitness goals. Whether you're flying to India for a wedding, taking a family trip, or just trying to unwind, the lack of routine, abundance of food, and unpredictable schedules can make it feel like you're falling off track.",
    tag: "Lifestyle",
  },
  {
    title: "Why Are Indians Lazier When it Comes to Fitness?",
    date: "June 10, 2025",
    slug: "why-are-indians-lazier-when-it-comes-to-fitness-the-perspective-of-an-indian-fitness-coach",
    img: PEXELS(6455966), // ethnic sportsman gripping gym machine - culture & strength
    preview:
      "After coaching hundreds of South Asians across the world, a clear trend has emerged - and it needs to be addressed. We're incredibly smart and driven in academics and careers, but when it comes to taking care of our bodies, we lag behind. Badly.",
    tag: "Culture",
  },
  {
    title: "Why Doing Only Cardio is Ruining Your Fitness Progress",
    date: "April 2, 2025",
    slug: "why-doing-only-cardio-is-ruining-your-fitness-progress",
    img: PEXELS(3888343), // man running on treadmill - cardio training
    preview:
      "Cardio burns calories while you're doing it - but once you stop, your metabolism returns to normal. And if your diet doesn't have enough protein, you'll likely burn muscle, not just fat. Less muscle means a slower metabolism and easier fat gain down the road.",
    tag: "Training",
  },
  {
    title: "The Protein Dilemma: Why Indians in Western Countries Need More Protein",
    date: "March 19, 2025",
    slug: "the-protein-dilemma",
    img: PEXELS(6294263), // organic eggs on clean surface - protein & nutrition
    preview:
      "Indians living in Western countries face unique dietary challenges, especially around protein. Despite a rich culinary heritage, traditional Indian diets often severely lack sufficient protein - contributing to muscle loss, low energy, and weight gain.",
    tag: "Nutrition",
  },
  {
    title: "Building Habits: The Science Behind Fitness Progress",
    date: "March 10, 2025",
    slug: "building-habits-science-behind-fitness-progress",
    img: PEXELS(866027), // women exercising together - consistency & habit-building
    preview:
      "Research from University College London suggests it takes 66 days on average to form a new habit. Simple habits can take around 21 days; complex habits like following a structured fitness plan can take closer to 90 days.",
    tag: "Mindset",
  },
  {
    title: "High Protein Indian Foods",
    date: "February 26, 2025",
    slug: "high-protein-indian-foods",
    img: PEXELS(4198930), // assorted ground Indian spices in bowls - Indian food & nutrition
    preview:
      "The Indian diet is full of rich flavours and tradition, but it lacks one crucial element for fitness and muscle building - protein. In this article we share high-protein Indian foods that help you build muscle while still enjoying your favourite dishes.",
    tag: "Nutrition",
  },
  {
    title: "How Indian History & Culture Shaped Our Health Today",
    date: "February 11, 2025",
    slug: "how-indian-history-amp-culture-shaped-our-health-today",
    img: PEXELS(20408435), // traditional meal in pot with spice bowls - heritage & culture
    preview:
      "To understand why so many Indians struggle with weight gain, insulin resistance, and a lack of muscle mass, we need to look back at the history that forced dietary shifts - and how our inherited eating habits no longer align with our modern lifestyles.",
    tag: "Culture",
  },
  {
    title: "The Role of the Indian Diet in Health Issues Among Indians in the U.S.",
    date: "January 30, 2025",
    slug: "indian-diet-health-issues",
    img: PEXELS(3838696), // fit man in gym - health & lifestyle
    preview:
      "Indians have a rich history of food and traditions, yet these dietary habits often intersect with modern health challenges in the U.S. With rising rates of obesity, diabetes, and heart disease, it's essential to understand the dual role the Indian diet plays.",
    tag: "Health",
  },
];

const tagColors: Record<string, string> = {
  Lifestyle: "bg-sage/20 text-moss",
  Culture: "bg-blush/20 text-clay",
  Training: "bg-indigo/10 text-indigo",
  Nutrition: "bg-turmeric/20 text-soil",
  Mindset: "bg-linen text-driftwood",
  Health: "bg-clay/10 text-clay",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero label="Knowledge & culture" title="The CBA Blog" />

      {/* ── FEATURED POST ── */}
      <section className="bg-cream py-14 md:py-18">
        <Container>
          <p className="mono-label text-[10px] uppercase text-driftwood mb-6">Latest article</p>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-parchment border border-linen hover:border-clay transition-colors"
          >
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-linen">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className={`mono-label text-[10px] uppercase px-2 py-1 ${tagColors[featured.tag] ?? "bg-linen text-driftwood"}`}>
                  {featured.tag}
                </span>
                <span className="mono-label text-driftwood text-[10px]">{featured.date}</span>
              </div>
              <h2 className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-light text-bark tracking-tight leading-[1.15] mb-4 group-hover:text-clay transition-colors">
                {featured.title}
              </h2>
              <p className="text-soil text-sm font-light leading-relaxed mb-6">{featured.preview}</p>
              <span className="mono-label text-clay text-[10px] uppercase flex items-center gap-1.5 group-hover:gap-3 transition-all">
                Read article →
              </span>
            </div>
          </Link>
        </Container>
      </section>

      {/* ── ALL POSTS ── */}
      <section className="bg-cream pb-16 md:pb-20">
        <Container>
          <div className="border-t border-linen pt-10 mb-8">
            <p className="mono-label text-[10px] uppercase text-driftwood">
              All articles - {rest.length + 1} posts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-parchment border border-linen hover:border-clay transition-colors"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-linen">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`mono-label text-[9px] uppercase px-2 py-1 ${tagColors[post.tag] ?? "bg-linen text-driftwood"}`}>
                      {post.tag}
                    </span>
                    <span className="mono-label text-driftwood text-[9px]">{post.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-light text-bark leading-[1.2] mb-3 group-hover:text-clay transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-soil text-xs font-light leading-relaxed flex-1 mb-4 line-clamp-3">
                    {post.preview}
                  </p>
                  <span className="mono-label text-clay text-[9px] uppercase flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                    Read →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-ivory py-14 md:py-18">
        <Container className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="max-w-xl">
            <SectionHeader
              label="Stay in the loop"
              heading="Want coaching, not just content?"
              layout="stacked"
              mb="mb-4"
            />
            <p className="text-soil text-sm font-light leading-relaxed max-w-md">
              The blog gives you the knowledge. Our coaching gives you the plan, the accountability, and the results. Apply to work with a Junoon coach today.
            </p>
          </div>
          <div className="shrink-0">
            <Button href="https://form.typeform.com/to/LrpoZN7n">Apply for Coaching →</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
