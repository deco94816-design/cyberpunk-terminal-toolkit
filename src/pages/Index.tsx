import { useState } from 'react';
import AmexGlitchPoster from '@/components/AmexGlitchPoster';
import HackerTerminalLanding from '@/components/HackerTerminalLanding';
import MainTerminalApp from '@/components/MainTerminalApp';
import { Button } from '@/components/ui/button';

type ViewMode = 'menu' | 'amex' | 'landing' | 'terminal';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewMode>('amex');

  const renderView = () => {
    switch (currentView) {
      case 'amex':
        return <AmexGlitchPoster onNavigate={setCurrentView} />;
      case 'landing':
        return <HackerTerminalLanding onEnter={() => setCurrentView('terminal')} />;
      case 'terminal':
        return <MainTerminalApp onBack={() => setCurrentView('menu')} />;
      default:
        return (
          <div className="min-h-screen bg-black crt-screen flex items-center justify-center p-8">
            <div className="terminal-window max-w-2xl w-full">
              <div className="terminal-header px-4 py-3 text-lg">
                CYBER OPS CONTROL CENTER
              </div>
              <div className="terminal-content p-6 space-y-6">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-terminal-green mb-2">
                    CYBER OPS
                  </h1>
                  <p className="text-terminal-green/70">
                    Select your operation mode
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Button
                    onClick={() => setCurrentView('amex')}
                    className="neon-button w-full py-4 text-lg"
                  >
                    01 — AMEX GLITCH POSTER
                  </Button>
                  
                  <Button
                    onClick={() => setCurrentView('landing')}
                    className="neon-button w-full py-4 text-lg"
                  >
                    02 — HACKER TERMINAL ENTRY
                  </Button>
                  
                  <Button
                    onClick={() => setCurrentView('terminal')}
                    className="neon-button w-full py-4 text-lg"
                  >
                    03 — MAIN TERMINAL APP
                  </Button>
                </div>
                
                <div className="text-center text-xs text-terminal-green/50 mt-8">
                  🔒 Secure Access Terminal
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      {renderView()}
      
      {/* Back to menu button - only show when not in menu */}
      {currentView !== 'menu' && (
        <Button
          onClick={() => setCurrentView('menu')}
          className="fixed top-4 left-4 z-50 neon-button text-xs"
        >
          ← MENU
        </Button>
      )}
    </>
  );
};

export default Index;
