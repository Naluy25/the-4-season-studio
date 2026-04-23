// متاجر الكترونية
import store1 from "@/assets/store1.png";// استور 1
import store2 from "@/assets/store2.png";// استور 1

// منصات تعليمية
import websitelms1 from "@/assets/lms1.jpg"; //رانيا
import websitelms2 from "@/assets/lms2.jpg";//حيتان
import websitelms3 from "@/assets/lms3.jpg";//المصري

//  تصاميم دراسية
import postedu1 from "@/assets/postedu1.jpeg"; //
import postedu2 from "@/assets/postedu2.jpeg"; //
import postedu3 from "@/assets/postedu3.jpeg"; //
import postedu4 from "@/assets/postedu4.jpeg"; //
import postedu5 from "@/assets/postedu5.png"; //
 import postedu6 from "@/assets/postedu6.jpeg"; //
// import postedu7 from "@/assets/postedu7.png"; //
// import postedu8 from "@/assets/postedu8.png"; //
// import postedu9 from "@/assets/postedu9.png"; //

//  كتب دراسية
import book1 from "@/assets/bookdes1.png"; //
import book2 from "@/assets/bookdes2.png"; //
import book3 from "@/assets/bookdes3.png"; //
import book4 from "@/assets/bookdes4.png"; //
import book5 from "@/assets/bookdes5.png"; //
import book6 from "@/assets/bookdes6.png"; //
import book7 from "@/assets/bookdes7.png"; //
import book8 from "@/assets/bookdes8.png"; //
import book9 from "@/assets/bookdes9.png"; //

//  تصاميم مطاعم
import Restaurant1 from "@/assets/resdes1.jpeg"; //
import Restaurant2 from "@/assets/resdes2.jpeg"; //


//  لوجوهات 
import logdes1 from "@/assets/logdes1.png"; //
import logdes2 from "@/assets/logdes2.png"; //
import logdes3 from "@/assets/logdes3.png"; //
import logdes4 from "@/assets/logdes4.png"; //
import logdes5 from "@/assets/logdes5.png"; //
import logdes6 from "@/assets/logdes6.png"; //
import logdes7 from "@/assets/logdes7.jpg"; //
import logdes8 from "@/assets/logdes8.png"; //
import logdes9 from "@/assets/logdes9.png"; //
import logdes10 from "@/assets/logdes10.jpg"; //
import logdes11 from "@/assets/logdes11.jpg"; //



import workWeb1 from "@/assets/work-web1.jpg";// 
import workWeb23 from "@/assets/work-web1.jpg";// 
import workLogo1 from "@/assets/work-logo1.jpg";// 
import workLogo2 from "@/assets/work-logo2.jpg";// 
import workLogo3 from "@/assets/work-logo3.jpg";// 
import workEdu1 from "@/assets/work-edu1.jpg";// 
import workEdu2 from "@/assets/work-edu2.jpg";// 
import workEdu3 from "@/assets/work-edu3.jpg";// 
import workSocial1 from "@/assets/work-social1.jpg";// 
import workMontage from "@/assets/work-montage.jpg";// 
import workRestaurant from "@/assets/work-restaurant.jpg";// 

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

          // { src: workEdu1, title: "أغلفة كتب دراسية", tag: "Books" },
          // { src: workEdu2, title: "شهادات تقدير", tag: "Certificates" },
          // { src: workEdu3, title: "كتب إلكترونية", tag: "E-Books" },
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
