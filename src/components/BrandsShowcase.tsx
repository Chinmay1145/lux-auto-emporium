
import { BrandCard } from './BrandCard';
import { brands } from '@/data/products';

export function BrandsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="luxury-text-gradient">Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the world's most prestigious supercar manufacturers, each with their unique heritage and cutting-edge technology.
          </p>
        </div>

        {/* Brands grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <div 
              key={brand.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-luxury-gold" />
            <span>Luxury • Performance • Excellence</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-luxury-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
