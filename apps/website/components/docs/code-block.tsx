"use client";

import { useState } from "react";
import { cn } from "@ditherweb/ui";

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "TSX",
  filename,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback for environments where clipboard API is restricted
      const textArea = document.createElement("textarea");
      textArea.value = code;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  return (
    <div
      className={cn(
        "bevel-raised bg-surface font-mono text-xs overflow-hidden border border-border shadow-sm",
        className,
      )}
    >
      {/* Code Header Bar */}
      <div className="flex items-center justify-between border-b border-border bg-muted/40 px-3 py-1.5 select-none">
        <div className="flex items-center gap-2">
          <span className="bevel-inset bg-background px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
            {language}
          </span>
          {filename && (
            <span className="text-[11px] text-muted-foreground truncate max-w-[200px] sm:max-w-none">
              {filename}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied code to clipboard" : "Copy code to clipboard"}
          className={cn(
            "bevel-raised active:bevel-pressed px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-colors select-none flex items-center gap-1.5",
            copied
              ? "bg-primary text-primary-foreground"
              : "bg-surface text-foreground hover:bg-muted",
          )}
        >
          <span>{copied ? "✓" : "📋"}</span>
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>

      {/* Code Body */}
      <div className="bevel-inset bg-background p-4 overflow-x-auto">
        <pre className="text-foreground font-mono text-xs leading-relaxed whitespace-pre font-normal">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
