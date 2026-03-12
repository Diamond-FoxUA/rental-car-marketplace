import { api } from '@/lib/axios';
import type { GetCarsParams, CarsResponse } from '../types/car';

export async function getCars(params: GetCarsParams): Promise<CarsResponse> {
  const { data } = await api.get<CarsResponse>('/cars', { params });
  return data;
}
