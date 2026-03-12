import { api } from '@/lib/axios';

export async function getBrands(): Promise<string[]> {
  const { data } = await api.get<string[]>('/brands');
  return data;
}
