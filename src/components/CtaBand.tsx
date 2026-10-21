import Image from "next/image";
import Link from "next/link";
import { img } from "@/data/site";
import { ArrowIcon } from "./Icons";
import Reveal from "./Reveal";

export default function CtaBand() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="cta-band">
          <Image src={img("photo-1600607688969-a5bfcd646154", 2000)} alt="" fill sizes="100vw" className="cover" />
          <div className="cta-band__overlay" />
          <Reveal className="cta-band__content">
            <p className="eyebrow eyebrow--light">Get started</p>
            <h2>Your next address starts here</h2>
            <Link href="/contact" className="btn btn--accent">
              Book a Call <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
