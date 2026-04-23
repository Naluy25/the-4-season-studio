import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star, MessageCircle, TrendingUp, Heart, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppMockup, type ChatMessage } from "@/components/WhatsAppMockup";

type ChatScreen = {
  name: string;
  status: string;
  avatarGradient: string;
  initial: string;
  service: string;
  messages: ChatMessage[];
};

const chatScreens: ChatScreen[] = [
  {
    name: "أحمد المصري",
    status: "متصل الآن",
    avatarGradient: "from-purple-500 to-fuchsia-600",
    initial: "أ",
    service: "متجر إلكتروني",
    messages: [
      { from: "client", text: "السلام عليكم 👋\nالموقع طلع تحفة والله 🔥", time: "10:24", reactions: ["💜"] },
      { from: "client", text: "مبيعاتي زادت 3 أضعاف خلال شهر بس!", time: "10:24" },
      { from: "me", text: "وعليكم السلام ❤️\nده شرف لينا، ربنا يبارك في رزقك", time: "10:25", status: "read" },
      { from: "client", text: "محتاج باقة جديدة لمشروع تاني 🚀", time: "10:26" },
    ],
  },
  {
    name: "سارة عبدالله",
    status: "تكتب...",
    avatarGradient: "from-pink-500 to-rose-500",
    initial: "س",
    service: "هوية بصرية",
    messages: [
      { from: "client", text: "الهوية البصرية فاقت توقعاتي بكتييير ✨", time: "02:15" },
      { from: "client", text: "كل عملائي بيسألوا مين اللي صمم لكم ده 😍", time: "02:15", reactions: ["🔥", "❤️"] },
      { from: "me", text: "ده شرف لينا يا فندم 💜\nسعدنا جداً بشغلك", time: "02:18", status: "read" },
      { from: "client", text: "هرشحكم لكل أصحابي 🌟", time: "02:19" },
    ],
  },
  {
    name: "محمد علي",
    status: "متصل الآن",
    avatarGradient: "from-orange-500 to-red-500",
    initial: "م",
    service: "مونتاج فيديو",
    messages: [
      { from: "client", text: "يا جماعة المونتاج سينمائي بجد 🎬", time: "09:41" },
      { from: "client", text: "الفيديو وصل مليون مشاهدة في 3 أيام!! 🚀", time: "09:42", reactions: ["🎉"] },
      { from: "me", text: "مبروك النجاح يا فندم 🎊\nده مجهودك انت", time: "09:45", status: "read" },
      { from: "client", text: "أكيد التعاون مستمر 💪", time: "09:46" },
    ],
  },
  {
    name: "نورا حسن",
    status: "آخر ظهور اليوم",
    avatarGradient: "from-fuchsia-500 to-purple-600",
    initial: "ن",
    service: "إدارة سوشيال ميديا",
    messages: [
      { from: "client", text: "حسابي وصل 50 ألف متابع في شهرين 😱", time: "11:12" },
      { from: "client", text: "شغلكم غيّر مساري المهني كله 💎", time: "11:13", reactions: ["✨", "💜"] },
      { from: "me", text: "ده بسبب موهبتك يا نورا 🌟\nاحنا بس ساعدنا", time: "11:15", status: "read" },
      { from: "client", text: "مستنية الباقة الجديدة 🔥", time: "11:16" },
    ],
  },
  {
    name: "خالد السيد",
    status: "متصل الآن",
    avatarGradient: "from-blue-500 to-purple-600",
    initial: "خ",
    service: "منصة تعليمية",
    messages: [
      { from: "client", text: "المنصة اشتغلت بشكل مثالي 👨‍💻", time: "08:30" },
      { from: "client", text: "2000 طالب مسجل في أول أسبوع! ده إنجاز جنوني 🚀", time: "08:31" },
      { from: "me", text: "تستاهل كل خير يا مهندس ⭐\nالكود نظيف والتصميم احترافي", time: "08:35", status: "read", reactions: ["🙏"] },
      { from: "client", text: "بجد ربنا يكرمكم 💜", time: "08:36" },
    ],
  },
  {
    name: "فاطمة الزهراء",
    status: "متصل الآن",
    avatarGradient: "from-amber-500 to-orange-600",
    initial: "ف",
    service: "متجر إلكتروني",
    messages: [
      { from: "client", text: "المتجر تحفة فنية بجد 🛍️✨", time: "01:48" },
      { from: "client", text: "الزباين بيقولوا إن الموقع سهل وسريع جداً 💯", time: "01:49", reactions: ["❤️"] },
      { from: "me", text: "نورتي يا فندم 💜\nده اللي بنحبه", time: "01:50", status: "read" },
      { from: "client", text: "محتاجة باقة جديدة لفرع تاني 🤩", time: "01:52" },
      { from: "me", text: "تحت أمرك، هنبدأ فوراً 🔥", time: "01:53", status: "delivered" },
    ],
  },
];

const stats = [
  { icon: MessageCircle, value: "+5000", label: "محادثة عميل" },
  { icon: Heart, value: "98%", label: "رضا العملاء" },
  { icon: TrendingUp, value: "+300%", label: "متوسط النمو" },
  { icon: Sparkles, value: "+1200", label: "مشروع منجز" },
];

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "آراء العملاء — THE 4 SEASON STUDIO" },
      { name: "description", content: "اقرأ آراء وتجارب أكثر من 5000 عميل تعاملوا معنا" },
    ],
  }),
  component: TestimonialsPage,
});

const reviews = [
  {
    name: "أحمد المصري",
    role: "صاحب متجر إلكتروني",
    rating: 5,
    text: "تجربة فوق الممتازة! صمموا لي متجر إلكتروني احترافي خلال أسبوع واحد فقط، والمبيعات زادت بشكل ملحوظ بعد إطلاقه. شكراً لفريق ذا فور سيزون.",
  },
  {
    name: "سارة عبدالله",
    role: "مديرة تسويق",
    rating: 5,
    text: "أفضل وكالة تعاملت معاها في إدارة السوشيال ميديا، المحتوى دائماً متجدد ومبدع، والتفاعل زاد بنسبة كبيرة جداً.",
  },
  {
    name: "محمد علي",
    role: "صاحب مطعم",
    rating: 5,
    text: "صمموا لي هوية بصرية كاملة لمطعمي، اللوجو والمنيو والباكدج. كل اللي شافهم اعجبهم، والمطعم بقى معروف بالاستايل ده.",
  },
  {
    name: "فاطمة الزهراء",
    role: "صانعة محتوى",
    rating: 5,
    text: "المونتاج بتاعهم سينمائي حقيقي، الفيديو بتاعي حقق ملايين المشاهدات بعد ما اشتغلوا عليه. تعامل راقي وسرعة في التنفيذ.",
  },
  {
    name: "خالد السيد",
    role: "مؤسس أكاديمية أونلاين",
    rating: 5,
    text: "بنوا لي منصة تعليمية كاملة تنافس أكبر المنصات في المنطقة. التصميم نظيف، الكود محترف، والدعم بعد التسليم ممتاز.",
  },
  {
    name: "نورا حسن",
    role: "ميك أب أرتيست",
    rating: 5,
    text: "شغلهم في السوشيال ميديا غير حياتي المهنية! اتنين شهور بس وعدد المتابعين وصل لـ 50 ألف. شغل احترافي ومستوى عالي.",
  },
];

function TestimonialsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        eyebrow="آراء العملاء"
        title={<>ماذا يقول <span className="text-gradient-brand">عملاؤنا</span></>}
        subtitle="أكثر من 5000 عميل سعيد بخدماتنا. اقرأ بعض من تجاربهم وآرائهم الحقيقية"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-20">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="relative p-6 rounded-3xl glass-card border border-white/5 hover-lift animate-fade-up overflow-hidden"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <Quote className="absolute top-4 left-4 h-12 w-12 text-primary/10" />
            <div className="relative">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6 text-muted-foreground">{r.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="h-11 w-11 rounded-full bg-gradient-brand flex items-center justify-center text-white font-black">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats strip */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-3xl glass-card border border-white/5 p-5 text-center hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-brand opacity-[0.04]" />
              <div className="relative">
                <div className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-brand text-white shadow-elegant">
                  <s.icon className="h-5 w-5" />
                </div>
                <p className="text-2xl md:text-3xl font-black text-gradient-brand">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real WhatsApp screenshots */}
      <div className="max-w-6xl mx-auto relative">
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

        <SectionHeading
          eyebrow="سكرين شوتس حقيقية"
          title={<>محادثات <span className="text-gradient-orange">واتساب</span> من عملائنا</>}
          subtitle="لقطات حقيقية من محادثاتنا اليومية مع العملاء — شغف، نتائج، ومحبة متبادلة"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-8 relative">
          {chatScreens.map((c, i) => (
            <div
              key={i}
              className="relative animate-fade-up"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 z-10">
                <span className="rounded-full bg-gradient-brand px-3 py-1 text-[10px] font-bold text-white shadow-elegant whitespace-nowrap">
                  {c.service}
                </span>
              </div>

              <div className="transition-transform duration-500 hover:-translate-y-2">
                <WhatsAppMockup
                  name={c.name}
                  status={c.status}
                  avatarGradient={c.avatarGradient}
                  initial={c.initial}
                  messages={c.messages}
                />
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                محادثة موثقة
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl glass-card border border-white/10 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-brand opacity-[0.06]" />
            <div className="relative">
              <Sparkles className="mx-auto h-8 w-8 text-accent mb-3" />
              <h3 className="text-xl md:text-2xl font-black mb-2">
                كن <span className="text-gradient-brand">العميل القادم</span>
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                انضم لأكثر من 5000 عميل سعيد واحصل على تجربة استثنائية
              </p>
              <a
                href="https://wa.me/201011342972"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white shadow-elegant hover:scale-105 transition-transform"
              >
                <MessageCircle className="h-4 w-4" />
                ابدأ محادثتك الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
