import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Instagram, BookOpen, Mail, Sun, Moon, Menu, X } from 'lucide-react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--bg-card)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-color)',
      padding: '0.65rem 1rem'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0
      }}>
        {/* Brand Logo with Perfect Circle Container */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            width: '42px',
            height: '42px',
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
              fontSize: '1.35rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              display: 'block',
              lineHeight: 1,
              color: 'var(--text-primary)'
            }}>
              DANVERA
            </span>
            <span style={{
              fontSize: '0.65rem',
              color: 'var(--accent-emerald)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              {DANVERA_INFO.subTagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hide-mobile" style={{ alignItems: 'center', gap: '1.75rem' }}>
          <a href="#ethos" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'color 0.2s' }}>
            Our Ethos
          </a>
          <a href="#catalogue" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'color 0.2s' }}>
            Product Catalogue
          </a>
          <a href="#order-info" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', transition: 'color 0.2s' }}>
            How to Order
          </a>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Email Quick Contact (Desktop only) */}
          <a
            href={`mailto:${DANVERA_INFO.email}`}
            className="hide-mobile"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--accent-emerald)',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}
            title={`Email: ${DANVERA_INFO.email}`}
          >
            <Mail size={18} color="#10b981" />
          </a>

          {/* Instagram Link (Desktop only) */}
          <a
            href={DANVERA_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hide-mobile"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
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
              cursor: 'pointer',
              flexShrink: 0
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
              padding: '0.5rem 0.9rem',
              fontSize: '0.85rem',
              position: 'relative',
              flexShrink: 0
            }}
          >
            <ShoppingBag size={17} />
            <span className="hide-mobile">WhatsApp Bag</span>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-6px',
                right: '-6px',
                background: '#f43f5e',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 800,
                width: '20px',
                height: '20px',
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

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="hide-desktop"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              marginLeft: '0.2rem',
              flexShrink: 0
            }}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="animate-slide-down hide-desktop"
          style={{
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.25rem 1rem 1rem',
            marginTop: '0.75rem',
            background: 'var(--bg-secondary)',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          <a
            href="#ethos"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.6rem 0.8rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.03)'
            }}
          >
            Our Ethos
          </a>
          <a
            href="#catalogue"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.6rem 0.8rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.03)'
            }}
          >
            Product Catalogue
          </a>
          <a
            href="#order-info"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              color: 'var(--text-primary)',
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.6rem 0.8rem',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.03)'
            }}
          >
            How to Order
          </a>

          {/* Quick Contact Links in Mobile Menu */}
          <div style={{ display: 'flex', gap: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-color)' }}>
            <a
              href={`mailto:${DANVERA_INFO.email}`}
              className="btn-secondary"
              style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem', justifyContent: 'center' }}
            >
              <Mail size={16} color="#10b981" />
              <span>Email Us</span>
            </a>
            <a
              href={DANVERA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem', justifyContent: 'center' }}
            >
              <Instagram size={16} color="#e1306c" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

