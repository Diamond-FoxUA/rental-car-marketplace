import { create } from 'zustand';

import { getCarDetails } from '../api/getCarDetails';
import type { Car } from '../types/car';

interface CarDetailsStore {
  car: Car | null;
  loading: boolean;
  error: string | null;
  fetchCarDetails: (id: string) => Promise<void>;
  clearCar: () => void;
}

export const useCarDetailsStore = create<CarDetailsStore>((set) => ({
  car: null,
  loading: false,
  error: null,

  fetchCarDetails: async (id: string) => {
    try {
      set({ loading: true, error: null });

      const data = await getCarDetails(id);

      set({ car: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to load car', loading: false });
    }
  },

  clearCar: () => {
    set({
      car: null,
      loading: false,
      error: null,
    });
  },
}));
