import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero page-hero--404">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="page-hero__title">This address does not exist</h1>
        <p className="page-hero__text">The page you are looking for has moved or never existed.</p>
        <Link href="/" className="btn btn--dark">
          Back home
        </Link>
      </div>
    </section>
  );
}
