import { Link } from "@tanstack/react-router";
import { Menu, ShoppingCart, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { to: "/", label: "الرئيسية" },
  { to: "/packages", label: "الباقات" },
  { to: "/how-to-buy", label: "طريقة الشراء" },
  { to: "/shop", label: "شراء خدمة" },
  { to: "/testimonials", label: "آراء العملاء" },
] as const;

const portfolioLinks = [
  { to: "/portfolio/web", label: "تصميم وبرمجة المواقع" },
   { to: "/portfolio/design", label: "التصميم والمونتاج" },
  // { to: "/portfolio/social", label: "السوشيال ميديا" },
  // { to: "/portfolio/management", label: "إدارة الصفحات" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const { count, openCheckout } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-white/5 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        <Logo size="md" />

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative"
              activeProps={{ className: "text-foreground bg-white/5" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setPortfolioOpen(true)}
            onMouseLeave={() => setPortfolioOpen(false)}
          >
            <button className="px-4 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              أعمالنا
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {portfolioOpen && (
              <div className="absolute top-full right-0 pt-3 min-w-[240px] animate-fade-in">
                <div className="glass rounded-2xl p-2 border border-white/10 shadow-2xl">
                  {portfolioLinks.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="block px-4 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openCheckout}
            className="relative inline-flex items-center justify-center h-11 w-11 rounded-full glass hover:bg-white/10 transition-colors"
            aria-label="السلة - إتمام الطلب"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-brand text-white text-xs font-bold flex items-center justify-center animate-scale-in">
                {count}
              </span>
            )}
          </button>
          <button
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full glass"
            onClick={() => setOpen(true)}
            aria-label="فتح القائمة"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl animate-fade-in lg:hidden">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Logo size="md" />
            <button
              onClick={() => setOpen(false)}
              className="h-11 w-11 rounded-full glass inline-flex items-center justify-center"
              aria-label="إغلاق"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container mx-auto px-4 mt-8 flex flex-col gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-5 py-4 rounded-2xl text-lg font-semibold glass-card hover:bg-white/5 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="px-5 py-4 rounded-2xl glass-card">
              <p className="text-lg font-semibold mb-3">أعمالنا</p>
              <div className="flex flex-col gap-1.5">
                {portfolioLinks.map((p) => (
                  <Link
                    key={p.to}
                    to={p.to}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
