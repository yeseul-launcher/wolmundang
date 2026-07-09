import { computeSaju, iljuLabel } from "@/lib/saju";
import type { Person } from "@/lib/resultData";
import type { Review } from "@/types/review";

// 도화님(데모): 임진 일주 + 자수 월령 (수 기운 강, 관성 진토·축토)
const DOHWA_BIRTH = { year: 1997, month: 12, day: 16, hour: 22, minute: 0 } as const;
const dohwaSaju = computeSaju({ ...DOHWA_BIRTH, gender: "female" });

export const dohwa: Person = {
  name: "도화님",
  gender: "female",
  saju: dohwaSaju,
  ilju: iljuLabel(dohwaSaju),
};

export const DOHWA_CHARACTER = "도화선녀";

// 도화선녀 유저 리뷰 (연애운/매력/인연 테마, 반말 언니 서비스 후기)
export const DOHWA_REVIEWS: Review[] = [
  {
    email: "yu****@gmail.com",
    ilju: "임진일주",
    rating: 5.0,
    date: "2026.07.08",
    body: "매력은 넘치는데 왜 연애가 안 되나 항상 답답했는데, 내 기운이 오히려 남자를 밀어내고 있었다는 걸 알았어요. 소름 돋게 정확해서 언니한테 상담받는 기분이었어요.",
    avatar: "🐲",
  },
  {
    email: "sso****@naver.com",
    ilju: "계유일주",
    rating: 5.0,
    date: "2026.07.08",
    body: "주변에 남자는 많은데 정작 제대로 된 인연이 없다는 말에 진짜 울 뻔... 언제 승부수를 던져야 하는지 시기까지 딱 짚어줘서 방향이 잡혔어요.",
    avatar: "🐰",
  },
  {
    email: "ha****@daum.net",
    ilju: "무오일주",
    rating: 5.0,
    date: "2026.07.07",
    body: "겉으론 활달한데 기준 까다로운 거 어떻게 알았지 싶었어요ㅋㅋ 웬만한 남자는 성에 안 찬다는 말 인정합니다. 내 매력 제대로 쓰는 법 알려줘서 좋았어요.",
    avatar: "🐯",
  },
  {
    email: "ji****@gmail.com",
    ilju: "신유일주",
    rating: 5.0,
    date: "2026.07.06",
    body: "하반기에 안정적인 인연 들어온다는 말에 희망이 생겼어요. 8월 이후에 만날 사람 특징까지 적혀 있어서 완전 기대 중이에요. 부적까지 챙겨줘서 감동.",
    avatar: "🐔",
  },
  {
    email: "min****@naver.com",
    ilju: "을묘일주",
    rating: 5.0,
    date: "2026.07.05",
    body: "재회 생각하고 봤는데 그 사람이 아니라 내 매력을 먼저 봐야 한다는 말이 확 와닿았어요. 34세부터 연애운 치솟는다는 거 보고 조급함이 사라졌어요.",
    avatar: "🐍",
  },
  {
    email: "so****@gmail.com",
    ilju: "갑자일주",
    rating: 4.5,
    date: "2026.07.04",
    body: "도화살이 이렇게 좋은 거였다니. 그동안 엉뚱한 데 힘 빼고 있었다는 말에 정신이 번쩍 들었어요. 월별로 조심할 남자까지 알려줘서 두고두고 볼 것 같아요.",
    avatar: "🐮",
  },
];
