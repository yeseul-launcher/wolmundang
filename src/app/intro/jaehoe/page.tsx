"use client";

import { useRouter } from "next/navigation";
import { IntroHero } from "@/components/intro/IntroHero";
import { IntroCTA } from "@/components/intro/IntroCTA";

export default function JaehoeIntroPage() {
  const router = useRouter();

  return (
    <div className="theme-jaehoe relative mx-auto min-h-screen w-full max-w-[440px] overflow-x-clip bg-[var(--hero-background)] text-foreground shadow-2xl">
      <main className="relative flex min-h-dvh w-full flex-col overflow-hidden">
        <IntroHero
          title="재회여신"
          subtitleLines={["끊어진 그 인연,", "다시 이어질지 봐줄게"]}
          videoSrc="/jaehoe/jaehoe-hero.mp4"
          poster="/images/jaehoe-hero-poster.jpg"
        />
        <IntroCTA
          label="재회 가능성 확인하기"
          onClick={() => router.push("/jaehoe")}
        />
      </main>
    </div>
  );
}
