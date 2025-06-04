
import { useParams } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';
import { getBrandById, getProductsByBrand } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
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

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6 hover:text-luxury-gold">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
        </Link>

        {/* Brand header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center">
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="w-16 h-16 object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="luxury-text-gradient">{brand.name}</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto">
            {brand.description}
          </p>
          
          <div className="text-sm text-muted-foreground">
            Founded in {brand.founded}
          </div>
        </div>

        {/* Products grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">
            {brand.name} Collection ({products.length} models)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
