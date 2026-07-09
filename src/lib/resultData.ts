import { computeSaju, iljuLabel, type Saju } from "@/lib/saju";

export interface Person {
  name: string; // 표시 이름 (예: 똘비)
  gender: "male" | "female";
  saju: Saju;
  ilju: string;
}

// 데모용 가상 남녀 (추후 온보딩 입력값으로 교체)
const ME_BIRTH = { year: 1996, month: 5, day: 20, hour: 12, minute: 30 } as const;
const PARTNER_BIRTH = {
  year: 1993,
  month: 11,
  day: 8,
  hour: 7,
  minute: 30,
} as const;

const meSaju = computeSaju({ ...ME_BIRTH, gender: "female" });
const partnerSaju = computeSaju({ ...PARTNER_BIRTH, gender: "male" });

export const me: Person = {
  name: "김똘순",
  gender: "female",
  saju: meSaju,
  ilju: iljuLabel(meSaju),
};

export const partner: Person = {
  name: "김똘비",
  gender: "male",
  saju: partnerSaju,
  ilju: iljuLabel(partnerSaju),
};

export const CHARACTER_NAME = "남심도령";
