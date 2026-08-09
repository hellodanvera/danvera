export type ThemePreset = 'dark-cyan' | 'executive-light' | 'creative-violet' | 'tech-docs';

export type ViewportMode = 'desktop' | 'laptop' | 'tablet' | 'mobile';

export interface PdfSection {
  id: string;
  type: 'hero' | 'heading' | 'paragraph' | 'features' | 'stats' | 'callout' | 'quote' | 'image';
  title?: string;
  content: string;
  subContent?: string[];
  stats?: { label: string; value: string; detail?: string }[];
  features?: { title: string; desc: string; iconName?: string }[];
  pageNumber?: number;
}

export interface ConvertedDocument {
  id: string;
  title: string;
  subtitle: string;
  author?: string;
  date?: string;
  totalPages: number;
  sections: PdfSection[];
  rawText: string;
  theme: ThemePreset;
}

export interface SampleDoc {
  id: string;
  name: string;
  category: string;
  pages: number;
  description: string;
  badge: string;
  doc: ConvertedDocument;
}
