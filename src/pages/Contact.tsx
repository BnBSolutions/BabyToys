import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const contactContent = {
  en: {
    title: 'Contact Us',
    subtitle: 'We\'d love to hear from you',
    form: {
      name: 'Your Name',
      email: 'Email Address',
      subject: 'Subject',
      message: 'Your Message',
      send: 'Send Message',
    },
    info: {
      email: 'hello@littlebloom.com',
      phone: '+40 123 456 789',
      address: 'Bucharest, Romania',
      hours: 'Mon-Fri: 9AM - 6PM',
    },
  },
  ro: {
    title: 'Contactează-ne',
    subtitle: 'Ne-ar plăcea să auzim de la tine',
    form: {
      name: 'Numele Tău',
      email: 'Adresa de Email',
      subject: 'Subiect',
      message: 'Mesajul Tău',
      send: 'Trimite Mesajul',
    },
    info: {
      email: 'hello@littlebloom.com',
      phone: '+40 123 456 789',
      address: 'București, România',
      hours: 'Luni-Vineri: 9:00 - 18:00',
    },
  },
  ru: {
    title: 'Свяжитесь с Нами',
    subtitle: 'Мы будем рады услышать вас',
    form: {
      name: 'Ваше Имя',
      email: 'Email Адрес',
      subject: 'Тема',
      message: 'Ваше Сообщение',
      send: 'Отправить',
    },
    info: {
      email: 'hello@littlebloom.com',
      phone: '+40 123 456 789',
      address: 'Бухарест, Румыния',
      hours: 'Пн-Пт: 9:00 - 18:00',
    },
  },
};

const Contact = () => {
  const { language } = useLanguage();
  const content = contactContent[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
  };

  return (
    <>
      <Helmet>
        <title>{content.title} | Little Bloom</title>
        <meta name="description" content={content.subtitle} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-sky-light/30 to-background">
          <div className="container-wide text-center">
            <h1 className="font-serif text-4xl lg:text-5xl mb-4 animate-fade-in-up">
              {content.title}
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in-up delay-100">
              {content.subtitle}
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 lg:py-20">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="animate-fade-in-up">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {content.form.name}
                      </label>
                      <Input placeholder={content.form.name} required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        {content.form.email}
                      </label>
                      <Input type="email" placeholder={content.form.email} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {content.form.subject}
                    </label>
                    <Input placeholder={content.form.subject} required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {content.form.message}
                    </label>
                    <Textarea 
                      placeholder={content.form.message} 
                      rows={6} 
                      required 
                    />
                  </div>
                  <Button variant="hero" size="lg" type="submit">
                    {content.form.send}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 animate-fade-in-up delay-200">
                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-sage-light">
                      <Mail className="h-5 w-5 text-sage-dark" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">{content.info.email}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-rose-light">
                      <Phone className="h-5 w-5 text-rose-dark" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">{content.info.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-sky-light">
                      <MapPin className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-muted-foreground">{content.info.address}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-muted">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Hours</h3>
                      <p className="text-muted-foreground">{content.info.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
