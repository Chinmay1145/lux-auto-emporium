
import { useParams } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { getBrandById, getProductsByBrand } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, Award, Globe, Calendar, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrandPage = () => {
  const { brandId } = useParams();
  
  if (!brandId) {
    return <div>Brand not found</div>;
  }
  
  const brand = getBrandById(brandId);
  const products = getProductsByBrand(brandId);
  
  if (!brand) {
    return <div>Brand not found</div>;
  }

  // Enhanced brand information with detailed descriptions
  const getBrandDetails = (brandName: string) => {
    const brandInfo: Record<string, any> = {
      'Ferrari': {
        heritage: 'Founded in 1939 by Enzo Ferrari, Ferrari represents the pinnacle of Italian automotive excellence and racing heritage.',
        philosophy: 'Every Ferrari is a masterpiece of engineering, combining legendary performance with timeless Italian design.',
        achievements: ['24 Hours of Le Mans victories', 'Over 240 Formula 1 wins', '90+ years of racing heritage'],
        signature: 'Prancing Horse emblem symbolizing power and prestige',
        specialty: 'Hand-crafted V8 and V12 engines with unmatched performance'
      },
      'Lamborghini': {
        heritage: 'Established in 1963 by Ferruccio Lamborghini, born from a desire to create the perfect grand touring car.',
        philosophy: 'Expect the unexpected - pushing boundaries with aggressive design and revolutionary technology.',
        achievements: ['Pioneer in carbon fiber technology', 'V12 naturally aspirated excellence', 'Iconic scissor door design'],
        signature: 'Raging Bull emblem representing untamed power and Italian passion',
        specialty: 'Angular, aggressive styling with naturally aspirated engines'
      },
      'McLaren': {
        heritage: 'Born from racing in 1963, McLaren brings Formula 1 technology directly to the road.',
        philosophy: 'Pure engineering excellence where every component serves performance and driver engagement.',
        achievements: ['183 Formula 1 race wins', 'F1 road car legend', 'Carbon fiber monocoque pioneers'],
        signature: 'Papaya orange racing heritage and distinctive dihedral doors',
        specialty: 'Lightweight carbon construction with active aerodynamics'
      },
      'Bugatti': {
        heritage: 'Founded in 1909 by Ettore Bugatti, representing the absolute pinnacle of automotive luxury and performance.',
        philosophy: 'Art, forme, technique - where automotive artistry meets uncompromising engineering excellence.',
        achievements: ['Fastest production car records', 'Hand-crafted W16 engines', '100+ years of luxury heritage'],
        signature: 'Distinctive horseshoe grille and elegant French craftsmanship',
        specialty: 'Quad-turbocharged W16 engines with exquisite luxury appointments'
      },
      'Porsche': {
        heritage: 'Since 1931, Porsche has perfected the art of sports car engineering with German precision.',
        philosophy: 'Intelligent performance through innovative engineering and timeless design evolution.',
        achievements: ['Le Mans domination', '911 icon for 60+ years', 'Hybrid technology pioneers'],
        signature: 'Distinctive silhouette and rear-engine layout mastery',
        specialty: 'Flat-six engines and perfect weight distribution'
      },
      'Aston Martin': {
        heritage: 'British luxury and performance since 1913, embodying elegance and sophisticated engineering.',
        philosophy: 'Beauty, power, soul - creating emotional connections through timeless British design.',
        achievements: ['James Bond heritage', 'Le Mans victories', 'British luxury craftsmanship'],
        signature: 'Distinctive grille design and handcrafted British luxury',
        specialty: 'V12 engines with bespoke British craftsmanship'
      },
      'Koenigsegg': {
        heritage: 'Swedish hypercar manufacturer founded in 1994, pushing the absolute limits of automotive performance.',
        philosophy: 'No compromise engineering where every innovation serves ultimate performance.',
        achievements: ['World speed records', 'Revolutionary engine technology', 'Megacar performance levels'],
        signature: 'Ghost symbol and cutting-edge Scandinavian engineering',
        specialty: 'Revolutionary engine designs with extreme performance focus'
      }
    };
    
    return brandInfo[brandName] || {
      heritage: 'A legendary automotive manufacturer with rich heritage and innovation.',
      philosophy: 'Combining performance excellence with distinctive design and engineering.',
      achievements: ['Industry-leading performance', 'Design innovation', 'Racing heritage'],
      signature: 'Distinctive brand identity and engineering excellence',
      specialty: 'High-performance vehicles with unique character'
    };
  };

  const brandDetails = getBrandDetails(brand.name);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6 hover:text-luxury-gold transition-all duration-300 hover:scale-105">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        {/* Enhanced brand header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/5 backdrop-blur-sm border-2 border-luxury-gold/30 flex items-center justify-center shadow-2xl">
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="w-20 h-20 object-contain filter drop-shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="luxury-text-gradient">{brand.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            {brand.description}
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-luxury-gold" />
              <span>Founded in {brand.founded}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-luxury-gold" />
              <span>Global Presence</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-luxury-gold" />
              <span>Premium Heritage</span>
            </div>
          </div>
        </div>

        {/* Brand heritage section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Star className="w-6 h-6 text-luxury-gold" />
              Heritage & Philosophy
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Heritage:</strong> {brandDetails.heritage}</p>
              <p><strong className="text-foreground">Philosophy:</strong> {brandDetails.philosophy}</p>
              <p><strong className="text-foreground">Signature:</strong> {brandDetails.signature}</p>
              <p><strong className="text-foreground">Specialty:</strong> {brandDetails.specialty}</p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-luxury-gold" />
              Key Achievements
            </h2>
            <div className="space-y-3">
              {brandDetails.achievements.map((achievement: string, index: number) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced collection header */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Zap className="w-8 h-8 text-luxury-gold" />
              {brand.name} Collection
            </h2>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-luxury-gold" />
                <span>{products.length} Models Available</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card/20 backdrop-blur-sm border border-border/50 rounded-xl p-6">
            <p className="text-muted-foreground leading-relaxed">
              Explore our carefully curated selection of {brand.name} supercars, each representing the pinnacle 
              of automotive engineering and design. Every vehicle undergoes our comprehensive 127-point inspection 
              and comes with complete documentation, ensuring authenticity and quality that meets our exacting standards.
            </p>
          </div>
        </div>

        {/* Enhanced products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center bg-gradient-to-r from-luxury-gold/5 via-luxury-gold/10 to-luxury-gold/5 rounded-2xl p-12 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <h3 className="text-2xl font-bold mb-4">Interested in {brand.name}?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our certified {brand.name} specialists are ready to help you find the perfect model. 
            Schedule a private consultation or visit our showroom for an exclusive viewing experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              Schedule Consultation
            </button>
            <button className="border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black font-semibold px-8 py-3 rounded-full transition-all duration-300">
              Request Information
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
