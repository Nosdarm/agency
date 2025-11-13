import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #7c3aed 0%, #d946ef 50%, #06b6d4 100%)',
          borderRadius: '48px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <svg
            width="96"
            height="96"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4L16 8L12 12L8 8L12 4Z" fill="white" opacity="0.95" />
            <path d="M12 12L16 16L12 20L8 16L12 12Z" fill="white" opacity="0.75" />
          </svg>
        </div>
      </div>
    ),
    {
      width: 192,
      height: 192,
    }
  );
}
