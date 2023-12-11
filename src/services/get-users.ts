import { User } from '@/types/user'
import { api } from './api'

export async function getUsers(): Promise<User[] | null> {
  const response = await api('/users')
  if (response.status !== 200) {
    return null
  }

  return await response.json()
}
