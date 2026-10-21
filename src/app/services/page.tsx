import type { Metadata } from "next";
import Image from "next/image";
import { CheckIcon, StepIcon } from "@/components/Icons";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { img, process, services, support } from "@/data/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Advice for every stage of a move"
        text="Whether you are buying, selling, letting or simply planning ahead, we bring the same care and clarity to every brief."
      />
      <section className="section section--flush-top">
        <div className="container service-rows">
          {services.map((s, i) => (
            <Reveal className={`service-row ${i % 2 ? "service-row--flip" : ""}`} key={s.slug}>
              <div className="service-row__img">
                <Image src={img(s.image, 1400)} alt={s.title} fill sizes="(max-width: 767px) 100vw, 50vw" className="cover" />
              </div>
              <div className="service-row__text">
                <span className="service-card__num">0{i + 1}</span>
                <h2>{s.title}</h2>
                <p className="lead">{s.text}</p>
                <ul className="check-list">
                  {s.points.map((pt) => (
                    <li key={pt}>
                      <CheckIcon /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow="How we work" title="A clear process, start to finish" />
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

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Also available" title="Support beyond buying and selling" />
          <div className="grid-3">
            {support.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="support-card">
                  <Image src={img(s.image, 1000)} alt="" fill sizes="(max-width: 767px) 100vw, 33vw" className="cover" />
                  <div className="support-card__body">
                    <h4>{s.title}</h4>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
