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
          background: var(--c-surface);
          border: 1px solid var(--c-border-dark);
          padding: 48px 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          box-shadow: var(--c-card-shadow);
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .deadpan-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5vw, 4.4rem);
          color: var(--c-text-primary);
          line-height: 1;
        }

        .subject-plate {
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid var(--c-border-dark);
          background: var(--c-input-bg);
          padding: 8px 16px;
          font-family: var(--font-mono);
          font-size: 0.88rem;
          transition: background 0.35s ease, border-color 0.35s ease;
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
          color: var(--c-text-primary);
          border-bottom: 2px solid var(--c-purple);
        }

        /* Punchline Card */
        .cyber-punchline-card {
          background: var(--c-surface);
          border: 2px solid var(--c-border-dark);
          padding: 40px 32px;
          width: 100%;
          box-shadow: 6px 6px 0px var(--c-border-dark);
          margin-bottom: 32px;
          transition: background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
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
          font-size: clamp(2.1rem, 7.5vw, 5.8rem);
          color: var(--c-text-primary);
          line-height: 0.95;
          margin-bottom: 16px;
          letter-spacing: 0.02em;
          word-break: break-word;
          overflow-wrap: break-word;
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
          word-break: break-word;
          overflow-wrap: break-word;
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
          background: var(--c-surface);
          border: 1px solid var(--c-border);
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          min-width: 0;
          transition: background 0.35s ease, border-color 0.35s ease;
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
          color: var(--c-text-primary);
          word-break: break-word;
          overflow-wrap: break-word;
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
          background: var(--c-btn-primary-bg);
          color: var(--c-btn-primary-text);
          border: 1px solid var(--c-btn-primary-border);
        }

        .claim-dossier-btn:hover:not(:disabled) {
          background: var(--c-btn-primary-hover-bg);
          border-color: var(--c-btn-primary-hover-border);
          color: var(--c-btn-primary-hover-text);
        }

        @media (max-width: 640px) {
          .cyber-reveal-page {
            padding: 0 12px;
            margin: 24px auto 50px;
          }
          .reveal-telemetry-grid {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-bottom: 24px;
          }
          .cyber-punchline-card {
            padding: 22px 14px;
            box-shadow: 3px 3px 0px var(--c-border-dark);
            margin-bottom: 24px;
          }
          .claim-dossier-btn {
            width: 100%;
            padding: 16px 14px;
            font-size: clamp(0.78rem, 3.5vw, 0.95rem);
            justify-content: center;
            text-align: center;
          }
          .deadpan-cyber-box {
            padding: 28px 16px;
          }
          .deadpan-title {
            font-size: clamp(2rem, 5vw, 3.4rem);
          }
        }

        @media (max-width: 380px) {
          .cyber-reveal-page {
            padding: 0 8px;
          }
          .cyber-punchline-card {
            padding: 18px 10px;
          }
          .tel-card-val {
            font-size: 1rem;
          }
          .punchline-roast-quote {
            font-size: 0.92rem;
          }
        }
      `}</style>
    </div>
  );
}
