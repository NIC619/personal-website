import { ImageResponse } from 'next/og';
import { siteData } from '../src/site-data';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(180deg, #f2ede4 0%, #f8f5ef 65%)',
          padding: '64px',
          color: '#29241d',
          border: '1px solid #dcd3c3',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
              maxWidth: '760px',
            }}
          >
            <div
              style={{
                fontSize: 24,
                letterSpacing: '-0.02em',
                color: '#6f675c',
              }}
            >
              niclin.me
            </div>
            <div
              style={{
                fontSize: 76,
                lineHeight: 1.05,
                fontWeight: 700,
                letterSpacing: '-0.04em',
                fontFamily: 'Georgia, serif',
              }}
            >
              {siteData.profile.name}
            </div>
            <div
              style={{
                fontSize: 32,
                color: '#365588',
                lineHeight: 1.25,
                fontWeight: 600,
              }}
            >
              {siteData.profile.title}
            </div>
          </div>
          <div
            style={{
              width: 112,
              height: 112,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 28,
              background: '#fffdf9',
              border: '1px solid #dcd3c3',
              color: '#2a2722',
              fontSize: 62,
              fontWeight: 700,
              fontFamily: 'Georgia, serif',
            }}
          >
            N
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '960px',
          }}
        >
          <div
            style={{
              height: 1,
              width: '100%',
              background: '#dcd3c3',
            }}
          />
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.35,
              color: '#4e473d',
            }}
          >
            Protocol Researcher. Smart Contract Engineer. L2s, MEV mitigation, account abstraction, and secure protocol design.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
