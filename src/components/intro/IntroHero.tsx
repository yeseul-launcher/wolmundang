"use client";

import { ChevronLeft } from "lucide-react";

interface IntroHeroProps {
  title: string;
  subtitleLines: string[];
  videoSrc?: string;
  poster?: string;
  onBack?: () => void;
}

export function IntroHero({
  title,
  subtitleLines,
  videoSrc = "/videos/namsim-hero.mp4",
  poster = "/images/namsim-hero-poster.jpg",
  onBack,
}: IntroHeroProps) {
  return (
    <>
      {/* 풀스크린 배경 영상 (온보딩과 동일 구조) */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="h-full w-full object-cover object-top"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[image:var(--hero-gradient)]" />
      </div>

      {/* 상단 뒤로가기 */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 pt-4">
        <button
          type="button"
          aria-label="뒤로가기"
          onClick={onBack}
          className="grid h-[29px] w-[29px] place-items-center"
        >
          <ChevronLeft className="h-5 w-5 text-white" strokeWidth={2} />
        </button>
        <div className="h-[29px] w-[29px]" />
      </div>

      {/* 타이틀 오버레이 (하단 앵커, CTA/토스트 영역만큼 아래 여백 확보) */}
      <div className="relative z-10 mt-auto px-6 pb-[164px] text-center">
        <p
          className="mx-auto w-[95%] leading-[1.1] tracking-[-0.02em] text-white"
          style={{
            fontFamily: "Yeongwol, serif",
            fontSize: "min(22vw, 92px)",
          }}
        >
          {title}
        </p>
        <p
          className="mt-3"
          style={{
            color: "var(--mun-accent-soft-2)",
            fontFamily: "SolmoeKimDaeGeon, serif",
            fontWeight: 300,
            fontSize: "min(5.2vw, 23px)",
            lineHeight: 1.5,
          }}
        >
          {subtitleLines.map((line, i) => (
            <span
              key={i}
              className="block break-keep"
              style={
                i === 0
                  ? undefined
                  : {
                      opacity: 0,
                      animation: "fadeSlideUp 0.35s ease-out 0.5s forwards",
                    }
              }
            >
              {line}
            </span>
          ))}
        </p>
      </div>
    </>
  );
}
