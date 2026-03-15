import Image from 'next/image';
import Link from 'next/link';

import { useCarsStore } from '../../store/useCarsStore';
import { Car } from '../../types/car';
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';
import Icon from '@/components/ui/Icon/Icon';

interface Props {
  car: Car;
}

export default function CarCard({ car }: Props) {
  const [, city, country] = car.address.split(', ');
  const formattedMileage = car.mileage.toLocaleString('uk-UA');

  const { favourites, toggleFavourite } = useCarsStore();
  const isFavourite = favourites.includes(car.id);

  return (
    <li className="relative flex flex-col justify-between mb-[80px]">
      <div className="hover:scale-102 transition duration-300 ease-in-out">
        <button
          onClick={() => toggleFavourite(car.id)}
          className="absolute top-[16px] right-[16px] text-xl hover:scale-110 transition duration-300 ease-in-out"
          type="button"
        >
          {isFavourite ? (
            <Icon name="favourite-active" size="16" fill={`var(--button)`} />
          ) : (
            <Icon name="favourite-default" size="16" fill={`var(--white)`} />
          )}
        </button>

        <Link
          className="cursor-pointer hover:scale-105"
          href={`/catalog/${car.id}`}
        >
          <Image
            className="rounded-[14px] h-[268px] object-cover mb-[16px]"
            width={276}
            height={268}
            src={car.img}
            alt={car.brand}
          />
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-[16px] font-[500] leading-[125%]">
          {car.brand} <span className='text-[var(--button)]'>{car.model}</span> {car.year}
        </h2>
        <p className="text-[var(--main)] font-[500] mr-[11px]">${car.rentalPrice}</p>
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
