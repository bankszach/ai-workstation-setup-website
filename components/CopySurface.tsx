"use client";

import { useEffect, useRef, useState } from "react";

type CopyItem = {
  label: string;
  helper: string;
  value: string;
};

type CopySurfaceProps = {
  items: CopyItem[];
};

export function CopySurface({ items }: CopySurfaceProps) {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const [copyError, setCopyError] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function copyValue(item: CopyItem) {
    try {
      await navigator.clipboard.writeText(item.value);
      setCopiedLabel(item.label);
      setCopyError(false);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => setCopiedLabel(null), 1800);
    } catch {
      setCopiedLabel(null);
      setCopyError(true);
    }
  }

  return (
    <div className="copySurface" aria-label="Copy prompts for AI chat tools">
      <div className="copyHeader">
        <span>AI Chat Intake</span>
        <strong>copy, paste, ask</strong>
      </div>
      <div className="copyList">
        {items.map((item) => (
          <article className="copyItem" key={item.label}>
            <div>
              <h3>{item.label}</h3>
              <p>{item.helper}</p>
            </div>
            <pre>{item.value}</pre>
            <button type="button" onClick={() => copyValue(item)}>
              {copiedLabel === item.label ? "Copied" : "Copy"}
            </button>
          </article>
        ))}
      </div>
      <p className="copyStatus" aria-live="polite">
        {copiedLabel && `${copiedLabel} copied.`}
        {copyError && "Copy failed. Select the text and copy it manually."}
        {!copiedLabel && !copyError && "Choose a prompt to copy."}
      </p>
    </div>
  );
}
