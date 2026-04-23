import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-radial-purple opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <Logo size="md" />
            <p className="text-muted-foreground max-w-md leading-relaxed">
              منصة إلكترونية متكاملة لخدمات التسويق الرقمي. أكثر من 5000 عميل يثقون بنا لبيع
              الخدمات الإلكترونية بسهولة وأمان.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { Icon: MessageCircle, href: "https://wa.me/201011342972" },
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Mail, href: "mailto:info@4season.studio" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-full glass flex items-center justify-center hover:bg-gradient-brand hover:scale-110 transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gradient-brand">روابط سريعة</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">الرئيسية</Link></li>
              <li><Link to="/packages" className="hover:text-foreground transition-colors">الباقات</Link></li>
              <li><Link to="/shop" className="hover:text-foreground transition-colors">شراء خدمة</Link></li>
              <li><Link to="/how-to-buy" className="hover:text-foreground transition-colors">طريقة الشراء</Link></li>
              <li><Link to="/testimonials" className="hover:text-foreground transition-colors">آراء العملاء</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gradient-brand">أعمالنا</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/portfolio/web" className="hover:text-foreground transition-colors">المواقع والمتاجر</Link></li>
              <li><Link to="/portfolio/design" className="hover:text-foreground transition-colors">تصميم ومونتاج</Link></li>
              <li><Link to="/portfolio/social" className="hover:text-foreground transition-colors">سوشيال ميديا</Link></li>
              <li><Link to="/portfolio/management" className="hover:text-foreground transition-colors">إدارة الصفحات</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} THE 4 SEASON STUDIO — جميع الحقوق محفوظة</p>
          <p>إدارة <span className="text-gradient-brand font-semibold">عبدالرحمن & غرام</span></p>
        </div>
      </div>
    </footer>
  );
}
