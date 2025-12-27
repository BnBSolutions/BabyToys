// Product images
import organicRomper from '@/assets/products/organic-romper.jpg';
import muslinSwaddles from '@/assets/products/muslin-swaddles.jpg';
import woodenRings from '@/assets/products/wooden-rings.jpg';
import knittedCardigan from '@/assets/products/knitted-cardigan.jpg';
import sleepSack from '@/assets/products/sleep-sack.jpg';
import linenPlaysuit from '@/assets/products/linen-playsuit.jpg';

// Collection images
import nurseryEssentials from '@/assets/collections/nursery-essentials.jpg';
import organicBasics from '@/assets/collections/organic-basics.jpg';
import giftSets from '@/assets/collections/gift-sets.jpg';
import winterCollection from '@/assets/collections/winter-collection.jpg';

export interface Product {
  id: string;
  name: {
    en: string;
    ro: string;
    ru: string;
  };
  description: {
    en: string;
    ro: string;
    ru: string;
  };
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  ageGroup: 'newborn' | 'baby' | 'toddler' | 'kids';
  inStock: boolean;
  rating: number;
  reviews: number;
  materials: {
    en: string;
    ro: string;
    ru: string;
  };
  care: {
    en: string;
    ro: string;
    ru: string;
  };
  isNewArrival?: boolean;
  isBestseller?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: {
      en: 'Organic Cotton Romper',
      ro: 'Salopetă din Bumbac Organic',
      ru: 'Комбинезон из Органического Хлопка',
    },
    description: {
      en: 'Ultra-soft organic cotton romper with gentle snaps for easy dressing. Perfect for sensitive newborn skin.',
      ro: 'Salopetă ultra-moale din bumbac organic cu capse delicate pentru îmbrăcare ușoară. Perfectă pentru pielea sensibilă a nou-născutului.',
      ru: 'Ультрамягкий комбинезон из органического хлопка с нежными кнопками для легкого одевания. Идеален для чувствительной кожи новорожденного.',
    },
    price: 45,
    images: [organicRomper],
    category: 'clothing',
    ageGroup: 'newborn',
    inStock: true,
    rating: 4.9,
    reviews: 234,
    materials: {
      en: '100% GOTS certified organic cotton. Free from harmful chemicals and dyes.',
      ro: '100% bumbac organic certificat GOTS. Fără substanțe chimice și coloranți nocivi.',
      ru: '100% органический хлопок с сертификатом GOTS. Без вредных химикатов и красителей.',
    },
    care: {
      en: 'Machine wash cold, tumble dry low. Use gentle, fragrance-free detergent.',
      ro: 'Spălare la mașină la rece, uscare la temperatura scăzută. Folosiți detergent delicat, fără parfum.',
      ru: 'Машинная стирка в холодной воде, сушка при низкой температуре. Используйте мягкое моющее средство без запаха.',
    },
    isBestseller: true,
  },
  {
    id: '2',
    name: {
      en: 'Muslin Swaddle Blanket Set',
      ro: 'Set Pături de Înfășat din Muselină',
      ru: 'Набор Пелёнок из Муслина',
    },
    description: {
      en: 'Set of 3 breathable muslin swaddle blankets in calming natural tones. Gets softer with every wash.',
      ro: 'Set de 3 pături de înfășat din muselină respirabilă în tonuri naturale calmante. Devin mai moi la fiecare spălare.',
      ru: 'Набор из 3 дышащих муслиновых пелёнок в успокаивающих натуральных тонах. Становятся мягче с каждой стиркой.',
    },
    price: 65,
    images: [muslinSwaddles],
    category: 'bedding',
    ageGroup: 'newborn',
    inStock: true,
    rating: 4.8,
    reviews: 189,
    materials: {
      en: 'Premium organic muslin cotton. Pre-washed for softness.',
      ro: 'Muselină premium din bumbac organic. Pre-spălată pentru moliciune.',
      ru: 'Премиальный органический муслин. Предварительно постиран для мягкости.',
    },
    care: {
      en: 'Machine wash warm, tumble dry medium.',
      ro: 'Spălare la mașină la cald, uscare la temperatura medie.',
      ru: 'Машинная стирка в тёплой воде, сушка при средней температуре.',
    },
    isBestseller: true,
  },
  {
    id: '3',
    name: {
      en: 'Wooden Stacking Rings',
      ro: 'Inele de Stivuit din Lemn',
      ru: 'Деревянные Кольца для Укладывания',
    },
    description: {
      en: 'Classic wooden stacking toy made from sustainable beechwood with non-toxic water-based paints.',
      ro: 'Jucărie clasică de stivuit din lemn de fag sustenabil cu vopsele pe bază de apă non-toxice.',
      ru: 'Классическая деревянная игрушка из экологичного бука с нетоксичными красками на водной основе.',
    },
    price: 32,
    images: [woodenRings],
    category: 'toys',
    ageGroup: 'baby',
    inStock: true,
    rating: 4.9,
    reviews: 156,
    materials: {
      en: 'FSC certified beechwood, water-based non-toxic paints.',
      ro: 'Lemn de fag certificat FSC, vopsele non-toxice pe bază de apă.',
      ru: 'Бук с сертификатом FSC, нетоксичные краски на водной основе.',
    },
    care: {
      en: 'Wipe clean with damp cloth. Do not submerge in water.',
      ro: 'Ștergeți cu o cârpă umedă. Nu cufundați în apă.',
      ru: 'Протирайте влажной тканью. Не погружайте в воду.',
    },
    isNewArrival: true,
  },
  {
    id: '4',
    name: {
      en: 'Knitted Cotton Cardigan',
      ro: 'Cardigan Tricotat din Bumbac',
      ru: 'Вязаный Хлопковый Кардиган',
    },
    description: {
      en: 'Delicate hand-knitted cardigan with wooden buttons. A timeless piece for layering.',
      ro: 'Cardigan delicat tricotat manual cu nasturi din lemn. O piesă atemporală pentru stratificări.',
      ru: 'Нежный кардиган ручной вязки с деревянными пуговицами. Вневременная вещь для многослойности.',
    },
    price: 58,
    images: [knittedCardigan],
    category: 'clothing',
    ageGroup: 'baby',
    inStock: true,
    rating: 4.7,
    reviews: 98,
    materials: {
      en: 'Organic pima cotton, wooden buttons.',
      ro: 'Bumbac organic pima, nasturi din lemn.',
      ru: 'Органический хлопок пима, деревянные пуговицы.',
    },
    care: {
      en: 'Hand wash cold, lay flat to dry.',
      ro: 'Spălare manuală la rece, uscare pe orizontală.',
      ru: 'Ручная стирка в холодной воде, сушить в горизонтальном положении.',
    },
    isBestseller: true,
  },
  {
    id: '5',
    name: {
      en: 'Organic Sleep Sack',
      ro: 'Sac de Dormit Organic',
      ru: 'Органический Спальный Мешок',
    },
    description: {
      en: 'Cozy organic cotton sleep sack with TOG 2.5 rating for year-round comfort.',
      ro: 'Sac de dormit confortabil din bumbac organic cu rating TOG 2.5 pentru confort pe tot parcursul anului.',
      ru: 'Уютный спальный мешок из органического хлопка с рейтингом TOG 2.5 для комфорта круглый год.',
    },
    price: 72,
    images: [sleepSack],
    category: 'bedding',
    ageGroup: 'newborn',
    inStock: true,
    rating: 4.9,
    reviews: 312,
    materials: {
      en: 'Outer: 100% organic cotton. Filling: organic cotton wadding.',
      ro: 'Exterior: 100% bumbac organic. Umplutură: vată din bumbac organic.',
      ru: 'Внешний слой: 100% органический хлопок. Наполнитель: органическая хлопковая вата.',
    },
    care: {
      en: 'Machine wash 40°C, tumble dry low.',
      ro: 'Spălare la mașină 40°C, uscare la temperatura scăzută.',
      ru: 'Машинная стирка 40°C, сушка при низкой температуре.',
    },
    isBestseller: true,
  },
  {
    id: '6',
    name: {
      en: 'Linen Playsuit',
      ro: 'Costum de Joacă din In',
      ru: 'Льняной Комбинезон',
    },
    description: {
      en: 'Breathable linen playsuit perfect for warm days. Features adjustable straps for growing toddlers.',
      ro: 'Costum de joacă din in respirabil, perfect pentru zilele calde. Cu bretele ajustabile pentru copiii în creștere.',
      ru: 'Дышащий льняной комбинезон идеален для тёплых дней. Регулируемые бретели для растущих малышей.',
    },
    price: 48,
    images: [linenPlaysuit],
    category: 'clothing',
    ageGroup: 'toddler',
    inStock: true,
    rating: 4.6,
    reviews: 87,
    materials: {
      en: '100% European flax linen, naturally breathable.',
      ro: '100% in european, respirabil natural.',
      ru: '100% европейский лён, естественно дышащий.',
    },
    care: {
      en: 'Machine wash cold, iron while damp for best results.',
      ro: 'Spălare la mașină la rece, călcați umed pentru cele mai bune rezultate.',
      ru: 'Машинная стирка в холодной воде, гладить влажным для лучшего результата.',
    },
    isNewArrival: true,
  },
];

export const collections = [
  {
    id: 'essentials',
    name: {
      en: 'Nursery Essentials',
      ro: 'Esențiale pentru Cameră',
      ru: 'Всё для Детской',
    },
    image: nurseryEssentials,
  },
  {
    id: 'organic-basics',
    name: {
      en: 'Organic Basics',
      ro: 'Produse de Bază Organice',
      ru: 'Органические Базовые',
    },
    image: organicBasics,
  },
  {
    id: 'gift-sets',
    name: {
      en: 'Gift Sets',
      ro: 'Seturi Cadou',
      ru: 'Подарочные Наборы',
    },
    image: giftSets,
  },
  {
    id: 'seasonal',
    name: {
      en: 'Winter Collection',
      ro: 'Colecția de Iarnă',
      ru: 'Зимняя Коллекция',
    },
    image: winterCollection,
  },
];

export const reviews = [
  {
    id: '1',
    name: 'Sarah M.',
    rating: 5,
    text: {
      en: 'The quality is absolutely incredible. My baby loves the softness of these clothes!',
      ro: 'Calitatea este absolut incredibilă. Bebelușului meu îi place moliciunea acestor haine!',
      ru: 'Качество просто невероятное. Моему малышу нравится мягкость этой одежды!',
    },
    product: 'Organic Cotton Romper',
  },
  {
    id: '2',
    name: 'Elena R.',
    rating: 5,
    text: {
      en: 'Finally found a brand that cares about safety as much as I do. Will be a customer for life.',
      ro: 'În sfârșit am găsit un brand căruia îi pasă de siguranță la fel de mult ca mine. Voi fi clientă pe viață.',
      ru: 'Наконец нашла бренд, который заботится о безопасности так же, как и я. Буду клиентом навсегда.',
    },
    product: 'Wooden Stacking Rings',
  },
  {
    id: '3',
    name: 'Maria K.',
    rating: 5,
    text: {
      en: 'These swaddles are a game changer. So soft and my little one sleeps so peacefully.',
      ro: 'Aceste pături sunt extraordinare. Atât de moi și cel mic doarme atât de liniștit.',
      ru: 'Эти пелёнки - просто находка. Такие мягкие, и малыш спит так спокойно.',
    },
    product: 'Muslin Swaddle Blanket Set',
  },
];
