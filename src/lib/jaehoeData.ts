import { computeSaju, iljuLabel } from "@/lib/saju";
import type { Person } from "@/lib/resultData";
import type { Review } from "@/types/review";

// 재회여신 데모: 본인(김소원) + 전 연인(그 사람) — 둘 다 임진일주(거울 같은 인연)
const ME_BIRTH = { year: 1995, month: 12, day: 27, hour: 2, minute: 0 } as const;
const EX_BIRTH = { year: 1996, month: 12, day: 21, hour: 12, minute: 0 } as const;

const meSaju = computeSaju({ ...ME_BIRTH, gender: "female" });
const exSaju = computeSaju({ ...EX_BIRTH, gender: "male" });

export const jhMe: Person = {
  name: "김소원",
  gender: "female",
  saju: meSaju,
  ilju: iljuLabel(meSaju),
};

export const jhEx: Person = {
  name: "그 사람",
  gender: "male",
  saju: exSaju,
  ilju: iljuLabel(exSaju),
};

export const JAEHOE_CHARACTER = "재회여신";

// 재회여신 유저 리뷰 (재회 성공/희망 테마, 반말 언니 서비스 후기)
export const JAEHOE_REVIEWS: Review[] = [
  {
    email: "so****@gmail.com",
    ilju: "임진일주",
    rating: 5.0,
    date: "2026.07.08",
    body: "헤어진 이유가 사주에 그대로 나와서 소름 돋았어요. 서로 너무 똑같아서 부딪혔던 거였네요. 몇 월에 연락해야 하는지까지 알려줘서 진짜 도움 됐어요.",
    avatar: "🐲",
  },
  {
    email: "ha****@naver.com",
    ilju: "무술일주",
    rating: 5.0,
    date: "2026.07.08",
    body: "다시 만나도 똑같이 헤어질 뻔했는데, 살풀이 타이밍 알려주셔서 조심했어요. 지금 재회해서 잘 지내고 있어요. 언니 아니었으면 큰일 날 뻔.",
    avatar: "🐶",
  },
  {
    email: "ye****@daum.net",
    ilju: "병자일주",
    rating: 5.0,
    date: "2026.07.07",
    body: "그 사람 마음에 아직 내 자리가 있는지가 제일 궁금했는데 딱 짚어줬어요. 그리워하면서도 겁내고 있다는 말에 눈물 났어요. 정확도 실화인가요.",
    avatar: "🐭",
  },
  {
    email: "min****@gmail.com",
    ilju: "정사일주",
    rating: 5.0,
    date: "2026.07.06",
    body: "재회운 본다고 반신반의했는데, 병오년에 다시 불붙을 가능성 있다는 말 듣고 용기 냈어요. 실시간 상담까지 받으니 붙잡을 필살기가 확실해졌어요.",
    avatar: "🐍",
  },
  {
    email: "ju****@naver.com",
    ilju: "계유일주",
    rating: 5.0,
    date: "2026.07.05",
    body: "이별 3개월째에 봤는데 예견된 일이었다는 말에 오히려 마음이 편해졌어요. 언제 어떻게 다가가야 하는지 방향이 잡혀서 조급함이 사라졌어요.",
    avatar: "🐔",
  },
  {
    email: "na****@gmail.com",
    ilju: "갑인일주",
    rating: 4.5,
    date: "2026.07.04",
    body: "남음궁합이 걸린다는 게 뭔지 처음 알았어요. 그냥 매달리기만 했으면 또 실패했을 텐데, 위기 시점까지 알려줘서 이번엔 다를 것 같아요.",
    avatar: "🐯",
  },
];
