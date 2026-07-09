import { BubbleSection } from "@/components/result/BubbleSection";
import { SajuChartSection } from "@/components/result/SajuChart";
import { PeekSection } from "@/components/result/PeekSection";
import { BlurWord } from "@/components/result/BlurWord";
import { LoveTypeRadarChart } from "@/components/result/LoveTypeRadarChart";
import { MarriagePossibilityChart } from "@/components/result/MarriagePossibilityChart";
import { ReviewSection } from "@/components/result/ReviewSection";
import { dohwa, DOHWA_CHARACTER, DOHWA_REVIEWS } from "@/lib/dohwaData";

export default function DohwaPage() {
  return (
    <div className="theme-dohwa relative mx-auto min-h-screen w-full max-w-[440px] overflow-x-clip bg-[#1a1a1f] text-white shadow-2xl">
      <main className="flex w-full flex-col pb-[100px]">
        {/* 도화선녀 히어로 (영상 + 말풍선) */}
        <BubbleSection
          media={{
            type: "video",
            src: "/dohwa/dohwa-hero.mp4",
            aspectRatio: "720 / 1280",
            poster: "/images/dohwa-hero-poster.jpg",
          }}
          bubbles={[
            {
              lines: ["어머, 너 기운이", "좀 특별한데?", "도화살이 느껴져"],
              width: 224,
              height: 176,
              position: { left: 16, top: 56 },
            },
            {
              lines: [
                "그 넘치는 매력,",
                "왜 인연으로 안 풀리는지",
                "언니가 다 봐줄게.",
              ],
              width: 268,
              height: 198,
              position: { right: 16, bottom: "calc(12% - 60px)" },
            },
          ]}
        />

        {/* 도화님 사주판 + 리딩 + CTA */}
        <SajuChartSection
          characterName={DOHWA_CHARACTER}
          me={dohwa}
          meLabel="본인"
          title={
            <>
              {DOHWA_CHARACTER}가 들여다본
              <br />
              {dohwa.name}의 타고난 매력
            </>
          }
        >
          <div className="flex flex-col gap-4 text-[15px] leading-[1.75] text-white/85">
            <p className="break-keep">
              도화님, 네 사주를 보니 {dohwa.ilju}에 자수 월령까지 얻어서 수 기운이 정말 강하네. 네가 느끼는 그 매력, 사실 사주상으로도 넘쳐흐르는 게 맞아. 근데 문제는 이 강한 기운이 남자를 끌어당기기보다 오히려 <BlurWord>밀어내거나</BlurWord>, 들어와도 금방 <BlurWord>잠겨버리게</BlurWord> 만들고 있어. 특히 올해 병오년은 불 기운이 들어오면서 이 강한 물이랑 충돌해서 심리적으로 더 조급해질 수밖에 없는 시기야.
            </p>
            <p className="break-keep">
              사주 명식에 진토랑 축토까지 관성이 깔려 있어서 남자가 없는 팔자는 절대 아니야. 오히려 주변에 남자가 득실거리는 환경에 놓여 있는데, 정작 네가 마음 줄 만한 <BlurWord>제대로 된 인연</BlurWord>은 이 흙탕물 속에 가려져 있는 형국이네.
            </p>
            <p className="break-keep">
              특히 하반기부터는 정재운이 들어오면서 훨씬 안정적인 관계를 맺을 기운이 강해지는데, <BlurWord>8월 이후</BlurWord>에 만날 인연의 특징이 사주에 아주 선명하게 나와 있어. 너는 겉으로는 활달해 보여도 속으로는 승부욕이 엄청나고 기준이 까다로워서 웬만한 남자는 성에 안 찰 거야.
            </p>
            <p className="break-keep">
              내년 정미년까지 이어지는 흐름을 보면, 단순히 가벼운 연애가 아니라 <BlurWord>결혼까지 생각할 만한 진지한 인연</BlurWord>이 들어오는 시기가 딱 정해져 있거든. <BlurWord>34세</BlurWord>부터 대운이 바뀌면서 연애운이 <BlurWord>70퍼센트</BlurWord>까지 치솟는 결정적인 구간이 보이는데, 그전에 지금 꼬여 있는 감정의 실타래를 어떻게 풀어야 할지 짚어봐야 해.
            </p>
            <p className="font-semibold text-white break-keep">
              네 그 넘치는 매력을 제대로 못 쓰고 엉뚱한 데 힘 빼고 있는 게 너무 안타까워서 그래. 리포트에 월별로 <BlurWord>어떤 남자를 조심하고</BlurWord> 어떤 시기에 <BlurWord>승부수를 던져야</BlurWord> 하는지 싹 다 적어놨어. 특별히 <BlurWord>남자 복 터지는 액막이 부적</BlurWord>까지 써줄 테니까, 얼른 확인해 봐.
            </p>
          </div>

          <button
            type="button"
            className="mt-5 w-full rounded-lg bg-primary py-4 text-[16px] font-semibold text-white"
          >
            언니가 찾은 내 진짜 인연 확인하기
          </button>
        </SajuChartSection>

        {/* 공감 (도화선녀 이미지 + 말풍선) */}
        <BubbleSection
          media={{ type: "image", src: "/dohwa/frame-8.jpg" }}
          bubbles={[
            {
              lines: ["매력은 넘치는데", "왜 인연은 안 풀리나 싶지?"],
              width: 244,
              height: 176,
              position: { left: 16, top: 90 },
            },
            {
              lines: ["그 마음, 언니가 다 알아.", "근데 그거 다 방법이 있어."],
              width: 258,
              height: 182,
              position: { right: 16, bottom: "3%" },
            },
          ]}
        />

        {/* 다짐 (다크 배경 + 말풍선) */}
        <BubbleSection
          minHeight={400}
          paddingTop={28}
          bubbles={[
            {
              lines: [
                `나 ${DOHWA_CHARACTER},`,
                "네 타고난 도화살과",
                "숨은 매력의 비밀,",
                "하나도 빠짐없이 봐줄게",
              ],
              width: 300,
              height: 224,
              fontSize: 16,
              position: {
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              },
            },
          ]}
        />

        {/* 엿보기 1: 타고난 매력 유형 */}
        <PeekSection
          index={1}
          paddingTop={44}
          eyebrowLabel="엿보기 1"
          lockTitle="이런 것도 다 봐줄게"
          titleLines={[["타고난 매력 유형 분석"]]}
          cards={[
            {
              subtitle: `${dohwa.name}의 도화살 매력 지도`,
              visual: <LoveTypeRadarChart />,
              blurredParagraphs: [
                `${dohwa.name}, 네 사주엔 사람을 끌어당기는 도화 기운이 유독 진하게 박혀 있어.`,
                "근데 그 매력이 어디서 폭발하고 어디서 오히려 남자를 겁먹게 하는지, 결이 확실하게 갈려.",
                "이 매력을 어느 순간에 꺼내 써야 인연이 붙는지...",
              ],
              teaserItems: [
                "남자를 끌어당기는 결정적 매력 포인트",
                "오히려 인연을 밀어내는 순간",
                "매력을 200% 살리는 타이밍",
              ],
            },
          ]}
        />

        {/* 엿보기 2: 매력의 두 얼굴 */}
        <PeekSection
          index={2}
          eyebrowLabel="엿보기 2"
          lockTitle="이런 것도 다 봐줄게"
          titleLines={[
            ["네 매력의"],
            [{ gold: "두" }, " 얼굴"],
          ]}
          cards={[
            {
              subtitle: "남자를 홀리는 겉매력",
              desc: "첫눈에 시선을 끄는 네 도화 기운은?",
              image: "/dohwa/frame-16.jpg",
              blurredParagraphs: [
                "네 도화살은 가만히 있어도 사람 시선을 끌어당기는 화려한 겉매력으로 드러나. 분위기, 눈빛, 말투 하나하나가 상대를 무장 해제시키는 힘이 있어.",
                "다만 이 강한 매력이 언제 독이 되고 언제 약이 되는지는 일간 합충과 도화 위치로 정확히 읽을 수 있어.",
              ],
              teaserItems: [
                "첫인상에서 남자를 끌어당기는 포인트",
                "매력이 과하게 나가 부담을 주는 순간",
                "네 도화살이 가장 빛나는 상황",
              ],
            },
            {
              subtitle: "남자가 겁먹는 속매력",
              desc: "가까워질수록 드러나는 진짜 너는?",
              image: "/dohwa/dohwa-portrait.jpg",
              blurredParagraphs: [
                "겉은 활달하고 여유로워 보여도, 속으론 승부욕과 까다로운 기준이 강하게 자리 잡고 있어. 이 진짜 모습이 드러나는 순간 남자 반응이 극명하게 갈려.",
                "일지와 시지가 만들어내는 음양의 결을 보면, 네 가장 강한 부분과 약한 부분이 어디서 상대와 부딪히는지 분명히 보여.",
              ],
              teaserItems: [
                "가까워질수록 남자가 느끼는 부담의 정체",
                "네 진짜 매력을 알아볼 남자의 특징",
                "속마음을 언제 얼마나 열어야 하는지",
              ],
            },
          ]}
        />

        {/* 엿보기 3: 인연이 들어오는 시기 */}
        <PeekSection
          index={3}
          eyebrowLabel="엿보기 3"
          lockTitle="이런 것도 다 봐줄게"
          titleLines={[
            [`${dohwa.name}의`],
            [{ gold: "연애운" }, " 흐름"],
          ]}
          cards={[
            {
              subtitle: "인연이 들어오는 시기",
              desc: "네 진짜 인연은 대체 언제 오는 걸까?",
              visual: <MarriagePossibilityChart />,
              blurredParagraphs: [
                "네 사주엔 인연이 강하게 들어오는 시기와 조급함에 흔들리는 시기가 분명히 나뉘어 있어. 어느 해가 길하고 어느 때 위기가 오는지 미리 알 수 있어.",
                "특히 대운이 바뀌면서 연애운이 확 치솟는 결정적 구간이 있는데, 그 타이밍을 놓치면 안 돼.",
              ],
              teaserItems: [
                "안정적인 인연이 들어오는 골든타임",
                "연애운이 최고로 치솟는 결정적 시기",
                "조급함에 흔들리기 쉬운 위기 구간",
              ],
            },
          ]}
        />

        {/* 엿보기 4: 맞춤 비책 + 부적 */}
        <PeekSection
          index={4}
          eyebrowLabel="엿보기 4"
          lockTitle="이런 것도 다 봐줄게"
          titleLines={[
            [`${DOHWA_CHARACTER}의`],
            [{ gold: "남자 복" }, " 맞춤 비책"],
          ]}
          cards={[
            {
              subtitle: "네 인연을 끌어올 맞춤 비책",
              image: "/dohwa/frame-33.jpg",
              blurredParagraphs: [
                "내가 숱한 사주를 봐오면서 풀어낸 비책을 네 도화살에 딱 맞춰 처방해줄게. 어느 시점에 어떤 말과 행동이 인연을 붙잡는 결정타가 될지 사주가 다 알려줘.",
                "특히 조심해야 할 남자와 승부수를 던져야 할 시기, 그리고 남자 복 터지는 액막이 부적까지 사주에서 짚어줄게.",
              ],
              teaserItems: [
                "인연을 붙잡는 결정적 한 마디와 행동",
                "월별로 조심해야 할 남자 유형",
                "남자 복 터지는 액막이 부적",
              ],
            },
          ]}
        />

        {/* 리뷰 캐러셀 */}
        <ReviewSection
          brandName={DOHWA_CHARACTER}
          rating={4.9}
          count={214}
          reviews={DOHWA_REVIEWS}
        />
      </main>
    </div>
  );
}
