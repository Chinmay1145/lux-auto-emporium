
import { HeroSection } from '@/components/HeroSection';
import { BrandsShowcase } from '@/components/BrandsShowcase';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Truck, Headphones, Award, Users, Clock } from 'lucide-react';

const featuredProducts = products.slice(0, 8);

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Indicators */}
      <section className="py-12 bg-gradient-to-r from-luxury-gold/5 via-luxury-gold/10 to-luxury-gold/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <Award className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-luxury-gold">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Users className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-luxury-gold">2000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Shield className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-luxury-gold">100%</div>
              <div className="text-sm text-muted-foreground">Verified Cars</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Clock className="w-8 h-8 text-luxury-gold mx-auto mb-2" />
              <div className="text-2xl font-bold text-luxury-gold">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </section>

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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="luxury-text-gradient">Supercar Luxury</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the ultimate in luxury car shopping with our premium services and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                <Star className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">Only the finest supercars make it to our collection with thorough verification</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                <Shield className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-muted-foreground text-sm">Bank-grade security with multiple payment options and buyer protection</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                <Truck className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Worldwide Delivery</h3>
              <p className="text-muted-foreground text-sm">Professional white-glove delivery service to your preferred location</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-luxury-gold/10 flex items-center justify-center group-hover:bg-luxury-gold/20 transition-colors">
                <Headphones className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground text-sm">Dedicated luxury car specialists available 24/7 for personalized assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-luxury-gold/5 via-background to-luxury-gold/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="luxury-text-gradient">Clients Say</span>
            </h2>
            <p className="text-muted-foreground">Trusted by supercar enthusiasts across India</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-luxury-gold fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Exceptional service and an incredible selection of supercars. The team made my dream car purchase seamless and enjoyable."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-luxury-gold/20 flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-luxury-gold" />
                  </div>
                  <div>
                    <div className="font-semibold">Rajesh Sharma</div>
                    <div className="text-sm text-muted-foreground">Mumbai</div>
                  </div>
                </div>
              </div>
            ))}
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
