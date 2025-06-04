
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Eye, Zap, Star } from 'lucide-react';
import { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group relative overflow-hidden bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-sm border border-border/50 hover:border-luxury-gold/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-luxury-gold/20 cursor-pointer">
        {/* Animated background particles */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {[...Array(6)].map((_, i) => (
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

        {/* Shimmer effect */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
        
        {/* Image section */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 animate-shimmer" />
          )}
          
          <img
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Dynamic overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating action buttons */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
            <Button
              size="icon"
              variant="secondary"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm shadow-xl border border-white/20 hover:scale-110 transition-all duration-300"
              onClick={handleLike}
            >
              <Heart className={`w-4 h-4 transition-colors duration-300 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm shadow-xl border border-white/20 hover:scale-110 transition-all duration-300"
            >
              <Eye className="w-4 h-4 text-gray-700" />
            </Button>
          </div>

          {/* Enhanced brand badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-luxury-gold/95 text-black font-bold backdrop-blur-sm shadow-lg border border-luxury-gold/30 px-3 py-1 animate-pulse-glow">
              {product.brand}
            </Badge>
          </div>

          {/* Performance indicator */}
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
              <Zap className="w-3 h-3 text-luxury-gold" />
              <span className="text-white text-xs font-medium">{product.specs.power}</span>
            </div>
          </div>
        </div>

        {/* Enhanced content section */}
        <div className="p-6 relative">
          {/* Floating corner decoration */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-luxury-gold/20 to-transparent rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700" />
          
          {/* Product name with icon */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold group-hover:text-luxury-gold transition-colors duration-300 flex-1">
              {product.name}
            </h3>
            <div className="flex items-center gap-1 ml-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 text-luxury-gold fill-current opacity-80" />
              ))}
            </div>
          </div>
          
          {/* Description with better typography */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
            {product.description}
          </p>

          {/* Enhanced specs grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg p-3 border border-border/30 group-hover:border-luxury-gold/30 transition-colors duration-300">
              <div className="text-muted-foreground text-xs mb-1">Power</div>
              <div className="font-bold text-sm luxury-text-gradient">{product.specs.power}</div>
            </div>
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg p-3 border border-border/30 group-hover:border-luxury-gold/30 transition-colors duration-300">
              <div className="text-muted-foreground text-xs mb-1">Top Speed</div>
              <div className="font-bold text-sm luxury-text-gradient">{product.specs.topSpeed}</div>
            </div>
          </div>

          {/* Enhanced price and action section */}
          <div className="flex items-center justify-between">
            <div className="relative">
              <div className="text-2xl font-bold luxury-text-gradient relative">
                {formatPrice(product.price)}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-luxury-gold rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-xs text-muted-foreground">Ex-showroom price</div>
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group-hover:animate-pulse-glow"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Enhanced hover border effect */}
        <div className="absolute inset-0 border-2 border-luxury-gold/0 group-hover:border-luxury-gold/50 rounded-lg transition-all duration-500 pointer-events-none" />
        
        {/* Corner accents */}
        <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-luxury-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-luxury-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </Link>
  );
}
