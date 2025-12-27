import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { products } from '@/data/products';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Shop = () => {
  const { language, t } = useLanguage();
  const [searchParams] = useSearchParams();
  const ageFilter = searchParams.get('age');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = ageFilter
    ? products.filter((p) => p.ageGroup === ageFilter)
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  return (
    <>
      <Helmet>
        <title>{t.shop.title} | Little Bloom</title>
        <meta 
          name="description" 
          content="Shop our collection of premium organic baby essentials. Find clothing, toys, and bedding for newborns to kids." 
        />
      </Helmet>

      <Layout>
        <div className="container-wide py-8 lg:py-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="font-serif text-3xl lg:text-4xl mb-2">{t.shop.title}</h1>
              <p className="text-muted-foreground">
                {sortedProducts.length} {t.shop.results}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                {t.shop.filter}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    {t.shop.sort}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {sortOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={sortBy === option.value ? 'bg-muted' : ''}
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Age Filters */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {['all', 'newborn', 'baby', 'toddler', 'kids'].map((age) => (
              <Button
                key={age}
                variant={(!ageFilter && age === 'all') || ageFilter === age ? 'default' : 'outline'}
                size="sm"
                className="whitespace-nowrap"
                onClick={() => {
                  const url = new URL(window.location.href);
                  if (age === 'all') {
                    url.searchParams.delete('age');
                  } else {
                    url.searchParams.set('age', age);
                  }
                  window.history.pushState({}, '', url);
                  window.location.reload();
                }}
              >
                {age === 'all' ? 'All Ages' : t.home.ages[age as keyof typeof t.home.ages]}
              </Button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {sortedProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No products found</p>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Shop;
