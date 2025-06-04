
import { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useCart } from '@/contexts/CartContext';
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const navigate = useNavigate();

  const brands = [
    { id: 'ferrari', name: 'Ferrari' },
    { id: 'mclaren', name: 'McLaren' },
    { id: 'lamborghini', name: 'Lamborghini' },
    { id: 'bugatti', name: 'Bugatti' },
    { id: 'koenigsegg', name: 'Koenigsegg' },
    { id: 'pagani', name: 'Pagani' },
    { id: 'rimac', name: 'Rimac' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold luxury-text-gradient">
              SUPERCAR
            </div>
            <div className="text-xs text-muted-foreground">LUXURY</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-luxury-gold transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-sm font-medium hover:text-luxury-gold transition-colors">
                Brands
              </button>
              <div className="absolute top-full left-0 w-48 bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2">
                {brands.map((brand) => (
                  <Link
                    key={brand.id}
                    to={`/brand/${brand.id}`}
                    className="block px-4 py-2 text-sm hover:bg-accent transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/gallery" className="text-sm font-medium hover:text-luxury-gold transition-colors">
              Gallery
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-luxury-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-luxury-gold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
            </Button>
            
            <ThemeToggle />
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/cart')}
              className="relative"
            >
              <ShoppingCart className="h-4 w-4" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-luxury-gold text-xs font-bold text-black flex items-center justify-center animate-luxury-glow">
                  {getItemCount()}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="px-2 py-2 text-sm font-medium hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="px-2 py-2 text-sm font-medium text-muted-foreground">
                Brands:
              </div>
              {brands.map((brand) => (
                <Link
                  key={brand.id}
                  to={`/brand/${brand.id}`}
                  className="px-4 py-2 text-sm hover:text-luxury-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {brand.name}
                </Link>
              ))}
              <Link
                to="/gallery"
                className="px-2 py-2 text-sm font-medium hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/about"
                className="px-2 py-2 text-sm font-medium hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-2 py-2 text-sm font-medium hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
