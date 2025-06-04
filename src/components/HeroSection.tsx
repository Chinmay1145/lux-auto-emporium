
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=1200&h=600&fit=crop'
];

const heroTexts = [
  {
    title: 'Experience Ultimate Performance',
    subtitle: 'Discover the world\'s most exclusive supercars',
    brand: 'Ferrari SF90 Stradale'
  },
  {
    title: 'Precision Engineering',
    subtitle: 'Where technology meets artistry',
    brand: 'McLaren 720S'
  },
  {
    title: 'Luxury Redefined',
    subtitle: 'Beyond imagination, beyond limits',
    brand: 'Bugatti Chiron'
  }
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-luxury-gold/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Background Images with parallax effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{
              transform: `translateX(${(mousePosition.x - window.innerWidth / 2) * 0.01}px) translateY(${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
            }}
          >
            <img
              src={image}
              alt={`Supercar ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 animate-float">
        <div className="w-20 h-20 bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/30 rounded-full flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-luxury-gold animate-spin" style={{ animationDuration: '4s' }} />
        </div>
      </div>

      <div className="absolute bottom-1/3 right-1/3 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-16 h-16 bg-luxury-gold/10 backdrop-blur-sm border border-luxury-gold/30 rounded-full flex items-center justify-center">
          <Zap className="w-6 h-6 text-luxury-gold animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 bg-luxury-gold/20 backdrop-blur-sm border border-luxury-gold/40 rounded-full px-6 py-3 mb-8 animate-slide-in-left">
            <Star className="w-5 h-5 text-luxury-gold animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-sm font-medium bg-luxury-gradient bg-clip-text text-transparent">Premium Collection 2024</span>
          </div>

          {/* Main heading with enhanced animations */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block animate-fade-in">{heroTexts[currentSlide].title}</span>
            <span className="block luxury-text-gradient mt-4 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
              {heroTexts[currentSlide].brand}
            </span>
          </h1>

          {/* Subtitle with typewriter effect */}
          <p className="text-xl md:text-3xl mb-12 text-gray-200 leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {heroTexts[currentSlide].subtitle}
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-in-left" style={{ animationDelay: '0.9s' }}>
            <Link to="/gallery">
              <Button 
                size="lg" 
                className="group bg-luxury-gold hover:bg-luxury-gold-dark text-black font-bold text-xl px-12 py-8 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-luxury-gold/30 animate-luxury-glow"
              >
                <span className="mr-3">Explore Collection</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-3 border-white/40 text-white hover:bg-white/20 backdrop-blur-sm font-bold text-xl px-12 py-8 rounded-full transition-all duration-500 hover:scale-110 hover:border-luxury-gold hover:text-luxury-gold"
              >
                <span>View Brands</span>
              </Button>
            </Link>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-12 mt-20 pt-12 border-t border-white/30">
            {[
              { value: '70+', label: 'Supercars', delay: '1.2s' },
              { value: '7', label: 'Premium Brands', delay: '1.4s' },
              { value: '24/7', label: 'Support', delay: '1.6s' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center animate-fade-in" style={{ animationDelay: stat.delay }}>
                <div className="text-4xl md:text-5xl font-bold luxury-text-gradient mb-3 animate-pulse">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced slide indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative w-4 h-4 rounded-full transition-all duration-500 group ${
              index === currentSlide 
                ? 'bg-luxury-gold shadow-lg shadow-luxury-gold/50 scale-125' 
                : 'bg-white/40 hover:bg-white/70 hover:scale-110'
            }`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 rounded-full bg-luxury-gold animate-ping" />
            )}
          </button>
        ))}
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-12 right-12 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-1 h-4 bg-luxury-gold rounded-full mt-3 animate-pulse shadow-lg shadow-luxury-gold/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-gold/10 to-transparent animate-shimmer" />
        </div>
      </div>
    </section>
  );
}
