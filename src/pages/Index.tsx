
import { HeroSection } from '@/components/HeroSection';
import { BrandsShowcase } from '@/components/BrandsShowcase';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Truck, Headphones } from 'lucide-react';

const featuredProducts = products.slice(0, 8);

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Brands Showcase */}
      <BrandsShowcase />

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-muted/20 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="luxury-text-gradient">Collection</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked supercars representing the pinnacle of automotive excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/gallery">
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-6 rounded-full">
                View All Products
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-r from-background via-muted/10 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                <Star className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">Only the finest supercars make it to our collection</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                <Shield className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-muted-foreground text-sm">Safe and secure payment processing</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                <Truck className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Worldwide Delivery</h3>
              <p className="text-muted-foreground text-sm">Professional delivery to your location</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                <Headphones className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground text-sm">Expert support whenever you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-luxury-gold/5 via-background to-luxury-gold/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Get the latest news about new arrivals and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm focus:outline-none focus:border-luxury-gold"
            />
            <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
