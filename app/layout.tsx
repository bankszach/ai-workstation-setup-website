import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Workstation Setup",
  description:
    "Copy one prompt, open ChatGPT, Claude, Gemini, Grok, Perplexity, or Copilot, and inspect AI Workstation Setup through an AI chat tool.",
  authors: [{ name: "Zachary Banks" }],
  creator: "Zachary Banks",
  publisher: "Banks Inc.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
