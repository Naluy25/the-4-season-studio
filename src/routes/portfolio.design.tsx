import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";
import { PORTFOLIO } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/design")({
  head: () => ({
    meta: [
      { title: "أعمال التصميم والمونتاج — THE 4 SEASON STUDIO" },
      { name: "description", content: "تصاميم دراسية، لوجوهات، هويات بصرية ومونتاج فيديو" },
    ],
  }),
  component: () => (
    <PortfolioPage
      title={<span className="text-gradient-brand">{PORTFOLIO.design.title}</span>}
      subtitle={PORTFOLIO.design.subtitle}
      sections={PORTFOLIO.design.sections}
    />
  ),
});
