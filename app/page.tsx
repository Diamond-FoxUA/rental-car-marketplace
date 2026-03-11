import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';

export default function Home() {
  return (
    <section className="relative min-h-[calc(100vh-68px)] bg-[url('/images/hero.webp')] bg-cover bg-center flex flex-col justify-end">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex flex-col items-center gap-4 py-[60px] text-center">
        <h1>Find your perfect rental car</h1>
        <p className="text-[24px] font-semibold text-[var(--white)]">
          Reliable and budget-friendly rentals for any journey
        </p>
        <ButtonLink
          className="mt-[24px]"
          href="/catalog"
          text="View Catalog"
          aria-label="Go to catalog"
        />
      </div>
    </section>
  );
}
