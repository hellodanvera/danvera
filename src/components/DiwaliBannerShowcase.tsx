import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  MessageCircle, 
  ArrowRight, 
  Truck, 
  Gift, 
  Percent, 
  Calendar
} from 'lucide-react';
import { DANVERA_INFO } from '../data/danveraCatalogue';

export interface BannerItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  alt: string;
  whatsappMsg: string;
}

export const DIWALI_BANNERS: BannerItem[] = [
  {
    id: 'diwali-specials',
    badge: 'FESTIVE OFFER • 25% OFF',
    title: 'Diwali Specials — Homemade Goodness',
    subtitle: 'Flat 25% OFF on all products, Free Delivery above ₹599 & Free Rosemilk Essence on ₹1,999+',
    imageSrc: '/banners/diwali-specials-poster.webp',
    alt: 'Danvera Diwali Specials Poster - 25% Off on All Products',
    whatsappMsg: 'Hello Danvera! I would like to order with the Diwali Special 25% OFF and Free Delivery.'
  },
  {
    id: 'diwali-product-showcase',
    badge: 'COMPLETE FESTIVE RANGE',
    title: 'Diwali Special 25% OFF Showcase',
    subtitle: 'Small-batch Spices, Podis, Jaggery, Country Eggs, Herbal Teas & Handcrafted Diwali Sweets',
    imageSrc: '/banners/diwali-product-showcase.webp',
    alt: 'Danvera Diwali Special Product Showcase - 25% Off All Products',
    whatsappMsg: 'Hello Danvera! I saw your Diwali Product Showcase and would like to order with the 25% discount.'
  },
  {
    id: 'diwali-sweets-snacks',
    badge: 'PRE-ORDER TILL OCT 30TH',
    title: 'Diwali Pre-Order — Sweets & Karam',
    subtitle: 'Boondi Laddu, Kambu Laddu, Ellu Laddu, Mysore Pak, Chiroti, Mixture & Ribbon Pakoda. Get ₹500 E-Voucher above ₹3,000!',
    imageSrc: '/banners/diwali-sweets-snacks-poster.webp',
    alt: 'Danvera Diwali Sweets and Karam Pre-Order Banner',
    whatsappMsg: 'Hello Danvera! I want to pre-order Diwali Sweets & Karam (Laddus, Mysore Pak, Mixture) before Oct 30th.'
  }
];

export const DiwaliBannerShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const activeBanner = DIWALI_BANNERS[currentIndex];

  // Auto-cycle through the posters every 5 seconds (5000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % DIWALI_BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + DIWALI_BANNERS.length) % DIWALI_BANNERS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % DIWALI_BANNERS.length);
  };

  // Touch swipe support for mobile
  const minSwipeDistance = 50;
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  return (
    <section 
      id="diwali-specials"
      style={{
        padding: 'clamp(2.5rem, 5vw, 4.5rem) 0',
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(245, 158, 11, 0.04) 0%, rgba(239, 68, 68, 0.02) 50%, rgba(7, 9, 19, 0) 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Subtle festive warm ambient glow */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(800px, 95vw)',
        height: '450px',
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(220, 38, 38, 0.08) 45%, rgba(0, 0, 0, 0) 75%)',
        filter: 'blur(70px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1.1rem',
            borderRadius: '9999px',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(239, 68, 68, 0.15) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.4)',
            color: '#f59e0b',
            fontSize: '0.825rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            boxShadow: '0 0 25px rgba(245, 158, 11, 0.25)',
            marginBottom: '1rem'
          }}>
            <Sparkles size={16} />
            <span>Diwali Festive Spotlight &bull; 25% OFF</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            fontWeight: 900,
            margin: '0.4rem 0 1rem',
            lineHeight: 1.15
          }}>
            Celebrate Diwali with <br className="hide-desktop" />
            <span style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 40%, #ef4444 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Homemade Goodness
            </span>
          </h2>

          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            color: 'var(--text-secondary)',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Bring home grandmother’s authentic recipes with a flat 25% festival discount applied to all products!
          </p>
        </div>

        {/* Featured Banner Showcase Card */}
        <div 
          className="glass-panel"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            borderRadius: '24px',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 35px rgba(245, 158, 11, 0.15)',
            background: 'var(--bg-secondary)',
            position: 'relative'
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Card Top Title Bar */}
          <div style={{
            padding: '0.9rem 1.4rem',
            borderBottom: '1px solid var(--border-color)',
            background: 'rgba(0, 0, 0, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 900,
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                {activeBanner.badge}
              </span>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                {activeBanner.title}
              </h3>
            </div>

            {/* Slide Indicator Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.25rem 0.65rem',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-color)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              fontWeight: 700
            }}>
              <span>{currentIndex + 1} of {DIWALI_BANNERS.length}</span>
            </div>
          </div>

          {/* Banner Image Center Stage with Left/Right Nav Buttons */}
          <div style={{
            position: 'relative',
            background: '#040711',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            minHeight: '360px'
          }}>
            {/* Left arrow */}
            <button
              onClick={handlePrev}
              style={{
                position: 'absolute',
                left: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(10, 15, 29, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
              }}
              aria-label="Previous Banner"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Banner Image Container */}
            <div 
              style={{
                position: 'relative',
                maxWidth: '680px',
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(245, 158, 11, 0.2)'
              }}
            >
              <img
                key={activeBanner.id}
                src={activeBanner.imageSrc}
                alt={activeBanner.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '16px',
                  transition: 'opacity 0.4s ease'
                }}
              />
            </div>

            {/* Right arrow */}
            <button
              onClick={handleNext}
              style={{
                position: 'absolute',
                right: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(10, 15, 29, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)'
              }}
              aria-label="Next Banner"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* 3 Circular Navigation Dots for 5s cycle */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.65rem',
            padding: '0.85rem 0',
            background: 'rgba(0, 0, 0, 0.3)',
            borderTop: '1px solid var(--border-color)'
          }}>
            {DIWALI_BANNERS.map((banner, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={banner.id}
                  onClick={() => setCurrentIndex(idx)}
                  style={{
                    width: isActive ? '32px' : '10px',
                    height: '10px',
                    borderRadius: '9999px',
                    background: isActive 
                      ? 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' 
                      : 'rgba(255, 255, 255, 0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 0 10px rgba(245, 158, 11, 0.6)' : 'none'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>

          {/* Action Row & Subtitle */}
          <div style={{
            padding: '1.25rem 1.5rem',
            borderTop: '1px solid var(--border-color)',
            background: 'rgba(0, 0, 0, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}>
            <div style={{ flex: '1 1 320px' }}>
              <p style={{
                fontSize: '0.925rem',
                color: 'var(--text-secondary)',
                margin: 0,
                lineHeight: 1.5
              }}>
                {activeBanner.subtitle}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', flex: '1 1 auto', justifyContent: 'flex-end' }}>
              <a
                href={`https://wa.me/${DANVERA_INFO.whatsappClean}?text=${encodeURIComponent(activeBanner.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.9rem',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.35)'
                }}
              >
                <MessageCircle size={18} fill="#ffffff" />
                <span>WhatsApp Order (25% OFF)</span>
              </a>

              <a
                href="#catalogue"
                className="btn-secondary"
                style={{
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.9rem',
                  justifyContent: 'center'
                }}
              >
                <span>Explore Catalogue</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Core Diwali Perk Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
          gap: '1.25rem',
          maxWidth: '920px',
          margin: '2rem auto 0'
        }}>
          <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              color: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Percent size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: '0 0 0.15rem' }}>25% OFF Everything</h4>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>Diwali festive discount</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Truck size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: '0 0 0.15rem' }}>Free Delivery ₹599+</h4>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>Delivered to your doorstep</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(236, 72, 153, 0.15)',
              border: '1px solid rgba(236, 72, 153, 0.3)',
              color: '#ec4899',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Gift size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: '0 0 0.15rem' }}>FREE Rosemilk Essence</h4>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>On orders above ₹1,999</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              color: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Calendar size={22} />
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 800, margin: '0 0 0.15rem' }}>Pre-Order Till Oct 30</h4>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-secondary)' }}>₹500 voucher on ₹3,000+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
