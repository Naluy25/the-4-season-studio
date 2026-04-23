import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Plus, Check, ShoppingCart, ChevronLeft } from "lucide-react";
import { SHOP_CATEGORIES } from "@/data/shop";
import { useCart } from "@/context/CartContext";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "شراء خدمة — THE 4 SEASON STUDIO" },
      { name: "description", content: "تصفح كافة خدماتنا واختر ما يناسبك. خدمات برمجية، تصميم ومونتاج، سوشيال ميديا، وإدارة صفحات." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { items, addItem, removeItem, count, openCheckout } = useCart();
  const [activeCat, setActiveCat] = useState<string>(SHOP_CATEGORIES[0].id);

  const inCart = useMemo(() => new Set(items.map((i) => i.id)), [items]);

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionHeading
        eyebrow="متجر الخدمات"
        title={<>اختر <span className="text-gradient-brand">خدمتك</span></>}
        subtitle="تصفح خدماتنا حسب القسم. اختر ما تحتاجه واضفه للسلة، ثم اكمل طلبك"
      />

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 sticky top-20 z-30 py-3">
        <div className="glass rounded-full p-1.5 flex flex-wrap gap-1 border border-white/10">
          {SHOP_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCat(c.id);
                document.getElementById(`cat-${c.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeCat === c.id
                  ? "bg-gradient-brand text-white shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.emoji} {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-16 max-w-6xl mx-auto pb-24">
        {SHOP_CATEGORIES.map((cat) => (
          <section key={cat.id} id={`cat-${cat.id}`} className="scroll-mt-32">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-black flex items-center gap-3">
                <span className="text-3xl">{cat.emoji}</span>
                <span className="text-gradient-brand">{cat.name}</span>
              </h2>
              <p className="text-muted-foreground mt-2">{cat.description}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.products.map((p) => {
                const added = inCart.has(p.id);
                return (
                  <div
                    key={p.id}
                    className="group relative p-5 rounded-2xl glass-card border border-white/5 hover-lift flex flex-col"
                  >
                    <h3 className="font-bold mb-1.5">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed flex-1">
                      {p.description}
                    </p>
                    <button
                      onClick={() =>
                        added
                          ? removeItem(p.id)
                          : addItem({ id: p.id, name: p.name, category: cat.name })
                      }
                      className={`mt-auto w-full py-2.5 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                        added
                          ? "bg-white/10 text-foreground"
                          : "bg-gradient-brand text-white hover:scale-105"
                      }`}
                    >
                      {added ? (
                        <>
                          <Check className="h-4 w-4" /> مضاف للسلة
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4" /> أضف للسلة
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Floating cart button */}
      {count > 0 && (
        <button
          onClick={openCheckout}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 inline-flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-brand text-white font-bold shadow-elegant glow-purple animate-fade-up"
        >
          <ShoppingCart className="h-5 w-5" />
          إتمام الطلب ({count})
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
