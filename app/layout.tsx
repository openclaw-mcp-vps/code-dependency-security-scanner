import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DepScan — npm Security Vulnerability Scanner",
  description: "Scan npm packages for security vulnerabilities, license issues, and get upgrade recommendations with risk assessment."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="96663f0f-6ab2-4873-83ad-ee4886fff163"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
