import { ConvertedDocument } from '../types';

export function generateStandaloneHtml(doc: ConvertedDocument): string {
  const sectionsHtml = doc.sections.map(sec => {
    switch (sec.type) {
      case 'hero':
        return `
        <header class="hero-section">
          <div class="badge">${doc.author || 'Danvera Web Edition'}</div>
          <h1>${sec.title || doc.title}</h1>
          <p class="hero-lead">${sec.content}</p>
          ${sec.subContent ? `
            <div class="hero-tags">
              ${sec.subContent.map(tag => `<span class="tag">✓ ${tag}</span>`).join('')}
            </div>
          ` : ''}
        </header>`;

      case 'stats':
        return `
        <section class="section stats-section">
          <h2>${sec.title || 'Key Metrics'}</h2>
          <p class="section-desc">${sec.content}</p>
          <div class="stats-grid">
            ${(sec.stats || []).map(st => `
              <div class="stat-card">
                <div class="stat-val">${st.value}</div>
                <div class="stat-lbl">${st.label}</div>
                ${st.detail ? `<div class="stat-det">${st.detail}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </section>`;

      case 'features':
        return `
        <section class="section features-section">
          <h2>${sec.title || 'Features & Solutions'}</h2>
          <p class="section-desc">${sec.content}</p>
          <div class="features-grid">
            ${(sec.features || []).map(ft => `
              <div class="feature-card">
                <h3>${ft.title}</h3>
                <p>${ft.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>`;

      case 'callout':
        return `
        <section class="section callout-section">
          <h2>${sec.title}</h2>
          <p>${sec.content}</p>
        </section>`;

      default:
        return `
        <section class="section content-section">
          ${sec.title ? `<h2>${sec.title}</h2>` : ''}
          <p class="paragraph">${sec.content}</p>
        </section>`;
    }
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${doc.title} - Danvera Web Edition</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg: #070913;
      --card-bg: #0e1326;
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --accent: #00f2fe;
      --accent-grad: linear-gradient(135deg, #00f2fe 0%, #7000ff 100%);
      --border: rgba(255, 255, 255, 0.08);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
      padding: 2rem 1rem;
    }
    .container { max-width: 1000px; margin: 0 auto; }
    h1, h2, h3 { font-family: 'Outfit', sans-serif; }
    .hero-section {
      text-align: center;
      padding: 4rem 1.5rem;
      background: var(--card-bg);
      border-radius: 20px;
      border: 1px solid var(--border);
      margin-bottom: 2.5rem;
    }
    .badge {
      display: inline-block;
      padding: 0.35rem 0.9rem;
      border-radius: 9999px;
      background: rgba(0, 242, 254, 0.1);
      color: var(--accent);
      font-weight: 600;
      font-size: 0.85rem;
      margin-bottom: 1.25rem;
      text-transform: uppercase;
    }
    h1 { font-size: 2.75rem; margin-bottom: 1rem; background: var(--accent-grad); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero-lead { font-size: 1.2rem; color: var(--text-muted); max-width: 750px; margin: 0 auto 1.5rem; }
    .hero-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; }
    .tag { font-size: 0.875rem; color: var(--text); background: rgba(255, 255, 255, 0.05); padding: 0.4rem 0.8rem; border-radius: 8px; border: 1px solid var(--border); }
    
    .section {
      background: var(--card-bg);
      border-radius: 16px;
      border: 1px solid var(--border);
      padding: 2.5rem;
      margin-bottom: 2rem;
    }
    .section h2 { font-size: 1.75rem; margin-bottom: 0.75rem; color: var(--text); }
    .section-desc { color: var(--text-muted); margin-bottom: 2rem; }
    
    .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; }
    .stat-card { background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; text-align: center; }
    .stat-val { font-size: 2.25rem; font-weight: 800; color: var(--accent); font-family: 'Outfit'; }
    .stat-lbl { font-weight: 600; margin-top: 0.25rem; }
    .stat-det { font-size: 0.8rem; color: var(--text-muted); margin-top: 0.25rem; }
    
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; }
    .feature-card { background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border); border-radius: 12px; padding: 1.5rem; }
    .feature-card h3 { font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--accent); }
    
    .callout-section { background: linear-gradient(135deg, rgba(0,242,254,0.1) 0%, rgba(112,0,255,0.1) 100%); text-align: center; }
    .paragraph { color: var(--text-muted); font-size: 1.05rem; }

    footer { text-align: center; padding: 2rem 0; color: var(--text-muted); font-size: 0.875rem; border-top: 1px solid var(--border); margin-top: 3rem; }
  </style>
</head>
<body>
  <div class="container">
    ${sectionsHtml}
    <footer>
      Generated with Danvera PDF-to-Website Studio &bull; ${new Date().getFullYear()}
    </footer>
  </div>
</body>
</html>`;
}
