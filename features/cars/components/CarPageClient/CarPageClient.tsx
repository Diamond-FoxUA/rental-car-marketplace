'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

import { useCarDetailsStore } from '../../store/useCarDetailsStore';

import Loader from '@/components/ui/Loader/Loader';
import ButtonLink from '@/components/ui/ButtonLink/ButtonLink';
import CarInfo from '../CarInfo/CarInfo';

export default function CarPageClient() {
  const { id } = useParams<{ id: string }>();
  const { car, loading, error, fetchCarDetails, clearCar } = useCarDetailsStore();

  useEffect(() => {
    if (!id) return;

    fetchCarDetails(id);

    return () => {
      clearCar();
    };
  }, [id, fetchCarDetails, clearCar]);

  return (
    <section>
      {loading && <Loader />}

      {error && (
        <div className="min-h-[calc(100vh-68px)] flex flex-col gap-6 justify-center items-center">
          <h1 className="text-[var(--main)]">{error}</h1>
          <ButtonLink
            className="!max-w-[200px]"
            href="/catalog"
            text="Return to the catalog"
          />
        </div>
      )}

      {car && <CarInfo car={car} />}
      {/* {!loading && !car && (
        <div className="min-h-[calc(100vh-68px)] flex flex-col gap-6 justify-center items-center">
          <h1 className="text-[var(--main)]">No car found</h1>
          <ButtonLink
            className="!max-w-[200px]"
            href="/catalog"
            text="Return to the catalog"
          />
        </div>
      )} */}
    </section>
  );
}
