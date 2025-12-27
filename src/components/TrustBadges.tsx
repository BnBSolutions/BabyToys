import { Leaf, Shield, Heart, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const TrustBadges = () => {
  const { t } = useLanguage();

  const badges = [
    {
      icon: Leaf,
      title: t.home.trust.organic,
      description: t.home.trust.organicDesc,
      color: 'bg-sage-light text-sage-dark',
    },
    {
      icon: Shield,
      title: t.home.trust.safe,
      description: t.home.trust.safeDesc,
      color: 'bg-sky-light text-accent-foreground',
    },
    {
      icon: Heart,
      title: t.home.trust.handmade,
      description: t.home.trust.handmadeDesc,
      color: 'bg-rose-light text-rose-dark',
    },
    {
      icon: Award,
      title: t.home.trust.guarantee,
      description: t.home.trust.guaranteeDesc,
      color: 'bg-muted text-foreground',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-ivory">
      <div className="container-wide">
        <h2 className="font-serif text-3xl lg:text-4xl text-center mb-4">
          {t.home.trust.title}
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-4 rounded-2xl ${badge.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                <badge.icon className="h-7 w-7" />
              </div>
              <h3 className="font-medium text-lg mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
