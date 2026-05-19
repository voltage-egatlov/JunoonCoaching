"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/coaches", label: "Our Coaches" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bark border-b border-soil">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logos/logo-ivory.png"
            alt="Junoon Coaching"
            width={120}
            height={36}
            sizes="120px"
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`mono-label text-xs uppercase transition-colors ${
                  active ? "text-clay" : "text-driftwood hover:text-ivory"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://form.typeform.com/to/LrpoZN7n"
          target="_blank"
          rel="noopener noreferrer"
          className="mono-label hidden md:inline-flex items-center gap-2 bg-clay text-parchment text-xs uppercase px-5 py-2.5 hover:bg-saffron transition-colors"
        >
          Apply Now
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-ivory transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-ivory transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-ivory transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bark border-t border-soil px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="mono-label text-driftwood hover:text-ivory text-sm uppercase"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://form.typeform.com/to/LrpoZN7n"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-label mt-2 bg-clay text-parchment text-xs uppercase px-5 py-3 text-center hover:bg-saffron transition-colors"
          >
            Apply Now
          </a>
        </div>
      )}
    </header>
  );
}
