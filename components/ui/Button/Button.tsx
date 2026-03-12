interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  text,
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
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
    </button>
  );
}
