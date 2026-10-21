import Image from "next/image";
import { img, testimonials } from "@/data/site";
import Marquee from "./Marquee";

export default function Testimonials() {
  return (
    <Marquee
      speed={60}
      className="marquee--cards"
      items={testimonials.map((t) => (
        <figure className="quote-card" key={t.name}>
          <blockquote>“{t.quote}”</blockquote>
          <figcaption>
            <Image src={img(t.avatar, 120)} alt="" width={48} height={48} className="avatar" />
            <span>
              <strong>{t.name}</strong>
              <small>{t.role}</small>
            </span>
          </figcaption>
        </figure>
      ))}
    />
  );
}
