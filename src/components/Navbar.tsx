import React from 'react';
import { ShoppingBag, MessageCircle, Instagram, BookOpen, Mail, Sun, Moon } from 'lucide-react';
import { DANVERA_INFO } from '../data/danveraCatalogue';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenPdfViewer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  cartCount,
  onOpenCart,
  onOpenPdfViewer
}) => {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--bg-card)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.75rem 1.5rem'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0
      }}>
        {/* Brand Logo with Perfect Circle Container */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            overflow: 'hidden',
            background: 'var(--bg-secondary)',
            border: '2px solid var(--border-highlight)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(16, 185, 129, 0.25)',
            flexShrink: 0
          }}>
            <img
              src={DANVERA_INFO.logoUrl}
              alt="Danvera Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '50%'
              }}
            />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-brand)',
              fontSize: '1.45rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              display: 'block',
              lineHeight: 1,
              color: 'var(--text-primary)'
            }}>
              DANVERA
            </span>
            <span style={{
              fontSize: '0.7rem',
              color: 'var(--accent-emerald)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              {DANVERA_INFO.subTagline}
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="nav-links-desktop">
          <a href="#ethos" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'color 0.2s' }}>
            Our Ethos
          </a>
          <a href="#catalogue" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'color 0.2s' }}>
            Product Catalogue
          </a>
          <a href="#order-info" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'color 0.2s' }}>
            How to Order
          </a>
          {/* <button
            onClick={onOpenPdfViewer}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <BookOpen size={16} color="var(--accent-emerald)" />
            <span>PDF Catalogue</span>
          </button> */}
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Email Quick Contact */}
          <a
            href={`mailto:${DANVERA_INFO.email}`}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--accent-emerald)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
            title={`Email: ${DANVERA_INFO.email}`}
          >
            <Mail size={18} color="#10b981" />
          </a>

          {/* Instagram Link */}
          <a
            href={DANVERA_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
            title="Follow Danvera on Instagram"
          >
            <Instagram size={18} color="#e1306c" />
          </a>

          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title="Toggle Light/Dark Theme"
          >
            {darkMode ? <Sun size={18} color="#facc15" /> : <Moon size={18} color="#6366f1" />}
          </button>

          {/* Order Bag Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="btn-primary"
            style={{
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              padding: '0.55rem 1.25rem',
              fontSize: '0.875rem',
              position: 'relative'
            }}
          >
            <ShoppingBag size={18} />
            <span>WhatsApp Bag</span>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: '#f43f5e',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 800,
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(244,63,94,0.5)'
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
