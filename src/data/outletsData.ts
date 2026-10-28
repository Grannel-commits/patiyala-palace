export interface OutletLocation {
  id: string;
  name: string;
  area: string;
  zone: "Cyber City & DLF" | "MG Road & NH-8" | "Golf Course & Sec 53-66" | "Udyog Vihar & West" | "Sohna Road & Central";
  city: string;
  state?: string;
  pincode: string;
  type: string;
  landmark: string;
  address: string;
  keywords: string[];
  lat: number;
  lng: number;
  distanceKm?: number;
}

export const PALACE_OUTLETS: OutletLocation[] = [
  {
    id: "shankar-chowk-cyber-hub",
    name: "Shankar Chowk — Cyber Hub",
    area: "Cyber City, DLF Phase II",
    zone: "Cyber City & DLF",
    city: "Gurugram",
    pincode: "122002",
    type: "Premium Palace Retail & Lounges",
    landmark: "Opposite Shankar Chowk Flyover, Cyber Hub Entry",
    address: "DLF Cyber City, Building 10 & Shankar Chowk, Gurugram 122002",
    keywords: ["shankar chowk", "cyber hub", "cyberhub", "cyber city", "cybercity", "dlf cyber", "phase 2", "nh 8", "nh-8"],
    lat: 28.4986,
    lng: 77.0898,
  },
  {
    id: "jmd-central-arcade",
    name: "JMD Central Arcade",
    area: "Sector 28, Mehrauli-Gurgaon Road",
    zone: "MG Road & NH-8",
    city: "Gurugram",
    pincode: "122002",
    type: "Luxury Liquor Boutique",
    landmark: "Near Sikanderpur Metro, Main MG Road",
    address: "JMD Central Arcade, Mehrauli-Gurgaon Rd, Gurugram 122002",
    keywords: ["jmd", "jmd central", "central arcade", "arcade", "sikanderpur", "mg road", "sector 28"],
    lat: 28.4815,
    lng: 77.0925,
  },
  {
    id: "ambience-mall-nh8",
    name: "Ambience Mall NH-8",
    area: "Ambience Island, DLF Phase III",
    zone: "MG Road & NH-8",
    city: "Gurugram",
    pincode: "122002",
    type: "Flagship Luxury Spirits Vault",
    landmark: "NH-8 Delhi-Gurgaon Toll Border",
    address: "Ambience Mall, NH-8, DLF Phase 3, Sector 24, Gurugram 122002",
    keywords: ["ambience mall", "ambience", "nh 8", "nh-8", "delhi border", "ambience island", "leela"],
    lat: 28.5042,
    lng: 77.0967,
  },
  {
    id: "moulsary-arcade-dlf-2",
    name: "Moulsary Arcade DLF Phase-II",
    area: "DLF Phase II",
    zone: "Cyber City & DLF",
    city: "Gurugram",
    pincode: "122008",
    type: "Neighbourhood Wine & Malt Merchant",
    landmark: "Near Moulsari Avenue Rapid Metro",
    address: "Moulsari Arcade, DLF Phase 2, Gurugram 122008",
    keywords: ["moulsary", "moulsari", "moulsary arcade", "dlf 2", "dlf-2", "dlf ii", "dlf-ii", "dlf phase 2"],
    lat: 28.4912,
    lng: 77.0945,
  },
  {
    id: "dlf-hubs",
    name: "DLF Cyber City & Commercial Hubs",
    area: "DLF Phases I - V",
    zone: "Cyber City & DLF",
    city: "Gurugram",
    pincode: "122002",
    type: "Authorised Palace Retailers",
    landmark: "Across DLF Phase 1, 2, 3, 4, 5",
    address: "DLF City Complex, Gurugram 122002",
    keywords: ["dlf", "dlef", "dlf city", "dlf phase 1", "dlf phase 2", "dlf phase 3", "dlf phase 4", "dlf phase 5"],
    lat: 28.495,
    lng: 77.089,
  },
  {
    id: "udyog-vihar-phase-2-3",
    name: "Udyog Vihar Phase-II / III (Rajokari Border)",
    area: "Udyog Vihar",
    zone: "Udyog Vihar & West",
    city: "Gurugram",
    pincode: "122016",
    type: "Highway Reserve Vault",
    landmark: "Delhi-Gurgaon Rajokari Toll Junction",
    address: "Udyog Vihar Phase 2/3, Adjacent to Rajokari Border, Gurugram 122016",
    keywords: ["udyog vihar", "udyog vihar phase 2", "udyog vihar phase 3", "rajokari", "rajokari border", "rajokri", "phase-ii", "phase-iii"],
    lat: 28.5085,
    lng: 77.0875,
  },
  {
    id: "udyog-vihar-phase-5",
    name: "Udyog Vihar Phase-V",
    area: "Udyog Vihar Phase 5",
    zone: "Udyog Vihar & West",
    city: "Gurugram",
    pincode: "122016",
    type: "Corporate District Cellar",
    landmark: "Near Trident & Oberoi Corporate Belt",
    address: "Udyog Vihar Phase 5, Gurugram 122016",
    keywords: ["udyog vihar 5", "phase 5", "phase v", "udyog vihar phase-v", "corporate park"],
    lat: 28.502,
    lng: 77.078,
  },
  {
    id: "electronic-city",
    name: "Electronic City",
    area: "Sector 18",
    zone: "Udyog Vihar & West",
    city: "Gurugram",
    pincode: "122015",
    type: "Technology Corridor Wine & Spirits",
    landmark: "Electronic City Gate, Old Delhi Gurgaon Road",
    address: "Electronic City, Sector 18, Gurugram 122015",
    keywords: ["electronic city", "sector 18", "sec 18", "electronic city sector 18"],
    lat: 28.498,
    lng: 77.075,
  },
  {
    id: "hyatt-place-regency",
    name: "Hyatt Palace / Place Enclave",
    area: "Old Delhi Gurgaon Road, Udyog Vihar",
    zone: "Udyog Vihar & West",
    city: "Gurugram",
    pincode: "122015",
    type: "Luxury Hotel Corridor Cellar",
    landmark: "Near Hyatt Place & Maruti Suzuki Plant",
    address: "Old Delhi Gurgaon Rd, Electronic City, Gurugram 122015",
    keywords: ["hyatt", "hyatt palace", "hyatt place", "old delhi gurgaon road"],
    lat: 28.507,
    lng: 77.065,
  },
  {
    id: "bajghera-chowk",
    name: "Bajghera Chowk",
    area: "Sector 112 / 113",
    zone: "Udyog Vihar & West",
    city: "Gurugram",
    pincode: "122017",
    type: "Expressway Gateway Store",
    landmark: "Bajghera Flyover & Chowk",
    address: "Bajghera Chowk, Near Sector 112, Gurugram 122017",
    keywords: ["bajghera", "bajgera", "bajgera chowk", "bajghera chowk", "sector 112", "sector 113"],
    lat: 28.52,
    lng: 77.03,
  },
  {
    id: "dwarka-expressway",
    name: "Dwarka Expressway Corridor",
    area: "Sector 109 - 110",
    zone: "Udyog Vihar & West",
    city: "Gurugram",
    pincode: "122017",
    type: "Grand Expressway Wine Megastore",
    landmark: "Northern Peripheral Road (NPR)",
    address: "Dwarka Expressway, Sector 109/110 Junction, Gurugram 122017",
    keywords: ["dwarka expressway", "dwarka", "expressway", "npr", "sector 109", "sector 110", "sector 104"],
    lat: 28.515,
    lng: 77.018,
  },
  {
    id: "trade-tower-hyde",
    name: "Trade Tower (Hyde Park & Unitech)",
    area: "Sector 47 / South City II",
    zone: "Sohna Road & Central",
    city: "Gurugram",
    pincode: "122018",
    type: "Corporate Towers Vault",
    landmark: "Unitech Trade Tower, Sohna Road",
    address: "Trade Tower, Block C, South City II, Sector 47, Gurugram 122018",
    keywords: ["trade tower", "hyde", "hyde park", "unitech", "sohna road", "sector 47"],
    lat: 28.423,
    lng: 77.046,
  },
  {
    id: "mehrauli-border",
    name: "Mehrauli Border (Aya Nagar Junction)",
    area: "Mehrauli-Gurgaon Road",
    zone: "MG Road & NH-8",
    city: "Gurugram",
    pincode: "122002",
    type: "Interstate Border Luxury Spirits",
    landmark: "Delhi Toll Checkpoint",
    address: "MG Road, Mehrauli Border, Gurugram 122002",
    keywords: ["mehrauli border", "mehrauli", "aya nagar", "delhi border", "mg road border"],
    lat: 28.487,
    lng: 77.126,
  },
  {
    id: "garden-estate-mg-road",
    name: "Garden Estate, MG Road",
    area: "Sector 28, MG Road",
    zone: "MG Road & NH-8",
    city: "Gurugram",
    pincode: "122002",
    type: "Residential Enclave Wine Shop",
    landmark: "Opposite Garden Estate Metro Station",
    address: "Garden Estate, Mehrauli-Gurgaon Rd, Gurugram 122002",
    keywords: ["garden estate", "mg road", "guru dronacharya metro", "sector 28"],
    lat: 28.483,
    lng: 77.106,
  },
  {
    id: "dlf-rapid-metro-station",
    name: "DLF Rapid Metro Station Corridors",
    area: "DLF Phase I & II",
    zone: "Cyber City & DLF",
    city: "Gurugram",
    pincode: "122002",
    type: "Transit Hub Wine Pavilion",
    landmark: "Phase 1 / Belvedere Towers Metro",
    address: "Rapid Metro Corridors, DLF City, Gurugram 122002",
    keywords: ["rapid metro", "dlf rapid metro", "metro station", "belvedere", "phase 1 metro"],
    lat: 28.48,
    lng: 77.09,
  },
  {
    id: "bristol-hotel",
    name: "Bristol Hotel Enclave",
    area: "Sikanderpur, MG Road",
    zone: "MG Road & NH-8",
    city: "Gurugram",
    pincode: "122002",
    type: "Luxury Hospitality Spirits Lounge",
    landmark: "Bristol Chowk & Sikanderpur Crossing",
    address: "Near Sikanderpur Metro, Bristol Chowk, MG Road, Gurugram 122002",
    keywords: ["bristol", "bristol hotel", "bristol chowk", "sikanderpur"],
    lat: 28.482,
    lng: 77.095,
  },
  {
    id: "sahara-mall",
    name: "Sahara Mall, MG Road",
    area: "Sector 28, MG Road",
    zone: "MG Road & NH-8",
    city: "Gurugram",
    pincode: "122002",
    type: "Mall Flagship Liquor Boutique",
    landmark: "Opposite DLF Beverly Park, Main MG Road",
    address: "Sahara Mall, Main MG Road, Gurugram 122002",
    keywords: ["sahara mall", "sahara", "mg road", "beverly park"],
    lat: 28.4795,
    lng: 77.088,
  },
  {
    id: "sector-29",
    name: "Sector-29 Leisure & Pub Valley",
    area: "Sector 29",
    zone: "MG Road & NH-8",
    city: "Gurugram",
    pincode: "122001",
    type: "Culinary & Nightlife Epicentre",
    landmark: "Leisure Valley Park & IFFCO Chowk Metro",
    address: "Sector 29 Main Commercial Market, Gurugram 122001",
    keywords: ["sector 29", "sector-29", "sec 29", "sec-29", "leisure valley", "iffco chowk"],
    lat: 28.468,
    lng: 77.064,
  },
  {
    id: "signature-tower",
    name: "Signature Tower Crossing",
    area: "Sector 30 / NH-8",
    zone: "MG Road & NH-8",
    city: "Gurugram",
    pincode: "122001",
    type: "Expressway Landmark Spirits Retail",
    landmark: "Signature Tower Flyover, NH-8",
    address: "Signature Tower Complex, Sector 30, Gurugram 122001",
    keywords: ["signature tower", "signature", "sector 30", "nh 8", "star mall"],
    lat: 28.4675,
    lng: 77.054,
  },
  {
    id: "galleria-market-dlf-4",
    name: "Galleria Market DLF Phase-IV",
    area: "DLF Phase IV",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122009",
    type: "Open-Air Luxury Shopping Arcade",
    landmark: "Fountain Plaza, Galleria Market",
    address: "Galleria Market, DLF Phase 4, Gurugram 122009",
    keywords: ["galleria", "galaria", "galaria mkt", "galleria market", "dlf 4", "dlf-4", "dlf-iv", "dlf iv", "dlf-v"],
    lat: 28.467,
    lng: 77.082,
  },
  {
    id: "bestech-centre",
    name: "Bestech Centre Point",
    area: "Sector 27, Sushant Lok 1",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122009",
    type: "Neighbourhood Premium Spirits",
    landmark: "Near Hamilton Court & Galleria",
    address: "Bestech Center Point, A-Block, Sushant Lok 1, Gurugram 122009",
    keywords: ["bestech", "bestech centre", "bestech center", "sushant lok", "sector 27"],
    lat: 28.465,
    lng: 77.077,
  },
  {
    id: "sushant-vyapar-kendra",
    name: "Sushant Vyapar Kendra",
    area: "Sushant Lok Phase 1",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122009",
    type: "Iconic Traditional Market Merchant",
    landmark: "Central Vyapar Kendra Roundabout",
    address: "Sushant Vyapar Kendra, Sushant Lok 1, Gurugram 122009",
    keywords: ["sushant vyapar", "vyapar kendra", "vyapar kender", "sushant lok 1", "kender"],
    lat: 28.462,
    lng: 77.081,
  },
  {
    id: "dlf-golf-drive",
    name: "DLF Golf Drive & Horizon",
    area: "DLF Phase V, Golf Course Road",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122009",
    type: "Ultra-Luxury Connoisseur Vault",
    landmark: "DLF Golf and Country Club & One Horizon",
    address: "Golf Drive, DLF Phase 5, Sector 42, Gurugram 122009",
    keywords: ["golf drive", "dlf golf drive", "golf course road", "the camellias", "the magnolias", "the aralias", "one horizon"],
    lat: 28.452,
    lng: 77.098,
  },
  {
    id: "round-about-sector-53-54",
    name: "Round About Sector 53-54",
    area: "Golf Course Road, Sector 53/54",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122002",
    type: "Central Golf Course Wine Pavilion",
    landmark: "Sector 53-54 Rapid Metro Underpass",
    address: "Round About Sector 53-54, Golf Course Road, Gurugram 122002",
    keywords: ["sector 53-54", "round about sector 53-54", "sec 53", "sec 54", "sector 53", "sector 54", "roundabout"],
    lat: 28.448,
    lng: 77.102,
  },
  {
    id: "central-plaza",
    name: "Central Plaza Mall",
    area: "Golf Course Road, Sector 53",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122002",
    type: "Luxury Mall Wine Cellar",
    landmark: "Next to Parsvnath Exotica",
    address: "Central Plaza Mall, Sector 53, Golf Course Rd, Gurugram 122002",
    keywords: ["central plaza", "central plaza mall", "sector 53", "golf course rd"],
    lat: 28.447,
    lng: 77.1,
  },
  {
    id: "ardee-city",
    name: "Ardee City & Ardee Mall",
    area: "Sector 52",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122011",
    type: "Mall & Residential Wine Store",
    landmark: "Ardee Mall, Sector 52",
    address: "Ardee City, Sector 52, Gurugram 122011",
    keywords: ["ardee city", "ardee mall", "ardee", "sector 52", "sec 52"],
    lat: 28.441,
    lng: 77.079,
  },
  {
    id: "maidawas",
    name: "Maidawas Sector 64",
    area: "Sector 64 / Maidawas",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122102",
    type: "Southern Peripheral Highway Outlet",
    landmark: "Maidawas Chowk, Golf Course Extension Road",
    address: "Maidawas, Sector 64, Gurugram 122102",
    keywords: ["maidawas", "medawas", "sector 64", "sec 64", "spr"],
    lat: 28.406,
    lng: 77.068,
  },
  {
    id: "sector-65-tigra",
    name: "Sector - 65 (Tigra)",
    area: "Sector 65 / Golf Course Ext.",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122102",
    type: "Emerging Luxury Residential Spirits Merchant",
    landmark: "Tigra Road, Near WorldMark Sector 65",
    address: "Sector 65, Tigra Crossing, Gurugram 122102",
    keywords: ["sector 65", "sector-65", "sec 65", "tigra", "tigra 65", "worldmark 65"],
    lat: 28.401,
    lng: 77.072,
  },
  {
    id: "the-forest-sector-62",
    name: "The Forest (Sector 62)",
    area: "Sector 62",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122102",
    type: "Boutique Forest District Spirits",
    landmark: "Near Pioneer Urban Square & Heritage School",
    address: "The Forest Complex, Sector 62, Gurugram 122102",
    keywords: ["the forest", "forest sector 62", "sector 62", "sec 62", "pioneer urban"],
    lat: 28.415,
    lng: 77.088,
  },
  {
    id: "tigra-sector-56",
    name: "Tigra Sector-56",
    area: "Sector 56",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122011",
    type: "Metro Terminus Spirits Depot",
    landmark: "Sector 56 Rapid Metro Station & Huda Market",
    address: "Tigra Mod, Sector 56, Gurugram 122011",
    keywords: ["tigra sector 56", "sector 56", "sec 56", "tigra 56", "huda market 56"],
    lat: 28.431,
    lng: 77.105,
  },
  {
    id: "sector-40",
    name: "Sector 40 Main Market",
    area: "Sector 40",
    zone: "Sohna Road & Central",
    city: "Gurugram",
    pincode: "122001",
    type: "Residential Hub Spirits Store",
    landmark: "Sector 40 Community Centre & Huda Market",
    address: "Sector 40 Commercial Market, Gurugram 122001",
    keywords: ["sector 40", "sector-40", "sec 40", "sec-40"],
    lat: 28.452,
    lng: 77.058,
  },
  {
    id: "sector-47-bakhtawar-chowk",
    name: "Sector-47 (Bakhtawar Chowk)",
    area: "Sector 47",
    zone: "Sohna Road & Central",
    city: "Gurugram",
    pincode: "122018",
    type: "Major Junction Spirits Hub",
    landmark: "Bakhtawar Chowk, Near Medanta Medicity",
    address: "Bakhtawar Chowk, Sector 47, Gurugram 122018",
    keywords: ["sector 47", "sector-47", "bakhtawar chowk", "bakhtawar", "sec 47", "medanta"],
    lat: 28.428,
    lng: 77.048,
  },
  {
    id: "spaze-mall-sohna-road",
    name: "Spaze Mall, Sohna Road",
    area: "Sector 49, Sohna Road",
    zone: "Sohna Road & Central",
    city: "Gurugram",
    pincode: "122018",
    type: "Commercial Corridor Wine Pavilion",
    landmark: "Spaze I-Tech Park & Mall, Sohna Road",
    address: "Spaze Mall, Sector 49, Sohna Road, Gurugram 122018",
    keywords: ["spaze mall", "spaze", "sohna road", "sector 49", "sec 49"],
    lat: 28.416,
    lng: 77.046,
  },
  {
    id: "ramgarh-chowk-sector-65-66",
    name: "Ramgarh Chowk Sector-65/66",
    area: "Sector 65 & 66 Junction",
    zone: "Golf Course & Sec 53-66",
    city: "Gurugram",
    pincode: "122102",
    type: "Southern Peripheral Spirits Depot",
    landmark: "Ramgarh Crossing, Golf Course Ext Road",
    address: "Ramgarh Chowk, Sector 65/66, Gurugram 122102",
    keywords: ["ramgarh", "ramgarh chowk", "sector 65", "sector 66", "sec 65", "sec 66"],
    lat: 28.398,
    lng: 77.065,
  },
  {
    id: "subhash-chowk",
    name: "Subhash Chowk, Sohna Road",
    area: "Sector 38 / 47 Junction",
    zone: "Sohna Road & Central",
    city: "Gurugram",
    pincode: "122001",
    type: "Major Junction Flagship Cellar",
    landmark: "Subhash Chowk Underpass & Market",
    address: "Subhash Chowk, Main Sohna Road, Gurugram 122001",
    keywords: ["subhash chowk", "subhash", "sohna road", "isckon", "sector 38"],
    lat: 28.435,
    lng: 77.039,
  },
];

// Backwards compatibility alias
export const HARYANA_OUTLETS = PALACE_OUTLETS;

/**
 * Calculates distance between two GPS coordinates using Haversine formula in Kilometers.
 */
export function calculateDistanceKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 10) / 10;
}

/**
 * Sorts outlets by proximity to a given user coordinate.
 */
export function sortOutletsByDistance(
  outlets: OutletLocation[],
  userLat: number,
  userLng: number
): OutletLocation[] {
  return outlets
    .map((outlet) => ({
      ...outlet,
      distanceKm: calculateDistanceKm(userLat, userLng, outlet.lat, outlet.lng),
    }))
    .sort((a, b) => (a.distanceKm ?? 0) - (b.distanceKm ?? 0));
}

const OTHER_CITIES_AND_STATES = new Set([
  "mumbai",
  "bombay",
  "bengaluru",
  "bangalore",
  "hyderabad",
  "kolkata",
  "calcutta",
  "chennai",
  "madras",
  "pune",
  "ahmedabad",
  "jaipur",
  "surat",
  "lucknow",
  "kanpur",
  "nagpur",
  "indore",
  "thane",
  "bhopal",
  "patna",
  "vadodara",
  "ghaziabad",
  "noida",
  "greater noida",
  "delhi",
  "new delhi",
  "south delhi",
  "chandigarh",
  "ludhiana",
  "amritsar",
  "jalandhar",
  "dehradun",
  "goa",
  "shimla",
  "manali",
  "maharashtra",
  "karnataka",
  "tamil nadu",
  "telangana",
  "andhra pradesh",
  "rajasthan",
  "punjab",
  "uttar pradesh",
  "gujarat",
  "bihar",
  "west bengal",
  "kerala",
  "odisha",
  "madhya pradesh",
]);

export function checkLocationAvailability(
  query: string,
  userCoords?: { lat: number; lng: number }
): {
  matched: boolean;
  outlets: OutletLocation[];
  cleanedQuery: string;
} {
  const cleaned = query.trim().toLowerCase();
  if (!cleaned) {
    return { matched: false, outlets: [], cleanedQuery: "" };
  }

  // If query is specifically another major city/state outside our current presence
  const isExplicitCurrentCity =
    cleaned.includes("gurugram") ||
    cleaned.includes("gurgaon") ||
    cleaned.includes("ggn");

  if (!isExplicitCurrentCity && OTHER_CITIES_AND_STATES.has(cleaned)) {
    return { matched: false, outlets: [], cleanedQuery: query };
  }

  // Broad current city search
  if (
    cleaned === "gurugram" ||
    cleaned === "gurgaon" ||
    cleaned === "gurgao" ||
    cleaned === "ggn"
  ) {
    const list = userCoords
      ? sortOutletsByDistance(PALACE_OUTLETS, userCoords.lat, userCoords.lng)
      : PALACE_OUTLETS;
    return { matched: true, outlets: list, cleanedQuery: query };
  }

  // Helper for word-boundary matching
  const hasWord = (source: string, word: string) => {
    if (word.length >= 5 && source.includes(word)) return true;
    const escaped = word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    return new RegExp(`(?:^|[^a-z0-9])${escaped}(?:$|[^a-z0-9])`, "i").test(
      source
    );
  };

  // Check matching outlets:
  let matches = PALACE_OUTLETS.filter((outlet) => {
    const oName = outlet.name.toLowerCase();
    const oArea = outlet.area.toLowerCase();
    const oLandmark = outlet.landmark.toLowerCase();

    // 1. Direct name match
    if (hasWord(cleaned, oName) || hasWord(oName, cleaned)) return true;
    // 2. Area match
    if (hasWord(cleaned, oArea) || hasWord(oArea, cleaned)) return true;
    // 3. Landmark match
    if (hasWord(cleaned, oLandmark) || hasWord(oLandmark, cleaned)) return true;

    // 4. Keywords match
    for (const k of outlet.keywords) {
      const kw = k.toLowerCase();
      if (hasWord(cleaned, kw)) return true;
      if (cleaned.length >= 4 && hasWord(kw, cleaned)) return true;
    }

    // Check sector number if user typed numbers e.g. "29", "40", "47", "56", "65", "62"
    const numberMatches = cleaned.match(/\b\d{1,3}\b/g);
    if (numberMatches) {
      for (const num of numberMatches) {
        if (
          outlet.keywords.some((k) => k.includes(num)) ||
          outlet.name.includes(num) ||
          outlet.area.includes(num)
        ) {
          return true;
        }
      }
    }

    return false;
  });

  // If user coordinates provided, sort matched outlets so the closest is first!
  if (userCoords && matches.length > 0) {
    matches = sortOutletsByDistance(matches, userCoords.lat, userCoords.lng);
  }

  return {
    matched: matches.length > 0,
    outlets: matches,
    cleanedQuery: query,
  };
}
