import React, { useState } from 'react';
import { X, Trash2, MessageCircle, Copy, Check, ShoppingBag, Plus, Minus, ArrowRight, Instagram } from 'lucide-react';
import { ProductItem, DANVERA_INFO } from '../data/danveraCatalogue';

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

interface OrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, qty: number) => void;
  onClearCart: () => void;
}

export const OrderCartDrawer: React.FC<OrderCartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generateWhatsAppMessage = () => {
    if (cartItems.length === 0) return 'Hello Danvera! I would like to inquire about your product pricing and catalogue.';
    
    let text = `Hello Danvera! I would like to order the following small-batch products:\n\n`;
    cartItems.forEach((item, index) => {
      text += `${index + 1}. ${item.product.name} (Qty: ${item.quantity})\n`;
    });
    text += `\nPlease share pricing, availability, and delivery details for Karur / shipping. Thank you!`;
    return text;
  };

  const messageText = generateWhatsAppMessage();
  const whatsappUrl = `https://wa.me/${DANVERA_INFO.whatsappClean}?text=${encodeURIComponent(messageText)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(5, 7, 15, 0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '440px',
        height: '100dvh',
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid var(--border-highlight)'
      }}>
        {/* Drawer Header */}
        <div style={{
          padding: '1rem 1.25rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0, 0, 0, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <ShoppingBag size={18} color="#10b981" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, lineHeight: 1.2 }}>Your Order Inquiry Bag</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {cartItems.reduce((acc, it) => acc + it.quantity, 0)} total items selected
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '0.4rem',
              borderRadius: '50%'
            }}
            aria-label="Close Order Bag Drawer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1rem' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3.5rem 1rem', color: 'var(--text-secondary)' }}>
              <ShoppingBag size={44} color="var(--text-muted)" style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>Your Bag is Empty</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '280px', margin: '0 auto 1.5rem' }}>
                Explore the product catalogue and click "Add to Order" to build your custom WhatsApp inquiry!
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  style={{
                    padding: '0.85rem',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: '0.675rem', color: '#10b981', fontWeight: 800, textTransform: 'uppercase' }}>
                      CH {item.product.chapter}
                    </span>
                    <h5 style={{ fontSize: '0.95rem', fontWeight: 700, margin: '0.1rem 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.product.name}
                    </h5>
                    <span style={{ fontSize: '0.725rem', color: 'var(--text-muted)' }}>{item.product.category}</span>
                  </div>

                  {/* Quantity controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(0,0,0,0.2)', padding: '0.2rem 0.4rem', borderRadius: '8px', flexShrink: 0 }}>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '0.2rem' }}
                    >
                      <Minus size={14} />
                    </button>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, minWidth: '18px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '0.2rem' }}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={onClearCart}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#f43f5e',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  alignSelf: 'center',
                  marginTop: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem'
                }}
              >
                <Trash2 size={14} />
                <span>Clear Order Bag</span>
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '1rem 1.25rem',
            borderTop: '1px solid var(--border-color)',
            background: 'rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          }}>
            <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
              Order direct via WhatsApp or Instagram DM for fast delivery:
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                background: '#25D366',
                color: '#ffffff',
                padding: '0.75rem 1.25rem',
                fontSize: '0.9rem',
                justifyContent: 'center'
              }}
            >
              <MessageCircle size={18} fill="#ffffff" />
              <span>Send Order via WhatsApp ({DANVERA_INFO.whatsapp})</span>
            </a>

            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={handleCopy}
                className="btn-secondary"
                style={{ flex: '1 1 140px', padding: '0.5rem 0.75rem', fontSize: '0.8rem', justifyContent: 'center' }}
              >
                {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                <span>{copied ? 'Copied Message' : 'Copy Message'}</span>
              </button>

              <a
                href={DANVERA_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ flex: '1 1 120px', padding: '0.5rem 0.75rem', fontSize: '0.8rem', justifyContent: 'center' }}
              >
                <Instagram size={14} color="#e1306c" />
                <span>DM Instagram</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

