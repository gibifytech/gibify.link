import data from '@/JSON/data.json'
import { z } from 'zod'

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const slug = z.string().parse(params.slug)
  const user = data.users.find((user) => user.username === slug)

  if (!user) {
    return Response.json({ message: 'user not Found' }, { status: 400 })
  }

  return Response.json(user, { status: 200 })
}
