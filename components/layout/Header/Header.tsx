'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/ui/Logo/Logo';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-[120px] bg-[var(--badges)]">
      <Logo />

      <nav>
        <ul className="flex gap-[32px]">
          <li className='hover:scale-105 active:scale-95 transition duration-300 ease-in-out'>
            <Link
              href="/"
              className={
                pathname === '/' ? 'text-[var(--button-hover)] py-[26px]' : 'text-[var(--main)] py-[26px]'
              }
              aria-label='Go to homepage'
            >
              Home
            </Link>
          </li>
          <li className='hover:scale-105 active:scale-95 transition duration-300 ease-in-out'>
            <Link
              href="/Catalog"
              className={
                pathname === '/catalog' ? 'text-[var(--button-hover)] py-[26px]' : 'text-[var(--main)] py-[26px]'
              }
              aria-label='Go to Catalog'
            >
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
