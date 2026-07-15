/**
 * Fixed, ultra-subtle film grain for a tactile, printed feel.
 * No blend-mode (that forces a full-page repaint every scroll frame and causes
 * jitter) — a plain low-opacity layer composites on the GPU and stays smooth.
 */
export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="grain pointer-events-none fixed inset-0 z-[90] opacity-[0.035]"
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    />
  );
}
