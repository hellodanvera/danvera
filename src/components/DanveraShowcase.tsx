import React from 'react';
import { Layers, Globe, Shield, Cpu, Layout, ArrowUpRight, BarChart3 } from 'lucide-react';

export const DanveraShowcase: React.FC = () => {
  const capabilities = [
    {
      icon: <Layers size={24} color="#00f2fe" />,
      title: 'Automated Structure Discovery',
      desc: 'Danvera neural heuristics identify headings, lists, table structures, and executive callouts without manual tagging.'
    },
    {
      icon: <Layout size={24} color="#4facfe" />,
      title: 'Adaptive Fluid Breakpoints',
      desc: 'Static 8.5x11 PDF layouts automatically reflow into mobile-first flexbox and CSS subgrid containers.'
    },
    {
      icon: <Cpu size={24} color="#7000ff" />,
      title: 'Client-Side WebGL Rendering',
      desc: 'Font matrices and embedded graphic canvases are compiled directly inside your browser for instant load speeds.'
    },
    {
      icon: <BarChart3 size={24} color="#10b981" />,
      title: 'Quantitative Stat Extraction',
      desc: 'Numerical metrics, fiscal charts, and growth counters are converted into dynamic animated counter widgets.'
    },
    {
      icon: <Shield size={24} color="#f43f5e" />,
      title: 'Enterprise VPC Deployment',
      desc: 'Deploy converted web applications directly to AWS S3, Cloudflare Pages, or private Kubernetes clusters.'
    },
    {
      icon: <Globe size={24} color="#f59e0b" />,
      title: 'Multi-Language Internationalization',
      desc: 'Supports UTF-8 global document character sets across English, Spanish, German, Japanese, and Chinese.'
    }
  ];

  return (
    <section id="showcase" style={{ padding: '4rem 0', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <Globe size={14} />
            <span>ENTERPRISE CAPABILITIES</span>
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
            Why Leading Brands Choose <span className="gradient-text">Danvera</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
            Bridge the gap between static PDF files and interactive web platforms with enterprise security and speed.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {capabilities.map((cap, idx) => (
            <div key={idx} className="glass-panel-interactive" style={{ padding: '2rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {cap.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.6rem' }}>{cap.title}</h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Enterprise Stats Counter Banner */}
        <div className="glass-panel" style={{
          padding: '3rem 2rem',
          background: 'var(--gradient-card)',
          borderRadius: '24px',
          border: '1px solid var(--border-highlight)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '3rem', fontWeight: 900, fontFamily: 'var(--font-heading)' }} className="gradient-text">
              10x
            </div>
            <div style={{ fontWeight: 600, marginTop: '0.35rem' }}>Publishing Speed</div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>From raw PDF draft to live URL</div>
          </div>

          <div>
            <div style={{ fontSize: '3rem', fontWeight: 900, fontFamily: 'var(--font-heading)' }} className="gradient-text">
              99.8%
            </div>
            <div style={{ fontWeight: 600, marginTop: '0.35rem' }}>Layout Accuracy</div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Deep neural OCR & font parsing</div>
          </div>

          <div>
            <div style={{ fontSize: '3rem', fontWeight: 900, fontFamily: 'var(--font-heading)' }} className="gradient-text">
              4.2M+
            </div>
            <div style={{ fontWeight: 600, marginTop: '0.35rem' }}>Pages Processed</div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Monthly in enterprise cloud</div>
          </div>

          <div>
            <div style={{ fontSize: '3rem', fontWeight: 900, fontFamily: 'var(--font-heading)' }} className="gradient-text">
              100%
            </div>
            <div style={{ fontWeight: 600, marginTop: '0.35rem' }}>Privacy Guarantee</div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>Zero server-side data retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};
