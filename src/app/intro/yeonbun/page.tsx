"use client";

import { useRouter } from "next/navigation";
import { IntroHero } from "@/components/intro/IntroHero";
import { IntroCTA } from "@/components/intro/IntroCTA";

export default function YeonbunIntroPage() {
  const router = useRouter();

  return (
    <div className="theme-yeonbun relative mx-auto min-h-screen w-full max-w-[440px] overflow-x-clip bg-[var(--hero-background)] text-foreground shadow-2xl">
      <main className="relative flex min-h-dvh w-full flex-col overflow-hidden">
        <IntroHero
          title="연분선녀"
          subtitleLines={["두 사람의 인연,", "그 끝이 어딜지 봐줄게"]}
          videoSrc="/yeonbun/yeonbun-hero.mp4"
          poster="/images/yeonbun-hero-poster.jpg"
        />
        <IntroCTA
          label="우리 궁합 확인하기"
          onClick={() => router.push("/yeonbun")}
        />
      </main>
    </div>
  );
}
