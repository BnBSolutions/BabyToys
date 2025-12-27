import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { collections } from '@/data/products';

const Collections = () => {
  const { language, t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t.nav.collections} | Little Bloom</title>
        <meta 
          name="description" 
          content="Explore our curated collections of premium organic baby essentials. From nursery basics to gift sets." 
        />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-sage-light/30 to-background">
          <div className="container-wide text-center">
            <h1 className="font-serif text-4xl lg:text-5xl mb-4 animate-fade-in-up">
              {t.home.collections}
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up delay-100">
              {t.home.collectionsSubtitle}
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-12 lg:py-16">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {collections.map((collection, index) => (
                <Link
                  key={collection.id}
                  to={`/shop?collection=${collection.id}`}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
                    <img
                      src={collection.image}
                      alt={collection.name[language]}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <h2 className="font-serif text-2xl lg:text-3xl text-primary-foreground mb-2">
                        {collection.name[language]}
                      </h2>
                      <span className="inline-flex items-center gap-2 text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                        {t.nav.shop}
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Collections;
