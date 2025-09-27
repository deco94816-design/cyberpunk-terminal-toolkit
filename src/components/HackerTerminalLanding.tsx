import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import hackerLanding from '@/assets/hacker-terminal-landing.webp';

const HackerTerminalLanding = ({ onEnter }: { onEnter: () => void }) => {
  const [showModal, setShowModal] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  
  const headerText = "Created server for LAN play - Frames Per Second: 30";

  useEffect(() => {
    // Type out header text
    let index = 0;
    const interval = setInterval(() => {
      if (index < headerText.length) {
        setTerminalText(headerText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = () => {
    setShowModal(true);
  };

  const handleAccept = () => {
    setAccepted(true);
    setShowModal(false);
    setTimeout(() => {
      onEnter();
    }, 500);
  };

  return (
    <div className="relative min-h-screen bg-black crt-screen overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hackerLanding})` }}
      />

      {/* Main content */}
      <div className="relative z-10 p-8">
        {/* Header */}
        <div className="terminal-window p-4 mb-6 max-w-2xl">
          <div className="terminal-header px-3 py-2 text-sm">
            [HUB]
          </div>
          <div className="terminal-content p-3">
            <div className="typing text-terminal-green">
              {terminalText}
            </div>
          </div>
        </div>

        {/* Grid of terminal windows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {/* Password Tools */}
          <div className="terminal-window">
            <div className="terminal-header px-3 py-2 text-xs">
              Password Required:
            </div>
            <div className="terminal-content p-3 space-y-1 text-xs">
              <div>Dictionary Cracker</div>
              <div>Password Breaker</div>
              <div>break password</div>
            </div>
          </div>

          {/* File Manager */}
          <div className="terminal-window">
            <div className="terminal-header px-3 py-2 text-xs">
              Delete
            </div>
            <div className="terminal-content p-3 space-y-1 text-xs">
              <div>File Copier</div>
              <div>File Deleter</div>
            </div>
          </div>

          {/* Inbox */}
          <div className="terminal-window">
            <div className="terminal-header px-3 py-2 text-xs">
              Inbox
            </div>
            <div className="terminal-content p-3 space-y-1 text-xs">
              <div>Your Mail</div>
              <div>Rusha Importers Mission - unread</div>
              <div>GN-Sabotaged - unread</div>
              <div>GN-Dead End - unread</div>
            </div>
          </div>

          {/* Mission List */}
          <div className="terminal-window">
            <div className="terminal-header px-3 py-2 text-xs">
              Mission List
            </div>
            <div className="terminal-content p-3 space-y-1 text-xs">
              <div>From: Rusha Importers</div>
              <div>Reward: 8775c</div>
              <div>Message:</div>
              <div>Break into Galactacon and</div>
              <div>destroy service7203</div>
              <div className="mt-2 text-terminal-glow">
                [mission complete]
              </div>
              <div>[abort mission]</div>
            </div>
          </div>

          {/* Server Info */}
          <div className="terminal-window">
            <div className="terminal-header px-3 py-2 text-xs">
              Server: Gangee
            </div>
            <div className="terminal-content p-3 space-y-1 text-xs">
              <div>Username: Rune T</div>
              <div>[Disconnect]</div>
              <div>Galactacon Servi</div>
              <div>Locust Inc</div>
              <div>Darkus Films</div>
              <div>Sangee Corp</div>
              <div>Iqta Research La</div>
              <div>Rusha Importers</div>
              <div>VhopoCon</div>
            </div>
          </div>

          {/* Command Terminal */}
          <div className="terminal-window">
            <div className="terminal-header px-3 py-2 text-xs">
              Console
            </div>
            <div className="terminal-content p-3 space-y-1 text-xs">
              <div>Disk Space : 10 CPU Speed 27</div>
              <div>1.Dictionary Cracker</div>
              <div>2.-DC-Dat1</div>
              <div>3.-DC-Dat2</div>
              <div>4.Trace Alerter</div>
              <div>5.Password Breaker</div>
              <div>6.vTcpProxy</div>
              <div>7.vTan Proxy Bypass</div>
              <div>8.ram</div>
              <div>9.ram</div>
              <div>10.ram</div>
            </div>
          </div>
        </div>

        {/* Enter Button */}
        <div className="flex justify-center">
          <Button 
            onClick={handleEnterClick}
            className={`neon-button px-12 py-4 text-xl ${accepted ? 'animate-pulse' : ''}`}
            disabled={accepted}
          >
            {accepted ? 'ACCESSING...' : 'ENTER'}
          </Button>
        </div>
      </div>

      {/* Risk Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="terminal-window p-6 max-w-md mx-4">
            <div className="terminal-header px-3 py-2 text-sm mb-4">
              Accept Access & Terms
            </div>
            <div className="terminal-content p-4 space-y-4">
              <p className="text-terminal-green text-sm">
                By proceeding, you acknowledge access to this system. 
                Continue with network access protocols.
              </p>
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="accept" 
                  className="w-4 h-4 accent-terminal-green"
                />
                <label htmlFor="accept" className="text-xs">
                  I understand the access requirements
                </label>
              </div>
              <div className="flex space-x-4">
                <Button 
                  onClick={handleAccept}
                  className="neon-button flex-1"
                >
                  Accept
                </Button>
                <Button 
                  onClick={() => setShowModal(false)}
                  variant="outline"
                  className="flex-1 border-terminal-green text-terminal-green"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HackerTerminalLanding;