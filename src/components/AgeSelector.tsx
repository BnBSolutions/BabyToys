import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const AgeSelector = () => {
  const { t } = useLanguage();

  const ageGroups = [
    { 
      id: 'newborn', 
      label: t.home.ages.newborn,
      color: 'from-rose-light to-rose/30',
      emoji: '👶',
    },
    { 
      id: 'baby', 
      label: t.home.ages.baby,
      color: 'from-sky-light to-sky/30',
      emoji: '🧒',
    },
    { 
      id: 'toddler', 
      label: t.home.ages.toddler,
      color: 'from-sage-light to-sage/30',
      emoji: '🚶',
    },
    { 
      id: 'kids', 
      label: t.home.ages.kids,
      color: 'from-muted to-accent/30',
      emoji: '🎨',
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container-wide">
        <h2 className="font-serif text-3xl lg:text-4xl text-center mb-4">
          {t.home.shopByAge}
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {ageGroups.map((age, index) => (
            <Link
              key={age.id}
              to={`/shop?age=${age.id}`}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`relative aspect-square rounded-2xl bg-gradient-to-br ${age.color} p-6 flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-medium group-hover:scale-[1.02]`}>
                <span className="text-5xl lg:text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {age.emoji}
                </span>
                <span className="font-medium text-foreground text-center">
                  {age.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
