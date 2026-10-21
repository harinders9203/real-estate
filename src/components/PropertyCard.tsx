import Image from "next/image";
import Link from "next/link";
import { formatPrice, img, type Property } from "@/data/site";
import { ArrowIcon } from "./Icons";

export default function PropertyCard({ p, size = "md" }: { p: Property; size?: "md" | "sm" }) {
  return (
    <Link href={`/properties/${p.slug}`} className={`prop-card prop-card--${size}`}>
      <div className="prop-card__media">
        <Image src={img(p.cover, 1000)} alt={p.name} fill sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw" className="cover" />
        <span className={`tag ${p.status === "Under Offer" ? "tag--muted" : ""}`}>{p.status}</span>
      </div>
      <div className="prop-card__body">
        <div className="prop-card__top">
          <h3 className="prop-card__title">{p.name}</h3>
          <span className="prop-card__arrow">
            <ArrowIcon />
          </span>
        </div>
        <p className="prop-card__loc">{p.location}</p>
        <div className="prop-card__meta">
          <span>{p.type}</span>
          <span>{p.beds} bed</span>
          <span>{p.baths} bath</span>
          <span>{p.sqft.toLocaleString("en-US")} sq ft</span>
        </div>
        <p className="prop-card__price">{formatPrice(p.price)}</p>
      </div>
    </Link>
  );
}
