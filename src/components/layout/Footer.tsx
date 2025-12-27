import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ivory border-t border-border">
      {/* Newsletter Section */}
      <div className="container-wide py-16">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="font-serif text-3xl mb-3">{t.footer.newsletter}</h3>
          <p className="text-muted-foreground mb-6">{t.footer.newsletterSubtitle}</p>
          <form className="flex gap-3 flex-col sm:flex-row">
            <Input 
              type="email" 
              placeholder={t.footer.emailPlaceholder}
              className="flex-1 h-12 bg-background"
            />
            <Button variant="hero" size="lg">
              {t.footer.subscribe}
            </Button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="container-wide py-12">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <Link to="/" className="inline-block font-serif text-2xl font-semibold mb-4">
                <span className="text-primary">Little</span> Bloom
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Premium organic essentials for your little one. Made with love, designed for comfort.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Customer Care */}
            <div>
              <h4 className="font-medium mb-4">{t.footer.customerCare}</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.contact}
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.faq}
                  </Link>
                </li>
                <li>
                  <Link to="/guarantee" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.guarantee}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-medium mb-4">{t.footer.company}</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.about}
                  </Link>
                </li>
                <li>
                  <Link to="/collections" className="text-muted-foreground hover:text-foreground transition-colors">
                    {t.nav.collections}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-medium mb-4">{t.footer.legal}</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border">
        <div className="container-wide py-6">
          <p className="text-sm text-muted-foreground text-center flex items-center justify-center gap-1">
            {t.footer.copyright} Made with <Heart className="h-4 w-4 text-rose fill-rose" /> for little ones.
          </p>
        </div>
      </div>
    </footer>
  );
};
