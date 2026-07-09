import { ChevronRight } from "lucide-react";

interface ShinyCTAProps {
  /** 버튼 메인 문구 */
  children: React.ReactNode;
  /** 위에 뜨는 작은 유도 문구 (선택) */
  hint?: string;
}

/** 악센트 그라데이션 + 광택 스윕 + 글로우 펄스가 들어간 화려한 CTA */
export function ShinyCTA({ children, hint }: ShinyCTAProps) {
  return (
    <div className="mt-6 flex flex-col items-center gap-2">
      {hint && (
        <span className="text-[13px] font-medium text-white/55">{hint}</span>
      )}
      <button
        type="button"
        className="cta-shiny flex w-full items-center justify-center gap-1.5 rounded-xl py-[17px] text-[17px] font-bold tracking-[-0.2px] text-white"
      >
        <span className="relative z-10 break-keep">{children}</span>
        <ChevronRight
          className="relative z-10 h-[19px] w-[19px] shrink-0"
          strokeWidth={2.6}
        />
      </button>
    </div>
  );
}
