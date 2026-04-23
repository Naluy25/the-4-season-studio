export const WHATSAPP_NUMBER = "201011342972"; // 01011342972 with country code 20

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function openWhatsApp(message: string) {
  window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
}
