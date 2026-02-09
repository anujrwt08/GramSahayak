import { ExternalLink, FileText, Users, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SchemeCardProps {
  title: string;
  titleHindi?: string;
  description: string;
  benefits: string;
  eligibility: string;
  link?: string;
}

export const SchemeCard = ({
  title,
  titleHindi,
  description,
  benefits,
  eligibility,
  link,
}: SchemeCardProps) => {
  return (
    <div className="rounded-2xl border border-border shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 bg-card">
      {/* Header */}
      <div className="px-6 py-4 gradient-primary">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {titleHindi && (
          <p className="text-white/90 text-sm mt-0.5">{titleHindi}</p>
        )}
      </div>

      {/* Content */}
      <div className="px-6 py-5 space-y-4">
        <p className="text-foreground/90 leading-relaxed">{description}</p>

        {/* Benefits */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
            <IndianRupee className="w-4 h-4 text-green-700 dark:text-green-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Benefits</p>
            <p className="text-foreground">{benefits}</p>
          </div>
        </div>

        {/* Eligibility */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
            <Users className="w-4 h-4 text-blue-700 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Eligibility</p>
            <p className="text-foreground">{eligibility}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      {link && (
        <div className="px-6 py-4 bg-secondary/30 border-t border-border">
          <Button variant="outline" size="sm" className="gap-2 w-full" asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FileText className="w-4 h-4" />
              Learn More
              <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
        </div>
      )}
    </div>
  );
};
