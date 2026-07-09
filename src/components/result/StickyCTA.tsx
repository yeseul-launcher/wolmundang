import { ChevronRight } from "lucide-react";

/** 화면 하단에 계속 따라다니는 고정 CTA 바 (누르면 결제창) + 할인 배지 */
export function StickyCTA({ label }: { label: string }) {
  return (
    <div
      className="fixed bottom-0 left-1/2 z-50 w-full max-w-[440px] -translate-x-1/2 px-4 pt-9 pb-[max(14px,env(safe-area-inset-bottom))]"
      style={{
        background:
          "linear-gradient(to top, #1a1a1f 0%, #1a1a1f 58%, rgba(26,26,31,0.82) 80%, transparent 100%)",
      }}
    >
      <div className="relative">
        {/* 오픈기념 할인 배지 */}
        <div className="pointer-events-none absolute -top-6 left-1/2 z-20 -translate-x-1/2">
          <div className="cta-discount-badge whitespace-nowrap rounded-full px-3.5 py-1.5 text-[12.5px] font-extrabold tracking-[-0.2px] text-white">
            🔥 오픈기념 93% 할인!
          </div>
        </div>

        <button
          type="button"
          className="cta-shiny flex w-full items-center justify-center gap-1.5 rounded-xl py-[17px] text-[17px] font-bold tracking-[-0.2px] text-white"
        >
          <span className="relative z-10 break-keep">{label}</span>
          <ChevronRight
            className="relative z-10 h-[19px] w-[19px] shrink-0"
            strokeWidth={2.6}
          />
        </button>
      </div>
    </div>
  );
}
