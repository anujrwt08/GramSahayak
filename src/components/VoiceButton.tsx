import { useState, useCallback, useRef, useEffect } from "react";
import { Mic, Square, Volume2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Web Speech API types
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognitionInstance {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onstart: (() => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

interface SpeechRecognitionConstructor {
  new(): SpeechRecognitionInstance;
}

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionConstructor;
    webkitSpeechRecognition?: SpeechRecognitionConstructor;
  }
}

interface VoiceButtonProps {
  onTranscript: (text: string) => void;
  onRecordingStart?: () => void;
  onRecordingEnd?: () => void;
  disabled?: boolean;
  isProcessing?: boolean;
  isSpeaking?: boolean;
}

export const VoiceButton = ({
  onTranscript,
  onRecordingStart,
  onRecordingEnd,
  disabled = false,
  isProcessing = false,
  isSpeaking = false,
}: VoiceButtonProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Recording timer
  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setRecordingTime(0);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRecording]);

  const startRecording = useCallback(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      console.error("Speech recognition not supported");
      return;
    }

    const recognition = new SpeechRecognitionAPI();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "hi-IN"; // Default to Hindi

    recognition.onstart = () => {
      setIsRecording(true);
      onRecordingStart?.();
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error);
      setIsRecording(false);
      onRecordingEnd?.();
    };

    recognition.onend = () => {
      setIsRecording(false);
      onRecordingEnd?.();
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [onTranscript, onRecordingStart, onRecordingEnd]);

  const stopRecording = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null;
    }
  }, []);

  const handleClick = () => {
    if (disabled || isProcessing || isSpeaking) return;

    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const buttonState = isRecording
    ? "recording"
    : isSpeaking
      ? "speaking"
      : isProcessing
        ? "processing"
        : "idle";

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getStatusText = () => {
    if (isRecording) return "Listening...";
    if (isSpeaking) return "Speaking...";
    if (isProcessing) return "Processing...";
    return "Tap to speak";
  };

  return (
    <div className="relative flex flex-col items-center justify-center gap-6">
      {/* Status Text */}
      <div className="text-center min-h-[60px] flex flex-col items-center justify-center">
        <p className={cn(
          "text-lg font-semibold transition-all duration-300",
          isRecording && "text-red-600 dark:text-red-400 animate-pulse",
          isSpeaking && "text-accent",
          isProcessing && "text-primary",
          !isRecording && !isSpeaking && !isProcessing && "text-muted-foreground"
        )}>
          {getStatusText()}
        </p>
        {isRecording && (
          <p className="text-sm text-muted-foreground mt-1 animate-fade-in-up">
            {formatTime(recordingTime)}
          </p>
        )}
      </div>

      {/* Voice Button Container */}
      <div className="relative flex items-center justify-center">
        {/* Pulse rings */}
        {isRecording && (
          <>
            <div className="absolute w-40 h-40 rounded-full bg-red-500/30 animate-pulse-ring-recording" />
            <div className="absolute w-40 h-40 rounded-full bg-red-500/20 animate-pulse-ring-recording [animation-delay:0.3s]" />
            <div className="absolute w-40 h-40 rounded-full bg-red-500/10 animate-pulse-ring-recording [animation-delay:0.6s]" />
          </>
        )}

        {!isRecording && !isProcessing && !isSpeaking && (
          <div className="absolute w-36 h-36 rounded-full bg-primary/20 animate-pulse-ring" />
        )}

        {isSpeaking && (
          <>
            <div className="absolute w-40 h-40 rounded-full bg-accent/30 animate-pulse-ring" />
            <div className="absolute w-40 h-40 rounded-full bg-accent/15 animate-pulse-ring [animation-delay:0.5s]" />
          </>
        )}

        {/* Main button */}
        <button
          onClick={handleClick}
          disabled={disabled || isProcessing}
          className={cn(
            "relative z-10 w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 transform",
            "focus:outline-none focus:ring-4 focus:ring-primary/30",
            "shadow-lg hover:shadow-xl",
            buttonState === "idle" && "gradient-primary hover:scale-105 active:scale-95",
            buttonState === "recording" && "bg-red-600 shadow-recording scale-110",
            buttonState === "speaking" && "gradient-accent shadow-glow",
            buttonState === "processing" && "bg-muted animate-pulse cursor-wait",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          aria-label={isRecording ? "Stop recording" : "Start recording"}
        >
          {buttonState === "recording" ? (
            <Square className="w-12 h-12 text-white fill-current" />
          ) : buttonState === "speaking" ? (
            <Volume2 className="w-14 h-14 text-white animate-pulse" />
          ) : buttonState === "processing" ? (
            <Loader2 className="w-14 h-14 text-primary animate-spin" />
          ) : (
            <Mic className={cn(
              "w-14 h-14 text-white transition-transform",
              !isProcessing && "animate-float"
            )} />
          )}
        </button>

        {/* Voice waves for recording state */}
        {isRecording && (
          <div className="absolute -bottom-12 flex items-end gap-1.5">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-red-600 dark:bg-red-400 rounded-full animate-voice-wave"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  height: "8px"
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Hint Text */}
      {!isRecording && !isProcessing && !isSpeaking && (
        <div className="text-center max-w-md animate-fade-in-up">
          <p className="text-sm text-muted-foreground">
            Press and ask your question in any language
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Supported: Hindi, English, Tamil, Telugu, and 6 more
          </p>
        </div>
      )}

      {/* Processing Hint */}
      {isProcessing && (
        <div className="text-center max-w-md animate-fade-in-up">
          <p className="text-sm text-primary font-medium">
            Finding the best answer for you...
          </p>
        </div>
      )}

      {/* Speaking Hint */}
      {isSpeaking && (
        <div className="text-center max-w-md animate-fade-in-up">
          <p className="text-sm text-accent font-medium">
            Listen to the answer or read below
          </p>
        </div>
      )}
    </div>
  );
};
