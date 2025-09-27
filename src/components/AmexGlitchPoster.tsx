import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import amexPoster from '@/assets/amex-glitch-poster.webp';

const AmexGlitchPoster = ({ onNavigate }: { onNavigate: (view: 'landing' | 'terminal' | 'menu') => void }) => {
  const [binaryLines, setBinaryLines] = useState<string[]>([]);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const targetText = 'AMEX';

  useEffect(() => {
    // Generate floating binary
    const generateBinary = () => {
      const lines = [];
      for (let i = 0; i < 20; i++) {
        const binary = Array.from({ length: 16 }, () => Math.random() > 0.5 ? '1' : '0').join('');
        lines.push(binary);
      }
      setBinaryLines(lines);
    };

    generateBinary();
    const interval = setInterval(generateBinary, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Typing animation for AMEX
    if (currentIndex < targetText.length) {
      const timeout = setTimeout(() => {
        setTypedText(targetText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 800);
      return () => clearTimeout(timeout);
    } else {
      // Show navigation after completing text and waiting 15 seconds
      const timeout = setTimeout(() => {
        setShowNavigation(true);
      }, 15000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, targetText]);

  return (
    <div className="relative min-h-screen bg-black crt-screen overflow-hidden">
      {/* Background poster image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${amexPoster})` }}
      />
      
      {/* Floating binary */}
      {binaryLines.map((line, index) => (
        <div
          key={index}
          className="binary-float text-xs"
          style={{
            left: `${Math.random() * 90}%`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        >
          {line}
        </div>
      ))}

      {/* Header binary */}
      <div className="absolute top-8 left-8 text-cyber-pink text-xs font-mono">
        01110011 01110100 01100001 01110010 01110100 01101001 01101110 01100111
      </div>

      {/* Main AMEX text */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="seven-segment text-8xl md:text-9xl lg:text-[12rem] font-black tracking-wider">
            {typedText}
            {currentIndex < targetText.length && <span className="typing"></span>}
          </h1>
        </div>
      </div>

      {/* Terminal error messages */}
      <div className="absolute bottom-16 left-8 space-y-2 text-cyber-pink text-xs font-mono">
        <div className="glitch-text">AN EXCEPTION HAS OCCURRED</div>
        <div className="glitch-text">L.I.F.E.A.I.HAS_STOPPED_RESPONDING</div>
        <div className="glitch-text">WOULD YOU LIKE TO K1LL?</div>
        <div className="mt-4">
          <div>DATABASE_CORRUPTED</div>
          <div>PROGRAM_RESTARTED_SUCCESSFULLY</div>
          <div className="text-cyber-magenta">HELLO_WORLD</div>
          <div>HELLO?</div>
          <div>?</div>
          <div>???????????????????????????</div>
        </div>
      </div>

      {/* Navigation buttons after 15 seconds */}
      {showNavigation && (
        <div className="absolute bottom-16 right-8 space-y-3 animate-fade-in">
          <Button
            onClick={() => onNavigate('landing')}
            className="neon-button block w-48"
          >
            ENTER TERMINAL
          </Button>
          <Button
            onClick={() => onNavigate('terminal')}
            className="neon-button block w-48"
          >
            DIRECT ACCESS
          </Button>
          <Button
            onClick={() => onNavigate('menu')}
            className="neon-button block w-48"
          >
            MAIN MENU
          </Button>
        </div>
      )}

      {/* Scan line effect */}
      <div className="scan-line absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default AmexGlitchPoster;