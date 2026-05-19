import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop Junoon Coaching resources — recipe books and nutrition guides built for the South Asian community.",
};

export default function ShopPage() {
  return (
    <>
      {/* ── PAGE HEADER ── */}
      <section className="bg-bark py-24 md:py-36">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <p className="mono-label text-[10px] uppercase text-clay mb-4">
            Resources
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-light text-ivory leading-[0.95] tracking-tight">
            Shop
          </h1>
          <p className="font-display text-driftwood font-light italic mt-5 max-w-md" style={{ fontSize: "1.25rem" }}>
            Progress waits for no one…
          </p>
        </div>
      </section>

      {/* ── PRODUCT LISTING ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">

          {/* Single product: Recipe Book */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-parchment border border-linen">
            {/* Product image — square, half the 1200px container on desktop */}
            <div className="relative aspect-square overflow-hidden bg-linen">
              <Image
                src="/images/recipe.webp"
                alt="Junoon Coaching Recipe Book"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-clay text-parchment px-3 py-1.5">
                <span className="mono-label text-[10px] uppercase">
                  Best seller
                </span>
              </div>
            </div>

            {/* Product details */}
            <div className="flex flex-col justify-center p-10 md:p-14">
              <p className="mono-label text-clay text-[10px] uppercase mb-4">
                Digital download
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-light text-bark tracking-tight leading-[1.1] mb-2">
                Recipe Book
              </h2>
              <p className="font-display text-[2rem] font-light text-clay mb-6">
                $36.00
              </p>

              <div className="w-8 h-px bg-linen mb-6" />

              <p className="text-soil text-sm font-light leading-relaxed mb-8">
                Custom recipes for every fitness goal. 35+ recipes across a variety of sections and styles — covering every goal including low calorie, vegetarian, non-veg, and gluten free.
              </p>

              {/* What&apos;s inside */}
              <div className="mb-8">
                <p className="mono-label text-[10px] uppercase text-driftwood mb-4">
                  What&apos;s inside
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "35+ custom South Asian–friendly recipes",
                    "Low calorie options for fat loss",
                    "Vegetarian & non-veg varieties",
                    "Gluten free alternatives",
                    "Macro breakdowns for each recipe",
                    "Designed to fit your fitness goals",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-soil font-light">
                      <span className="text-clay mt-0.5">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://javcoaching.com/store-1-2/p/recipe-book"
                target="_blank"
                rel="noopener noreferrer"
                className="mono-label inline-flex items-center justify-center bg-clay text-parchment px-8 py-4 text-xs uppercase hover:bg-saffron transition-colors w-full md:w-auto"
              >
                Purchase — $36.00 →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ── COACHING CTA ── */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mono-label text-clay text-[10px] uppercase mb-4">
              Go further
            </p>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-light text-bark tracking-tight leading-[1.1]">
              Want a fully personalised plan?
            </h2>
            <p className="text-soil text-sm font-light leading-relaxed mt-5 mb-8 max-w-md">
              The recipe book is a great start. But nothing replaces working 1-on-1 with a coach who understands your lifestyle, culture, and goals. Apply for coaching today.
            </p>
            <a
              href="https://form.typeform.com/to/LrpoZN7n"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label inline-flex items-center gap-3 bg-clay text-parchment px-10 py-4 text-xs uppercase hover:bg-saffron transition-colors"
            >
              Apply for Coaching →
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-linen">
            <Image
              src="/images/IMG_3693.webp"
              alt="Coaching result"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
}
