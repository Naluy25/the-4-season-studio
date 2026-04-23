import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";
import { PORTFOLIO } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/management")({
  head: () => ({
    meta: [
      { title: "أعمال إدارة الصفحات — THE 4 SEASON STUDIO" },
      { name: "description", content: "إدارة صفحات وحملات إعلانية وهويات بصرية متكاملة" },
    ],
  }),
  component: () => (
    <PortfolioPage
      title={<span className="text-gradient-brand">{PORTFOLIO.management.title}</span>}
      subtitle={PORTFOLIO.management.subtitle}
      sections={PORTFOLIO.management.sections}
    />
  ),
});
