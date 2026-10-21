import Link from "next/link";
import { navLinks, services, site } from "@/data/site";
import { Logo, SocialIcon } from "./Icons";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="brand brand--light">
              <Logo />
              <span className="brand__name">{site.name}</span>
            </Link>
            <p>Design-led property advice for people who care where they live, not only what they spend.</p>
            <div className="footer__social">
              {(["instagram", "linkedin", "x", "facebook"] as const).map((s) => (
                <a key={s} href="#" aria-label={s}>
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href="/services">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Office</h4>
            <ul>
              <li>{site.address}</li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone}`}>{site.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__wordmark" aria-hidden="true">
          {site.name.toLowerCase()}
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.name}. All rights reserved.
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
