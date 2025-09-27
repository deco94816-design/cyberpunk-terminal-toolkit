import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const MainTerminalApp = ({ onBack }: { onBack: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [deviceStatus, setDeviceStatus] = useState('ATTEMPTING CONNECTION...');
  const [showDeviceModal, setShowDeviceModal] = useState(false);

  useEffect(() => {
    // Simulate log streaming
    const logMessages = [
      '> Initializing secure connection...',
      '> Bypassing firewall protocols...',
      '> Accessing encrypted database...',
      '> Downloading file manifest...',
      '> Running data validation checks...',
      '> Connection established successfully',
      '> WARNING: Intrusion detected',
      '> Implementing countermeasures...',
      '> System anomaly detected in sector 7',
      '> Rerouting through proxy servers...',
    ];

    let currentIndex = 0;
    const logInterval = setInterval(() => {
      if (currentIndex < logMessages.length) {
        setLogs(prev => [...prev, logMessages[currentIndex]]);
        currentIndex++;
      } else {
        currentIndex = 0;
        setLogs([]);
      }
    }, 2000);

    // Simulate device connection status changes
    const statusMessages = [
      'ATTEMPTING CONNECTION...',
      'ESTABLISHING LINK...',
      'SIMULATION: VISUAL LINK ACTIVE',
      'SIMULATION: DATA STREAMING',
      'CONNECTION TIMEOUT',
      'RETRYING CONNECTION...',
    ];

    let statusIndex = 0;
    const statusInterval = setInterval(() => {
      setDeviceStatus(statusMessages[statusIndex]);
      statusIndex = (statusIndex + 1) % statusMessages.length;
    }, 3000);

    return () => {
      clearInterval(logInterval);
      clearInterval(statusInterval);
    };
  }, []);

  const fileList = [
    'DC-Dat1.enc', 'DC-Dat2.enc', 'system.log', 'access.db',
    'config.xml', 'manifest.json', 'security.key', 'backup.sql'
  ];

  const missionList = [
    'Infiltrate Galactacon Systems',
    'Retrieve Corporate Data Files',
    'Bypass Security Protocols',
    'Extract User Database',
    'Deploy Monitoring Scripts',
    'Maintain Stealth Mode'
  ];

  return (
    <div className="min-h-screen bg-black crt-screen p-4 overflow-hidden">
      {/* Top status bar */}
      <div className="terminal-window mb-4">
        <div className="terminal-header px-3 py-2 flex justify-between items-center">
          <span>HACKER TERMINAL v2.1.3</span>
          <div className="flex space-x-4">
            <span className="text-xs">CPU: 47%</span>
            <span className="text-xs">MEM: 63%</span>
            <Button 
              onClick={onBack}
              className="text-xs px-2 py-1 bg-red-600 hover:bg-red-700"
            >
              EXIT
            </Button>
          </div>
        </div>
      </div>

      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-120px)]">
        {/* Left column */}
        <div className="space-y-4">
          {/* Console/Logs */}
          <div className="terminal-window h-64">
            <div className="terminal-header px-3 py-2 text-sm">
              Console Output
            </div>
            <div className="terminal-content p-3 h-48 overflow-y-auto">
              {logs.map((log, index) => (
                <div key={index} className="text-xs mb-1 animate-fade-in">
                  {log}
                </div>
              ))}
              <div className="text-xs typing text-terminal-glow">
                {logs.length > 0 && '> Awaiting next command...'}
              </div>
            </div>
          </div>

          {/* File Manager */}
          <div className="terminal-window flex-1">
            <div className="terminal-header px-3 py-2 text-sm">
              File Manager
            </div>
            <div className="terminal-content p-3 space-y-1">
              {fileList.map((file, index) => (
                <div key={index} className="text-xs flex justify-between hover:bg-terminal-green/10 px-2 py-1 cursor-pointer">
                  <span>{file}</span>
                  <span className="text-terminal-glow">{Math.floor(Math.random() * 1000)}KB</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center column */}
        <div className="space-y-4">
          {/* Device Intercept */}
          <div className="terminal-window">
            <div className="terminal-header px-3 py-2 text-sm flex justify-between">
              <span>SIMULATED DEVICE</span>
              <span className="text-xs text-yellow-400">FOR STORY ONLY</span>
            </div>
            <div className="terminal-content p-3">
              <div className="flex items-center justify-center h-32 border border-terminal-green/30 mb-4">
                <div className="text-center">
                  <div className="w-16 h-16 border-2 border-terminal-green mx-auto mb-2 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div className="text-xs">{deviceStatus}</div>
                  {deviceStatus.includes('SIMULATION') && (
                    <div className="w-4 h-4 border-2 border-terminal-green border-t-transparent rounded-full animate-spin mx-auto mt-2"></div>
                  )}
                </div>
              </div>
              <Button 
                onClick={() => setShowDeviceModal(true)}
                className="neon-button w-full text-xs"
              >
                VIEW SIMULATION DETAILS
              </Button>
            </div>
          </div>

          {/* Tools */}
          <div className="terminal-window flex-1">
            <div className="terminal-header px-3 py-2 text-sm">
              Hacking Tools
            </div>
            <div className="terminal-content p-3 space-y-2">
              <Button className="neon-button w-full text-xs justify-start">Dictionary Cracker</Button>
              <Button className="neon-button w-full text-xs justify-start">Password Breaker</Button>
              <Button className="neon-button w-full text-xs justify-start">Port Scanner</Button>
              <Button className="neon-button w-full text-xs justify-start">SQL Injector</Button>
              <Button className="neon-button w-full text-xs justify-start">Proxy Bypass</Button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-4">
          {/* Mission List */}
          <div className="terminal-window">
            <div className="terminal-header px-3 py-2 text-sm">
              Active Missions
            </div>
            <div className="terminal-content p-3 space-y-2">
              {missionList.map((mission, index) => (
                <div key={index} className="text-xs p-2 border border-terminal-green/30 hover:bg-terminal-green/10">
                  <div className="flex justify-between items-center">
                    <span>{mission}</span>
                    <span className={`w-2 h-2 rounded-full ${
                      index < 2 ? 'bg-green-500' : index < 4 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Server List */}
          <div className="terminal-window flex-1">
            <div className="terminal-header px-3 py-2 text-sm">
              Target Servers
            </div>
            <div className="terminal-content p-3 space-y-1">
              {[
                'Galactacon Corp',
                'Darkus Films Ltd',
                'Rusha Importers',
                'VhopoCon Industries',
                'Sangee Corporation',
                'Iqta Research Labs'
              ].map((server, index) => (
                <div key={index} className="text-xs flex justify-between hover:bg-terminal-green/10 px-2 py-1 cursor-pointer">
                  <span>{server}</span>
                  <span className="text-terminal-glow">
                    {Math.random() > 0.5 ? 'ONLINE' : 'SECURED'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Inbox */}
          <div className="terminal-window">
            <div className="terminal-header px-3 py-2 text-sm">
              Secure Inbox
            </div>
            <div className="terminal-content p-3 space-y-1">
              <div className="text-xs p-2 bg-terminal-green/10">
                <div className="font-bold">Mission Update</div>
                <div className="text-terminal-glow">New target identified...</div>
              </div>
              <div className="text-xs p-2">
                <div>System Alert</div>
                <div className="text-red-400">Security breach detected</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Device Modal */}
      {showDeviceModal && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <div className="terminal-window max-w-lg mx-4">
            <div className="terminal-header px-3 py-2 text-sm">
              SIMULATION DISCLAIMER
            </div>
            <div className="terminal-content p-4 space-y-4">
              <div className="text-center text-yellow-400 font-bold">
                ⚠️ EDUCATIONAL SIMULATION ONLY ⚠️
              </div>
              <p className="text-xs">
                This application is a fictional simulation created for entertainment and educational purposes only. 
                No real hacking, device interception, or unauthorized access is taking place.
              </p>
              <p className="text-xs">
                All displayed data, connections, and activities are simulated and not connected to any real systems.
              </p>
              <Button 
                onClick={() => setShowDeviceModal(false)}
                className="neon-button w-full"
              >
                UNDERSTOOD
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Scan line overlay */}
      <div className="scan-line absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default MainTerminalApp;