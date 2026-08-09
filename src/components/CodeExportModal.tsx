import React, { useState } from 'react';
import { X, Copy, Check, Download, FileCode, Archive, Sparkles } from 'lucide-react';
import JSZip from 'jszip';
import { ConvertedDocument } from '../types';
import { generateStandaloneHtml } from '../services/websiteGenerator';

interface CodeExportModalProps {
  document: ConvertedDocument;
  onClose: () => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({ document: doc, onClose }) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css'>('html');
  const [copied, setCopied] = useState(false);
  const [isExportingZip, setIsExportingZip] = useState(false);

  const htmlCode = generateStandaloneHtml(doc);
  const cssCode = `/* Danvera Web Theme: ${doc.theme} */
:root {
  --bg-primary: #070913;
  --bg-secondary: #0e1326;
  --accent-cyan: #00f2fe;
  --font-heading: 'Outfit', sans-serif;
  --font-body: 'Inter', sans-serif;
}
.danvera-hero { padding: 4rem 1.5rem; text-align: center; border-radius: 20px; }
.danvera-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); padding: 1.5rem; border-radius: 14px; }
.danvera-stat-val { font-size: 2.5rem; font-weight: 800; color: #00f2fe; }
`;

  const handleCopy = () => {
    const textToCopy = activeTab === 'html' ? htmlCode : cssCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${doc.title.toLowerCase().replace(/\s+/g, '-')}-website.html`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadZip = async () => {
    setIsExportingZip(true);
    try {
      const zip = new JSZip();
      zip.file('index.html', htmlCode);
      zip.file('styles.css', cssCode);
      zip.file('README.md', `# ${doc.title} - Danvera Web Package\n\nGenerated with Danvera PDF-to-Website Studio.\nTo host, upload index.html to any web server.`);
      
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${doc.title.toLowerCase().replace(/\s+/g, '-')}-web-package.zip`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to create ZIP package:', err);
    } finally {
      setIsExportingZip(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(5, 7, 15, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '850px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid var(--border-highlight)'
      }}>
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0, 0, 0, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(0, 242, 254, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <FileCode size={20} color="var(--accent-cyan)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Export Web Code & Package</h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {doc.title} &bull; Standalone Single-File HTML5
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '50%'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Controls */}
        <div style={{
          padding: '0.75rem 1.75rem',
          background: 'rgba(0,0,0,0.1)',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('html')}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'html' ? 'var(--gradient-glow)' : 'rgba(255,255,255,0.05)',
                color: activeTab === 'html' ? '#fff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              index.html
            </button>
            <button
              onClick={() => setActiveTab('css')}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '8px',
                border: 'none',
                background: activeTab === 'css' ? 'var(--gradient-glow)' : 'rgba(255,255,255,0.05)',
                color: activeTab === 'css' ? '#fff' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              styles.css
            </button>
          </div>

          <button onClick={handleCopy} className="btn-secondary" style={{ padding: '0.4rem 0.9rem', fontSize: '0.825rem' }}>
            {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
            <span>{copied ? 'Copied to Clipboard' : 'Copy Code'}</span>
          </button>
        </div>

        {/* Code Content Area */}
        <div style={{ padding: '1.5rem', flex: 1, overflowY: 'auto' }}>
          <pre className="code-block" style={{ margin: 0, maxHeight: '380px' }}>
            <code>{activeTab === 'html' ? htmlCode : cssCode}</code>
          </pre>
        </div>

        {/* Footer Actions */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderTop: '1px solid var(--border-color)',
          background: 'rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
            ✓ Ready to publish on Netlify, Vercel, GitHub Pages, or S3
          </span>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={handleDownloadHtml} className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.875rem' }}>
              <Download size={16} />
              <span>Download HTML</span>
            </button>

            <button onClick={handleDownloadZip} className="btn-primary" style={{ padding: '0.6rem 1.3rem', fontSize: '0.875rem' }}>
              <Archive size={16} />
              <span>{isExportingZip ? 'Packaging...' : 'Download Full ZIP Package'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
