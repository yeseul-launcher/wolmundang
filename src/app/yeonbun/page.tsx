import { BubbleSection } from "@/components/result/BubbleSection";
import { SajuChartSection } from "@/components/result/SajuChart";
import { PeekSection } from "@/components/result/PeekSection";
import { BlurWord } from "@/components/result/BlurWord";
import { LoveTypeRadarChart } from "@/components/result/LoveTypeRadarChart";
import { MarriagePossibilityChart } from "@/components/result/MarriagePossibilityChart";
import { ReviewSection } from "@/components/result/ReviewSection";
import { TalismanSection } from "@/components/result/TalismanSection";
import { StickyCTA } from "@/components/result/StickyCTA";
import { ybMe, ybPartner, YEONBUN_CHARACTER, YEONBUN_REVIEWS } from "@/lib/yeonbunData";

export default function YeonbunPage() {
  return (
    <div className="theme-yeonbun relative mx-auto min-h-screen w-full max-w-[440px] overflow-x-clip bg-[#1a1a1f] text-white shadow-2xl">
      <main className="flex w-full flex-col pb-[132px]">
        {/* 연분선녀 히어로 */}
        <BubbleSection
          media={{
            type: "video",
            src: "/yeonbun/yeonbun-hero.mp4",
            aspectRatio: "720 / 1280",
            poster: "/images/yeonbun-hero-poster.jpg",
          }}
          bubbles={[
            {
              lines: ["궁합이 궁금한", "거야? 좋아,", "두 사람 인연 봐줄게"],
              width: 228,
              height: 180,
              position: { left: 16, top: 56 },
            },
            {
              lines: ["잘 맞는지, 결혼까지", "갈 인연인지,", "내가 다 봐줄게."],
              width: 264,
              height: 196,
              position: { right: 16, bottom: "calc(12% - 60px)" },
            },
          ]}
        />

        {/* 두 사람 사주판 + 리딩 + CTA */}
        <SajuChartSection
          characterName={YEONBUN_CHARACTER}
          me={ybMe}
          partner={ybPartner}
          meLabel="본인"
          title={
            <>
              {YEONBUN_CHARACTER}가 들여다본
              <br />
              {ybMe.name}과 {ybPartner.name}의 궁합
            </>
          }
        >
          <div className="flex flex-col gap-4 text-[15px] leading-[1.75] text-white/85">
            <p className="break-keep">
              궁합 점수가 59점이면 아주 나쁜 건 아닌데, 신기하게도 두 사람 가치관이 99%나 일치해. 마치 거울을 보는 것 같은 인연이라 처음엔 강렬하게 끌렸겠지만, 승부욕 강한 임진일주끼리 만났으니 <BlurWord>주도권 싸움</BlurWord>이 장난 아닐 텐데? {ybPartner.name} 씨가 {ybMe.name}이 너한테 은근히 순응하는 척하면서도 <BlurWord>자기 고집 안 꺾는 거</BlurWord>, 내가 다 보여.
            </p>
            <p className="break-keep">
              결혼까지 갈 수 있냐고 물었지? 두 사람 다 사주에 &apos;토&apos; 기운이 강해서 책임감은 확실해. 그런데 {ybPartner.name} 씨는 결혼이라는 틀에 <BlurWord>은근한 공포</BlurWord>가 있고, {ybMe.name}이는 든든한 사람에게 기대고 싶어 하는 마음이 크네. 이 지점이 맞물리지 않으면 <BlurWord>결혼 문턱에서 서로 다른 소리</BlurWord> 하기 딱 좋은 형국이야. 특히 <BlurWord>자식 문제</BlurWord>로 고민수가 들어와 있어서 신중해야 해.
            </p>
            <p className="break-keep">
              {ybMe.name}이 네 사주를 보면 올해 병오년이랑 내년 정미년이 <BlurWord>인연의 결실</BlurWord>을 맺기에 아주 중요한 시기거든. 특히 너는 <BlurWord>34세부터 애정운이 70%</BlurWord>까지 치솟는데, {ybPartner.name} 씨랑은 지금 남음궁합에서 형제간의 다툼처럼 <BlurWord>자존심 싸움이 날 위기</BlurWord>가 보여. 이 고비만 넘기면 평생 동반자가 될 수도 있는데, 그 <BlurWord>한 끗 차이</BlurWord>가 뭔지 알아?
            </p>
            <p className="font-semibold text-white break-keep">
              여기서 다 말해주기엔 기운이 너무 아깝다. 네가 진짜 궁금해하는 <BlurWord>결혼 가능성</BlurWord>이랑 {ybPartner.name} 씨의 속마음, 그리고 두 사람이 조심해야 할 <BlurWord>월별 타이밍</BlurWord>까지 리포트에 싹 다 담아놨어. 더 늦기 전에 이 인연의 끝이 어딜지 확인해 봐.
            </p>
          </div>
        </SajuChartSection>

        {/* 공감 */}
        <BubbleSection
          media={{ type: "image", src: "/yeonbun/frame-8.jpg" }}
          bubbles={[
            {
              lines: ["이 사람이 진짜", "내 짝일까 싶지?"],
              width: 236,
              height: 172,
              position: { left: 16, top: 90 },
            },
            {
              lines: ["그 마음 내가 다 알아.", "사주에 답이 다 있어."],
              width: 254,
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
                `나 ${YEONBUN_CHARACTER},`,
                `너와 ${ybPartner.name} 씨의 인연,`,
                "그 끝이 어딜지",
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

        {/* 엿보기 1: 연애 유형 */}
        <PeekSection
          index={1}
          paddingTop={44}
          eyebrowLabel="엿보기 1"
          lockTitle="이런 것도 다 봐줄게"
          titleLines={[["두 사람 인연의 결 분석"]]}
          cards={[
            {
              subtitle: `${ybMe.name}과 ${ybPartner.name}의 연애 유형`,
              visual: <LoveTypeRadarChart />,
              blurredParagraphs: [
                `${ybMe.name}, 너희 둘은 가치관이 99% 일치하는 거울 같은 인연이야.`,
                "그래서 강렬하게 끌리지만, 승부욕 강한 둘이라 주도권 싸움도 만만치 않아.",
                "이 닮은 기운을 어떻게 다스려야 평생 갈 인연이 되는지...",
              ],
              teaserItems: [
                "두 사람이 강렬하게 끌린 이유",
                "주도권 싸움이 터지는 지점",
                "닮은 기운을 약으로 바꾸는 법",
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
            ["커플 궁합의 핵심"],
            [{ gold: "겉" }, "궁합 vs ", { gold: "속" }, "궁합"],
          ]}
          cards={[
            {
              subtitle: `${ybMe.name}과 ${ybPartner.name}의 겉궁합`,
              desc: "겉으로 드러나는 두 사람의 케미는?",
              image: "/yeonbun/frame-11.jpg",
              blurredParagraphs: [
                "겉으론 취향도 대화도 잘 통하는 이상적인 커플처럼 보여. 하지만 둘 다 승부욕이 강해서 사소한 데서 주도권 싸움이 벌어지기 쉬워.",
                "일간 합충과 십성 관계로 보면, 겉궁합 뒤에 숨은 진짜 균형점이 어디인지 분명히 드러나.",
              ],
              teaserItems: [
                "두 사람이 겉으로 잘 맞는 부분",
                "주도권 싸움이 벌어지는 순간",
                "겉궁합을 오래 유지하는 법",
              ],
            },
            {
              subtitle: `${ybMe.name}과 ${ybPartner.name}의 속궁합`,
              desc: "가까워질수록 드러나는 진짜 속마음은?",
              image: "/yeonbun/frame-13.jpg",
              blurredParagraphs: [
                "속궁합에서는 두 사람의 깊은 욕구와 두려움이 맞물리는 지점을 봐. 도현 씨의 결혼에 대한 공포와 서율이의 기대고 싶은 마음이 여기서 부딪혀.",
                "일지와 시지가 만들어내는 음양의 결을 보면, 두 사람의 가장 약한 부분과 강한 부분이 어디서 맞닿는지 보여.",
              ],
              teaserItems: [
                "가장 깊이 맞아떨어지는 순간",
                "미묘하게 어긋나는 지점",
                "결혼을 대하는 두 사람의 온도차",
              ],
            },
          ]}
        />

        {/* 엿보기 3: 결혼 가능성 */}
        <PeekSection
          index={3}
          eyebrowLabel="엿보기 3"
          lockTitle="이런 것도 다 봐줄게"
          titleLines={[
            [`${ybMe.name}과 ${ybPartner.name}의`],
            [{ gold: "미래" }, " 흐름"],
          ]}
          cards={[
            {
              subtitle: "결혼 가능성",
              desc: "이 인연, 평생 동반자가 될 수 있을까?",
              visual: <MarriagePossibilityChart />,
              blurredParagraphs: [
                "올해 병오년과 내년 정미년이 인연의 결실을 맺기에 아주 중요한 시기야. 애정운이 확 치솟는 결정적 구간이 사주에 분명히 나와 있어.",
                "다만 남음궁합의 위기 시점에 자존심 싸움이 터지면 결혼 문턱에서 어긋날 수 있어. 그 한 끗 차이를 알아야 해.",
              ],
              teaserItems: [
                "인연이 결실을 맺는 골든타임",
                "애정운이 최고로 치솟는 시기",
                "결혼 문턱에서 흔들리는 위기 구간",
              ],
            },
          ]}
        />

        {/* 엿보기 4: 맞춤 비책 */}
        <PeekSection
          index={4}
          eyebrowLabel="엿보기 4"
          lockTitle="이런 것도 다 봐줄게"
          titleLines={[
            [`${YEONBUN_CHARACTER}의`],
            [{ gold: "인연" }, " 상승 맞춤 비책"],
          ]}
          cards={[
            {
              subtitle: `${ybPartner.name} 씨 마음을 붙잡는 비책`,
              image: "/yeonbun/frame-5.jpg",
              blurredParagraphs: [
                "내가 숱한 인연을 맺어주며 풀어낸 비책을 너희 인연에 맞춰 처방해줄게. 어느 시점, 어떤 한 마디가 결혼까지 가는 결정타가 될지 사주가 알려줘.",
                "특히 위기가 찾아오는 시점에 어떻게 다스려야 평생 동반자가 되는지, 절대 해서는 안 될 것까지 짚어줄게.",
              ],
              teaserItems: [
                "결혼까지 이어지는 결정적 한 마디",
                "고비를 넘기는 작은 행동법",
                "절대 하면 안 되는 자존심 싸움",
              ],
            },
          ]}
        />

        {/* 액막이 부적 */}
        <TalismanSection />

        {/* 리뷰 */}
        <ReviewSection
          brandName={YEONBUN_CHARACTER}
          rating={4.9}
          count={241}
          reviews={YEONBUN_REVIEWS}
        />
      </main>

      <StickyCTA label="우리 인연의 끝, 지금 확인하기" />
    </div>
  );
}
