import { Volume2, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Scheme } from "@/data/schemes";
import { SchemeCard } from "@/components/SchemeCard";

interface ResponseCardProps {
  query: string;
  response: string;
  language: string;
  onSpeak?: () => void;
  isSpeaking?: boolean;
  scheme?: Scheme | null;
}

export const ResponseCard = ({
  query,
  response,
  language,
  onSpeak,
  isSpeaking = false,
  scheme,
}: ResponseCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in-up">
      {/* Main Text Response Card */}
      <div className="rounded-2xl border border-border shadow-lg overflow-hidden bg-card">
        {/* Query section */}
        <div className="px-6 py-4 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-border">
          <p className="text-xs font-medium text-primary mb-1.5">Your Question</p>
          <p className="text-foreground font-medium text-lg">{query}</p>
        </div>

        {/* Response section */}
        <div className="px-6 py-6 bg-card">
          <p className="text-xs font-medium text-muted-foreground mb-3">Answer</p>
          <p className="text-foreground text-lg leading-relaxed">{response}</p>
        </div>

        {/* Actions */}
        <div className="px-6 py-4 bg-secondary/30 border-t border-border flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={onSpeak}
            className={cn(
              "gap-2 transition-all shadow-sm",
              isSpeaking && "bg-accent text-accent-foreground shadow-glow"
            )}
          >
            <Volume2 className={cn("w-4 h-4", isSpeaking && "animate-pulse")} />
            {isSpeaking ? "Speaking..." : "Listen"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            className="gap-2"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-600" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>

      {/* Associated Scheme Flashcard */}
      {scheme && (
        <div className="animate-fade-in-up delay-200">
          <div className="flex items-center gap-2 mb-4 px-1">
            <div className="h-1 w-12 rounded-full bg-gradient-primary"></div>
            <span className="text-sm font-semibold text-foreground">Related Scheme Details</span>
          </div>
          {(() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { keywords, ...schemeProps } = scheme;
            return <SchemeCard {...schemeProps} />;
          })()}
        </div>
      )}
    </div>
  );
};
