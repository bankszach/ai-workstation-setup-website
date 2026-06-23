import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-workstation-setup-website.vercel.app"),
  title: "AI Workstation Setup",
  description:
    "AI workflow installation for one controlled small-business workflow. Not a physical computer or GPU workstation build service.",
  authors: [{ name: "Zachary Banks" }],
  creator: "Zachary Banks",
  publisher: "Banks Inc.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "AI Workstation Setup",
    description:
      "AI workflow installation for one controlled small-business workflow. Not a physical computer or GPU workstation build service.",
  },
  twitter: {
    card: "summary",
    title: "AI Workstation Setup",
    description:
      "AI workflow installation for one controlled small-business workflow. Not a physical computer or GPU workstation build service.",
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
