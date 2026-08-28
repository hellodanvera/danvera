import React from 'react';
import { MessageCircle, Instagram, Mail, Truck, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';
import { DANVERA_INFO } from '../data/danveraCatalogue';

export const OrderInfoSection: React.FC = () => {
  return (
    <section id="order-info" style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem', color: '#10b981', borderColor: 'rgba(16,185,129,0.3)' }}>
            <Truck size={14} />
            <span>DIRECT FARM & KITCHEN ORDERS</span>
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, margin: '0.5rem 0 1rem' }}>
            How to Order <span className="gradient-text">Danvera Products</span>
          </h2>
          <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>
            Because our foods are crafted in small batches, we handle all pricing and availability directly via WhatsApp, Email, and Instagram.
          </p>
        </div>

        {/* 3 Step Order Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <div className="glass-panel" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontWeight: 900,
              fontSize: '1.2rem'
            }}>
              1
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Select Products</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Browse our 6 product categories and click "Add to Order" to build your custom WhatsApp inquiry bag.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(245, 158, 11, 0.12)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontWeight: 900,
              fontSize: '1.2rem'
            }}>
              2
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Connect via WhatsApp, Email or DM</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Send your order inquiry directly to WhatsApp <strong>{DANVERA_INFO.whatsapp}</strong>, Email <strong>{DANVERA_INFO.email}</strong>, or DM <strong>{DANVERA_INFO.instagram}</strong>.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', textAlign: 'center' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(59, 130, 246, 0.12)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontWeight: 900,
              fontSize: '1.2rem'
            }}>
              3
            </div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Fresh Batch Delivery</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Receive instant pricing, small-batch milling date, and nationwide doorstep delivery details!
            </p>
          </div>
        </div>

        {/* Direct Channel Banner */}
        <div className="glass-panel" style={{
          padding: 'clamp(1.5rem, 4vw, 3rem) clamp(1.25rem, 3vw, 2rem)',
          background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(245,158,11,0.08) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(16,185,129,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ flex: '1 1 300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontWeight: 800, fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              <MapPin size={16} />
              <span>KARUR SUVAI &bull; TAMIL NADU, INDIA</span>
            </div>
            <h3 style={{ fontSize: 'clamp(1.35rem, 3vw, 1.85rem)', fontWeight: 900, marginBottom: '0.5rem', lineHeight: 1.2 }}>
              Ready for Pure, Small-Batch Flavours?
            </h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', fontSize: '0.95rem' }}>
              Contact our team directly on WhatsApp, Email, or Instagram DM for pricing, volume orders, or custom festival gifting laddus.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', flex: '1 1 auto' }}>
            <a
              href={`https://wa.me/${DANVERA_INFO.whatsappClean}?text=Hello%20Danvera!%20I%20would%20like%20to%20inquire%20about%20product%20pricing%20and%20orders.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                background: '#25D366',
                padding: '0.8rem 1.4rem',
                fontSize: '0.95rem',
                justifyContent: 'center',
                flex: '1 1 auto'
              }}
            >
              <MessageCircle size={18} fill="#ffffff" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`mailto:${DANVERA_INFO.email}`}
              className="btn-secondary"
              style={{
                padding: '0.8rem 1.4rem',
                fontSize: '0.95rem',
                justifyContent: 'center',
                flex: '1 1 auto'
              }}
            >
              <Mail size={18} color="#10b981" />
              <span>{DANVERA_INFO.email}</span>
            </a>

            <a
              href={DANVERA_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{
                padding: '0.8rem 1.4rem',
                fontSize: '0.95rem',
                justifyContent: 'center',
                flex: '1 1 auto'
              }}
            >
              <Instagram size={18} color="#e1306c" />
              <span>DM Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

