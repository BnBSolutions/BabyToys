import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Minus, Plus, Heart, Truck, RotateCcw, Shield, Star, ChevronDown } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { products } from '@/data/products';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { toast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);
  const relatedProducts = products.filter((p) => p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <Layout>
        <div className="container-wide py-16 text-center">
          <h1 className="font-serif text-3xl">Product not found</h1>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.name[language]} added to your cart.`,
    });
  };

  return (
    <>
      <Helmet>
        <title>{product.name[language]} | Little Bloom</title>
        <meta name="description" content={product.description[language]} />
      </Helmet>

      <Layout>
        <div className="container-wide py-8 lg:py-12">
          {/* Product Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <img
                  src={product.images[0]}
                  alt={product.name[language]}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-muted cursor-pointer hover:ring-2 ring-primary transition-all">
                    <img
                      src={product.images[0]}
                      alt=""
                      className="h-full w-full object-cover opacity-60"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {product.isBestseller && (
                  <span className="px-3 py-1 text-xs font-medium bg-rose text-rose-dark rounded-full">
                    Bestseller
                  </span>
                )}
                {product.isNewArrival && (
                  <span className="px-3 py-1 text-xs font-medium bg-sky text-accent-foreground rounded-full">
                    New
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl lg:text-4xl mb-4">
                {product.name[language]}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-semibold">€{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    €{product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description[language]}
              </p>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-sage' : 'bg-destructive'}`} />
                <span className={product.inStock ? 'text-sage-dark' : 'text-destructive'}>
                  {product.inStock ? t.product.inStock : t.product.outOfStock}
                </span>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 mb-6">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    className="p-3 hover:bg-muted transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    className="p-3 hover:bg-muted transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  {t.product.addToCart}
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-border mb-6">
                <div className="text-center">
                  <Truck className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <span className="text-xs text-muted-foreground">Free Shipping</span>
                </div>
                <div className="text-center">
                  <RotateCcw className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <span className="text-xs text-muted-foreground">Easy Returns</span>
                </div>
                <div className="text-center">
                  <Shield className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <span className="text-xs text-muted-foreground">2 Year Warranty</span>
                </div>
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="description">
                  <AccordionTrigger>{t.product.description}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.description[language]}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="materials">
                  <AccordionTrigger>{t.product.materials}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.materials[language]}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care">
                  <AccordionTrigger>{t.product.care}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {product.care[language]}
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="guarantee">
                  <AccordionTrigger>{t.product.guarantee}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">
                      All Little Bloom products come with a 2-year guarantee against manufacturing defects.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Related Products */}
          <section className="mt-16 lg:mt-24">
            <h2 className="font-serif text-2xl lg:text-3xl mb-8">
              {t.product.youMayAlsoLike}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>

        {/* Mobile Sticky Add to Cart */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-50">
          <div className="flex items-center gap-4">
            <div>
              <div className="text-sm text-muted-foreground">{product.name[language]}</div>
              <div className="text-lg font-semibold">€{product.price}</div>
            </div>
            <Button 
              variant="hero" 
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              {t.product.addToCart}
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetail;
