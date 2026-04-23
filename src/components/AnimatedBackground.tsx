export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #7532bb, transparent 70%)", animation: "blob 14s ease-in-out infinite" }}
      />
      <div
        className="absolute top-1/3 -left-40 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #ff8620, transparent 70%)", animation: "blob 18s ease-in-out infinite reverse" }}
      />
      <div
        className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #b12da8, transparent 70%)", animation: "blob 20s ease-in-out infinite" }}
      />
    </div>
  );
}
