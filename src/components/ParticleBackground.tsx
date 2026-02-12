import { useMemo } from "react";

const ParticleBackground = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: Math.random() * 15 + 15,
        color: ['var(--cyan)', 'var(--purple)', 'var(--pink)'][i % 3],
      })),
    []
  );

  return (
    <div className="particles-bg pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            backgroundColor: `hsl(${p.color})`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
