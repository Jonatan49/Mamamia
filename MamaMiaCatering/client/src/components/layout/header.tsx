import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useScroll } from '@/hooks/use-scroll';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolledDown, scrollToSection } = useScroll();

  const navigation = [
    { href: "hero", label: "בית" },
    { href: "story", label: "הסיפור" },
    { href: "events", label: "אירועים" },
    { href: "menu", label: "תפריט" },
    { href: "gallery", label: "גלריה" },
    { href: "blog", label: "בלוג" },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        isScrolledDown ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 space-x-reverse">
            <div className="text-2xl font-bold text-golden">
              <span className="text-shadow-warm">מאמאמיה</span>
              <span className="text-sm text-saddle-brown block">טעמים של בית</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-dark-brown hover:text-golden transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-golden text-white px-6 py-2 rounded-full hover:bg-dark-golden hover-lift font-semibold"
            >
              <i className="fas fa-phone ml-2"></i>
              הזמינו עכשיו
            </Button>
          </div>
          
          <Button
            onClick={() => setIsMobileMenuOpen(true)}
            variant="ghost"
            className="lg:hidden text-dark-brown text-2xl p-0"
          >
            <i className="fas fa-bars"></i>
          </Button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transform transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="bg-white h-full w-80 shadow-2xl p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-dark-brown">תפריט ניווט</h2>
            <Button
              onClick={() => setIsMobileMenuOpen(false)}
              variant="ghost"
              className="text-gray-500 text-2xl p-0"
            >
              <i className="fas fa-times"></i>
            </Button>
          </div>
          <nav className="space-y-4">
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  scrollToSection(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className="block py-3 text-dark-brown hover:text-golden transition-colors font-medium w-full text-right"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => {
                scrollToSection('contact');
                setIsMobileMenuOpen(false);
              }}
              className="block bg-golden text-white px-6 py-3 rounded-full hover:bg-dark-golden font-semibold text-center mt-6 w-full"
            >
              <i className="fas fa-phone ml-2"></i>
              הזמינו עכשיו
            </Button>
          </nav>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};
