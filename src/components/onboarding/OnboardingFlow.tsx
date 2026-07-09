"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { OnboardingHero } from "@/components/onboarding/OnboardingHero";

type Gender = "female" | "male" | null;
type Calendar = "solar" | "lunar";

interface PersonData {
  gender: Gender;
  name: string;
  /** yyyy-mm-dd (input type=date 값) */
  birthDate: string;
  calendar: Calendar;
  timeIndex: number; // -1 = 미선택
}

const emptyPerson = (): PersonData => ({
  gender: null,
  name: "",
  birthDate: "",
  calendar: "solar",
  timeIndex: -1,
});

const TIME_OPTIONS = [
  { label: "자시 (23:30~01:29)", hour: 0, minute: 30 },
  { label: "축시 (01:30~03:29)", hour: 2, minute: 30 },
  { label: "인시 (03:30~05:29)", hour: 4, minute: 30 },
  { label: "묘시 (05:30~07:29)", hour: 6, minute: 30 },
  { label: "진시 (07:30~09:29)", hour: 8, minute: 30 },
  { label: "사시 (09:30~11:29)", hour: 10, minute: 30 },
  { label: "오시 (11:30~13:29)", hour: 12, minute: 30 },
  { label: "미시 (13:30~15:29)", hour: 14, minute: 30 },
  { label: "신시 (15:30~17:29)", hour: 16, minute: 30 },
  { label: "유시 (17:30~19:29)", hour: 18, minute: 30 },
  { label: "술시 (19:30~21:29)", hour: 20, minute: 30 },
  { label: "해시 (21:30~23:29)", hour: 22, minute: 30 },
  { label: "시간 모름", hour: 12, minute: 0 },
];

const TOTAL_STEPS = 5;

// birthDate는 숫자 8자리(YYYYMMDD)로 저장하고, 화면엔 4-2-2로 점 찍어 표시
function formatBirthDate(digits: string) {
  const y = digits.slice(0, 4);
  const m = digits.slice(4, 6);
  const d = digits.slice(6, 8);
  return [y, m, d].filter(Boolean).join(".");
}

// 공통 인풋 스타일 (너비는 사용처에서 지정 — w-full 충돌 방지)
const inputCls =
  "rounded-lg border border-white/15 bg-transparent px-4 py-4 text-[16px] text-white placeholder:text-white/30 outline-none focus:border-primary";

function PillGroup<T extends string>({
  options,
  value,
  onChange,
  compact,
}: {
  options: { label: string; value: T }[];
  value: T | null;
  onChange: (v: T) => void;
  /** true면 년/월/일 인풋과 한 줄에 들어가는 축소 사이즈로 렌더링 */
  compact?: boolean;
}) {
  return (
    <div className={compact ? "flex shrink-0 items-stretch gap-1.5" : "flex gap-2"}>
      {options.map((opt) => {
        const selected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={
              (compact
                ? "flex items-center justify-center rounded-lg px-3 text-[13px] whitespace-nowrap "
                : "flex-1 rounded-lg py-4 text-[15px] ") +
              "transition-all " +
              (selected
                ? "border border-primary bg-primary/20 text-white"
                : "border border-white/15 bg-transparent text-white/70")
            }
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

function GenderNameFields({
  person,
  update,
}: {
  person: PersonData;
  update: (patch: Partial<PersonData>) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <PillGroup
        options={[
          { label: "여자", value: "female" },
          { label: "남자", value: "male" },
        ]}
        value={person.gender}
        onChange={(gender) => update({ gender })}
      />
      <input
        type="text"
        placeholder="이름"
        value={person.name}
        onChange={(e) => update({ name: e.target.value })}
        className={inputCls + " w-full"}
      />
    </div>
  );
}

function BirthTimeFields({
  person,
  update,
}: {
  person: PersonData;
  update: (patch: Partial<PersonData>) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-stretch gap-2">
        <input
          type="text"
          inputMode="numeric"
          placeholder="1996.05.20"
          value={formatBirthDate(person.birthDate)}
          onChange={(e) =>
            update({ birthDate: e.target.value.replace(/\D/g, "").slice(0, 8) })
          }
          className={inputCls + " min-w-0 flex-1"}
        />
        {/* 양/음력: 월/일 인풋이 있던 자리에 컴팩트 필 버튼으로 */}
        <PillGroup
          compact
          options={[
            { label: "양력", value: "solar" },
            { label: "음력", value: "lunar" },
          ]}
          value={person.calendar}
          onChange={(calendar) => update({ calendar })}
        />
      </div>
      <div className="relative">
        <select
          value={person.timeIndex}
          onChange={(e) => update({ timeIndex: Number(e.target.value) })}
          className={
            inputCls +
            " w-full appearance-none pr-10 " +
            (person.timeIndex === -1 ? "text-white/30" : "text-white")
          }
        >
          <option value={-1} disabled className="text-black">
            태어난 시
          </option>
          {TIME_OPTIONS.map((opt, i) => (
            <option key={i} value={i} className="text-black">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
      </div>
    </div>
  );
}

export function OnboardingFlow() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  // 남심도령 컨셉: 본인은 여자, 상대는 남자 기본 선택
  const [me, setMe] = useState<PersonData>(() => ({
    ...emptyPerson(),
    gender: "female",
  }));
  const [partner, setPartner] = useState<PersonData>(() => ({
    ...emptyPerson(),
    gender: "male",
  }));
  const [concern, setConcern] = useState("");

  const updateMe = (patch: Partial<PersonData>) =>
    setMe((p) => ({ ...p, ...patch }));
  const updatePartner = (patch: Partial<PersonData>) =>
    setPartner((p) => ({ ...p, ...patch }));

  const isBirthValid = (p: PersonData) => {
    if (p.birthDate.length !== 8 || p.timeIndex === -1) return false;
    const month = Number(p.birthDate.slice(4, 6));
    const day = Number(p.birthDate.slice(6, 8));
    return month >= 1 && month <= 12 && day >= 1 && day <= 31;
  };

  const stepValid = (() => {
    switch (step) {
      case 0:
        return me.gender !== null && me.name.trim().length > 0;
      case 1:
        return isBirthValid(me);
      case 2:
        return partner.gender !== null && partner.name.trim().length > 0;
      case 3:
        return isBirthValid(partner);
      case 4:
        return true;
      default:
        return false;
    }
  })();

  const handleBack = () => {
    if (step === 0) {
      router.push("/intro");
    } else {
      setStep((s) => s - 1);
    }
  };

  const handleNext = () => {
    if (!stepValid) return;
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      // 마지막: 결과로
      console.log("onboarding submit", { me, partner, concern });
      router.push("/result");
    }
  };

  const STEP_META = [
    { eyebrow: "본인 정보", heading: "그대는 어떤 분이오?" },
    { eyebrow: "본인 정보", heading: "그대의 생년월일을 알려주시오" },
    { eyebrow: "상대 정보", heading: "상대는 어떤 분이오?" },
    { eyebrow: "상대 정보", heading: "상대의 생년월일을 알려주시오" },
    { eyebrow: "마지막", heading: "특별히 고민인 게 있소?" },
  ];

  const meta = STEP_META[step];

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[440px] overflow-x-clip bg-[var(--hero-background)] text-foreground shadow-2xl">
      <div className="relative flex min-h-dvh w-full flex-col">
        <OnboardingHero
          characterName="남심도령"
          subtitle="궁합사주"
          onBack={handleBack}
        />

        <div className="relative z-10 mx-auto mt-auto w-full max-w-[460px] px-6 pb-4 font-suit">
          <p className="text-[13px] font-semibold tracking-[1px] text-primary">
            {meta.eyebrow}
          </p>
          <p className="mt-2 mb-6 text-2xl font-bold text-white break-keep">
            {meta.heading}
          </p>

          {step === 0 && <GenderNameFields person={me} update={updateMe} />}
          {step === 1 && <BirthTimeFields person={me} update={updateMe} />}
          {step === 2 && (
            <GenderNameFields person={partner} update={updatePartner} />
          )}
          {step === 3 && (
            <BirthTimeFields person={partner} update={updatePartner} />
          )}
          {step === 4 && (
            <textarea
              placeholder="써주면 내가 풀어봐줄게 (선택)"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              rows={4}
              className={inputCls + " w-full min-h-[120px] resize-none"}
            />
          )}

          {/* 네비게이션 버튼 */}
          <div className="mt-5 flex gap-2 pb-[env(safe-area-inset-bottom)]">
            <button
              type="button"
              onClick={handleBack}
              className="w-[30%] rounded-lg bg-white/10 py-4 text-base font-medium text-white/80 transition-colors active:bg-white/15"
            >
              이전
            </button>
            <button
              type="button"
              disabled={!stepValid}
              onClick={handleNext}
              className="flex-1 rounded-lg bg-primary py-4 text-base font-semibold text-white transition-opacity disabled:opacity-40"
            >
              {step === TOTAL_STEPS - 1 ? "결과 보기" : "다음으로"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
