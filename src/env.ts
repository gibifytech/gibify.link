import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().url(),
  NEXT_PUBLIC_FACEBOOK_PIXEL: z.string(),
  NEXT_PUBLIC_GOOGLE_ADS_ID: z.string(),
  NEXT_PUBLIC_SITE_NAME: z.string()
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error('Invalid enviroment variable', parsedEnv.error.flatten().fieldErrors)
  throw new Error('Invalid enviroment variable')
}

export const env = parsedEnv.data
