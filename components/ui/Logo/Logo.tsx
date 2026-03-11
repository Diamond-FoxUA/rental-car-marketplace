import Link from 'next/link';

export default function Logo() {
  return (
    <Link
      href="/"
      className="p-[26px] 
                 hover:scale-105 
                 transition 
                 duration-300
                 easy-in-out 
                 active:scale-95"
    >
      <svg width={104} height={16}>
        <use href="/icons/logo.svg" />
      </svg>
    </Link>
  );
}
