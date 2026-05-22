"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Container from "./Container";

const links = [
  { href: "/", label: "Home" },
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
      <Container className="flex items-center justify-between h-16">
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

        {/* Desktop nav — only visible md+ */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`mono-label text-xs uppercase transition-colors ${
                  active ? "text-clay" : "text-ivory/70 hover:text-ivory"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA — wrapper controls visibility, Button has no hidden class */}
        <div className="hidden md:block">
          <Button href="https://form.typeform.com/to/LrpoZN7n" size="sm">
            Apply Now
          </Button>
        </div>

        {/* Mobile hamburger — only visible below md */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-ivory transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-ivory transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-ivory transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-bark border-t border-soil px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="mono-label text-ivory/70 hover:text-ivory text-sm uppercase"
            >
              {label}
            </Link>
          ))}
          <div className="mt-2">
            <Button href="https://form.typeform.com/to/LrpoZN7n" className="w-full justify-center">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
