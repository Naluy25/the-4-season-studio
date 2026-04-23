import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Send, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { openWhatsApp } from "@/lib/whatsapp";

export function CheckoutModal() {
  const {
    items,
    removeItem,
    updateDetails,
    clear,
    isCheckoutOpen,
    closeCheckout,
  } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!isCheckoutOpen) return null;

  const cartIsValid =
    items.length > 0 &&
    form.name.trim() &&
    form.phone.trim() &&
    items.every((i) => i.details.trim().length > 5);

  function handleSubmit() {
    if (!cartIsValid) return;
    const now = new Date();
    const dateStr = now.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const timeStr = now.toLocaleTimeString("ar-EG", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const lines: string[] = [];
    lines.push("✨ *طلب جديد - THE 4 SEASON STUDIO* ✨");
    lines.push("");
    lines.push(`🗓 التاريخ: ${dateStr}`);
    lines.push(`⏰ الوقت: ${timeStr}`);
    lines.push("");
    lines.push("👤 *بيانات العميل*");
    lines.push("- - - - - - - - - - - - - - - -");
    lines.push(`• الاسم: ${form.name}`);
    lines.push(`• الهاتف: ${form.phone}`);
    if (form.address.trim()) lines.push(`• العنوان: ${form.address}`);
    lines.push("");
    lines.push(`🛒 *الخدمات المطلوبة (${items.length})*`);
    lines.push("- - - - - - - - - - - - - - - -");
    items.forEach((it, idx) => {
      lines.push("");
      lines.push(`*${idx + 1}) ${it.name}*`);
      lines.push(`   📂 القسم: ${it.category}`);
      lines.push(`   📝 التفاصيل:`);
      it.details
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)
        .forEach((l) => lines.push(`      • ${l}`));
    });
    lines.push("");
    lines.push("- - - - - - - - - - - - - - - -");
    lines.push("💜 في انتظار تأكيد الطلب وعرض السعر");
    lines.push("شكراً لاختياركم THE 4 SEASON STUDIO");

    openWhatsApp(lines.join("\n"));
    setSubmitted(true);
    clear();
    setTimeout(() => {
      setSubmitted(false);
      closeCheckout();
      setForm({ name: "", phone: "", address: "" });
    }, 4000);
  }

  return (
    <div className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto glass-card rounded-3xl border border-white/10 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black">إتمام الطلب</h2>
            <button
              onClick={closeCheckout}
              className="h-10 w-10 rounded-full glass flex items-center justify-center"
              aria-label="إغلاق"
            >
              ✕
            </button>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="inline-flex h-20 w-20 rounded-full bg-gradient-brand items-center justify-center glow-purple">
                <Check className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">تم إرسال طلبك بنجاح! 🎉</h3>
              <p className="text-muted-foreground">سيتم فتح الواتساب لإكمال الطلب مع فريقنا</p>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 space-y-4">
              <div className="inline-flex h-20 w-20 rounded-full glass items-center justify-center">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold">السلة فارغة</h3>
              <p className="text-muted-foreground">أضف خدمات من المتجر لإتمام الطلب</p>
              <Link
                to="/shop"
                onClick={closeCheckout}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-brand text-white font-bold hover:scale-105 transition-transform"
              >
                تصفح الخدمات
              </Link>
            </div>
          ) : (
            <>
              {/* Personal info */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 text-gradient-brand">بياناتك الشخصية</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="الاسم بالكامل *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="رقم الهاتف *"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm"
                  />
                  <input
                    type="text"
                    placeholder="العنوان (اختياري)"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                    className="px-4 py-3 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm sm:col-span-2"
                  />
                </div>
              </div>

              {/* Cart items */}
              <div className="mb-6">
                <h3 className="font-bold mb-3 text-gradient-brand">
                  الخدمات المختارة ({items.length})
                </h3>
                <div className="space-y-3">
                  {items.map((it) => (
                    <div
                      key={it.id}
                      className="p-4 rounded-2xl bg-surface border border-white/5"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-bold text-sm">{it.name}</p>
                          <p className="text-xs text-muted-foreground">{it.category}</p>
                        </div>
                        <button
                          onClick={() => removeItem(it.id)}
                          className="h-8 w-8 rounded-full glass flex items-center justify-center text-destructive"
                          aria-label="حذف"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <textarea
                        placeholder="اكتب تفاصيل ما تريده في هذه الخدمة... (مطلوب)"
                        value={it.details}
                        onChange={(e) => updateDetails(it.id, e.target.value)}
                        rows={3}
                        className="w-full px-3 py-2.5 rounded-xl bg-input/50 border border-white/10 focus:border-primary outline-none text-sm resize-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={!cartIsValid}
                className="w-full py-4 rounded-full bg-gradient-brand text-white font-black flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.02] transition-transform shadow-elegant"
              >
                <Send className="h-5 w-5" />
                إرسال الطلب على الواتساب
              </button>
              {!cartIsValid && (
                <p className="text-xs text-center text-muted-foreground mt-3">
                  ⚠️ تأكد من ملء الاسم والهاتف وكتابة تفاصيل لكل خدمة (٦ أحرف على الأقل)
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
