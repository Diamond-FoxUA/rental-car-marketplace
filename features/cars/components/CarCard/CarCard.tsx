import Image from 'next/image';
import { Car } from '../../types/car';

import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';

interface Props {
  car: Car;
}

export default function CarCard({ car }: Props) {
  return (
    <li>
      <div>
        <Image width={276} height={268} src={car.img} alt={car.description} />
      </div>
      <div>
        <h2>
          {car.brand} {car.model} {car.year}
        </h2>
        <p>{car.rentalPrice}</p>
      </div>
      <div>
        <p>{car.address}</p>
        <p>{car.rentalCompany}</p>
      </div>
      <div>
        <p>{car.type}</p>
        <p>{car.mileage}</p>
      </div>

      <ButtonLink href={`/catalog/${car.id}`} text="Read more" />
    </li>
  );
}
