"use client";

import { useRouter } from "next/navigation";
import { IntroHero } from "@/components/intro/IntroHero";
import { IntroCTA } from "@/components/intro/IntroCTA";

export default function DohwaIntroPage() {
  const router = useRouter();

  return (
    <div className="theme-dohwa relative mx-auto min-h-screen w-full max-w-[440px] overflow-x-clip bg-[var(--hero-background)] text-foreground shadow-2xl">
      <main className="relative flex min-h-dvh w-full flex-col overflow-hidden">
        <IntroHero
          title="도화선녀"
          subtitleLines={["타고난 네 매력, 도화살", "언니가 제대로 봐줄게"]}
          videoSrc="/dohwa/dohwa-hero.mp4"
          poster="/images/dohwa-hero-poster.jpg"
        />
        <IntroCTA
          label="내 도화살 매력 확인하기"
          onClick={() => router.push("/dohwa")}
        />
      </main>
    </div>
  );
}
