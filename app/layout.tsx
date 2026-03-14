import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Supun Bandara",
  description:
    "Data Analyst with a BSc in Statistics & Computer Science. Specializing in statistical modeling, machine learning, and visualization.",
  icons: {
    icon: "/images/user.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased bg-dark text-slate-50 selection:bg-emerald-500 selection:text-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
