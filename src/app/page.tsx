import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import Faq from "@/components/Faq";
import { ArrowIcon, AwardIcon, PlusIcon, StepIcon } from "@/components/Icons";
import Marquee from "@/components/Marquee";
import PropertyCard from "@/components/PropertyCard";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import Testimonials from "@/components/Testimonials";
import {
  awards,
  clientLogos,
  faqs,
  img,
  process,
  properties,
  services,
  stats,
  support,
  testimonials,
  trustItems,
} from "@/data/site";

export default function Home() {
  const featured = properties.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero__grid">
            <Reveal className="hero__copy">
              <p className="eyebrow">Help buyers see their future home</p>
              <h1 className="hero__title">
                Turn your dreams <br />
                into an address
              </h1>
              <div className="btn-row">
                <Link href="/contact" className="btn btn--dark btn--lg">
                  Work with Us <ArrowIcon />
                </Link>
                <Link href="/properties" className="btn btn--outline btn--lg">
                  View Properties
                </Link>
              </div>
            </Reveal>
            <Reveal className="hero__media" delay={150}>
              <div className="hero__img hero__img--main">
                <Image src={img("photo-1600585154340-be6161a56a0c", 1800)} alt="Modern home at dusk" fill priority sizes="(max-width: 991px) 100vw, 60vw" className="cover" />
              </div>
              <div className="hero__img hero__img--side">
                <Image src={img("photo-1541888946425-d81bb19240f5", 900)} alt="Architect reviewing plans" fill sizes="(max-width: 991px) 50vw, 25vw" className="cover" />
              </div>
              <div className="hero__badge">
                <strong>
                  <Counter value={28} suffix="+" />
                </strong>
                <span>Years of experience</span>
              </div>
            </Reveal>
          </div>
        </div>
        <Marquee
          className="marquee--since"
          speed={30}
          items={Array.from({ length: 6 }, (_, i) => (
            <span className="since" key={i}>
              <span className="dot" /> Since 1998
            </span>
          ))}
        />
      </section>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="pull-quote">
              Good design draws together the many strands of place-making, stewardship and community that make a
              house feel like home.
            </p>
          </Reveal>
          <div className="intro__grid">
            <Reveal className="intro__about">
              <p className="eyebrow">About Us</p>
              <p className="lead">
                We work with people who care where they live, not only what they spend. Every search starts with how
                you want your days to feel — then we find the address that fits.
              </p>
              <Link href="/about" className="link-arrow">
                More about us <ArrowIcon />
              </Link>
            </Reveal>
            <div className="pillars">
              {["Design-Led Search", "Structure & Survey", "Energy & Longevity"].map((t, i) => (
                <Reveal className="pillar" key={t} delay={i * 100}>
                  <span className="pillar__num">0{i + 1}</span>
                  <h3>{t}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL ROW */}
      <section className="section section--muted">
        <div className="container">
          <div className="grid-3">
            {testimonials.slice(0, 3).map((t, i) => (
              <Reveal className="mini-quote" key={t.name} delay={i * 100}>
                <p>“{t.quote}”</p>
                <span>
                  {t.name} • {t.role}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* COLLAGE */}
      <section className="section">
        <div className="container collage">
          <Reveal className="collage__text">
            <h2>Helping clients turn a shortlist into the right address.</h2>
            <div className="collage__stat">
              <strong>
                <Counter value={3} suffix="x" />
              </strong>
              <span>Average return on renovation advice</span>
            </div>
          </Reveal>
          <div className="collage__imgs">
            {["photo-1512917774080-9991f1c4c750", "photo-1605276374104-dee2a0ed3cd6", "photo-1449844908441-8829872d2607"].map((id, i) => (
              <Reveal className={`collage__img collage__img--${i + 1}`} key={id} delay={i * 120}>
                <Image src={img(id, 900)} alt="" fill sizes="(max-width: 767px) 50vw, 25vw" className="cover" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="What we provide"
            title="Taking the guesswork out of moving home"
            aside={<span className="counter-label">Services +00{services.length}</span>}
          />
          <div className="services">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link href="/services" className="service-card">
                  <div className="service-card__head">
                    <span className="service-card__num">0{i + 1}</span>
                    <span className="service-card__arrow">
                      <ArrowIcon />
                    </span>
                  </div>
                  <h3>{s.title}</h3>
                  <ul>
                    {s.points.map((pt) => (
                      <li key={pt}>
                        <PlusIcon size={12} /> {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="service-card__img">
                    <Image src={img(s.image, 800)} alt="" fill sizes="(max-width: 767px) 100vw, 25vw" className="cover" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section className="section section--tight">
        <div className="container">
          <Reveal>
            <h3 className="h3">Support beyond buying and selling</h3>
          </Reveal>
          <div className="grid-3 support">
            {support.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <Link href="/services" className="support-card">
                  <Image src={img(s.image, 1000)} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" className="cover" />
                  <div className="support-card__body">
                    <h4>{s.title}</h4>
                    <span className="support-card__more">
                      Learn More <ArrowIcon />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="Stages of a sale" title="From first brief to final keys" />
          <div className="steps">
            {process.map((s, i) => (
              <Reveal className="step" key={s.title} delay={i * 100}>
                <div className="step__top">
                  <StepIcon i={i} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <Marquee
        className="marquee--trust"
        speed={35}
        items={trustItems.map((t) => (
          <span className="trust" key={t}>
            <span className="dot" /> {t}
          </span>
        ))}
      />

      {/* AWARDS + STATS */}
      <section className="section">
        <div className="container">
          <div className="awards">
            {awards.map((a, i) => (
              <Reveal className="award" key={a.title} delay={i * 100}>
                <AwardIcon />
                <div>
                  <span>{a.year}</span>
                  <p>{a.title}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="stats-wrap">
            <Reveal>
              <p className="lead lead--lg">
                Over twenty-five years we have refined how homes are found, valued and sold — and the numbers speak
                for themselves.
              </p>
            </Reveal>
            <div className="stats">
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

          <p className="logos-title">Trusted by 300+ clients across the Bay Area</p>
        </div>
        <Marquee
          className="marquee--logos"
          speed={40}
          items={clientLogos.map((l) => (
            <span className="logo-word" key={l}>{l}</span>
          ))}
        />
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Featured properties"
            title="Homes we are selling now"
            aside={
              <Link href="/properties" className="btn btn--outline">
                View all properties <ArrowIcon />
              </Link>
            }
          />
          <div className="grid-4">
            {featured.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <PropertyCard p={p} size="sm" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--muted">
        <div className="container">
          <SectionHead eyebrow="What clients say" title="Judged on outcomes, not on brochures" center />
        </div>
        <Testimonials />
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container faq-wrap">
          <Reveal className="faq-wrap__head">
            <p className="eyebrow">Questions</p>
            <h2>The things people ask us first</h2>
            <p className="muted">
              If yours is not here, call the office or <Link href="/contact" className="underline">send us a message</Link>.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
