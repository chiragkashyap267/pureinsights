import { useState } from "react";

/**
 * Figure — a premium image frame with graceful fallback.
 *
 * Drop real photos into /public/images and pass `src="./images/your-file.jpg"`.
 * Until then it renders an elegant gold-tinted placeholder so the layout is
 * always beautiful. If a provided image fails to load, it falls back too.
 */
export function Figure({
  src,
  alt = "",
  label,
  className = "",
  rounded = "rounded-sm",
  ratio = "aspect-[4/5]",
  eager = false,
}: {
  src?: string;
  alt?: string;
  label?: string;
  className?: string;
  rounded?: string;
  ratio?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showImg = src && !failed;

  return (
    <figure
      className={`group relative overflow-hidden ${rounded} ${ratio} ${className}`}
    >
      {showImg ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
      ) : (
        <Placeholder label={label ?? alt} />
      )}

      {/* Gold hairline frame */}
      <span
        className={`pointer-events-none absolute inset-0 ${rounded} ring-1 ring-inset ring-gold/20 transition-all duration-500 group-hover:ring-gold/50`}
      />

      {/* Reveal caption on hover if a label is present and an image is shown */}
      {label && showImg && (
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="font-sans text-xs uppercase tracking-wide2 text-gold-light">
            {label}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

function Placeholder({ label }: { label?: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-mist via-pearl to-mist">
      {/* subtle diagonal sheen */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_35%,rgba(201,162,75,0.10)_50%,transparent_65%)]" />
      <div className="absolute inset-0 grain opacity-[0.04]" />

      <div className="relative flex flex-col items-center gap-3 px-4 text-center">
        <HouseMark className="h-9 w-9 text-gold/70 transition-transform duration-700 group-hover:scale-110" />
        {label && (
          <span className="max-w-[85%] font-serif text-sm italic text-bronze/70">
            {label}
          </span>
        )}
        <span className="font-sans text-[10px] uppercase tracking-luxe text-ink-muted/70">
          Pure Insights
        </span>
      </div>

      {/* corner ticks */}
      <Corner className="left-3 top-3" />
      <Corner className="right-3 top-3 rotate-90" />
      <Corner className="bottom-3 right-3 rotate-180" />
      <Corner className="bottom-3 left-3 -rotate-90" />
    </div>
  );
}

function Corner({ className = "" }: { className?: string }) {
  return (
    <span
      className={`absolute h-4 w-4 border-l border-t border-gold/40 ${className}`}
    />
  );
}

export function HouseMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className}>
      <path
        d="M14 30 L32 15 L50 30"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 30 L18 48 L46 48 L46 30"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="18" y1="39" x2="46" y2="39" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
