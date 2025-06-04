
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { ArrowLeft, ShoppingCart, Heart, Share2, Zap, Gauge, Calendar, Shield, Star, Eye } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { addItem } = useCart();
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
            <Eye className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/gallery">
            <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 rounded-full">
              Browse Gallery
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    toast({
      title: isLiked ? "Removed from Wishlist" : "Added to Wishlist",
      description: isLiked ? "Product removed from wishlist" : "Product added to wishlist",
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Product link copied to clipboard",
      });
    }
  };

  // Mock additional images
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gradient-to-br from-background via-background to-muted/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-gold/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-luxury-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-luxury-gold/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Back button */}
        <Link to="/gallery">
          <Button variant="ghost" className="mb-6 hover:text-luxury-gold animate-fade-in">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Gallery
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4 animate-fade-in">
            {/* Main Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 group">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-luxury-gold text-black font-semibold px-4 py-2 text-sm animate-pulse-glow">
                  Premium
                </Badge>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-luxury-gold shadow-lg shadow-luxury-gold/20' 
                      : 'border-border/50 hover:border-luxury-gold/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="outline" className="border-luxury-gold/50 text-luxury-gold">
                  {product.brand}
                </Badge>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 text-luxury-gold fill-current" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">(47 reviews)</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 luxury-text-gradient">
                {product.name}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="text-4xl font-bold luxury-text-gradient mb-2">
                {formatPrice(product.price)}
              </div>
              <div className="text-sm text-muted-foreground">Ex-showroom price (Mumbai)</div>
            </div>

            {/* Specifications */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border border-border/50">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="w-5 h-5 text-luxury-gold mr-2" />
                Performance Specs
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <Gauge className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="text-sm text-muted-foreground">Power</div>
                    <div className="font-semibold">{product.specs.power}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <Zap className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="text-sm text-muted-foreground">Top Speed</div>
                    <div className="font-semibold">{product.specs.topSpeed}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <Calendar className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="text-sm text-muted-foreground">0-100 km/h</div>
                    <div className="font-semibold">{product.specs.acceleration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <Shield className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="text-sm text-muted-foreground">Engine</div>
                    <div className="font-semibold">{product.specs.engine}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
              
              <Button
                variant="outline"
                onClick={handleLike}
                className={`px-6 py-6 rounded-full border-2 transition-all duration-300 ${
                  isLiked 
                    ? 'border-red-500 text-red-500 bg-red-50 dark:bg-red-950' 
                    : 'border-border hover:border-luxury-gold'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
              </Button>
              
              <Button
                variant="outline"
                onClick={handleShare}
                className="px-6 py-6 rounded-full border-2 border-border hover:border-luxury-gold transition-all duration-300"
              >
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
              <div className="text-center">
                <Shield className="w-6 h-6 text-luxury-gold mx-auto mb-2" />
                <div className="text-xs font-medium">Verified</div>
                <div className="text-xs text-muted-foreground">Authentic</div>
              </div>
              <div className="text-center">
                <Zap className="w-6 h-6 text-luxury-gold mx-auto mb-2" />
                <div className="text-xs font-medium">Fast</div>
                <div className="text-xs text-muted-foreground">Delivery</div>
              </div>
              <div className="text-center">
                <Heart className="w-6 h-6 text-luxury-gold mx-auto mb-2" />
                <div className="text-xs font-medium">Premium</div>
                <div className="text-xs text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            More from <span className="luxury-text-gradient">{product.brand}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.brand === product.brand && p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct, index) => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 group-hover:text-luxury-gold transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="text-lg font-bold luxury-text-gradient">
                        {formatPrice(relatedProduct.price)}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
