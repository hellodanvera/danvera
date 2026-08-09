import React, { useState } from 'react';
import { Monitor, Laptop, Tablet, Smartphone, Download, Code, Palette, RefreshCw, Check, Sparkles } from 'lucide-react';
import { ConvertedDocument, ViewportMode, ThemePreset } from '../types';
import { generateStandaloneHtml } from '../services/websiteGenerator';

interface WebsitePreviewProps {
  document: ConvertedDocument;
  onUpdateTheme: (theme: ThemePreset) => void;
  onOpenExportModal: () => void;
  onReset: () => void;
}

export const WebsitePreview: React.FC<WebsitePreviewProps> = ({
  document: doc,
  onUpdateTheme,
  onOpenExportModal,
  onReset
}) => {
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const getViewportWidth = () => {
    switch (viewport) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      case 'laptop': return '1024px';
      case 'desktop': default: return '100%';
    }
  };

  const themes: { id: ThemePreset; name: string; color: string }[] = [
    { id: 'dark-cyan', name: 'Executive Dark', color: '#00f2fe' },
    { id: 'executive-light', name: 'Clean Light', color: '#2563eb' },
    { id: 'creative-violet', name: 'Vibrant Studio', color: '#7000ff' },
    { id: 'tech-docs', name: 'Tech Docs', color: '#10b981' }
  ];

  const handleCopyQuickCode = () => {
    const code = generateStandaloneHtml(doc);
    navigator.clipboard.writeText(code);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  return (
    <div style={{ marginTop: '2rem' }}>
      {/* Studio Toolbar Bar */}
      <div className="glass-panel" style={{
        padding: '1rem 1.5rem',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Document Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            padding: '0.4rem 0.8rem',
            borderRadius: '8px',
            background: 'rgba(0, 242, 254, 0.1)',
            color: 'var(--accent-cyan)',
            fontSize: '0.8rem',
            fontWeight: 700
          }}>
            LIVE PREVIEW
          </div>
          <div>
            <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{doc.title}</h3>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              {doc.sections.length} extracted web sections &bull; Source: {doc.subtitle}
            </span>
          </div>
        </div>

        {/* Viewport Device Toggles */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.25)',
          padding: '0.25rem',
          borderRadius: '12px',
          border: '1px solid var(--border-color)'
        }}>
          <button
            onClick={() => setViewport('desktop')}
            style={{
              background: viewport === 'desktop' ? 'var(--gradient-glow)' : 'transparent',
              color: viewport === 'desktop' ? '#fff' : 'var(--text-secondary)',
              border: 'none',
              borderRadius: '8px',
              padding: '0.4rem 0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.825rem',
              fontWeight: 600,
              transition: 'all 0.2s'
            }}
          >
            <Monitor size={15} />
            <span>Desktop</span>
          </button>

          <button
            onClick={() => setViewport('laptop')}
            style={{
              background: viewport === 'laptop' ? 'var(--gradient-glow)' : 'transparent',
              color: viewport === 'laptop' ? '#fff' : 'var(--text-secondary)',
              border: 'none',
              borderRadius: '8px',
              padding: '0.4rem 0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.825rem',
              fontWeight: 600,
              transition: 'all 0.2s'
            }}
          >
            <Laptop size={15} />
            <span>Laptop</span>
          </button>

          <button
            onClick={() => setViewport('tablet')}
            style={{
              background: viewport === 'tablet' ? 'var(--gradient-glow)' : 'transparent',
              color: viewport === 'tablet' ? '#fff' : 'var(--text-secondary)',
              border: 'none',
              borderRadius: '8px',
              padding: '0.4rem 0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.825rem',
              fontWeight: 600,
              transition: 'all 0.2s'
            }}
          >
            <Tablet size={15} />
            <span>Tablet</span>
          </button>

          <button
            onClick={() => setViewport('mobile')}
            style={{
              background: viewport === 'mobile' ? 'var(--gradient-glow)' : 'transparent',
              color: viewport === 'mobile' ? '#fff' : 'var(--text-secondary)',
              border: 'none',
              borderRadius: '8px',
              padding: '0.4rem 0.75rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.825rem',
              fontWeight: 600,
              transition: 'all 0.2s'
            }}
          >
            <Smartphone size={15} />
            <span>Mobile</span>
          </button>
        </div>

        {/* Theme Selector & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'flex', gap: '0.35rem', background: 'rgba(0,0,0,0.2)', padding: '0.25rem', borderRadius: '10px' }}>
            {themes.map(th => (
              <button
                key={th.id}
                onClick={() => onUpdateTheme(th.id)}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: th.color,
                  border: doc.theme === th.id ? '2px solid #ffffff' : 'none',
                  cursor: 'pointer',
                  boxShadow: doc.theme === th.id ? '0 0 8px ' + th.color : 'none'
                }}
                title={`Theme: ${th.name}`}
              />
            ))}
          </div>

          <button onClick={handleCopyQuickCode} className="btn-secondary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.825rem' }}>
            {copiedNotification ? <Check size={14} color="#10b981" /> : <Code size={14} />}
            <span>{copiedNotification ? 'Copied!' : 'Copy Code'}</span>
          </button>

          <button onClick={onOpenExportModal} className="btn-primary" style={{ padding: '0.45rem 1rem', fontSize: '0.825rem' }}>
            <Download size={14} />
            <span>Export Web Package</span>
          </button>
        </div>
      </div>

      {/* Frame Simulated Viewport Container */}
      <div className="viewport-frame-wrapper" style={{ width: getViewportWidth(), minHeight: '650px' }}>
        {/* Frame Top Browser Header Bar */}
        <div style={{
          background: 'rgba(10, 15, 29, 0.95)',
          padding: '0.6rem 1rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '0.2rem 1.25rem',
            borderRadius: '9999px',
            fontSize: '0.75rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            width: '60%',
            justifyContent: 'center'
          }}>
            <span>https://danvera.app/preview/{doc.id}</span>
          </div>

          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            {viewport.toUpperCase()} ({getViewportWidth()})
          </span>
        </div>

        {/* Live Rendered Content */}
        <div style={{ padding: '2rem 1.5rem', background: doc.theme === 'executive-light' ? '#f8fafc' : 'var(--bg-primary)', color: doc.theme === 'executive-light' ? '#0f172a' : 'var(--text-primary)', minHeight: '600px' }}>
          {doc.sections.map((sec) => (
            <div key={sec.id} style={{ marginBottom: '2.5rem' }}>
              {sec.type === 'hero' && (
                <div style={{
                  textAlign: 'center',
                  padding: '3rem 1.5rem',
                  borderRadius: '20px',
                  background: doc.theme === 'executive-light' ? '#ffffff' : 'rgba(255,255,255,0.03)',
                  border: '1px solid ' + (doc.theme === 'executive-light' ? '#e2e8f0' : 'var(--border-color)'),
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}>
                  <span className="badge-glow" style={{ marginBottom: '1rem' }}>
                    <Sparkles size={14} />
                    <span>{doc.title}</span>
                  </span>
                  <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    margin: '0.75rem 0',
                    color: doc.theme === 'executive-light' ? '#0f172a' : '#ffffff'
                  }}>
                    {sec.title}
                  </h1>
                  <p style={{
                    fontSize: '1.15rem',
                    color: doc.theme === 'executive-light' ? '#475569' : 'var(--text-secondary)',
                    maxWidth: '750px',
                    margin: '0 auto 1.5rem'
                  }}>
                    {sec.content}
                  </p>
                  {sec.subContent && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
                      {sec.subContent.map((sub, i) => (
                        <span key={i} style={{
                          fontSize: '0.85rem',
                          padding: '0.35rem 0.8rem',
                          borderRadius: '8px',
                          background: doc.theme === 'executive-light' ? '#e2e8f0' : 'rgba(255,255,255,0.06)',
                          color: doc.theme === 'executive-light' ? '#334155' : 'var(--text-primary)',
                          fontWeight: 500
                        }}>
                          ✓ {sub}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {sec.type === 'stats' && (
                <div style={{
                  padding: '2.5rem 1.5rem',
                  borderRadius: '20px',
                  background: doc.theme === 'executive-light' ? '#ffffff' : 'rgba(255,255,255,0.03)',
                  border: '1px solid ' + (doc.theme === 'executive-light' ? '#e2e8f0' : 'var(--border-color)')
                }}>
                  <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: doc.theme === 'executive-light' ? '#0f172a' : '#ffffff' }}>
                    {sec.title || 'Key Metrics'}
                  </h2>
                  <p style={{ color: doc.theme === 'executive-light' ? '#64748b' : 'var(--text-secondary)', marginBottom: '2rem' }}>
                    {sec.content}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
                    {sec.stats?.map((st, i) => (
                      <div key={i} style={{
                        padding: '1.5rem',
                        borderRadius: '14px',
                        background: doc.theme === 'executive-light' ? '#f1f5f9' : 'rgba(255,255,255,0.02)',
                        border: '1px solid ' + (doc.theme === 'executive-light' ? '#cbd5e1' : 'var(--border-color)'),
                        textAlign: 'center'
                      }}>
                        <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-heading)' }}>
                          {st.value}
                        </div>
                        <div style={{ fontWeight: 600, margin: '0.25rem 0', color: doc.theme === 'executive-light' ? '#1e293b' : '#ffffff' }}>
                          {st.label}
                        </div>
                        {st.detail && <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{st.detail}</div>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {sec.type === 'features' && (
                <div style={{
                  padding: '2.5rem 1.5rem',
                  borderRadius: '20px',
                  background: doc.theme === 'executive-light' ? '#ffffff' : 'rgba(255,255,255,0.03)',
                  border: '1px solid ' + (doc.theme === 'executive-light' ? '#e2e8f0' : 'var(--border-color)')
                }}>
                  <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: doc.theme === 'executive-light' ? '#0f172a' : '#ffffff' }}>
                    {sec.title || 'Platform Capabilities'}
                  </h2>
                  <p style={{ color: doc.theme === 'executive-light' ? '#64748b' : 'var(--text-secondary)', marginBottom: '2rem' }}>
                    {sec.content}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                    {sec.features?.map((ft, i) => (
                      <div key={i} style={{
                        padding: '1.5rem',
                        borderRadius: '14px',
                        background: doc.theme === 'executive-light' ? '#f8fafc' : 'rgba(255,255,255,0.02)',
                        border: '1px solid ' + (doc.theme === 'executive-light' ? '#e2e8f0' : 'var(--border-color)')
                      }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--accent-cyan)' }}>
                          {ft.title}
                        </h3>
                        <p style={{ fontSize: '0.9rem', color: doc.theme === 'executive-light' ? '#475569' : 'var(--text-secondary)' }}>
                          {ft.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {sec.type === 'paragraph' && (
                <div style={{
                  padding: '2rem 1.5rem',
                  borderRadius: '16px',
                  background: doc.theme === 'executive-light' ? '#ffffff' : 'rgba(255,255,255,0.02)',
                  border: '1px solid ' + (doc.theme === 'executive-light' ? '#e2e8f0' : 'var(--border-color)')
                }}>
                  {sec.title && (
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: doc.theme === 'executive-light' ? '#0f172a' : '#ffffff' }}>
                      {sec.title}
                    </h3>
                  )}
                  <p style={{ fontSize: '1rem', lineHeight: 1.7, color: doc.theme === 'executive-light' ? '#334155' : 'var(--text-secondary)' }}>
                    {sec.content}
                  </p>
                </div>
              )}

              {sec.type === 'callout' && (
                <div style={{
                  padding: '2.5rem 1.5rem',
                  borderRadius: '20px',
                  background: 'var(--gradient-glow)',
                  color: '#ffffff',
                  textAlign: 'center'
                }}>
                  <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: '#ffffff' }}>{sec.title}</h2>
                  <p style={{ fontSize: '1.1rem', opacity: 0.95, maxWidth: '650px', margin: '0 auto' }}>{sec.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
