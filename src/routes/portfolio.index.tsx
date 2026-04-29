import { createFileRoute, Link } from "@tanstack/react-router";
import { Code, Palette, Smartphone, BarChart3, ChevronLeft } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import workWeb1 from "@/assets/work-web1.jpg";
import workLogo2 from "@/assets/work-logo2.jpg";
import workSocial1 from "@/assets/work-social1.jpg";
import workRestaurant from "@/assets/work-restaurant.jpg";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "أعمالنا — THE 4 SEASON STUDIO" },
      { name: "description", content: "استعرض أعمالنا في تصميم المواقع، التصميم والمونتاج، السوشيال ميديا، وإدارة الصفحات" },
    ],
  }),
  component: PortfolioIndex,
});

const sections = [
  {
    to: "/portfolio/web",
    title: "تصميم وبرمجة المواقع",
    desc: "مواقع ومتاجر إلكترونية ومنصات تعليمية",
    Icon: Code,
    img: workWeb1,
  },
  {
    to: "/portfolio/design",
    title: "التصميم والمونتاج",
    desc: "لوجوهات، تصاميم دراسية، هويات بصرية ومونتاج",
    Icon: Palette,
    img: workLogo2,
  },
  {
    to: "/portfolio/social",
    title: "خدمات السوشيال ميديا",
    desc: "حملات زيادة متابعين وتفاعل ناجحة",
    Icon: Smartphone,
    img: workSocial1,
  },
  {
    to: "/portfolio/management",
    title: "إدارة الصفحات والتسويق",
    desc: "هويات بصرية ومحتوى وحملات إعلانية",
    Icon: BarChart3,
    img: workRestaurant,
  },
] as const;

function PortfolioIndex() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        eyebrow="بورتفوليو"
        title={<>أعمالنا <span className="text-gradient-brand">المميزة</span></>}
        subtitle="نخبة من أعمالنا في كل قسم. اختر القسم لاستعراض الأعمال التفصيلية"
      />

      <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {sections.map((s, i) => (
          <Link
            key={s.to}
            to={s.to}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden hover-lift animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="inline-flex h-12 w-12 rounded-2xl bg-gradient-brand items-center justify-center mb-3 shadow-lg">
                <s.Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{s.desc}</p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-gradient-brand">
                استعرض الأعمال
                <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
