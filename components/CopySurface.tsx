"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

export type ChatPlatform = {
  name: string;
  mark: string;
  href: string;
  accent: string;
  instruction: string;
};

type CopySurfaceProps = {
  prompt: string;
  platforms: ChatPlatform[];
};

export function CopySurface({ prompt, platforms }: CopySurfaceProps) {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setCopyError(false);
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  }

  return (
    <div className="promptLauncher" aria-label="Copy prompt and open an AI chat platform">
      <div className="promptConsole">
        <div className="consoleTop">
          <span>Prompt to paste</span>
          <strong>{copied ? "Ready for chat" : "Step 1"}</strong>
        </div>
        <pre>{prompt}</pre>
        <div className="consoleActions">
          <button type="button" onClick={copyPrompt}>
            {copied ? "Prompt copied" : "Copy prompt"}
          </button>
          <p aria-live="polite">
            {copied && "Now open a platform and paste."}
            {copyError && "Copy failed. Select the prompt text and copy it manually."}
            {!copied && !copyError && "Copy once, then choose your favorite AI chat tool."}
          </p>
        </div>
      </div>

      <div className="platformDock">
        {platforms.map((platform) => (
          <a
            className="platformCard"
            href={platform.href}
            key={platform.name}
            rel="noreferrer"
            style={{ "--platform-accent": platform.accent } as CSSProperties}
            target="_blank"
          >
            <span className="platformMark" aria-hidden="true">
              {platform.mark}
            </span>
            <span>
              <strong>{platform.name}</strong>
              <small>{platform.instruction}</small>
            </span>
            <em>Open</em>
          </a>
        ))}
      </div>
    </div>
  );
}
