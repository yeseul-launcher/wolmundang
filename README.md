# 월문당

월문당 상세페이지/리포트페이지 리디자인 프로젝트.

## Tech Stack

- Next.js 16 (App Router, React 19, TypeScript strict)
- shadcn/ui (Radix primitives + Tailwind CSS v4)
- Lucide React

## 작업 순서

1. 상세페이지 리디자인
2. 리포트페이지 리디자인

## Commands

```bash
npm install
npm run dev    # 개발 서버
npm run build  # 프로덕션 빌드
npm run lint
npm run typecheck
npm run check  # lint + typecheck + build
```

## Project Structure

```
src/
  app/              # Next.js routes
  components/       # React components
    ui/             # shadcn/ui primitives
    icons.tsx       # 추출한 SVG 아이콘
  lib/utils.ts      # cn() 유틸
  types/            # TypeScript 인터페이스
  hooks/            # 커스텀 훅
public/
  images/
  videos/
  seo/
docs/
  research/          # 추출 산출물 & 컴포넌트 스펙
  design-references/ # 스크린샷
```
