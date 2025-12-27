import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/Hero';
import { AgeSelector } from '@/components/AgeSelector';
import { ProductCard } from '@/components/ProductCard';
import { TrustBadges } from '@/components/TrustBadges';
import { CollectionGrid } from '@/components/CollectionGrid';
import { ReviewCard } from '@/components/ReviewCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { products, reviews } from '@/data/products';

const Index = () => {
  const { t } = useLanguage();
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 6);

  return (
    <>
      <Helmet>
        <title>Little Bloom | Premium Organic Baby Essentials</title>
        <meta 
          name="description" 
          content="Premium organic baby clothing, toys, and essentials. GOTS certified, sustainably made with love. Shop by age for newborns to kids." 
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <Hero />

        {/* Shop by Age */}
        <AgeSelector />

        {/* Bestsellers */}
        <section className="py-16 lg:py-24">
          <div className="container-wide">
            <h2 className="font-serif text-3xl lg:text-4xl text-center mb-2">
              {t.home.bestsellers}
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              {t.home.bestsellersSubtitle}
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              {bestsellers.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Collections */}
        <CollectionGrid />

        {/* Reviews */}
        <section className="py-16 lg:py-24">
          <div className="container-wide">
            <h2 className="font-serif text-3xl lg:text-4xl text-center mb-4">
              {t.home.reviews}
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
