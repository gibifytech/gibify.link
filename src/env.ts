import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url()
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('Invalid enviroment variable', parsedEnv.error.flatten().fieldErrors)
  throw new Error('Invalid enviroment variable')
}

export const env = parsedEnv.data
