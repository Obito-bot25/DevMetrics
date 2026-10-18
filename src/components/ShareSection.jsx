import React, { useState } from 'react';
import { toPng } from 'html-to-image';
import { ArrowUpRight, Copy, Check, RotateCcw, AlertTriangle } from 'lucide-react';

export default function ShareSection({ certificateRef, resultData, onReset }) {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const currentUrl = typeof window !== 'undefined' && !window.location.hostname.includes('localhost') && !window.location.hostname.includes('127.0.0.1')
    ? window.location.href
    : 'https://dev-metrics-eta.vercel.app';
  const shareText = `I took the 2026 Developer Independence Assessment and got completely exposed 💀 Find out how cooked you are:`;

  const handleDownloadImage = async () => {
    if (!certificateRef.current) return;
    try {
      setDownloading(true);
      setErrorMsg('');

      // Ensure custom fonts (Bebas Neue, Space Mono) are fully rasterized
      if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }

      // High-res crisp 2x PNG rendering
      const dataUrl = await toPng(certificateRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
      });

      const safeName = (resultData?.name || 'developer')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '') || 'developer';

      const link = document.createElement('a');
      link.download = `cuck-coder-dossier-${safeName}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export certificate:', err);
      setErrorMsg('Could not export image. Please take a direct screenshot.');
    } finally {
      setDownloading(false);
    }
  };

  const handleCopyLink = () => {
    const fullText = `${shareText} ${currentUrl}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } else {
      const ta = document.createElement('textarea');
      ta.value = fullText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  const whatsAppUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + currentUrl)}`;

  return (
    <div className="cyber-share-section animate-cyber-fade">
      
      {/* Primary Action Buttons */}
      <div className="share-btn-row">
        
        <button 
          id="download-png-btn"
          className="btn-cyber-black share-act-btn"
          onClick={handleDownloadImage}
          disabled={downloading}
        >
          <span>{downloading ? 'GENERATING HIGH-RES PNG...' : 'DOWNLOAD DOSSIER (PNG)'}</span>
          <ArrowUpRight size={18} />
        </button>

        <button 
          id="copy-bait-btn"
          className="btn-cyber-outline share-act-btn"
          onClick={handleCopyLink}
        >
          {copied ? <Check size={16} color="#7c3aed" /> : <Copy size={16} />}
          <span>{copied ? 'SPOILER LINK COPIED!' : 'COPY SPOILER-FREE LINK [ ]'}</span>
        </button>

      </div>

      {errorMsg && (
        <div className="cyber-error-bar">
          <AlertTriangle size={15} />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Social Virality Row */}
      <div className="cyber-social-row">
        <span className="social-kicker">EXPOSE YOUR TEAM // SCN_08:</span>
        <div className="social-links-grid">
          
          <a 
            href={tweetUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-cyber-link"
          >
            <span>[ POST TO X ↗ ]</span>
          </a>

          <a 
            href={linkedInUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-cyber-link"
          >
            <span>[ LINKEDIN ↗ ]</span>
          </a>

          <a 
            href={whatsAppUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-cyber-link"
          >
            <span>[ GROUP CHAT ↗ ]</span>
          </a>

        </div>
      </div>

      {/* Reset Flow */}
      <div className="reset-audit-box">
        <button className="reset-text-btn" onClick={onReset}>
          <RotateCcw size={13} />
          <span>[ AUDIT ANOTHER DEVELOPER ]</span>
        </button>
      </div>

      <style>{`
        .cyber-share-section {
          width: 100%;
          max-width: 860px;
          margin-top: 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }

        .share-btn-row {
          display: flex;
          gap: 16px;
          width: 100%;
          justify-content: center;
        }

        .share-act-btn {
          flex: 1;
          max-width: 380px;
          padding: 16px 24px;
        }

        .cyber-social-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: #ffffff;
          border: 1px solid var(--c-border);
          padding: 14px 20px;
        }

        .social-kicker {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--c-text-muted);
          letter-spacing: 0.08em;
        }

        .social-links-grid {
          display: flex;
          gap: 12px;
        }

        .social-cyber-link {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--c-black);
          text-decoration: none;
          padding: 6px 10px;
          border: 1px solid var(--c-border);
          transition: all 0.15s;
        }

        .social-cyber-link:hover {
          border-color: var(--c-purple);
          color: var(--c-purple);
          background: var(--c-purple-bg);
        }

        .reset-audit-box {
          margin-top: 8px;
        }

        .reset-text-btn {
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

        .reset-text-btn:hover {
          color: var(--c-purple);
        }

        .cyber-error-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #fee2e2;
          border: 1px solid #ef4444;
          color: #b91c1c;
          padding: 8px 16px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
        }

        @media (max-width: 640px) {
          .share-btn-row {
            flex-direction: column;
            width: 100%;
          }
          .share-act-btn {
            max-width: 100%;
          }
          .cyber-social-row {
            flex-direction: column;
            gap: 12px;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
