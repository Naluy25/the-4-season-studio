import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Code, Palette, Smartphone, BarChart3, ArrowLeft, Sparkles,
  ShieldCheck, Zap, Users, Star, CheckCircle2, Globe,
} from "lucide-react";
import heroBg from "@/assets/banner.png";
import abdulrahmanImg from "@/assets/abdulrahman.jpg";
import gharamImg from "@/assets/gharam.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "THE 4 SEASON STUDIO — كل ما تحتاجه في منصة واحدة" },
      { name: "description", content: "وكالة تسويق رقمي متكاملة. أكثر من 5000 عميل يثقون بنا. تصميم مواقع، سوشيال ميديا، تصميم ومونتاج، وإدارة صفحات." },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    Icon: Globe,
    emoji: "🌐",
    title: "تصميم وتطوير المواقع",
    desc: "إنشاء مواقع ومتاجر إلكترونية احترافية للشركات، الأكاديميات، والأعمال الشخصية.",
    gradient: "from-purple-600 to-fuchsia-500",
  },
  {
    Icon: Palette,
    emoji: "🎨",
    title: "التصميم والمونتاج",
    desc: "تصميم إعلانات، لوجوهات، بنرات، مطبوعات + مونتاج فيديوهات وهندسة صوتية.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    Icon: Smartphone,
    emoji: "📱",
    title: "خدمات السوشيال ميديا",
    desc: "زيادة المتابعين والتفاعل (لايكات، تعليقات، مشاهدات) على جميع المنصات.",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    Icon: BarChart3,
    emoji: "📊",
    title: "إدارة الصفحات والتسويق",
    desc: "هوية بصرية كاملة + محتوى احترافي + تحليل منافسين + خطط تسويقية + إدارة إعلانات.",
    gradient: "from-purple-500 to-orange-500",
  },
];

const partners = [
  { name: "Google", letter: "G", color: "from-blue-500 via-red-500 to-yellow-500" },
  { name: "Hostinger", letter: "H", color: "from-purple-600 to-indigo-600" },
  { name: "GitHub", letter: "GH", color: "from-gray-700 to-gray-900" },
  { name: "Meta", letter: "M", color: "from-blue-500 to-cyan-500" },
  { name: "Adobe", letter: "A", color: "from-red-600 to-pink-600" },
  { name: "Figma", letter: "F", color: "from-purple-500 to-pink-500" },
];

const stats = [
  { value: "+5000", label: "عميل سعيد" },
  { value: "+1200", label: "مشروع منجز" },
  { value: "+98%", label: "نسبة الرضا" },
  { value: "24/7", label: "دعم مستمر" },
];

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/75 to-background" />
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 text-sm font-medium">
              <Sparkles className="h-4 w-4 text-accent" />
              منصتك الإبداعية المتكاملة
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
              كل ما تحتاجه في
              <br />
              <span className="text-gradient-brand">منصة إلكترونية واحدة</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              أكثر من <span className="text-foreground font-bold">5000 عميل</span> يثق في منصة
              <span className="text-gradient-brand font-bold"> ذا فور سيزون </span>
              لبيع الخدمات الإلكترونية بكل سهولة وأمان
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-brand text-white font-bold shadow-elegant hover:scale-105 transition-transform"
              >
                ابدأ مشروعك الآن
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full glass border border-white/10 font-bold hover:bg-white/5 transition-colors"
              >
                تصفح الباقات
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl mx-auto">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-4xl font-black text-gradient-brand">{s.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 border-y border-white/5">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground tracking-widest uppercase mb-8">
            شركاء شبكة ذا فور سيزون
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {partners.map((p, i) => (
              <div
                key={i}
                className="group flex items-center gap-3 px-6 py-3 rounded-2xl glass-card hover-lift border border-white/5"
              >
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center font-black text-white text-sm shadow-lg`}>
                  {p.letter}
                </div>
                <span className="font-bold text-lg">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="خدماتنا"
            title={<>خدمات <span className="text-gradient-brand">ذا فور سيزون ستوديو</span></>}
            subtitle="حلول رقمية متكاملة تغطي كل احتياجاتك التسويقية والإبداعية تحت سقف واحد"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-3xl glass-card hover-lift border border-white/5 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`absolute -top-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-br ${s.gradient} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
                <div className="relative space-y-4">
                  <div className={`inline-flex h-14 w-14 rounded-2xl bg-gradient-to-br ${s.gradient} items-center justify-center text-2xl shadow-lg`}>
                    {s.emoji}
                  </div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="لماذا نحن؟"
            title={<>تجربة <span className="text-gradient-brand">احترافية</span> لا مثيل لها</>}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: ShieldCheck, title: "ضمان الجودة", desc: "نلتزم بأعلى معايير الجودة في كل مشروع" },
              { Icon: Zap, title: "تسليم سريع", desc: "نقدم أعمالنا في الوقت المتفق عليه دون تأخير" },
              { Icon: Users, title: "فريق محترف", desc: "خبراء متخصصون في كل مجال نقدمه" },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl glass-card border border-white/5 hover-lift text-center">
                <div className="inline-flex h-16 w-16 rounded-2xl bg-gradient-brand items-center justify-center mb-5 glow-purple">
                  <f.Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="فريق القيادة"
            title={<>قادة <span className="text-gradient-brand">المجتمع</span></>}
            subtitle="عقول مبدعة وخبرات متراكمة تقود ذا فور سيزون ستوديو نحو التميّز"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                img: abdulrahmanImg,
                role: "المؤسس وقائد المجتمع",
                name: "المهندس عبدالرحمن",
                desc: "مؤسس وقائد مجتمع THE 4 SEASON STUDIO، خبرة عميقة في التسويق الرقمي وإدارة المشاريع التقنية. قاد فريقًا متكاملًا لتقديم أكثر من 1200 مشروع ناجح.",
                tags: ["إدارة استراتيجية", "تسويق رقمي", "تطوير تقني"],
                glow: "bg-gradient-radial-purple",
              },
              {
                img: gharamImg,
                role: "مديرة العمليات الإبداعية",
                name: "المهندسة غرام",
                desc: "شريكة في القيادة بـ THE 4 SEASON STUDIO، تقود قسم الإبداع وإدارة الصفحات بخبرة واسعة في التصميم البصري والمحتوى التسويقي وبناء الهوية.",
                tags: ["إبداع وتصميم", "إدارة محتوى", "هوية بصرية"],
                glow: "bg-gradient-radial-orange",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="relative rounded-[2rem] overflow-hidden glass-card border border-white/10 p-6 md:p-8 animate-fade-up"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className={`absolute inset-0 ${p.glow} opacity-50`} />
                <div className="relative flex flex-col items-center text-center gap-5">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-brand blur-2xl opacity-50 rounded-full" />
                    <div className="relative h-36 w-36 md:h-44 md:w-44 rounded-full overflow-hidden border-2 border-white/20 shadow-elegant">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" width={1024} height={1024} />
                    </div>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-brand text-white text-[11px] font-bold tracking-wider mb-3 uppercase shadow-elegant">
                      {p.role}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black mb-3">{p.name}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-semibold glass border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden p-10 md:p-16 text-center glass-card border border-white/10">
            <div className="absolute inset-0 bg-gradient-brand opacity-10" />
            <div className="relative space-y-6">
              <Star className="h-12 w-12 text-accent mx-auto" />
              <h2 className="text-3xl md:text-5xl font-black leading-tight">
                جاهز لبدء <span className="text-gradient-brand">رحلتك الرقمية</span>؟
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                انضم إلى آلاف العملاء الذين حققوا أهدافهم معنا
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-brand text-white font-bold shadow-elegant hover:scale-105 transition-transform"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  اطلب خدمتك الآن
                </Link>
                <Link
                  to="/how-to-buy"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border border-white/10 font-bold"
                >
                  كيف تبدأ؟
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
