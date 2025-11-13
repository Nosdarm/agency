import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
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
          borderRadius: '32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 4L16 8L12 12L8 8L12 4Z" fill="white" opacity="0.9" />
            <path d="M12 12L16 16L12 20L8 16L12 12Z" fill="white" opacity="0.7" />
          </svg>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
