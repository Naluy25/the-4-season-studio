import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Check, Crown, Rocket, Sparkles, Zap, Share2, Palette, Code2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { openWhatsApp } from "@/lib/whatsapp";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "الباقات والباكدجات — THE 4 SEASON STUDIO" },
      { name: "description", content: "خطط تسويق وباقات خدمات متنوعة تناسب جميع احتياجاتك بأسعار رمزية" },
    ],
  }),
  component: PackagesPage,
});

type Plan = {
  name: string;
  Icon: typeof Sparkles;
  tagline: string;
  price: string;
  currency: string;
  period: string;
  features: string[];
  highlight: boolean;
};

const socialPlans: Plan[] = [
  {
    name: "الباقة الأساسية",
    Icon: Sparkles,
    tagline: "للمشاريع الناشئة والأعمال الجديدة",
    price: "1,500",
    currency: "ج.م",
    period: "/ شهرياً",
    features: [
      "إدارة 1 منصة سوشيال ميديا",
      "8 تصاميم بوست شهرياً",
      "4 ستوريز شهرياً",
      "تحليل أساسي للأداء",
      "دعم فني عبر الواتساب",
      "تقرير شهري مفصل",
    ],
    highlight: false,
  },
  {
    name: "الباقة الاحترافية",
    Icon: Rocket,
    tagline: "الأكثر طلباً للأعمال المتوسطة",
    price: "3,500",
    currency: "ج.م",
    period: "/ شهرياً",
    features: [
      "إدارة 3 منصات سوشيال ميديا",
      "20 تصميم بوست شهرياً",
      "15 ستوري + 4 ريلز شهرياً",
      "تحليل منافسين شامل",
      "خطة تسويقية مدروسة",
      "إدارة إعلانات ممولة",
      "هوية بصرية أساسية",
      "دعم فني على مدار الساعة",
    ],
    highlight: true,
  },
  {
    name: "الباقة الفاخرة",
    Icon: Crown,
    tagline: "للعلامات التجارية الكبرى",
    price: "7,000",
    currency: "ج.م",
    period: "/ شهرياً",
    features: [
      "إدارة جميع المنصات",
      "تصاميم لا محدودة",
      "ريلز + فيديوهات أسبوعية",
      "هوية بصرية متكاملة",
      "خطة تسويقية ربعية",
      "حملات ممولة محترفة",
      "موقع إلكتروني هدية",
      "مدير حساب مخصص",
      "تقارير أسبوعية تفصيلية",
    ],
    highlight: false,
  },
];

const designPlans: Plan[] = [
  {
    name: "باقة التصميم الأساسية",
    Icon: Palette,
    tagline: "للأعمال التي تحتاج هوية بسيطة",
    price: "999",
    currency: "ج.م",
    period: "/ مرة واحدة",
    features: [
      "تصميم لوجو احترافي",
      "10 تصاميم سوشيال ميديا",
      "تصميم كارت شخصي",
      "تعديلات غير محدودة",
      "تسليم خلال 5 أيام",
    ],
    highlight: false,
  },
  {
    name: "باقة التصميم والمونتاج",
    Icon: Sparkles,
    tagline: "الأفضل لمحتوى متكامل ومميز",
    price: "2,500",
    currency: "ج.م",
    period: "/ شهرياً",
    features: [
      "20 تصميم بوست احترافي",
      "10 ريلز / شورتس مونتاج",
      "3 فيديوهات إعلانية قصيرة",
      "هندسة صوتية للفيديوهات",
      "تصميم ثامبنيلز يوتيوب",
      "ملفات مفتوحة للتعديل",
    ],
    highlight: true,
  },
  {
    name: "باقة الهوية الكاملة",
    Icon: Crown,
    tagline: "هوية بصرية متكاملة لعلامتك",
    price: "4,500",
    currency: "ج.م",
    period: "/ مرة واحدة",
    features: [
      "تصميم لوجو + متغيراته",
      "دليل هوية بصرية كامل (Brand Book)",
      "تصاميم مطبوعات (كارت، فاتورة، إنفلوبات)",
      "30 تصميم سوشيال ميديا",
      "5 فيديوهات موشن جرافيك",
      "قوالب جاهزة قابلة للتعديل",
    ],
    highlight: false,
  },
];

const devPlans: Plan[] = [
  {
    name: "باقة لاندينج بيدج",
    Icon: Code2,
    tagline: "صفحة هبوط احترافية لمنتج أو خدمة",
    price: "1,800",
    currency: "ج.م",
    period: "/ مرة واحدة",
    features: [
      "تصميم احترافي عصري",
      "متجاوب مع جميع الأجهزة",
      "تحسين سرعة التحميل",
      "نموذج تواصل + واتساب",
      "تحسين SEO أساسي",
      "استضافة مجانية لشهر",
    ],
    highlight: false,
  },
  {
    name: "باقة الموقع المتكامل",
    Icon: Rocket,
    tagline: "موقع متعدد الصفحات بإدارة كاملة",
    price: "5,500",
    currency: "ج.م",
    period: "/ مرة واحدة",
    features: [
      "تصميم UI/UX مخصص بالكامل",
      "حتى 10 صفحات داخلية",
      "لوحة تحكم لإدارة المحتوى",
      "ربط مع السوشيال ميديا",
      "تحسين SEO متقدم",
      "شهادة SSL + استضافة 6 أشهر",
      "دعم فني لمدة 3 أشهر",
    ],
    highlight: true,
  },
  {
    name: "باقة المتجر الإلكتروني",
    Icon: Crown,
    tagline: "متجر إلكتروني احترافي متكامل",
    price: "9,500",
    currency: "ج.م",
    period: "/ مرة واحدة",
    features: [
      "متجر إلكتروني كامل المزايا",
      "نظام دفع إلكتروني آمن",
      "إدارة المنتجات والمخزون",
      "نظام شحن وتتبع الطلبات",
      "حسابات عملاء ولوحة تحكم",
      "تطبيق موبايل (PWA)",
      "تكامل مع SEO + Google Analytics",
      "دعم فني لمدة 6 أشهر",
    ],
    highlight: false,
  },
];

const bundles = [
  {
    name: "باقة البداية الذكية",
    services: ["تصميم لوجو احترافي", "هوية بصرية أساسية", "10 تصاميم سوشيال"],
    badge: "وفر 30%",
    price: "999",
    oldPrice: "1,400",
  },
  {
    name: "باقة المتجر المتكامل",
    services: ["متجر إلكتروني", "تصميم لوجو", "20 تصميم منتج", "إدارة شهر مجاناً"],
    badge: "الأكثر مبيعاً",
    price: "4,500",
    oldPrice: "6,500",
  },
  {
    name: "باقة المحتوى الكامل",
    services: ["30 تصميم بوست", "10 ريلز/شورتس", "خطة محتوى شهرية", "هندسة صوتية"],
    badge: "وفر 25%",
    price: "2,200",
    oldPrice: "2,900",
  },
  {
    name: "باقة الإطلاق الكبير",
    services: ["موقع إلكتروني", "هوية بصرية كاملة", "حملة إعلانية مميزة", "إدارة 3 شهور"],
    badge: "حصري",
    price: "8,900",
    oldPrice: "12,000",
  },
];

type CategoryKey = "social" | "design" | "dev";

const categories: ReadonlyArray<{
  key: CategoryKey;
  label: string;
  short: string;
  Icon: typeof Sparkles;
  plans: Plan[];
  accentClass: string;
}> = [
  { key: "social", label: "باقات سوشيال ميديا", short: "سوشيال ميديا", Icon: Share2, plans: socialPlans, accentClass: "text-gradient-brand" },
  { key: "design", label: "باقات تصميم ومونتاج", short: "تصميم ومونتاج", Icon: Palette, plans: designPlans, accentClass: "text-gradient-orange" },
  { key: "dev", label: "باقات برمجية", short: "برمجية", Icon: Code2, plans: devPlans, accentClass: "text-gradient-purple" },
];

function PackagesPage() {
  const [active, setActive] = useState<CategoryKey>("social");
  const current = categories.find((c) => c.key === active)!;

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        eyebrow="باقاتنا"
        title={<>خطط <span className="text-gradient-brand">احترافية</span> لكل احتياجاتك</>}
        subtitle="اختر القسم المناسب لمشروعك من باقات السوشيال ميديا، التصميم والمونتاج، أو الباقات البرمجية"
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
        {categories.map((c) => {
          const isActive = c.key === active;
          return (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`group flex items-center gap-2 px-5 py-3 rounded-full border transition-all ${
                isActive
                  ? "bg-gradient-brand text-white border-transparent shadow-lg scale-105"
                  : "glass-card border-white/10 text-foreground hover:border-white/30"
              }`}
            >
              <c.Icon className="h-4 w-4" />
              <span className="font-bold text-sm md:text-base">{c.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Category Heading */}
      <div className="text-center mb-10 animate-fade-in">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-brand text-white text-xs font-black shadow-elegant">
          <current.Icon className="h-3.5 w-3.5" />
          {current.label}
        </span>
      </div>

      {/* Plans */}
      <div key={active} className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
        {current.plans.map((p, i) => (
          <div
            key={p.name}
            className={`relative p-8 rounded-3xl border hover-lift animate-fade-up ${
              p.highlight
                ? "bg-gradient-brand-soft border-white/20 glow-purple md:scale-105"
                : "glass-card border-white/5"
            }`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {p.highlight && (
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="px-4 py-1.5 rounded-full bg-gradient-brand text-white text-xs font-black shadow-lg">
                  ⭐ الأكثر شعبية
                </span>
              </div>
            )}

            <div className={`inline-flex h-14 w-14 rounded-2xl items-center justify-center mb-5 ${p.highlight ? "bg-white/10" : "bg-gradient-brand"}`}>
              <p.Icon className="h-7 w-7 text-white" />
            </div>

            <h3 className="text-2xl font-black mb-2">{p.name}</h3>
            <p className="text-sm text-muted-foreground mb-5">{p.tagline}</p>

            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-black text-gradient-brand">{p.price}</span>
                <span className="text-lg font-bold text-muted-foreground">{p.currency}</span>
              </div>
              <span className="text-xs text-muted-foreground">{p.period}</span>
            </div>

            <div className="space-y-3 mb-8">
              {p.features.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-gradient-brand flex items-center justify-center">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                openWhatsApp(
                  `السلام عليكم 👋\nأرغب في الاشتراك في *${p.name}* (${current.label}) بسعر ${p.price} ${p.currency} ${p.period}\nبرجاء التواصل معي لتفاصيل أكثر.`
                )
              }
              className={`w-full py-4 rounded-full font-bold transition-transform hover:scale-105 ${
                p.highlight
                  ? "bg-white text-background"
                  : "bg-gradient-brand text-white"
              }`}
            >
              اشترك الآن
            </button>
          </div>
        ))}
      </div>

      {/* Bundles */}
      <SectionHeading
        eyebrow="عروض حصرية"
        title={<>باقات وعروض <span className="text-gradient-orange">مميزة</span></>}
        subtitle="مجموعات خدمات مدروسة بأسعار رمزية لتوفر عليك أكثر"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {bundles.map((b, i) => (
          <div
            key={b.name}
            className="relative p-6 rounded-3xl glass-card border border-white/5 hover-lift animate-fade-up overflow-hidden"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-black">
                {b.badge}
              </span>
            </div>
            <div className="inline-flex h-12 w-12 rounded-xl bg-gradient-brand items-center justify-center mb-4 mt-8">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-4">{b.name}</h3>
            <ul className="space-y-2 mb-5">
              {b.services.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <div className="mb-5 flex items-baseline gap-2">
              <span className="text-3xl font-black text-gradient-orange">{b.price}</span>
              <span className="text-sm font-bold text-muted-foreground">ج.م</span>
              <span className="text-sm text-muted-foreground line-through mr-1">{b.oldPrice}</span>
            </div>
            <button
              onClick={() =>
                openWhatsApp(
                  `السلام عليكم 👋\nأرغب في *${b.name}* (${b.services.join("، ")}) بسعر ${b.price} ج.م\nبرجاء التواصل لإتمام الطلب.`
                )
              }
              className="w-full py-3 rounded-full bg-gradient-brand text-white font-bold text-sm hover:scale-105 transition-transform"
            >
              اطلب العرض
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
