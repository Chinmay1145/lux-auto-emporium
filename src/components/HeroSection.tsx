
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, Sparkles, Zap, Crown, Star, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&q=80&w=2052",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=2026"
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    setIsLoaded(true);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Dynamic background with rotating images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Supercar ${index + 1}`}
              className="w-full h-full object-cover scale-110 animate-slow-zoom"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-luxury-gold/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Geometric decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-luxury-gold/20 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-luxury-gold/30 rotate-45 animate-pulse" />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-luxury-gold/10 rounded-lg rotate-12 animate-float" />
        <div className="absolute top-40 right-40 w-20 h-20 border-2 border-luxury-gold/20 rounded-full animate-bounce-slow" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Premium badge */}
        <div className={`inline-flex items-center gap-3 bg-luxury-gold/15 backdrop-blur-sm border border-luxury-gold/30 rounded-full px-6 py-3 mb-8 transition-all duration-1000 ${isLoaded ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <Crown className="w-5 h-5 text-luxury-gold animate-pulse" />
          <span className="text-sm font-semibold luxury-text-gradient">India's Premier Supercar Destination</span>
          <Sparkles className="w-4 h-4 text-luxury-gold animate-spin" style={{ animationDuration: '3s' }} />
        </div>

        {/* Main heading with staggered animation */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <span className="block mb-2">Luxury</span>
          <span className="luxury-text-gradient relative">
            Supercars
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-luxury-gold/20 rounded-full animate-ping" />
            <div className="absolute top-0 right-0 w-4 h-4 bg-luxury-gold rounded-full animate-pulse" />
          </span>
          <span className="block mt-2 text-muted-foreground">Redefined</span>
        </h1>

        {/* Enhanced subtitle */}
        <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isLoaded ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          Experience the pinnacle of automotive excellence with our curated collection of 
          <span className="luxury-text-gradient font-semibold"> world-class supercars</span>, 
          where dreams meet reality and performance knows no bounds.
        </p>

        {/* Enhanced stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-500 ${isLoaded ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          {[
            { icon: Crown, label: "Premium Brands", value: "7+" },
            { icon: Zap, label: "Supercars", value: "70+" },
            { icon: Star, label: "Happy Clients", value: "2000+" },
            { icon: Sparkles, label: "Years Experience", value: "15+" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/30 flex items-center justify-center group-hover:bg-luxury-gold/20 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-luxury-gold group-hover:animate-pulse" />
              </div>
              <div className="text-2xl font-bold luxury-text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced action buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-1000 delay-700 ${isLoaded ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <Link to="/gallery">
            <Button 
              size="lg" 
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-bold px-10 py-6 rounded-full text-lg shadow-2xl hover:shadow-luxury-gold/50 transition-all duration-300 hover:scale-105 group"
            >
              <span className="flex items-center">
                Explore Collection
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-black font-semibold px-10 py-6 rounded-full text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
          >
            <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Watch Video
          </Button>
        </div>

        {/* Enhanced scroll indicator */}
        <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col items-center text-muted-foreground group cursor-pointer">
            <span className="text-sm font-medium mb-2 group-hover:text-luxury-gold transition-colors duration-300">Discover More</span>
            <div className="w-6 h-10 border-2 border-luxury-gold/50 rounded-full flex justify-center group-hover:border-luxury-gold transition-colors duration-300">
              <div className="w-1 h-3 bg-luxury-gold/70 rounded-full mt-2 animate-bounce" />
            </div>
            <ChevronDown className="w-5 h-5 mt-2 animate-bounce group-hover:text-luxury-gold transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-luxury-gold rounded-full animate-ping opacity-60" />
      <div className="absolute bottom-40 right-20 w-2 h-2 bg-luxury-gold rounded-full animate-pulse opacity-80" />
      <div className="absolute top-1/3 right-10 w-4 h-4 border border-luxury-gold rounded-full animate-spin opacity-40" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-luxury-gold rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }} />
    </section>
  );
}
