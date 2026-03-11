import Link from 'next/link';

interface ButtonLinkProps {
  className?: string;
  href: string;
  text: string;
}

export default function ButtonLink({ className, href, text }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`flex 
                  justify-center 
                  items-center 
                  w-full 
                  max-w-[276px] 
                  h-[44px] 
                  text-base
                  font-semibold
                  text-[var(--white)]
                  bg-[var(--button)]
                  rounded-xl
                  hover:bg-[var(--button-hover)]
                  transition
                  duration-300
                  ease-in-out
                  active:scale-95
                  disabled:opacity-50
                  ${className}`}
    >
      {text}
    </Link>
  );
}
