import { api } from '@/lib/axios'

interface GetProfileResponse {
  id: string
  name: string
  createdAt: Date | null
  updatedAt: Date | null
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<GetProfileResponse>('/managed-restaurant')

  return response.data
}
