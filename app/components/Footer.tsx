import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bark text-driftwood">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Image
              src="/logos/logo-ivory.png"
              alt="Junoon Coaching"
              width={130}
              height={40}
              sizes="130px"
              className="h-9 w-auto object-contain"
            />
            <p className="text-sm leading-relaxed text-driftwood max-w-xs">
              Shifting the culture. Elite fitness coaching built for the South Asian community — blending cultural understanding with elite training.
            </p>
            <div className="flex items-center gap-4 mt-1">
              <a
                href="http://instagram.com/arjavchhabra"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-driftwood hover:text-clay transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="http://tiktok.com/@singhaesthetics"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-driftwood hover:text-clay transition-colors"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.25 8.25 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z" />
                </svg>
              </a>
              <a
                href="mailto:Arjavfitness@gmail.com"
                aria-label="Email"
                className="text-driftwood hover:text-clay transition-colors"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mono-label text-xs uppercase text-clay mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/shop", label: "Shop" },
                { href: "/coaches", label: "Our Coaches" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-driftwood hover:text-ivory transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="mono-label text-xs uppercase text-clay mb-5">
              Start Your Journey
            </p>
            <p className="text-sm text-driftwood leading-relaxed mb-6 max-w-xs">
              Ready to transform your health and fitness? Apply to work with one of our coaches today.
            </p>
            <a
              href="https://form.typeform.com/to/LrpoZN7n"
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label inline-block bg-clay text-parchment text-xs uppercase px-6 py-3 hover:bg-saffron transition-colors"
            >
              Apply Now →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-soil pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="mono-label text-xs text-driftwood">
            © 2025 Coached By Arjav LLC. All rights reserved.
          </p>
          <p className="mono-label text-xs text-soil">
            Arjavfitness@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
