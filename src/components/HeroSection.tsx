import React from 'react';
import { ArrowRight, MessageCircle, Instagram, BookOpen, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { DANVERA_INFO } from '../data/danveraCatalogue';

interface HeroSectionProps {
  onOpenPdfViewer: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPdfViewer }) => {
  return (
    <section style={{
      padding: 'clamp(2.5rem, 6vw, 5rem) 0 3.5rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle Farm Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '650px',
        maxWidth: '100%',
        height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.12) 0%, rgba(245, 158, 11, 0.08) 40%, rgba(0, 0, 0, 0) 80%)',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Top Badges */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.65rem',
          flexWrap: 'wrap',
          marginBottom: '1.25rem'
        }}>
          <span className="badge-glow" style={{ background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.3)', color: '#10b981' }}>
            <Sparkles size={14} />
            <span>{DANVERA_INFO.subTagline}</span>
          </span>
          <span className="badge-glow" style={{ background: 'rgba(245, 158, 11, 0.1)', borderColor: 'rgba(245, 158, 11, 0.3)', color: '#f59e0b' }}>
            <span>KARUR SUVAI &bull; TAMIL NADU</span>
          </span>
        </div>

        {/* Main Headline */}
        <h1 style={{
          fontSize: 'clamp(2rem, 5.5vw, 4.75rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          maxWidth: '920px',
          margin: '0 auto 1.25rem',
          letterSpacing: '-0.03em'
        }}>
          A Serendipity of <span style={{
            background: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #f59e0b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Pure Flavours</span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)',
          color: 'var(--text-secondary)',
          maxWidth: '750px',
          margin: '0 auto 2.25rem',
          lineHeight: 1.6
        }}>
          Stone-ground, small-batch spice blends, authentic podis, unrefined palm jaggery, and farm-direct country eggs — crafted the way grandmothers intended in Karur.
        </p>

        {/* Action Button Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.85rem',
          flexWrap: 'wrap',
          marginBottom: '3.5rem'
        }}>
          <a
            href="#catalogue"
            className="btn-primary"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              padding: '0.85rem 1.8rem',
              fontSize: '1rem',
              boxShadow: '0 4px 20px rgba(16, 185, 129, 0.35)',
              justifyContent: 'center'
            }}
          >
            <span>Explore Product Catalogue</span>
            <ArrowRight size={18} />
          </a>

          <a
            href={`https://wa.me/${DANVERA_INFO.whatsappClean}?text=Hello%20Danvera!%20I%20would%20like%20to%20inquire%20about%20product%20pricing%20and%20orders.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '0.85rem 1.6rem', fontSize: '1rem', justifyContent: 'center' }}
          >
            <MessageCircle size={20} color="#25D366" />
            <span>Order via WhatsApp ({DANVERA_INFO.whatsapp})</span>
          </a>
        </div>

        {/* 4 Core Pillars Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))',
          gap: '1rem',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', flexShrink: 0 }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.975rem', fontWeight: 700 }}>Stone-Ground</h4>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Traditional slow friction</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', flexShrink: 0 }}>
              <CheckCircle2 size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.975rem', fontWeight: 700 }}>Small-Batch</h4>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Milled fresh for every batch</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', flexShrink: 0 }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.975rem', fontWeight: 700 }}>Farm Direct</h4>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>Direct from Karur farms</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{ padding: '0.65rem', borderRadius: '12px', background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899', flexShrink: 0 }}>
              <Sparkles size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.975rem', fontWeight: 700 }}>No Additives</h4>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>100% Pure & Natural</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

