import { BubbleSection } from "@/components/result/BubbleSection";
import { SajuChartSection } from "@/components/result/SajuChart";
import { PeekSection } from "@/components/result/PeekSection";
import { BlurWord } from "@/components/result/BlurWord";
import { LoveTypeRadarChart } from "@/components/result/LoveTypeRadarChart";
import { MarriagePossibilityChart } from "@/components/result/MarriagePossibilityChart";
import { ReviewSection } from "@/components/result/ReviewSection";
import { TalismanSection } from "@/components/result/TalismanSection";
import { StickyCTA } from "@/components/result/StickyCTA";
import { jhMe, jhEx, JAEHOE_CHARACTER, JAEHOE_REVIEWS } from "@/lib/jaehoeData";
import { josa } from "@/lib/korean";

export default function JaehoePage() {
  return (
    <div className="theme-jaehoe relative mx-auto min-h-screen w-full max-w-[440px] overflow-x-clip bg-[#1a1a1f] text-white shadow-2xl">
      <main className="flex w-full flex-col pb-[132px]">
        {/* 재회여신 히어로 */}
        <BubbleSection
          media={{
            type: "video",
            src: "/jaehoe/jaehoe-hero.mp4",
            aspectRatio: "720 / 1280",
            poster: "/images/jaehoe-hero-poster.jpg",
          }}
          bubbles={[
            {
              lines: ["지금 마음속에 있는", "그 사람 때문에", "온 거지?"],
              width: 224,
              height: 178,
              position: { left: 16, top: 56 },
            },
            {
              lines: ["왜 헤어졌는지,", "다시 만날 수 있는지,", "내가 다 봐줄게."],
              width: 264,
              height: 196,
              position: { right: 16, bottom: "calc(12% - 60px)" },
            },
          ]}
        />

        {/* 두 사람 사주판 + 리딩 + CTA */}
        <SajuChartSection
          characterName={JAEHOE_CHARACTER}
          me={jhMe}
          partner={jhEx}
          meLabel="본인"
          title={
            <>
              {JAEHOE_CHARACTER}이 들여다본
              <br />
              {jhMe.name}과 그 사람의 재회운
            </>
          }
        >
          <div className="flex flex-col gap-4 text-[15px] leading-[1.75] text-white/85">
            <p className="break-keep">
              궁합 점수가 59점이면 딱 경계선이야. {jhMe.name}아, 너랑 그 사람 둘 다 임진 일주에 강렬한 승부욕을 타고나서 연애할 때 누가 주도권을 잡느냐로 엄청 치열했지? 특히 속궁합은 60점인데 겉궁합이 75점인 걸 보면, 겉으론 잘 맞는 척해도 속으론 서로 이해받지 못해 쌓인 <BlurWord>응어리</BlurWord>가 이번 이별의 진짜 원인이야.
            </p>
            <p className="break-keep">
              3개월 전 이별, 사실 사주를 보면 예견된 일이었어. 너희 둘 다 가치관 일치율이 99퍼센트나 될 정도로 세상을 보는 눈이 똑같거든. 근데 이게 <BlurWord>독</BlurWord>이 됐어. 거울을 보는 것 같아서 서로의 단점이 더 잘 보였을 거야. 상대방은 지금 너의 카리스마 있는 모습을 그리워하면서도, <BlurWord>다시 구속당할까 봐 겁내고</BlurWord> 있는 상태네.
            </p>
            <p className="break-keep">
              재회운을 보니까 다행히 너희 둘 다 올해 병오년의 뜨거운 기운을 받고 있어서 <BlurWord>다시 불붙을 가능성</BlurWord>은 있어. 하지만 전통 궁합에서 형제 사이처럼 다투다 가문이 기운다는 <BlurWord>남음궁합 10점</BlurWord>이 걸리네. 이 살풀이를 제대로 안 하면 다시 만나도 똑같은 이유로 <BlurWord>3개월 뒤에 또 헤어질</BlurWord> 수 있어. 타이밍이 정말 중요해.
            </p>
            <p className="font-semibold text-white break-keep">
              {jhMe.name}아, 그 사람 마음속에 아직 네 자리가 있는지, 정확히 <BlurWord>몇 월에 연락해야</BlurWord> 재회 확률이 제일 높은지 리포트에 다 정리해뒀어. 여기서 다 말하기엔 비밀이 좀 많거든? 지금 바로 확인하면 내가 <BlurWord>그 사람 다시 붙잡을 필살기</BlurWord>까지 알려줄게.
            </p>
          </div>
        </SajuChartSection>

        {/* 공감 */}
        <BubbleSection
          media={{ type: "image", src: "/jaehoe/frame-8.jpg" }}
          bubbles={[
            {
              lines: ["아직 그 사람,", "못 잊었지?"],
              width: 232,
              height: 172,
              position: { left: 16, top: 90 },
            },
            {
              lines: ["그 마음 내가 다 알아.", "끝난 게 아니니까."],
              width: 252,
              height: 178,
              position: { right: 16, bottom: "3%" },
            },
          ]}
        />

        {/* 다짐 */}
        <BubbleSection
          minHeight={400}
          paddingTop={28}
          bubbles={[
            {
              lines: [
                `나 ${JAEHOE_CHARACTER},`,
                "너와 그 사람의 끊어진 인연,",
                "다시 이어질 수 있는지",
                "낱낱이 봐줄게",
              ],
              width: 306,
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

        {/* 엿보기 1: 헤어진 이유 */}
        <PeekSection
          index={1}
          paddingTop={44}
          eyebrowLabel="엿보기 1"
          lockTitle="이런 것도 다 봐줄게"
          titleLines={[["두 사람이 헤어진 진짜 이유"]]}
          cards={[
            {
              subtitle: `${jhMe.name}과 그 사람의 연애 유형`,
              visual: <LoveTypeRadarChart />,
              blurredParagraphs: [
                `${jhMe.name}, 너희 둘은 세상을 보는 눈이 거의 똑같은 거울 같은 인연이야.`,
                "근데 그 닮음이 오히려 서로의 단점을 더 크게 비추면서 부딪히게 만들었어.",
                "어느 지점을 건드려야 이 관계가 다시 이어지는지...",
              ],
              teaserItems: [
                "두 사람이 실제로 부딪힌 결정적 지점",
                "닮아서 독이 된 부분",
                "다시 이어지려면 바꿔야 할 한 가지",
              ],
            },
          ]}
        />

        {/* 엿보기 2: 겉궁합 vs 속궁합 */}
        <PeekSection
          index={2}
          eyebrowLabel="엿보기 2"
          lockTitle="이런 것도 다 봐줄게"
          titleLines={[
            ["이별의 진짜 원인"],
            [{ gold: "겉" }, "궁합 vs ", { gold: "속" }, "궁합"],
          ]}
          cards={[
            {
              subtitle: `${jhMe.name}과 그 사람의 겉궁합`,
              desc: "겉으론 잘 맞는 척했던 두 사람은?",
              image: "/jaehoe/frame-16.jpg",
              blurredParagraphs: [
                "겉궁합 75점. 둘은 취향도 대화도 잘 통해서 남들 눈엔 완벽한 커플처럼 보였을 거야. 하지만 이 '잘 맞는 척'이 오히려 진짜 감정을 숨기게 만들었어.",
                "일간 합충과 십성 관계를 보면, 겉으로 드러난 조화 뒤에 숨은 진짜 균열 지점이 분명히 보여.",
              ],
              teaserItems: [
                "남들은 몰랐던 두 사람의 균열 지점",
                "잘 맞는 척이 독이 된 순간",
                "겉궁합 점수의 진짜 의미",
              ],
            },
            {
              subtitle: `${jhMe.name}과 그 사람의 속궁합`,
              desc: "속으론 이해받지 못해 쌓인 응어리는?",
              image: "/jaehoe/frame-24.jpg",
              blurredParagraphs: [
                "속궁합 60점. 겉과 달리 속으론 서로 이해받지 못한 응어리가 차곡차곡 쌓였어. 이별의 진짜 방아쇠가 바로 여기야.",
                "일지와 시지가 만들어내는 음양의 결을 보면, 두 사람이 어디서 가장 깊이 어긋났는지 선명하게 드러나.",
              ],
              teaserItems: [
                "쌓인 응어리의 정확한 정체",
                "이별의 진짜 방아쇠가 된 순간",
                "다시 만나면 풀어야 할 매듭",
              ],
            },
          ]}
        />

        {/* 엿보기 3: 재회 가능성 */}
        <PeekSection
          index={3}
          eyebrowLabel="엿보기 3"
          lockTitle="이런 것도 다 봐줄게"
          titleLines={[
            [`${jhMe.name}과 그 사람의`],
            [{ gold: "재회" }, " 흐름"],
          ]}
          cards={[
            {
              subtitle: "재회 가능성",
              desc: "다시 불붙는 결정적 시기는 언제일까?",
              visual: <MarriagePossibilityChart />,
              blurredParagraphs: [
                "병오년의 뜨거운 기운을 둘 다 받고 있어서 다시 불붙을 가능성은 분명히 있어. 어느 시기에 연락해야 재회 확률이 가장 높은지 사주가 알려줘.",
                "다만 남음궁합의 위기 시점을 모르고 다가가면, 다시 만나도 똑같은 이유로 또 헤어질 수 있어. 타이밍이 전부야.",
              ],
              teaserItems: [
                "재회 확률이 가장 높은 골든타임",
                "다시 불붙는 결정적 시기",
                "또 헤어지기 쉬운 위기 구간",
              ],
            },
          ]}
        />

        {/* 엿보기 4: 재회 필살기 */}
        <PeekSection
          index={4}
          eyebrowLabel="엿보기 4"
          lockTitle="이런 것도 다 봐줄게"
          titleLines={[
            [`${JAEHOE_CHARACTER}의`],
            [{ gold: "재회" }, " 맞춤 필살기"],
          ]}
          cards={[
            {
              subtitle: "그 사람을 다시 붙잡을 필살기",
              image: "/jaehoe/frame-3.jpg",
              blurredParagraphs: [
                "내가 숱한 인연을 다시 이어주며 풀어낸 비책을 너희 인연에 맞춰 처방해줄게. 어느 시점, 어떤 한 마디가 그 사람 마음을 되돌리는 결정타가 될지 사주가 알려줘.",
                "특히 다시 만났을 때 절대 해서는 안 될 것과, 남음궁합 살풀이를 제대로 하는 법까지 짚어줄게.",
              ],
              teaserItems: [
                "그 사람 마음을 되돌릴 결정적 한 마디",
                "먼저 연락해야 할 정확한 시점",
                "다시 만났을 때 절대 하면 안 되는 것",
              ],
            },
          ]}
        />

        {/* 액막이 부적 */}
        <TalismanSection />

        {/* 리뷰 */}
        <ReviewSection
          brandName={JAEHOE_CHARACTER}
          rating={4.9}
          count={186}
          reviews={JAEHOE_REVIEWS}
        />
      </main>

      <StickyCTA label="그 사람과 다시 이어질 운명 확인하기" />
    </div>
  );
}
