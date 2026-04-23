export type ShopProduct = {
  id: string;
  name: string;
  description: string;
};

export type ShopCategory = {
  id: string;
  name: string;
  emoji: string;
  description: string;
  products: ShopProduct[];
};

export const SHOP_CATEGORIES: ShopCategory[] = [
  {
    id: "programming",
    name: "خدمات برمجية",
    emoji: "💻",
    description: "تصميم وتطوير المواقع والمتاجر الإلكترونية باحترافية",
    products: [
      { id: "prog-website", name: "موقع إلكتروني تعريفي", description: "موقع شركة أو أعمال شخصية متجاوب" },
      { id: "prog-store", name: "متجر إلكتروني", description: "متجر متكامل مع نظام دفع وإدارة طلبات" },
      { id: "prog-academy", name: "أكاديمية تعليمية", description: "منصة كورسات ومحاضرات أونلاين" },
      { id: "prog-landing", name: "صفحة هبوط Landing Page", description: "صفحة تسويقية احترافية" },
      { id: "prog-dashboard", name: "لوحة تحكم Admin", description: "لوحة إدارة مخصصة لاحتياجاتك" },
      { id: "prog-app", name: "تطبيق ويب متكامل", description: "تطبيق ويب بميزات متقدمة" },
    ],
  },
  {
    id: "design",
    name: "خدمات تصميم ومونتاج",
    emoji: "🎨",
    description: "تصاميم احترافية ومونتاج فيديوهات بأعلى جودة",
    products: [
      { id: "des-logo", name: "تصميم لوجو", description: "هوية بصرية لعلامتك التجارية" },
      { id: "des-social", name: "تصميم سوشيال ميديا", description: "بوستات وستوريز لجميع المنصات" },
      { id: "des-banner", name: "تصميم بنرات وإعلانات", description: "بنرات ويب وإعلانات ممولة" },
      { id: "des-print", name: "مطبوعات وبروشورات", description: "كتالوجات وفلايرز وبطاقات أعمال" },
      { id: "des-book", name: "تصميم أغلفة كتب", description: "أغلفة كتب وكتب إلكترونية" },
      { id: "des-cert", name: "شهادات تقدير", description: "شهادات بتصميم أنيق" },
      { id: "des-video-long", name: "مونتاج فيديو طويل", description: "فيديوهات يوتيوب ودورات" },
      { id: "des-video-short", name: "مونتاج فيديو قصير", description: "ريلز، شورتس، تيكتوك" },
      { id: "des-audio", name: "هندسة صوتية", description: "تحسين الصوت ومكساج احترافي" },
    ],
  },
  {
    id: "social",
    name: "خدمات سوشيال ميديا",
    emoji: "📱",
    description: "زيادة المتابعين والتفاعل على جميع المنصات",
    products: [
      { id: "soc-followers-ig", name: "متابعين انستجرام", description: "متابعين حقيقيين ومتفاعلين" },
      { id: "soc-followers-tt", name: "متابعين تيكتوك", description: "زيادة جمهورك على تيكتوك" },
      { id: "soc-followers-yt", name: "مشتركين يوتيوب", description: "مشتركين حقيقيين على قناتك" },
      { id: "soc-likes", name: "لايكات وتفاعل", description: "تفاعل حقيقي على منشوراتك" },
      { id: "soc-comments", name: "تعليقات تفاعلية", description: "تعليقات مدروسة وجذابة" },
      { id: "soc-views", name: "مشاهدات فيديو", description: "زيادة عدد المشاهدات" },
    ],
  },
  {
    id: "management",
    name: "إدارة الصفحات والتسويق",
    emoji: "📊",
    description: "إدارة كاملة لصفحاتك مع خطط تسويقية احترافية",
    products: [
      { id: "mgt-identity", name: "هوية بصرية كاملة", description: "هوية بصرية متكاملة لعلامتك" },
      { id: "mgt-content", name: "إنتاج محتوى احترافي", description: "محتوى مكتوب وبصري متجدد" },
      { id: "mgt-competitors", name: "تحليل المنافسين", description: "دراسة شاملة لمنافسيك" },
      { id: "mgt-strategy", name: "خطة تسويقية", description: "خطة تسويق مخصصة لعملك" },
      { id: "mgt-ads", name: "إدارة إعلانات ممولة", description: "حملات فيسبوك وانستجرام وجوجل" },
      { id: "mgt-page", name: "إدارة صفحة كاملة", description: "إدارة شهرية متكاملة لصفحتك" },
    ],
  },
];

export function findProductById(id: string) {
  for (const cat of SHOP_CATEGORIES) {
    const p = cat.products.find((x) => x.id === id);
    if (p) return { product: p, category: cat };
  }
  return null;
}
