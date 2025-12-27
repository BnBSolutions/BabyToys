import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Gift } from 'lucide-react';
import heroBaby from '@/assets/hero-baby.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-light/30 via-background to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-sage-light blur-3xl animate-float" />
        <div className="absolute bottom-40 right-40 w-48 h-48 rounded-full bg-rose-light blur-3xl animate-float delay-1000" />
        <div className="absolute top-60 right-10 w-32 h-32 rounded-full bg-sky-light blur-2xl animate-float delay-500" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-sage-light text-sage-dark text-sm font-medium mb-6 animate-fade-in">
              ✨ Organic & Sustainable
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 animate-fade-in-up">
              {t.hero.title}
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-in-up delay-100">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-200">
              <Link to="/shop">
                <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                  {t.hero.cta}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/gift-ideas">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto group">
                  <Gift className="h-5 w-5" />
                  {t.hero.secondaryCta}
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 animate-fade-in delay-300">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-muted"
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">2,400+</span>
                <span className="text-muted-foreground"> happy families</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block animate-fade-in delay-200">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted shadow-glow">
              <img 
                src={heroBaby} 
                alt="Adorable baby in organic cotton" 
                className="h-full w-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-medium animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <div className="font-medium">100% Organic</div>
                  <div className="text-sm text-muted-foreground">GOTS Certified</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-medium animate-float delay-700">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <div className="font-semibold">4.9/5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
