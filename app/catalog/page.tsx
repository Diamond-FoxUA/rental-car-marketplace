import type { GetCarsParams } from '@/features/cars/types/car';
import { getBrands } from '@/features/cars/api/getBrands';
import { getCars } from '@/features/cars/api/getCars';

import Filters from '@/features/cars/components/Filters/Filters';
import CarsList from '@/features/cars/components/CarsList/CarsList';

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: GetCarsParams;
}) {
  const [brands, cars] = await Promise.all([
    getBrands(),
    getCars({
      brand: searchParams.brand,
      rentalPrice: searchParams.rentalPrice,
      minMileage: searchParams.minMileage,
      maxMileage: searchParams.maxMileage,
      page: Number(searchParams.page) || 1,
      limit: 12,
    }),
  ]);

  return (
    <section className="pt-[64px] min-h-[calc(100vh-68px)]">
      <div className="px-[120px]">
        <Filters brands={brands} />
        <CarsList cars={cars.cars} />
      </div>
    </section>
  );
}
