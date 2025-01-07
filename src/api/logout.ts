import { api } from '@/lib/axios'

export async function logoutUser() {
  await api.post('/sign-out')
}
