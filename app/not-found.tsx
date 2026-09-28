import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink">404</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">Page not found</h1>
      <p className="mt-5 max-w-xl text-lg text-ink">The page you were looking for has moved or no longer exists.</p>
      <ButtonLink href="/" className="mt-10">
        Return home
      </ButtonLink>
    </section>
  );
}
