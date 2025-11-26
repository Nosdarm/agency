import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'BuildItFast - AI-Powered MVP Development';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  const logoUrl = new URL('/images/logo-icon.png', 'https://builditfast.ai').toString();

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          alt="BuildItFast Logo"
          width={300}
          height={300}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
