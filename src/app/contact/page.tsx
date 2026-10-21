import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const details = [
    { label: "Office", value: site.address },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Phone", value: site.phone, href: `tel:${site.phone}` },
    { label: "Hours", value: "Mon – Fri, 9am – 6pm · Sat, 10am – 4pm" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next move"
        text="Book a call, arrange a valuation or ask us anything. We reply to every message within one working day."
      />
      <section className="section section--flush-top">
        <div className="container contact">
          <Reveal className="contact__details">
            {details.map((d) => (
              <div className="contact__item" key={d.label}>
                <span>{d.label}</span>
                {d.href ? <a href={d.href}>{d.value}</a> : <p>{d.value}</p>}
              </div>
            ))}
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
