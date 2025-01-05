import { api } from '@/lib/axios'

export interface SubscribeBody {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function subscribe({
  restaurantName,
  managerName,
  email,
  phone,
}: SubscribeBody) {
  await api.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone,
  })
}
