"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";
import { ArrowIcon, Logo } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(pathname);
  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="container header__inner">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <Logo />
          <span className="brand__name">{site.name}</span>
          <span className="brand__tag">{site.tagline}</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={`nav__link ${pathname === l.href ? "is-active" : ""}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn--dark header__cta">
          Book a Call <ArrowIcon />
        </Link>

        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-menu" aria-hidden={!open}>
        <nav className="mobile-menu__nav">
          {navLinks.map((l, i) => (
            <Link key={l.href} href={l.href} style={{ transitionDelay: `${open ? 80 + i * 50 : 0}ms` }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone}`}>{site.phone}</a>
          <Link href="/contact" className="btn btn--accent">
            Book a Call <ArrowIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}
