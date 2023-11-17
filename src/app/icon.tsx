import { ImageResponse } from 'next/server'
import LogoIcon from '@/components/icons/logo'

export const runtime = 'edge'
export const contentType = 'image/png'

export const size = {
  width: 32,
  height: 32
}

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          border: '1px solid #e5e5e5',
          borderRadius: '4px'
        }}
      >
        <LogoIcon />
      </div>
    ),
    {
      ...size
    }
  )
}
