
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-background via-muted/20 to-background border-t border-border/40">
      <div className="container mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-bold luxury-text-gradient">SUPERCAR</div>
              <div className="text-xs text-muted-foreground">LUXURY</div>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              India's premier destination for luxury supercars. We bring you the world's most exclusive automotive masterpieces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center hover:bg-luxury-gold/20 transition-colors">
                <Facebook className="w-5 h-5 text-luxury-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center hover:bg-luxury-gold/20 transition-colors">
                <Twitter className="w-5 h-5 text-luxury-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center hover:bg-luxury-gold/20 transition-colors">
                <Instagram className="w-5 h-5 text-luxury-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center hover:bg-luxury-gold/20 transition-colors">
                <Youtube className="w-5 h-5 text-luxury-gold" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-muted-foreground hover:text-luxury-gold transition-colors">Home</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-luxury-gold transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-luxury-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-luxury-gold transition-colors">Contact</Link></li>
              <li><Link to="/cart" className="text-muted-foreground hover:text-luxury-gold transition-colors">Cart</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Brands</h3>
            <ul className="space-y-3">
              <li><Link to="/brand/ferrari" className="text-muted-foreground hover:text-luxury-gold transition-colors">Ferrari</Link></li>
              <li><Link to="/brand/lamborghini" className="text-muted-foreground hover:text-luxury-gold transition-colors">Lamborghini</Link></li>
              <li><Link to="/brand/mclaren" className="text-muted-foreground hover:text-luxury-gold transition-colors">McLaren</Link></li>
              <li><Link to="/brand/bugatti" className="text-muted-foreground hover:text-luxury-gold transition-colors">Bugatti</Link></li>
              <li><Link to="/brand/koenigsegg" className="text-muted-foreground hover:text-luxury-gold transition-colors">Koenigsegg</Link></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <span className="text-muted-foreground">info@supercarluxury.in</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-1" />
                <span className="text-muted-foreground">
                  123 Luxury Avenue,<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Supercar Luxury. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-luxury-gold transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-luxury-gold transition-colors">Terms of Service</Link>
              <Link to="/shipping" className="text-muted-foreground hover:text-luxury-gold transition-colors">Shipping Info</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
