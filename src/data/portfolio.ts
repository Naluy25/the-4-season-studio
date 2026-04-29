// ⚠️ مؤقتاً: كل الصور بتستخدم نفس لينك درايف، غيّره لاحقاً لكل صورة
// لتحويل لينك درايف من /file/d/ID/view لرابط صورة مباشر استخدم:
// https://drive.google.com/uc?export=view&id=ID
const PLACEHOLDER =
  "https://drive.google.com/uc?export=view&id=1g23n_n-WHe-vAwfqJG1pCMsrZvbKIvAH";

// متاجر الكترونية
const store1 = PLACEHOLDER;
const store2 = PLACEHOLDER;

// منصات تعليمية
const websitelms1 = PLACEHOLDER;
const websitelms2 = PLACEHOLDER;
const websitelms3 = PLACEHOLDER;

// تصاميم دراسية
const postedu1 = PLACEHOLDER;
const postedu2 = PLACEHOLDER;
const postedu3 = PLACEHOLDER;
const postedu4 = PLACEHOLDER;
const postedu5 = PLACEHOLDER;
const postedu6 = PLACEHOLDER;

// كتب دراسية
const book1 = PLACEHOLDER;
const book2 = PLACEHOLDER;
const book3 = PLACEHOLDER;
const book4 = PLACEHOLDER;
const book5 = PLACEHOLDER;
const book6 = PLACEHOLDER;
const book7 = PLACEHOLDER;
const book8 = PLACEHOLDER;
const book9 = PLACEHOLDER;

// تصاميم مطاعم
const Restaurant1 = PLACEHOLDER;
const Restaurant2 = PLACEHOLDER;

// لوجوهات
const logdes1 = PLACEHOLDER;
const logdes2 = PLACEHOLDER;
const logdes3 = PLACEHOLDER;
const logdes4 = PLACEHOLDER;
const logdes5 = PLACEHOLDER;
const logdes6 = PLACEHOLDER;
const logdes7 = PLACEHOLDER;
const logdes8 = PLACEHOLDER;
const logdes9 = PLACEHOLDER;
const logdes10 = PLACEHOLDER;
const logdes11 = PLACEHOLDER;

// أعمال عامة
const workWeb1 = PLACEHOLDER;
const workWeb23 = PLACEHOLDER;
const workLogo2 = PLACEHOLDER;
const workSocial1 = PLACEHOLDER;
const workMontage = PLACEHOLDER;
const workRestaurant = PLACEHOLDER;

export type PortfolioItem = { src: string; title: string; tag: string };

export const PORTFOLIO = {
  web: {
    title: "تصميم وبرمجة المواقع",
    subtitle: "مواقع ومتاجر إلكترونية واحترافية بأحدث التقنيات",
    sections: [
      {
        title: "مواقع إلكترونية",
        items: [
          { src: workWeb1, title: "متجر إلكتروني", tag: "E-Commerce" },
          { src: workWeb23, title: "أكاديمية تعليمية", tag: "Education" },
          { src: workWeb1, title: "موقع شركة", tag: "Corporate" },
        ] as PortfolioItem[],
      },
      {
        title: "متاجر إلكترونية",
        items: [
          { src: store1, title: "متجر أزياء", tag: "Fashion" },
          { src: store2, title: "متجر الكتروني", tag: "Web Store" },
        ] as PortfolioItem[],
      },
      {
        title: "مصادر تعليمية",
        items: [
          { src: websitelms1, title: "منصة تعليمية", tag: "LMS" },
          { src: websitelms2, title: "منصة تعليمية", tag: "LMS" },
          { src: websitelms3, title: "منصة تعليمية", tag: "LMS" },
        ] as PortfolioItem[],
      },
    ],
  },
  design: {
    title: "التصميم والمونتاج",
    subtitle: "أعمال تصميم بصرية ومونتاج بإحساس سينمائي",
    sections: [
      {
        title: "تصاميم دراسية",
        items: [
          { src: postedu1, title: "تصميم دراسي", tag: "Poster" },
          { src: postedu2, title: "تصميم دراسي", tag: "Poster" },
          { src: postedu3, title: "تصميم دراسي", tag: "Poster" },
          { src: postedu4, title: "تصميم دراسي", tag: "Poster" },
          { src: postedu5, title: "تصميم دراسي", tag: "Poster" },
          { src: postedu6, title: "تصميم دراسي", tag: "Poster" },

          { src: book1, title: "أغلفة كتب دراسية", tag: "Books" },
          { src: book1, title: "أغلفة كتب دراسية", tag: "Books" },
          { src: book2, title: "أغلفة كتب دراسية", tag: "Books" },
          { src: book3, title: "أغلفة كتب دراسية", tag: "Books" },
          { src: book4, title: "أغلفة كتب دراسية", tag: "Books" },
          { src: book5, title: "أغلفة كتب دراسية", tag: "Books" },
          { src: book6, title: "أغلفة كتب دراسية", tag: "Books" },
          { src: book7, title: "أغلفة كتب دراسية", tag: "Books" },
          { src: book8, title: "أغلفة كتب دراسية", tag: "Books" },
          { src: book9, title: "أغلفة كتب دراسية", tag: "Books" },
        ] as PortfolioItem[],
      },
      {
        title: "لوجوهات",
        items: [
          { src: logdes1, title: "لوجو جيمنج", tag: "Gaming" },
          { src: logdes2, title: "لوجو جيمنج", tag: "Gaming" },
          { src: logdes3, title: "لوجو جيمنج", tag: "Gaming" },
          { src: logdes4, title: "لوجو جيمنج", tag: "Gaming" },
          { src: logdes5, title: "لوجو جيمنج", tag: "Gaming" },
          { src: logdes6, title: "لوجو جيمنج", tag: "Gaming" },
          { src: workLogo2, title: "لوجو جيمنج", tag: "Gaming" },
          { src: logdes7, title: "لوجو براند", tag: "Branding" },
          { src: logdes8, title: "لوجو تعليمي", tag: "Education" },
          { src: logdes9, title: "لوجو تعليمي", tag: "Education" },
          { src: logdes10, title: "لوجو عقاري", tag: "company" },
          { src: logdes11, title: "لوجو فاشون", tag: "fashion" },
        ] as PortfolioItem[],
      },
      {
        title: "مطاعم وعلامات تجارية",
        items: [
          { src: Restaurant1, title: "هوية مطعم كاملة", tag: "Branding" },
          { src: Restaurant2, title: "هوية مطعم كاملة", tag: "Branding" },
        ] as PortfolioItem[],
      },
      {
        title: "مونتاج فيديو",
        items: [{ src: workMontage, title: "مونتاج سينمائي", tag: "Video" }] as PortfolioItem[],
      },
    ],
  },
  social: {
    title: "خدمات السوشيال ميديا",
    subtitle: "حملات زيادة متابعين وتفاعل ناجحة",
    sections: [
      {
        title: "حملات سوشيال ميديا",
        items: [
          { src: workSocial1, title: "حملة انستجرام", tag: "Instagram" },
          { src: workSocial1, title: "حملة تيكتوك", tag: "TikTok" },
          { src: workSocial1, title: "حملة فيسبوك", tag: "Facebook" },
        ] as PortfolioItem[],
      },
    ],
  },
  management: {
    title: "إدارة الصفحات والتسويق",
    subtitle: "هويات بصرية ومحتوى وخطط تسويقية متكاملة",
    sections: [
      {
        title: "إدارة صفحات",
        items: [
          { src: workSocial1, title: "إدارة محتوى شامل", tag: "Content" },
          { src: workRestaurant, title: "هوية بصرية كاملة", tag: "Identity" },
        ] as PortfolioItem[],
      },
      {
        title: "حملات إعلانية",
        items: [
          { src: workSocial1, title: "حملة ممولة", tag: "Ads" },
          { src: workMontage, title: "إعلان فيديو", tag: "Video Ads" },
        ] as PortfolioItem[],
      },
    ],
  },
} as const;

export type PortfolioKey = keyof typeof PORTFOLIO;
