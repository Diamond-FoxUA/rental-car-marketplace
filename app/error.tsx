'use client';
import Button from "@/components/ui/Button/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log(error);
  return (
    <section className="min-h-[calc(100vh-68px)] flex flex-col gap-6 justify-center items-center">
      <h1 className="text-[var(--main)]">Something went wrong.</h1>
      <p>An unexpected error occurred. Please, try again.</p>
      <Button text="Try again" onClick={() => reset()} />
    </section>
  );
}
