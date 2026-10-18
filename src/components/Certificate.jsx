import React, { forwardRef } from 'react';

const Certificate = forwardRef(({ resultData }, ref) => {
  return (
    <div className="certificate-cyber-wrapper">
      <div className="certificate-sheet" ref={ref} id="certificate-node">
        
        {/* Architectural Wireframe Outer Grid */}
        <div className="sheet-outer-border">
          
          {/* Corner Crosshairs */}
          <span className="cert-crosshair ch-tl">+</span>
          <span className="cert-crosshair ch-tr">+</span>
          <span className="cert-crosshair ch-bl">+</span>
          <span className="cert-crosshair ch-br">+</span>

          {/* Top Metadata Bar */}
          <div className="cert-top-meta">
            <div className="meta-left">
              <span className="sec-tag">/DOSSIER_{resultData.certificateId}</span>
              <span className="meta-sep">//</span>
              <span className="meta-auth">CLASSIFICATION: 100% EXPOSED</span>
            </div>
            <div className="meta-right">
              <span className="meta-coord">X_42.891 Y_-12.443</span>
            </div>
          </div>

          {/* Header Title */}
          <div className="cert-header-block">
            <span className="cert-pre-label">INTERNATIONAL COUNCIL OF ARTIFICIAL SURRENDER</span>
            <h1 className="cert-main-cyber-title">CUCK CODING CERTIFICATE</h1>
            <div className="hatch-pattern cert-hatch-line"></div>
          </div>

          {/* Recipient Block */}
          <div className="cert-recipient-section">
            <span className="cert-proclaim-label">THIS CERTIFIES THAT</span>
            <div className="cert-recipient-display">
              {resultData.name}
            </div>
            <p className="cert-proclaim-body">
              has demonstrated exceptional, unyielding commitment to letting artificial intelligence handle the hard, thinking parts of software engineering.
            </p>
          </div>

          {/* Structured Wireframe Grid Cells */}
          <div className="cert-wireframe-grid">
            
            <div className="cert-grid-cell">
              <span className="cell-kicker">OFFICIAL TITLE</span>
              <span className="cell-main-val text-purple-title">{resultData.officialTitle}</span>
            </div>

            <div className="cert-grid-cell">
              <span className="cell-kicker">PRIMARY AI CRUTCH</span>
              <span className="cell-main-val">{resultData.aiIcon} {resultData.aiTool}</span>
            </div>

            <div className="cert-grid-cell cell-span-2">
              <span className="cell-kicker">SPECIAL ACHIEVEMENT</span>
              <span className="cell-quote-val">"{resultData.specialAchievement}"</span>
            </div>

            <div className="cert-grid-cell cell-span-2">
              <span className="cell-kicker">PRIMARY COPING MECHANISM</span>
              <span className="cell-quote-val">{resultData.copingMechanism}</span>
            </div>

            <div className="cert-grid-cell">
              <span className="cell-kicker">SYNTHETIC DEPENDENCY</span>
              <span className="cell-main-val text-score">{resultData.dependencyPercentage}%</span>
            </div>

            <div className="cert-grid-cell">
              <span className="cell-kicker">FINAL VERDICT</span>
              <span className="cell-quote-val">{resultData.finalVerdict}</span>
            </div>

          </div>

          {/* Bottom Verification & Seal Row */}
          <div className="cert-bottom-row">
            
            {/* Signature Col */}
            <div className="cert-sign-col">
              <div className="sign-line">
                <span className="sign-scribble">Claude 3.7 & GPT-4o</span>
              </div>
              <span className="sign-label">AUTONOMOUS CO-PILOTS</span>
              <span className="sign-date">DATE: {resultData.issueDate}</span>
            </div>

            {/* Acid Lime Stamped Badge */}
            <div className="cert-stamp-badge">
              <div className="stamp-inner">
                <span className="stamp-star">★ ★ ★</span>
                <span className="stamp-text-bold">CERTIFIED</span>
                <span className="stamp-text-sub">CUCK CODER</span>
                <span className="stamp-motto">IN MODEL WE TRUST</span>
              </div>
            </div>

            {/* High Contrast QR Col */}
            <div className="cert-qr-col">
              <div className="qr-container">
                <svg viewBox="0 0 100 100" width="56" height="56" className="qr-svg-clean">
                  <rect width="100" height="100" fill="#ffffff" />
                  <rect x="8" y="8" width="26" height="26" fill="#0a0a0a" />
                  <rect x="12" y="12" width="18" height="18" fill="#ffffff" />
                  <rect x="16" y="16" width="10" height="10" fill="#0a0a0a" />

                  <rect x="66" y="8" width="26" height="26" fill="#0a0a0a" />
                  <rect x="70" y="12" width="18" height="18" fill="#ffffff" />
                  <rect x="74" y="16" width="10" height="10" fill="#0a0a0a" />

                  <rect x="8" y="66" width="26" height="26" fill="#0a0a0a" />
                  <rect x="12" y="70" width="18" height="18" fill="#ffffff" />
                  <rect x="16" y="74" width="10" height="10" fill="#0a0a0a" />

                  <rect x="42" y="12" width="10" height="10" fill="#0a0a0a" />
                  <rect x="46" y="28" width="10" height="14" fill="#0a0a0a" />
                  <rect x="14" y="44" width="14" height="10" fill="#0a0a0a" />
                  <rect x="36" y="42" width="18" height="10" fill="#0a0a0a" />
                  <rect x="58" y="42" width="14" height="18" fill="#0a0a0a" />
                  <rect x="76" y="44" width="16" height="10" fill="#0a0a0a" />
                  <rect x="42" y="66" width="10" height="18" fill="#0a0a0a" />
                  <rect x="58" y="72" width="18" height="10" fill="#0a0a0a" />
                  <rect x="80" y="74" width="12" height="18" fill="#0a0a0a" />
                </svg>
              </div>
              <span className="qr-label">SCAN TO VERIFY</span>
              <span className="qr-link">DEVMETRICS.LAB</span>
            </div>

          </div>

          {/* Parody Disclaimer */}
          <div className="cert-disclaimer-row">
            <span>NOTICE: This document is a parody certificate and possesses exactly zero professional value in technical hiring, salary negotiations, or code reviews.</span>
          </div>

        </div>

      </div>

      <style>{`
        .certificate-cyber-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 10px 0;
        }

        .certificate-sheet {
          width: 860px;
          max-width: 100%;
          background: #ffffff;
          color: var(--c-black);
          position: relative;
          box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.12);
        }

        .sheet-outer-border {
          border: 2px solid var(--c-black);
          padding: 32px 36px;
          position: relative;
          background: #ffffff;
        }

        /* Crosshairs */
        .cert-crosshair {
          position: absolute;
          font-family: var(--font-mono);
          font-size: 1rem;
          color: var(--c-black);
          line-height: 1;
          user-select: none;
        }
        .ch-tl { top: 6px; left: 8px; }
        .ch-tr { top: 6px; right: 8px; }
        .ch-bl { bottom: 6px; left: 8px; }
        .ch-br { bottom: 6px; right: 8px; }

        /* Top meta */
        .cert-top-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--c-text-muted);
          border-bottom: 1px solid var(--c-border);
          padding-bottom: 12px;
          margin-bottom: 24px;
        }

        .meta-sep {
          color: #cbd5e1;
          margin: 0 6px;
        }

        .meta-auth {
          color: var(--c-black);
        }

        .meta-coord {
          color: var(--c-purple);
        }

        /* Header */
        .cert-header-block {
          text-align: center;
          margin-bottom: 28px;
        }

        .cert-pre-label {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--c-purple);
          margin-bottom: 6px;
          display: block;
        }

        .cert-main-cyber-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 5vw, 3.8rem);
          font-weight: 400;
          letter-spacing: 0.04em;
          color: var(--c-black);
          line-height: 0.95;
          margin-bottom: 12px;
        }

        .cert-hatch-line {
          width: 100%;
          height: 6px;
          border-top: 1px solid var(--c-border);
          border-bottom: 1px solid var(--c-border);
        }

        /* Recipient */
        .cert-recipient-section {
          text-align: center;
          margin-bottom: 28px;
        }

        .cert-proclaim-label {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--c-text-muted);
          letter-spacing: 0.12em;
          display: block;
          margin-bottom: 6px;
        }

        .cert-recipient-display {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 4.5vw, 3.2rem);
          color: var(--c-black);
          line-height: 1.1;
          display: inline-block;
          max-width: 100%;
          overflow-wrap: break-word;
          word-break: break-word;
          border-bottom: 3px solid var(--c-purple);
          padding: 0 16px 6px;
          margin-bottom: 12px;
        }

        .cert-proclaim-body {
          font-size: 0.92rem;
          color: var(--c-text-secondary);
          max-width: 640px;
          margin: 0 auto;
          line-height: 1.5;
          overflow-wrap: break-word;
        }

        /* Wireframe cells */
        .cert-wireframe-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          width: 100%;
          margin-bottom: 28px;
          text-align: left;
        }

        .cert-grid-cell {
          border: 1px solid var(--c-border);
          background: #ffffff;
          padding: 12px 14px;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .cert-grid-cell.cell-span-2 {
          grid-column: span 2;
        }

        .cell-kicker {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--c-purple);
          margin-bottom: 4px;
        }

        .cell-main-val {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--c-black);
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .text-purple-title {
          color: var(--c-purple);
          font-weight: 800;
        }

        .text-score {
          color: var(--c-red);
          font-size: 1.15rem;
        }

        .cell-quote-val {
          font-size: 0.85rem;
          color: var(--c-text-secondary);
          line-height: 1.4;
        }

        /* Bottom Row */
        .cert-bottom-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--c-border);
          padding-top: 20px;
          margin-bottom: 16px;
        }

        /* Signature */
        .cert-sign-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 200px;
        }

        .sign-line {
          width: 100%;
          border-bottom: 1px solid var(--c-black);
          padding-bottom: 4px;
          margin-bottom: 4px;
        }

        .sign-scribble {
          font-family: 'Space Mono', cursive, sans-serif;
          font-style: italic;
          font-size: 0.9rem;
          color: var(--c-purple);
          font-weight: 700;
        }

        .sign-label {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--c-text-muted);
        }

        .sign-date {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--c-black);
        }

        /* Acid Lime Stamp */
        .cert-stamp-badge {
          background: var(--c-lime);
          border: 1.5px solid var(--c-black);
          padding: 8px 18px;
          box-shadow: 3px 3px 0px var(--c-black);
          text-align: center;
        }

        .stamp-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: var(--font-mono);
          line-height: 1.15;
        }

        .stamp-star {
          font-size: 0.65rem;
          color: var(--c-black);
        }

        .stamp-text-bold {
          font-family: var(--font-display);
          font-size: 1.35rem;
          color: var(--c-black);
          letter-spacing: 0.05em;
        }

        .stamp-text-sub {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--c-black);
        }

        .stamp-motto {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--c-text-secondary);
          margin-top: 2px;
        }

        /* QR Col */
        .cert-qr-col {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          width: 200px;
        }

        .qr-container {
          border: 1px solid var(--c-black);
          padding: 3px;
          background: #ffffff;
          margin-bottom: 4px;
        }

        .qr-label {
          font-family: var(--font-mono);
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--c-text-muted);
        }

        .qr-link {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--c-purple);
          font-weight: 700;
        }

        /* Disclaimer */
        .cert-disclaimer-row {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--c-text-muted);
          text-align: center;
          line-height: 1.4;
          border-top: 1px dashed var(--c-border);
          padding-top: 10px;
        }

        @media (max-width: 640px) {
          .sheet-outer-border {
            padding: 20px 14px;
          }
          .cert-top-meta {
            flex-direction: column;
            gap: 6px;
            align-items: flex-start;
          }
          .cert-wireframe-grid {
            grid-template-columns: 1fr;
          }
          .cert-grid-cell.cell-span-2 {
            grid-column: span 1;
          }
          .cert-bottom-row {
            flex-direction: column;
            gap: 16px;
          }
          .cert-sign-col, .cert-qr-col {
            align-items: center;
            text-align: center;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .sheet-outer-border {
            padding: 16px 10px;
          }
          .cert-recipient-display {
            font-size: clamp(1.5rem, 6vw, 2.2rem);
            padding: 0 8px 4px;
          }
          .cert-main-cyber-title {
            font-size: clamp(1.8rem, 7.5vw, 2.5rem);
          }
        }
        }
      `}</style>
    </div>
  );
});

export default Certificate;
