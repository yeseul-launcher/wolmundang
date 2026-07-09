import { Fragment } from "react";

interface Bubble {
  lines: string[];
  width: number;
  height: number;
  fontSize?: number;
  /** 위치 지정 (absolute) */
  position: React.CSSProperties;
}

interface BubbleSectionProps {
  media?:
    | { type: "video"; src: string; aspectRatio: string; poster?: string }
    | { type: "image"; src: string; alt?: string };
  minHeight?: number;
  bubbles: Bubble[];
  paddingTop?: number;
}

function SpeechBubble({ bubble }: { bubble: Bubble }) {
  return (
    <div className="absolute z-20" style={bubble.position}>
      <div
        className="relative"
        style={{ width: bubble.width, height: bubble.height }}
      >
        {/* 그라데이션 테두리 + 밝은 채움 */}
        <div
          className="absolute inset-0"
          style={{
            borderRadius: "50%",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(0,0,0,0.35))",
            padding: 2,
          }}
        >
          <div
            className="h-full w-full"
            style={{ borderRadius: "50%", background: "#d9d9d9" }}
          />
        </div>
        {/* 대사 */}
        <div
          className="absolute inset-0 flex items-center justify-center text-center font-bold leading-[1.4] text-[#1a1a1a]"
          style={{ fontSize: bubble.fontSize ?? 15, borderRadius: "50%" }}
        >
          <span>
            {bubble.lines.map((line, i) => (
              <Fragment key={i}>
                {line}
                {i < bubble.lines.length - 1 && <br />}
              </Fragment>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export function BubbleSection({
  media,
  minHeight,
  bubbles,
  paddingTop = 100,
}: BubbleSectionProps) {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#1a1a1f]"
      style={{ paddingTop, minHeight }}
    >
      {media?.type === "video" && (
        <video
          className="block w-full"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={media.poster}
          style={{ aspectRatio: media.aspectRatio }}
        >
          <source src={media.src} type="video/mp4" />
        </video>
      )}
      {media?.type === "image" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={media.src} alt={media.alt ?? ""} className="block w-full" />
      )}

      {/* 상단/하단 그라데이션 페이드 */}
      {media && (
        <>
          <div
            className="pointer-events-none absolute left-0 right-0"
            style={{
              top: paddingTop,
              height: 100,
              background:
                "linear-gradient(to bottom, #1a1a1f 0%, transparent 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-[150px]"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, #1a1a1f 100%)",
            }}
          />
        </>
      )}

      {bubbles.map((b, i) => (
        <SpeechBubble key={i} bubble={b} />
      ))}
    </section>
  );
}
