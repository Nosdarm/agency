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
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -50,
            left: -50,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 40,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl}
            alt="BuildItFast Logo"
            width={60}
            height={60}
            style={{
              borderRadius: 16,
            }}
          />
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            BuildItFast
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            MVP in 2-4 Weeks
          </span>
          <span
            style={{
              fontSize: 36,
              color: '#a3a3a3',
              textAlign: 'center',
            }}
          >
            AI-Powered Development from $5,000
          </span>
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 32,
            marginTop: 48,
          }}
        >
          {['70% Faster', 'Fixed Price', 'Full Ownership'].map((feature) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 24px',
                borderRadius: 50,
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <span style={{ color: '#22c55e', fontSize: 24 }}>✓</span>
              <span style={{ color: '#ffffff', fontSize: 20, fontWeight: 500 }}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
