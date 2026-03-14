import Image from 'next/image';

import { Car } from '../../types/car';
interface Props {
  car: Car;
}

import CarDetails from '../CarDetails/CarDetails';
import BookForm from '../BookForm/BookForm';

export default function CarInfo({ car }: Props) {
  return (
    <div className="py-[84px] px-[120px] grid grid-cols-1 lg:grid-cols-[640px_1fr] gap-12">
      <div>
        <Image
          className="rounded-[14px] object-cover mb-[40px]"
          src={car.img}
          alt={car?.brand}
          width={640}
          height={512}
        ></Image>
        <BookForm />
        {/* <div className="w-[640px] h-[488px] bg-[var(--main)]"></div> */}
      </div>

      <CarDetails car={car} />
    </div>
  );
}
