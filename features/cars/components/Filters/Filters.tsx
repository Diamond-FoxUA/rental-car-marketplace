'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { PRICE_OPTIONS } from '../../constants/prices';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';

export default function Filters({ brands }: { brands: string[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams(searchParams);

    const brand = formData.get('brand');
    const rentalPrice = formData.get('rentalPrice');
    const minMileage = formData.get('minMileage');
    const maxMileage = formData.get('maxMileage');

    if (brand) params.set('brand', brand.toString());
    else params.delete('brand');
    if (rentalPrice) params.set('rentalPrice', rentalPrice.toString());
    else params.delete('rentalPrice');
    if (minMileage) params.set('minMileage', minMileage.toString());
    else params.delete('minMileage');
    if (maxMileage) params.set('maxMileage', maxMileage.toString());
    else params.delete('maxMileage');

    params.delete('page');
    router.replace(`/catalog?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center items-center gap-[16px]"
    >
      <div className="flex flex-col justify-start gap-[8px]">
        <label htmlFor="brand">Car brand</label>
        <div className="relative">
          <select
            onChange={(e) => e.target.blur()}
            className="peer"
            name="brand"
            id="brand"
            defaultValue={searchParams.get('brand') ?? ''}
          >
            <option value="">Choose a brand</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <Icon
            className="pointer-events-none absolute top-[15px] right-[14px] transition
      duration-300 peer-focus:rotate-180"
            name="arrow-default"
            size="16"
          ></Icon>
        </div>
      </div>

      <div className="flex flex-col justify-start gap-[8px]">
        <label htmlFor="rentalPrice">Price / 1 hour</label>
        <div className="relative">
          <select
            onChange={(e) => e.target.blur()}
            className="peer"
            name="rentalPrice"
            id="rentalPrice"
            defaultValue={searchParams.get('rentalPrice') ?? ''}
          >
            <option value="">Choose a price</option>
            {PRICE_OPTIONS.map((price) => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </select>

          <Icon
            className="pointer-events-none absolute top-[15px] right-[14px] transition
      duration-300 peer-focus:rotate-180"
            name="arrow-default"
            size="16"
          ></Icon>
        </div>
      </div>

      <div className="flex flex-col justify-start gap-[8px]">
        <label htmlFor="minMileage">Сar mileage / km</label>
        <div className="flex">
          <div className="relative  border-r-1 border-[var(--gray-light)]">
            <span className="absolute top-[12px] left-[24px]">From</span>
            <input
              className="rounded-l-xl border-r-0 text-left pl-[70px]"
              name="minMileage"
              type="number"
              defaultValue={searchParams.get('minMileage') ?? ''}
              step="100"
              min="0"
            />
          </div>
          <div className="relative">
            <span className="absolute top-[12px] left-[24px]">To</span>
            <input
              className="rounded-r-xl text-left pl-[50px]"
              name="maxMileage"
              type="number"
              defaultValue={searchParams.get('maxMileage') ?? ''}
              step="100"
              min="0"
            />
          </div>
        </div>
      </div>
      <Button type="submit" text="Search" className="max-w-[156px] self-end" />
    </form>
  );
}
