import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-hero__title">{title}</h1>
          {text && <p className="page-hero__text">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}
