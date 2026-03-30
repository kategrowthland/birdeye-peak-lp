import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium tracking-wide",
        variant === "default" && "bg-white/5 text-[var(--color-text-secondary)] border border-[var(--color-border)]",
        variant === "accent" && "bg-[var(--color-accent-dim)] text-[var(--color-accent)] border border-[var(--color-accent-border)]",
        variant === "outline" && "border border-[var(--color-border-strong)] text-[var(--color-text-secondary)]",
        className
      )}
    >
      {children}
    </span>
  );
}
