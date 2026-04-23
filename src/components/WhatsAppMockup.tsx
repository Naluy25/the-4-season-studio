import { Check, CheckCheck, Phone, Video, MoreVertical, ArrowLeft, Mic, Smile, Paperclip, Camera, Send } from "lucide-react";

export type ChatMessage = {
  from: "client" | "me";
  text: string;
  time: string;
  status?: "sent" | "delivered" | "read";
  reactions?: string[];
};

export type WhatsAppMockupProps = {
  name: string;
  status: string;
  avatarGradient: string; // tailwind gradient utility e.g. "from-purple-500 to-pink-500"
  initial: string;
  messages: ChatMessage[];
  unreadDate?: string;
};

export function WhatsAppMockup({ name, status, avatarGradient, initial, messages, unreadDate = "اليوم" }: WhatsAppMockupProps) {
  return (
    <div
      dir="rtl"
      className="relative mx-auto w-full max-w-[320px] rounded-[2.5rem] bg-[#0b0f0e] p-2 shadow-2xl ring-1 ring-white/10"
      style={{
        boxShadow:
          "0 30px 80px -20px rgba(117,50,187,0.45), 0 10px 30px -10px rgba(255,134,32,0.25), inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    >
      {/* Phone notch */}
      <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black" />

      {/* Screen */}
      <div className="relative overflow-hidden rounded-[2rem] bg-[#0b141a]">
        {/* Status bar */}
        <div className="flex items-center justify-between bg-[#1f2c33] px-5 pt-3 pb-1 text-[10px] font-semibold text-white/90">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span>●●●●</span>
            <svg viewBox="0 0 16 12" className="h-3 w-4 fill-white/90"><path d="M1 11h2V7H1v4zm4 0h2V4H5v7zm4 0h2V1H9v10zm4 0h2V8h-2v3z"/></svg>
            <svg viewBox="0 0 24 12" className="h-3 w-6"><rect x="0.5" y="1" width="20" height="10" rx="2" fill="none" stroke="white" strokeOpacity="0.9"/><rect x="2" y="2.5" width="17" height="7" rx="1" fill="white" fillOpacity="0.9"/><rect x="21" y="4" width="2" height="4" rx="1" fill="white" fillOpacity="0.9"/></svg>
          </div>
        </div>

        {/* WhatsApp header */}
        <div className="flex items-center gap-3 bg-[#1f2c33] px-3 py-2.5">
          <ArrowLeft className="h-4 w-4 text-white/80 rotate-180" />
          <div className={`relative h-9 w-9 rounded-full bg-gradient-to-br ${avatarGradient} flex items-center justify-center text-white text-sm font-black ring-2 ring-white/10`}>
            {initial}
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[#25d366] ring-2 ring-[#1f2c33]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-white truncate">{name}</p>
            <p className="text-[10px] text-[#8696a0] truncate">{status}</p>
          </div>
          <Video className="h-4 w-4 text-white/70" />
          <Phone className="h-4 w-4 text-white/70" />
          <MoreVertical className="h-4 w-4 text-white/70" />
        </div>

        {/* Chat area with WhatsApp-like pattern background */}
        <div
          className="relative px-3 py-4 min-h-[420px]"
          style={{
            backgroundColor: "#0b141a",
            backgroundImage:
              "radial-gradient(circle at 20% 10%, rgba(117,50,187,0.08) 0, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,134,32,0.06) 0, transparent 50%)",
          }}
        >
          {/* Date pill */}
          <div className="flex justify-center mb-3">
            <span className="rounded-md bg-[#182229] px-2 py-0.5 text-[10px] text-[#8696a0] shadow">
              {unreadDate}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            {messages.map((m, i) => {
              const isMe = m.from === "me";
              return (
                <div key={i} className={`flex ${isMe ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`relative max-w-[85%] px-2.5 py-1.5 text-[12px] leading-relaxed shadow-sm ${
                      isMe
                        ? "bg-[#005c4b] text-white rounded-2xl rounded-bl-sm"
                        : "bg-[#202c33] text-white/95 rounded-2xl rounded-br-sm"
                    }`}
                  >
                    <p className="whitespace-pre-wrap break-words">{m.text}</p>
                    <div className="mt-0.5 flex items-center justify-end gap-1">
                      <span className="text-[9px] text-white/60">{m.time}</span>
                      {isMe && m.status === "read" && <CheckCheck className="h-3 w-3 text-[#53bdeb]" />}
                      {isMe && m.status === "delivered" && <CheckCheck className="h-3 w-3 text-white/60" />}
                      {isMe && m.status === "sent" && <Check className="h-3 w-3 text-white/60" />}
                    </div>
                    {m.reactions && m.reactions.length > 0 && (
                      <div className="absolute -bottom-2 left-2 rounded-full bg-[#2a3942] px-1.5 py-0.5 text-[10px] shadow ring-1 ring-black/40">
                        {m.reactions.join("")}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 bg-[#1f2c33] px-2 py-2">
          <div className="flex flex-1 items-center gap-2 rounded-full bg-[#2a3942] px-3 py-1.5">
            <Smile className="h-4 w-4 text-[#8696a0]" />
            <span className="flex-1 text-[11px] text-[#8696a0]">رسالة</span>
            <Paperclip className="h-4 w-4 text-[#8696a0]" />
            <Camera className="h-4 w-4 text-[#8696a0]" />
          </div>
          <button className="grid h-9 w-9 place-items-center rounded-full bg-[#00a884]">
            <Mic className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
