import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { setMuted, getMuted } from '../utils/audio';
import { useTheme } from '../utils/theme';

export default function Navbar({ onReset, onStart }) {
  const [muted, setMutedState] = useState(getMuted());
  const [timeStr, setTimeStr] = useState('23:47:12 UTC+0');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const hrs = String(d.getUTCHours()).padStart(2, '0');
      const mins = String(d.getUTCMinutes()).padStart(2, '0');
      const secs = String(d.getUTCSeconds()).padStart(2, '0');
      setTimeStr(`${hrs}:${mins}:${secs} UTC+0`);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const next = !muted;
    setMuted(next);
    setMutedState(next);
  };

  return (
    <header className="cyber-navbar">
      {/* Left Brand */}
      <div className="nav-left">
        <div className="nav-brand" onClick={onReset} style={{ cursor: 'pointer' }}>
          <div className="pixel-mark">
            <span>✦</span>
          </div>
          <span className="brand-logo-text">DEVMETRICS<span className="brand-cursor">_</span></span>
        </div>

        <nav className="nav-menu">
          <span className="nav-item">METHODOLOGY</span>
          <span className="nav-sep">/</span>
          <span className="nav-item">VECTORS</span>
          <span className="nav-sep">/</span>
          <span className="nav-item">TELEMETRY</span>
          <span className="nav-sep">/</span>
          <span className="nav-item">MANIFESTO</span>
        </nav>
      </div>

      {/* Right Telemetry & Actions */}
      <div className="nav-right">
        <div className="sys-time-box">
          <span className="sys-label">SYS.TIME</span>
          <span className="sys-clock">{timeStr}</span>
        </div>

        {/* Audio FX Toggle */}
        <button 
          className="audio-cyber-btn"
          onClick={toggleSound}
          title={muted ? 'Enable sound effects' : 'Mute sound effects'}
          aria-label={muted ? 'Enable sound effects' : 'Mute sound effects'}
        >
          {muted ? <VolumeX size={14} /> : <Volume2 size={14} color="var(--c-purple)" />}
          <span className="audio-btn-label">{muted ? 'MUTED' : 'AUDIO: ON'}</span>
        </button>

        {/* Dark / Light Mode Toggle */}
        <button
          id="theme-toggle-btn"
          className="theme-cyber-btn"
          onClick={toggleTheme}
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? (
            <Sun size={14} className="theme-cyber-icon sun-icon" />
          ) : (
            <Moon size={14} className="theme-cyber-icon moon-icon" />
          )}
          <span className="theme-btn-label">{isDark ? 'THEME: DARK' : 'THEME: LIGHT'}</span>
        </button>

        <button className="btn-cyber-black nav-cta-btn" onClick={onStart}>
          <span className="cta-full">CLAIM CERTIFICATE</span>
          <span className="cta-short">CLAIM</span>
          <ArrowUpRight size={16} />
        </button>
      </div>

      <style>{`
        .cyber-navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 36px;
          border-bottom: 1px solid var(--c-border);
          background: var(--c-navbar-bg);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          position: sticky;
          top: 0;
          z-index: 100;
          transition: background 0.35s ease, border-color 0.35s ease;
        }

        .nav-left {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          user-select: none;
        }

        .pixel-mark {
          font-family: var(--font-mono);
          font-size: 1rem;
          color: var(--c-btn-black-text);
          background: var(--c-btn-black-bg);
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.35s ease, color 0.35s ease;
        }

        .brand-logo-text {
          font-family: var(--font-display);
          font-size: 1.55rem;
          letter-spacing: 0.05em;
          color: var(--c-text-primary);
          line-height: 1;
          transition: color 0.35s ease;
        }

        .brand-cursor {
          color: var(--c-purple);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--c-text-secondary);
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .nav-sep {
          color: var(--c-border);
          font-weight: 400;
        }

        .nav-item {
          cursor: pointer;
          transition: color 0.15s;
        }

        .nav-item:hover {
          color: var(--c-purple);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .sys-time-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          font-family: var(--font-mono);
          line-height: 1.2;
          margin-right: 4px;
        }

        .sys-label {
          font-size: 0.62rem;
          color: var(--c-text-muted);
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .sys-clock {
          font-size: 0.78rem;
          color: var(--c-text-primary);
          font-weight: 700;
          transition: color 0.35s ease;
        }

        .audio-cyber-btn,
        .theme-cyber-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--c-surface-subtle);
          border: 1px solid var(--c-border);
          color: var(--c-text-primary);
          padding: 8px 12px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          cursor: pointer;
          transition: border-color 0.2s, background 0.35s, color 0.35s;
        }

        .audio-cyber-btn:hover,
        .theme-cyber-btn:hover {
          border-color: var(--c-purple);
          color: var(--c-purple);
          background: var(--c-purple-bg);
        }

        .sun-icon {
          color: var(--c-lime);
        }

        .moon-icon {
          color: var(--c-purple);
        }

        .nav-cta-btn {
          padding: 10px 18px;
          font-size: 0.78rem;
        }

        .cta-short {
          display: none;
        }

        @media (max-width: 900px) {
          .nav-menu {
            display: none;
          }
          .sys-time-box {
            display: none;
          }
          .cyber-navbar {
            padding: 14px 20px;
          }
        }

        @media (max-width: 640px) {
          .cyber-navbar {
            padding: 12px 14px;
          }
          .nav-left {
            gap: 12px;
            min-width: 0;
          }
          .nav-right {
            gap: 6px;
            min-width: 0;
          }
          .brand-logo-text {
            font-size: 1.35rem;
          }
          .pixel-mark {
            width: 22px;
            height: 22px;
            font-size: 0.85rem;
          }
          .audio-cyber-btn,
          .theme-cyber-btn {
            padding: 7px 10px;
            font-size: 0.68rem;
          }
          .nav-cta-btn {
            padding: 8px 12px;
            font-size: 0.72rem;
            letter-spacing: 0.02em;
          }
        }

        @media (max-width: 480px) {
          .audio-btn-label,
          .theme-btn-label {
            display: none;
          }
          .audio-cyber-btn,
          .theme-cyber-btn {
            padding: 7px 8px;
          }
          .cta-full {
            display: none;
          }
          .cta-short {
            display: inline;
          }
          .brand-logo-text {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </header>
  );
}
