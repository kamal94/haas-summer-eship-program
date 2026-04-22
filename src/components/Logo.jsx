export default function Logo({ className = "", accent = "#69d98e", size = "md" }) {
  const sizes = {
    sm: { svg: { w: 10, h: 22 }, text: "text-lg" },
    md: { svg: { w: 12, h: 28 }, text: "text-xl sm:text-2xl" },
    lg: { svg: { w: 16, h: 36 }, text: "text-3xl" },
  };
  const s = sizes[size];

  return (
    <div className={`inline-flex items-center gap-[3px] tracking-[-0.02em] leading-none ${className}`}>
      <svg
        width={s.svg.w}
        height={s.svg.h}
        viewBox="0 0 12 28"
        fill="none"
        aria-hidden="true"
      >
        <line
          x1="9.5" y1="1.5"
          x2="2.5" y2="26.5"
          stroke={accent}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <span className={`font-black ${s.text}`}>haas</span>
      <span className={`font-normal ${s.text}`}>ventures</span>
    </div>
  );
}
