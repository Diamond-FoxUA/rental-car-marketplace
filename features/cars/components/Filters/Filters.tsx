'use client';

import { FormEvent } from 'react';
import { useCarsStore } from '@/features/cars/store/useCarsStore';

import { PRICE_OPTIONS } from '../../constants/prices';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';

export default function Filters({ brands }: { brands: string[] }) {
  const setFilters = useCarsStore((state) => state.setFilters);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const brand = formData.get('brand')?.toString() || undefined;
    const rentalPrice = formData.get('rentalPrice')?.toString() || undefined;

    const minMileage = formData.get('minMileage')
      ? Number(formData.get('minMileage'))
      : undefined;

    const maxMileage = formData.get('maxMileage')
      ? Number(formData.get('maxMileage'))
      : undefined;

    await setFilters({
      brand,
      rentalPrice,
      minMileage,
      maxMileage,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-[16px] mb-[56px]"
    >
      <div className="flex flex-col gap-[8px]">
        <label htmlFor="brand">Car brand</label>

        <div className="relative">
          <select name="brand" id="brand" className="peer">
            <option value="">Choose a brand</option>

            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <Icon
            className="pointer-events-none absolute top-[15px] right-[14px] transition duration-300 peer-focus:rotate-180"
            name="arrow-default"
            size="16"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <label htmlFor="rentalPrice">Price / 1 hour</label>

        <div className="relative">
          <select name="rentalPrice" id="rentalPrice" className="peer">
            <option value="">Choose a price</option>

            {PRICE_OPTIONS.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>

          <Icon
            className="pointer-events-none absolute top-[15px] right-[14px] transition duration-300 peer-focus:rotate-180"
            name="arrow-default"
            size="16"
          />
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <label>Car mileage / km</label>

        <div className="flex">
          <div className="relative border-r border-[var(--gray-light)]">
            <span className="absolute top-[12px] left-[24px]">From</span>

            <input
              name="minMileage"
              type="number"
              step="100"
              min="0"
              className="rounded-l-xl border-r-0 text-left pl-[70px]"
            />
          </div>

          <div className="relative">
            <span className="absolute top-[12px] left-[24px]">To</span>

            <input
              name="maxMileage"
              type="number"
              step="100"
              min="0"
              className="rounded-r-xl text-left pl-[50px]"
            />
          </div>
        </div>
      </div>

      <Button type="submit" text="Search" className="max-w-[156px] self-end" />
    </form>
  );
}
