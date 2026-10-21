import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PropertyCard from "@/components/PropertyCard";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { properties } from "@/data/site";

export const metadata: Metadata = { title: "Properties" };

export default function PropertiesPage() {
  const top = properties.slice(0, 3);
  const rest = properties.slice(3);
  return (
    <>
      <PageHero
        eyebrow="Properties"
        title="Homes we are selling now"
        text="A considered selection of houses, apartments and villas across San Francisco and the wider Bay Area."
      />
      <section className="section section--flush-top">
        <div className="container">
          <div className="grid-3">
            {top.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <PropertyCard p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="More homes" title="Everything else on our books" />
          <div className="grid-4">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <PropertyCard p={p} size="sm" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
