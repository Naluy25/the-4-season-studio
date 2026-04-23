import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "right";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-right"} mb-12 md:mb-16 animate-fade-up`}
    >
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-brand text-white text-xs font-bold tracking-wider mb-4 uppercase shadow-elegant">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
