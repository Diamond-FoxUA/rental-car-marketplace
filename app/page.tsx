import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[url('/images/hero.webp')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-end gap-[16px] px-auto py-[60px] text-center">
        <h1>Find your perfect rental car</h1>
        <p className="text-[24px] font-semibold text-[var(--white)]">
          Reliable and budget-friendly rentals for any journey
        </p>
        <ButtonLink className='mt-[24px]' href="/catalog" text="View Catalog" />
      </div>
    </main>
  );
}
