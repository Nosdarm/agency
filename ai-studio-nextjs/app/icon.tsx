import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0f',
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M134 120h144c66.3 0 120 53.7 120 120s-53.7 120-120 120h-48v-80h48c22.1 0 40-17.9 40-40s-17.9-40-40-40H214v200h-80V120z"
            fill="url(#grad)"
          />
          <path
            d="M230 230l80 80-80 80V230z"
            fill="#0a0a0f"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
