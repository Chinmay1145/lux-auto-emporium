
import { BrandCard } from './BrandCard';
import { brands } from '@/data/products';
import { Crown, Sparkles, Star } from 'lucide-react';

export function BrandsShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-luxury-gold/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/30 rounded-full px-6 py-3 mb-8 animate-fade-in">
            <Crown className="w-5 h-5 text-luxury-gold animate-pulse" />
            <span className="text-sm font-medium luxury-text-gradient">Elite Automotive Excellence</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Premium <span className="luxury-text-gradient relative">
              Brands
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-luxury-gold animate-spin" style={{ animationDuration: '4s' }} />
              </div>
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Discover the world's most prestigious supercar manufacturers, each with their unique heritage, 
            cutting-edge technology, and uncompromising pursuit of automotive perfection.
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-luxury-gold" />
            <Star className="w-4 h-4 text-luxury-gold mx-4 animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-luxury-gold" />
          </div>
        </div>

        {/* Enhanced Brands grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div 
              key={brand.id}
              className="animate-fade-in transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>

        {/* Enhanced Bottom decoration */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '1.6s' }}>
          <div className="inline-flex items-center gap-6 text-lg text-muted-foreground bg-card/30 backdrop-blur-sm border border-border/50 rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-luxury-gold rounded-full animate-pulse" />
              <span className="font-medium">Luxury</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-luxury-gold rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span className="font-medium">Performance</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-luxury-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <span className="font-medium">Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
