"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

// 원본 레퍼런스 굴곡(초반 저점 → 완만한 언덕 → 잔물결 → 급상승 고점) 재현.
// 13개 포인트, 연도 라벨은 0/4/8/12 인덱스에 균등 배치(4등분).
const data = [
  { year: "2026", possibility: 34 },
  { year: "", possibility: 20 },
  { year: "", possibility: 10 },
  { year: "", possibility: 28 },
  { year: "2027", possibility: 34 },
  { year: "", possibility: 52 },
  { year: "", possibility: 65 },
  { year: "", possibility: 60 },
  { year: "2028", possibility: 58 },
  { year: "", possibility: 50 },
  { year: "", possibility: 46 },
  { year: "", possibility: 44 },
  { year: "2030", possibility: 95 },
];

const chartConfig = {
  possibility: {
    label: "결혼 가능성",
    color: "#5285D4",
  },
} satisfies ChartConfig;

// 연도 라벨: 앞 두 자리("20")는 그대로, 뒤 두 자리는 블러 처리해 정확한 시기는 궁금하게
function PartialBlurYearTick({
  x,
  y,
  payload,
}: {
  x?: number;
  y?: number;
  payload?: { value: string };
}) {
  const value = payload?.value ?? "";
  if (!value) return null;
  const prefix = value.slice(0, 2);
  const suffix = value.slice(2);
  return (
    <text x={x} y={y} dy={16} textAnchor="middle" fontSize={12} fontWeight={700}>
      <tspan fill="#ffffff">{prefix}</tspan>
      <tspan fill="#ffffff" style={{ filter: "blur(3px)" }}>
        {suffix}
      </tspan>
    </text>
  );
}

const peakIndex = data.reduce(
  (best, d, i) => (d.possibility > data[best].possibility ? i : best),
  0
);

// 최고점에만 강조 도트 + "결혼운 최고" 뱃지를 그려주는 커스텀 dot 렌더러
function PeakDot(props: {
  cx?: number;
  cy?: number;
  index?: number;
}) {
  const { cx, cy, index } = props;
  if (index !== peakIndex || cx == null || cy == null) return null;
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="#79A5E8" stroke="#ffffff" strokeWidth={2} />
      <g transform={`translate(${cx}, ${cy - 30})`}>
        <text
          x={0}
          y={4}
          textAnchor="middle"
          fontSize={15}
          fontWeight={800}
          fill="#ffffff"
          style={{
            filter:
              "drop-shadow(0 0 1.5px #5285D4) drop-shadow(0 0 3px #5285D4)",
          }}
        >
          BEST!
        </text>
      </g>
    </g>
  );
}

export function MarriagePossibilityChart() {
  return (
    <ChartContainer config={chartConfig} className="mx-auto max-h-[240px] w-full">
      <AreaChart data={data} margin={{ left: 20, right: 24, top: 56, bottom: 4 }}>
        <defs>
          <linearGradient id="marriagePossibilityFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5285D4" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#5285D4" stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.1)" />
        <XAxis
          dataKey="year"
          tickLine={false}
          axisLine={false}
          interval={0}
          tick={<PartialBlurYearTick />}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Area
          dataKey="possibility"
          type="natural"
          fill="url(#marriagePossibilityFill)"
          stroke="#79A5E8"
          strokeWidth={2.5}
          dot={<PeakDot />}
          activeDot={false}
        />
      </AreaChart>
    </ChartContainer>
  );
}
