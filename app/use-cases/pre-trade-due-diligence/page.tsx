import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/section-label";
import { DemoCta } from "@/components/demo-cta";

export const metadata: Metadata = {
  title: "Pre-Trade Due Diligence",
  description: "Run institutional-grade on-chain due diligence before every token entry. Liquidity depth, wallet concentration, and smart money signals — before you commit capital.",
};

const failureModes = [
  {
    headline: "Thin On-Chain Liquidity",
    scenario: "Modeled position entry based on displayed depth. The actual on-chain pool TVL was $400K. A $2M order moved the market 8%.",
    impact: "Realized slippage far exceeded the pre-trade model.",
  },
  {
    headline: "Wallet Concentration Risk",
    scenario: "42% of circulating supply was held by three unlabeled wallets. Two began distributing 48 hours after entry.",
    impact: "Price impact from undisclosed insider distribution.",
  },
  {
    headline: "Liquidity Migration",
    scenario: "The primary liquidity pool migrated to a new DEX protocol the morning of execution. The pool modeled against had materially less depth by trade time.",
    impact: "Execution occurred against a structurally different market than the one analyzed.",
  },
];

const steps = [
  {
    num: "01",
    name: "Liquidity Depth Assessment",
    headline: "How deep is the on-chain market, really?",
    body: "Pull pool-level liquidity depth for every major DEX pair for the target token. Assess the true bid and ask depth available at institutional order sizes — not the displayed price, not the CEX aggregate, but the actual on-chain execution environment.",
    questions: [
      "What is the estimated slippage for your target order size?",
      "Is liquidity concentrated in one pool or distributed across multiple venues?",
      "Has pool TVL increased or decreased over the past 7 / 30 days?",
    ],
    source: "On-Chain Intelligence — Real-time DEX liquidity depth",
  },
  {
    num: "02",
    name: "Wallet Concentration Analysis",
    headline: "Who holds the supply, and what are they doing?",
    body: "Map the token's holder distribution — top wallet concentration, entity labeling where available, and behavioral analysis of large holders. Identify whether top wallets have been accumulating, holding, or distributing in the past 30 days.",
    questions: [
      "What percentage of circulating supply is held by the top 10 / 50 wallets?",
      "Are any labeled institutional or smart money wallets in the top holders?",
      "Is there evidence of recent accumulation or distribution by large wallets?",
    ],
    source: "Wallet Intelligence — Holder distribution, entity labeling",
  },
  {
    num: "03",
    name: "Smart Money Signal Review",
    headline: "Is institutional capital already positioned?",
    body: "Review activity from labeled smart money wallets — funds, prop desks, and historically high-performing entities — to determine whether informed capital is entering, exiting, or already positioned in the target token.",
    questions: [
      "Have smart money wallets accumulated in the past 7 / 14 days?",
      "Is there evidence of smart money distribution preceding a publicly visible price event?",
      "Which wallet entities are building or reducing positions?",
    ],
    source: "Wallet Intelligence — Smart money signal layer",
  },
  {
    num: "04",
    name: "Vesting & Unlock Schedule Review",
    headline: "What supply events are approaching?",
    body: "Pull the token's verified vesting and unlock schedule — team tokens, investor allocations, and ecosystem fund releases. Map upcoming unlock events against current on-chain liquidity depth to model the structural impact of new supply.",
    questions: [
      "When is the next significant unlock event?",
      "What percentage of circulating supply will be unlocked?",
      "Does current liquidity depth support the additional sell pressure from upcoming unlocks?",
    ],
    source: "On-Chain Intelligence — Token metadata, vesting schedule",
  },
  {
    num: "05",
    name: "On-Chain Market Structure Validation",
    headline: "Is the market structure sound enough for the position?",
    body: "Validate the token's on-chain market structure — DEX volume concentration, protocol diversity, fee tier distribution, and any recent structural anomalies. A structurally fragile market is a risk that fundamental analysis will not surface.",
    questions: [
      "Is DEX trading volume healthy and distributed, or concentrated in a single thin pool?",
      "Have there been recent liquidity migration events suggesting structural instability?",
      "Does on-chain volume match reported exchange volume, or is there significant divergence?",
    ],
    source: "On-Chain Intelligence — Market structure analysis",
  },
];

const reportSections = [
  "On-Chain Health Score (composite rating)",
  "Liquidity Depth Grade (A–F vs. position size)",
  "Wallet Concentration Risk Rating",
  "Smart Money Signal (Accumulating / Neutral / Distributing)",
  "Upcoming Supply Events (next 30 / 90 days)",
  "Market Structure Rating",
  "Raw data export for model integration",
];

const icps = [
  {
    segment: "Crypto-Native Hedge Funds",
    body: "Alpha funds use Peak's pre-trade layer as the final on-chain validation step before every new token entry — confirming that the on-chain structure supports the thesis before capital is committed.",
  },
  {
    segment: "Asset Managers & Family Offices",
    body: "For funds with fiduciary responsibility, Peak's pre-trade report provides documented on-chain due diligence that supports the investment approval process and satisfies risk committee requirements.",
  },
  {
    segment: "Venture Capital Funds",
    body: "VC and digital asset funds use Peak's pre-trade intelligence to assess token liquidity and wallet concentration before secondary market entries or evaluating positions around token generation events.",
  },
];

export default function PreTradeDueDiligencePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs font-mono text-[var(--color-text-tertiary)] mb-6">
            <Link href="/" className="hover:text-[var(--color-text-secondary)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/use-cases" className="hover:text-[var(--color-text-secondary)] transition-colors">Use Cases</Link>
            <span>/</span>
            <span className="text-[var(--color-text-secondary)]">Pre-Trade Due Diligence</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent-border)] bg-[var(--color-accent-dim)] text-[var(--color-accent)] text-xs font-mono mb-6">
            Use Case: Pre-Trade Due Diligence
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl lg:text-5xl font-semibold text-[var(--color-text-primary)] leading-tight mb-5">
                Know What You&apos;re Buying Before You Buy It.
              </h1>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                Every institutional token entry carries on-chain risk that traditional analysis doesn&apos;t surface. Birdeye Peak&apos;s pre-trade intelligence layer gives your investment team — and your IC — the on-chain due diligence data they need before capital is committed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[#0d0f14] font-semibold rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors text-sm">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#checklist" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent)] rounded-lg transition-colors text-sm">
                  Download the Checklist
                </Link>
              </div>
            </div>

            {/* Pre-trade report card */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
              <div className="px-5 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface-2)]">
                <p className="text-xs font-mono text-[var(--color-text-tertiary)]">Pre-Trade Intelligence Report</p>
                <p className="text-sm font-medium text-[var(--color-text-primary)] mt-0.5">SOL — [TOKEN NAME]</p>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { label: "On-Chain Health Score", value: "B+", color: "text-[var(--color-success)]" },
                  { label: "Liquidity Depth Grade", value: "A", color: "text-[var(--color-success)]" },
                  { label: "Wallet Concentration Risk", value: "Medium", color: "text-[var(--color-warning)]" },
                  { label: "Smart Money Signal", value: "Accumulating", color: "text-[var(--color-accent)]" },
                  { label: "Next Unlock Event", value: "14 days", color: "text-[var(--color-warning)]" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0">
                    <span className="text-xs text-[var(--color-text-secondary)]">{row.label}</span>
                    <span className={`text-sm font-mono font-bold ${row.color}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE RISK ─────────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionLabel>The Risk</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] leading-tight mb-5">
                Traditional due diligence has a blind spot. It doesn&apos;t see on-chain.
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                A token that clears fundamental analysis — sound tokenomics on paper, credible team, strong narrative — can still carry structural on-chain risk that surfaces only after entry.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Thin DEX liquidity disguised by inflated CEX volume. Wallet concentration in a small number of unlabeled entities. Smart money distribution happening quietly while retail accumulates. Liquidity scheduled to migrate in 72 hours. These signals exist on-chain before they appear in price.
              </p>
            </div>

            <div className="space-y-4">
              {failureModes.map((f) => (
                <div key={f.headline} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-[var(--color-warning)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-1">{f.headline}</p>
                      <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-2">{f.scenario}</p>
                      <p className="text-xs text-[var(--color-danger)] font-mono">Impact: {f.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAMEWORK ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <SectionLabel>The Framework</SectionLabel>
          <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mb-3">
            A five-step on-chain due diligence process built for institutional workflows.
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Birdeye Peak structures on-chain due diligence around five signal categories — each mapped to a specific risk dimension that affects position sizing, entry timing, and IC approval.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map((step) => (
            <div key={step.num} className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden hover:border-[var(--color-border-strong)] transition-colors">
              <div className="grid lg:grid-cols-[auto_1fr_1fr] gap-0">
                {/* Step number */}
                <div className="flex items-center justify-center p-6 lg:px-8 border-b lg:border-b-0 lg:border-r border-[var(--color-border)]">
                  <span className="text-4xl font-mono font-bold text-[var(--color-accent)]/30">{step.num}</span>
                </div>
                {/* Description */}
                <div className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-[var(--color-border)]">
                  <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-2">{step.name}</p>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">{step.headline}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">{step.body}</p>
                  <p className="text-xs font-mono text-[var(--color-text-tertiary)]">Source: {step.source}</p>
                </div>
                {/* Key questions */}
                <div className="p-6 lg:p-8">
                  <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-4">Key Questions Answered</p>
                  <ul className="space-y-3">
                    {step.questions.map((q, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span className="text-xs text-[var(--color-text-secondary)] leading-relaxed">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── REPORT OUTPUT ────────────────────────────────────────────────── */}
      <section id="checklist" className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="text-center mb-10">
            <SectionLabel>The Output</SectionLabel>
            <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mb-3">Investment Committee-ready. On-chain verified.</h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Birdeye Peak compiles every pre-trade signal into a structured Pre-Trade Intelligence Report — exportable as PDF or accessible via API.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden">
              <div className="bg-[var(--color-surface-2)] px-5 py-3 border-b border-[var(--color-border)]">
                <p className="text-xs font-mono text-[var(--color-text-tertiary)]">Pre-Trade Intelligence Report · Sections</p>
              </div>
              <ul className="divide-y divide-[var(--color-border)]">
                {reportSections.map((s, i) => (
                  <li key={i} className="flex items-center gap-3 px-5 py-3.5 bg-[var(--color-surface)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm text-[var(--color-text-secondary)]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                The report is designed for two audiences: the PM who needs to act on the signal, and the IC who needs to approve the position. Structured for presentation. Backed by primary on-chain data.
              </p>
              <div className="rounded-xl bg-[var(--color-accent-dim)] border border-[var(--color-accent-border)] p-5">
                <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">Download the Framework</p>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">The Institutional On-Chain Pre-Trade Checklist — the five-step process your investment team can apply immediately.</p>
                <Link href="/demo" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:underline underline-offset-4">
                  Get access via demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ─────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <SectionLabel>Integration</SectionLabel>
          <h2 className="text-3xl font-semibold text-[var(--color-text-primary)] mb-3">Fits into your existing investment process without rebuilding it.</h2>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
          <div className="flex flex-col items-center gap-0 max-w-sm mx-auto">
            {[
              { step: "Idea Generation", highlight: false },
              { step: "Fundamental Analysis", highlight: false },
              { step: "Birdeye Peak Pre-Trade Audit", highlight: true },
              { step: "IC / Risk Approval", highlight: false },
              { step: "Position Sizing & Execution", highlight: false },
            ].map((item, i) => (
              <div key={item.step} className="w-full flex flex-col items-center">
                <div className={`w-full rounded-lg px-5 py-3 text-center text-sm font-medium ${item.highlight ? "bg-[var(--color-accent)] text-[#0d0f14]" : "bg-[var(--color-surface-2)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"}`}>
                  {item.step}
                  {item.highlight && <span className="block text-xs font-normal mt-0.5 opacity-80">← NEW: On-chain intelligence layer</span>}
                </div>
                {i < 4 && (
                  <div className="w-px h-6 bg-[var(--color-border)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO USES THIS ────────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <SectionLabel className="text-center block mb-8">Used By</SectionLabel>
          <div className="grid md:grid-cols-3 gap-5">
            {icps.map((icp) => (
              <div key={icp.segment} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] p-6">
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] mb-3">{icp.segment}</p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{icp.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
          &ldquo;We won&apos;t commit capital to a new Solana token position without running the on-chain pre-trade audit in Peak first. It has surfaced wallet concentration risks and liquidity issues that our fundamental analysis missed.&rdquo;
        </p>
        <p className="text-sm font-medium text-[var(--color-text-primary)]">[Chief Investment Officer]</p>
        <p className="text-xs text-[var(--color-text-tertiary)] font-mono mt-0.5">[Crypto Hedge Fund]</p>
      </section>

      {/* ── NEXT USE CASES ───────────────────────────────────────────────── */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-5">What comes next</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "Liquidity & Execution Risk", desc: "Pool-level depth data guides execution once the entry is approved", href: "/use-cases/liquidity-execution-risk" },
              { name: "Smart Money Monitoring", desc: "Continue monitoring smart money activity around the position after entry", href: "/use-cases/smart-money-monitoring" },
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
        headline="Add the on-chain layer to your due diligence process."
        subheadline="Request a 30-minute demo focused on pre-trade due diligence for your specific asset universe."
      />
    </>
  );
}
