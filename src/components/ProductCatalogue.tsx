import React, { useState } from 'react';
import { Search, Plus, Check, Sparkles, ShoppingBag, MessageCircle, Info } from 'lucide-react';
import { PRODUCTS, CHAPTERS, ProductItem } from '../data/danveraCatalogue';

interface ProductCatalogueProps {
  onAddToCart: (product: ProductItem) => void;
  cartItemIds: string[];
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({ onAddToCart, cartItemIds }) => {
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesChapter = selectedChapter === 'all' || product.chapter === selectedChapter;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesChapter && matchesSearch;
  });

  return (
    <section id="catalogue" style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem', color: '#10b981', borderColor: 'rgba(16,185,129,0.3)' }}>
            <Sparkles size={14} />
            <span>AUTHENTIC PRODUCT CATALOGUE</span>
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, margin: '0.5rem 0 1rem' }}>
            Handcrafted <span className="gradient-text">Small-Batch Catalogue</span>
          </h2>
          <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto' }}>
            Explore Danvera's 5 authentic product chapters with product photos extracted directly from our catalogue. Click "Add to Order" on any items to compile a pre-formatted WhatsApp order inquiry!
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div style={{
          marginBottom: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          alignItems: 'center'
        }}>
          {/* Search Box */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '550px'
          }}>
            <Search size={18} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search podis, sambar powder, karupatti, rose milk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1rem 0.85rem 3rem',
                borderRadius: '9999px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: 'var(--shadow-card)'
              }}
            />
          </div>

          {/* Chapter Filter Tabs - Horizontally Scrollable Bar on Mobile */}
          <div
            className="no-scrollbar"
            style={{
              display: 'flex',
              overflowX: 'auto',
              width: '100%',
              maxWidth: '100%',
              paddingBottom: '0.4rem',
              gap: '0.5rem',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <button
              onClick={() => setSelectedChapter('all')}
              style={{
                padding: '0.5rem 1.1rem',
                borderRadius: '9999px',
                border: 'none',
                background: selectedChapter === 'all' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'rgba(255,255,255,0.05)',
                color: selectedChapter === 'all' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              All Products ({PRODUCTS.length})
            </button>

            {CHAPTERS.map((ch) => (
              <button
                key={ch.number}
                onClick={() => setSelectedChapter(ch.number)}
                style={{
                  padding: '0.5rem 1.1rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: selectedChapter === ch.number ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'rgba(255,255,255,0.05)',
                  color: selectedChapter === ch.number ? '#ffffff' : 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                Ch {ch.number}: {ch.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Chapter Intro Banner */}
        {typeof selectedChapter === 'number' && (
          <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', marginBottom: '2rem', borderLeft: '4px solid #10b981' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              CHAPTER {selectedChapter} OVERVIEW
            </span>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0.25rem 0 0.5rem' }}>
              {CHAPTERS[selectedChapter - 1].title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              {CHAPTERS[selectedChapter - 1].description}
            </p>
          </div>
        )}

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))',
          gap: '1.5rem'
        }}>
          {filteredProducts.map((product) => {
            const inCart = cartItemIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="glass-panel-interactive"
                style={{
                  padding: '1.1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  overflow: 'hidden'
                }}
              >
                <div>
                  {/* Product Image Container */}
                  <div style={{
                    width: '100%',
                    height: 'clamp(170px, 25vw, 210px)',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    marginBottom: '1.1rem',
                    background: '#0a0f1d',
                    position: 'relative',
                    border: '1px solid var(--border-color)'
                  }}>
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease'
                      }}
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    
                    {/* Category Badge overlay on image */}
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px',
                      background: 'rgba(10, 15, 29, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#10b981',
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      border: '1px solid rgba(16, 185, 129, 0.3)'
                    }}>
                      CH {product.chapter} &bull; {product.category}
                    </div>

                    {product.tag && (
                      <div style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        background: 'rgba(245, 158, 11, 0.9)',
                        color: '#ffffff',
                        fontSize: '0.675rem',
                        fontWeight: 800
                      }}>
                        {product.tag}
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.4rem', lineHeight: 1.25 }}>
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    marginBottom: '0.85rem'
                  }}>
                    {product.description}
                  </p>

                  {/* Usage Tip */}
                  {product.usageTip && (
                    <div style={{
                      padding: '0.6rem 0.75rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.775rem',
                      color: 'var(--text-muted)',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.4rem'
                    }}>
                      <Info size={14} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span><strong>How to enjoy:</strong> {product.usageTip}</span>
                    </div>
                  )}
                </div>

                {/* Card Action Row */}
                <div style={{
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    DM for Pricing
                  </span>

                  <button
                    onClick={() => onAddToCart(product)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '9999px',
                      border: 'none',
                      background: inCart ? 'rgba(16, 185, 129, 0.18)' : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: inCart ? '#10b981' : '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.825rem',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      transition: 'all 0.2s',
                      boxShadow: inCart ? 'none' : '0 4px 15px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    {inCart ? (
                      <>
                        <Check size={14} color="#10b981" />
                        <span>In Order Bag</span>
                      </>
                    ) : (
                      <>
                        <Plus size={14} />
                        <span>Add to Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

