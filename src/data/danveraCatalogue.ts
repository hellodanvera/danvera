export interface PriceOption {
  weight: string;
  price: number;
}

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
  priceOptions: PriceOption[];
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
  instagram: "@danvera.in_",
  instagramUrl: "https://instagram.com/danvera.in_",
  whatsapp: "+91 90357 74801",
  whatsappClean: "919035774801",
  email: "hello@danvera.in",
  logoUrl: "/logo-circle.png",
  pricingNote: "Direct small-batch order via WhatsApp (+91 90357 74801) with nationwide delivery"
};

export const CHAPTERS: ChapterInfo[] = [
  {
    number: 1,
    title: "Masala & Spice Powders",
    subtitle: "Stone-Ground Kitchen Essentials",
    description: "Stone-ground, small-batch single spices and traditional curry blends made the honest, traditional way."
  },
  {
    number: 2,
    title: "Podis & Thokkus",
    subtitle: "Dry Powders & Savoury Preserves",
    description: "Gunpowder blends, lentil powders, herbal podis to spoon over hot idli/dosa, and traditional jarred thokku preserves."
  },
  {
    number: 3,
    title: "Instant Mixes & Soups",
    subtitle: "Quick Meals & Nourishing Broths",
    description: "Convenient instant sambar, rasam, and traditional herbal soup powders pre-blended for quick, authentic meals."
  },
  {
    number: 4,
    title: "Herbal Teas & Wellness",
    subtitle: "Botanical Teas & Multigrain Mixes",
    description: "Sun-dried flower & leaf teas, superfood powders, and wholesome multigrain porridge mixes."
  },
  {
    number: 5,
    title: "Natural Sweeteners & Syrups",
    subtitle: "Unrefined Jaggery & Essence",
    description: "Unrefined palm karupatti blocks, crushed cane jaggery, and artisanal rose milk & palm jaggery essences."
  },
  {
    number: 6,
    title: "Heritage & Farm Fresh",
    subtitle: "Hand-Rolled Laddus & Farm Specials",
    description: "Hand-rolled millet laddus, free-range farm country eggs, and natural aromatic sambrani."
  }
];

export const PRODUCTS: ProductItem[] = [
  // Chapter 1: Masala & Spice Powders
  {
    id: "sambar-powder",
    name: "Sambar Powder",
    chapter: 1,
    chapterTitle: "Masala & Spice Powders",
    category: "Masala & Spice Powders",
    description: "A robust blend of roasted lentils, coriander and red chillies — the everyday soul of a South Indian kitchen.",
    imageUrl: "/products/sambar-powder.png",
    tag: "Kitchen Essential",
    usageTip: "Simmer with vegetables and boiled dal for traditional South Indian sambar.",
    isPopular: true,
    priceOptions: [
      { weight: "250g", price: 250 },
      { weight: "500g", price: 480 },
      { weight: "1kg", price: 990 }
    ]
  },
  {
    id: "curry-coriander-powder",
    name: "Curry Coriander Powder",
    chapter: 1,
    chapterTitle: "Masala & Spice Powders",
    category: "Masala & Spice Powders",
    description: "Our signature upgrade — coriander seeds slow-roasted with fresh curry leaves for a deeper, earthier aroma than the everyday version.",
    imageUrl: "/products/curry-coriander-powder.png",
    tag: "Signature Upgrade",
    usageTip: "Use in curries, gravies, and stir-fries for an extra rich herbal aroma.",
    isPopular: true,
    priceOptions: [
      { weight: "250g", price: 240 },
      { weight: "500g", price: 470 },
      { weight: "1kg", price: 970 }
    ]
  },
  {
    id: "turmeric-powder",
    name: "Turmeric Powder",
    chapter: 1,
    chapterTitle: "Masala & Spice Powders",
    category: "Masala & Spice Powders",
    description: "Pure, high-curcumin farm turmeric root, stone-ground to preserve vibrant color and authentic aroma.",
    imageUrl: "/products/turmeric-powder.png",
    tag: "Pure Farm Spice",
    usageTip: "Pinch into daily warm milk, curries, and lentil tadka.",
    isPopular: true,
    priceOptions: [
      { weight: "100g", price: 100 },
      { weight: "250g", price: 250 },
      { weight: "500g", price: 500 },
      { weight: "1kg", price: 1000 }
    ]
  },
  {
    id: "red-chilli-powder",
    name: "Red Chilli Powder",
    chapter: 1,
    chapterTitle: "Masala & Spice Powders",
    category: "Masala & Spice Powders",
    description: "Sun-dried red chillies stone-ground for rich vibrant color and balanced heat without artificial coloring.",
    imageUrl: "/products/red-chilli-powder.png",
    tag: "Stone-Ground",
    usageTip: "Add to gravies, marinades, and stir-fries for rich color and heat.",
    priceOptions: [
      { weight: "100g", price: 100 },
      { weight: "250g", price: 250 }
    ]
  },

  // Chapter 2: Podis & Thokkus
  {
    id: "groundnut-idli-podi",
    name: "Groundnut Idli Podi",
    chapter: 2,
    chapterTitle: "Podis & Thokkus",
    category: "Podis & Thokkus",
    description: "Roasted peanuts ground with red chillies and curry leaves; nutty, spicy, and perfect with a drizzle of sesame oil.",
    imageUrl: "/products/groundnut-idli-podi.png",
    tag: "Bestseller",
    usageTip: "Spoon over hot idli or dosa with cold-pressed gingelly / sesame oil.",
    isPopular: true,
    priceOptions: [
      { weight: "100g", price: 100 },
      { weight: "250g", price: 230 }
    ]
  },
  {
    id: "curry-leaf-idli-podi",
    name: "Curry Leaf Idli Podi",
    chapter: 2,
    chapterTitle: "Podis & Thokkus",
    category: "Podis & Thokkus",
    description: "Fresh curry leaves, dals and spices stone-ground into a fragrant, slightly crisp podi.",
    imageUrl: "/products/curry-leaf-idli-podi.png",
    tag: "Herbal Podi",
    usageTip: "Mix with hot steamed rice and ghee for a fragrant green podi rice.",
    priceOptions: [
      { weight: "100g", price: 100 },
      { weight: "250g", price: 230 }
    ]
  },
  {
    id: "idli-podi",
    name: "Classic Idli Podi",
    chapter: 2,
    chapterTitle: "Podis & Thokkus",
    category: "Podis & Thokkus",
    description: "The traditional South Indian gunpowder blend of roasted urad dal, chana dal, sesame seeds and red chillies.",
    imageUrl: "/products/groundnut-idli-podi.png",
    tag: "Breakfast Staple",
    usageTip: "Mix generously with gingelly oil or ghee and dip hot idlis.",
    priceOptions: [
      { weight: "100g", price: 100 }
    ]
  },
  {
    id: "paruppu-podi",
    name: "Paruppu Podi",
    chapter: 2,
    chapterTitle: "Podis & Thokkus",
    category: "Podis & Thokkus",
    description: "Slow-roasted lentils, black pepper and cumin coarsely ground for comforting lentil rice.",
    imageUrl: "/products/paruppu-podi.png",
    tag: "Lentil Podi",
    usageTip: "Mix 2 spoons into hot rice with dollops of fresh melted cow ghee.",
    priceOptions: [
      { weight: "100g", price: 110 }
    ]
  },
  {
    id: "vallarai-podi",
    name: "Vallarai Podi",
    chapter: 2,
    chapterTitle: "Podis & Thokkus",
    category: "Podis & Thokkus",
    description: "Made from fresh vallarai (gotu kola) leaves, dried and ground the traditional way — a staple herbal podi from grandmother's kitchen.",
    imageUrl: "/products/vallarai-podi.png",
    tag: "Grandmother's Recipe",
    usageTip: "Valued traditionally for memory & focus. Enjoy daily with hot rice and ghee.",
    priceOptions: [
      { weight: "100g", price: 100 }
    ]
  },
  {
    id: "pirandai-podi",
    name: "Pirandai Chutney Mix / Podi",
    chapter: 2,
    chapterTitle: "Podis & Thokkus",
    category: "Podis & Thokkus",
    description: "Pirandai (veldt grape) stem, sun-dried and spiced — a traditional podi valued for its distinct tang.",
    imageUrl: "/products/pirandai-podi.png",
    tag: "Digestive Staple",
    usageTip: "Valued traditionally for digestive health and joint vitality.",
    priceOptions: [
      { weight: "100g", price: 110 }
    ]
  },
  {
    id: "chinna-vengayam-thokku",
    name: "Chinna Vengayam Thokku",
    chapter: 2,
    chapterTitle: "Podis & Thokkus",
    category: "Podis & Thokkus",
    description: "Small shallots slow-cooked in sesame oil, tamarind, and roasted spices until rich, thick, and deeply savoury.",
    imageUrl: "/products/chinna-vengayam-thokku.png",
    tag: "Artisanal Preserve",
    usageTip: "Serve alongside curd rice, dosa, rotis, or hot steamed rice.",
    isPopular: true,
    priceOptions: [
      { weight: "Standard Jar", price: 270 }
    ]
  },
  {
    id: "pavarkai-thokku",
    name: "Pavarkai Thokku",
    chapter: 2,
    chapterTitle: "Podis & Thokkus",
    category: "Podis & Thokkus",
    description: "Bitter gourd sauteed with tamarind, jaggery and spices to balance pleasant bitterness with tangy heat.",
    imageUrl: "/products/pavarkai-thokku.png",
    tag: "Traditional Taste",
    usageTip: "Delicious digestive side dish for ragi mudde, rice, and chapati.",
    priceOptions: [
      { weight: "Standard Jar", price: 290 }
    ]
  },
  {
    id: "pulichakeerai-thokku",
    name: "Pulichakeerai Thokku",
    chapter: 2,
    chapterTitle: "Podis & Thokkus",
    category: "Podis & Thokkus",
    description: "Tangy sorrel leaves (Gongura) simmered into a mouth-watering spicy Andhra/Tamil style thokku relish.",
    imageUrl: "/products/pulichakeerai-thokku.png",
    tag: "Tangy Relish",
    usageTip: "Mix with hot rice and ghee or pair with crispy parottas.",
    isPopular: true,
    priceOptions: [
      { weight: "Standard Jar", price: 290 }
    ]
  },

  // Chapter 3: Instant Mixes & Soups
  {
    id: "instant-sambar-mix",
    name: "Instant Sambar Mix",
    chapter: 3,
    chapterTitle: "Instant Mixes & Soups",
    category: "Instant Mixes & Soups",
    description: "Just add vegetables and water — our sambar powder pre-blended with tamarind and spice for a quick, authentic pot.",
    imageUrl: "/products/instant-sambar-mix.png",
    tag: "Quick & Easy",
    usageTip: "Boil water with your favorite vegetables, add Instant Sambar Mix, and simmer 5 minutes.",
    priceOptions: [
      { weight: "100g", price: 100 },
      { weight: "250g", price: 250 }
    ]
  },
  {
    id: "instant-rasam-mix",
    name: "Instant Rasam Mix",
    chapter: 3,
    chapterTitle: "Instant Mixes & Soups",
    category: "Instant Mixes & Soups",
    description: "Tangy, peppery and light — a spoonful turns hot water into comforting rasam in minutes.",
    imageUrl: "/products/instant-rasam-mix.png",
    tag: "Comfort Food",
    usageTip: "Add a spoonful to boiling hot water with fresh coriander leaves for instant medicinal rasam.",
    priceOptions: [
      { weight: "100g", price: 100 },
      { weight: "250g", price: 250 }
    ]
  },
  {
    id: "thalai-rasam-mix",
    name: "Thalai Rasam Mix",
    chapter: 3,
    chapterTitle: "Instant Mixes & Soups",
    category: "Instant Mixes & Soups",
    description: "Traditional heritage herb & leaf rasam mix prepared with select botanical leaves for soothing digestion.",
    imageUrl: "/products/thalai-rasam-mix.png",
    tag: "Heritage Recipe",
    usageTip: "Boil with water, crushed garlic, and tomato for a restoring herbal rasam broth.",
    priceOptions: [
      { weight: "100g", price: 110 }
    ]
  },
  {
    id: "morinda-soup-mix",
    name: "Morinda Soup Mix",
    chapter: 3,
    chapterTitle: "Instant Mixes & Soups",
    category: "Instant Mixes & Soups",
    description: "Nourishing Noni / Morinda leaf soup blend, crafted to boost vitality and natural immunity.",
    imageUrl: "/products/morinda-soup-mix.png",
    tag: "Immunity Soup",
    usageTip: "Whisk 1 tsp into boiling water, add salt & pepper, simmer for 3 mins.",
    priceOptions: [
      { weight: "100g", price: 90 }
    ]
  },
  {
    id: "manathakkali-soup-mix",
    name: "Manathakkali Soup Mix",
    chapter: 3,
    chapterTitle: "Instant Mixes & Soups",
    category: "Instant Mixes & Soups",
    description: "Black nightshade leaf soup blend, traditionally cherished for soothing digestive acidity and stomach ulcers.",
    imageUrl: "/products/manathakkali-soup-mix.png",
    tag: "Stomach Soother",
    usageTip: "Sip warm before meals for natural digestive soothing.",
    priceOptions: [
      { weight: "100g", price: 90 }
    ]
  },
  {
    id: "vallarai-soup-mix",
    name: "Vallarai Soup Mix",
    chapter: 3,
    chapterTitle: "Instant Mixes & Soups",
    category: "Instant Mixes & Soups",
    description: "Gotu Kola herbal soup blend stone-ground with warming black pepper and cumin.",
    imageUrl: "/products/vallarai-soup-mix.png",
    tag: "Brain Tonic Soup",
    usageTip: "Ideal evening warm soup for students and working professionals.",
    priceOptions: [
      { weight: "100g", price: 90 }
    ]
  },

  // Chapter 4: Herbal Teas & Wellness
  {
    id: "sathu-maavu",
    name: "Sathu Maavu Multigrain Mix",
    chapter: 4,
    chapterTitle: "Herbal Teas & Wellness",
    category: "Herbal Teas & Wellness",
    description: "A multigrain, multi-millet health mix, roasted and ground the traditional way — stirred into warm milk.",
    imageUrl: "/products/sathu-maavu.png",
    tag: "Multigrain",
    usageTip: "Whisk into warm milk or water, cook 2 minutes with karupatti for nourishing porridge.",
    isPopular: true,
    priceOptions: [
      { weight: "250g", price: 280 },
      { weight: "500g", price: 555 }
    ]
  },
  {
    id: "ulundhu-kanji-mix",
    name: "Ulundhu Kanji Mix",
    chapter: 4,
    chapterTitle: "Herbal Teas & Wellness",
    category: "Herbal Teas & Wellness",
    description: "Black gram dal and traditional herbs roasted into a high-protein, bone-strengthening porridge mix.",
    imageUrl: "/products/ulundhu-kanji-mix.png",
    tag: "Protein & Strength",
    usageTip: "Cook with coconut milk or jaggery syrup for a comforting morning porridge.",
    priceOptions: [
      { weight: "250g", price: 290 },
      { weight: "500g", price: 580 }
    ]
  },
  {
    id: "moringa-powder",
    name: "Moringa Powder",
    chapter: 4,
    chapterTitle: "Herbal Teas & Wellness",
    category: "Herbal Teas & Wellness",
    description: "Sun-dried moringa leaves, stone-ground into a fine green powder — stir into water, smoothies or dough.",
    imageUrl: "/products/moringa-powder.png",
    tag: "Superfood",
    usageTip: "Add a teaspoon to green smoothies, morning warm water, or chapatis.",
    priceOptions: [
      { weight: "100g", price: 120 }
    ]
  },
  {
    id: "ilai-nalam-choornam",
    name: "Ilai Nalam (Choornam)",
    chapter: 4,
    chapterTitle: "Herbal Teas & Wellness",
    category: "Herbal Teas & Wellness",
    description: "Traditional herbal wellness choornam formulation made from sun-cured botanical leaves.",
    imageUrl: "/products/ilai-nalam-choornam.png",
    tag: "Herbal Elixir",
    usageTip: "Take 1/2 tsp with warm water or honey as directed in herbal routines.",
    priceOptions: [
      { weight: "100g", price: 300 }
    ]
  },
  {
    id: "dried-marudhani-powder",
    name: "Dried Marudhani Powder",
    chapter: 4,
    chapterTitle: "Herbal Teas & Wellness",
    category: "Herbal Teas & Wellness",
    description: "Pure, stone-ground henna leaf powder, dried the traditional way — for natural mehendi. For external use.",
    imageUrl: "/products/dried-marudhani-powder.png",
    tag: "Natural Henna",
    usageTip: "Mix with tea water and lemon juice for natural hair stain or mehendi application.",
    priceOptions: [
      { weight: "100g", price: 90 }
    ]
  },
  {
    id: "butterfly-pea-tea",
    name: "Butterfly Pea (Dried for Tea)",
    chapter: 4,
    chapterTitle: "Herbal Teas & Wellness",
    category: "Herbal Teas & Wellness",
    description: "Sun-dried butterfly pea flowers that turn hot water a brilliant blue; naturally caffeine-free.",
    imageUrl: "/products/butterfly-pea-tea.png",
    tag: "Caffeine Free",
    usageTip: "Steep 4-5 flowers in hot water. Add a squeeze of lemon to watch it turn vivid purple!",
    priceOptions: [
      { weight: "25g", price: 120 }
    ]
  },
  {
    id: "dried-hibiscus-tea",
    name: "Dried Hibiscus (Dried for Tea)",
    chapter: 4,
    chapterTitle: "Herbal Teas & Wellness",
    category: "Herbal Teas & Wellness",
    description: "Tart, ruby-red hibiscus petals, sun-dried for a refreshing, tangy infusion.",
    imageUrl: "/products/dried-hibiscus-tea.png",
    tag: "Ruby Infusion",
    usageTip: "Brew with hot water and honey for warm tea, or chill over ice with lemon.",
    priceOptions: [
      { weight: "25g", price: 80 }
    ]
  },
  {
    id: "dried-lemongrass-tea",
    name: "Dried Lemongrass (For Tea)",
    chapter: 4,
    chapterTitle: "Herbal Teas & Wellness",
    category: "Herbal Teas & Wellness",
    description: "Crisp, citrusy dried lemongrass blades for a refreshing herbal brew.",
    imageUrl: "/products/dried-lemongrass-tea.png",
    tag: "Citrus Brew",
    usageTip: "Steep with hot water and ginger for an uplifting evening tea.",
    priceOptions: [
      { weight: "25g", price: 60 }
    ]
  },
  {
    id: "dried-beetel-leaf-tea",
    name: "Dried Beetel Leaf (For Tea)",
    chapter: 4,
    chapterTitle: "Herbal Teas & Wellness",
    category: "Herbal Teas & Wellness",
    description: "Beetel leaves, dried and packed for a traditional, aromatic brew.",
    imageUrl: "/products/dried-beetel-leaf-tea.png",
    tag: "Aromatic Brew",
    usageTip: "Steep in boiling water with a pinch of black pepper for a soothing traditional herbal drink.",
    priceOptions: [
      { weight: "25g", price: 70 }
    ]
  },

  // Chapter 5: Natural Sweeteners & Syrups
  {
    id: "karupatti",
    name: "Panag Karuppatti",
    chapter: 5,
    chapterTitle: "Natural Sweeteners & Syrups",
    category: "Natural Sweeteners & Syrups",
    description: "Traditional palm jaggery block (weighs 830+ grams), unrefined and mineral-rich, set the old-fashioned way.",
    imageUrl: "/products/karupatti.png",
    tag: "830g+ Block",
    usageTip: "Break into coffee, tea, or desserts for authentic caramel sweetness rich in iron.",
    isPopular: true,
    priceOptions: [
      { weight: "830g+", price: 400 }
    ]
  },
  {
    id: "jaggery-powder",
    name: "Jaggery Powder 1kg",
    chapter: 5,
    chapterTitle: "Natural Sweeteners & Syrups",
    category: "Natural Sweeteners & Syrups",
    description: "Pure unrefined cane jaggery crushed into fine powder for instant dissolving in daily drinks and sweets.",
    imageUrl: "/products/brown-sugar.png",
    tag: "Unrefined Sugar",
    usageTip: "1:1 healthy substitute for refined white sugar in coffee, tea & baking.",
    isPopular: true,
    priceOptions: [
      { weight: "1kg", price: 110 }
    ]
  },
  {
    id: "urundai-vellam",
    name: "Urundai Vellam",
    chapter: 5,
    chapterTitle: "Natural Sweeteners & Syrups",
    category: "Natural Sweeteners & Syrups",
    description: "Palm jaggery rolled into bite-sized balls, ready to snack on or melt into your cooking.",
    imageUrl: "/products/urundai-vellam.png",
    tag: "Bite-Sized",
    usageTip: "Perfect bite-sized jaggery balls for quick snacking or melting into payasam.",
    priceOptions: [
      { weight: "1 piece", price: 45 }
    ]
  },
  {
    id: "karupatti-essence",
    name: "Karupatti Essence 250ml",
    chapter: 5,
    chapterTitle: "Natural Sweeteners & Syrups",
    category: "Natural Sweeteners & Syrups",
    description: "Palm jaggery reduced into a rich liquid syrup — for coffee, sweets, and everyday cooking.",
    imageUrl: "/products/karupatti-essence.png",
    tag: "Liquid Syrup",
    usageTip: "Drizzle over pancakes, appam, ice cream, or stir directly into South Indian filter coffee.",
    priceOptions: [
      { weight: "250ml", price: 180 }
    ]
  },
  {
    id: "rosemilk-essence",
    name: "Panneer Rosemilk Essence 250ml",
    chapter: 5,
    chapterTitle: "Natural Sweeteners & Syrups",
    category: "Natural Sweeteners & Syrups",
    description: "Crafted from fragrant panneer rose petals, distilled the traditional way into a rich, aromatic essence for authentic rose milk.",
    imageUrl: "/products/rosemilk-essence.png",
    tag: "Panneer Rose Petals",
    usageTip: "Stir 1-2 drops into chilled milk with sweet basil seeds for nostalgic street-style rose milk.",
    isPopular: true,
    priceOptions: [
      { weight: "250ml", price: 190 }
    ]
  },

  // Chapter 6: Heritage & Farm Fresh
  {
    id: "kambu-laddu",
    name: "Kambu Laddu",
    chapter: 6,
    chapterTitle: "Heritage & Farm Fresh",
    category: "Heritage & Farm Fresh",
    description: "Pearl millet (Kambu) hand-rolled with pure cow ghee and unrefined jaggery into wholesome nutritive laddus.",
    imageUrl: "/products/kambu-laddu.png",
    tag: "Hand-Rolled",
    usageTip: "Wholesome snack for mid-day energy or festive treats.",
    priceOptions: [
      { weight: "1 piece", price: 20 }
    ]
  },
  {
    id: "ellu-laddu",
    name: "Ellu Laddu",
    chapter: 6,
    chapterTitle: "Heritage & Farm Fresh",
    category: "Heritage & Farm Fresh",
    description: "Sesame seeds (Ellu) toasted and bound with natural palm jaggery — rich in calcium and iron.",
    imageUrl: "/products/ellu-laddu.png",
    tag: "Rich in Calcium",
    usageTip: "Traditional energy bite enjoyed after meals.",
    priceOptions: [
      { weight: "1 piece", price: 20 }
    ]
  },
  {
    id: "karuvepillai-laddu",
    name: "Karuvepillai Laddu",
    chapter: 6,
    chapterTitle: "Heritage & Farm Fresh",
    category: "Heritage & Farm Fresh",
    description: "Unique heritage laddu combining fresh curry leaf essence with wholesome grains and natural jaggery.",
    imageUrl: "/products/karuvepillai-laddu.png",
    tag: "Unique Heritage",
    usageTip: "Nourishing herbal sweet bite packed with natural goodness.",
    priceOptions: [
      { weight: "1 piece", price: 20 }
    ]
  },
  {
    id: "country-eggs",
    name: "Free-Range Country Eggs",
    chapter: 6,
    chapterTitle: "Heritage & Farm Fresh",
    category: "Heritage & Farm Fresh",
    description: "Free-range, farm-direct country eggs from birds raised on natural feed — richer yolks, better flavour, the way eggs used to taste.",
    imageUrl: "/products/country-eggs.png",
    tag: "Farm Direct",
    usageTip: "Delivered fresh from free-range Karur farms with deep orange yolks.",
    priceOptions: [
      { weight: "6 Eggs", price: 90 }
    ]
  },
  {
    id: "sambrani",
    name: "Raksha Pushpa Sambrani",
    chapter: 6,
    chapterTitle: "Heritage & Farm Fresh",
    category: "Heritage & Farm Fresh",
    description: "Handcrafted natural herbal resin dhoop cup infused with protective botanicals for sacred home fragrance.",
    imageUrl: "/products/sambrani.png",
    tag: "Natural Resin",
    usageTip: "Light the rim and place on a safe holder to fill the room with purifying aromatic smoke.",
    priceOptions: [
      { weight: "1 piece", price: 12 }
    ]
  }
];
