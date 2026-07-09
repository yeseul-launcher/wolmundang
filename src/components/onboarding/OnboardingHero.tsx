"use client";

import { ChevronLeft } from "lucide-react";

interface OnboardingHeroProps {
  characterName: string;
  subtitle: string;
  onBack?: () => void;
}

export function OnboardingHero({
  characterName,
  subtitle,
  onBack,
}: OnboardingHeroProps) {
  return (
    <div className="absolute inset-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/namsim-hero-poster.jpg"
        className="h-full w-full object-cover object-top"
      >
        <source src="/videos/namsim-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[image:var(--hero-gradient)]" />
      <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 pt-4">
        <button
          type="button"
          aria-label="뒤로가기"
          onClick={onBack}
          className="flex h-9 w-9 items-center justify-center"
        >
          <ChevronLeft className="h-5 w-5 text-white" strokeWidth={2} />
        </button>
        <span className="font-sans text-sm font-medium text-white/50">
          {characterName} {subtitle}
        </span>
        <div className="w-9" />
      </div>
    </div>
  );
}
