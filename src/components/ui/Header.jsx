import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navigationItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries?.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveSection(entry?.target?.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navigationItems?.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer?.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer?.disconnect();
    };
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element?.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDemoClick = () => {
    const demoSection = document.querySelector('#demo');
    if (demoSection) {
      const headerHeight = 80;
      const elementPosition = demoSection?.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } else {
      // Fallback to contact form or demo widget
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        const headerHeight = 80;
        const elementPosition = contactSection?.offsetTop - headerHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-nav transition-smooth ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm shadow-card' 
            : 'bg-background'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-nav">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 2L2 7L12 12L22 7L12 2Z" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 17L12 22L22 17" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 12L12 17L22 12" 
                      stroke="white" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold text-foreground">
                  Revoluno
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.href}
                  onClick={() => handleNavClick(item?.href)}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${
                    activeSection === item?.href?.substring(1)
                      ? 'text-primary' :'text-text-secondary'
                  }`}
                >
                  {item?.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="default"
                size="default"
                onClick={handleDemoClick}
                className="shadow-cta font-semibold"
              >
                Schedule Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-text-secondary hover:text-foreground hover:bg-muted transition-smooth"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-nav-backdrop md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background shadow-xl z-nav-drawer md:hidden transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M12 2L2 7L12 12L22 7L12 2Z" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M2 17L12 22L22 17" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                      <path 
                        d="M2 12L12 17L22 12" 
                        stroke="white" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-foreground">
                    Revoluno
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-text-secondary hover:text-foreground hover:bg-muted transition-smooth"
                  aria-label="Close mobile menu"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 px-6 py-8">
                <div className="space-y-6">
                  {navigationItems?.map((item) => (
                    <button
                      key={item?.href}
                      onClick={() => handleNavClick(item?.href)}
                      className={`block w-full text-left py-3 px-4 rounded-lg text-base font-medium transition-smooth ${
                        activeSection === item?.href?.substring(1)
                          ? 'text-primary bg-primary/10' :'text-text-secondary hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      {item?.label}
                    </button>
                  ))}
                </div>
              </nav>

              {/* Mobile CTA */}
              <div className="p-6 border-t border-border">
                <Button
                  variant="default"
                  size="lg"
                  fullWidth
                  onClick={handleDemoClick}
                  className="shadow-cta font-semibold"
                >
                  Get Demo
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Spacer for fixed header */}
      <div className="h-nav" />
    </>
  );
};

export default Header;