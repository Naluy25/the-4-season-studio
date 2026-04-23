import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import type { PortfolioItem } from "@/data/portfolio";

export function PortfolioPage({
  title,
  subtitle,
  sections,
}: {
  title: ReactNode;
  subtitle: string;
  sections: ReadonlyArray<{ title: string; items: ReadonlyArray<PortfolioItem> }>;
}) {
  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-foreground">الرئيسية</Link>
        <ChevronRight className="h-3.5 w-3.5 rotate-180" />
        <Link to="/portfolio" className="hover:text-foreground">أعمالنا</Link>
        <ChevronRight className="h-3.5 w-3.5 rotate-180" />
        <span className="text-foreground">{title}</span>
      </nav>

      <SectionHeading eyebrow="بورتفوليو" title={title} subtitle={subtitle} />

      <div className="space-y-16 max-w-6xl mx-auto">
        {sections.map((section, idx) => (
          <section key={section.title} className="animate-fade-up" style={{ animationDelay: `${idx * 80}ms` }}>
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3">
              <span className="h-8 w-1.5 rounded-full bg-gradient-brand" />
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {section.items.map((item, i) => (
                <div
                  key={`${section.title}-${i}`}
                  className="group relative aspect-square rounded-2xl overflow-hidden hover-lift glass-card border border-white/5"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-0 inset-x-0 p-4">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-gradient-brand text-white text-[10px] font-bold mb-2 uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <h3 className="font-bold text-sm">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
