import React, { useState } from 'react';
import { UploadCloud, FileText, CheckCircle2, AlertCircle, Sparkles, Loader2, Play, Sliders, Layers } from 'lucide-react';
import { ConvertedDocument } from '../types';
import { parsePdfFile } from '../services/pdfParser';
import { DANVERA_SAMPLES } from '../data/danveraSamples';

interface PdfConverterStudioProps {
  onDocumentLoaded: (doc: ConvertedDocument) => void;
  activeDoc: ConvertedDocument | null;
}

export const PdfConverterStudio: React.FC<PdfConverterStudioProps> = ({
  onDocumentLoaded,
  activeDoc
}) => {
  const [isParsing, setIsParsing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    if (!file.name.toLowerCase().endsWith('.pdf')) {
      setErrorMessage('Please select a valid .pdf document file.');
      return;
    }

    setErrorMessage(null);
    setIsParsing(true);
    setProgress(10);
    setStatusText('Reading PDF file structure...');

    try {
      const parsedDoc = await parsePdfFile(file, (pg, txt) => {
        setProgress(pg);
        setStatusText(txt);
      });
      onDocumentLoaded(parsedDoc);
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to parse PDF document.');
    } finally {
      setIsParsing(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <section id="studio" style={{ padding: '3.5rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge-glow" style={{ marginBottom: '1rem' }}>
            <Layers size={14} />
            <span>STUDIO PARSING ENGINE</span>
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0 1rem' }}>
            PDF-to-Website <span className="gradient-text">Transformation Studio</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto' }}>
            Upload any corporate PDF document to extract structured sections, stats, and text, or test with preloaded Danvera company assets below.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {/* PDF Drag & Drop Upload Zone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className="glass-panel"
            style={{
              padding: '3rem 2rem',
              textAlign: 'center',
              border: dragActive ? '2px dashed var(--accent-cyan)' : '2px dashed var(--border-color)',
              background: dragActive ? 'rgba(0, 242, 254, 0.05)' : 'var(--bg-card)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0,
                cursor: 'pointer'
              }}
            />

            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '20px',
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              {isParsing ? (
                <Loader2 size={32} color="var(--accent-cyan)" className="animate-spin" />
              ) : (
                <UploadCloud size={32} color="var(--accent-cyan)" />
              )}
            </div>

            <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>
              {isParsing ? 'Converting PDF Document...' : 'Drag & Drop PDF File Here'}
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '350px' }}>
              Supports corporate decks, whitepapers, financial statements, and resumes. Maximum size: 50MB.
            </p>

            {isParsing ? (
              <div style={{ width: '100%', maxWidth: '320px' }}>
                <div style={{
                  height: '8px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  overflow: 'hidden',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${progress}%`,
                    background: 'var(--gradient-glow)',
                    transition: 'width 0.3s'
                  }} />
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  {statusText} ({progress}%)
                </span>
              </div>
            ) : (
              <button className="btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.9rem' }}>
                <FileText size={18} />
                <span>Browse Local PDF</span>
              </button>
            )}

            {errorMessage && (
              <div style={{
                marginTop: '1rem',
                padding: '0.6rem 1rem',
                borderRadius: '8px',
                background: 'rgba(244, 63, 94, 0.15)',
                border: '1px solid rgba(244, 63, 94, 0.3)',
                color: '#f43f5e',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          {/* Preloaded Danvera Sample Document Selection */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} color="var(--accent-cyan)" />
                <span>Danvera Sample Assets</span>
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>1-Click Instant Conversion</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {DANVERA_SAMPLES.map((sample) => (
                <div
                  key={sample.id}
                  onClick={() => onDocumentLoaded(sample.doc)}
                  className="glass-panel-interactive"
                  style={{
                    padding: '1.15rem',
                    border: activeDoc?.id === sample.doc.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-color)',
                    background: activeDoc?.id === sample.doc.id ? 'rgba(0, 242, 254, 0.08)' : 'rgba(255, 255, 255, 0.02)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      color: 'var(--accent-cyan)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {sample.category}
                    </span>
                    <span style={{
                      fontSize: '0.7rem',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '9999px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: 'var(--text-secondary)'
                    }}>
                      {sample.pages} Pages
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.35rem' }}>{sample.name}</h4>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {sample.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
                    <span style={{
                      fontSize: '0.8rem',
                      color: 'var(--accent-cyan)',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}>
                      <span>Load & Render</span>
                      <Play size={12} fill="var(--accent-cyan)" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
