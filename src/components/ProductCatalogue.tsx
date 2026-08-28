import React, { useState } from 'react';
import { Search, Plus, Check, Sparkles, ShoppingBag, Info, Tag } from 'lucide-react';
import { PRODUCTS, CHAPTERS, ProductItem, PriceOption } from '../data/danveraCatalogue';
import { CartItem } from './OrderCartDrawer';

interface ProductCatalogueProps {
  onAddToCart: (product: ProductItem, option: PriceOption) => void;
  cartItems: CartItem[];
}

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({ onAddToCart, cartItems }) => {
  const [selectedChapter, setSelectedChapter] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for user-selected weight option per product ID
  const [selectedWeights, setSelectedWeights] = useState<Record<string, PriceOption>>({});

  const handleSelectWeight = (productId: string, option: PriceOption) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [productId]: option
    }));
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesChapter = selectedChapter === 'all' || product.chapter === selectedChapter;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.tag && product.tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesChapter && matchesSearch;
  });

  return (
    <section id="catalogue" style={{ padding: 'clamp(2.5rem, 5vw, 4.5rem) 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem', color: '#10b981', borderColor: 'rgba(16,185,129,0.3)' }}>
            <Sparkles size={14} />
            <span>AUTHENTIC PRODUCT CATALOGUE WITH PRICING</span>
          </span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, margin: '0.5rem 0 1rem' }}>
            Handcrafted <span className="gradient-text">Small-Batch Catalogue</span>
          </h2>
          <p style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto' }}>
            Explore Danvera's authentic product range with clear weights and transparent pricing. Select your weight option and click "Add to Order" to build a pre-formatted WhatsApp order inquiry!
          </p>
        </div>

        {/* Search & Category Bar */}
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
              placeholder="Search podis, sambar powder, thokkus, soup mix, karupatti..."
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

          {/* Category Filter Tabs - Horizontally Scrollable Bar on Mobile */}
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
                {ch.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Intro Banner */}
        {typeof selectedChapter === 'number' && (
          <div className="glass-panel" style={{ padding: '1.25rem 1.5rem', marginBottom: '2rem', borderLeft: '4px solid #10b981' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              CATEGORY OVERVIEW
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
          gap: '1.5rem'
        }}>
          {filteredProducts.map((product) => {
            const currentOption = selectedWeights[product.id] || product.priceOptions[0];
            const matchingCartItem = cartItems.find(
              (item) => item.product.id === product.id && item.selectedOption.weight === currentOption.weight
            );
            const inCart = Boolean(matchingCartItem);

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
                        objectFit: 'cover'
                      }}
                    />
                    
                    {/* Badges overlay on image */}
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      right: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '6px',
                      pointerEvents: 'none',
                      zIndex: 2
                    }}>
                      <div style={{
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        background: 'rgba(10, 15, 29, 0.88)',
                        backdropFilter: 'blur(8px)',
                        color: '#10b981',
                        fontSize: '0.675rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        border: '1px solid rgba(16, 185, 129, 0.35)',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: product.tag ? 'calc(100% - 85px)' : '100%'
                      }} title={product.category}>
                        {product.category}
                      </div>

                      {product.tag && (
                        <div style={{
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px',
                          background: 'rgba(245, 158, 11, 0.95)',
                          color: '#ffffff',
                          fontSize: '0.675rem',
                          fontWeight: 800,
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                          boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                        }}>
                          {product.tag}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.4rem', lineHeight: 1.25 }}>
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.45,
                    marginBottom: '0.85rem'
                  }}>
                    {product.description}
                  </p>

                  {/* Weight Variant Selector */}
                  <div style={{ marginBottom: '0.85rem' }}>
                    <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.35rem', textTransform: 'uppercase' }}>
                      Select Quantity / Weight:
                    </div>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {product.priceOptions.map((opt) => {
                        const isSelected = opt.weight === currentOption.weight;
                        return (
                          <button
                            key={opt.weight}
                            onClick={() => handleSelectWeight(product.id, opt)}
                            style={{
                              padding: '0.25rem 0.6rem',
                              borderRadius: '6px',
                              border: isSelected ? '1.5px solid #10b981' : '1px solid var(--border-color)',
                              background: isSelected ? 'rgba(16, 185, 129, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                              color: isSelected ? '#10b981' : 'var(--text-secondary)',
                              fontWeight: 700,
                              fontSize: '0.75rem',
                              cursor: 'pointer',
                              transition: 'all 0.15s'
                            }}
                          >
                            {opt.weight}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Usage Tip */}
                  {product.usageTip && (
                    <div style={{
                      padding: '0.55rem 0.7rem',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-color)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      marginBottom: '1rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.4rem'
                    }}>
                      <Info size={13} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span><strong>How to enjoy:</strong> {product.usageTip}</span>
                    </div>
                  )}
                </div>

                {/* Card Action Row with Price & Add Button */}
                <div style={{
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.5rem'
                }}>
                  <div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#10b981', lineHeight: 1 }}>
                      ₹{currentOption.price}
                    </div>
                    <div style={{ fontSize: '0.675rem', color: 'var(--text-muted)' }}>
                      per {currentOption.weight}
                    </div>
                  </div>

                  <button
                    onClick={() => onAddToCart(product, currentOption)}
                    style={{
                      padding: '0.5rem 0.9rem',
                      borderRadius: '9999px',
                      border: 'none',
                      background: inCart ? 'rgba(16, 185, 129, 0.18)' : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: inCart ? '#10b981' : '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.8rem',
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
                        <span>In Order ({matchingCartItem?.quantity})</span>
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
