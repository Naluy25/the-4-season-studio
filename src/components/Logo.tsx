import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12 md:h-14 md:w-14",
    lg: "h-20 w-20",
  } as const;

  return (
    <Link
      to="/"
      className="group flex items-center gap-3 hover-lift"
      aria-label="THE 4 SEASON STUDIO"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-brand blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className={`relative ${sizes[size]} rounded-full overflow-hidden bg-gradient-to-br from-[#0f0f0f] to-[#262626] p-[2px] shadow-[0_4px_20px_rgba(177,45,168,0.5)] ring-1 ring-white/10 group-hover:ring-primary/40 transition-all`}>
          <div className="h-full w-full rounded-full overflow-hidden bg-[#0f0f0f] flex items-center justify-center">
            <img
              src={logoImg}
              alt="THE 4 SEASON STUDIO"
              className="h-full w-full object-cover scale-110"
            />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex flex-col leading-tight">
        <span className="text-[10px] md:text-[11px] text-muted-foreground tracking-[0.3em] font-medium">THE</span>
        <span className="text-base md:text-lg font-extrabold text-gradient-brand tracking-wide">
          4 SEASON
        </span>
        <span className="text-[10px] md:text-[11px] text-muted-foreground tracking-[0.3em] font-medium">STUDIO</span>
      </div>
    </Link>
  );
}
