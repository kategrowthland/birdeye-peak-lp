import { cn } from "@/lib/utils";

export function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn(
      "text-xs font-mono uppercase tracking-[0.15em] text-[var(--color-accent)] mb-3",
      className
    )}>
      {children}
    </p>
  );
}
