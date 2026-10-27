export interface Ingredient {
  amount: string;
  name: string;
  notes?: string;
}

export interface CocktailRecipe {
  id: string;
  slug: string;
  name: string;
  classicName: string;
  subtitle: string;
  tagline: string;
  description: string;
  image: string;
  vectorIcon: string;
  glasswareIcon?: string;
  serveType: string;
  glassware: string;
  ice: string;
  garnish: string;
  prepTime: string;
  difficulty: "Simple" | "Refined" | "Ceremonial";
  ingredients: Ingredient[];
  preparation: string[];
  flavorNotes: string[];
  expressionName: string;
}

export const ROYAL_COCKTAILS: CocktailRecipe[] = [
  {
    id: "the-royal-rob",
    slug: "the-royal-rob",
    name: "The Royal Rob",
    classicName: "Rob Roy",
    subtitle: "aka The Royal Affair | classic Rob Roy",
    tagline: "THE ROYAL AFFAIR — TIMELESS APERITIF",
    description: "A regal interpretation of the classic Rob Roy. Pure Patiyala Palace stirred gracefully with artisanal sweet vermouth and aromatic bitters for a velvety, ruby-hued aperitif.",
    image: "/assets/cocktails/covers/the_royal_rob.jpg",
    vectorIcon: "/assets/pptx_media/image-3-1.png",
    glasswareIcon: "/assets/pptx_media/image-2-2.png",
    serveType: "Up / Chilled",
    glassware: "Chilled Coupe or Nick & Nora Glass",
    ice: "None (Served Chilled)",
    garnish: "Maraschino Cherry",
    prepTime: "2 Minutes",
    difficulty: "Simple",
    expressionName: "Patiyala Palace Crafted Indian Malt Whisky",
    ingredients: [
      { amount: "60 ml", name: "Patiyala Palace" },
      { amount: "30 ml", name: "Sweet Vermouth" },
      { amount: "2 dashes", name: "Angostura Bitters" }
    ],
    preparation: [
      "Stir all ingredients with ice in a mixing glass until thoroughly chilled.",
      "Strain into a chilled coupe or Nick & Nora glass.",
      "Garnish with a maraschino cherry."
    ],
    flavorNotes: ["Sweet Vermouth", "Toasted Oak", "Spiced Cherry", "Aromatic Botanicals"]
  },
  {
    id: "maharajas-revolver",
    slug: "maharajas-revolver",
    name: "Maharaja's Revolver",
    classicName: "Revolver",
    subtitle: "aka Peg on the Trigger | The Royal Trigger",
    tagline: "PEG ON THE TRIGGER — NOCTURNAL PALACE RITUAL",
    description: "A bold, nocturnal palace ritual blending the rich caramel and malt depth of Patiyala Palace with dark roasted coffee liqueur and zesty orange bitters.",
    image: "/assets/cocktails/covers/maharajas_revolver.jpg",
    vectorIcon: "/assets/pptx_media/image-4-1.png",
    glasswareIcon: "/assets/pptx_media/image-2-2.png",
    serveType: "Up / Chilled",
    glassware: "Chilled Coupe Glass",
    ice: "None (Served Chilled)",
    garnish: "Orange Peel",
    prepTime: "2 Minutes",
    difficulty: "Simple",
    expressionName: "Patiyala Palace Crafted Indian Malt Whisky",
    ingredients: [
      { amount: "60 ml", name: "Patiyala Palace" },
      { amount: "30 ml", name: "Coffee Liqueur" },
      { amount: "2 dashes", name: "Orange Bitters" }
    ],
    preparation: [
      "Stir all ingredients with ice in a mixing glass until chilled.",
      "Strain into a chilled coupe glass.",
      "Express the oils of a fresh orange peel and garnish gracefully."
    ],
    flavorNotes: ["Roasted Espresso", "Dark Chocolate", "Orange Zest", "Caramel Oak"]
  },
  {
    id: "boulevard-da-badshah",
    slug: "boulevard-da-badshah",
    name: "Boulevard da Badshah",
    classicName: "Boulevardier",
    subtitle: "classic Boulevardier, royally poured",
    tagline: "EMPEROR OF APERITIFS — ROYALLY POURED",
    description: "The emperor of aperitifs. Patiyala Palace meets the bold bittersweet harmony of Campari and sweet vermouth, crowned with radiant orange oils for a modern royal classic.",
    image: "/assets/cocktails/covers/boulevard_da_badshah.jpg",
    vectorIcon: "/assets/pptx_media/image-5-1.png",
    glasswareIcon: "/assets/pptx_media/image-2-2.png",
    serveType: "On the Rocks or Up",
    glassware: "Chilled Coupe or Old Fashioned Glass",
    ice: "Large Ice Cube or None (Chilled)",
    garnish: "Orange Peel",
    prepTime: "2 Minutes",
    difficulty: "Simple",
    expressionName: "Patiyala Palace Crafted Indian Malt Whisky",
    ingredients: [
      { amount: "45 ml", name: "Patiyala Palace" },
      { amount: "30 ml", name: "Campari" },
      { amount: "30 ml", name: "Sweet Vermouth" }
    ],
    preparation: [
      "Stir all ingredients with ice in a mixing glass.",
      "Strain into a chilled coupe or over a large ice cube in an Old Fashioned glass.",
      "Garnish with an expressed orange peel twist."
    ],
    flavorNotes: ["Campari Bittersweet", "Sweet Vermouth", "Citrus Oils", "Malt Depth"]
  },
  {
    id: "patiala-peg",
    slug: "patiala-peg",
    name: "Patiyala Peg",
    classicName: "Old Fashioned",
    subtitle: "classic Old Fashioned, the Patiala way",
    tagline: "THE PUNJAB MONARCH — THE PATIALA WAY",
    description: "The legendary royal pour of Punjab reimagined as a quintessential Old Fashioned. Rich Patiyala Palace kissed with delicate sweetness and aromatic bitters over a single clear ice block.",
    image: "/assets/cocktails/covers/patiala_peg.jpg",
    vectorIcon: "/assets/pptx_media/image-6-1.png",
    glasswareIcon: "/assets/pptx_media/image-2-2.png",
    serveType: "On the Rocks",
    glassware: "Old Fashioned Glass",
    ice: "Large Ice Cube",
    garnish: "Orange Peel",
    prepTime: "3 Minutes",
    difficulty: "Simple",
    expressionName: "Patiyala Palace Crafted Indian Malt Whisky",
    ingredients: [
      { amount: "60 ml", name: "Patiyala Palace" },
      { amount: "7.5 ml", name: "Simple Syrup" },
      { amount: "2-3 dashes", name: "Angostura Bitters" }
    ],
    preparation: [
      "Stir all ingredients with ice in a mixing glass.",
      "Strain over a large ice cube in an Old Fashioned glass.",
      "Garnish with an expressed orange peel."
    ],
    flavorNotes: ["Charred Oak", "Caramel Sugar", "Angostura Spice", "Expressive Citrus"]
  },
  {
    id: "shahi-jam",
    slug: "shahi-jam",
    name: "Shahi Jam",
    classicName: "Manhattan",
    subtitle: "aka Manhattan da Maharaja | classic Manhattan",
    tagline: "MANHATTAN DA MAHARAJA — ARISTOCRATIC CEREMONY",
    description: "An aristocratic cocktail fit for the grand durbars. Patiyala Palace paired with velvety sweet vermouth and aromatic bitters, served crystal cold in an elegant coupe with a maraschino cherry.",
    image: "/assets/cocktails/covers/shahi_jam.jpg",
    vectorIcon: "/assets/pptx_media/image-7-1.png",
    glasswareIcon: "/assets/pptx_media/image-2-2.png",
    serveType: "Up / Chilled",
    glassware: "Chilled Coupe Glass",
    ice: "None (Served Chilled)",
    garnish: "Maraschino Cherry",
    prepTime: "2 Minutes",
    difficulty: "Simple",
    expressionName: "Patiyala Palace Crafted Indian Malt Whisky",
    ingredients: [
      { amount: "60 ml", name: "Patiyala Palace" },
      { amount: "30 ml", name: "Sweet Vermouth" },
      { amount: "2 dashes", name: "Angostura Bitters" }
    ],
    preparation: [
      "Stir all ingredients with ice in a mixing glass.",
      "Strain into a chilled coupe glass.",
      "Garnish with a maraschino cherry."
    ],
    flavorNotes: ["Sweet Vermouth", "Dark Cherry", "Baking Spice", "Warm Vanilla"]
  },
  {
    id: "sour-sides-of-patiala",
    slug: "sour-sides-of-patiala",
    name: "Sour Sides of Patiyala",
    classicName: "Whiskey Sour",
    subtitle: "aka Sour Singh | Patiala Gets Sour",
    tagline: "SOUR SINGH — SILKY ROYAL HARMONY",
    description: "A masterclass in royal balance. Freshly squeezed lemon juice, balanced sweetness, and robust Patiyala Palace, whipped into a silky cloud with optional egg white and aromatic bitters.",
    image: "/assets/cocktails/covers/sour_sides_of_patiala.jpg",
    vectorIcon: "/assets/pptx_media/image-8-1.png",
    glasswareIcon: "/assets/pptx_media/image-2-2.png",
    serveType: "On the Rocks with Foam",
    glassware: "Old Fashioned Glass",
    ice: "Large Ice Cube",
    garnish: "Lemon Peel & 2–3 drops of Angostura Bitters",
    prepTime: "3 Minutes",
    difficulty: "Refined",
    expressionName: "Patiyala Palace Crafted Indian Malt Whisky",
    ingredients: [
      { amount: "60 ml", name: "Patiyala Palace" },
      { amount: "30 ml", name: "Fresh Lemon Juice" },
      { amount: "20 ml", name: "Simple Syrup" },
      { amount: "15 ml", name: "Egg White", notes: "optional" }
    ],
    preparation: [
      "Dry shake all ingredients first if using egg white (without ice) to emulsify.",
      "Add ice and shake vigorously until frosty.",
      "Double strain into an Old Fashioned glass over a large ice cube.",
      "Garnish with a lemon peel and 2–3 drops of Angostura bitters atop the foam."
    ],
    flavorNotes: ["Silky Meringue Foam", "Zesty Lemon", "Sweet Balance", "Malt Warmth"]
  }
];

export const ALL_COCKTAILS: CocktailRecipe[] = ROYAL_COCKTAILS;

export interface ExpressionGroup {
  id: string;
  name: string;
  shortName: string;
  abv: string;
  bottleImage: string;
  productLink: string;
  description: string;
  recipes: CocktailRecipe[];
}

export const COCKTAIL_EXPRESSIONS: ExpressionGroup[] = [
  {
    id: "royal-collection",
    name: "Patiyala Palace Royal Cocktail Collection",
    shortName: "The Royal Collection",
    abv: "42.8% ABV",
    bottleImage: "/assets/product/bottle_front.webp",
    productLink: "#spirit",
    description: "Six iconic cocktail classics, mastercrafted and reimagined with Patiyala Palace Crafted Indian Malt Whisky.",
    recipes: ROYAL_COCKTAILS
  }
];
