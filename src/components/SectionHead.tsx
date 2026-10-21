import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = { eyebrow: string; title: string; text?: string; aside?: ReactNode; center?: boolean };

export default function SectionHead({ eyebrow, title, text, aside, center }: Props) {
  return (
    <Reveal className={`section-head ${center ? "section-head--center" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {text && <p className="section-head__text">{text}</p>}
      </div>
      {aside && <div className="section-head__aside">{aside}</div>}
    </Reveal>
  );
}
