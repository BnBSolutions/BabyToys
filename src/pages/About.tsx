import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { TrustBadges } from '@/components/TrustBadges';
import { useLanguage } from '@/contexts/LanguageContext';

const aboutContent = {
  en: {
    title: 'Our Story',
    subtitle: 'Born from love, made with care',
    story: `Little Bloom started with a simple belief: every baby deserves the gentlest, safest, and most beautiful things we can create.

As new parents ourselves, we struggled to find products that met our standards for quality, safety, and sustainability. So we decided to make them ourselves.

Every piece in our collection is thoughtfully designed in our studio and crafted using only the finest organic materials. We work with small, family-run factories across Europe who share our commitment to ethical production and exceptional craftsmanship.

Our mission goes beyond creating beautiful baby essentials. We're building a community of mindful parents who believe in investing in quality over quantity, in supporting sustainable practices, and in passing on heirlooms that can be cherished for generations.`,
    values: [
      {
        title: 'Sustainability',
        description: 'We use only organic, sustainably sourced materials and work with eco-conscious production partners.',
      },
      {
        title: 'Safety First',
        description: 'Every product undergoes rigorous testing to meet and exceed the highest EU safety standards.',
      },
      {
        title: 'Timeless Design',
        description: 'We create pieces meant to be passed down, not thrown away. Quality that lasts generations.',
      },
    ],
  },
  ro: {
    title: 'Povestea Noastră',
    subtitle: 'Născută din dragoste, făcută cu grijă',
    story: `Little Bloom a început cu o credință simplă: fiecare bebeluș merită cele mai delicate, sigure și frumoase lucruri pe care le putem crea.

Ca părinți noi, ne-a fost greu să găsim produse care să corespundă standardelor noastre de calitate, siguranță și sustenabilitate. Așa că am decis să le facem noi înșine.

Fiecare piesă din colecția noastră este proiectată cu atenție în studioul nostru și confecționată folosind doar cele mai fine materiale organice. Lucrăm cu fabrici mici, familiale din Europa care împărtășesc angajamentul nostru pentru producție etică și măiestrie excepțională.

Misiunea noastră merge dincolo de crearea esențialelor frumoase pentru bebeluși. Construim o comunitate de părinți conștienți care cred în investiția în calitate peste cantitate, în susținerea practicilor durabile și în transmiterea moștenirilor care pot fi prețuite generații la rând.`,
    values: [
      {
        title: 'Sustenabilitate',
        description: 'Folosim doar materiale organice, aprovizionate sustenabil și lucrăm cu parteneri de producție eco-conștienți.',
      },
      {
        title: 'Siguranța pe Primul Loc',
        description: 'Fiecare produs trece prin teste riguroase pentru a îndeplini și depăși cele mai înalte standarde de siguranță UE.',
      },
      {
        title: 'Design Atemporal',
        description: 'Creăm piese destinate să fie transmise, nu aruncate. Calitate care durează generații.',
      },
    ],
  },
  ru: {
    title: 'Наша История',
    subtitle: 'Рождённая из любви, созданная с заботой',
    story: `Little Bloom началась с простой веры: каждый малыш заслуживает самых нежных, безопасных и красивых вещей, которые мы можем создать.

Как новые родители, мы с трудом находили продукты, соответствующие нашим стандартам качества, безопасности и экологичности. Поэтому мы решили делать их сами.

Каждое изделие в нашей коллекции тщательно разработано в нашей студии и изготовлено из лучших органических материалов. Мы работаем с небольшими семейными фабриками по всей Европе, которые разделяют наше стремление к этичному производству и исключительному мастерству.

Наша миссия выходит за рамки создания красивых детских товаров. Мы строим сообщество осознанных родителей, которые верят в качество, а не количество, поддерживают экологичные практики и передают семейные реликвии, которые будут цениться поколениями.`,
    values: [
      {
        title: 'Устойчивость',
        description: 'Мы используем только органические, устойчиво добытые материалы и работаем с экологически сознательными партнёрами.',
      },
      {
        title: 'Безопасность Прежде Всего',
        description: 'Каждый продукт проходит строгие испытания для соответствия и превышения высочайших стандартов безопасности ЕС.',
      },
      {
        title: 'Вневременной Дизайн',
        description: 'Мы создаём вещи, предназначенные для передачи, а не выбрасывания. Качество, которое длится поколениями.',
      },
    ],
  },
};

const About = () => {
  const { language } = useLanguage();
  const content = aboutContent[language];

  return (
    <>
      <Helmet>
        <title>{content.title} | Little Bloom</title>
        <meta name="description" content={content.subtitle} />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative py-24 lg:py-32 bg-gradient-to-b from-rose-light/50 to-background">
          <div className="container-wide text-center">
            <h1 className="font-serif text-4xl lg:text-6xl mb-4 animate-fade-in-up">
              {content.title}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up delay-100">
              {content.subtitle}
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-24">
          <div className="container-wide">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                {content.story.split('\n\n').map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="text-muted-foreground leading-relaxed mb-6 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-24 bg-ivory">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8">
              {content.values.map((value, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustBadges />
      </Layout>
    </>
  );
};

export default About;
