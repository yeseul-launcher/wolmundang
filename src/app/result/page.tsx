import { BubbleSection } from "@/components/result/BubbleSection";
import { SajuChartSection } from "@/components/result/SajuChart";
import { PeekSection } from "@/components/result/PeekSection";
import { BlurWord } from "@/components/result/BlurWord";
import { LoveTypeRadarChart } from "@/components/result/LoveTypeRadarChart";
import { MarriagePossibilityChart } from "@/components/result/MarriagePossibilityChart";
import { ReviewSection } from "@/components/result/ReviewSection";
import { TalismanSection } from "@/components/result/TalismanSection";
import { StickyCTA } from "@/components/result/StickyCTA";
import { me, partner, CHARACTER_NAME } from "@/lib/resultData";
import { josa } from "@/lib/korean";
import { REVIEWS } from "@/lib/reviewData";

export default function ResultPage() {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[440px] overflow-x-clip bg-[#1a1a1f] text-white shadow-2xl">
      <main className="flex w-full flex-col pb-[132px]">
        {/* 비책 hook (도령 영상 + 말풍선) */}
        <BubbleSection
          media={{
            type: "video",
            src: "/result/man-1.mp4",
            aspectRatio: "768 / 1168",
            poster: "/images/man-1-poster.jpg",
          }}
          bubbles={[
            {
              lines: [`${partner.name} 마음이`, "그대보다 적다고", "상심 마시오"],
              width: 220,
              height: 170,
              position: { left: 16, top: 60 },
            },
            {
              lines: [
                `${josa(partner.name, "이/가")} 그대에게`,
                "안달나게 하는 비책을",
                "필히 알려줄 것이니.",
              ],
              width: 264,
              height: 194,
              position: { right: 16, bottom: "calc(12% - 60px)" },
            },
          ]}
        />

        {/* 사주판 + 리딩 텍스트 + 잠금 게이트 (한 카드 안에) */}
        <SajuChartSection characterName={CHARACTER_NAME} me={me} partner={partner}>
          <div className="flex flex-col gap-4 text-[15px] leading-[1.75] text-white/85">
            <p className="break-keep">
              궁합 점수 51점... 딱 반타작이오. {me.name}아, 그대는 {me.ilju}로 애착이 강한데 상대방인 {josa(partner.name, "은/는")} {partner.ilju}라 구속받는 걸 극도로 싫어하오. 너랑 자는 건 속궁합 57점으로 정신적 조화가 나쁘지 않아서인데, 이 남자 사주에 <BlurWord>&apos;결혼 공포증&apos;</BlurWord>이 박혀 있어서 연애로 넘어가길 거부하는 것이니.
            </p>
            <p className="break-keep">
              그대 고민대로 그 녀석, 속궁합은 편안하게 느끼면서도 정작 책임은 안 지려는 심보가 사주에 그대로 보이오. {josa(partner.name, "은/는")} 주도적인 상대를 이상형으로 꼽으면서도 막상 그대가 진심을 확인하려 들면 도망가는 기질이 있거든. 그대 사주의 예리한 관찰력으로 녀석의 약점을 찔러야 <BlurWord>무릎을 꿇리든 발바닥을 핥게 하든</BlurWord> 할 수 있소.
            </p>
            <p className="break-keep">
              재밌는 건 올해 병오년 기운이 두 사람 사이의 <BlurWord>&apos;비공식적 관계&apos;</BlurWord>를 더 부채질하고 있다는 것이오. {josa(partner.name, "은/는")} 사주에 인연이 주위에 넘쳐나는 기운이 있어서 지금처럼 가만히 두면 그대는 계속 <BlurWord>애매한 사이</BlurWord>로 남을 가능성이 크오. 하지만 그대 사주에 숨겨진 <BlurWord>&apos;귀인&apos;</BlurWord>의 힘을 빌리면 이 관계의 주도권을 완전히 뺏어올 타이밍이 분명히 있소.
            </p>
            <p className="font-semibold text-white break-keep">
              그 녀석을 그대 발밑에 두게 만들 구체적인 전략, 궁금하지 않소? 궁합 리포트 열어보시오. {josa(partner.name, "이/가")} 절대 거부 못 하는 <BlurWord>유혹의 기술</BlurWord>이랑 녀석이 그대한테 매달리게 될 <BlurWord>결정적 시기</BlurWord>까지 월별로 다 짚어주리다.
            </p>
          </div>
        </SajuChartSection>

        {/* 서운함 공감 (도령 이미지 + 말풍선) */}
        <BubbleSection
          media={{ type: "image", src: "/result/namsim-sorrowful.png" }}
          bubbles={[
            {
              lines: ["상대에게 서운했던", "그 마음, 내가 다 아오"],
              width: 236,
              height: 172,
              position: { left: 16, top: 90 },
            },
            {
              lines: ["허나, 이것 또한 다 방법이", "있다는 것을 아시오?"],
              width: 250,
              height: 176,
              position: { right: 16, bottom: "3%" },
            },
          ]}
        />

        {/* 파헤치기 다짐 (다크 배경 + 말풍선) */}
        <BubbleSection
          minHeight={400}
          paddingTop={28}
          bubbles={[
            {
              lines: [
                `나 ${CHARACTER_NAME},`,
                "내 이름을 걸고",
                `그대와 ${partner.name}의 궁합을`,
                "낱낱이 파헤쳐드리리다",
              ],
              width: 300,
              height: 220,
              fontSize: 16,
              position: {
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              },
            },
          ]}
        />


        {/* 엿보기 2: 연애관 분석 */}
        <PeekSection
          index={1}
          paddingTop={44}
          eyebrowLabel="엿보기 1"
          titleLines={[["사주 속 연애관 분석"]]}
          cards={[
            {
              subtitle: `${josa(me.name, "과/와")} ${partner.name}의 연애 유형`,
              visual: <LoveTypeRadarChart />,
              blurredParagraphs: [
                `${me.name}, 그대 사주를 보아하니 연애에서 확인받고 싶어하는 마음이 크다고 나오는구려.`,
                `한 번 사랑에 빠지면 크게 불타오르나, ${partner.name}의 반응이 적극적이지 않을 땐 속앓이가 크오.`,
                "이 시점, 어찌 다스려야 인연이 깊어질지...",
              ],
              teaserItems: [
                `${me.name}의 연애관과 확인받고 싶은 마음의 뿌리`,
                "속앓이를 다스리는 법",
                "인연이 깊어지는 신호",
              ],
            },
          ]}
        />

        {/* 엿보기 3: 겉궁합 vs 속궁합 */}
        <PeekSection
          index={2}
          eyebrowLabel="엿보기 2"
          titleLines={[
            ["커플 궁합의 핵심"],
            [{ gold: "겉" }, "궁합 vs ", { gold: "속" }, "궁합"],
          ]}
          cards={[
            {
              subtitle: `${me.name}과 ${partner.name}의 겉궁합`,
              desc: "각자의 표현 결은 어떠하오?",
              image: "/result/namsim-outer-match.png",
              blurredParagraphs: [
                "두 사람의 애정 표현 방식은 정반대에 가까운 패턴을 보입니다. 한쪽은 직설적이고 즉각적인 반응으로 마음을 드러내는 반면, 다른 한쪽은 분위기와 행동으로 천천히 표현하는 경향이 강합니다.",
                "이런 표현의 결이 다를 때 사주 명식에서는 일간 합충과 십성 관계로 그 균형을 읽을 수 있습니다.",
              ],
              teaserItems: [
                `${me.name}과 ${partner.name}의 애정 표현 결의 차이`,
                "서운한 시점과 갈등을 푸는 길",
                `${me.name}과 ${partner.name}의 외모 그림체 궁합`,
              ],
            },
            {
              subtitle: `${me.name}과 ${partner.name}의 속궁합`,
              desc: "두 인연의 깊은 감정과 욕구는 어찌 맞물리는지 알려주겠소",
              image: "/result/namsim-inner-match.png",
              blurredParagraphs: [
                "속궁합에서는 두 사람의 깊은 감정 코드와 무의식적 욕구가 강하게 맞물리는 지점을 분석합니다.",
                "두 사람의 일지와 시지가 만들어내는 음양의 결, 그리고 십이운성의 흐름을 통해 보면 서로의 가장 약한 부분과 가장 강한 부분이 어디서 맞닿는지 분명히 보입니다.",
              ],
              teaserItems: [
                "가장 폭발적으로 맞아 떨어지는 순간",
                "미묘하게 어긋나는 지점",
                "사랑과 결혼에 대한 가치관 차이",
              ],
            },
          ]}
        />

        {/* 엿보기 4: 결혼 가능성 */}
        <PeekSection
          index={3}
          eyebrowLabel="엿보기 3"
          titleLines={[
            [`${me.name}과 ${partner.name}의`],
            [{ gold: "미래" }, " 흐름"],
          ]}
          cards={[
            {
              subtitle: "결혼 가능성",
              desc: `${me.name}과 ${partner.name}의 결혼 가능성을 보아하니..`,
              visual: <MarriagePossibilityChart />,
              blurredParagraphs: [
                "두 사주를 종합하면 결혼 가능성과 시기가 분명히 드러나오. 어느 해가 길하고 어느 시기에 위기가 오는지 미리 알 수 있소이다.",
                "또한 두 분이 어느 시점에 가장 깊은 신뢰를 쌓고, 어느 시기에 흔들리는지 사주는 미리 알려주오.",
              ],
              teaserItems: [
                `${me.name}과 ${partner.name}의 결혼 가능성 점수`,
                "인연이 가장 깊어지는 골든타임",
                "관계가 흔들리는 위기 시점",
              ],
            },
          ]}
        />

        {/* 엿보기 5: 맞춤 비책 */}
        <PeekSection
          index={4}
          eyebrowLabel="엿보기 4"
          titleLines={[
            [`${CHARACTER_NAME}의`],
            [{ gold: "궁합" }, " 상승 맞춤 비책"],
          ]}
          cards={[
            {
              subtitle: `${partner.name}의 마음을 사로잡는 비책`,
              image: "/result/namsim-bichaek.png",
              blurredParagraphs: [
                `${CHARACTER_NAME}이 숱한 인연을 지켜보며 풀어낸 비책을 그대 인연에 맞춰 처방드리리다. 어느 시점, 어떤 한 마디, 어떤 행동이 결정적 순간이 될지 사주가 알려주오.`,
                "특히 위기가 찾아오는 시점에 어찌 다스려야 인연이 깊어지는지, 그 작은 행동들과 절대 해서는 안 될 것까지 사주에서 짚어드리리다.",
              ],
              teaserItems: [
                "결정적 한 마디, 마음 흔드는 표현",
                "마음을 끄는 골든타임",
                "위기를 넘기는 작은 행동법",
              ],
            },
          ]}
        />

        {/* 액막이 부적 */}
        <TalismanSection />

        {/* 리뷰 캐러셀 */}
        <ReviewSection
          brandName={CHARACTER_NAME}
          rating={4.9}
          count={128}
          reviews={REVIEWS}
        />
      </main>

      <StickyCTA label="그 남자의 속마음, 지금 확인하기" />
    </div>
  );
}
