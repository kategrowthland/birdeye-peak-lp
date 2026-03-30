import Link from "next/link";

const columns = [
  {
    label: "Platform",
    links: [
      { href: "/platform/on-chain-intelligence", label: "On-Chain Intelligence" },
      { href: "/platform/wallet-intelligence", label: "Wallet Intelligence" },
      { href: "/platform/market-data", label: "Market Data" },
      { href: "/platform/portfolio-risk", label: "Portfolio & Risk" },
      { href: "/platform/api-data-services", label: "API & Data Services" },
    ],
  },
  {
    label: "Use Cases",
    links: [
      { href: "/use-cases/pre-trade-due-diligence", label: "Pre-Trade Due Diligence" },
      { href: "/use-cases/liquidity-execution-risk", label: "Liquidity & Execution Risk" },
      { href: "/use-cases/smart-money-monitoring", label: "Smart Money Monitoring" },
      { href: "/use-cases/portfolio-monitoring", label: "Portfolio Monitoring" },
      { href: "/use-cases/compliance-audit", label: "Compliance & Audit" },
    ],
  },
  {
    label: "Industries",
    links: [
      { href: "/industries/crypto-hedge-funds", label: "Crypto Hedge Funds" },
      { href: "/industries/asset-managers", label: "Asset Managers" },
      { href: "/industries/venture-capital", label: "Venture Capital" },
      { href: "/industries/investment-banks", label: "Investment Banks" },
      { href: "/industries/prop-trading", label: "Prop Trading" },
    ],
  },
  {
    label: "Compare",
    links: [
      { href: "/vs/kaiko", label: "Peak vs. Kaiko" },
      { href: "/vs/amberdata", label: "Peak vs. Amberdata" },
      { href: "/vs/bloomberg-terminal", label: "Peak vs. Bloomberg" },
    ],
  },
  {
    label: "Resources",
    links: [
      { href: "/blog", label: "Insights" },
      { href: "/reports", label: "Research Reports" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/glossary", label: "Glossary" },
      { href: "/developers", label: "Developers" },
      { href: "/about", label: "About" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top: logo + tagline */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-[var(--color-accent)] flex items-center justify-center">
                <span className="text-[#0d0f14] font-bold text-xs font-mono">BP</span>
              </div>
              <span className="font-semibold text-[var(--color-text-primary)] tracking-tight">Birdeye Peak</span>
            </div>
            <p className="text-sm text-[var(--color-text-tertiary)] leading-relaxed">
              Institutional on-chain intelligence for professional capital allocators. Solana-native. Real-time. SOC-2 compliant.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="https://x.com/birdeye_so" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors text-sm">X</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors text-sm">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors text-sm">GitHub</a>
            </div>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {columns.map((col) => (
              <div key={col.label}>
                <p className="text-xs font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-3">{col.label}</p>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-border)] pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-tertiary)]">© 2026 Birdeye Peak. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors">Terms of Service</Link>
            <Link href="/trust" className="text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)] transition-colors">Trust Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
