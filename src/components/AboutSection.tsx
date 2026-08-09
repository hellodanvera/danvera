import React from 'react';
import { Heart, Sparkles, Shield, Leaf, Sun, Coffee } from 'lucide-react';
import { DANVERA_INFO } from '../data/danveraCatalogue';

export const AboutSection: React.FC = () => {
  return (
    <section id="ethos" style={{ padding: '4rem 0', background: 'rgba(255, 255, 255, 0.01)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left Visual Box */}
          <div className="glass-panel" style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute',
              top: '-20%',
              right: '-20%',
              width: '250px',
              height: '250px',
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)',
              pointerEvents: 'none'
            }} />

            <span className="badge-glow" style={{ marginBottom: '1.25rem', color: '#10b981', borderColor: 'rgba(16,185,129,0.3)' }}>
              <Leaf size={14} />
              <span>THE DANVERA WAY</span>
            </span>

            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
              Reclaiming the Soul of <span className="gradient-text">Traditional South Indian Cooking</span>
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '1.025rem' }}>
              At Danvera, we believe food should feel like a warm hug from grandmother's kitchen. We source unrefined ingredients directly from local Karur farms, sun-dry them under natural sunlight, and stone-grind them in small batches to preserve every drop of natural essential oils.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                <h4 style={{ color: '#10b981', fontSize: '1.5rem', fontWeight: 800 }}>100%</h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Pure & Unadulterated</span>
              </div>
              <div style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)' }}>
                <h4 style={{ color: '#f59e0b', fontSize: '1.5rem', fontWeight: 800 }}>Small Batch</h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Milled Fresh on Demand</span>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div>
            <span style={{
              fontSize: '0.85rem',
              color: '#10b981',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              HERITAGE & CRAFT
            </span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, margin: '0.5rem 0 1.25rem' }}>
              Made the Way <br />
              Grandmothers Intended
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(16,185,129,0.1)', color: '#10b981' }}>
                  <Sun size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Sun-Dried Botanicals & Spices</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Our moringa, hibiscus, butterfly pea flowers, and curry leaves are sun-dried slowly without artificial heat treatment.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(245,158,11,0.1)', color: '#f59e0b' }}>
                  <Coffee size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Unrefined Palm Jaggery (Karupatti)</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Traditional Karupatti and Urundai Vellam set in traditional blocks — packed with natural minerals and iron.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(236,72,153,0.1)', color: '#ec4899' }}>
                  <Heart size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Farm-Direct Free Range Eggs & Laddus</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Hand-rolled millet laddus and country eggs from birds raised on natural open feeds in Karur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
