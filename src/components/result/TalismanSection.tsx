/** 액막이 부적 파트 (모든 상세페이지 공통, 금빛 톤으로 동일하게) */
export function TalismanSection() {
  return (
    <section
      className="w-full bg-[#1a1a1f] px-5 pt-6 pb-12"
      style={{ fontFamily: "A2Z, sans-serif" }}
    >
      <div className="flex flex-col items-center text-center">
        <div
          className="flex items-center justify-center gap-3"
          style={{ color: "#C9A961" }}
        >
          <div
            className="h-px w-10"
            style={{ background: "linear-gradient(to right, transparent, #C9A961)" }}
          />
          <span className="text-[14px]">❖</span>
          <div
            className="h-px w-10"
            style={{ background: "linear-gradient(to left, transparent, #C9A961)" }}
          />
        </div>

        <p
          className="mt-3 text-[30px] font-extrabold break-keep"
          style={{ color: "#F4E8D0", fontFamily: "GapyeongHanseokbong, serif" }}
        >
          액막이 부적
        </p>
        <p className="mt-2.5 max-w-[300px] text-[15px] leading-[1.6] text-white/70 break-keep">
          실제 액막이 부적으로 안 좋은 기운으로부터 해방시켜 드립니다
        </p>

        <div
          className="mt-6 w-full max-w-[280px] overflow-hidden rounded-2xl p-3"
          style={{
            background: "rgba(255,255,255,0.05)",
            boxShadow:
              "0 0 0 1px rgba(201,169,97,0.45) inset, 0 12px 34px rgba(0,0,0,0.45)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/detail-talisman.jpg"
            alt="액막이 부적"
            loading="lazy"
            className="block w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
