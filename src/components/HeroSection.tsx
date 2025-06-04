
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const heroImages = [
  '/api/placeholder/1200/600',
  '/api/placeholder/1200/600',
  '/api/placeholder/1200/600'
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Supercar ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-luxury-gold/20 backdrop-blur-sm border border-luxury-gold/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-luxury-gold" />
            <span className="text-sm font-medium">Premium Collection</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">{heroTexts[currentSlide].title}</span>
            <span className="block text-luxury-gold mt-2">
              {heroTexts[currentSlide].brand}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            {heroTexts[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/gallery">
              <Button 
                size="lg" 
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl"
              >
                Explore Collection
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/brands">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                View Brands
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">70+</div>
              <div className="text-sm text-gray-300">Supercars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">7</div>
              <div className="text-sm text-gray-300">Premium Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-2">24/7</div>
              <div className="text-sm text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-luxury-gold shadow-lg shadow-luxury-gold/50' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
