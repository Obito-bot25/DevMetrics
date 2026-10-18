import React, { useEffect } from 'react';
import { ArrowUpRight, Box, Terminal, Cpu, Database, Crosshair, Globe } from 'lucide-react';

export default function LandingHero({ onStart }) {
  // Listen for Enter key to trigger onStart
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only proceed if target is not an interactive input or button
      if (e.key === 'Enter') {
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        if (activeTag !== 'input' && activeTag !== 'textarea') {
          onStart();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onStart]);

  return (
    <div className="cyber-hero-page animate-cyber-fade">
      
      {/* SECTION 01: HERO */}
      <section className="cyber-hero-section" aria-labelledby="hero-title">
        
        {/* Left Vertical Architectural Rail (Hidden on mobile <640px) */}
        <div className="left-vertical-rail" aria-hidden="true">
          <span className="crosshair">+</span>
          <div className="rail-dashed-line"></div>
          <span className="rail-vertical-text">2026 BENCHMARK · DEVMETRICS REIMAGINED</span>
          <div className="rail-dashed-line"></div>
          <span className="rail-year">2026</span>
        </div>

        {/* Center Main Editorial Block */}
        <div className="hero-main-block">
          
          <div className="hero-left-content">
            <span className="sec-tag">/01</span>
            
            <h1 id="hero-title" className="hero-cyber-headline">
              HOW MUCH OF A DEVELOPER <br />
              <span className="headline-accent">ARE YOU, REALLY?</span>
            </h1>

            <div className="hero-tagline">
              COGNITIVE AUTONOMY. SYNTHETIC DEPENDENCE. UNAPOLOGETIC.
            </div>

            <p className="hero-cyber-description">
              AI coding tools have changed software development forever. But there’s one question nobody wants to answer: 
              <strong> Can you actually code without your AI?</strong> Complete the 30-second evaluation to claim your official 2026 Developer Independence Certificate.
            </p>

            <div className="hero-action-row">
              <button 
                id="start-assessment-btn" 
                className="btn-cyber-black hero-cta" 
                onClick={onStart}
                aria-label="Claim your certificate: start the 30-second developer assessment"
              >
                <span>CLAIM YOUR CERTIFICATE</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </button>

              <button 
                className="btn-cyber-outline hero-secondary" 
                onClick={onStart}
                aria-label="View evaluation methodology"
              >
                <span>VIEW METHODOLOGY</span>
                <span className="bracket-sym" aria-hidden="true">[ ]</span>
              </button>
            </div>

            <div className="hero-micro-text">
              <span>PRESS [ENTER ↵] OR CLICK</span>
              <span className="pipe-sep">|</span>
              <span>30 SECONDS</span>
              <span className="pipe-sep">|</span>
              <span className="hurt-text">RESULTS MAY HURT</span>
            </div>
          </div>

          {/* Right Wireframe / Cyber Voxel Visual */}
          <div className="hero-right-visual" aria-hidden="true">
            
            <div className="visual-top-meta">
              <span className="meta-rendering">&gt; AUDIT_ENGINE 84%</span>
              <Globe size={16} className="wireframe-globe" />
            </div>

            {/* Wireframe 3D Graphic Composition */}
            <div className="isometric-wireframe-box">
              <div className="wireframe-cube">
                <div className="cube-face face-front"></div>
                <div className="cube-face face-back"></div>
                <div className="cube-face face-left"></div>
                <div className="cube-face face-right"></div>
                <div className="cube-face face-top"></div>
                <div className="cube-face face-bottom"></div>
                <div className="cube-glitch-square purple-sq"></div>
                <div className="cube-glitch-square lime-sq"></div>
              </div>

              {/* Lime Sticky Coordinate Tag */}
              <div className="cyber-sticky-tag coordinate-tag">
                <span>X_36.1749</span>
                <span>Y_-86.7676</span>
                <span>Z_46.6827</span>
              </div>
            </div>

            <div className="visual-bottom-meta">
              <span className="crosshair">+</span>
              <span className="scn-label">//SCN_01</span>
            </div>

          </div>

        </div>

      </section>

      {/* SECTION 02: CORE PRINCIPLES */}
      <section className="cyber-principles-section" aria-label="Core evaluation principles">
        <div className="principles-header">
          <span className="sec-tag">/02</span>
          <h2 className="principles-title">CORE EVALUATION VECTORS</h2>
          <span className="crosshair">+</span>
        </div>

        <div className="principles-grid">
          
          <div className="principle-card">
            <div className="principle-top">
              <Box size={20} color="#7c3aed" aria-hidden="true" />
              <span className="crosshair">+</span>
            </div>
            <h3 className="principle-name">FUNCTION OVER PROMPT</h3>
            <p className="principle-desc">Code is built to serve production. Not to soothe your cognitive stamina.</p>
          </div>

          <div className="principle-card">
            <div className="principle-top">
              <Terminal size={20} color="#7c3aed" aria-hidden="true" />
              <span className="crosshair">+</span>
            </div>
            <h3 className="principle-name">SYSTEMS THINKING</h3>
            <p className="principle-desc">Grids. Modules. Stack traces. Understanding every trace line without an LLM crutch.</p>
          </div>

          <div className="principle-card">
            <div className="principle-top">
              <Cpu size={20} color="#7c3aed" aria-hidden="true" />
              <span className="crosshair">+</span>
            </div>
            <h3 className="principle-name">SYNTHETIC DETOX</h3>
            <p className="principle-desc">Simulated zero-internet terminal incident response. Can your fingers still type?</p>
          </div>

          <div className="principle-card">
            <div className="principle-top">
              <Crosshair size={20} color="#7c3aed" aria-hidden="true" />
              <span className="crosshair">+</span>
            </div>
            <h3 className="principle-name">BOLD CONTRAST</h3>
            <p className="principle-desc">High contrast. Harsh reality. No soft copium for copypasta engineers.</p>
          </div>

          <div className="principle-card">
            <div className="principle-top">
              <Database size={20} color="#7c3aed" aria-hidden="true" />
              <span className="crosshair">+</span>
            </div>
            <h3 className="principle-name">RAW & AUTHENTIC</h3>
            <p className="principle-desc">No corporate fluff. 48,200+ engineers evaluated across GitHub and Cursor.</p>
          </div>

        </div>
      </section>

      {/* SECTION 04/05/06: SYSTEM STATUS & TELEMETRY */}
      <section className="cyber-telemetry-section" aria-label="System status and benchmarks">
        
        {/* /04 JOIN AUDIT */}
        <div className="telemetry-col col-resistance">
          <span className="sec-tag">/04</span>
          <h2 className="telemetry-headline">JOIN THE RESISTANCE</h2>
          <p className="telemetry-copy">
            Developer autonomy is more than a metric. It is an engineering statement. Let’s benchmark your stack and generate your credentials.
          </p>
          <button 
            className="btn-cyber-black col-btn" 
            onClick={onStart}
            aria-label="Claim certificate: start test"
          >
            <span>CLAIM CERTIFICATE</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>

        {/* /05 SYSTEM STATUS */}
        <div className="telemetry-col col-status">
          <div className="col-top-meta">
            <span className="sec-tag">/05</span>
            <span className="col-title">SYSTEM STATUS</span>
          </div>

          <div className="status-metric-row">
            <span className="metric-label">AUTONOMY_RATIO</span>
            <div className="metric-bar-wrapper" role="progressbar" aria-valuenow={14.2} aria-valuemin={0} aria-valuemax={100} aria-label="Global Autonomy Ratio">
              <div className="metric-bar-fill" style={{ width: '14.2%' }}></div>
            </div>
            <span className="metric-val">14.2%</span>
          </div>

          <div className="status-metric-row">
            <span className="metric-label">EVALUATED_DEVS</span>
            <span className="metric-text-val">48,290+</span>
          </div>

          <div className="status-metric-row">
            <span className="metric-label">AVG_RAW_CODE</span>
            <span className="metric-text-val">11.4% HUMAN</span>
          </div>

          <div className="status-metric-row">
            <span className="metric-label">NETWORK</span>
            <span className="metric-text-val text-secure">SECURE</span>
          </div>

          {/* Lime Operational Banner */}
          <div className="all-operational-banner">
            <span>ALL SYSTEMS OPERATIONAL</span>
            <span className="cyber-dot lime" aria-hidden="true"></span>
          </div>
        </div>

        {/* /06 HATCH TELEMETRY */}
        <div className="telemetry-col col-hatch">
          <span className="sec-tag">/06</span>
          <h2 className="telemetry-headline">SURVIVAL METRICS</h2>
          <p className="telemetry-copy">
            Normalized against 180,000 commits and 48,200 developer telemetry logs.
          </p>

          <div className="hatch-display-box" aria-hidden="true">
            <div className="hatch-pattern hatch-inner"></div>
            <div className="hatch-content">
              <span className="hatch-code">&gt; CALIBRATION_ACTIVE</span>
              <span className="hatch-node">NODE: US_EAST_01</span>
            </div>
          </div>
        </div>

      </section>

      <style>{`
        .cyber-hero-page {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* SECTION 01: HERO */
        .cyber-hero-section {
          display: flex;
          border-bottom: 1px solid var(--c-border);
          position: relative;
        }

        /* Left Rail */
        .left-vertical-rail {
          width: 50px;
          border-right: 1px solid var(--c-border);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0;
          user-select: none;
          flex-shrink: 0;
        }

        .rail-dashed-line {
          width: 1px;
          height: 60px;
          border-left: 1px dashed var(--c-border);
        }

        .rail-vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--c-text-muted);
          letter-spacing: 0.15em;
          white-space: nowrap;
        }

        .rail-year {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--c-black);
        }

        /* Main Hero Grid */
        .hero-main-block {
          flex: 1;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          padding: 48px 36px;
          gap: 40px;
          min-width: 0;
        }

        .hero-left-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
        }

        .hero-cyber-headline {
          font-family: var(--font-display);
          font-size: clamp(2.1rem, 6.2vw, 5.8rem);
          font-weight: 400;
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: var(--c-black);
          margin-bottom: 18px;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .headline-accent {
          color: var(--c-black);
        }

        .hero-tagline {
          font-family: var(--font-mono);
          font-size: clamp(0.72rem, 1.3vw, 0.92rem);
          font-weight: 700;
          color: var(--c-purple);
          letter-spacing: 0.08em;
          margin-bottom: 20px;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .hero-cyber-description {
          font-family: var(--font-sans);
          font-size: clamp(0.88rem, 1.15vw, 1.02rem);
          color: var(--c-text-secondary);
          line-height: 1.6;
          max-width: 540px;
          margin-bottom: 32px;
          overflow-wrap: break-word;
        }

        .hero-cyber-description strong {
          color: var(--c-black);
        }

        .hero-action-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
          flex-wrap: wrap;
        }

        .hero-cta {
          font-size: 0.92rem;
          padding: 16px 32px;
        }

        .hero-secondary {
          font-size: 0.88rem;
          padding: 15px 26px;
        }

        .bracket-sym {
          color: var(--c-purple);
          font-weight: 700;
        }

        .hero-micro-text {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--c-text-muted);
          letter-spacing: 0.06em;
          flex-wrap: wrap;
        }

        .pipe-sep {
          color: #cbd5e1;
        }

        .hurt-text {
          color: var(--c-red);
          font-weight: 700;
        }

        /* Right Visual Box */
        .hero-right-visual {
          border: 1px solid var(--c-border);
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          position: relative;
          min-width: 0;
        }

        .visual-top-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--c-text-muted);
          border-bottom: 1px solid var(--c-border);
          padding-bottom: 12px;
        }

        .meta-rendering {
          color: var(--c-purple);
          font-weight: 700;
        }

        .wireframe-globe {
          color: var(--c-text-muted);
        }

        .isometric-wireframe-box {
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* 3D Wireframe Cube */
        .wireframe-cube {
          width: 130px;
          height: 130px;
          position: relative;
          transform-style: preserve-3d;
          transform: rotateX(-22deg) rotateY(38deg);
          animation: cubeHover 6s ease-in-out infinite alternate;
        }

        .cube-face {
          position: absolute;
          width: 130px;
          height: 130px;
          border: 1.5px solid var(--c-black);
          background: rgba(255, 255, 255, 0.65);
        }

        .face-front  { transform: translateZ(65px); }
        .face-back   { transform: rotateY(180deg) translateZ(65px); }
        .face-left   { transform: rotateY(-90deg) translateZ(65px); }
        .face-right  { transform: rotateY(90deg) translateZ(65px); }
        .face-top    { transform: rotateX(90deg) translateZ(65px); background: rgba(124, 58, 237, 0.1); }
        .face-bottom { transform: rotateX(-90deg) translateZ(65px); }

        .cube-glitch-square {
          position: absolute;
          width: 36px;
          height: 36px;
        }

        .purple-sq {
          top: -12px;
          left: -12px;
          background: var(--c-purple);
          border: 1px solid var(--c-black);
          transform: translateZ(75px);
        }

        .lime-sq {
          bottom: -10px;
          right: -10px;
          background: var(--c-lime);
          border: 1px solid var(--c-black);
          transform: translateZ(80px);
        }

        @keyframes cubeHover {
          0% { transform: rotateX(-22deg) rotateY(38deg) translateY(0); }
          100% { transform: rotateX(-15deg) rotateY(48deg) translateY(-8px); }
        }

        .coordinate-tag {
          position: absolute;
          bottom: 12px;
          right: 12px;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          font-size: 0.68rem;
          line-height: 1.2;
        }

        .visual-bottom-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--c-border);
          padding-top: 12px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--c-text-muted);
        }

        .scn-label {
          color: var(--c-text-muted);
        }

        /* SECTION 02: CORE PRINCIPLES */
        .cyber-principles-section {
          padding: 40px 0;
          border-bottom: 1px solid var(--c-border);
        }

        .principles-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .principles-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--c-black);
          letter-spacing: 0.1em;
          margin: 0;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .principle-card {
          background: #ffffff;
          border: 1px solid var(--c-border);
          padding: 20px 16px;
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s;
        }

        .principle-card:hover {
          border-color: var(--c-black);
        }

        .principle-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .principle-name {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--c-purple);
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .principle-desc {
          font-size: 0.78rem;
          color: var(--c-text-secondary);
          line-height: 1.45;
        }

        /* SECTION 04/05/06: TELEMETRY */
        .cyber-telemetry-section {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          border-bottom: 1px solid var(--c-border);
        }

        .telemetry-col {
          padding: 32px 28px;
          border-right: 1px solid var(--c-border);
          background: #ffffff;
          display: flex;
          flex-direction: column;
        }

        .telemetry-col:last-child {
          border-right: none;
        }

        .telemetry-headline {
          font-family: var(--font-display);
          font-size: 1.8rem;
          letter-spacing: 0.05em;
          color: var(--c-black);
          margin-bottom: 10px;
        }

        .telemetry-copy {
          font-size: 0.85rem;
          color: var(--c-text-secondary);
          line-height: 1.5;
          margin-bottom: 24px;
        }

        .col-btn {
          align-self: flex-start;
          padding: 10px 20px;
          font-size: 0.78rem;
        }

        /* /05 Status Col */
        .col-top-meta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .col-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--c-black);
        }

        .status-metric-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid var(--c-border);
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        .metric-label {
          color: var(--c-text-muted);
          font-weight: 700;
        }

        .metric-bar-wrapper {
          flex: 1;
          height: 6px;
          background: #e2e4ea;
          margin: 0 16px;
        }

        .metric-bar-fill {
          height: 100%;
          background: var(--c-purple);
        }

        .metric-val {
          color: var(--c-purple);
          font-weight: 700;
        }

        .metric-text-val {
          color: var(--c-black);
          font-weight: 700;
        }

        .text-secure {
          color: #10b981;
        }

        .all-operational-banner {
          margin-top: 16px;
          background: var(--c-lime);
          border: 1px solid var(--c-black);
          padding: 8px 14px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--c-black);
          letter-spacing: 0.05em;
        }

        /* /06 Hatch Col */
        .hatch-display-box {
          border: 1px solid var(--c-border);
          height: 110px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: auto;
          overflow: hidden;
        }

        .hatch-inner {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .hatch-content {
          position: relative;
          z-index: 2;
          background: #ffffff;
          border: 1px solid var(--c-black);
          padding: 8px 14px;
          display: flex;
          flex-direction: column;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          line-height: 1.3;
        }

        .hatch-code {
          color: var(--c-purple);
          font-weight: 700;
        }

        .hatch-node {
          color: var(--c-text-muted);
        }

        @media (max-width: 1024px) {
          .hero-main-block {
            grid-template-columns: 1fr;
            padding: 32px 24px;
          }
          .principles-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .cyber-telemetry-section {
            grid-template-columns: 1fr;
          }
          .telemetry-col {
            border-right: none;
            border-bottom: 1px solid var(--c-border);
          }
        }

        @media (max-width: 768px) {
          .left-vertical-rail {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .cyber-hero-page {
            padding: 0 12px;
          }
          .hero-main-block {
            padding: 24px 6px;
            gap: 24px;
          }
          .hero-action-row {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }
          .hero-cta, .hero-secondary {
            width: 100%;
            text-align: center;
            justify-content: center;
          }
          .hero-micro-text {
            gap: 6px 8px;
            font-size: 0.68rem;
          }
          .principles-grid {
            grid-template-columns: 1fr;
          }
          .telemetry-col {
            padding: 24px 14px;
          }
          .hero-right-visual {
            padding: 18px 14px;
          }
        }

        @media (max-width: 400px) {
          .cyber-hero-page {
            padding: 0 8px;
          }
          .hero-main-block {
            padding: 18px 4px;
          }
          .isometric-wireframe-box {
            height: 230px;
          }
          .wireframe-cube {
            transform: scale(0.85) rotateX(-22deg) rotateY(38deg);
          }
          .coordinate-tag {
            bottom: 6px;
            right: 6px;
            font-size: 0.6rem;
            padding: 2px 6px;
          }
          .metric-bar-wrapper {
            margin: 0 8px;
          }
          .all-operational-banner {
            flex-wrap: wrap;
            gap: 6px;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
}
