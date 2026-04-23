import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";
import { PORTFOLIO } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/social")({
  head: () => ({
    meta: [
      { title: "أعمال السوشيال ميديا — THE 4 SEASON STUDIO" },
      { name: "description", content: "حملات زيادة المتابعين والتفاعل على جميع منصات السوشيال ميديا" },
    ],
  }),
  component: () => (
    <PortfolioPage
      title={<span className="text-gradient-brand">{PORTFOLIO.social.title}</span>}
      subtitle={PORTFOLIO.social.subtitle}
      sections={PORTFOLIO.social.sections}
    />
  ),
});
