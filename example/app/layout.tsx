import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orca Wealthtech - Platform Wealthtech B2B2C & Behavioral Guardian",
  description:
    "Membangun kesejahteraan finansial tanpa friksi melalui integrasi payroll otomatis dan pendampingan edukatif cerdas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-['Inter',sans-serif] bg-[#F8FAFC] text-[#334155]">
        {children}
      </body>
    </html>
  );
}
