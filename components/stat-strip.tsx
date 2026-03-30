const stats = [
  { value: "99.9%", label: "API Uptime SLA" },
  { value: "8+", label: "Chains Covered" },
  { value: "<50ms", label: "Avg. Data Latency" },
  { value: "100B+", label: "On-Chain Data Points" },
  { value: "SOC-2", label: "Compliant Infrastructure" },
];

export function StatStrip() {
  return (
    <div className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-mono font-bold text-[var(--color-accent)] mb-1">{s.value}</div>
              <div className="text-xs text-[var(--color-text-tertiary)] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
