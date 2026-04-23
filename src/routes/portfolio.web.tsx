import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";
import { PORTFOLIO } from "@/data/portfolio";

export const Route = createFileRoute("/portfolio/web")({
  head: () => ({
    meta: [
      { title: "أعمال المواقع والمتاجر — THE 4 SEASON STUDIO" },
      { name: "description", content: "أعمالنا في تصميم وبرمجة المواقع والمتاجر الإلكترونية والمنصات التعليمية" },
    ],
  }),
  component: () => (
    <PortfolioPage
      title={<span className="text-gradient-brand">{PORTFOLIO.web.title}</span>}
      subtitle={PORTFOLIO.web.subtitle}
      sections={PORTFOLIO.web.sections}
    />
  ),
});
