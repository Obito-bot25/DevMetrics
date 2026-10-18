import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { setMuted, getMuted } from '../utils/audio';

export default function Navbar({ onReset, onStart }) {
  const [muted, setMutedState] = useState(getMuted());
  const [timeStr, setTimeStr] = useState('23:47:12 UTC+0');

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

        <button 
          className="audio-cyber-btn"
          onClick={toggleSound}
          title={muted ? 'Enable sound effects' : 'Mute sound effects'}
          aria-label={muted ? 'Enable sound effects' : 'Mute sound effects'}
        >
          {muted ? <VolumeX size={14} /> : <Volume2 size={14} color="#7c3aed" />}
          <span className="audio-btn-label">{muted ? 'MUTED' : 'AUDIO: ON'}</span>
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
          background: #ffffff;
          position: sticky;
          top: 0;
          z-index: 100;
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
          color: #ffffff;
          background: var(--c-black);
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-logo-text {
          font-family: var(--font-display);
          font-size: 1.55rem;
          letter-spacing: 0.05em;
          color: var(--c-black);
          line-height: 1;
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
          color: #cbd5e1;
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
          gap: 20px;
        }

        .sys-time-box {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          font-family: var(--font-mono);
          line-height: 1.2;
        }

        .sys-label {
          font-size: 0.62rem;
          color: var(--c-text-muted);
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .sys-clock {
          font-size: 0.78rem;
          color: var(--c-black);
          font-weight: 700;
        }

        .audio-cyber-btn {
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
          transition: border-color 0.15s;
        }

        .audio-cyber-btn:hover {
          border-color: var(--c-black);
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
            gap: 8px;
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
          .audio-cyber-btn {
            padding: 7px 10px;
            font-size: 0.68rem;
          }
          .nav-cta-btn {
            padding: 8px 12px;
            font-size: 0.72rem;
            letter-spacing: 0.02em;
          }
        }

        @media (max-width: 440px) {
          .audio-btn-label {
            display: none;
          }
          .audio-cyber-btn {
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
