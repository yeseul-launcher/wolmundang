import { computeSaju, iljuLabel } from "@/lib/saju";
import type { Person } from "@/lib/resultData";
import type { Review } from "@/types/review";

// 연분선녀 데모: 본인(이서율) + 연인(박도현) — 둘 다 임진일주(거울 같은 인연)
const ME_BIRTH = { year: 1998, month: 12, day: 11, hour: 2, minute: 0 } as const;
const PARTNER_BIRTH = { year: 1997, month: 12, day: 16, hour: 12, minute: 0 } as const;

const meSaju = computeSaju({ ...ME_BIRTH, gender: "female" });
const partnerSaju = computeSaju({ ...PARTNER_BIRTH, gender: "male" });

export const ybMe: Person = {
  name: "이서율",
  gender: "female",
  saju: meSaju,
  ilju: iljuLabel(meSaju),
};

export const ybPartner: Person = {
  name: "박도현",
  gender: "male",
  saju: partnerSaju,
  ilju: iljuLabel(partnerSaju),
};

export const YEONBUN_CHARACTER = "연분선녀";

// 연분선녀 유저 리뷰 (궁합/인연/결혼 테마, 반말 언니 서비스 후기)
export const YEONBUN_REVIEWS: Review[] = [
  {
    email: "se****@gmail.com",
    ilju: "임진일주",
    rating: 5.0,
    date: "2026.07.08",
    body: "가치관이 99% 같아서 좋은 줄만 알았는데, 그게 오히려 주도권 싸움 원인이 될 수 있다는 말에 정신이 번쩍. 결혼까지 갈 수 있는 인연인지 확실해졌어요.",
    avatar: "🐲",
  },
  {
    email: "da****@naver.com",
    ilju: "기미일주",
    rating: 5.0,
    date: "2026.07.08",
    body: "남친이 결혼에 은근한 공포가 있다는 거, 어떻게 아셨어요? 진짜 그래요ㅠㅠ 이 고비만 넘기면 평생 동반자 될 수 있다는 말에 희망 얻고 갑니다.",
    avatar: "🐑",
  },
  {
    email: "ye****@gmail.com",
    ilju: "을묘일주",
    rating: 5.0,
    date: "2026.07.07",
    body: "34세부터 애정운이 치솟는다는 거 보고 조급함 내려놨어요. 두 사람이 조심해야 할 월별 타이밍까지 알려줘서 싸움이 확 줄었어요. 완전 추천.",
    avatar: "🐰",
  },
  {
    email: "so****@daum.net",
    ilju: "무진일주",
    rating: 5.0,
    date: "2026.07.06",
    body: "남음궁합에서 위기가 보인다는 말에 긴장했는데, 그 한 끗 차이가 뭔지 알려주셔서 관계가 훨씬 단단해졌어요. 인연의 끝이 어딜지 확인하길 잘했어요.",
    avatar: "🐲",
  },
  {
    email: "ha****@naver.com",
    ilju: "경신일주",
    rating: 5.0,
    date: "2026.07.05",
    body: "거울 같은 인연이라 처음엔 강렬하게 끌렸다는 말이 딱 맞아서 소름. 결혼 문턱에서 다른 소리 하지 않으려면 뭘 조심해야 하는지 배웠어요.",
    avatar: "🐵",
  },
  {
    email: "ji****@gmail.com",
    ilju: "신유일주",
    rating: 4.5,
    date: "2026.07.04",
    body: "토 기운이 강해서 책임감은 확실하다는 말에 안심했어요. 자식 문제 고민수까지 봐주셔서 미리 대비할 수 있게 됐네요. 실시간 상담도 좋았어요.",
    avatar: "🐔",
  },
];
