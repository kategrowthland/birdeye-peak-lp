import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle, Zap } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { StatStrip } from "@/components/stat-strip";
import { DemoCta } from "@/components/demo-cta";

// ─── Hero data ticker (decorative, server-rendered) ──────────────────────────
const tickers = [
  { label: "SOL/USDC Depth", value: "$24.3M", change: "+2.1%", positive: true },
  { label: "Smart Money Inflow", value: "$8.7M", change: "12 wallets", positive: true },
  { label: "Pool Migration", value: "Detected", change: "RAY-USDC", positive: false },
  { label: "API Latency", value: "41ms", change: "p99", positive: true },
];

// ─── Product pillars ──────────────────────────────────────────────────────────
const pillars = [
  {
    name: "On-Chain Intelligence",
    headline: "Real-time DEX signal interpretation",
    body: "Liquidity depth, pool migration events, DEX volume concentration, and on-chain market structure across Solana and 8+ chains. Updated sub-second.",
    href: "/platform/on-chain-intelligence",
  },
  {
    name: "Wallet Intelligence",
    headline: "Know what smart money is doing before it moves markets",
    body: "Entity-labeled wallet tracking, institutional-scale flow monitoring, accumulation pattern detection, and configurable wallet alert infrastructure.",
    href: "/platform/wallet-intelligence",
  },
  {
    name: "Market Data",
    headline: "Unified CEX/DEX market data at institutional fidelity",
    body: "Normalized pricing, tick-level trade data, and aggregated market metrics across centralized and decentralized venues. One API. No reconciliation overhead.",
    href: "/platform/market-data",
  },
  {
    name: "Portfolio & Risk",
    headline: "Live multi-chain exposure monitoring",
    body: "Real-time portfolio valuation, cross-chain risk exposure, token unlock schedules, and concentration risk analysis — all mapped to your current positions.",
    href: "/platform/portfolio-risk",
  },
  {
    name: "API & Data Services",
    headline: "Institutional data infrastructure via BDS",
    body: "Enterprise-grade API access to the full Birdeye data stack. RESTful endpoints, WebSocket streams, and cloud delivery options built for systematic operations.",
    href: "/platform/api-data-services",
  },
];

// ─── Gap cards ────────────────────────────────────────────────────────────────
const gaps = [
  {
    headline: "CEX data misreports on-chain depth",
    body: "A token can show strong bid depth on a centralized exchange while its on-chain liquidity pools are thin, fragmented, or actively migrating. Executing without on-chain data exposes you to execution risk that never appeared in your pre-trade model.",
  },
  {
    headline: "Smart money moves on-chain first",
    body: "Institutional accumulation, insider wallet activity, and distribution events happen on-chain before they register in CEX order flow. Without wallet-level intelligence, you are responding to signals that informed participants already acted on.",
  },
  {
    headline: "Solana's DEX ecosystem is structurally undercovered",
    body: "Leading institutional data providers cover Ethereum-native DEX protocols. Solana's on-chain DEX ecosystem — Raydium, Orca, Jupiter — operates at a speed and structural complexity that requires purpose-built, Solana-native intelligence.",
  },
];

// ─── Decision moment panels ───────────────────────────────────────────────────
const decisionMoments = [
  {
    tag: "Before you enter a position",
    headline: "Run the on-chain audit before your IC meeting.",
    body: "Every token entry starts with a question: is the on-chain structure sound enough to support the position size? Birdeye Peak answers it — liquidity concentration, wallet distribution, smart money activity, and DEX market depth — before you commit capital.",
    stat: "Pre-trade on-chain due diligence",
    cta: "See the Pre-Trade Audit",
    href: "/use-cases/pre-trade-due-diligence",
    num: "01",
  },
  {
    tag: "Before you execute a large order",
    headline: "Execution intelligence before your order hits the pool.",
    body: "For institutional-scale positions on Solana DEXes, on-chain liquidity depth determines realized slippage — not the displayed price. Birdeye Peak gives you pool-level depth data, optimal routing intelligence, and real-time liquidity monitoring before you size in.",
    stat: "Liquidity & execution risk analysis",
    cta: "See the Execution Risk Use Case",
    href: "/use-cases/liquidity-execution-risk",
    num: "02",
  },
  {
    tag: "When position sizing matters",
    headline: "Know who moved before the price did.",
    body: "Institutional accumulation and distribution events leave on-chain signatures before they register in price. Birdeye Peak's wallet intelligence layer surfaces these movements — labeled by entity type, flagged by behavioral pattern, and delivered in real time.",
    stat: "Smart money monitoring",
    cta: "See Smart Money Monitoring",
    href: "/use-cases/smart-money-monitoring",
    num: "03",
  },
];

// ─── Industries ───────────────────────────────────────────────────────────────
const industries = [
  { name: "Crypto-Native Hedge Funds", headline: "Alpha starts on-chain.", body: "Wallet tracking, smart money signals, and real-time DEX intelligence for funds where on-chain is the primary signal source.", href: "/industries/crypto-hedge-funds" },
  { name: "Asset Managers & Family Offices", headline: "On-chain data your risk team will approve.", body: "SOC-2 compliant data infrastructure, institutional audit trails, and portfolio risk monitoring built for fiduciary environments.", href: "/industries/asset-managers" },
  { name: "Venture Capital", headline: "Monitor what your portfolio does on-chain.", body: "Token unlock schedules, smart contract monitoring, liquidity migration alerts, and distribution tracking — all mapped to portfolio positions.", href: "/industries/venture-capital" },
  { name: "Investment Banks & Prime Brokers", headline: "The on-chain data layer for the digital asset desk.", body: "Unified market data, asset classification, liquidity metrics, and RWA on-chain intelligence for institutional client operations.", href: "/industries/investment-banks" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-dim)] text-[var(--color-accent)] text-xs font-mono mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Solana-Native · Institutional-Grade · SOC-2 Compliant
            </div>

            <h1 className="text-5xl lg:text-6xl font-semibold text-[var(--color-text-primary)] leading-[1.08] tracking-tight mb-6">
              Turn On-Chain Chaos Into{" "}
              <span className="text-[var(--color-accent)] accent-glow">Investment Conviction.</span>
            </h1>

            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-xl">
              Birdeye Peak is the institutional-grade on-chain intelligence terminal for professional capital allocators. Real-time Solana DEX liquidity depth, wallet-level signal interpretation, and enterprise data infrastructure — purpose-built for the investment desk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-[#0d0f14] font-semibold rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors text-sm"
              >
                Request a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/platform/on-chain-intelligence"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)] rounded-lg transition-colors text-sm"
              >
                Explore the Platform
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-xs text-[var(--color-text-tertiary)] font-mono">
              {["SOC-2 Compliant", "99.9% API Uptime SLA", "Enterprise SLA"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: terminal mockup */}
          <div className="animate-fade-in-delay-2 hidden lg:block">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-2xl">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]/80" />
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]/80" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e]/80" />
                <span className="ml-2 text-xs font-mono text-[var(--color-text-tertiary)]">birdeye-peak — on-chain-intelligence</span>
              </div>

              {/* Live data tickers */}
              <div className="p-5 space-y-3">
                {tickers.map((t) => (
                  <div key={t.label} className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)]">
                    <span className="text-xs font-mono text-[var(--color-text-tertiary)]">{t.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[var(--color-text-primary)]">{t.value}</span>
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${t.positive ? "text-[var(--color-success)] bg-[var(--color-success)]/10" : "text-[var(--color-warning)] bg-[var(--color-warning)]/10"}`}>
                        {t.change}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Chart placeholder */}
                <div className="mt-4 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] p-4 h-32 flex items-end gap-1">
                  {[30, 55, 45, 70, 65, 80, 60, 85, 90, 75, 95, 88].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-[var(--color-accent)]/30 border-t border-[var(--color-accent)]/60"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="text-center text-xs font-mono text-[var(--color-text-tertiary)]">
                  SOL/USDC — 7-day DEX liquidity depth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────── */}
      <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-6">
            Trusted by institutional teams at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {["[FUND A]", "[FUND B]", "[FUND C]", "[FUND D]", "[FUND E]", "[FUND F]"].map((name) => (
              <span key={name} className="text-sm font-mono text-[var(--color-text-tertiary)] opacity-50">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── THE GAP ──────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <SectionLabel>The Intelligence Gap</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] leading-tight mb-4 max-w-3xl mx-auto">
            Most institutional data stacks were built for centralized exchanges. On-chain DeFi runs on different mechanics.
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            The liquidity depth you see on a CEX feed does not reflect what happens when you execute on-chain. Smart money moves on-chain first. Birdeye Peak closes the gap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {gaps.map((g) => (
            <div key={g.headline} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 hover:border-[var(--color-border-strong)] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-warning)]/10 border border-[var(--color-warning)]/20 flex items-center justify-center mb-4">
                <AlertTriangle className="w-4 h-4 text-[var(--color-warning)]" />
              </div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">{g.headline}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{g.body}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/platform/on-chain-intelligence" className="inline-flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline underline-offset-4">
            Birdeye Peak was built to close these three gaps <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── PLATFORM PILLARS ─────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <SectionLabel>The Platform</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] leading-tight mb-4">
              One terminal. Five intelligence layers.
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Every capability in Birdeye Peak is designed for a single outcome: reducing information asymmetry at the institutional decision level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <Link
                key={p.name}
                href={p.href}
                className={`group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6 hover:border-[var(--color-accent)] transition-all hover:shadow-lg hover:shadow-[var(--color-accent)]/5 ${i === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="w-8 h-8 rounded-lg bg-[var(--color-accent-dim)] border border-[var(--color-accent-border)] flex items-center justify-center mb-4">
                  <Zap className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-2">{p.name}</p>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">{p.headline}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">{p.body}</p>
                <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DECISION MOMENTS ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <SectionLabel>Built for Institutional Decision Moments</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] leading-tight">
            The three moments where on-chain intelligence determines outcome.
          </h2>
        </div>

        <div className="space-y-6">
          {decisionMoments.map((m) => (
            <div key={m.num} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden hover:border-[var(--color-border-strong)] transition-colors">
              <div className="grid lg:grid-cols-[1fr_auto] gap-0">
                <div className="p-8 lg:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-mono font-bold text-[var(--color-text-tertiary)]">{m.num}</span>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-[var(--color-border)] text-[var(--color-text-tertiary)] uppercase tracking-wider">
                      {m.tag}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-[var(--color-text-primary)] mb-3">{m.headline}</h3>
                  <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-2xl">{m.body}</p>
                  <Link
                    href={m.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline underline-offset-4"
                  >
                    {m.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="hidden lg:flex items-center px-10 border-l border-[var(--color-border)]">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-accent-dim)] border border-[var(--color-accent-border)] flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-7 h-7 text-[var(--color-accent)]" />
                    </div>
                    <p className="text-xs font-mono text-[var(--color-text-tertiary)] max-w-[120px] text-center leading-relaxed">{m.stat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <SectionLabel>Built for Every Institutional Vertical</SectionLabel>
            <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] leading-tight mb-3">
              The on-chain layer looks different for every desk.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.name}
                href={ind.href}
                className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6 hover:border-[var(--color-accent)] transition-all"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-2">{ind.name}</p>
                <h3 className="font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">{ind.headline}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{ind.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <StatStrip />

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <SectionLabel>What Institutional Teams Say</SectionLabel>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { quote: "The pre-trade liquidity audit built into Peak changed how our PM team approaches new Solana token entries. We don't commit capital without running it first.", author: "[Portfolio Manager]", fund: "[Crypto Hedge Fund]" },
            { quote: "We evaluated every major data provider before selecting Peak. Nothing else gives us the Solana on-chain depth our quantitative team requires.", author: "[Head of Research]", fund: "[Asset Manager]" },
            { quote: "The BDS API integration gave us the programmatic on-chain data access our systematic strategies needed. The Solana DEX coverage is unmatched.", author: "[CTO]", fund: "[Prop Trading Desk]" },
          ].map((t, i) => (
            <div key={i} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7">
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5 text-sm">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-primary)]">{t.author}</p>
                <p className="text-xs text-[var(--color-text-tertiary)] font-mono mt-0.5">{t.fund}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <DemoCta />
    </>
  );
}
