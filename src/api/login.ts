import { api } from '@/lib/axios'

export interface LoginBody {
  email: string
}

export async function login({
  email,
}: LoginBody): Promise<{ authLink: string }> {
  const response = await api.post('/authenticate', { email })
  return response.data
}
