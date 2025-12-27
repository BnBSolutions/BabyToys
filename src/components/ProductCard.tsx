import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { language, t } = useLanguage();

  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`}>
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted mb-4">
          <img
            src={product.images[0]}
            alt={product.name[language]}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNewArrival && (
              <span className="px-3 py-1 text-xs font-medium bg-sky text-accent-foreground rounded-full">
                New
              </span>
            )}
            {product.isBestseller && (
              <span className="px-3 py-1 text-xs font-medium bg-rose text-rose-dark rounded-full">
                Bestseller
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button 
            className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4" />
          </button>

          {/* Quick Add */}
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="hero" className="w-full" size="sm">
              {t.product.addToCart}
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-1">
          <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {product.name[language]}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3.5 w-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'text-amber-400 fill-amber-400'
                      : 'text-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-foreground">
              €{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                €{product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
