
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary flex items-center">
          <span className="mr-1">Porto</span>
          <span className="text-foreground">Analyst</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#about">About</NavLink>
          <Button variant="default" size="sm">
            Contact
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md py-4 animate-in-fast">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <MobileNavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>
              Projects
            </MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setMobileMenuOpen(false)}>
              Skills
            </MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setMobileMenuOpen(false)}>
              About
            </MobileNavLink>
            <Button variant="default" className="w-full">
              Contact
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-foreground/80 hover:text-primary transition-colors duration-200"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  children, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <a
    href={href}
    className="block py-2 px-4 hover:bg-muted rounded-md transition-colors"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
