
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronRight } from 'lucide-react';
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
    <Card className="group relative overflow-hidden bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 hover:border-opacity-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ backgroundColor: brand.color }}
      />
      
      {/* Content */}
      <div className="relative p-8 h-80 flex flex-col justify-between">
        {/* Header */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </div>
          
          <h3 className="text-2xl font-bold mb-2 group-hover:text-luxury-gold transition-colors">
            {brand.name}
          </h3>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {brand.description}
          </p>
          
          <div className="text-sm text-muted-foreground/70">
            Founded in {brand.founded}
          </div>
        </div>

        {/* Action */}
        <div className="text-center">
          <Link to={`/brand/${brand.id}`}>
            <Button 
              variant="outline" 
              className="group-hover:bg-luxury-gold group-hover:text-black group-hover:border-luxury-gold transition-all duration-300 rounded-full px-6"
            >
              View Collection
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-luxury-gold/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-luxury-gold/5 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700" />
    </Card>
  );
}
