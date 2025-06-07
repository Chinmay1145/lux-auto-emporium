
import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products, brands } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Grid3X3, Grid2X2, List, SortAsc, X } from 'lucide-react';

const GalleryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState<'grid-large' | 'grid-small' | 'list'>('grid-large');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by brand
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(product => 
        product.brand.toLowerCase() === selectedBrand.toLowerCase()
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const ranges = {
        'under-50': [0, 50000000],
        '50-100': [50000000, 100000000],
        '100-200': [100000000, 200000000],
        'over-200': [200000000, Infinity]
      };
      const [min, max] = ranges[priceRange as keyof typeof ranges];
      filtered = filtered.filter(product => product.price >= min && product.price <= max);
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'brand':
          return a.brand.localeCompare(b.brand);
        case 'newest':
          return 0; // For demo purposes
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedBrand, sortBy, priceRange]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedBrand('all');
    setPriceRange('all');
    setSortBy('name');
  };

  const hasActiveFilters = searchQuery || selectedBrand !== 'all' || priceRange !== 'all';

  const getGridClasses = () => {
    switch (viewMode) {
      case 'grid-large':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8';
      case 'grid-small':
        return 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4';
      case 'list':
        return 'flex flex-col gap-4';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Supercar <span className="luxury-text-gradient">Catalog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Discover our exclusive collection of {products.length} luxury supercars from {brands.length} prestigious brands. 
            Filter, search, and find your dream machine.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {brands.slice(0, 4).map((brand) => (
              <Badge 
                key={brand.id} 
                variant="outline" 
                className="bg-card/50 backdrop-blur-sm border-luxury-gold/30 text-luxury-gold px-4 py-2 hover:bg-luxury-gold/10 transition-colors cursor-pointer"
                onClick={() => setSelectedBrand(brand.name)}
              >
                {brand.name} ({products.filter(p => p.brand === brand.name).length})
              </Badge>
            ))}
            <Badge variant="outline" className="bg-card/50 backdrop-blur-sm border-border/50 px-4 py-2">
              +{brands.length - 4} More Brands
            </Badge>
          </div>
        </div>

        {/* Enhanced Search and View Controls */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 mb-8">
          {/* Top row - Search and View Options */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="relative flex-1 lg:max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by name, brand, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background/50"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                  onClick={() => setSearchQuery('')}
                >
                  <X className="w-3 h-3" />
                </Button>
              )}
            </div>

            {/* View Mode Controls */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">View:</span>
              <Button
                variant={viewMode === 'grid-large' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid-large')}
                className="p-2"
              >
                <Grid2X2 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'grid-small' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid-small')}
                className="p-2"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="p-2"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filters Row */}
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${showFilters ? 'block' : 'hidden lg:grid'}`}>
            {/* Brand filter */}
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                {brands.map(brand => (
                  <SelectItem key={brand.id} value={brand.name}>
                    {brand.name} ({products.filter(p => p.brand === brand.name).length})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price range filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-50">Under ₹5 Cr</SelectItem>
                <SelectItem value="50-100">₹5-10 Cr</SelectItem>
                <SelectItem value="100-200">₹10-20 Cr</SelectItem>
                <SelectItem value="over-200">Over ₹20 Cr</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-background/50">
                <SortAsc className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="brand">Brand</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button
              variant="outline"
              onClick={clearAllFilters}
              disabled={!hasActiveFilters}
              className="bg-background/50"
            >
              <X className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>

          {/* Results Summary */}
          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground border-t border-border/50 pt-4">
            <span>
              Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> of{' '}
              <span className="font-semibold text-foreground">{products.length}</span> supercars
            </span>
            
            {hasActiveFilters && (
              <div className="flex items-center gap-2">
                <span>Active filters:</span>
                {searchQuery && (
                  <Badge variant="secondary" className="text-xs">
                    Search: "{searchQuery}"
                  </Badge>
                )}
                {selectedBrand !== 'all' && (
                  <Badge variant="secondary" className="text-xs">
                    Brand: {selectedBrand}
                  </Badge>
                )}
                {priceRange !== 'all' && (
                  <Badge variant="secondary" className="text-xs">
                    Price: {priceRange}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Products grid */}
        {filteredProducts.length > 0 ? (
          <div className={getGridClasses()}>
            {filteredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted/20 flex items-center justify-center">
              <Filter className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">No supercars found</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              We couldn't find any supercars matching your criteria. Try adjusting your filters or search terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={clearAllFilters}
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 rounded-full"
              >
                Clear All Filters
              </Button>
              <Button
                variant="outline"
                onClick={() => setSearchQuery('')}
                className="px-8 rounded-full"
              >
                Clear Search
              </Button>
            </div>
          </div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredProducts.length > 0 && filteredProducts.length >= 20 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 rounded-full"
            >
              Load More Supercars
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
