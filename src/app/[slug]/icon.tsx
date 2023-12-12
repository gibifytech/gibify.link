import { ImageResponse } from 'next/server'
import { notFound } from 'next/navigation'
import json from '@/data/data.json'

export const contentType = 'image/png'

export const size = {
  width: 32,
  height: 32
}

export default function Icon({ params }: { params: { slug: string } }) {
  const user = json.users.find((user) => user.username === params.slug)
  if (!user) return notFound()

  const name = user.name.split(' ')
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          textTransform: 'uppercase',
          border: '1px solid #e5e5e5',
          borderRadius: '4px'
        }}
      >
        {name[0].charAt(0)}
      </div>
    ),
    {
      ...size
    }
  )
}
