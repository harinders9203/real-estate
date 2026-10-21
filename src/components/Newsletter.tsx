"use client";

import { useState, type FormEvent } from "react";

export default function Newsletter() {
  const [state, setState] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email")?.toString() ?? "";
    setState(/^\S+@\S+\.\S+$/.test(email) ? "ok" : "error");
  };

  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <div>
          <p className="eyebrow">Newsletter</p>
          <h3 className="newsletter__title">Market notes, once a month.</h3>
        </div>
        {state === "ok" ? (
          <p className="newsletter__msg is-ok">Thanks for subscribing.</p>
        ) : (
          <form className="newsletter__form" onSubmit={onSubmit} noValidate>
            <input type="email" name="email" placeholder="Your email address" aria-label="Email address" required />
            <button type="submit" className="btn btn--dark">
              Subscribe
            </button>
            {state === "error" && (
              <p className="newsletter__msg is-error">That did not go through. Check your email address and try again.</p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
