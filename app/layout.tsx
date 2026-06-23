import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Workstation Setup",
  description:
    "AI Workstation Setup by Zachary Banks / Banks Inc. in San Diego: practical AI workstation setup for small businesses.",
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
