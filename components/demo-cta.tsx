import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DemoCtaProps {
  headline?: string;
  subheadline?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function DemoCta({
  headline = "The on-chain layer your current stack is missing.",
  subheadline = "Birdeye Peak integrates into your existing data infrastructure in days, not months. SOC-2 compliant. Enterprise SLA. Solana-native from day one.",
  primaryLabel = "Request a Demo",
  secondaryLabel = "Explore the API Docs",
  secondaryHref = "/developers",
}: DemoCtaProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      {/* grid bg */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      {/* accent glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/50 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] leading-tight mb-4">
          {headline}
        </h2>
        <p className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--color-accent)] text-[#0d0f14] font-semibold rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors text-sm"
          >
            {primaryLabel} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={secondaryHref}
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors underline underline-offset-4 decoration-[var(--color-border-strong)]"
          >
            {secondaryLabel}
          </Link>
        </div>
        <p className="mt-8 text-xs text-[var(--color-text-tertiary)] font-mono">
          No lock-in · Enterprise SLA · Dedicated onboarding
        </p>
      </div>
    </section>
  );
}
