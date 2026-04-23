import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2, ChevronLeft, CreditCard, FileCheck, MessageSquare,
  ShoppingBag, Smartphone, UserCheck, Wallet,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import paymentExtra from "@/assets/payment-extra.png";

export const Route = createFileRoute("/how-to-buy")({
  head: () => ({
    meta: [
      { title: "طريقة الشراء — THE 4 SEASON STUDIO" },
      { name: "description", content: "تعرف على خطوات شراء الخدمات وقواعد الشراء وطرق الدفع المتاحة" },
    ],
  }),
  component: HowToBuyPage,
});

const steps = [
  { Icon: ShoppingBag, title: "ادخل صفحة شراء خدمة", desc: "تصفح كافة الخدمات المقسمة على 4 أقسام رئيسية" },
  { Icon: FileCheck, title: "اختر الخدمات", desc: "أضف الخدمات التي تحتاجها إلى سلة المشتريات" },
  { Icon: UserCheck, title: "أدخل بياناتك", desc: "اكتب اسمك ورقم هاتفك وعنوانك للتواصل" },
  { Icon: MessageSquare, title: "اكتب تفاصيل كل خدمة", desc: "اشرح ما تريده تحديداً في كل خدمة من اختيارك" },
  { Icon: Smartphone, title: "إرسال على الواتساب", desc: "بضغطة زر يتم تحويل طلبك كاملاً إلى رقمنا" },
];

const rules = [
  "يتم تنفيذ الخدمات خلال المدة المتفق عليها بعد تأكيد الدفع.",
  "يحق للعميل طلب تعديلين مجانيين على كل تصميم.",
  "يلتزم العميل بتقديم كافة المعلومات اللازمة لتنفيذ الخدمة.",
  "لا يتم استرداد المبلغ بعد بدء تنفيذ الخدمة.",
  "جميع الأعمال تخضع لسرية تامة بين الوكالة والعميل.",
  "يحتفظ الستوديو بحقه في عرض الأعمال ضمن البورتفوليو ما لم يطلب العميل غير ذلك.",
];

const paymentMethods = [
  { Icon: Building2, name: "تحويل بنكي", desc: "تحويل مباشر للحساب البنكي" },
  { Icon: Wallet, name: "محفظة إلكترونية", desc: "فودافون كاش، اتصالات كاش، أورانج كاش" },
  { Icon: CreditCard, name: "إنستا باي", desc: "تحويل فوري InstaPay" },
  { Icon: CreditCard, name: "PayPal", desc: "للعملاء خارج مصر" },
  { Icon: Smartphone, name: "Apple Pay", desc: "دفع سريع وآمن" },
];

function HowToBuyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        eyebrow="ابدأ معنا"
        title={<>طريقة <span className="text-gradient-brand">الشراء</span></>}
        subtitle="خطوات بسيطة وسهلة للحصول على خدماتك في دقائق"
      />

      {/* Steps */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative p-5 rounded-2xl glass-card border border-white/5 text-center hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-4 right-1/2 translate-x-1/2 h-8 w-8 rounded-full bg-gradient-brand text-white text-sm font-black flex items-center justify-center shadow-lg">
                {i + 1}
              </div>
              <div className="inline-flex h-12 w-12 rounded-xl bg-gradient-brand-soft items-center justify-center mb-3 mt-4">
                <s.Icon className="h-6 w-6 text-gradient-brand" />
              </div>
              <h4 className="font-bold mb-2 text-sm">{s.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-bold shadow-elegant hover:scale-105 transition-transform"
          >
            ابدأ بشراء خدمة الآن
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Rules */}
      <div className="max-w-4xl mx-auto mb-24">
        <SectionHeading
          eyebrow="مهم"
          title={<>قواعد <span className="text-gradient-orange">الشراء</span></>}
        />
        <div className="grid sm:grid-cols-2 gap-4">
          {rules.map((r, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl glass-card border border-white/5 flex gap-3 items-start hover-lift"
            >
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-sm">
                {i + 1}
              </div>
              <p className="text-sm leading-relaxed">{r}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payments */}
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="ادفع بسهولة"
          title={<>طرق <span className="text-gradient-brand">الدفع</span> المتاحة</>}
          subtitle="اختر الطريقة الأنسب لك من بين خيارات دفع متعددة وآمنة"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {paymentMethods.map((m) => (
            <div
              key={m.name}
              className="p-6 rounded-2xl glass-card border border-white/5 text-center hover-lift"
            >
              <div className="inline-flex h-14 w-14 rounded-2xl bg-gradient-brand items-center justify-center mb-3">
                <m.Icon className="h-7 w-7 text-white" />
              </div>
              <h4 className="font-bold mb-1">{m.name}</h4>
              <p className="text-xs text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Extra payment visual */}
        <div className="mt-10">
          <div className="rounded-3xl glass-card border border-white/10 p-4 md:p-6 overflow-hidden">
            <img
              src={paymentExtra}
              alt="طرق الدفع المتاحة"
              className="w-full h-auto rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
