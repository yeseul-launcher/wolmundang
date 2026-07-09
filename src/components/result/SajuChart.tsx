import type { Person } from "@/lib/resultData";
import { zodiacEmoji, type SajuPillar } from "@/lib/saju";

function PillarColumn({
  label,
  pillar,
}: {
  label: string;
  pillar: SajuPillar;
}) {
  return (
    <div className="flex w-[64px] flex-col items-center gap-[5px]">
      <p className="text-[14px] font-bold text-white">{label}</p>
      {[pillar.stem, pillar.branch].map((cell, i) => (
        <div
          key={i}
          className="flex h-[64px] w-[64px] flex-col items-center justify-center gap-[3px] rounded-full bg-white/10 text-center"
        >
          <p className="text-[9px] font-bold" style={{ color: cell.color }}>
            {cell.korean}
          </p>
          <p
            className="text-[23px] font-bold leading-none"
            style={{
              color: cell.color,
              fontFamily: '"Noto Serif KR", Batang, BatangChe, serif',
            }}
          >
            {cell.hanja}
          </p>
        </div>
      ))}
    </div>
  );
}

function PersonChart({ person, label }: { person: Person; label: string }) {
  const { saju } = person;
  return (
    <section className="w-full px-[20px] pt-[22px] pb-[24px]">
      <div className="mb-[16px] flex items-center gap-[12px]">
        <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-white/10">
          <span className="tossface text-[28px] leading-none">
            {zodiacEmoji(saju)}
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-[8px]">
            <p className="text-[20px] font-bold leading-[1.35] text-white">
              {person.name}
            </p>
            <span className="rounded-full bg-white/12 px-[8px] py-[2px] text-[11px] font-semibold text-white/70">
              {label}
            </span>
          </div>
          <p
            className="text-[14px] font-medium leading-[1.35]"
            style={{ color: "#C9A961" }}
          >
            {person.ilju}
          </p>
        </div>
      </div>
      <div className="flex items-start justify-center gap-1">
        <PillarColumn label="시주" pillar={saju.hour} />
        <PillarColumn label="일주" pillar={saju.day} />
        <PillarColumn label="월주" pillar={saju.month} />
        <PillarColumn label="년주" pillar={saju.year} />
      </div>
    </section>
  );
}

interface SajuChartSectionProps {
  characterName: string;
  me: Person;
  partner: Person;
  /** 사주판 카드 안, 두 사람 차트 아래에 이어서 넣을 콘텐츠 (리딩 텍스트, 잠금 게이트 등) */
  children?: React.ReactNode;
}

export function SajuChartSection({
  characterName,
  me,
  partner,
  children,
}: SajuChartSectionProps) {
  return (
    <section className="relative flex w-full flex-col items-center bg-[#1a1a1f] pt-[96px]">
      <p
        className="w-full px-6 text-center text-[26px] font-extrabold leading-[1.35] tracking-[-0.5px] break-keep"
        style={{ color: "#F4E8D0", fontFamily: "GapyeongHanseokbong, serif" }}
      >
        {characterName}이 들여다본
        <br />
        {me.name}과 {partner.name}의 궁합
      </p>

      <div className="w-full px-[16px] pt-[36px] pb-[16px]">
        <div className="result-thin-border-card mx-auto w-full max-w-[400px] overflow-hidden rounded-[16px]">
          <PersonChart person={me} label="본인" />
          <div className="mx-[20px] h-px bg-white/10" />
          <PersonChart person={partner} label="상대" />
          {children && (
            <div className="px-[20px] py-[20px]">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
