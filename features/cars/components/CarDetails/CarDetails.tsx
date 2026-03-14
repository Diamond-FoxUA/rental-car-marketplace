import type { Car } from '../../types/car';

import Icon from '@/components/ui/Icon/Icon';

interface Props {
  car: Car;
}

export default function CarDetails({ car }: Props) {
  const [, city, country] = car.address.split(', ');
  const formattedMileage = car.mileage.toLocaleString('uk-UA');
  
  return (
    <div className="flex flex-col mt-[20px]">
      <div className="flex items-center gap-[16px] mb-[8px]">
        <h1 className="text-[var(--main)] text-[24px] font-[600] text-left">
          {car.brand} {car.model}, {car.year}
        </h1>
        <p className="font-[500]">Id: {car.id.slice(-4)}</p>
      </div>

      <div className="flex items-center mb-[16px]">
        <Icon name="location" size="16" fill="var(--main)" />
        <p className="text-[var(--main)] font-[500] ml-[4px] mr-[16px]">
          {city}, {country}
        </p>
        <p className="text-[var(--main)] font-[500]">
          Mileage: {formattedMileage} km
        </p>
      </div>

      <p className="text-[var(--button)] text-[24px] font-[600] mb-[32px]">
        ${car.rentalPrice}
      </p>
      <p className="text-[var(--main)] font-[500] mb-[68px]">
        {car.description}
      </p>

      <ul className="flex flex-col gap-30">
        <li className="flex flex-col gap-[20px]">
          <h3>Rental Conditions:</h3>
          <ul className="flex flex-col gap-[16px]">
            {car.rentalConditions.map((condition) => (
              <li key={condition} className="flex items-center gap-[8px] ">
                <Icon name="check-circle" size="16" fill="var(--main)" />
                <p className="text-[var(--main)] font-[500]">{condition}</p>
              </li>
            ))}
          </ul>
        </li>
        <li className="flex flex-col gap-[20px]">
          <h3>Car Specifications:</h3>
          <ul className="flex flex-col gap-[16px]">
            <li className="flex items-center gap-[8px]">
              <Icon name="calendar" size="16" fill="var(--main)" />
              <p className="text-[var(--main)] font-[500]">Year: {car.year}</p>
            </li>
            <li className="flex items-center gap-[8px]">
              <Icon name="car" size="16" fill="var(--main)" />
              <p className="text-[var(--main)] font-[500]">Type: {car.type}</p>
            </li>
            <li className="flex items-center gap-[8px]">
              <Icon name="fuel-pump" size="16" fill="var(--main)" />
              <p className="text-[var(--main)] font-[500]">
                Fuel Consumption: {car.fuelConsumption}
              </p>
            </li>
            <li className="flex items-center gap-[8px]">
              <Icon name="gear" size="16" fill="var(--main)" />
              <p className="text-[var(--main)] font-[500]">
                Engine Size: {car.engineSize}
              </p>
            </li>
          </ul>
        </li>
        <li className="flex flex-col gap-[20px]">
          <h3>Accessories and functionalities:</h3>
          <ul className="flex flex-col gap-[16px]">
            {car.accessories.map((accessorie) => (
              <li key={accessorie} className="flex items-center gap-[8px]">
                <Icon name="check-circle" size="16" fill="var(--main)" />
                <p className="text-[var(--main)] font-[500]">{accessorie}</p>
              </li>
            ))}
            {car.functionalities.map((functionality) => (
              <li key={functionality} className="flex items-center gap-[8px]">
                <Icon name="check-circle" size="16" fill="var(--main)" />
                <p className="text-[var(--main)] font-[500]">{functionality}</p>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
