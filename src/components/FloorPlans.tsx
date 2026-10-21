"use client";

import Link from "next/link";
import { useState } from "react";
import type { FloorPlan } from "@/data/site";
import { site } from "@/data/site";

export default function FloorPlans({ plans }: { plans: FloorPlan[] }) {
  const [active, setActive] = useState(0);
  const plan = plans[active];
  return (
    <div className="plans">
      <div className="plans__tabs" role="tablist">
        {plans.map((p, i) => (
          <button
            key={p.name}
            role="tab"
            aria-selected={i === active}
            className={`plans__tab ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div className="plans__panel" role="tabpanel" key={plan.name}>
        <div className="plans__drawing" aria-hidden="true">
          {plan.rooms.map((r) => (
            <div key={r} className="plans__room">
              {r}
            </div>
          ))}
        </div>
        <div className="plans__info">
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>
          <ul>
            {plan.dimensions.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <div className="btn-row">
            <Link href="/contact" className="btn btn--dark">
              Book a viewing
            </Link>
            <a href={`tel:${site.phone}`} className="btn btn--outline">
              Call us now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
