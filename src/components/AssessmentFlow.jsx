import React, { useState, useEffect } from 'react';
import { 
  AI_TOOLS, 
  EXPERIENCE_LEVELS, 
  CODE_RATIO_OPTIONS, 
  EXPLAIN_CODE_OPTIONS, 
  ERROR_HANDLING_OPTIONS, 
  OUTAGE_OPTIONS 
} from '../data/roastEngine';
import { ArrowUpRight, ArrowLeft, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import { playBlip } from '../utils/audio';

export default function AssessmentFlow({ onComplete, onCancel }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    experience: 'senior',
    aiTool: 'cursor',
    codeRatio: 'heavy',
    explainCode: 'prayer',
    errorHandling: 'copypaste',
    outageReaction: 'nap',
  });
  const [errorMsg, setErrorMsg] = useState('');

  // Dropdown open states for Phase 3
  const [openDropdown, setOpenDropdown] = useState(null); // 'codeRatio' | 'explainCode' | 'errorHandling' | 'outageReaction' | null

  // Close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;
    const handleDocumentClick = (e) => {
      if (!e.target.closest('.audit-dropdown-field')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [openDropdown]);

  // Universal Enter & Escape Key Handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        return;
      }
      if (e.key === 'Enter') {
        if (step === 1) {
          // If triggered directly inside the text input, let form onSubmit handle validation
          if (e.target && e.target.tagName === 'INPUT') return;
          if (!formData.name.trim()) {
            setErrorMsg('Please specify candidate identifier or handle.');
            return;
          }
          playBlip();
          setStep(2);
        } else if (step === 2) {
          playBlip();
          setStep(3);
        } else if (step === 3) {
          if (openDropdown) {
            setOpenDropdown(null);
            return;
          }
          playBlip();
          onComplete(formData);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, formData, onComplete, openDropdown]);

  const updateField = (field, val) => {
    playBlip();
    setFormData(prev => ({ ...prev, [field]: val }));
    setErrorMsg('');
  };

  const handleNextStep1 = (e) => {
    if (e) e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg('Please specify candidate identifier or handle.');
      return;
    }
    playBlip();
    setStep(2);
  };

  const handleNextStep2 = () => {
    playBlip();
    setStep(3);
  };

  const handleFinalSubmit = () => {
    playBlip();
    onComplete(formData);
  };

  const toggleDropdown = (field) => {
    playBlip();
    setOpenDropdown(prev => prev === field ? null : field);
  };

  const handleSelectOption = (field, val) => {
    updateField(field, val);
    setOpenDropdown(null); // autofill & collapse
  };

  // Helper to get selected option object
  const getSelectedOption = (options, currentVal) => {
    return options.find(o => o.id === currentVal);
  };

  return (
    <div className="cyber-flow-page animate-cyber-fade">
      
      {/* Top Cyber Breadcrumb */}
      <div className="flow-top-bar">
        <button 
          className="flow-back-btn"
          onClick={step > 1 ? () => { playBlip(); setStep(step - 1); } : onCancel}
        >
          <ArrowLeft size={14} />
          <span>{step > 1 ? '[ PREVIOUS ]' : '[ EXIT AUDIT ]'}</span>
        </button>

        <div className="flow-step-meta">
          <span className="crosshair">+</span>
          <span className="flow-step-tag">PHASE 0{step} // 03</span>
          <span className="crosshair">+</span>
        </div>
      </div>

      <div className="cyber-audit-card" key={step}>
        
        {/* PHASE 1: IDENTITY */}
        {step === 1 && (
          <form onSubmit={handleNextStep1} className="audit-form-block">
            <div className="audit-header">
              <span className="sec-tag">/03.1</span>
              <h2 className="audit-title">FIRST, IDENTIFY YOURSELF.</h2>
              <p className="audit-subtitle">Your credentials will be calibrated against senior engineering benchmarks.</p>
            </div>

            <div className="cyber-field">
              <label className="cyber-label" htmlFor="dev-name">
                <Terminal size={14} color="#7c3aed" />
                <span>CANDIDATE_NAME // GITHUB_HANDLE</span>
              </label>
              <div className="input-bracket-wrapper">
                <span className="input-prompt">&gt;</span>
                <input 
                  id="dev-name"
                  type="text" 
                  placeholder="e.g. Alex Chen" 
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  autoFocus
                  maxLength={32}
                  className={`cyber-text-input ${errorMsg ? 'has-error' : ''}`}
                />
              </div>
              {errorMsg && <p className="cyber-error">{errorMsg}</p>}
            </div>

            <div className="cyber-field">
              <label className="cyber-label">
                <span>EXPERIENCE_TIER</span>
              </label>
              <div className="exp-tier-grid">
                {EXPERIENCE_LEVELS.map((lvl) => (
                  <button
                    type="button"
                    key={lvl.id}
                    className={`exp-tier-card ${formData.experience === lvl.id ? 'active' : ''}`}
                    onClick={() => updateField('experience', lvl.id)}
                  >
                    <div className="tier-radio">
                      {formData.experience === lvl.id && <div className="tier-radio-inner" />}
                    </div>
                    <div className="tier-details">
                      <span className="tier-name">{lvl.label}</span>
                      <span className="tier-sub">{lvl.subtitle}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-cyber-black flow-submit-btn">
              <span>CONTINUE TO AI STACK [ENTER ↵]</span>
              <ArrowUpRight size={18} />
            </button>
          </form>
        )}

        {/* PHASE 2: AI STACK WITH REAL EMOJIS */}
        {step === 2 && (
          <div className="audit-form-block">
            <div className="audit-header">
              <span className="sec-tag">/03.2</span>
              <h2 className="audit-title">WHICH AI TOOLS POWER YOUR WORKFLOW?</h2>
              <p className="audit-subtitle">Select your primary daily code generator or cognitive proxy.</p>
            </div>

            <div className="tools-cyber-grid">
              {AI_TOOLS.map((t) => (
                <button
                  type="button"
                  key={t.id}
                  className={`cyber-tool-card ${formData.aiTool === t.id ? 'active' : ''}`}
                  onClick={() => updateField('aiTool', t.id)}
                >
                  <div className="tool-top-row">
                    <span className="tool-real-emoji">{t.icon}</span>
                    {formData.aiTool === t.id ? (
                      <span className="tool-selected-badge">[ ACTIVE ]</span>
                    ) : (
                      <span className="crosshair">+</span>
                    )}
                  </div>
                  <span className="tool-name">{t.name}</span>
                  <span className="tool-vibe">{t.vibe}</span>
                </button>
              ))}
            </div>

            <button type="button" className="btn-cyber-black flow-submit-btn" onClick={handleNextStep2}>
              <span>NEXT: AUTONOMY AUDIT [ENTER ↵]</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        )}

        {/* PHASE 3: DEPENDENCY AUDIT WITH INTERACTIVE PLACEHOLDERS & AUTOFILL */}
        {step === 3 && (
          <div className="audit-form-block">
            <div className="audit-header">
              <span className="sec-tag">/03.3</span>
              <h2 className="audit-title">BE HONEST. NOBODY IS JUDGING YOU.</h2>
              <p className="audit-subtitle">Click each field to reveal options and autofill your audit profile.</p>
            </div>

            {/* Q1: CODE RATIO */}
            <div className="audit-dropdown-field">
              <div className="q-label-row">
                <span className="q-num">01</span>
                <span className="q-title">How much of your written code is AI-generated?</span>
              </div>
              
              <div 
                className={`dropdown-trigger-input ${openDropdown === 'codeRatio' ? 'is-open' : ''}`}
                onClick={() => toggleDropdown('codeRatio')}
              >
                <div className="trigger-left">
                  <span className="autofill-indicator">AUTOFILL:</span>
                  <span className="trigger-val">
                    {getSelectedOption(CODE_RATIO_OPTIONS, formData.codeRatio)?.label || '> SELECT ESTIMATED AI CODE VOLUME...'}
                  </span>
                  <span className="trigger-sub">
                    — {getSelectedOption(CODE_RATIO_OPTIONS, formData.codeRatio)?.desc}
                  </span>
                </div>
                <div className="trigger-arrow">
                  {openDropdown === 'codeRatio' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>

              {openDropdown === 'codeRatio' && (
                <div className="cyber-dropdown-popover animate-cyber-fade">
                  <div className="dropdown-popover-header">
                    <span>SELECT YOUR CODE RATIO (CLICK TO AUTOFILL):</span>
                  </div>
                  {CODE_RATIO_OPTIONS.map((opt) => (
                    <div
                      key={opt.id}
                      className={`dropdown-option-item ${formData.codeRatio === opt.id ? 'active' : ''}`}
                      onClick={() => handleSelectOption('codeRatio', opt.id)}
                    >
                      <div className="opt-radio-icon">
                        {formData.codeRatio === opt.id ? '●' : '○'}
                      </div>
                      <div className="opt-item-text">
                        <span className="opt-item-label">{opt.label}</span>
                        <span className="opt-item-desc">{opt.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Q2: EXPLAIN CODE */}
            <div className="audit-dropdown-field">
              <div className="q-label-row">
                <span className="q-num">02</span>
                <span className="q-title">Can you explain the code your AI writes for you?</span>
              </div>
              
              <div 
                className={`dropdown-trigger-input ${openDropdown === 'explainCode' ? 'is-open' : ''}`}
                onClick={() => toggleDropdown('explainCode')}
              >
                <div className="trigger-left">
                  <span className="autofill-indicator">AUTOFILL:</span>
                  <span className="trigger-val">
                    {getSelectedOption(EXPLAIN_CODE_OPTIONS, formData.explainCode)?.label || '> SELECT COMPREHENSION LEVEL...'}
                  </span>
                  <span className="trigger-sub">
                    — {getSelectedOption(EXPLAIN_CODE_OPTIONS, formData.explainCode)?.desc}
                  </span>
                </div>
                <div className="trigger-arrow">
                  {openDropdown === 'explainCode' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>

              {openDropdown === 'explainCode' && (
                <div className="cyber-dropdown-popover animate-cyber-fade">
                  <div className="dropdown-popover-header">
                    <span>SELECT CODE COMPREHENSION (CLICK TO AUTOFILL):</span>
                  </div>
                  {EXPLAIN_CODE_OPTIONS.map((opt) => (
                    <div
                      key={opt.id}
                      className={`dropdown-option-item ${formData.explainCode === opt.id ? 'active' : ''}`}
                      onClick={() => handleSelectOption('explainCode', opt.id)}
                    >
                      <div className="opt-radio-icon">
                        {formData.explainCode === opt.id ? '●' : '○'}
                      </div>
                      <div className="opt-item-text">
                        <span className="opt-item-label">{opt.label}</span>
                        <span className="opt-item-desc">{opt.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Q3: ERROR HANDLING */}
            <div className="audit-dropdown-field">
              <div className="q-label-row">
                <span className="q-num">03</span>
                <span className="q-title">What happens when the AI gives you an error you don’t understand?</span>
              </div>
              
              <div 
                className={`dropdown-trigger-input ${openDropdown === 'errorHandling' ? 'is-open' : ''}`}
                onClick={() => toggleDropdown('errorHandling')}
              >
                <div className="trigger-left">
                  <span className="autofill-indicator">AUTOFILL:</span>
                  <span className="trigger-val">
                    {getSelectedOption(ERROR_HANDLING_OPTIONS, formData.errorHandling)?.label || '> SELECT DEBUGGING TRIAGE...'}
                  </span>
                  <span className="trigger-sub">
                    — {getSelectedOption(ERROR_HANDLING_OPTIONS, formData.errorHandling)?.desc}
                  </span>
                </div>
                <div className="trigger-arrow">
                  {openDropdown === 'errorHandling' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>

              {openDropdown === 'errorHandling' && (
                <div className="cyber-dropdown-popover animate-cyber-fade">
                  <div className="dropdown-popover-header">
                    <span>SELECT ERROR REACTION (CLICK TO AUTOFILL):</span>
                  </div>
                  {ERROR_HANDLING_OPTIONS.map((opt) => (
                    <div
                      key={opt.id}
                      className={`dropdown-option-item ${formData.errorHandling === opt.id ? 'active' : ''}`}
                      onClick={() => handleSelectOption('errorHandling', opt.id)}
                    >
                      <div className="opt-radio-icon">
                        {formData.errorHandling === opt.id ? '●' : '○'}
                      </div>
                      <div className="opt-item-text">
                        <span className="opt-item-label">{opt.label}</span>
                        <span className="opt-item-desc">{opt.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Q4: OUTAGE REACTION */}
            <div className="audit-dropdown-field">
              <div className="q-label-row">
                <span className="q-num">04</span>
                <span className="q-title">Crisis Scenario: Cloud AI APIs go offline for 4 hours. What happens?</span>
              </div>
              
              <div 
                className={`dropdown-trigger-input ${openDropdown === 'outageReaction' ? 'is-open' : ''}`}
                onClick={() => toggleDropdown('outageReaction')}
              >
                <div className="trigger-left">
                  <span className="autofill-indicator">AUTOFILL:</span>
                  <span className="trigger-val">
                    {getSelectedOption(OUTAGE_OPTIONS, formData.outageReaction)?.label || '> SELECT OUTAGE PROTOCOL...'}
                  </span>
                  <span className="trigger-sub">
                    — {getSelectedOption(OUTAGE_OPTIONS, formData.outageReaction)?.desc}
                  </span>
                </div>
                <div className="trigger-arrow">
                  {openDropdown === 'outageReaction' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>

              {openDropdown === 'outageReaction' && (
                <div className="cyber-dropdown-popover animate-cyber-fade">
                  <div className="dropdown-popover-header">
                    <span>SELECT OUTAGE SURVIVAL (CLICK TO AUTOFILL):</span>
                  </div>
                  {OUTAGE_OPTIONS.map((opt) => (
                    <div
                      key={opt.id}
                      className={`dropdown-option-item ${formData.outageReaction === opt.id ? 'active' : ''}`}
                      onClick={() => handleSelectOption('outageReaction', opt.id)}
                    >
                      <div className="opt-radio-icon">
                        {formData.outageReaction === opt.id ? '●' : '○'}
                      </div>
                      <div className="opt-item-text">
                        <span className="opt-item-label">{opt.label}</span>
                        <span className="opt-item-desc">{opt.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button type="button" className="btn-cyber-black flow-submit-btn submit-final-btn" onClick={handleFinalSubmit}>
              <span>CALCULATE AUTONOMY SCORE [ENTER ↵]</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        )}

      </div>

      <style>{`
        .cyber-flow-page {
          width: 100%;
          max-width: 860px;
          margin: 0 auto;
          padding: 30px 24px 80px;
        }

        .flow-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--c-border);
          padding-bottom: 14px;
        }

        .flow-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--c-text-muted);
          cursor: pointer;
        }

        .flow-back-btn:hover {
          color: var(--c-purple);
        }

        .flow-step-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .flow-step-tag {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--c-purple);
          letter-spacing: 0.08em;
        }

        .cyber-audit-card {
          background: #ffffff;
          border: 1px solid var(--c-black);
          padding: 40px;
          box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.08);
        }

        .audit-header {
          margin-bottom: 32px;
          border-bottom: 1px solid var(--c-border);
          padding-bottom: 18px;
        }

        .audit-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 4vw, 2.8rem);
          font-weight: 400;
          color: var(--c-black);
          line-height: 1;
          margin-top: 6px;
        }

        .audit-subtitle {
          font-size: 0.9rem;
          color: var(--c-text-secondary);
          margin-top: 6px;
        }

        /* Field */
        .cyber-field {
          margin-bottom: 28px;
        }

        .cyber-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--c-text-muted);
          margin-bottom: 10px;
        }

        .input-bracket-wrapper {
          display: flex;
          align-items: center;
          border: 1px solid var(--c-black);
          background: var(--c-bg);
          padding: 0 16px;
        }

        .input-prompt {
          font-family: var(--font-mono);
          color: var(--c-purple);
          font-weight: 700;
          margin-right: 12px;
        }

        .cyber-text-input {
          flex: 1;
          border: none;
          background: transparent;
          padding: 14px 0;
          font-family: var(--font-mono);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--c-black);
          outline: none;
        }

        .cyber-error {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--c-red);
          margin-top: 6px;
        }

        /* Experience selector */
        .exp-tier-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .exp-tier-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px;
          background: #ffffff;
          border: 1px solid var(--c-border);
          text-align: left;
          cursor: pointer;
          transition: all 0.15s;
        }

        .exp-tier-card:hover {
          border-color: var(--c-black);
        }

        .exp-tier-card.active {
          border-color: var(--c-black);
          background: var(--c-purple-bg);
          box-shadow: 2px 2px 0px var(--c-purple);
        }

        .tier-radio {
          width: 14px;
          height: 14px;
          border: 1.5px solid var(--c-black);
          margin-top: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .tier-radio-inner {
          width: 6px;
          height: 6px;
          background: var(--c-purple);
        }

        .tier-name {
          display: block;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.88rem;
          color: var(--c-black);
        }

        .tier-sub {
          font-size: 0.76rem;
          color: var(--c-text-muted);
          line-height: 1.35;
        }

        /* AI Tool grid */
        .tools-cyber-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 32px;
        }

        .cyber-tool-card {
          background: #ffffff;
          border: 1px solid var(--c-border);
          padding: 16px;
          display: flex;
          flex-direction: column;
          text-align: left;
          cursor: pointer;
          transition: all 0.15s;
        }

        .cyber-tool-card:hover {
          border-color: var(--c-black);
        }

        .cyber-tool-card.active {
          border-color: var(--c-black);
          background: var(--c-purple-bg);
          box-shadow: 2px 2px 0px var(--c-purple);
        }

        .tool-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .tool-real-emoji {
          font-size: 1.5rem;
          line-height: 1;
        }

        .tool-selected-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--c-purple);
          font-weight: 700;
        }

        .tool-name {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--c-black);
          margin-bottom: 4px;
        }

        .tool-vibe {
          font-size: 0.72rem;
          color: var(--c-text-muted);
          line-height: 1.35;
        }

        /* Phase 3 Dropdown & Autofill Placeholders */
        .audit-dropdown-field {
          margin-bottom: 24px;
          position: relative;
        }

        .q-label-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 8px;
        }

        .q-num {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--c-purple);
        }

        .q-title {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--c-black);
        }

        .dropdown-trigger-input {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: var(--c-bg);
          border: 1px solid var(--c-border);
          padding: 14px 18px;
          cursor: pointer;
          transition: all 0.15s;
          user-select: none;
        }

        .dropdown-trigger-input:hover {
          border-color: var(--c-black);
          background: #ffffff;
        }

        .dropdown-trigger-input.is-open {
          border-color: var(--c-purple);
          background: #ffffff;
          box-shadow: 0 0 0 1px var(--c-purple);
        }

        .trigger-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .autofill-indicator {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--c-purple);
          background: var(--c-purple-bg);
          padding: 2px 6px;
        }

        .trigger-val {
          font-family: var(--font-mono);
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--c-black);
        }

        .trigger-sub {
          font-size: 0.8rem;
          color: var(--c-text-muted);
        }

        .trigger-arrow {
          color: var(--c-text-muted);
        }

        /* Popover */
        .cyber-dropdown-popover {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: #ffffff;
          border: 1.5px solid var(--c-black);
          box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
          z-index: 50;
          margin-top: 4px;
        }

        .dropdown-popover-header {
          padding: 8px 14px;
          background: var(--c-surface-subtle);
          border-bottom: 1px solid var(--c-border);
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--c-text-muted);
        }

        .dropdown-option-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--c-border);
          cursor: pointer;
          transition: background 0.15s;
        }

        .dropdown-option-item:last-child {
          border-bottom: none;
        }

        .dropdown-option-item:hover {
          background: var(--c-purple-bg);
        }

        .dropdown-option-item.active {
          background: var(--c-purple-light);
        }

        .opt-radio-icon {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--c-purple);
          margin-top: 1px;
        }

        .opt-item-text {
          display: flex;
          flex-direction: column;
        }

        .opt-item-label {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--c-black);
        }

        .opt-item-desc {
          font-size: 0.78rem;
          color: var(--c-text-secondary);
        }

        .flow-submit-btn {
          width: 100%;
          margin-top: 16px;
          padding: 16px;
          font-size: 0.92rem;
        }

        .submit-final-btn {
          background: var(--c-black);
        }

        .submit-final-btn:hover {
          background: var(--c-purple);
        }

        @media (max-width: 768px) {
          .cyber-audit-card {
            padding: 24px 18px;
          }
          .exp-tier-grid {
            grid-template-columns: 1fr;
          }
          .tools-cyber-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
