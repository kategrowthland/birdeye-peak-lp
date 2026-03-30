import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { DemoCta } from "@/components/demo-cta";

export const metadata: Metadata = {
  title: "Birdeye Peak vs. Kaiko — On-Chain Intelligence vs. CEX Market Data",
  description: "Kaiko delivers best-in-class centralized exchange market data. Birdeye Peak covers what Kaiko can't: real-time Solana DEX liquidity, on-chain market structure, and wallet-level intelligence.",
};

type Status = "full" | "partial" | "none";
function StatusIcon({ status, label }: { status: Status; label?: string }) {
  if (status === "full") return <span className="flex items-center justify-center gap-1.5"><CheckCircle className="w-4 h-4 text-[var(--color-success)]" />{label && <span className="text-xs text-[var(--color-success)]">{label}</span>}</span>;
  if (status === "none") return <span className="flex items-center justify-center gap-1.5"><XCircle className="w-4 h-4 text-[var(--color-danger)]" />{label && <span className="text-xs text-[var(--color-danger)]">{label}</span>}</span>;
  return <span className="flex items-center justify-center gap-1.5"><Minus className="w-4 h-4 text-[var(--color-warning)]" />{label && <span className="text-xs text-[var(--color-warning)]">{label}</span>}</span>;
}

const comparisonSections = [
  {
    heading: "Market Data Coverage",
    rows: [
      { label: "Centralized exchange trade data (400+ CEXes)", kaiko: "full" as Status, kaikoLabel: "Best-in-class", peak: "full" as Status, highlight: false },
      { label: "CEX order book data (Level 2)", kaiko: "full" as Status, kaikoLabel: "Best-in-class", peak: "full" as Status, highlight: false },
      { label: "Normalized cross-exchange pricing", kaiko: "full" as Status, kaikoLabel: "Best-in-class", peak: "full" as Status, highlight: false },
      { label: "Derivatives & futures data (CEX)", kaiko: "full" as Status, kaikoLabel: "Strong", peak: "full" as Status, highlight: false },
      { label: "Reference rates & custom indices", kaiko: "full" as Status, kaikoLabel: "Best-in-class", peak: "partial" as Status, highlight: false },
      { label: "Solana DEX liquidity depth (real-time)", kaiko: "none" as Status, kaikoLabel: "Not covered", peak: "full" as Status, highlight: true },
      { label: "Solana DEX market structure", kaiko: "none" as Status, kaikoLabel: "Not covered", peak: "full" as Status, highlight: true },
      { label: "Raydium / Orca / Jupiter pool data", kaiko: "none" as Status, kaikoLabel: "Not covered", peak: "full" as Status, highlight: true },
      { label: "Ethereum DEX data", kaiko: "partial" as Status, peak: "full" as Status, highlight: false },
      { label: "Multi-chain on-chain coverage", kaiko: "none" as Status, kaikoLabel: "Limited", peak: "full" as Status, kaikoLabel2: "8+ chains", highlight: false },
    ],
  },
  {
    heading: "Intelligence Layer",
    rows: [
      { label: "Wallet intelligence & smart money tracking", kaiko: "none" as Status, kaikoLabel: "Not covered", peak: "full" as Status, highlight: true },
      { label: "Holder distribution & concentration analysis", kaiko: "none" as Status, kaikoLabel: "Not covered", peak: "full" as Status, highlight: true },
      { label: "Pre-trade on-chain due diligence", kaiko: "none" as Status, kaikoLabel: "Not covered", peak: "full" as Status, highlight: true },
      { label: "Token vesting & unlock schedules", kaiko: "none" as Status, kaikoLabel: "Not covered", peak: "full" as Status, highlight: true },
      { label: "Liquidity migration event detection", kaiko: "none" as Status, kaikoLabel: "Not covered", peak: "full" as Status, highlight: true },
    ],
  },
  {
    heading: "Analytics & Compliance",
    rows: [
      { label: "AML / KYT monitoring (CEX-based)", kaiko: "full" as Status, kaikoLabel: "Strong", peak: "partial" as Status, highlight: false },
      { label: "Market surveillance", kaiko: "full" as Status, kaikoLabel: "Dedicated product", peak: "partial" as Status, highlight: false },
      { label: "IOSCO-compliant reference rates", kaiko: "full" as Status, peak: "none" as Status, highlight: false },
      { label: "Fair market value pricing", kaiko: "full" as Status, peak: "full" as Status, highlight: false },
      { label: "SOC-2 compliance", kaiko: "full" as Status, peak: "full" as Status, highlight: false },
    ],
  },
];

export default function VsKaikoPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs font-mono text-[var(--color-text-tertiary)] mb-8">
            <Link href="/" className="hover:text-[var(--color-text-secondary)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--color-text-secondary)]">Compare</span>
            <span>/</span>
            <span className="text-[var(--color-text-secondary)]">Peak vs. Kaiko</span>
          </nav>

          {/* VS badge */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="rounded-xl border border-[var(--color-accent-border)] bg-[var(--color-accent-dim)] px-5 py-3">
              <span className="text-sm font-mono font-bold text-[var(--color-accent)]">Birdeye Peak</span>
            </div>
            <span className="text-2xl font-mono text-[var(--color-text-tertiary)]">vs</span>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3">
              <span className="text-sm font-mono font-bold text-[var(--color-text-secondary)]">Kaiko</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-semibold text-[var(--color-text-primary)] leading-tight mb-5">
            Kaiko Shows You the Exchange.<br />Peak Shows You the On-Chain Truth.
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8">
            Kaiko is the institutional standard for centralized exchange market data. Birdeye Peak is built for the on-chain intelligence layer that CEX data cannot provide — particularly across Solana&apos;s DEX ecosystem. Many institutional desks use both.
          </p>
          <Link href="/demo" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-[#0d0f14] font-semibold rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors text-sm">
            Request a Peak Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── ONE-LINE SUMMARY ─────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-7">
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-3">Kaiko</p>
              <p className="font-semibold text-[var(--color-text-primary)] mb-4">Institutional CEX market data infrastructure.</p>
              <ul className="space-y-2.5">
                {[
                  "Best-in-class normalized trade, order book, and pricing data from 400+ centralized exchanges",
                  "Custom indices, reference rates, and benchmarking products for derivatives settlement",
                  "Strong regulatory compliance tooling: AML/KYT, market surveillance, IOSCO-compliant rates",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-text-tertiary)] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-[var(--color-accent-border)] bg-[var(--color-accent-dim)] p-7">
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-3">Birdeye Peak</p>
              <p className="font-semibold text-[var(--color-text-primary)] mb-4">Institutional on-chain intelligence, Solana-native.</p>
              <ul className="space-y-2.5">
                {[
                  "Real-time DEX liquidity depth, on-chain market structure, and pool-level analytics for Solana and multi-chain",
                  "Wallet intelligence: smart money tracking, holder distribution, entity-labeled flows",
                  "Pre-trade and execution intelligence purpose-built for on-chain position management",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── STRUCTURAL GAP ───────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel>Why This Comparison Matters</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] leading-tight mb-5">
          On-chain DeFi and centralized exchanges are different markets with different mechanics.
        </h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
          Kaiko&apos;s institutional strength is in centralized exchange data: normalized, high-frequency, deeply historical. It is well-suited for compliance reporting, benchmark construction, and CEX-based derivatives analytics.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          The institutional capital allocator who needs to evaluate or execute in Solana&apos;s on-chain DEX ecosystem — Raydium, Orca, Jupiter — is operating in a market that Kaiko was not built to cover. The question is not which provider is better. It is which provider covers the intelligence you need for the decision you&apos;re making.
        </p>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <SectionLabel>Head-to-Head Comparison</SectionLabel>
            <h2 className="text-3xl font-semibold text-[var(--color-text-primary)]">What each platform covers — and where the gaps are.</h2>
          </div>

          <div className="space-y-8">
            {comparisonSections.map((section) => (
              <div key={section.heading} className="rounded-2xl border border-[var(--color-border)] overflow-hidden">
                <div className="bg-[var(--color-surface-2)] px-6 py-3 border-b border-[var(--color-border)]">
                  <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">{section.heading}</p>
                </div>
                <table className="w-full comparison-table">
                  <thead>
                    <tr className="bg-[var(--color-surface-2)]/50">
                      <th className="text-left w-1/2">Capability</th>
                      <th className="text-center w-1/4">Kaiko</th>
                      <th className="text-center w-1/4">Birdeye Peak</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row) => (
                      <tr key={row.label} className={row.highlight ? "highlight-row" : "bg-[var(--color-surface)]"}>
                        <td className={`text-sm ${row.highlight ? "font-medium text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"}`}>
                          {row.label}
                        </td>
                        <td className="text-center">
                          <StatusIcon status={row.kaiko} label={row.kaikoLabel} />
                        </td>
                        <td className="text-center">
                          <StatusIcon status={row.peak} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHEN TO USE ──────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <SectionLabel>Decision Guide</SectionLabel>
          <h2 className="text-3xl font-semibold text-[var(--color-text-primary)]">Use the right tool for the right intelligence layer.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
            <p className="text-sm font-mono font-bold text-[var(--color-text-secondary)] mb-4">Use Kaiko when:</p>
            <ul className="space-y-3">
              {[
                "Your primary need is normalized, high-frequency CEX trade and order book data",
                "You need IOSCO-compliant reference rates for regulatory reporting or index construction",
                "Your compliance team requires CEX-focused AML/KYT and market surveillance tooling",
                "You're running derivatives analytics built primarily on centralized exchange data",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-text-tertiary)] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-[var(--color-accent-border)] bg-[var(--color-accent-dim)] p-7">
            <p className="text-sm font-mono font-bold text-[var(--color-accent)] mb-4">Use Birdeye Peak when:</p>
            <ul className="space-y-3">
              {[
                "You need real-time Solana DEX liquidity depth for pre-trade or execution analysis",
                "Your investment process requires on-chain due diligence — wallet concentration, smart money signals, vesting schedules",
                "You are monitoring or executing on Solana-native or multi-chain on-chain positions",
                "Your risk team needs an on-chain signal layer that operates independently of CEX price data",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Complementary callout */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-dim)] border border-[var(--color-accent-border)] flex items-center justify-center shrink-0">
              <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text-primary)] mb-1">Many institutional desks run both.</p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Kaiko for CEX market data infrastructure. Birdeye Peak for on-chain intelligence and Solana DEX coverage. The platforms address different layers of the institutional data stack — they are complementary, not competing, for teams with exposure across both market types.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAT STRIP ───────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: "0", label: "Solana DEX protocols in Kaiko's data stack" },
              { value: "12+", label: "Solana DEX protocols covered by Birdeye Peak" },
              { value: "Sub-second", label: "Solana DEX data update frequency on Peak" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-mono font-bold text-[var(--color-accent)] mb-1">{s.value}</div>
                <div className="text-xs text-[var(--color-text-tertiary)]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
          &ldquo;We use Kaiko for our CEX data infrastructure — it&apos;s excellent for what it does. But when we started building Solana on-chain strategies, we needed something different. Birdeye Peak covers the on-chain layer that Kaiko doesn&apos;t touch.&rdquo;
        </p>
        <p className="text-sm font-medium text-[var(--color-text-primary)]">[Head of Data]</p>
        <p className="text-xs text-[var(--color-text-tertiary)] font-mono mt-0.5">[Institutional Fund]</p>
      </section>

      <DemoCta
        headline="Ready to add the on-chain intelligence layer your Kaiko stack is missing?"
        subheadline="Speak with a Birdeye Peak specialist to see the Solana DEX intelligence capability Kaiko doesn't cover."
      />
    </>
  );
}
