import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t.nav.cart} | Little Bloom</title>
      </Helmet>

      <Layout>
        <div className="container-wide py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="font-serif text-3xl lg:text-4xl mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything yet. Start shopping to fill your cart with beautiful organic essentials.
            </p>
            <Link to="/shop">
              <Button variant="hero" size="xl" className="group">
                Start Shopping
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
