import type { Car } from '../../types/car';
import CarCard from '../CarCard/CarCard';

interface Props {
  cars: Car[];
}

export default function CarsList({ cars }: Props) {
  return (
    <ul>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </ul>
  );
}
