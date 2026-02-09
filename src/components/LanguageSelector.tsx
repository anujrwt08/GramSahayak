import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  speechCode: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", speechCode: "hi-IN" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", speechCode: "ta-IN" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", speechCode: "te-IN" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", speechCode: "bn-IN" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", speechCode: "mr-IN" },
  { code: "gu", name: "Gujarati", nativeName: "ગુજરાતી", speechCode: "gu-IN" },
  { code: "kn", name: "Kannada", nativeName: "ಕನ್ನಡ", speechCode: "kn-IN" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം", speechCode: "ml-IN" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", speechCode: "pa-IN" },
  { code: "or", name: "Odia", nativeName: "ଓଡ଼ିଆ", speechCode: "or-IN" },
];

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageSelector = ({
  selectedLanguage,
  onLanguageChange,
}: LanguageSelectorProps) => {
  const handleChange = (code: string) => {
    const language = SUPPORTED_LANGUAGES.find((l) => l.code === code);
    if (language) {
      onLanguageChange(language);
    }
  };

  return (
    <Select value={selectedLanguage.code} onValueChange={handleChange}>
      <SelectTrigger className="w-auto min-w-[160px] gap-2 bg-card border-border shadow-soft">
        <Globe className="w-4 h-4 text-muted-foreground" />
        <SelectValue>
          <span className="flex items-center gap-2">
            <span className="font-medium">{selectedLanguage.nativeName}</span>
            <span className="text-muted-foreground text-sm">({selectedLanguage.name})</span>
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="bg-card border-border">
        {SUPPORTED_LANGUAGES.map((language) => (
          <SelectItem
            key={language.code}
            value={language.code}
            className="cursor-pointer hover:bg-accent/10"
          >
            <span className="flex items-center gap-2">
              <span className="font-medium">{language.nativeName}</span>
              <span className="text-muted-foreground text-sm">({language.name})</span>
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
