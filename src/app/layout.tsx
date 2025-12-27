import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Jawad | ACA, ACCA | Finance & Taxation Professional",
  description: "Chartered Accountant with extensive experience at PwC, Deloitte, and Pakistan State Oil. Specializing in taxation, IFRS, and financial advisory.",
  keywords: ["Chartered Accountant", "ACA", "ACCA", "Finance", "Taxation", "IFRS", "PwC", "Deloitte", "Pakistan State Oil"],
  authors: [{ name: "Muhammad Jawad" }],
  openGraph: {
    title: "Muhammad Jawad | Finance & Taxation Professional",
    description: "Chartered Accountant with extensive experience at PwC, Deloitte, and Pakistan State Oil.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
