import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
  tone?: "default" | "muted";
};

export function Section({ title, children, tone = "default" }: SectionProps) {
  return (
    <section className={`section ${tone === "muted" ? "muted" : ""}`}>
      <div className="wrap">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
