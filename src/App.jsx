import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import LandingHero from './components/LandingHero';
import AssessmentFlow from './components/AssessmentFlow';
import AnalysisScreen from './components/AnalysisScreen';
import SurpriseReveal from './components/SurpriseReveal';
import Certificate from './components/Certificate';
import ShareSection from './components/ShareSection';
import { generateAssessmentResult } from './data/roastEngine';

const STAGES = {
  LANDING: 'LANDING',
  ASSESSMENT: 'ASSESSMENT',
  ANALYZING: 'ANALYZING',
  REVEAL: 'REVEAL',
  CERTIFICATE: 'CERTIFICATE',
};

export default function App() {
  const [stage, setStage] = useState(STAGES.LANDING);
  const [resultData, setResultData] = useState(null);
  const certificateRef = useRef(null);

  // Transitions
  const handleStartAssessment = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStage(STAGES.ASSESSMENT);
  };

  const handleAssessmentComplete = (data) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const result = generateAssessmentResult(data);
    setResultData(result);
    setStage(STAGES.ANALYZING);
  };

  const handleAnalysisComplete = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStage(STAGES.REVEAL);
  };

  const handleProceedToCertificate = () => {
    setStage(STAGES.CERTIFICATE);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setStage(STAGES.LANDING);
    setResultData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="cyber-app-wrapper">
      {/* Background Architectural Grid Canvas */}
      <div className="cyber-grid-canvas" aria-hidden="true" />

      {/* Cyber Navbar */}
      <Navbar onReset={handleReset} onStart={handleStartAssessment} />

      {/* Main Flow Stage */}
      {stage === STAGES.LANDING && (
        <>
          <LandingHero onStart={handleStartAssessment} />
          {/* Section 07: Trusted by builders (Landing page contextual footer) */}
          <section className="trusted-builders-row" aria-label="Evaluated ecosystem technologies">
            <div className="trusted-content">
              <span className="sec-tag">/07</span>
              <span className="trusted-label">EVALUATED ACROSS CODEBASES USING:</span>
              <div className="tech-badge-list">
                <span className="tech-logo">▲ Vercel</span>
                <span className="tech-logo">✦ Linear</span>
                <span className="tech-logo">⚡ Supabase</span>
                <span className="tech-logo">● Neon</span>
                <span className="tech-logo">⌘ Replicate</span>
                <span className="tech-logo">≈ Tailwindcss</span>
              </div>
            </div>
          </section>
        </>
      )}

      {stage === STAGES.ASSESSMENT && (
        <AssessmentFlow 
          onComplete={handleAssessmentComplete} 
          onCancel={handleReset} 
        />
      )}

      {stage === STAGES.ANALYZING && (
        <AnalysisScreen onComplete={handleAnalysisComplete} />
      )}

      {stage === STAGES.REVEAL && resultData && (
        <SurpriseReveal 
          resultData={resultData} 
          onProceedToCertificate={handleProceedToCertificate} 
        />
      )}

      {stage === STAGES.CERTIFICATE && resultData && (
        <main className="cyber-cert-page animate-cyber-fade">
          <div className="cert-page-top-meta">
            <span className="sec-tag">/07 // CLASSIFIED_RECORD</span>
            <h1 className="cert-page-title">OFFICIAL SYNTHETIC SURRENDER DOSSIER</h1>
          </div>

          <Certificate ref={certificateRef} resultData={resultData} />

          <ShareSection 
            certificateRef={certificateRef} 
            resultData={resultData} 
            onReset={handleReset} 
          />
        </main>
      )}

      {/* Bottom Cyber Status Bar */}
      <footer className="cyber-bottom-status-bar" role="contentinfo">
        <div className="status-cell cell-left">
          <span className="cyber-dot lime" aria-hidden="true"></span>
          <span>CONNECTION SECURE</span>
        </div>
        <div className="status-cell cell-center">
          <span className="access-text">&gt; ACCESS GRANTED_</span>
        </div>
        <div className="status-cell cell-right">
          <span>SCN: 0007</span>
          <span className="status-sep">|</span>
          <span>NODE: DEVMETRICS_01</span>
          <span className="crosshair">+</span>
        </div>
      </footer>

      <style>{`
        .cyber-cert-page {
          width: 100%;
          max-width: 980px;
          margin: 30px auto 80px;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .cert-page-top-meta {
          text-align: center;
          margin-bottom: 24px;
        }

        .cert-page-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 2.6rem);
          color: var(--c-black);
          letter-spacing: 0.04em;
          margin: 0;
        }

        /* SECTION 07: TRUSTED BUILDERS */
        .trusted-builders-row {
          width: 100%;
          border-top: 1px solid var(--c-border);
          border-bottom: 1px solid var(--c-border);
          background: var(--c-surface);
          padding: 20px 36px;
          transition: background 0.35s ease, border-color 0.35s ease;
        }

        .trusted-content {
          max-width: 1300px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .trusted-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--c-text-muted);
          letter-spacing: 0.08em;
          white-space: nowrap;
        }

        .tech-badge-list {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .tech-logo {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--c-text-primary);
          letter-spacing: 0.04em;
          opacity: 0.85;
        }

        /* Bottom Status Bar */
        .cyber-bottom-status-bar {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--c-purple);
          color: #ffffff;
          padding: 12px 36px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .status-cell {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .cell-center {
          background: var(--c-purple-dark);
          padding: 4px 16px;
          border-radius: var(--radius-xs);
        }

        .access-text {
          color: var(--c-lime);
        }

        .status-sep {
          opacity: 0.4;
        }

        @media (max-width: 900px) {
          .trusted-builders-row {
            padding: 16px 20px;
          }
          .trusted-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          .trusted-label {
            white-space: normal;
          }
          .cyber-bottom-status-bar {
            flex-direction: column;
            gap: 8px;
            padding: 14px 20px;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .trusted-builders-row {
            padding: 14px 14px;
          }
          .tech-badge-list {
            gap: 10px 16px;
          }
          .tech-logo {
            font-size: 0.75rem;
          }
          .cyber-bottom-status-bar {
            padding: 12px 10px;
            font-size: 0.7rem;
          }
          .cell-right {
            flex-wrap: wrap;
            justify-content: center;
            gap: 6px;
          }
          .cyber-cert-page {
            padding: 0 8px;
            margin: 16px auto 40px;
          }
          .cert-page-top-meta {
            margin-bottom: 16px;
          }
          .cert-page-title {
            font-size: clamp(1.6rem, 5.5vw, 2.2rem);
            word-break: break-word;
          }
        }
      `}</style>
    </div>
  );
}
