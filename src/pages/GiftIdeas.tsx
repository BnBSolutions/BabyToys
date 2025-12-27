import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/ProductCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { products } from '@/data/products';
import { Gift, Heart, Star } from 'lucide-react';

const giftContent = {
  en: {
    title: 'Gift Ideas',
    subtitle: 'Find the perfect present for every little one',
    occasions: [
      { name: 'Baby Shower', emoji: '🍼', description: 'Welcome new arrivals with thoughtful gifts' },
      { name: 'Birthday', emoji: '🎂', description: 'Celebrate another year of growth' },
      { name: 'Holiday', emoji: '🎄', description: 'Spread joy with sustainable presents' },
      { name: 'Just Because', emoji: '💝', description: 'Show your love any day' },
    ],
  },
  ro: {
    title: 'Idei de Cadou',
    subtitle: 'Găsește cadoul perfect pentru fiecare cel mic',
    occasions: [
      { name: 'Baby Shower', emoji: '🍼', description: 'Întâmpină noii veniți cu cadouri atente' },
      { name: 'Zi de Naștere', emoji: '🎂', description: 'Sărbătorește încă un an de creștere' },
      { name: 'Sărbători', emoji: '🎄', description: 'Răspândește bucurie cu cadouri sustenabile' },
      { name: 'Doar Așa', emoji: '💝', description: 'Arată-ți dragostea în orice zi' },
    ],
  },
  ru: {
    title: 'Идеи Подарков',
    subtitle: 'Найдите идеальный подарок для каждого малыша',
    occasions: [
      { name: 'Baby Shower', emoji: '🍼', description: 'Встречайте новорождённых с заботливыми подарками' },
      { name: 'День Рождения', emoji: '🎂', description: 'Отпразднуйте ещё один год роста' },
      { name: 'Праздники', emoji: '🎄', description: 'Дарите радость экологичными подарками' },
      { name: 'Просто Так', emoji: '💝', description: 'Покажите любовь в любой день' },
    ],
  },
};

const GiftIdeas = () => {
  const { language, t } = useLanguage();
  const content = giftContent[language];
  const giftProducts = products.filter((p) => p.isBestseller || p.isNewArrival);

  return (
    <>
      <Helmet>
        <title>{content.title} | Little Bloom</title>
        <meta name="description" content={content.subtitle} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-rose-light/40 to-background">
          <div className="container-wide text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose mb-6 animate-fade-in">
              <Gift className="h-8 w-8 text-rose-dark" />
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl mb-4 animate-fade-in-up">
              {content.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in-up delay-100">
              {content.subtitle}
            </p>
          </div>
        </section>

        {/* Occasions */}
        <section className="py-12 lg:py-16">
          <div className="container-wide">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {content.occasions.map((occasion, index) => (
                <div
                  key={occasion.name}
                  className="group bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                    {occasion.emoji}
                  </span>
                  <h3 className="font-medium mb-2">{occasion.name}</h3>
                  <p className="text-sm text-muted-foreground">{occasion.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gift Products */}
        <section className="py-12 lg:py-16 bg-ivory">
          <div className="container-wide">
            <h2 className="font-serif text-2xl lg:text-3xl text-center mb-8">
              Popular Gift Choices
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {giftProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default GiftIdeas;
