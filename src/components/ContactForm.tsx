"use client";

import { useState, type FormEvent } from "react";
import { ArrowIcon } from "./Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) setSent(true);
    else e.currentTarget.reportValidity();
  };

  if (sent) {
    return (
      <div className="contact-form contact-form--sent">
        <h3>Thank you.</h3>
        <p>We have your message and will be in touch within one working day.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <label className="field">
          <span>Full name</span>
          <input name="name" required placeholder="Jane Cooper" />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" required placeholder="jane@email.com" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" placeholder="+1 (555) 000-0000" />
        </label>
        <label className="field">
          <span>I am interested in</span>
          <select name="interest" defaultValue="Buying">
            <option>Buying</option>
            <option>Selling</option>
            <option>Renting / Letting</option>
            <option>Property management</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label className="field">
        <span>Message</span>
        <textarea name="message" rows={5} required placeholder="Tell us a little about what you are looking for…" />
      </label>
      <button type="submit" className="btn btn--dark btn--lg">
        Send message <ArrowIcon />
      </button>
    </form>
  );
}
