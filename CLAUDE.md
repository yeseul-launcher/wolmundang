<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 월문당 리디자인

## What This Is
월문당 상세페이지/리포트페이지 리디자인 프로젝트. `clone-website` 스킬로 기존 페이지를 리버스엔지니어링해서 Next.js 코드베이스로 재구축한다.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **UI:** shadcn/ui (Radix primitives, Tailwind CSS v4, `cn()` utility)
- **Icons:** Lucide React (기본값, 추출한 SVG로 대체/보강)
- **Styling:** Tailwind CSS v4, oklch 디자인 토큰
- HTML 단독 작업 금지, 무조건 React/Next.js 컴포넌트로 작성

## Commands
- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript 체크
- `npm run check` — lint + typecheck + build

## Code Style
- TypeScript strict mode, `any` 금지
- Named exports, PascalCase 컴포넌트, camelCase 유틸
- Tailwind 유틸리티 클래스, inline style 금지
- 2-space indent, 모바일 퍼스트 반응형

## Design Principles
- 픽셀 퍼펙트 에뮬레이션 — 기존 페이지의 여백/컬러/타이포 그대로 매칭 먼저
- 실제 콘텐츠 사용 — placeholder 아닌 실제 텍스트/에셋
- 에뮬레이션 단계에서는 임의로 취향 바꾸지 않기, 1:1 매칭 후 커스터마이즈

## Project Structure
```
src/
  app/              # Next.js routes (상세페이지, 리포트페이지)
  components/       # React 컴포넌트
    ui/             # shadcn/ui primitives
    icons.tsx       # 추출한 SVG 아이콘
  lib/
    utils.ts        # cn() 유틸 (shadcn)
  types/            # TypeScript 인터페이스
  hooks/            # 커스텀 훅
public/
  images/           # 원본 페이지에서 받은 이미지
  videos/
  seo/              # 파비콘, OG 이미지
docs/
  research/         # 인스펙션 산출물 (디자인 토큰, 컴포넌트 스펙)
  design-references/ # 스크린샷/비주얼 레퍼런스
scripts/            # 에셋 다운로드 스크립트
```

## 작업 순서
1. 상세페이지 먼저
2. 완료 후 리포트페이지

## 참고
- 에이전트 팀으로 작업할 땐 각자 worktree 브랜치에서 작업 후 병합
