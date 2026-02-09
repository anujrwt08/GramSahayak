import { Search, Home, Info, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector, Language } from "./LanguageSelector";
import { useState } from "react";

interface HeaderProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const Header = ({ selectedLanguage, onLanguageChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full px-4 py-3 border-b border-border glass-effect sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold text-primary-foreground">GS</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground leading-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GramSahayak
            </h1>
            <p className="text-xs text-muted-foreground">Government Schemes Assistant</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('home')}
            className="gap-2 hover:bg-secondary"
          >
            <Home className="w-4 h-4" />
            Home
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('scheme-finder')}
            className="gap-2 hover:bg-secondary"
          >
            <Search className="w-4 h-4" />
            Find Schemes
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('popular-schemes')}
            className="gap-2 hover:bg-secondary"
          >
            <Info className="w-4 h-4" />
            All Schemes
          </Button>
        </nav>

        {/* Right section */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSelector
              selectedLanguage={selectedLanguage}
              onLanguageChange={onLanguageChange}
            />
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
          <nav className="flex flex-col gap-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('home')}
              className="justify-start gap-2"
            >
              <Home className="w-4 h-4" />
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('scheme-finder')}
              className="justify-start gap-2"
            >
              <Search className="w-4 h-4" />
              Find Schemes
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection('popular-schemes')}
              className="justify-start gap-2"
            >
              <Info className="w-4 h-4" />
              All Schemes
            </Button>
            <div className="pt-2 border-t border-border mt-2">
              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={onLanguageChange}
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
