import { SampleDoc } from '../types';

export const DANVERA_SAMPLES: SampleDoc[] = [
  {
    id: 'danvera-pitch-deck',
    name: 'Danvera Enterprise Pitch Deck 2026',
    category: 'Corporate Pitch Deck',
    pages: 12,
    badge: 'Featured Deck',
    description: 'Executive presentation covering Danvera platform architecture, AI document parsing engines, customer metrics, and growth roadmap.',
    doc: {
      id: 'danvera-pitch-deck',
      title: 'Danvera Enterprise PDF-to-Web Engine',
      subtitle: 'Transforming Legacy Corporate Documents into Interactive Cloud Applications',
      author: 'Danvera Executive Strategy Team',
      date: 'Q3 2026',
      totalPages: 12,
      theme: 'dark-cyan',
      rawText: 'Danvera enterprise PDF parsing platform delivers instant document transformation...',
      sections: [
        {
          id: 's1',
          type: 'hero',
          title: 'Danvera Next-Gen Document Platform',
          content: 'Convert unstructured corporate PDFs, whitepapers, and financial reports into responsive, high-performance web applications instantly.',
          subContent: ['Zero code deployment', 'SOC2 Compliant Architecture', 'Automated SEO & Semantic Markup']
        },
        {
          id: 's2',
          type: 'stats',
          title: 'Platform Performance Metrics',
          content: 'Benchmark performance across 500+ enterprise client deployments worldwide.',
          stats: [
            { value: '10x', label: 'Faster Publishing', detail: 'From PDF draft to live web app' },
            { value: '99.8%', label: 'Extraction Accuracy', detail: 'Deep OCR & font layout parsing' },
            { value: '4.2M+', label: 'Pages Converted', detail: 'Processed monthly in cloud' },
            { value: '100%', label: 'Mobile Responsive', detail: 'Adaptive fluid breakpoints' }
          ]
        },
        {
          id: 's3',
          type: 'features',
          title: 'Core Platform Capabilities',
          content: 'End-to-end intelligent document conversion built for high-scale enterprise operations.',
          features: [
            {
              title: 'Client-Side PDF Parsing',
              desc: 'Extract text layout, canvas graphics, fonts, line spacing, and embedded media directly in-browser using PDF.js WebGL rendering.',
              iconName: 'Cpu'
            },
            {
              title: 'Multi-Theme Web Generator',
              desc: 'Seamlessly switch converted content between Executive Dark, Modern Cyan, Clean Corporate, and Tech Documentation presets.',
              iconName: 'Palette'
            },
            {
              title: 'Interactive Preview & Device Testing',
              desc: 'Test rendered web applications across simulated Desktop, Laptop, Tablet, and Smartphone viewports with live layout tweaks.',
              iconName: 'Smartphone'
            },
            {
              title: '1-Click HTML & ZIP Export',
              desc: 'Download clean, self-contained single-file HTML or complete React / CSS project ZIP archives ready for production hosting.',
              iconName: 'Download'
            }
          ]
        },
        {
          id: 's4',
          type: 'paragraph',
          title: 'Security & Compliance Standards',
          content: 'Danvera operates with zero data retention on client-side conversions. Your sensitive financial statements, legal contracts, and internal product decks are processed strictly inside your local browser memory space or private VPC without unauthorized cloud storage.'
        },
        {
          id: 's5',
          type: 'callout',
          title: 'Ready to Modernize Your Document Workflow?',
          content: 'Join over 120+ Fortune 500 enterprises using Danvera to turn PDF static files into dynamic customer-facing websites.'
        }
      ]
    }
  },
  {
    id: 'danvera-product-whitepaper',
    name: 'Danvera Architecture & Security Whitepaper',
    category: 'Technical Whitepaper',
    pages: 18,
    badge: 'Technical Doc',
    description: 'Deep technical analysis of client-side PDF DOM conversion algorithms, WebGL text layer parsing, and semantic HTML structure synthesis.',
    doc: {
      id: 'danvera-product-whitepaper',
      title: 'Danvera Technical Architecture & DOM Synthesis Engine',
      subtitle: 'Client-Side PDF Structure Classification and Real-Time Responsive Layout Generation',
      author: 'Danvera Engineering Research Labs',
      date: 'July 2026',
      totalPages: 18,
      theme: 'tech-docs',
      rawText: 'Technical whitepaper explaining the parsing algorithms of Danvera engine...',
      sections: [
        {
          id: 'w1',
          type: 'hero',
          title: 'Danvera Engine Architecture',
          content: 'Technical overview of how Danvera parses raw PDF binary streams into structured JSON trees and synthesizes accessible HTML5 / CSS3 web layouts.',
          subContent: ['DOM Hierarchy Synthesis', 'Typography Weight Clustering', 'Dynamic CSS Variable Injection']
        },
        {
          id: 'w2',
          type: 'paragraph',
          title: '1. Text Classification & Font Heuristics',
          content: 'PDF files do not contain native semantic web tags like <h1> or <article>. Danvera analyzes glyph height matrices, baseline coordinates, and font weight vectors to mathematically classify headings, subheadings, bulleted arrays, and tabular data.'
        },
        {
          id: 'w3',
          type: 'features',
          title: 'Key Algorithmic Innovations',
          content: 'Proprietary client-side parsing pipeline components.',
          features: [
            {
              title: 'Vector Layout Clustering',
              desc: 'Groups bounding boxes by proximity and baseline alignment to recreate multi-column web grids.',
              iconName: 'Grid'
            },
            {
              title: 'Adaptive Color Tokenization',
              desc: 'Extracts dominant document color themes and maps them to cohesive HSL web palette tokens.',
              iconName: 'Zap'
            },
            {
              title: 'Accessibility ARIA Injection',
              desc: 'Automatically generates ARIA roles, alt attributes, and keyboard focus traps for converted components.',
              iconName: 'ShieldCheck'
            }
          ]
        },
        {
          id: 'w4',
          type: 'stats',
          title: 'Benchmark Speed Test Results',
          content: 'Average conversion speeds evaluated across 1,000 document benchmarks.',
          stats: [
            { value: '< 450ms', label: 'Parse Time', detail: 'Per 10-page document' },
            { value: '60 FPS', label: 'Preview Rendering', detail: 'Hardware accelerated WebGL' },
            { value: '0 KB', label: 'Server Bandwidth', detail: 'Full in-browser execution' }
          ]
        }
      ]
    }
  },
  {
    id: 'danvera-executive-report',
    name: 'Danvera Annual Corporate Overview 2026',
    category: 'Annual Report',
    pages: 24,
    badge: 'Executive Brief',
    description: 'High-level financial results, key enterprise milestones, sustainability initiatives, and strategic vision for Danvera Corporation.',
    doc: {
      id: 'danvera-executive-report',
      title: 'Danvera Corporate Report 2026',
      subtitle: 'Building the Future of Enterprise Digital Publishing',
      author: 'Danvera Board of Directors',
      date: 'Fiscal Year 2026',
      totalPages: 24,
      theme: 'executive-light',
      rawText: 'Annual overview of Danvera performance and company expansion...',
      sections: [
        {
          id: 'r1',
          type: 'hero',
          title: 'Accelerating Global Innovation',
          content: 'Danvera annual corporate update highlighting enterprise adoption, revenue milestones, and multi-cloud platform expansion.',
          subContent: ['145% YoY Enterprise Growth', 'Global Data Center Footprint', 'Carbon-Neutral Cloud Infrastructure']
        },
        {
          id: 'r2',
          type: 'stats',
          title: 'Financial & Growth Summary',
          content: 'Key fiscal performance metrics for the year ending June 2026.',
          stats: [
            { value: '$48M', label: 'Annual Recurring Rev.', detail: '145% year-over-year increase' },
            { value: '120+', label: 'Enterprise Clients', detail: 'Fortune 500 & Tech leaders' },
            { value: '99.99%', label: 'Platform Uptime', detail: 'Global SLA guarantees' }
          ]
        },
        {
          id: 'r3',
          type: 'paragraph',
          title: 'Executive Strategic Letter',
          content: 'As organizations transition from static legacy PDFs to interactive web experiences, Danvera remains at the forefront of digital document transformation. Our platform provides the bridge between traditional publication formats and modern web applications.'
        }
      ]
    }
  }
];
