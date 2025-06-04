
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
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
      <Card className="group relative overflow-hidden bg-card/80 backdrop-blur-sm border border-border/50 hover:border-luxury-gold/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
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
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick actions */}
          <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
            <Button
              size="icon"
              variant="secondary"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg"
              onClick={handleLike}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm shadow-lg"
            >
              <Eye className="w-4 h-4 text-gray-700" />
            </Button>
          </div>

          {/* Brand badge */}
          <div className="absolute top-4 left-4">
            <Badge 
              variant="secondary" 
              className="bg-luxury-gold/90 text-black font-semibold backdrop-blur-sm"
            >
              {product.brand}
            </Badge>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6">
          {/* Product name */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-luxury-gold transition-colors">
            {product.name}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
            <div className="bg-muted/50 rounded-lg p-2">
              <div className="text-muted-foreground">Power</div>
              <div className="font-semibold">{product.specs.power}</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-2">
              <div className="text-muted-foreground">Top Speed</div>
              <div className="font-semibold">{product.specs.topSpeed}</div>
            </div>
          </div>

          {/* Price and action */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-2xl font-bold luxury-text-gradient">
                {formatPrice(product.price)}
              </div>
              <div className="text-xs text-muted-foreground">Ex-showroom price</div>
            </div>
            
            <Button
              onClick={handleAddToCart}
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 border border-luxury-gold/0 group-hover:border-luxury-gold/30 rounded-lg transition-all duration-300 pointer-events-none" />
      </Card>
    </Link>
  );
}
