import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "The Junoon Coaching blog — fitness, nutrition, and cultural insights for the South Asian community.",
};

const posts = [
  {
    title: "How to Manage Summer Travel and Still Maintain Your Fitness Progress",
    date: "July 16, 2025",
    slug: "how-to-manage-summer-travel-and-still-maintain-your-fitness-progress",
    img: "/images/arjav-blog.webp",
    preview:
      "Summer travel is one of the biggest curveballs for anyone trying to stay on track with their fitness goals. Whether you're flying to India for a wedding, taking a family trip, or just trying to unwind, the lack of routine, abundance of food, and unpredictable schedules can make it feel like you're falling off track.",
    tag: "Lifestyle",
  },
  {
    title: "Why Are Indians Lazier When it Comes to Fitness?",
    date: "June 10, 2025",
    slug: "why-are-indians-lazier-when-it-comes-to-fitness-the-perspective-of-an-indian-fitness-coach",
    img: "/images/hero-main.webp",
    preview:
      "After coaching hundreds of South Asians across the world, a clear trend has emerged — and it needs to be addressed. We're incredibly smart and driven in academics and careers, but when it comes to taking care of our bodies, we lag behind. Badly.",
    tag: "Culture",
  },
  {
    title: "Why Doing Only Cardio is Ruining Your Fitness Progress",
    date: "April 2, 2025",
    slug: "why-doing-only-cardio-is-ruining-your-fitness-progress",
    img: "/images/hero-main.webp",
    preview:
      "Cardio burns calories while you're doing it — but once you stop, your metabolism returns to normal. And if your diet doesn't have enough protein, you'll likely burn muscle, not just fat. Less muscle means a slower metabolism and easier fat gain down the road.",
    tag: "Training",
  },
  {
    title: "The Protein Dilemma: Why Indians in Western Countries Need More Protein",
    date: "March 19, 2025",
    slug: "blog5",
    img: "/images/hero-main.webp",
    preview:
      "Indians living in Western countries face unique dietary challenges, especially around protein. Despite a rich culinary heritage, traditional Indian diets often severely lack sufficient protein — contributing to muscle loss, low energy, and weight gain.",
    tag: "Nutrition",
  },
  {
    title: "Building Habits: The Science Behind Fitness Progress",
    date: "March 10, 2025",
    slug: "d5j1gkseixm9uz790cku9lmdl1oz21",
    img: "/images/hero-main.webp",
    preview:
      "Research from University College London suggests it takes 66 days on average to form a new habit. Simple habits can take around 21 days; complex habits like following a structured fitness plan can take closer to 90 days. Understanding the science helps you build them.",
    tag: "Mindset",
  },
  {
    title: "High Protein Indian Foods",
    date: "February 26, 2025",
    slug: "high-protein-indian-foods",
    img: "/images/hero-main.webp",
    preview:
      "The Indian diet is full of rich flavours and tradition, but it lacks one crucial element for fitness and muscle building — protein. In this article we share high-protein Indian foods that help you build muscle while still enjoying your favourite dishes.",
    tag: "Nutrition",
  },
  {
    title: "How Indian History & Culture Shaped Our Health Today",
    date: "February 11, 2025",
    slug: "how-indian-history-amp-culture-shaped-our-health-today",
    img: "/images/hero-main.webp",
    preview:
      "To understand why so many Indians struggle with weight gain, insulin resistance, and a lack of muscle mass, we need to look back at the history that forced dietary shifts — and how our inherited eating habits no longer align with our modern lifestyles.",
    tag: "Culture",
  },
  {
    title: "The Role of the Indian Diet in Health Issues Among Indians in the U.S.",
    date: "January 30, 2025",
    slug: "blog-post-title-one-2pkn4",
    img: "/images/hero-main.webp",
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
      {/* ── PAGE HEADER ── */}
      <section className="bg-bark py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="mono-label text-[10px] uppercase text-clay mb-4">
            Knowledge & culture
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light text-ivory leading-[0.95] tracking-tight">
            The CBA Blog
          </h1>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="mono-label text-[10px] uppercase text-driftwood mb-8">
            Latest article
          </p>
          <a
            href={`https://javcoaching.com/cbablog/${featured.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-1 md:grid-cols-2 gap-0 bg-parchment border border-linen hover:border-clay transition-colors"
          >
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden bg-linen">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                // Half of 1200px on desktop, full width on mobile
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`mono-label text-[10px] uppercase px-2 py-1 ${tagColors[featured.tag] ?? "bg-linen text-driftwood"}`}
                >
                  {featured.tag}
                </span>
                <span className="mono-label text-driftwood text-[10px]">
                  {featured.date}
                </span>
              </div>
              <h2 className="font-display text-[clamp(1.5rem,2.5vw,2.25rem)] font-light text-bark tracking-tight leading-[1.15] mb-4 group-hover:text-clay transition-colors">
                {featured.title}
              </h2>
              <p className="text-soil text-sm font-light leading-relaxed mb-6">
                {featured.preview}
              </p>
              <span className="mono-label text-clay text-[10px] uppercase flex items-center gap-1.5 group-hover:gap-3 transition-all">
                Read article →
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ── ALL POSTS ── */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="border-t border-linen pt-16 mb-10">
            <p className="mono-label text-[10px] uppercase text-driftwood">
              All articles — {rest.length + 1} posts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rest.map((post) => (
              <a
                key={post.slug}
                href={`https://javcoaching.com/cbablog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-parchment border border-linen hover:border-clay transition-colors"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-linen">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    // 1 col mobile → 2 col tablet → 3 col desktop (max 1200px)
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`mono-label text-[9px] uppercase px-2 py-1 ${tagColors[post.tag] ?? "bg-linen text-driftwood"}`}
                    >
                      {post.tag}
                    </span>
                    <span className="mono-label text-driftwood text-[9px]">
                      {post.date}
                    </span>
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER / CTA ── */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="max-w-xl">
            <p className="mono-label text-clay text-[10px] uppercase mb-3">
              Stay in the loop
            </p>
            <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-bark tracking-tight">
              Want coaching, not just content?
            </h2>
            <p className="text-soil text-sm font-light leading-relaxed mt-4 max-w-md">
              The blog gives you the knowledge. Our coaching gives you the plan, the accountability, and the results. Apply to work with a Junoon coach today.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="https://form.typeform.com/to/LrpoZN7n"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label inline-flex items-center gap-3 bg-clay text-parchment px-10 py-4 text-xs uppercase hover:bg-saffron transition-colors"
            >
              Apply for Coaching →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
