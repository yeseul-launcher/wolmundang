"use client";

import { useEffect, useState } from "react";

const MASKED_NAMES = [
  "김*수",
  "이*희",
  "박*진",
  "최*연",
  "정*원",
  "강*희",
  "조*은",
  "윤*아",
  "장*호",
  "임*빈",
  "한*결",
  "서*라",
];

const MESSAGE_TEMPLATES = [
  "{name}님이 궁합 확인 중",
  "{name}님이 상대방 속마음 엿보는 중",
  "{name}님이 재회 가능성 보는 중",
  "{name}님이 그 사람 진심 확인 중",
  "{name}님이 결혼 시기 보는 중",
  "{name}님이 짝사랑 성공 확률 보는 중",
  "{name}님이 궁합 점수 보는 중",
  "{name}님이 헤어진 이유 확인 중",
];

function randomMessage() {
  const name = MASKED_NAMES[Math.floor(Math.random() * MASKED_NAMES.length)];
  const template =
    MESSAGE_TEMPLATES[Math.floor(Math.random() * MESSAGE_TEMPLATES.length)];
  return template.replace("{name}", name);
}

interface IntroCTAProps {
  label: string;
  onClick?: () => void;
}

export function IntroCTA({ label, onClick }: IntroCTAProps) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(randomMessage());
    const interval = setInterval(() => {
      setMessage(randomMessage());
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex justify-center">
      <div className="relative w-full max-w-[440px] px-6 pb-[max(16px,env(safe-area-inset-bottom))]">
        {/* 로테이팅 토스트 */}
        <div className="pointer-events-none absolute -top-[26px] left-1/2 z-10 -translate-x-1/2">
          <div
            className="flex items-center justify-center rounded-[14px] bg-black/85 px-4 py-[10.5px] shadow-[0px_10px_30px_rgba(0,0,0,0.35)]"
            style={{ animation: "toastFloat 2.8s ease-in-out infinite" }}
          >
            <p
              key={message}
              className="whitespace-nowrap text-center text-[13px] font-semibold leading-none text-white/90"
              style={{ animation: "toastPop 0.45s cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              <span className="mr-1 tossface">❤️</span>
              {message}
            </p>
          </div>
        </div>

        {/* CTA 버튼 (온보딩 하단 버튼과 동일 디자인) */}
        <button
          type="button"
          onClick={onClick}
          className="w-full rounded-lg bg-primary py-4 text-base font-semibold text-white transition-opacity outline-none focus:outline-none"
        >
          {label}
        </button>
      </div>
    </div>
  );
}
