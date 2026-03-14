import { api } from '@/lib/axios';
import type { Car } from '../types/car';

export async function getCarDetails(id: string) {
  const { data } = await api.get<Car>(`/cars/${id}`);
  return data;
}
