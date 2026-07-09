"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const data = [
  { trait: "애정표현", value: 82 },
  { trait: "소통", value: 64 },
  { trait: "신뢰", value: 71 },
  { trait: "스킨십", value: 88 },
  { trait: "안정감", value: 58 },
  { trait: "케미", value: 90 },
];

const chartConfig = {
  value: {
    label: "연애 유형",
    color: "#5285D4",
  },
} satisfies ChartConfig;

// 축 라벨(항목명)은 블러 처리해서 궁금증을 유발.
// CSS filter는 iOS Safari에서 SVG 텍스트에 안 먹혀서 SVG 네이티브 필터로 처리.
function BlurredTraitTick({
  x,
  y,
  textAnchor,
  index,
  payload,
}: {
  x?: number;
  y?: number;
  textAnchor?: "start" | "middle" | "end" | "inherit";
  index?: number;
  payload?: { value: string };
}) {
  return (
    <g>
      {index === 0 && (
        <defs>
          <filter
            id="trait-blur"
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="2.6" />
          </filter>
        </defs>
      )}
      <text
        x={x}
        y={y}
        textAnchor={textAnchor}
        fill="#ffffff"
        fontSize={12}
        fontWeight={700}
        filter="url(#trait-blur)"
      >
        {payload?.value}
      </text>
    </g>
  );
}

export function LoveTypeRadarChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[280px] w-full"
    >
      <RadarChart data={data} outerRadius="75%">
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <PolarGrid stroke="rgba(255,255,255,0.15)" />
        <PolarAngleAxis dataKey="trait" tick={<BlurredTraitTick />} />
        <Radar
          dataKey="value"
          fill="#5285D4"
          fillOpacity={0.55}
          stroke="#79A5E8"
          strokeWidth={2}
        />
      </RadarChart>
    </ChartContainer>
  );
}
