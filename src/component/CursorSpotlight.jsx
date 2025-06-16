import { useEffect, useState } from 'react';

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(200px at ${position.x}px ${position.y}px, rgba(255,255,255,0.2), transparent 80%)`,
      }}
    ></div>
  );
}
