export function BlurWord({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-[3px]"
      style={{ filter: "blur(2.5px)", userSelect: "none" }}
      aria-hidden
    >
      {children}
    </span>
  );
}
