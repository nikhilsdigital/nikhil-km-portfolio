export default function Logo({ className = '', withWordmark = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 32 32"
        fill="none"
        aria-label="NIKHIL K M monogram"
        role="img"
        className="shrink-0"
      >
        <rect
          x="1.5"
          y="1.5"
          width="29"
          height="29"
          rx="9"
          stroke="currentColor"
          strokeWidth="1.6"
          opacity="0.35"
        />
        <path
          d="M10 22V10l12 12V10"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="22" cy="10" r="2.6" fill="rgb(67 97 238)" />
      </svg>
      {withWordmark && (
        <span className="font-display text-[0.95rem] font-semibold tracking-[0.18em]">
          NIKHIL<span className="text-primary"> K M</span>
        </span>
      )}
    </span>
  );
}
