export function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-2"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
      }}
      aria-hidden="true"
    >
      <ul className="flex w-max animate-marquee gap-3">
        {track.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="glass-clear rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap text-foreground/85"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
