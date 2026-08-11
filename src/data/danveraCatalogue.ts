export interface ProductItem {
  id: string;
  name: string;
  tamilName?: string;
  chapter: number;
  chapterTitle: string;
  category: string;
  description: string;
  imageUrl: string;
  tag?: string;
  usageTip?: string;
  isPopular?: boolean;
}

export interface ChapterInfo {
  number: number;
  title: string;
  subtitle: string;
  description: string;
}

export const DANVERA_INFO = {
  companyName: "DANVERA",
  tagline: "A serendipity of pure flavours",
  subTagline: "SMALL BATCH | FARM DIRECT",
  origin: "Karur, Tamil Nadu",
  instagram: "@_danvera.in",
  instagramUrl: "https://instagram.com/_danvera.in",
  whatsapp: "+91 90357 74801",
  whatsappClean: "919035774801",
  email: "hello@danvera.in",
  logoUrl: "/logo-circle.png",
  pricingNote: "DM @_danvera.in or WhatsApp +91 90357 74801 for pricing & nationwide delivery"
};

export const CHAPTERS: ChapterInfo[] = [
  {
    number: 1,
    title: "Masala Powders & Instant Mixes",
    subtitle: "Stone-Ground Essentials",
    description: "Stone-ground, small-batch spice blends — the everyday essentials of a South Indian kitchen, made the way grandmothers intended."
  },
  {
    number: 2,
    title: "The Podi Collection",
    subtitle: "Dry Powders for Idli & Rice",
    description: "Dry powders to spoon over hot idli, dosa or rice with a drizzle of sesame oil — each one stone-ground in small batches."
  },
  {
    number: 3,
    title: "Herbal, Wellness & Botanicals",
    subtitle: "Traditional Grains, Leaves & Teas",
    description: "Sun-dried leaves, flowers and grains — traditional additions to milk, water and dough, and a few for the mehendi tray."
  },
  {
    number: 4,
    title: "Traditional Sweeteners & Extracts",
    subtitle: "Unrefined Jaggery & Essence",
    description: "Unrefined, mineral-rich sweeteners and fragrant extracts made the way they've been made for generations."
  },
  {
    number: 5,
    title: "Small-Batch Favourites",
    subtitle: "Hand-Rolled Treats & Farm Direct",
    description: "Two more things worth ordering — hand-rolled festive laddus and farm-direct country eggs, both made the honest way."
  }
];

export const PRODUCTS: ProductItem[] = [
  // Chapter 1: Masala Powders & Instant Mixes
  {
    id: "sambar-powder",
    name: "Sambar Powder",
    chapter: 1,
    chapterTitle: "Masala Powders & Instant Mixes",
    category: "Masalas",
    description: "A robust blend of roasted lentils, coriander and red chillies — the everyday soul of a South Indian kitchen.",
    imageUrl: "/products/sambar-powder.png",
    tag: "Kitchen Essential",
    usageTip: "Simmer with vegetables and boiled dal for traditional South Indian sambar.",
    isPopular: true
  },
  {
    id: "curry-coriander-powder",
    name: "Curry Coriander Powder",
    chapter: 1,
    chapterTitle: "Masala Powders & Instant Mixes",
    category: "Masalas",
    description: "Our signature upgrade — coriander seeds slow-roasted with fresh curry leaves for a deeper, earthier aroma than the everyday version.",
    imageUrl: "/products/curry-coriander-powder.png",
    tag: "Signature Upgrade",
    usageTip: "Use in curries, gravies, and stir-fries for an extra rich herbal aroma.",
    isPopular: true
  },
  {
    id: "instant-sambar-mix",
    name: "Instant Sambar Mix",
    chapter: 1,
    chapterTitle: "Masala Powders & Instant Mixes",
    category: "Instant Mixes",
    description: "Just add vegetables and water — our sambar powder pre-blended with tamarind and spice for a quick, authentic pot.",
    imageUrl: "/products/instant-sambar-mix.png",
    tag: "Quick & Easy",
    usageTip: "Boil water with your favorite vegetables, add Instant Sambar Mix, and simmer 5 minutes."
  },
  {
    id: "instant-rasam-mix",
    name: "Instant Rasam Mix",
    chapter: 1,
    chapterTitle: "Masala Powders & Instant Mixes",
    category: "Instant Mixes",
    description: "Tangy, peppery and light — a spoonful turns hot water into comforting rasam in minutes.",
    imageUrl: "/products/instant-rasam-mix.png",
    tag: "Comfort Food",
    usageTip: "Add a spoonful to boiling hot water with fresh coriander leaves for instant medicinal rasam."
  },

  // Chapter 2: The Podi Collection
  {
    id: "groundnut-idli-podi",
    name: "Groundnut Idli Podi",
    chapter: 2,
    chapterTitle: "The Podi Collection",
    category: "Podi",
    description: "Roasted peanuts ground with red chillies and curry leaves; nutty, spicy, and perfect with a drizzle of sesame oil.",
    imageUrl: "/products/groundnut-idli-podi.png",
    tag: "Bestseller",
    usageTip: "Spoon over hot idli or dosa with cold-pressed gingelly / sesame oil.",
    isPopular: true
  },
  {
    id: "curry-leaf-idli-podi",
    name: "Curry Leaf Idli Podi",
    chapter: 2,
    chapterTitle: "The Podi Collection",
    category: "Podi",
    description: "Fresh curry leaves, dals and spices stone-ground into a fragrant, slightly crisp podi.",
    imageUrl: "/products/curry-leaf-idli-podi.png",
    tag: "Herbal Podi",
    usageTip: "Mix with hot steamed rice and ghee for a fragrant green podi rice."
  },
  {
    id: "vallarai-podi",
    name: "Vallarai Podi",
    chapter: 2,
    chapterTitle: "The Podi Collection",
    category: "Herbal Podi",
    description: "Made from fresh vallarai (gotu kola) leaves, dried and ground the traditional way — a staple herbal podi from grandmother's kitchen.",
    imageUrl: "/products/vallarai-podi.png",
    tag: "Grandmother's Recipe",
    usageTip: "Valued traditionally for memory & focus. Enjoy daily with hot rice and ghee."
  },
  {
    id: "pirandai-podi",
    name: "Pirandai Podi",
    chapter: 2,
    chapterTitle: "The Podi Collection",
    category: "Herbal Podi",
    description: "Pirandai (veldt grape) stem, sun-dried and spiced — a traditional podi valued for its distinct tang.",
    imageUrl: "/products/pirandai-podi.png",
    tag: "Digestive Staple",
    usageTip: "Valued traditionally for digestive health and joint vitality."
  },

  // Chapter 3: Herbal, Wellness & Botanicals
  {
    id: "sathu-maavu",
    name: "Sathu Maavu",
    chapter: 3,
    chapterTitle: "Herbal, Wellness & Botanicals",
    category: "Health Mix",
    description: "A multigrain, multi-millet health mix, roasted and ground the traditional way — stirred into warm milk.",
    imageUrl: "/products/sathu-maavu.png",
    tag: "Multigrain",
    usageTip: "Whisk into warm milk or water, cook 2 minutes with karupatti for nourishing porridge.",
    isPopular: true
  },
  {
    id: "moringa-powder",
    name: "Moringa Powder",
    chapter: 3,
    chapterTitle: "Herbal, Wellness & Botanicals",
    category: "Wellness",
    description: "Sun-dried moringa leaves, stone-ground into a fine green powder — stir into water, smoothies or dough.",
    imageUrl: "/products/moringa-powder.png",
    tag: "Superfood",
    usageTip: "Add a teaspoon to green smoothies, morning warm water, or chapatis."
  },
  {
    id: "dried-marudhani-powder",
    name: "Dried Marudhani Powder",
    chapter: 3,
    chapterTitle: "Herbal, Wellness & Botanicals",
    category: "Botanicals",
    description: "Pure, stone-ground henna leaf powder, dried the traditional way — for natural mehendi. For dye, not for eating.",
    imageUrl: "/products/dried-marudhani-powder.png",
    tag: "Natural Henna",
    usageTip: "Mix with tea water and lemon juice for natural hair stain or mehendi application."
  },
  {
    id: "butterfly-pea-tea",
    name: "Butterfly Pea (Dried for Tea)",
    chapter: 3,
    chapterTitle: "Herbal, Wellness & Botanicals",
    category: "Herbal Tea",
    description: "Sun-dried butterfly pea flowers that turn hot water a brilliant blue; naturally caffeine-free.",
    imageUrl: "/products/butterfly-pea-tea.png",
    tag: "Caffeine Free",
    usageTip: "Steep 4-5 flowers in hot water. Add a squeeze of lemon to watch it turn vivid purple!"
  },
  {
    id: "dried-hibiscus-tea",
    name: "Dried Hibiscus (Dried for Tea)",
    chapter: 3,
    chapterTitle: "Herbal, Wellness & Botanicals",
    category: "Herbal Tea",
    description: "Tart, ruby-red hibiscus petals, sun-dried for a refreshing, tangy infusion.",
    imageUrl: "/products/dried-hibiscus-tea.png",
    tag: "Ruby Infusion",
    usageTip: "Brew with hot water and honey for warm tea, or chill over ice with lemon."
  },
  {
    id: "dried-beetel-leaf-tea",
    name: "Dried Beetel Leaf (For Tea)",
    chapter: 3,
    chapterTitle: "Herbal, Wellness & Botanicals",
    category: "Herbal Tea",
    description: "Beetel leaves, dried and packed for a traditional, aromatic brew.",
    imageUrl: "/products/dried-beetel-leaf-tea.png",
    tag: "Aromatic Brew",
    usageTip: "Steep in boiling water with a pinch of black pepper for an soothing traditional herbal drink."
  },

  // Chapter 4: Traditional Sweeteners & Extracts
  {
    id: "karupatti",
    name: "Karupatti",
    chapter: 4,
    chapterTitle: "Traditional Sweeteners & Extracts",
    category: "Sweeteners",
    description: "Traditional palm jaggery, unrefined and mineral-rich, set into blocks the old-fashioned way.",
    imageUrl: "/products/karupatti.png",
    tag: "Unrefined Palm Jaggery",
    usageTip: "Break into coffee, tea, or desserts for authentic caramel sweetness rich in iron.",
    isPopular: true
  },
  {
    id: "brown-sugar",
    name: "Brown Sugar",
    chapter: 4,
    chapterTitle: "Traditional Sweeteners & Extracts",
    category: "Sweeteners",
    description: "Naturally processed cane sugar with its molasses intact, for a warmer sweetness than refined white sugar.",
    imageUrl: "/products/brown-sugar.png",
    tag: "Natural Molasses",
    usageTip: "Use as a 1:1 replacement for white sugar in baking, chai, and morning beverages."
  },
  {
    id: "karupatti-essence",
    name: "Karupatti Essence",
    chapter: 4,
    chapterTitle: "Traditional Sweeteners & Extracts",
    category: "Extracts & Syrup",
    description: "Palm jaggery reduced into a rich liquid syrup — for coffee, sweets, and everyday cooking.",
    imageUrl: "/products/karupatti-essence.png",
    tag: "Liquid Syrup",
    usageTip: "Drizzle over pancakes, appam, ice cream, or stir directly into South Indian filter coffee."
  },
  {
    id: "urundai-vellam",
    name: "Urundai Vellam",
    chapter: 4,
    chapterTitle: "Traditional Sweeteners & Extracts",
    category: "Sweeteners",
    description: "Palm jaggery rolled into bite-sized balls, ready to snack on or melt into your cooking.",
    imageUrl: "/products/urundai-vellam.png",
    tag: "Bite-Sized",
    usageTip: "Perfect bite-sized jaggery balls for quick snacking or melting into payasam."
  },
  {
    id: "rosemilk-essence",
    name: "Panneer Rosemilk Essence",
    chapter: 4,
    chapterTitle: "Traditional Sweeteners & Extracts",
    category: "Extracts & Syrup",
    description: "Crafted from fragrant panneer rose petals, distilled the traditional way into a rich, aromatic essence for authentic rose milk.",
    imageUrl: "/products/rosemilk-essence.png",
    tag: "Panneer Rose Petals",
    usageTip: "Stir 1-2 drops into chilled milk with sweet basil seeds for nostalgic street-style rose milk.",
    isPopular: true
  },

  // Chapter 5: Small-Batch Favourites
  {
    id: "traditional-laddus",
    name: "Traditional Laddu Collection",
    chapter: 5,
    chapterTitle: "Small-Batch Favourites",
    category: "Sweets & Laddus",
    description: "Hand-rolled laddus made the traditional way with millets, sesame and curry leaf — Kambu Laddu, Yellu Laddu, Karuvepillai Laddu.",
    imageUrl: "/products/traditional-laddus.png",
    tag: "Hand-Rolled Specials",
    usageTip: "Wholesome, easy gifting option for festivals, celebrations, or treating yourself."
  },
  {
    id: "country-eggs",
    name: "Free-Range Country Eggs",
    chapter: 5,
    chapterTitle: "Small-Batch Favourites",
    category: "Farm Direct",
    description: "Free-range, farm-direct country eggs from birds raised on natural feed — richer yolks, better flavour, the way eggs used to taste.",
    imageUrl: "/products/country-eggs.png",
    tag: "Farm Direct",
    usageTip: "Delivered fresh from free-range Karur farms with deep orange yolks."
  }
];
