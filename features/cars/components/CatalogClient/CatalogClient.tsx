'use client';

import { useEffect, useState } from 'react';

import { useCarsStore } from '@/features/cars/store/useCarsStore';
import { getBrands } from '@/features/cars/api/getBrands';

import Filters from '../Filters/Filters';
import CarsList from '../CarsList/CarsList';
import Button from '@/components/ui/Button/Button';
import Loader from '@/components/ui/Loader/Loader';

export default function CatalogClient() {
  const {
    cars,
    fetchCars,
    loadMore,
    page,
    totalPages,
    loading,
    error,
    hasFetched,
    reset,
  } = useCarsStore();

  const [brands, setBrands] = useState<string[]>([]);

  useEffect(() => {
    fetchCars();

    return () => {
      reset();
    };
  }, [fetchCars, reset]);

  useEffect(() => {
    const fetchBrands = async () => {
      const data = await getBrands();
      setBrands(data);
    };

    fetchBrands();
  }, []);

  return (
    <section className="pt-[64px] min-h-[calc(100vh-68px)]">
      <div className="px-[120px]">
        {brands.length > 0 && <Filters brands={brands} />}

        {loading ? <Loader /> : <CarsList cars={cars} />}

        {page < totalPages && (
          <Button
            text={loading ? 'Loading...' : 'Load more'}
            type="button"
            disabled={loading}
            onClick={loadMore}
            className="max-w-[156px] mx-auto mb-[124px]"
          />
        )}

        {!loading && cars.length > 0 && page === totalPages && (
          <div className="flex flex-col gap-4 justify-self-center mx-auto mb-[124px]">
            <p className="">You&apos;ve reached the end.</p>
          </div>
        )}

        {error && (
          <div className="min-h-[calc(100vh-68px)] flex flex-col gap-6 justify-center items-center">
            <h1 className="text-[var(--main)]">{error}</h1>
            <Button text="Try again" type="button" onClick={fetchCars} />
          </div>
        )}

        {hasFetched && !loading && !error && cars.length === 0 && (
          <p className="text-center mt-[30vh]">No cars found</p>
        )}
      </div>
    </section>
  );
}
