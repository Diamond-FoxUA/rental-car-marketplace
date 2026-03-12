interface ButtonProps {
  classname?: string;
  text: string;
  handleClick: () => void;
}

export default function Button({ text, classname, handleClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={handleClick}
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
         ${classname}`}
    >
      {text}
    </button>
  );
}
