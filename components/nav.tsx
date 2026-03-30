"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const platformLinks = [
  { href: "/platform/on-chain-intelligence", label: "On-Chain Intelligence", desc: "Real-time Solana DEX liquidity & market structure" },
  { href: "/platform/wallet-intelligence", label: "Wallet Intelligence", desc: "Smart money tracking & entity-labeled flows" },
  { href: "/platform/market-data", label: "Market Data", desc: "Unified CEX/DEX data at institutional fidelity" },
  { href: "/platform/portfolio-risk", label: "Portfolio & Risk", desc: "Live multi-chain exposure monitoring" },
  { href: "/platform/api-data-services", label: "API & Data Services", desc: "Enterprise BDS infrastructure" },
];

const useCaseLinks = [
  { href: "/use-cases/pre-trade-due-diligence", label: "Pre-Trade Due Diligence" },
  { href: "/use-cases/liquidity-execution-risk", label: "Liquidity & Execution Risk" },
  { href: "/use-cases/smart-money-monitoring", label: "Smart Money Monitoring" },
  { href: "/use-cases/portfolio-monitoring", label: "Portfolio Monitoring" },
  { href: "/use-cases/compliance-audit", label: "Compliance & Audit" },
];

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-7 h-7 rounded-md bg-[var(--color-accent)] flex items-center justify-center">
            <span className="text-[#0d0f14] font-bold text-xs font-mono">BP</span>
          </div>
          <span className="font-semibold text-[var(--color-text-primary)] tracking-tight">Birdeye Peak</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {/* Platform dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("platform")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors rounded-md hover:bg-white/5">
              Platform <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {activeDropdown === "platform" && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-2xl p-2">
                {platformLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block px-3 py-2.5 rounded-lg hover:bg-white/5 group">
                    <div className="text-sm font-medium text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">{l.label}</div>
                    <div className="text-xs text-[var(--color-text-tertiary)] mt-0.5">{l.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Use Cases dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("use-cases")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors rounded-md hover:bg-white/5">
              Use Cases <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {activeDropdown === "use-cases" && (
              <div className="absolute top-full left-0 mt-1 w-60 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl shadow-2xl p-2">
                {useCaseLinks.map((l) => (
                  <Link key={l.href} href={l.href} className="block px-3 py-2.5 rounded-lg hover:bg-white/5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/industries" className="px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors rounded-md hover:bg-white/5">
            Industries
          </Link>
          <Link href="/developers" className="px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors rounded-md hover:bg-white/5">
            Developers
          </Link>
          <Link href="/blog" className="px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors rounded-md hover:bg-white/5">
            Resources
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/pricing" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors px-3 py-2">
            Pricing
          </Link>
          <Link
            href="/demo"
            className="px-4 py-2 text-sm font-medium bg-[var(--color-accent)] text-[#0d0f14] rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors"
          >
            Request Demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4 space-y-1">
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] px-3 mb-2">Platform</p>
          {platformLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-md hover:bg-white/5" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] px-3 mb-2 pt-3">Use Cases</p>
          {useCaseLinks.map((l) => (
            <Link key={l.href} href={l.href} className="block px-3 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-md hover:bg-white/5" onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-[var(--color-border)]">
            <Link href="/demo" className="block w-full text-center px-4 py-2.5 text-sm font-medium bg-[var(--color-accent)] text-[#0d0f14] rounded-lg" onClick={() => setMobileOpen(false)}>
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
