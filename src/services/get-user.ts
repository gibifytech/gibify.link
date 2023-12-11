import { User } from '@/types/user'
import { api } from './api'

export async function getUser(slug: string): Promise<User | null> {
  const response = await api(`/users/${slug}`)
  if (response.status !== 200) {
    return null
  }
  return await response.json()
}
