import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { DemoCta } from "@/components/demo-cta";

export const metadata: Metadata = {
  title: "Birdeye Peak vs. Amberdata — Solana On-Chain Intelligence vs. Broad Digital Asset Data",
  description: "Amberdata covers the full digital asset data landscape. Birdeye Peak owns the Solana on-chain DEX intelligence lane — real-time liquidity depth, wallet intelligence, and pre-trade signals Amberdata's infrastructure doesn't reach.",
};

type Status = "full" | "partial" | "none";
function StatusIcon({ status, label }: { status: Status; label?: string }) {
  if (status === "full") return <span className="flex items-center justify-center gap-1.5 flex-wrap"><CheckCircle className="w-4 h-4 text-[var(--color-success)]" />{label && <span className="text-xs text-[var(--color-success)]">{label}</span>}</span>;
  if (status === "none") return <span className="flex items-center justify-center gap-1.5 flex-wrap"><XCircle className="w-4 h-4 text-[var(--color-danger)]" />{label && <span className="text-xs text-[var(--color-danger)]">{label}</span>}</span>;
  return <span className="flex items-center justify-center gap-1.5 flex-wrap"><Minus className="w-4 h-4 text-[var(--color-warning)]" />{label && <span className="text-xs text-[var(--color-warning)]">{label}</span>}</span>;
}

const comparisonSections = [
  {
    heading: "On-Chain & DeFi Coverage",
    rows: [
      { label: "Ethereum DEX coverage (Uniswap, Sushiswap, Curve)", amber: "full" as Status, amberLabel: "Strong", peak: "full" as Status, highlight: false },
      { label: "Ethereum DeFi (lending, staking, yield)", amber: "full" as Status, amberLabel: "Strong", peak: "partial" as Status, highlight: false },
      { label: "Solana DEX liquidity depth (Raydium, Orca, Jupiter)", amber: "none" as Status, amberLabel: "Not in coverage docs", peak: "full" as Status, peakLabel: "Core product", highlight: true },
      { label: "Real-time Solana DEX pool analytics", amber: "none" as Status, amberLabel: "Not covered", peak: "full" as Status, peakLabel: "Core product", highlight: true },
      { label: "Solana on-chain market structure", amber: "none" as Status, amberLabel: "Not covered", peak: "full" as Status, peakLabel: "Core product", highlight: true },
      { label: "Liquidity migration event detection (Solana)", amber: "none" as Status, amberLabel: "Not covered", peak: "full" as Status, peakLabel: "Real-time", highlight: true },
      { label: "Multi-chain on-chain coverage", amber: "partial" as Status, amberLabel: "ETH-centric", peak: "full" as Status, peakLabel: "Solana-native + 8 chains", highlight: false },
      { label: "RWA on-chain data", amber: "partial" as Status, amberLabel: "ETH/Tron", peak: "full" as Status, peakLabel: "Solana + multi-chain", highlight: false },
    ],
  },
  {
    heading: "Wallet & Smart Money Intelligence",
    rows: [
      { label: "Wallet intelligence (general)", amber: "partial" as Status, amberLabel: "ETH-centric", peak: "full" as Status, peakLabel: "Solana + multi-chain", highlight: false },
      { label: "Solana wallet tracking & smart money signals", amber: "none" as Status, amberLabel: "Limited", peak: "full" as Status, peakLabel: "Core product", highlight: true },
      { label: "Entity-labeled smart money wallets (Solana)", amber: "none" as Status, amberLabel: "Not covered", peak: "full" as Status, highlight: true },
      { label: "Holder distribution & concentration analysis", amber: "partial" as Status, peak: "full" as Status, highlight: false },
      { label: "Token vesting & unlock schedules", amber: "partial" as Status, peak: "full" as Status, highlight: false },
    ],
  },
  {
    heading: "Analytics & Intelligence",
    rows: [
      { label: "AI-powered market intelligence platform", amber: "full" as Status, amberLabel: "Amberdata Intelligence", peak: "none" as Status, peakLabel: "Data-first", highlight: false },
      { label: "Derivatives & options analytics", amber: "full" as Status, amberLabel: "Best-in-class", peak: "full" as Status, highlight: false },
      { label: "Historical data depth", amber: "full" as Status, amberLabel: "13+ years", peak: "full" as Status, highlight: false },
      { label: "Pre-trade on-chain due diligence workflow", amber: "none" as Status, amberLabel: "Not a use case", peak: "full" as Status, peakLabel: "Core use case", highlight: true },
      { label: "Market regime analysis", amber: "full" as Status, amberLabel: "Strong", peak: "partial" as Status, highlight: false },
    ],
  },
  {
    heading: "Data Infrastructure",
    rows: [
      { label: "REST API", amber: "full" as Status, peak: "full" as Status, highlight: false },
      { label: "WebSocket / real-time streams", amber: "full" as Status, peak: "full" as Status, highlight: false },
      { label: "Cloud delivery (Snowflake, Databricks, S3)", amber: "full" as Status, amberLabel: "Strong", peak: "full" as Status, highlight: false },
      { label: "SOC-2 compliance", amber: "full" as Status, peak: "full" as Status, highlight: false },
      { label: "Institutional uptime SLA", amber: "full" as Status, amberLabel: "99.99%", peak: "full" as Status, peakLabel: "99.9%", highlight: false },
    ],
  },
];

export default function VsAmberdataPage() {
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
            <span className="text-[var(--color-text-secondary)]">Peak vs. Amberdata</span>
          </nav>

          {/* VS badge */}
          <div className="flex items-center justify-center gap-6 mb-10">
            <div className="rounded-xl border border-[var(--color-accent-border)] bg-[var(--color-accent-dim)] px-5 py-3">
              <span className="text-sm font-mono font-bold text-[var(--color-accent)]">Birdeye Peak</span>
            </div>
            <span className="text-2xl font-mono text-[var(--color-text-tertiary)]">vs</span>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3">
              <span className="text-sm font-mono font-bold text-[var(--color-text-secondary)]">Amberdata</span>
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-semibold text-[var(--color-text-primary)] leading-tight mb-5">
            Amberdata Covers the Data Landscape.<br />Peak Owns the Solana On-Chain Lane.
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8">
            Amberdata delivers comprehensive historical data, AI-driven analytics, and broad digital asset coverage. Birdeye Peak delivers what Amberdata&apos;s Ethereum-centric infrastructure cannot: real-time Solana DEX liquidity intelligence and pre-trade on-chain due diligence.
          </p>
          <Link href="/demo" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-[#0d0f14] font-semibold rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors text-sm">
            Request a Peak Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── SUMMARY ──────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-7">
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-3">Amberdata</p>
              <p className="font-semibold text-[var(--color-text-primary)] mb-4">Comprehensive digital asset data infrastructure with AI-driven intelligence.</p>
              <ul className="space-y-2.5">
                {[
                  "Broad historical and real-time coverage: markets, blockchain (ETH-centric), DeFi, derivatives, RWA, stablecoins",
                  "AI-driven market intelligence platform with natural language queries and no-code dashboards",
                  "Strong institutional reach: compliance, research, front/mid/back office use cases",
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
                  "Purpose-built Solana DEX intelligence: real-time liquidity depth, pool-level analytics for Raydium, Orca, Jupiter",
                  "Wallet intelligence: smart money tracking, entity labeling, accumulation/distribution signal interpretation",
                  "Pre-trade intelligence: on-chain due diligence layer for institutional token entry decisions",
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

      {/* ── THE DISTINCTION ──────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel>Where the Coverage Diverges</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] leading-tight mb-5">
          Amberdata&apos;s DeFi coverage is Ethereum-first. Solana&apos;s DEX ecosystem is a different layer.
        </h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
          Amberdata has built strong coverage of Ethereum-native DeFi protocols — Uniswap v2/v3, Sushiswap, Curve, Aave. Its derivatives analytics, options intelligence, and historical data depth are industry-leading for ETH-centric institutional workflows.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
          Solana&apos;s on-chain DEX ecosystem operates under structurally different mechanics: sub-second block times, CLMM pool architecture, a distinct smart money ecosystem, and protocol evolution speed that requires purpose-built, Solana-native infrastructure.
        </p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          Amberdata&apos;s documented DEX coverage lists Ethereum protocols — with no Solana DEXes (Raydium, Orca, or Jupiter) in its data dictionary as of Q1 2026. Birdeye Peak fills that gap — with Solana as the primary authority zone.
        </p>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <SectionLabel>Head-to-Head Comparison</SectionLabel>
            <h2 className="text-3xl font-semibold text-[var(--color-text-primary)]">Side by side — where each platform&apos;s coverage begins and ends.</h2>
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
                      <th className="text-center w-1/4">Amberdata</th>
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
                          <StatusIcon status={row.amber} label={row.amberLabel} />
                        </td>
                        <td className="text-center">
                          <StatusIcon status={row.peak} label={row.peakLabel} />
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

      {/* ── DECISION GUIDE ───────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <SectionLabel>Decision Guide</SectionLabel>
          <h2 className="text-3xl font-semibold text-[var(--color-text-primary)]">Different coverage zones. Different intelligence layers.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
            <p className="text-sm font-mono font-bold text-[var(--color-text-secondary)] mb-4">Use Amberdata when:</p>
            <ul className="space-y-3">
              {[
                "Your primary need is comprehensive historical digital asset data — 13+ years of tick-level market and derivatives data",
                "You are running Ethereum-centric DeFi research (Uniswap, Aave, Curve) alongside traditional market data",
                "Your team needs AI-powered natural language queries and no-code dashboards for research workflows",
                "You are building derivatives or options analytics on a comprehensive multi-asset historical data set",
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
                "Your investment or execution workflow involves Solana on-chain DEX positions requiring real-time pool-level liquidity data",
                "You need pre-trade on-chain due diligence — wallet concentration, smart money signals, vesting schedules",
                "Your risk team needs a real-time on-chain signal layer for Solana positions that operates independently of CEX price data",
                "You require Solana-native data infrastructure (Raydium, Orca, Jupiter pool data) at institutional depth",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-text-secondary)]">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Complementary */}
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-dim)] border border-[var(--color-accent-border)] flex items-center justify-center shrink-0">
              <CheckCircle className="w-4 h-4 text-[var(--color-accent)]" />
            </div>
            <div>
              <p className="font-semibold text-[var(--color-text-primary)] mb-1">The intelligence stacks are complementary.</p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Teams with broad digital asset research needs (ETH DeFi, derivatives, compliance) and Solana on-chain execution activity may find value in both platforms. Amberdata for historical depth and broad coverage. Peak for real-time Solana DEX intelligence and pre-trade signal interpretation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLANA DEPTH STATS ───────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--color-surface-2)]">
                  <th className="text-left px-6 py-3 text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">Metric</th>
                  <th className="text-center px-6 py-3 text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">Amberdata</th>
                  <th className="text-center px-6 py-3 text-xs font-mono uppercase tracking-widest text-[var(--color-accent)]">Birdeye Peak</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Listed Solana DEXes in data dictionary", amber: "0 (as of Q1 2026)", peak: "12+ (Raydium, Orca, Jupiter + more)" },
                  { metric: "Real-time Solana pool-level liquidity depth", amber: "Not covered", peak: "Sub-second updates" },
                  { metric: "Solana smart money wallet tracking", amber: "Not covered", peak: "50,000+ wallets monitored" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[var(--color-surface)]" : "bg-[var(--color-surface-2)]/30"}>
                    <td className="px-6 py-4 text-sm text-[var(--color-text-secondary)]">{row.metric}</td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm font-mono text-[var(--color-danger)]">{row.amber}</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm font-mono text-[var(--color-accent)] font-bold">{row.peak}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--color-text-tertiary)] font-mono mt-3 text-center">
            * Amberdata DEX coverage based on docs.amberdata.io/data-dictionary/coverage/coverage-defi-dex as of Q1 2026. Verify at time of evaluation.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
          &ldquo;Amberdata is part of our broader data stack for ETH-side coverage and historical research. But for Solana on-chain intelligence — DEX liquidity, wallet tracking, pre-trade due diligence — Birdeye Peak is the only platform that covers it at the depth our investment team requires.&rdquo;
        </p>
        <p className="text-sm font-medium text-[var(--color-text-primary)]">[Head of Quantitative Research]</p>
        <p className="text-xs text-[var(--color-text-tertiary)] font-mono mt-0.5">[Institutional Fund]</p>
      </section>

      <DemoCta
        headline="See the Solana on-chain intelligence that Amberdata's infrastructure doesn't reach."
        subheadline="Request a demo to see Peak's Solana DEX liquidity depth, wallet intelligence, and pre-trade capabilities live."
        secondaryLabel="Explore On-Chain Intelligence"
        secondaryHref="/platform/on-chain-intelligence"
      />
    </>
  );
}
