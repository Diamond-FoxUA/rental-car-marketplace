import type { Car } from '../../types/car';
import CarCard from '../CarCard/CarCard';

interface Props {
  cars: Car[];
}

export default function CarsList({ cars }: Props) {
  return (
    <ul className="grid grid-cols-4 gap-x-8 gap-y-12">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </ul>
  );
}
