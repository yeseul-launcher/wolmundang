"use client";

import { useRouter } from "next/navigation";
import { IntroHero } from "@/components/intro/IntroHero";
import { IntroCTA } from "@/components/intro/IntroCTA";

export default function IntroPage() {
  const router = useRouter();

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[440px] overflow-x-clip bg-[var(--hero-background)] text-foreground shadow-2xl">
      <main className="relative flex min-h-dvh w-full flex-col overflow-hidden">
        <IntroHero
          title="남심도령"
          subtitleLines={[
            "남자의 마음은 남자가 잘 아는 법!",
            "내가 꿰뚫어 봐줄게",
          ]}
        />
        <IntroCTA
          label="그 남자의 마음 훔쳐보기"
          onClick={() => router.push("/onboarding")}
        />
      </main>
    </div>
  );
}
