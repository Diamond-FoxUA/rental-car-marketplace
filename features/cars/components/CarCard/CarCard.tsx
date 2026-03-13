import Image from 'next/image';
import Link from 'next/link';
import { Car } from '../../types/car';

import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';

interface Props {
  car: Car;
}

export default function CarCard({ car }: Props) {
  const [, city, country] = car.address.split(', ');
  const formattedMileage = car.mileage.toLocaleString('uk-UA');

  return (
    <li className="flex flex-col justify-between mb-[80px]">
      <div>
        <Link
          className="cursor-pointer hover:scale-102"
          href={`/catalog/${car.id}`}
        >
          <Image
            className="rounded-[14px] h-[268px] object-cover mb-[16px] hover:scale-102 transition duration-300 ease-in-out"
            width={276}
            height={268}
            src={car.img}
            alt={car.description}
          />
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-[16px] font-[500] leading-[125%]">
          {car.brand} {car.model} {car.year}
        </h2>
        <p className="text-[var(--main)] mr-[11px]">${car.rentalPrice}</p>
      </div>
      <div className="mb-[28px]">
        <ul>
          <li className="inline-block text-[12px] font-normal text-[var(--gray)] pr-[6px] border-r border-[var(--gray-light)]">
            <p className="inline-block text-inherit">{city}</p>
          </li>
          <li className="inline-block text-[12px] font-normal text-[var(--gray)] pr-[6px] pl-[6px] border-r border-[var(--gray-light)]">
            <p className="inline-block text-inherit">{country}</p>
          </li>
          <li className="inline-block text-[12px] font-normal text-[var(--gray)] pr-[6px] pl-[6px] border-r border-[var(--gray-light)]">
            <p className="inline-block text-inherit">{car.rentalCompany}</p>
          </li>
        </ul>
        <ul>
          <li className="inline-block text-[12px] font-normal text-[var(--gray)] pr-[6px] border-r border-[var(--gray-light)]">
            <p className="inline-block text-inherit">{car.type}</p>
          </li>
          <li className="inline-block text-[12px] font-normal text-[var(--gray)] pl-[6px]">
            <p className="inline-block text-inherit">{formattedMileage} km</p>
          </li>
        </ul>
      </div>

      <ButtonLink href={`/catalog/${car.id}`} text="Read more" />
    </li>
  );
}
