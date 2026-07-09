"use client";

import { useRef, useState } from "react";
import { Star } from "lucide-react";
import type { Review } from "@/types/review";

function ReviewCard({ review }: { review: Review }) {
  return (
    <div
      className="w-[280px] shrink-0 snap-start rounded-[14px] p-[18px]"
      style={{
        background: "rgba(255,255,255,0.06)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.08) inset",
      }}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-black/40">
          <span className="tossface text-[22px] leading-none">{review.avatar}</span>
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold text-white">
                {review.email}
              </p>
              <p className="mt-0.5 truncate text-[13px] text-white/60">
                {review.ilju}
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-0.5">
              <div className="flex items-center gap-0.5">
                <Star className="h-3 w-3 fill-[#C9A961] text-[#C9A961]" />
                <span className="text-[12px] font-semibold text-white/80">
                  {review.rating.toFixed(1)}
                </span>
              </div>
              <span className="text-[11px] text-white/40">{review.date}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-3 w-full text-[13px] leading-[1.6] text-white/75 break-keep">
        {review.body}
      </p>
    </div>
  );
}

interface ReviewSectionProps {
  brandName: string;
  rating: number;
  count: number;
  reviews: Review[];
}

export function ReviewSection({
  brandName,
  rating,
  count,
  reviews,
}: ReviewSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 280 + 12; // w-[280px] + gap-[12px]
    setPage(Math.round(el.scrollLeft / cardWidth));
  };

  return (
    <section className="w-full bg-[#1a1a1f] px-4 pt-8 pb-12">
      <div className="text-center">
        <p className="text-[22px] font-bold text-white">리뷰</p>
        <div className="mt-2 flex items-center justify-center gap-1.5">
          <Star className="h-4 w-4 fill-[#C9A961] text-[#C9A961]" />
          <span className="text-[15px] font-bold text-white">
            {rating.toFixed(1)}
          </span>
          <span className="text-[14px] text-white/50">({count}개)</span>
        </div>
        <p className="mt-2 text-[15px] font-medium text-white/70 break-keep">
          {brandName} 유저들의 200% 실제 후기입니다.
          <br />
          다른 유저들이 인정한 압도적인 정확성을 확인하세요!
        </p>
      </div>

      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="mt-6 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>

      <p className="mt-4 text-center text-[13px] font-medium text-white/40">
        {page + 1} / {reviews.length}
      </p>
    </section>
  );
}
