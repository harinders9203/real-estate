import type { Metadata } from "next";
import Image from "next/image";
import Counter from "@/components/Counter";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { img, stats, team } from "@/data/site";

export const metadata: Metadata = { title: "About" };

const values = [
  { title: "Honest advice", text: "We tell you what we really think — about price, condition and timing — even when it is not what you hoped to hear." },
  { title: "Design first", text: "We look at light, layout and build quality as closely as square footage, because that is what you live with." },
  { title: "Long relationships", text: "Most of our clients come back or send a friend. We measure success in years, not single transactions." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A small team with a long memory"
        text="Founded in 1998, Nestora is an independent agency built on careful advice, local knowledge and a love of good buildings."
      />
      <section className="section section--flush-top">
        <div className="container">
          <Reveal className="about-cover">
            <Image src={img("photo-1600047509807-ba8f99d2cdde", 2200)} alt="Nestora office" fill sizes="100vw" className="cover" />
          </Reveal>
          <div className="about-story">
            <Reveal>
              <h2>Our story</h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="lead">
                We started with one office and a simple idea: that people deserve an agent who cares as much about how
                a home feels as what it costs.
              </p>
              <p>
                More than two decades later, we have helped over a thousand families, investors and first-time buyers
                find their place in the Bay Area. We are still independent, still small enough to know every client by
                name, and still obsessed with getting the details right.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="stats stats--4">
            {stats.map((s, i) => (
              <Reveal className="stat" key={s.label} delay={i * 100}>
                <strong>
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </strong>
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="What we value" title="Three things we never compromise on" />
          <div className="grid-3">
            {values.map((v, i) => (
              <Reveal className="value-card" key={v.title} delay={i * 100}>
                <span className="service-card__num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Our team" title="The people behind every move" />
          <div className="grid-4">
            {team.map((t, i) => (
              <Reveal className="team-card" key={t.name} delay={i * 80}>
                <div className="team-card__img">
                  <Image src={img(t.image, 700)} alt={t.name} fill sizes="(max-width: 479px) 100vw, (max-width: 991px) 50vw, 25vw" className="cover" />
                </div>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
