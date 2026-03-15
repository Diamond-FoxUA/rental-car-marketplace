'use client';

import { useState, useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';

import {
  DayPicker,
  useNavigation,
  type MonthCaptionProps,
} from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import Icon from '../Icon/Icon';

function CustomCaption(props: MonthCaptionProps) {
  const { calendarMonth } = props;
  const { nextMonth, previousMonth, goToMonth } = useNavigation();

  const label = calendarMonth.date.toLocaleString('default', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex items-center justify-between w-full mb-[12px]">
      <button
        type="button"
        onClick={() => previousMonth && goToMonth(previousMonth)}
        className="text-[var(--button)] text-[20px]"
      >
        <Icon name="calendar-arrow-left" size="24" fill="var(--button)" />
      </button>

      <span className="text-[var(--second-family), var(--main), center] font-[600] leading-[120%]">
        {label}
      </span>

      <button
        type="button"
        onClick={() => nextMonth && goToMonth(nextMonth)}
        className="text-[var(--button)] text-[20px]"
      >
        <Icon name="calendar-arrow-right" size="24" fill="var(--button)" />
      </button>
    </div>
  );
}

export default function DatePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (date: string) => void;
}) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setOpen(false));

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;

    onChange(date.toISOString());
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <input
        value={value ? new Date(value).toLocaleDateString() : ''}
        readOnly
        placeholder="Booking date"
        onClick={() => setOpen((prev) => !prev)}
        className="!text-[var(--gray)] text-left w-full max-w-full h-[48px] py-[14px] px-[20px] border border-transparent rounded-[12px] placeholder:text-[var(--gray)] cursor-pointer"
      />

      {open && (
        <div
          className="absolute top-full mt-[12px] w-[276px] bg-white border border-[var(--button)] rounded-[16px] shadow-lg
                     before:content-[''] before:absolute before:-top-[6px] before:left-1/2 before:-translate-x-1/2
                     before:w-[10px] before:h-[10px] before:bg-white before:border-t before:border-l before:border-[var(--button)]
                     before:rotate-45"
        >
          <DayPicker
            mode="single"
            hideNavigation
            showOutsideDays
            weekStartsOn={1}
            formatters={{
              formatWeekdayName: (date) =>
                date.toLocaleDateString('en-US', { weekday: 'short' }),
            }}
            selected={value ? new Date(value) : undefined}
            onSelect={handleSelect}
            components={{
              MonthCaption: CustomCaption,
            }}
          />
        </div>
      )}
    </div>
  );
}
