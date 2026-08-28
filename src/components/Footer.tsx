import React from 'react';
import { Instagram, MessageCircle, Mail, BookOpen, MapPin, Heart } from 'lucide-react';
import { DANVERA_INFO, CHAPTERS } from '../data/danveraCatalogue';

interface FooterProps {
  onOpenPdfViewer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPdfViewer }) => {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-color)',
      padding: 'clamp(2.5rem, 5vw, 4rem) 0 2rem',
      marginTop: '3.5rem',
      color: 'var(--text-primary)'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Brand Column with Circular Logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: 'var(--bg-card)',
                border: '2px solid var(--border-highlight)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img
                  src={DANVERA_INFO.logoUrl}
                  alt="Danvera Logo"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              </div>
              <div>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.35rem',
                  fontWeight: 900,
                  letterSpacing: '0.05em',
                  color: 'var(--text-primary)',
                  display: 'block'
                }}>
                  DANVERA
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-emerald)', display: 'block', fontWeight: 700 }}>
                  {DANVERA_INFO.subTagline}
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {DANVERA_INFO.tagline}. Stone-ground spices, authentic podis, unrefined jaggery, and farm-direct country eggs.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a
                href={`mailto:${DANVERA_INFO.email}`}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.05)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-emerald)'
                }}
                title={`Email: ${DANVERA_INFO.email}`}
              >
                <Mail size={18} />
              </a>

              <a
                href={DANVERA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.05)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#e1306c'
                }}
                title={`Instagram: ${DANVERA_INFO.instagram}`}
              >
                <Instagram size={18} />
              </a>

              <a
                href={`https://wa.me/${DANVERA_INFO.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.05)',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25D366'
                }}
                title={`WhatsApp: ${DANVERA_INFO.whatsapp}`}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>Product Categories</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              {CHAPTERS.map(ch => (
                <li key={ch.number}>
                  <a href="#catalogue" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {ch.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Orders */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>Orders & Contact</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Mail size={16} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${DANVERA_INFO.email}`} style={{ color: 'inherit', textDecoration: 'none', fontWeight: 600, wordBreak: 'break-all' }}>
                  {DANVERA_INFO.email}
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Instagram size={16} color="#e1306c" style={{ flexShrink: 0 }} />
                <span>DM {DANVERA_INFO.instagram}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MessageCircle size={16} color="#25D366" style={{ flexShrink: 0 }} />
                <span>WhatsApp {DANVERA_INFO.whatsapp}</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={16} color="var(--accent-emerald)" style={{ flexShrink: 0 }} />
                <span>Karur Suvai, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.825rem',
          color: 'var(--text-secondary)',
          flexWrap: 'wrap',
          gap: '0.85rem'
        }}>
          <span>&copy; {new Date().getFullYear()} Danvera. Small Batch | Farm Direct. All rights reserved.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            Made with <Heart size={14} color="#f43f5e" fill="#f43f5e" /> in Karur, Tamil Nadu
          </span>
        </div>
      </div>
    </footer>
  );
};

