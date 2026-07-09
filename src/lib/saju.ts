import {
  calculateFourPillars,
  getHeavenlyStemElement,
  getEarthlyBranchElement,
} from "manseryeok";

export interface BirthInput {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  isLunar?: boolean;
  gender?: "male" | "female";
}

export interface SajuCell {
  korean: string;
  hanja: string;
  element: string; // 목화토금수
  color: string;
}

export interface SajuPillar {
  stem: SajuCell; // 천간
  branch: SajuCell; // 지지
}

export interface Saju {
  hour: SajuPillar;
  day: SajuPillar;
  month: SajuPillar;
  year: SajuPillar;
}

const STEM_HANJA: Record<string, string> = {
  갑: "甲",
  을: "乙",
  병: "丙",
  정: "丁",
  무: "戊",
  기: "己",
  경: "庚",
  신: "辛",
  임: "壬",
  계: "癸",
};

const BRANCH_HANJA: Record<string, string> = {
  자: "子",
  축: "丑",
  인: "寅",
  묘: "卯",
  진: "辰",
  사: "巳",
  오: "午",
  미: "未",
  신: "申",
  유: "酉",
  술: "戌",
  해: "亥",
};

// 오행 색상 (다크 배경 기준)
const ELEMENT_COLOR: Record<string, string> = {
  목: "#4ADE80",
  화: "#F87171",
  토: "#FBBF24",
  금: "#E5E7EB",
  수: "#60A5FA",
};

function stemCell(korean: string): SajuCell {
  const element = getHeavenlyStemElement(korean as Parameters<typeof getHeavenlyStemElement>[0]);
  return {
    korean,
    hanja: STEM_HANJA[korean] ?? korean,
    element,
    color: ELEMENT_COLOR[element] ?? "#E5E7EB",
  };
}

function branchCell(korean: string): SajuCell {
  const element = getEarthlyBranchElement(korean as Parameters<typeof getEarthlyBranchElement>[0]);
  return {
    korean,
    hanja: BRANCH_HANJA[korean] ?? korean,
    element,
    color: ELEMENT_COLOR[element] ?? "#E5E7EB",
  };
}

function toPillar(p: { heavenlyStem: string; earthlyBranch: string }): SajuPillar {
  return { stem: stemCell(p.heavenlyStem), branch: branchCell(p.earthlyBranch) };
}

export function computeSaju(input: BirthInput): Saju {
  const r = calculateFourPillars(input);
  return {
    hour: toPillar(r.hour),
    day: toPillar(r.day),
    month: toPillar(r.month),
    year: toPillar(r.year),
  };
}

// 일주 한글 (예: "정사일주")
export function iljuLabel(saju: Saju): string {
  return `${saju.day.stem.korean}${saju.day.branch.korean}일주`;
}

// 12지 이모지 (년주 지지 = 띠). TossFace 폰트로 렌더
const ZODIAC_EMOJI: Record<string, string> = {
  자: "🐭",
  축: "🐮",
  인: "🐯",
  묘: "🐰",
  진: "🐲",
  사: "🐍",
  오: "🐴",
  미: "🐑",
  신: "🐵",
  유: "🐔",
  술: "🐶",
  해: "🐷",
};

export function zodiacEmoji(saju: Saju): string {
  return ZODIAC_EMOJI[saju.year.branch.korean] ?? "🐲";
}
