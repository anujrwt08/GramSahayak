import { useState, useCallback } from "react";
import { Header } from "@/components/Header";
import { VoiceButton } from "@/components/VoiceButton";
import { ResponseCard } from "@/components/ResponseCard";
import { SchemeCard } from "@/components/SchemeCard";
import { SchemeFinder } from "@/components/SchemeFinder";
import { Language, SUPPORTED_LANGUAGES } from "@/components/LanguageSelector";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { Sparkles, Shield, Users, Leaf } from "lucide-react";
import { SCHEMES_DATA } from "@/data/schemes";

// Demo schemes data (will be replaced with RAG results)
// Using imported data from @/data/schemes

const LANGUAGE_CONFIG: Record<string, {
  prefix: string;
  fallback: string;
  voiceFallback?: string
}> = {
  en: {
    prefix: "Regarding your query",
    fallback: "I'm sorry, I don't have information about that. You can ask about government schemes like PM-KISAN.",
  },
  hi: {
    prefix: "आपके सवाल के लिए",
    fallback: "माफ़ कीजिये, मुझे इस बारे में जानकारी नहीं है। आप सरकारी योजनाओं के बारे में पूछ सकते हैं।",
  },
  ta: {
    prefix: "உங்கள் கேள்விக்கு பதில் (Answer to your question)",
    fallback: "மன்னிக்கவும், என்னிடம் தகவல் இல்லை (Sorry, no info).",
    voiceFallback: "en-IN"
  },
  te: {
    prefix: "మీ ప్రశ్నకు సమాధానం (Answer to your question)",
    fallback: "క్షమించండి, నాకు సమాచారం లేదు (Sorry, no info).",
    voiceFallback: "en-IN"
  },
  bn: {
    prefix: "আপনার প্রশ্নের উত্তর (Answer to your question)",
    fallback: "দুঃখিত, আমার কাছে তথ্য নেই (Sorry, no info).",
    voiceFallback: "en-IN"
  },
  mr: {
    prefix: "आपल्या प्रश्नाचे उत्तर",
    fallback: "क्षमस्व, माझ्याकडे माहिती नाही.",
    voiceFallback: "hi-IN"
  },
  gu: {
    prefix: "તમારા પ્રશ્નનો જવાબ",
    fallback: "માફ કરશો, મારી પાસે માહિતી નથી.",
    voiceFallback: "hi-IN"
  },
  kn: {
    prefix: "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗೆ ಉತ್ತರ (Answer to your question)",
    fallback: "ಕ್ಷಮಿಸಿ, ನನ್ನ ಬಳಿ ಮಾಹಿತಿ ಇಲ್ಲ (Sorry, no info).",
    voiceFallback: "en-IN"
  },
  ml: {
    prefix: "നിങ്ങളുടെ ചോദ്യത്തിനുള്ള ഉത്തരം (Answer to your question)",
    fallback: "ക്ഷമിക്കണം, എനിക്ക് വിവരമില്ല (Sorry, no info).",
    voiceFallback: "en-IN"
  },
  pa: {
    prefix: "ਤੁਹਾਡੇ ਸਵਾਲ ਦਾ ਜਵਾਬ",
    fallback: "ਮਾਫ ਕਰਨਾ, ਮੇਰੇ ਕੋਲ ਜਾਣਕਾਰੀ ਨਹੀਂ ਹੈ.",
    voiceFallback: "hi-IN"
  },
  or: {
    prefix: "ଆପଣଙ୍କ ପ୍ରଶ୍ନର ଉତ୍ତର (Answer to your question)",
    fallback: "ଦୁଃଖିତ, ମୋ ପାଖରେ ସୂଚନା ନାହିଁ (Sorry, no info).",
    voiceFallback: "en-IN"
  }
};

const getDemoResponse = (query: string, language: Language) => {
  const normalize = (s: string) => s.toLowerCase().trim();
  const q = normalize(query);

  const scheme = SCHEMES_DATA.find(s =>
    s.keywords.some(k => q.includes(normalize(k))) ||
    normalize(s.title).includes(q) ||
    normalize(s.titleHindi).includes(q)
  );

  const config = LANGUAGE_CONFIG[language.code] || LANGUAGE_CONFIG['en'];

  if (scheme) {
    // If exact native translation isn't available, we use English/Hindi mix
    const schemeTitle = language.code === 'hi' ? scheme.titleHindi : scheme.title;

    // Construct the response
    return {
      text: `${config.prefix}: ${schemeTitle} - ${scheme.description} (${scheme.benefits})`,
      scheme: scheme
    };
  }

  // Fallback response
  return {
    text: config.fallback,
    scheme: null
  };
};

const Index = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(SUPPORTED_LANGUAGES[0]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentQuery, setCurrentQuery] = useState<string | null>(null);
  const [currentResponse, setCurrentResponse] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentScheme, setCurrentScheme] = useState<any | null>(null);
  const { speak, isSpeaking, stop } = useSpeechSynthesis({ lang: selectedLanguage.speechCode });

  const handleTranscript = useCallback(async (text: string) => {
    setCurrentQuery(text);
    setIsProcessing(true);
    setCurrentScheme(null);

    // Simulate processing (will be replaced with actual backend call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Get response based on keyword matching
    const { text: responseText, scheme } = getDemoResponse(text, selectedLanguage);
    const config = LANGUAGE_CONFIG[selectedLanguage.code];

    setCurrentResponse(responseText);
    setCurrentScheme(scheme);
    setIsProcessing(false);

    // Auto-speak the response
    // Use fallback voice if defined (to avoid reading English with Tamil voice which sounds bad)
    const speechLang = config?.voiceFallback || selectedLanguage.speechCode;
    speak(responseText, speechLang);
  }, [selectedLanguage, speak]);

  const handleSpeak = useCallback(() => {
    if (isSpeaking) {
      stop();
    } else if (currentResponse) {
      speak(currentResponse, selectedLanguage.speechCode);
    }
  }, [currentResponse, isSpeaking, selectedLanguage.speechCode, speak, stop]);

  return (
    <div className="min-h-screen bg-background">
      <Header
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />

      {/* Hero gradient background */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />

      <main className="relative">
        {/* Voice Input Section */}
        <section id="home" className="px-4 pt-16 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <div className="mb-10 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Ask by Voice, Get Instant Answers
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Your personal assistant for government schemes and benefits
              </p>
            </div>

            {/* Voice Button */}
            <div className="flex justify-center mb-8">
              <VoiceButton
                onTranscript={handleTranscript}
                isProcessing={isProcessing}
                isSpeaking={isSpeaking}
              />
            </div>

            {/* Instructions */}
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              {isProcessing ? (
                <span className="text-primary font-medium">Searching for answer...</span>
              ) : isSpeaking ? (
                <span className="text-accent font-medium">Speaking answer...</span>
              ) : (
                <>Press the microphone button and ask your question</>
              )}
            </p>
          </div>
        </section>

        {/* Response Section */}
        {currentQuery && currentResponse && (
          <section className="px-4 py-6">
            <ResponseCard
              query={currentQuery}
              response={currentResponse}
              language={selectedLanguage.name}
              onSpeak={handleSpeak}
              isSpeaking={isSpeaking}
              scheme={currentScheme}
            />
          </section>
        )}

        {/* Scheme Finder Section */}
        <section id="scheme-finder" className="px-4 py-12 bg-gradient-to-b from-secondary/20 to-transparent">
          <SchemeFinder />
        </section>

        {/* Popular Schemes Section */}
        <section id="popular-schemes" className="px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Explore All Schemes</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-3">
                Government Schemes & Benefits
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse through our comprehensive collection of government welfare programs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SCHEMES_DATA.map((scheme, index) => {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const { keywords, ...schemeProps } = scheme;
                return <SchemeCard key={index} {...schemeProps} />;
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-16 bg-gradient-to-b from-transparent via-secondary/30 to-transparent">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5 shadow-md">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Secure & Private</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your information is completely safe and never shared with third parties
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-5 shadow-md">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">For Everyone</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Available in 10+ Indian languages to serve all communities
                </p>
              </div>
              <div className="text-center p-8 rounded-2xl bg-card border border-border shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-md">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Simple & Easy</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Just speak your question - no typing required
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-12 border-t border-border bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-md">
                  <span className="text-xl font-bold text-white">GS</span>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  GramSahayak
                </h3>
              </div>
              <p className="text-muted-foreground max-w-md mx-auto">
                Empowering Rural India with Voice Technology
              </p>
            </div>
            <div className="text-center text-sm text-muted-foreground">
              <p>© 2024 GramSahayak. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
