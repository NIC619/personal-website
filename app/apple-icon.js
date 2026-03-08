import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

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
          background: '#f8f5ef',
          border: '2px solid #dcd3c3',
          borderRadius: '32px',
          color: '#2a2722',
          fontSize: 100,
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
        }}
      >
        N
      </div>
    ),
    size,
  );
}
