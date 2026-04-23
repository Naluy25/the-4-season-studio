import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import logoImg from "@/assets/logo.png";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { CheckoutModal } from "@/components/CheckoutModal";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-black text-gradient-brand">404</h1>
        <h2 className="mt-4 text-2xl font-bold">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "THE 4 SEASON STUDIO — وكالة التسويق الرقمي المتكاملة" },
      {
        name: "description",
        content:
          "كل ما تحتاجه في منصة إلكترونية واحدة. أكثر من 5000 عميل يثقون بـ THE 4 SEASON STUDIO لخدمات التسويق الرقمي وتصميم المواقع وإدارة السوشيال ميديا.",
      },
      { name: "author", content: "THE 4 SEASON STUDIO" },
      { property: "og:title", content: "THE 4 SEASON STUDIO — وكالة التسويق الرقمي المتكاملة" },
      { property: "og:description", content: "The 4 Season Studio is a professional digital marketing agency website offering comprehensive online services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "THE 4 SEASON STUDIO — وكالة التسويق الرقمي المتكاملة" },
      { name: "description", content: "The 4 Season Studio is a professional digital marketing agency website offering comprehensive online services." },
      { name: "twitter:description", content: "The 4 Season Studio is a professional digital marketing agency website offering comprehensive online services." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/adcb24be-a7d8-4fb8-999b-d60a3f7895ad/id-preview-b844dfd8--9b100b10-3999-4d21-a3c6-2eb152ef25ac.lovable.app-1776671551796.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/adcb24be-a7d8-4fb8-999b-d60a3f7895ad/id-preview-b844dfd8--9b100b10-3999-4d21-a3c6-2eb152ef25ac.lovable.app-1776671551796.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: logoImg },
      { rel: "apple-touch-icon", href: logoImg },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <CartProvider>
      <AnimatedBackground />
      <Header />
      <main className="pt-24">
        <Outlet />
      </main>
      <Footer />
      <CheckoutModal />
    </CartProvider>
  );
}
