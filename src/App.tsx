import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductCatalogue } from './components/ProductCatalogue';
import { OrderInfoSection } from './components/OrderInfoSection';
import { OrderCartDrawer, CartItem } from './components/OrderCartDrawer';
import { PdfCatalogueViewer } from './components/PdfCatalogueViewer';
import { Footer } from './components/Footer';
import { ProductItem, PriceOption } from './data/danveraCatalogue';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [darkMode]);

  const handleAddToCart = (product: ProductItem, option: PriceOption) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedOption.weight === option.weight
      );
      if (existingIndex > -1) {
        return prev.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { product, selectedOption: option, quantity: 1 }];
      }
    });

    // Small celebratory burst on add to bag
    try {
      confetti({
        particleCount: 25,
        spread: 50,
        origin: { y: 0.8 }
      });
    } catch (e) {
      // Ignore
    }

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, weight: string, qty: number) => {
    if (qty <= 0) {
      setCart((prev) =>
        prev.filter((item) => !(item.product.id === productId && item.selectedOption.weight === weight))
      );
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.product.id === productId && item.selectedOption.weight === weight
            ? { ...item, quantity: qty }
            : item
        )
      );
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Bar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={() => setDarkMode(!darkMode)}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPdfViewer={() => setIsPdfViewerOpen(true)}
      />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        <HeroSection onOpenPdfViewer={() => setIsPdfViewerOpen(true)} />
        <AboutSection />
        <ProductCatalogue onAddToCart={handleAddToCart} cartItems={cart} />
        <OrderInfoSection />
      </main>

      {/* WhatsApp Order Inquiry Bag Drawer */}
      <OrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Print PDF Catalogue Viewer Modal */}
      {/* <PdfCatalogueViewer
        isOpen={isPdfViewerOpen}
        onClose={() => setIsPdfViewerOpen(false)}
      /> */}

      {/* Footer */}
      <Footer onOpenPdfViewer={() => setIsPdfViewerOpen(true)} />
    </div>
  );
};

export default App;
