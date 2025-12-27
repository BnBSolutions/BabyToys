import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { collections } from '@/data/products';

export const CollectionGrid = () => {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="container-wide">
        <h2 className="font-serif text-3xl lg:text-4xl text-center mb-2">
          {t.home.collections}
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          {t.home.collectionsSubtitle}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.name[language]}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <h3 className="font-serif text-lg lg:text-xl text-primary-foreground mb-2">
                    {collection.name[language]}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                    {t.nav.shop}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
