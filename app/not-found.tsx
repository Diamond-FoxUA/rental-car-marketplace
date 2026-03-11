import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';
import Logo from '@/components/ui/Logo/Logo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function notFound() {
  return (
    <section className="min-h-[calc(100vh-68px)] flex flex-col gap-6 justify-center items-center">
      <div className="flex items-center mr-[26px]">
        <Logo />
        <h1 className="text-[var(--main)] border-l pl-[26px]">404</h1>
      </div>
      <p className="mb-6">The page you are looking for does not exist.</p>
      <ButtonLink href="/" text="Go back home" />
    </section>
  );
}
