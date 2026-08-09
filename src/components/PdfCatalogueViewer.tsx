import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, BookOpen, Layers, Maximize2 } from 'lucide-react';
import { DANVERA_INFO } from '../data/danveraCatalogue';

interface PdfCatalogueViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PdfCatalogueViewer: React.FC<PdfCatalogueViewerProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7;

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 110,
      background: 'rgba(5, 7, 15, 0.92)',
      backdropFilter: 'blur(16px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '900px',
        maxHeight: '94vh',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        overflow: 'hidden',
        border: '1px solid var(--border-highlight)'
      }}>
        {/* Header Bar */}
        <div style={{
          padding: '1rem 1.5rem',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(0, 0, 0, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <BookOpen size={20} color="#10b981" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Danvera Print Catalogue</h3>
              <span style={{ fontSize: '0.775rem', color: 'var(--text-muted)' }}>
                Original Product Catalogue &bull; Page {currentPage} of {totalPages}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="/Danvera_Catalogue.pdf"
              download="Danvera_Catalogue.pdf"
              className="btn-secondary"
              style={{ padding: '0.4rem 0.9rem', fontSize: '0.825rem' }}
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '50%'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* PDF Page Viewer Area */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#090d16',
          position: 'relative'
        }}>
          {/* Page Image */}
          <div style={{
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            maxWidth: '100%',
            transition: 'all 0.3s ease-in-out'
          }}>
            <img
              src={`/catalogue/page-${currentPage}.png`}
              alt={`Danvera Catalogue Page ${currentPage}`}
              style={{
                display: 'block',
                maxHeight: '68vh',
                width: 'auto',
                maxWidth: '100%',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid var(--border-color)',
          background: 'rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="btn-secondary"
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.85rem',
              opacity: currentPage === 1 ? 0.4 : 1,
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
            }}
          >
            <ChevronLeft size={16} />
            <span>Previous Page</span>
          </button>

          {/* Page indicator pills */}
          <div style={{ display: 'flex', gap: '0.35rem' }}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
              <button
                key={pg}
                onClick={() => setCurrentPage(pg)}
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  border: 'none',
                  background: currentPage === pg ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'rgba(255,255,255,0.06)',
                  color: currentPage === pg ? '#ffffff' : 'var(--text-secondary)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {pg}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="btn-secondary"
            style={{
              padding: '0.45rem 1rem',
              fontSize: '0.85rem',
              opacity: currentPage === totalPages ? 0.4 : 1,
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
            }}
          >
            <span>Next Page</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
