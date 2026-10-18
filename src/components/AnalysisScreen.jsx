import React, { useState, useEffect } from 'react';
import { Terminal, Cpu } from 'lucide-react';
import { playBlip } from '../utils/audio';

const ANALYSIS_STEPS = [
  { text: 'ANALYZING_DEVELOPMENT_PATTERNS', detail: 'Scanning prompt-to-commit velocity & AST token complexity' },
  { text: 'EVALUATING_SYNTHETIC_DEPENDENCE', detail: 'Measuring tab-completion reliance against cognitive baselines' },
  { text: 'SIMULATING_ZERO_LLM_CONDITIONS', detail: 'Terminal incident response without automated prompt intervention' },
  { text: 'CALCULATING_AUTHENTICITY_QUOTIENT', detail: 'Normalizing copypasta index against 48,200+ senior profiles' },
  { text: 'COMPILING_OFFICIAL_DOSSIER', detail: 'Cryptographic hash generation and signature verification' },
];

export default function AnalysisScreen({ onComplete }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(14);

  useEffect(() => {
    playBlip();

    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < ANALYSIS_STEPS.length - 1) {
          playBlip();
          return prev + 1;
        }
        return prev;
      });
    }, 750);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const delta = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + delta);
      });
    }, 140);

    const timeout = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="cyber-analysis-page animate-cyber-fade">
      <div className="analysis-box">
        
        {/* Top Header */}
        <div className="analysis-top-row">
          <span className="sec-tag">/04</span>
          <span className="analysis-top-title">DIAGNOSTIC CALIBRATION ENGINE</span>
          <span className="crosshair">+</span>
        </div>

        {/* Wireframe Radar Center */}
        <div className="wireframe-scanner-box">
          <div className="scanner-grid-bg"></div>
          <div className="scanner-circle circle-outer"></div>
          <div className="scanner-circle circle-mid"></div>
          <div className="scanner-line-cross-h"></div>
          <div className="scanner-line-cross-v"></div>
          <div className="scanner-sweep-needle"></div>
          <div className="scanner-center-hub">
            <Cpu size={24} color="#7c3aed" />
          </div>

          <div className="cyber-sticky-tag scanner-tag">
            <span>&gt; SCANNING_AST</span>
          </div>
        </div>

        {/* Status Text */}
        <div className="analysis-status-text">
          <h3 className="status-current-title">
            {ANALYSIS_STEPS[currentStepIndex].text}
          </h3>
          <p className="status-current-detail">
            {ANALYSIS_STEPS[currentStepIndex].detail}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="cyber-progress-section">
          <div className="progress-label-row">
            <span className="progress-text-label">SYNTHESIS_PROGRESS</span>
            <span className="progress-text-val">{progress}%</span>
          </div>
          <div className="progress-track-border">
            <div className="progress-fill-purple" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        {/* Terminal Log Stream */}
        <div className="cyber-terminal-stream">
          <div className="stream-header">
            <Terminal size={12} color="#7c3aed" />
            <span>TELEMETRY_LOG_OUTPUT</span>
          </div>
          <div className="stream-body">
            {ANALYSIS_STEPS.slice(0, currentStepIndex + 1).map((s, idx) => (
              <div key={idx} className="stream-row">
                <span className="stream-bullet">&gt;</span>
                <span className="stream-text">{s.text}</span>
                <span className="stream-done">[OK]</span>
              </div>
            ))}
            <div className="stream-cursor-row">
              <span className="stream-bullet">&gt;</span>
              <span className="stream-cursor">_</span>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .cyber-analysis-page {
          width: 100%;
          max-width: 680px;
          margin: 40px auto 80px;
          padding: 0 24px;
        }

        .analysis-box {
          background: #ffffff;
          border: 1px solid var(--c-black);
          padding: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.08);
        }

        .analysis-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          border-bottom: 1px solid var(--c-border);
          padding-bottom: 12px;
          margin-bottom: 24px;
        }

        .analysis-top-title {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--c-black);
          letter-spacing: 0.08em;
        }

        /* Radar Scanner */
        .wireframe-scanner-box {
          width: 140px;
          height: 140px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border: 1px solid var(--c-border);
          background: var(--c-bg);
        }

        .scanner-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid var(--c-border);
        }

        .circle-outer {
          width: 120px;
          height: 120px;
          border-color: var(--c-purple);
        }

        .circle-mid {
          width: 70px;
          height: 70px;
          border-style: dashed;
        }

        .scanner-line-cross-h {
          position: absolute;
          width: 100%;
          height: 1px;
          background: var(--c-border);
        }

        .scanner-line-cross-v {
          position: absolute;
          width: 1px;
          height: 100%;
          background: var(--c-border);
        }

        .scanner-sweep-needle {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, rgba(124, 58, 237, 0.25) 0deg, transparent 60deg);
          animation: radarSweep 2s linear infinite;
        }

        @keyframes radarSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .scanner-center-hub {
          position: relative;
          z-index: 2;
          width: 44px;
          height: 44px;
          background: #ffffff;
          border: 1px solid var(--c-black);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scanner-tag {
          position: absolute;
          bottom: -10px;
          right: -10px;
        }

        /* Status texts */
        .analysis-status-text {
          margin-bottom: 24px;
        }

        .status-current-title {
          font-family: var(--font-mono);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--c-black);
          margin-bottom: 4px;
          min-height: 28px;
        }

        .status-current-detail {
          font-size: 0.8rem;
          color: var(--c-text-muted);
          min-height: 22px;
        }

        /* Progress Bar */
        .cyber-progress-section {
          width: 100%;
          margin-bottom: 24px;
        }

        .progress-label-row {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .progress-text-label {
          color: var(--c-text-muted);
        }

        .progress-text-val {
          color: var(--c-purple);
        }

        .progress-track-border {
          width: 100%;
          height: 8px;
          border: 1px solid var(--c-black);
          background: var(--c-bg);
          overflow: hidden;
        }

        .progress-fill-purple {
          height: 100%;
          background: var(--c-purple);
          transition: width 0.15s ease-out;
        }

        /* Terminal log */
        .cyber-terminal-stream {
          width: 100%;
          background: var(--c-bg);
          border: 1px solid var(--c-border);
          padding: 12px 16px;
          text-align: left;
        }

        .stream-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--c-text-muted);
          border-bottom: 1px solid var(--c-border);
          padding-bottom: 6px;
          margin-bottom: 8px;
        }

        .stream-body {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stream-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stream-bullet {
          color: var(--c-purple);
          font-weight: 700;
        }

        .stream-text {
          flex: 1;
          color: var(--c-text-secondary);
        }

        .stream-done {
          color: #10b981;
          font-weight: 700;
          font-size: 0.65rem;
        }

        .stream-cursor-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .stream-cursor {
          color: var(--c-purple);
          animation: blink 0.8s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
