'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section>
      <h1>Something went wrong.</h1>
      <p>An unexpected error occurred. Please, try again.</p>
      <button onClick={() => reset}>Try again</button>
    </section>
  );
}
