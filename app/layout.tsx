import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-workstation-setup-website.vercel.app"),
  title: "AI Workstation Setup",
  description:
    "Copy one prompt, open ChatGPT, Claude, Gemini, Grok, Perplexity, or Copilot, and inspect AI Workstation Setup through an AI chat tool.",
  authors: [{ name: "Zachary Banks" }],
  creator: "Zachary Banks",
  publisher: "Banks Inc.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AI Workstation Setup",
    description:
      "A practical AI workflow installation service for one controlled first workflow.",
    images: [
      {
        url: "/agent-assets/ai-workstation-chat-card.png",
        width: 1200,
        height: 630,
        alt: "AI Workstation Setup card that says Copy the prompt. Open your AI.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workstation Setup",
    description:
      "A practical AI workflow installation service for one controlled first workflow.",
    images: ["/agent-assets/ai-workstation-chat-card.png"],
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
