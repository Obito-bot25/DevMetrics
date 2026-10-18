import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { playDramaticFanfare } from '../utils/audio';
import { ArrowUpRight } from 'lucide-react';

export default function SurpriseReveal({ resultData, onProceedToCertificate }) {
  const [phase, setPhase] = useState(1);

  // Universal Enter Key listener (active once reveal has begun)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter' && phase >= 2) {
        onProceedToCertificate();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [phase, onProceedToCertificate]);

  useEffect(() => {
    // Phase 1 -> Phase 2 (Glitch + Sound + Confetti)
    const t1 = setTimeout(() => {
      setPhase(2);
      playDramaticFanfare();
      
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#7c3aed', '#e4ff1a', '#0a0a0a', '#ffffff'],
      });
    }, 1300);

    const t2 = setTimeout(() => {
      setPhase(3);
    }, 1900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div className="cyber-reveal-page animate-cyber-fade">
      
      {phase === 1 && (
        <div className="deadpan-cyber-box">
          <span className="sec-tag">/REVEAL // CALIBRATION_COMPLETE</span>
          <h2 className="deadpan-title">ASSESSMENT COMPLETE</h2>
          <div className="subject-plate">
            <span className="subject-label">CANDIDATE_DOSSIER:</span>
            <span className="subject-val">{resultData.name}</span>
          </div>
          <p className="verdict-generating">Finalizing deterministic autonomy quotient...</p>
        </div>
      )}

      {(phase === 2 || phase === 3) && (
        <div className="full-reveal-cyber-box">
          
          <div className="verdict-sticky-row">
            <div className="cyber-sticky-tag">
              <span>★ COGNITIVE BREACH DETECTED // AUDIT CONCLUDED</span>
            </div>
          </div>

          <div className="congrats-cyber-sub">
            CONGRATULATIONS, <span className="user-highlight">{resultData.name}</span>.
          </div>

          {/* Main Cyber Punchline Card */}
          <div className="cyber-punchline-card">
            <div className="punchline-pre">ACCORDING TO 2026 BENCHMARK TELEMETRY, YOU ARE A</div>
            <h1 className="punchline-cyber-title">
              CERTIFIED <span className="cuck-title-purple">CUCK CODER</span>
            </h1>
            <div className="hatch-pattern hatch-divider"></div>
            <p className="punchline-roast-quote">
              "{resultData.specialAchievement}"
            </p>
          </div>

          {/* Metrics Wireframe Grid */}
          <div className="reveal-telemetry-grid">
            <div className="reveal-tel-card">
              <span className="tel-card-label">AI DEPENDENCY</span>
              <span className="tel-card-val text-purple">{resultData.dependencyPercentage}%</span>
            </div>
            <div className="reveal-tel-card">
              <span className="tel-card-label">PRIMARY CRUTCH</span>
              <span className="tel-card-val">{resultData.aiIcon} {resultData.aiTool}</span>
            </div>
            <div className="reveal-tel-card">
              <span className="tel-card-label">OFFICIAL TITLE</span>
              <span className="tel-card-val title-sm">{resultData.officialTitle}</span>
            </div>
          </div>

          {/* Claim Button */}
          <div className="reveal-action-wrapper">
            <button 
              id="view-certificate-btn"
              className="btn-cyber-black claim-dossier-btn"
              onClick={onProceedToCertificate}
            >
              <span>CLAIM OFFICIAL DOSSIER [ENTER ↵]</span>
              <ArrowUpRight size={20} />
            </button>
          </div>

        </div>
      )}

      <style>{`
        .cyber-reveal-page {
          width: 100%;
          max-width: 860px;
          margin: 40px auto 80px;
          padding: 0 24px;
          text-align: center;
        }

        /* Deadpan Phase */
        .deadpan-cyber-box {
          background: #ffffff;
          border: 1px solid var(--c-black);
          padding: 48px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.08);
        }

        .deadpan-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5vw, 4.4rem);
          color: var(--c-black);
          line-height: 1;
        }

        .subject-plate {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--c-black);
          background: var(--c-bg);
          padding: 8px 16px;
          font-family: var(--font-mono);
          font-size: 0.88rem;
        }

        .subject-label {
          color: var(--c-text-muted);
        }

        .subject-val {
          color: var(--c-purple);
          font-weight: 700;
        }

        .verdict-generating {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--c-text-muted);
        }

        /* Full Reveal */
        .full-reveal-cyber-box {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .verdict-sticky-row {
          margin-bottom: 20px;
        }

        .congrats-cyber-sub {
          font-family: var(--font-mono);
          font-size: clamp(1rem, 2vw, 1.3rem);
          font-weight: 700;
          color: var(--c-text-secondary);
          margin-bottom: 12px;
          letter-spacing: 0.06em;
        }

        .user-highlight {
          color: var(--c-black);
          border-bottom: 2px solid var(--c-purple);
        }

        /* Punchline Card */
        .cyber-punchline-card {
          background: #ffffff;
          border: 2px solid var(--c-black);
          padding: 40px 32px;
          width: 100%;
          box-shadow: 6px 6px 0px var(--c-black);
          margin-bottom: 32px;
        }

        .punchline-pre {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--c-text-muted);
          letter-spacing: 0.12em;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .punchline-cyber-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 5.8rem);
          color: var(--c-black);
          line-height: 0.95;
          margin-bottom: 16px;
          letter-spacing: 0.02em;
        }

        .cuck-title-purple {
          color: var(--c-purple);
        }

        .hatch-divider {
          width: 100%;
          height: 8px;
          margin: 18px 0;
          border-top: 1px solid var(--c-border);
          border-bottom: 1px solid var(--c-border);
        }

        .punchline-roast-quote {
          font-family: var(--font-sans);
          font-size: 1.05rem;
          color: var(--c-text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* Metrics grid */
        .reveal-telemetry-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          margin-bottom: 36px;
        }

        .reveal-tel-card {
          background: #ffffff;
          border: 1px solid var(--c-border);
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        .tel-card-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--c-text-muted);
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }

        .tel-card-val {
          font-family: var(--font-mono);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--c-black);
        }

        .text-purple {
          color: var(--c-purple);
        }

        .title-sm {
          font-size: 0.85rem;
          line-height: 1.25;
        }

        .claim-dossier-btn {
          font-size: 1rem;
          padding: 18px 48px;
          background: var(--c-black);
        }

        .claim-dossier-btn:hover {
          background: var(--c-purple);
        }

        @media (max-width: 640px) {
          .reveal-telemetry-grid {
            grid-template-columns: 1fr;
          }
          .cyber-punchline-card {
            padding: 24px 18px;
          }
        }
      `}</style>
    </div>
  );
}
