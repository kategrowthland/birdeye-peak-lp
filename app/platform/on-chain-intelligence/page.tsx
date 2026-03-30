import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, XCircle, Minus } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { DemoCta } from "@/components/demo-cta";

export const metadata: Metadata = {
  title: "On-Chain Intelligence",
  description: "Real-time Solana DEX liquidity depth, on-chain market structure, and token intelligence for institutional capital allocators.",
};

const capabilities = [
  {
    name: "Real-Time DEX Liquidity Depth",
    headline: "Know the true depth before you execute.",
    body: "Pool-level liquidity data for every major Solana DEX pair — bid depth, ask depth, TVL, and estimated slippage curves for institutional order sizes. Updated at sub-second intervals. Not aggregated. Not smoothed. The raw on-chain signal.",
    stat: "Solana trading pairs tracked in real time",
    statValue: "50,000+",
  },
  {
    name: "On-Chain Market Structure Analysis",
    headline: "See the market structure, not just the price.",
    body: "DEX volume concentration by protocol and pool, liquidity migration events, fee tier distribution, and protocol dominance shifts — the structural intelligence that determines whether a move is sustainable or a thin-liquidity anomaly.",
    stat: "DEX protocols monitored across Solana",
    statValue: "12+",
  },
  {
    name: "Token-Level On-Chain Intelligence",
    headline: "Full on-chain context for every token in your universe.",
    body: "Holder distribution (concentration risk, Gini coefficient), token creation and vesting metadata, smart contract audit linkage, liquidity unlock schedules, and transfer velocity — everything your due diligence workflow requires before a position entry.",
    stat: "Solana tokens with full on-chain coverage",
    statValue: "500K+",
  },
  {
    name: "Liquidity Migration Event Detection",
    headline: "Catch pool migrations before they affect execution.",
    body: "Real-time detection of liquidity migration events — when substantial capital shifts between DEX pools, protocols, or chains. Birdeye Peak flags these events, identifies the receiving pool, and estimates the impact on remaining depth.",
    stat: "Average detection latency",
    statValue: "<100ms",
  },
  {
    name: "Multi-Chain Coverage",
    headline: "Solana-native authority. Multi-chain reach.",
    body: "Birdeye Peak's on-chain coverage extends beyond Solana to Ethereum, Base, BNB Chain, Arbitrum, Avalanche, and additional chains — with Solana delivering the highest data granularity and lowest latency.",
    stat: "Chains covered · Solana at highest fidelity",
    statValue: "8+",
  },
  {
    name: "On-Chain Research API (BDS)",
    headline: "Programmatic access to every signal.",
    body: "The full On-Chain Intelligence data stack is available via Birdeye Data Services (BDS) — RESTful endpoints, WebSocket streams for real-time event delivery, and batch exports for quantitative research workflows. Latency SLA included.",
    stat: "API endpoints",
    statValue: "100+",
  },
];

type CoverageStatus = "full" | "partial" | "none";

const coverageRows: { label: string; standard: CoverageStatus; peak: CoverageStatus; highlight?: boolean }[] = [
  { label: "CEX order book data", standard: "full", peak: "full" },
  { label: "Derivatives & options analytics", standard: "full", peak: "full" },
  { label: "Ethereum DEX coverage", standard: "partial", peak: "full" },
  { label: "Solana DEX liquidity depth", standard: "none", peak: "full", highlight: true },
  { label: "Solana on-chain market structure", standard: "none", peak: "full", highlight: true },
  { label: "Real-time pool migration detection", standard: "none", peak: "full", highlight: true },
  { label: "Sub-second Solana DEX data", standard: "none", peak: "full", highlight: true },
  { label: "Wallet-level signal interpretation", standard: "none", peak: "full", highlight: true },
  { label: "Token holder concentration metrics", standard: "partial", peak: "full" },
  { label: "On-chain vesting & unlock schedules", standard: "partial", peak: "full" },
  { label: "Multi-chain on-chain coverage", standard: "partial", peak: "full" },
];

function CoverageIcon({ status }: { status: CoverageStatus }) {
  if (status === "full") return <CheckCircle className="w-4 h-4 text-[var(--color-success)] mx-auto" />;
  if (status === "none") return <XCircle className="w-4 h-4 text-[var(--color-danger)] mx-auto" />;
  return <Minus className="w-4 h-4 text-[var(--color-warning)] mx-auto" />;
}

const scenarios = [
  {
    label: "Pre-Investment",
    headline: "Before you enter: the on-chain view",
    steps: [
      "Query real-time liquidity depth for the token's primary Solana DEX pair. Assess whether depth supports your target position size without material slippage.",
      "Review holder concentration data. Identify wallet clusters with large positions, vesting unlock timelines, and any recent smart money accumulation or distribution patterns.",
      "Confirm on-chain market structure: DEX volume concentration, protocol dominance, and any recent pool migration events that suggest liquidity instability.",
    ],
    outcome: "Investment committee receives a complete on-chain data profile alongside traditional analysis — not just price history.",
    cta: "See the Full Pre-Trade Use Case",
    href: "/use-cases/pre-trade-due-diligence",
  },
  {
    label: "Pre-Execution",
    headline: "Before you size in: the pool-level view",
    steps: [
      "Pull real-time pool-level liquidity depth for the specific pair you're executing. Generate estimated slippage curves for your target order size.",
      "Check for active liquidity migration events on the pair. If depth is shifting between pools or protocols, the execution plan changes.",
      "Monitor real-time pool depth during phased execution. Alert on depth drops that exceed thresholds — before a partial fill commits you to worse-than-modeled slippage.",
    ],
    outcome: "Execution desk operates with the same on-chain data visibility as the largest native participants.",
    cta: "See the Execution Risk Use Case",
    href: "/use-cases/liquidity-execution-risk",
  },
];

export default function OnChainIntelligencePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-tertiary)] mb-6">
            <Link href="/" className="hover:text-[var(--color-text-secondary)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/platform" className="hover:text-[var(--color-text-secondary)] transition-colors">Platform</Link>
            <span>/</span>
            <span className="text-[var(--color-text-secondary)]">On-Chain Intelligence</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-dim)] text-[var(--color-accent)] text-xs font-mono mb-6">
            On-Chain Intelligence
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-semibold text-[var(--color-text-primary)] leading-tight mb-5">
                The On-Chain Signal Layer CEX Data Leaves Dark.
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Real-time DEX liquidity depth, on-chain market structure analysis, and token-level intelligence across Solana and 8+ chains — updated sub-second, delivered to your desk with institutional fidelity.
              </p>
              <div className="flex gap-4">
                <Link href="/demo" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[#0d0f14] font-semibold rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors text-sm">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/developers/api-reference" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)] rounded-lg transition-colors text-sm">
                  View API Docs
                </Link>
              </div>
            </div>

            {/* API preview card */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
                <span className="text-xs font-mono text-[var(--color-text-tertiary)]">GET /v1/onchain/solana/liquidity-depth</span>
                <span className="text-xs font-mono text-[var(--color-success)] bg-[var(--color-success)]/10 px-2 py-0.5 rounded-full">200 OK</span>
              </div>
              <div className="p-5">
                <pre className="text-xs font-mono text-[var(--color-text-secondary)] leading-relaxed overflow-x-auto">
{`{
  "token": "SOL/USDC",
  "pool": "Raydium-CLMM",
  "timestamp": "2026-03-29T...",
  "bid_depth_usd": 4250000,
  "ask_depth_usd": 3980000,
  "slippage_1m_usd": "0.18%",
  "slippage_5m_usd": "0.74%",
  "pool_tvl_usd": 22400000,
  "migration_event": false
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] leading-tight mb-5">
            Every data provider covers CEX. Almost none cover Solana on-chain at institutional depth.
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            The institutional data market built its infrastructure around centralized exchanges. Solana's on-chain DEX ecosystem — Raydium, Orca, Jupiter — operates at a speed, granularity, and structural complexity that existing providers have not addressed at the institutional level. That gap is not a minor inconvenience. It is the difference between executing with confidence and executing blind.
          </p>
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <SectionLabel>What On-Chain Intelligence Covers</SectionLabel>
          <h2 className="text-3xl font-semibold text-[var(--color-text-primary)]">Six capabilities. One intelligence layer.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c) => (
            <div key={c.name} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-border-strong)] transition-colors">
              <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-2">{c.name}</p>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">{c.headline}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">{c.body}</p>
              <div className="pt-4 border-t border-[var(--color-border)] flex items-end justify-between">
                <span className="text-xs text-[var(--color-text-tertiary)]">{c.stat}</span>
                <span className="text-xl font-mono font-bold text-[var(--color-accent)]">{c.statValue}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── COVERAGE TABLE ───────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-10">
            <SectionLabel>Data Coverage</SectionLabel>
            <h2 className="text-3xl font-semibold text-[var(--color-text-primary)]">What standard providers cover — and what they don&apos;t.</h2>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden">
            <table className="w-full comparison-table">
              <thead>
                <tr className="bg-[var(--color-surface-2)]">
                  <th className="text-left">Capability</th>
                  <th className="text-center">Standard Providers</th>
                  <th className="text-center">Birdeye Peak</th>
                </tr>
              </thead>
              <tbody>
                {coverageRows.map((row) => (
                  <tr key={row.label} className={row.highlight ? "highlight-row" : "bg-[var(--color-surface)]"}>
                    <td className={`text-sm ${row.highlight ? "font-medium text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"}`}>
                      {row.label}
                    </td>
                    <td><CoverageIcon status={row.standard} /></td>
                    <td><CoverageIcon status={row.peak} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SCENARIOS ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <SectionLabel>On-Chain Intelligence in Action</SectionLabel>
          <h2 className="text-3xl font-semibold text-[var(--color-text-primary)]">Two critical decision moments, one data layer.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {scenarios.map((s) => (
            <div key={s.label} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] block mb-3">{s.label}</span>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-5">{s.headline}</h3>
              <ol className="space-y-4 mb-6">
                {s.steps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent-dim)] border border-[var(--color-accent-border)] text-[var(--color-accent)] text-xs font-mono flex items-center justify-center mt-0.5">{i + 1}</span>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
              <div className="rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] p-4 mb-5">
                <p className="text-xs font-mono text-[var(--color-text-tertiary)] mb-1">Outcome</p>
                <p className="text-sm text-[var(--color-text-primary)]">{s.outcome}</p>
              </div>
              <Link href={s.href} className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline underline-offset-4">
                {s.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── RELATED ──────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-6">Often used alongside</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Wallet Intelligence", desc: "Smart money context for every on-chain signal", href: "/platform/wallet-intelligence" },
              { name: "Portfolio & Risk", desc: "Map on-chain signals to current positions", href: "/platform/portfolio-risk" },
              { name: "API & Data Services", desc: "Programmatic access to every data point", href: "/platform/api-data-services" },
            ].map((r) => (
              <Link key={r.name} href={r.href} className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] px-5 py-4 hover:border-[var(--color-accent)] transition-colors group">
                <div>
                  <p className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{r.name}</p>
                  <p className="text-xs text-[var(--color-text-tertiary)] mt-0.5">{r.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DemoCta
        headline="Ready to close the on-chain intelligence gap?"
        subheadline="Speak with a Birdeye Peak specialist to see the full on-chain intelligence capability — live, on your use case."
        secondaryLabel="Read the API Documentation"
        secondaryHref="/developers/api-reference"
      />
    </>
  );
}
