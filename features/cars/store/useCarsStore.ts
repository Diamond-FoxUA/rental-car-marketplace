import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { getCars } from '@/features/cars/api/getCars';
import type { Car } from '@/features/cars/types/car';

interface Filters {
  brand?: string;
  rentalPrice?: string;
  minMileage?: number;
  maxMileage?: number;
}

interface CarsStore {
  cars: Car[];
  favourites: string[];
  toggleFavourite: (id: string) => void;
  filters: Filters;
  page: number;
  totalPages: number;
  loading: boolean;

  reset: () => void;
  setFilters: (filters: Filters) => Promise<void>;
  fetchCars: () => Promise<void>;
  loadMore: () => Promise<void>;
}

export const useCarsStore = create<CarsStore>()(
  persist(
    (set, get) => ({
      cars: [],
      favourites: [],

      toggleFavourite: (id) =>
        set((state) => ({
          favourites: state.favourites.includes(id)
            ? state.favourites.filter((carId) => carId !== id)
            : [...state.favourites, id],
        })),

      filters: {},
      page: 1,
      totalPages: 1,
      loading: false,

      reset: () =>
        set({
          cars: [],
          filters: {},
          page: 1,
          totalPages: 1,
          loading: false,
        }),

      setFilters: async (filters) => {
        set({ filters, page: 1, cars: [] });
        await get().fetchCars();
      },

      fetchCars: async () => {
        const { filters, page } = get();

        set({ loading: true });

        const params = Object.fromEntries(
          Object.entries({
            ...filters,
            page,
            limit: 12,
          }).filter(([, v]) => v !== undefined && v !== ''),
        );

        const data = await getCars(params);

        set({
          cars: data.cars,
          totalPages: data.totalPages,
          loading: false,
        });
      },

      loadMore: async () => {
        const { filters, page, cars, totalPages } = get();

        if (page >= totalPages) return;

        const nextPage = page + 1;

        const params = Object.fromEntries(
          Object.entries({
            ...filters,
            page: nextPage,
            limit: 12,
          }).filter(([, v]) => v !== undefined && v !== ''),
        );

        const data = await getCars(params);

        set({
          page: nextPage,
          cars: [...cars, ...data.cars],
        });
      },
    }),
    {
      name: 'cars-storage',

      partialize: (state) => ({
        favourites: state.favourites,
      }),
    },
  ),
);
