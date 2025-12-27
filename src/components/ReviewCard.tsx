import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ReviewCardProps {
  review: {
    id: string;
    name: string;
    rating: number;
    text: {
      en: string;
      ro: string;
      ru: string;
    };
    product: string;
  };
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const { language } = useLanguage();

  return (
    <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
      <Quote className="h-8 w-8 text-rose mb-4" />
      
      <p className="text-foreground leading-relaxed mb-4">
        "{review.text[language]}"
      </p>

      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < review.rating
                ? 'text-amber-400 fill-amber-400'
                : 'text-muted-foreground/30'
            }`}
          />
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="font-medium text-foreground">{review.name}</span>
        <span className="text-sm text-muted-foreground">
          {review.product}
        </span>
      </div>
    </div>
  );
};
