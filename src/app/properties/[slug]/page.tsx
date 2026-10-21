import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FloorPlans from "@/components/FloorPlans";
import { ArrowIcon, CheckIcon } from "@/components/Icons";
import PropertyCard from "@/components/PropertyCard";
import Reveal from "@/components/Reveal";
import { formatPrice, getProperty, img, properties } from "@/data/site";

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/properties/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const p = getProperty(slug);
  return p ? { title: p.name, description: p.lead } : {};
}

export default async function PropertyPage(props: PageProps<"/properties/[slug]">) {
  const { slug } = await props.params;
  const p = getProperty(slug);
  if (!p) notFound();

  const facts = [
    { label: "Location", value: p.location },
    { label: "Guide price", value: formatPrice(p.price) },
    { label: "Bedrooms", value: p.beds },
    { label: "Bathrooms", value: p.baths },
    { label: "Size", value: `${p.sqft.toLocaleString("en-US")} sq ft` },
    { label: "Type", value: p.type },
  ];
  const similar = properties.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="page-hero page-hero--property">
        <div className="container">
          <Reveal className="prop-hero">
            <div>
              <p className="eyebrow">{p.location}</p>
              <h1 className="page-hero__title">{p.name}</h1>
              <p className="prop-hero__meta">
                <span className="tag tag--inline">{p.status}</span>
                <span>{p.sqft.toLocaleString("en-US")} sq ft</span>
                <strong>{formatPrice(p.price)}</strong>
              </p>
            </div>
            <div className="btn-row">
              <Link href="/contact" className="btn btn--dark">
                Talk to an Agent <ArrowIcon />
              </Link>
              <Link href="/contact" className="btn btn--outline">
                Arrange a viewing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--flush-top">
        <div className="container">
          <Reveal className="prop-cover">
            <Image src={img(p.cover, 2200)} alt={p.name} fill priority sizes="100vw" className="cover" />
          </Reveal>

          <div className="prop-body">
            <Reveal className="prop-body__main">
              <p className="lead lead--lg">{p.lead}</p>
              {p.description.map((d) => (
                <p key={d}>{d}</p>
              ))}
              <h3>Key features</h3>
              <ul className="check-list">
                {p.features.map((f) => (
                  <li key={f}>
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="facts" delay={100}>
              {facts.map((f) => (
                <div className="fact" key={f.label}>
                  <span>{f.label}</span>
                  <strong>{f.value}</strong>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="gallery">
            {p.gallery.map((g, i) => (
              <Reveal className={`gallery__img gallery__img--${i + 1}`} key={g} delay={i * 100}>
                <Image src={img(g, 1400)} alt={`${p.name} interior ${i + 1}`} fill sizes="(max-width: 767px) 100vw, 50vw" className="cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Amenities</p>
            <h2>Everything in its place</h2>
          </Reveal>
          <ul className="amenities">
            {p.amenities.map((a) => (
              <li key={a}>
                <CheckIcon /> {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Floor plans</p>
            <h2>A look around, before you visit</h2>
          </Reveal>
          <FloorPlans plans={p.floorPlans} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container neighbourhood">
          <Reveal>
            <p className="eyebrow">The neighbourhood</p>
            <h2>Life around {p.location.split(",")[0]}</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="lead">{p.neighbourhood}</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow">You may also like</p>
            <h2>Similar homes</h2>
          </Reveal>
          <div className="grid-3">
            {similar.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <PropertyCard p={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
