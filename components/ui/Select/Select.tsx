'use client';

import { useState, useRef, useEffect } from 'react';

import Icon from '../Icon/Icon';

interface Props {
  name: string;
  options: string[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function Select({
  name,
  options,
  placeholder,
  value,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const selected = value || '';

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    setOpen(false);
    onChange?.(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-left text-[var(--main)] font-[500] w-[204px] h-[44px] pl-[16px] bg-[var(--inputs)] rounded-[12px]"
      >
        {selected
          ? name === 'rentalPrice'
            ? `To $${selected}`
            : selected
          : placeholder}
      </button>
      <Icon
        className={`pointer-events-none absolute top-[15px] right-[14px] transition duration-300 peer-focus:rotate-180 ${open ? 'rotate-180' : ''}`}
        name="arrow-default"
        size="16"
      />

      <input type="hidden" name={name} value={selected || ''}></input>

      {open && (
        <ul className="absolute flex flex-col gap-[8px] font-[500] w-[204px] max-h-[272px] bg-[var(--white)] pl-[18px] pr-[18px] mt-[4px]  pt-[14px] border border-[var(--inputs)] rounded-[12px] overflow-y-scroll overscroll-none z-50">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`hover:text-[var(--main)] cursor-pointer transition duration-300 ease-in-out ${selected === option ? 'text-[var(--main)]' : ''}`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
