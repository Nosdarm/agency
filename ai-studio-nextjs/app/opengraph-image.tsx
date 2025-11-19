import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'BuildItFast - AI-Powered MVP Development in 2-4 Weeks';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
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
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Gradient background effect */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)',
            }}
          />
          <div
            style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            BuildItFast
          </div>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: '72px',
            fontWeight: '700',
            color: '#ffffff',
            textAlign: 'center',
            maxWidth: '1000px',
            lineHeight: '1.1',
            marginBottom: '24px',
          }}
        >
          MVP Development in{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            2-4 Weeks
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: '800px',
            lineHeight: '1.4',
          }}
        >
          AI-Accelerated Development • Fixed Pricing from $5,000
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: '32px',
            marginTop: '48px',
          }}
        >
          {['Full Stack', 'Mobile Ready', 'Production Deploy'].map((feature) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '24px',
                color: '#d4d4d8',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                ✓
              </div>
              {feature}
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
