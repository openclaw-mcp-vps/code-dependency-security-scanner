export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#30363d] px-6 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg tracking-tight">DepScan</span>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="bg-[#238636] hover:bg-[#2ea043] text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          npm · Snyk · OSV · License Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Scan npm Dependencies for<br />
          <span className="text-[#58a6ff]">Security Vulnerabilities</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-2xl mx-auto mb-10">
          Upload your <code className="bg-[#161b22] px-1 rounded text-[#c9d1d9]">package.json</code> or connect a GitHub repo. Get instant risk scores, CVE details, license audits, and automated upgrade recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-md transition-colors text-base"
          >
            Start Scanning — $15/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-md transition-colors text-base"
          >
            Learn More
          </a>
        </div>

        {/* Feature pills */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {[
            ["🔍", "CVE Detection", "Cross-referenced against NVD, OSV & Snyk"],
            ["📋", "License Audit", "Flag GPL, AGPL & unknown licenses"],
            ["⬆️", "Upgrade Paths", "Safe version recommendations"],
            ["📊", "Risk Scores", "CVSS-based severity ratings"]
          ].map(([icon, title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-semibold text-white mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">Everything you need to keep your dependencies secure.</p>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-8">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited package.json scans",
              "GitHub repo integration",
              "CVE & license reports",
              "Automated upgrade PRs",
              "Slack & email alerts",
              "Priority support"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-md transition-colors text-center"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            [
              "Which vulnerability databases do you check?",
              "We cross-reference npm audit, the OSV (Open Source Vulnerabilities) database, and Snyk's advisory feed to give you the most comprehensive coverage available."
            ],
            [
              "How do I connect my GitHub repository?",
              "After subscribing, you'll authorize DepScan via GitHub OAuth. We read your package.json and lock files, run the scan, and post results as a PR comment or issue — no code access required."
            ],
            [
              "Can I scan private packages?",
              "Yes. You can provide an npm auth token in your account settings. DepScan uses it only to resolve package metadata and never stores your token beyond the session."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] text-center text-[#8b949e] text-xs py-8">
        © {new Date().getFullYear()} DepScan. Built for developers who ship securely.
      </footer>
    </main>
  );
}
