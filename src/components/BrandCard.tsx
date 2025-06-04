
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight, Crown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BrandCardProps {
  brand: {
    id: string;
    name: string;
    description: string;
    logo: string;
    color: string;
    founded: number;
  };
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm border border-border/50 hover:border-luxury-gold/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/20 h-96">
      {/* Dynamic background gradient overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-all duration-700 bg-gradient-to-br from-transparent via-current to-transparent"
        style={{ color: brand.color }}
      />
      
      {/* Animated border effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-luxury-gold/0 via-luxury-gold/50 to-luxury-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-px">
        <div className="w-full h-full bg-card rounded-lg" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-luxury-gold/60 rounded-full animate-ping"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative p-8 h-full flex flex-col justify-between z-10">
        {/* Header */}
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="w-14 h-14 object-contain opacity-80 group-hover:opacity-100 transition-all duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
          </div>
          
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-luxury-gold transition-colors duration-500">
              {brand.name}
            </h3>
            
            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <Crown className="w-5 h-5 text-luxury-gold animate-pulse" />
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed text-sm md:text-base group-hover:text-foreground/80 transition-colors duration-500">
            {brand.description}
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground/70 mb-6">
            <Star className="w-4 h-4 text-luxury-gold" />
            <span>Founded in {brand.founded}</span>
          </div>
        </div>

        {/* Action */}
        <div className="text-center">
          <Link to={`/brand/${brand.id}`}>
            <Button 
              variant="outline" 
              className="group/btn relative overflow-hidden border-2 border-border/50 hover:border-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-500 rounded-full px-8 py-3 font-semibold"
            >
              <span className="relative z-10 flex items-center">
                View Collection
                <ChevronRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </span>
              
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-luxury-gold/20 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-luxury-gold/10 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 group-hover:-rotate-45 transition-all duration-700" />
      
      {/* Corner accent */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-luxury-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-luxury-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
}
