interface PeekCard {
  subtitle: string;
  desc?: string;
  image?: string;
  /** image 대신 실제 차트 등 커스텀 노드를 넣고 싶을 때 */
  visual?: React.ReactNode;
  blurredParagraphs: string[];
  teaserItems: string[];
}

type TitleSegment = string | { gold: string };

interface PeekSectionProps {
  index: number;
  eyebrowLabel: string;
  titleLines: TitleSegment[][];
  cards: PeekCard[];
  paddingTop?: number;
  /** 잠금 박스 상단 제목 (캐릭터 말투에 맞춰 교체) */
  lockTitle?: string;
  /** 엿보기 상단 라벨 텍스트 (기본 "엿보기") */
  eyebrowText?: string;
}

function LockedCard({ card, lockTitle }: { card: PeekCard; lockTitle: string }) {
  return (
    <div className="result-thin-border-card mt-7 rounded-2xl p-5">
      <div className="flex flex-col items-center text-center">
        <p className="font-suit text-[24px] font-bold break-keep" style={{ color: "var(--mun-accent-soft-2)" }}>
          {card.subtitle}
        </p>
        {card.desc && (
          <p className="mt-1.5 text-[14px] break-keep" style={{ color: "color-mix(in oklab, var(--mun-accent-soft) 80%, transparent)" }}>
            {card.desc}
          </p>
        )}
      </div>

      {card.visual ? (
        <div className="mt-4">{card.visual}</div>
      ) : card.image ? (
        <div
          className="mt-4 w-full overflow-hidden rounded-xl"
          style={{ aspectRatio: "3 / 4" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt=""
            loading="lazy"
            className="block h-full w-full object-cover object-center"
          />
        </div>
      ) : null}

      <div className="relative mt-4">
        <div
          aria-hidden
          className="flex flex-col gap-2.5 py-4 text-[15px] leading-[1.75] select-none"
          style={{ filter: "blur(3px)", color: "var(--mun-accent-soft)" }}
        >
          {card.blurredParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div
          className="relative z-10 mt-4 rounded-[10px] px-5 py-5"
          style={{
            background: "#0f0c09",
            boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
            animation: "lockBoxSparkle 2.2s ease-in-out infinite",
          }}
        >
          <p
            className="text-center font-bold tracking-[2px] text-white"
            style={{ fontFamily: "GapyeongHanseokbong, serif", fontSize: 21 }}
          >
            {lockTitle}
          </p>
          <div
            className="mx-auto mt-3 h-px w-[80%]"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--mun-accent), transparent)",
            }}
          />
          <ul
            className="mx-auto mt-3.5 flex w-fit flex-col items-start gap-2.5 text-left text-[13px]"
            style={{ color: "var(--mun-accent-soft)" }}
          >
            {card.teaserItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 shrink-0" style={{ color: "#C9A961" }}>
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function PeekSection({
  index,
  eyebrowLabel,
  titleLines,
  cards,
  paddingTop = 24,
  lockTitle = "이런 풀이를 더 해주겠소",
  eyebrowText = "엿보기",
}: PeekSectionProps) {
  return (
    <section
      className="w-full bg-[#1a1a1f] px-5 pb-11"
      style={{ paddingTop, fontFamily: "A2Z, sans-serif" }}
    >
      <div className="flex items-center justify-center gap-3" style={{ color: "#C9A961" }}>
        <div
          className="h-px w-12"
          style={{ background: "linear-gradient(to right, transparent, #C9A961)" }}
        />
        <span className="text-[14px]">❖</span>
        <p
          className="text-[15px] tracking-[3px]"
          style={{ fontFamily: "GapyeongHanseokbong, serif" }}
        >
          {eyebrowText} {index}
        </p>
        <span className="text-[14px]">❖</span>
        <div
          className="h-px w-12"
          style={{ background: "linear-gradient(to left, transparent, #C9A961)" }}
        />
      </div>

      <div className="mt-4 flex flex-col items-center text-center leading-[1.25]">
        {titleLines.map((segments, i) => (
          <p
            key={i}
            className="font-extrabold"
            style={{
              color: "#F4E8D0",
              fontFamily: "GapyeongHanseokbong, serif",
              fontSize: titleLines.length > 1 ? (i === 0 ? 24 : 36) : 28,
              marginTop: i === 0 ? 0 : 6,
            }}
          >
            {segments.map((seg, j) =>
              typeof seg === "string" ? (
                <span key={j}>{seg}</span>
              ) : (
                <span key={j} style={{ color: "#C9A961" }}>
                  {seg.gold}
                </span>
              )
            )}
          </p>
        ))}
      </div>

      {cards.map((card, i) => (
        <LockedCard key={i} card={card} lockTitle={lockTitle} />
      ))}
    </section>
  );
}
