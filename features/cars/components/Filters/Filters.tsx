'use client';

import { useState } from 'react';
import { useCarsStore } from '@/features/cars/store/useCarsStore';
import { PRICE_OPTIONS } from '../../constants/prices';

import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import Select from '@/components/ui/Select/Select';

function formatMileage(value: string) {
  const numbers = value.replace(/\D/g, '');
  return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function parseMileage(value: string | FormDataEntryValue | null) {
  if (!value) return undefined;
  return Number(value.toString().replace(/,/g, ''));
}

export default function Filters({ brands }: { brands: string[] }) {
  const setFilters = useCarsStore((state) => state.setFilters);

  const [price, setPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleMileageChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = formatMileage(e.target.value);
      setter(formatted);
    };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const brandValue = formData.get('brand');
    const priceValue = formData.get('rentalPrice');
    const minMileageValue = formData.get('minMileage');
    const maxMileageValue = formData.get('maxMileage');

    const filters = {
      brand: brandValue ? brandValue.toString() : undefined,
      rentalPrice:
        priceValue && priceValue !== '' ? priceValue.toString() : undefined,
      minMileage: parseMileage(minMileageValue),
      maxMileage: parseMileage(maxMileageValue),
    };

    await setFilters(filters);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-[16px] mb-[56px]"
    >
      {/* Brand */}
      <div className="flex flex-col gap-[8px]">
        <label htmlFor="brand">Car brand</label>

        <div className="relative">
          <Select name="brand" options={brands} placeholder="Choose a brand" />
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-[8px]">
        <label htmlFor="rentalPrice">Price / 1 hour</label>

        <div className="relative">
          {price && (
            <span className="absolute top-[12px] left-[16px] z-20">To $</span>
          )}

          <Select
            name="rentalPrice"
            options={PRICE_OPTIONS}
            placeholder="Choose a price"
            onChange={(value) => setPrice(value)}
          />
        </div>
      </div>

      {/* Mileage */}
      <div className="flex flex-col gap-[8px]">
        <label>Car mileage / km</label>

        <div className="flex">
          <div className="relative border-r border-[var(--gray-light)]">
            <span className="absolute top-[12px] left-[24px]">From</span>

            <input
              name="minMileage"
              type="text"
              inputMode="numeric"
              value={minMileage}
              onChange={handleMileageChange(setMinMileage)}
              className="rounded-l-xl border-r-0 text-left pl-[70px]"
            />
          </div>

          <div className="relative">
            <span className="absolute top-[12px] left-[24px]">To</span>

            <input
              name="maxMileage"
              type="text"
              inputMode="numeric"
              value={maxMileage}
              onChange={handleMileageChange(setMaxMileage)}
              className="rounded-r-xl text-left pl-[50px]"
            />
          </div>
        </div>
      </div>

      <Button type="submit" text="Search" className="max-w-[156px] self-end" />
    </form>
  );
}
