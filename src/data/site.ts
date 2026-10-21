export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const site = {
  name: "Nestora",
  tagline: "Real Estate",
  email: "hello@nestora.estate",
  phone: "+1 (415) 555-0142",
  address: "240 Harbor Avenue, Suite 12, San Francisco, CA 94105",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type FloorPlan = {
  name: string;
  rooms: string[];
  description: string;
  dimensions: string[];
};

export type Property = {
  slug: string;
  name: string;
  location: string;
  type: "House" | "Apartment" | "Villa" | "Loft";
  status: "For Sale" | "Under Offer" | "For Rent";
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  cover: string;
  gallery: string[];
  lead: string;
  description: string[];
  features: string[];
  amenities: string[];
  floorPlans: FloorPlan[];
  neighbourhood: string;
  featured?: boolean;
};

const defaultAmenities = [
  "Underfloor heating",
  "Private garden",
  "Off-street parking",
  "EV charging",
  "Smart home system",
  "Full-fibre broadband",
  "Wine storage",
  "Home office",
  "Solar panels",
  "Security system",
  "Walk-in wardrobes",
  "Laundry room",
];

const defaultPlans = (beds: number): FloorPlan[] => [
  {
    name: "Ground floor",
    rooms: ["Kitchen", "Living", "Dining", "Garden"],
    description:
      "An open-plan ground floor that runs front to back, with full-height glazing opening onto the garden terrace.",
    dimensions: ["Kitchen / Dining — 7.2m × 5.1m", "Living — 6.4m × 4.8m", "Terrace — 9.0m × 3.2m"],
  },
  {
    name: "First floor",
    rooms: ["Primary suite", "Dressing", "Bath"],
    description:
      "The primary suite occupies the whole first floor, with a dressing room and a stone-lined bathroom.",
    dimensions: ["Bedroom — 5.6m × 4.4m", "Dressing — 3.2m × 2.6m", "Bath — 3.8m × 2.9m"],
  },
  {
    name: "Second floor",
    rooms: [`${Math.max(beds - 1, 1)} bedrooms`, "Shower room", "Study"],
    description:
      "Guest and family bedrooms sit under a vaulted roof, each with built-in storage and skylights.",
    dimensions: ["Bedroom 2 — 4.2m × 3.9m", "Bedroom 3 — 3.9m × 3.4m", "Study — 3.0m × 2.4m"],
  },
];

export const properties: Property[] = [
  {
    slug: "willow-crest-residence",
    name: "Willow Crest Residence",
    location: "Pacific Heights, San Francisco",
    type: "House",
    status: "For Sale",
    price: 4250000,
    beds: 4,
    baths: 3,
    sqft: 3180,
    cover: "photo-1600596542815-ffad4c1539a9",
    gallery: ["photo-1600607687939-ce8a6c25118c", "photo-1600566753190-17f0baa2a6c3", "photo-1616486338812-3dadae4b4ace"],
    lead: "A rebuilt family house on a quiet tree-lined street, with a glazed ground floor that opens onto a walled garden.",
    description: [
      "Willow Crest was taken back to its frame in 2022 and rebuilt with care. The result is a calm, light-filled house that keeps the proportions of the original while working the way a modern family lives.",
      "The ground floor is one generous space for cooking, dining and sitting, wrapped in oak and limestone. Upstairs, four bedrooms are arranged over two floors, the primary suite taking a floor of its own.",
    ],
    features: [
      "Glazed ground floor onto a walled garden",
      "Four bedrooms over two floors",
      "Freehold with off-street parking",
      "Underfloor heating and heat-recovery ventilation",
    ],
    amenities: defaultAmenities,
    floorPlans: defaultPlans(4),
    neighbourhood:
      "Pacific Heights is one of the city's most settled neighbourhoods, with boutique shopping on Fillmore Street, excellent schools and sweeping bay views a short walk away.",
    featured: true,
  },
  {
    slug: "skyline-penthouse",
    name: "Skyline Penthouse",
    location: "SoMa, San Francisco",
    type: "Apartment",
    status: "For Sale",
    price: 2875000,
    beds: 3,
    baths: 3,
    sqft: 2410,
    cover: "photo-1600607687939-ce8a6c25118c",
    gallery: ["photo-1502672260266-1c1ef2d93688", "photo-1618221195710-dd6b41faaea6", "photo-1522708323590-d24dbb6b0267"],
    lead: "A top-floor apartment with a wraparound terrace and uninterrupted views across the bay.",
    description: [
      "Set across the entire top floor of a converted warehouse, the penthouse pairs exposed concrete with warm timber and a 1,000 sq ft private terrace.",
      "A private lift opens straight into the living space. Three en-suite bedrooms are arranged for privacy, and a full-height wine wall separates the kitchen from the lounge.",
    ],
    features: ["Wraparound private terrace", "Private lift access", "Three en-suite bedrooms", "Concierge and gym"],
    amenities: defaultAmenities,
    floorPlans: defaultPlans(3),
    neighbourhood:
      "SoMa puts galleries, restaurants and the waterfront on your doorstep, with fast links to the Financial District and Caltrain.",
    featured: true,
  },
  {
    slug: "the-glass-pavilion",
    name: "The Glass Pavilion",
    location: "Sausalito, Marin County",
    type: "Villa",
    status: "For Sale",
    price: 6400000,
    beds: 5,
    baths: 5,
    sqft: 5120,
    cover: "photo-1613490493576-7fde63acd811",
    gallery: ["photo-1600585154340-be6161a56a0c", "photo-1600210492486-724fe5c67fb0", "photo-1600573472550-8090b5e0745e"],
    lead: "An architect-designed villa set into the hillside, with an infinity pool looking straight out to the Golden Gate.",
    description: [
      "Designed around the view, the Pavilion steps down the hill in three glazed volumes, each opening onto its own terrace.",
      "Five bedrooms, a cinema room and a separate guest studio make it as practical for family life as it is for entertaining.",
    ],
    features: ["Heated infinity pool", "Separate guest studio", "Cinema and games room", "Three-car garage"],
    amenities: defaultAmenities,
    floorPlans: defaultPlans(5),
    neighbourhood:
      "Sausalito's waterfront village offers a ferry into the city, independent restaurants and miles of coastal trails.",
    featured: true,
  },
  {
    slug: "harbor-view-apartment",
    name: "Harbor View Apartment",
    location: "Marina District, San Francisco",
    type: "Apartment",
    status: "Under Offer",
    price: 1150000,
    beds: 2,
    baths: 2,
    sqft: 1180,
    cover: "photo-1502672260266-1c1ef2d93688",
    gallery: ["photo-1522708323590-d24dbb6b0267", "photo-1618221195710-dd6b41faaea6", "photo-1616486338812-3dadae4b4ace"],
    lead: "A bright corner apartment moments from the Marina Green, finished to an exceptional standard.",
    description: [
      "Dual-aspect windows fill this corner apartment with light from morning to evening. The kitchen has been fitted with handleless cabinetry and integrated appliances.",
      "Both bedrooms have built-in storage, and the building offers secure parking and a shared roof terrace.",
    ],
    features: ["Corner, dual-aspect plan", "Secure parking space", "Shared roof terrace", "Moments from the waterfront"],
    amenities: defaultAmenities,
    floorPlans: defaultPlans(2),
    neighbourhood:
      "The Marina is known for its waterfront paths, Chestnut Street cafés and easy access to the Presidio.",
    featured: true,
  },
  {
    slug: "cedar-lane-townhouse",
    name: "Cedar Lane Townhouse",
    location: "Noe Valley, San Francisco",
    type: "House",
    status: "Under Offer",
    price: 1950000,
    beds: 4,
    baths: 2,
    sqft: 2640,
    cover: "photo-1564013799919-ab600027ffc6",
    gallery: ["photo-1600566753190-17f0baa2a6c3", "photo-1600210492486-724fe5c67fb0", "photo-1616486338812-3dadae4b4ace"],
    lead: "A classic townhouse with a sunny rear garden on one of Noe Valley's prettiest streets.",
    description: [
      "Original period details sit alongside a modern kitchen extension that opens onto a south-facing garden.",
      "Four bedrooms over two upper floors give space for a growing family or a dedicated home office.",
    ],
    features: ["South-facing rear garden", "Kitchen extension with skylights", "Period details throughout", "Four bedrooms"],
    amenities: defaultAmenities,
    floorPlans: defaultPlans(4),
    neighbourhood: "Noe Valley has a village feel, with independent shops on 24th Street and some of the city's best weather.",
  },
  {
    slug: "oakridge-modern-villa",
    name: "Oakridge Modern Villa",
    location: "Palo Alto, Silicon Valley",
    type: "Villa",
    status: "For Sale",
    price: 5600000,
    beds: 5,
    baths: 4,
    sqft: 4120,
    cover: "photo-1580587771525-78b9dba3b914",
    gallery: ["photo-1600585154340-be6161a56a0c", "photo-1600573472550-8090b5e0745e", "photo-1600607688969-a5bfcd646154"],
    lead: "A contemporary villa on a landscaped half-acre plot, with a pool, pool house and mature oaks.",
    description: [
      "Wide spans of glass and a cantilevered roof frame the garden from every main room.",
      "The plot includes a pool house with its own kitchen, ideal for guests or long summer evenings.",
    ],
    features: ["Half-acre landscaped plot", "Pool and pool house", "Five bedrooms", "Solar with battery storage"],
    amenities: defaultAmenities,
    floorPlans: defaultPlans(5),
    neighbourhood: "Close to University Avenue and top-rated schools, with Stanford and major tech campuses minutes away.",
  },
  {
    slug: "foundry-loft",
    name: "Foundry Loft",
    location: "Mission District, San Francisco",
    type: "Loft",
    status: "For Rent",
    price: 985000,
    beds: 2,
    baths: 1,
    sqft: 1040,
    cover: "photo-1600210492486-724fe5c67fb0",
    gallery: ["photo-1618221195710-dd6b41faaea6", "photo-1522708323590-d24dbb6b0267", "photo-1502672260266-1c1ef2d93688"],
    lead: "A double-height loft in a converted foundry, with original steel windows and a mezzanine bedroom.",
    description: [
      "Five-metre ceilings and original steel-framed windows give this loft real character.",
      "A mezzanine holds the main bedroom, leaving the floor below open for living, dining and work.",
    ],
    features: ["Double-height ceilings", "Original steel windows", "Mezzanine bedroom", "Bike storage"],
    amenities: defaultAmenities,
    floorPlans: defaultPlans(2),
    neighbourhood: "The Mission is full of murals, taquerias and Dolores Park, with BART just around the corner.",
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export const services = [
  {
    slug: "buying-advisory",
    title: "Buying Advisory",
    image: "photo-1560518883-ce09059eeffa",
    points: ["Search brief and shortlist", "Off-market access", "Survey and due diligence", "Negotiation on your behalf"],
    text: "We search on your behalf, open doors to homes that never reach the portals, and negotiate the right price.",
  },
  {
    slug: "selling-advisory",
    title: "Selling Advisory",
    image: "photo-1582407947304-fd86f028f716",
    points: ["Accurate valuation", "Editorial photography", "Targeted buyer outreach", "Sale progression to close"],
    text: "From valuation to closing, we present your home well and find buyers who are ready to move.",
  },
  {
    slug: "lettings-and-rentals",
    title: "Lettings & Rentals",
    image: "photo-1522708323590-d24dbb6b0267",
    points: ["Tenant referencing", "Rental valuations", "Lease preparation", "Compliance checks"],
    text: "We find reliable tenants quickly and handle the paperwork so letting your home feels effortless.",
  },
  {
    slug: "ongoing-advisory",
    title: "Ongoing Advisory",
    image: "photo-1486406146926-c627a92ad1ab",
    points: ["Portfolio reviews", "Market reporting", "Refurbishment guidance", "Long-term planning"],
    text: "Long after the keys change hands, we stay on hand to help you make the most of your property.",
  },
];

export const support = [
  { title: "Mortgage Services", image: "photo-1554224155-6726b3ff858f" },
  { title: "Property Management", image: "photo-1600047509807-ba8f99d2cdde" },
  { title: "Construction & Development", image: "photo-1503387762-592deb58ef4e" },
];

export const process = [
  { title: "Brief & Shortlist", text: "We listen first, then build a shortlist that fits how you actually want to live." },
  { title: "Viewings & Due Diligence", text: "We view with you, check the details and flag anything that matters." },
  { title: "Offer & Negotiation", text: "We advise on price and negotiate firmly so you never overpay." },
  { title: "Closing & Handover", text: "We manage every step to completion, right up to the day you get the keys." },
];

export const stats = [
  { value: 1200, suffix: "+", label: "Homes sold for our clients" },
  { value: 26, suffix: " days", label: "Average time from listing to accepted offer" },
  { value: 4.2, prefix: "$", suffix: "B", decimals: 1, label: "Total value of property transacted" },
  { value: 89, suffix: "%", label: "Clients who return or refer a friend" },
];

export const awards = [
  { year: "2025", title: "Best Boutique Agency, West Coast" },
  { year: "2024", title: "Excellence in Client Service" },
  { year: "2023", title: "Regional Agency of the Year" },
];

export const testimonials = [
  { name: "Priya Raman", role: "Sold in Noe Valley", avatar: "photo-1494790108377-be9c29b29330", quote: "They priced our home honestly and found a buyer in under three weeks. Calm, clear and completely on our side." },
  { name: "Charles Fenwick", role: "Investor, Palo Alto", avatar: "photo-1500648767791-00dcc994a43e", quote: "The off-market access alone was worth it. We bought a building that never went public." },
  { name: "Hiroshi Tanaka", role: "Bought in SoMa", avatar: "photo-1472099645785-5658abf4ff4e", quote: "Every question answered within the hour. I never felt rushed and never felt alone in the process." },
  { name: "Eleanor Whitfield", role: "Sold in the Marina", avatar: "photo-1438761681033-6461ffad8d80", quote: "Beautiful photography, the right buyers and a smooth close. I would not use anyone else." },
  { name: "James Aldridge", role: "Landlord, Mission", avatar: "photo-1507003211169-0a1dd7228f2d", quote: "Our rentals have never been fuller. The team handles everything and the reporting is excellent." },
  { name: "Grace Liu", role: "Bought in Sausalito", avatar: "photo-1544005313-94ddf0286df2", quote: "They understood exactly what we were looking for, sometimes better than we did ourselves." },
];

export const faqs = [
  { q: "How are your fees structured?", a: "Our selling fee is a simple percentage of the final sale price, agreed upfront, with no charges until your home sells. Buying advisory is a fixed retainer plus a success fee." },
  { q: "How quickly can you value my home?", a: "We can usually visit within 48 hours and send a written valuation, with comparable sales, within two working days." },
  { q: "What happens if a sale falls through?", a: "It happens occasionally. We keep a list of qualified back-up buyers and move quickly to bring the property back to the market." },
  { q: "Do you handle off-market listings?", a: "Yes. A large share of our sales are agreed privately, with buyers we already know are serious and financially ready." },
  { q: "Do you offer lettings and property management?", a: "We do — from finding tenants to fully managed services covering rent collection, maintenance and compliance." },
  { q: "Which areas do you cover?", a: "We focus on San Francisco, Marin County and the Peninsula, with partner agents across the wider Bay Area." },
];

export const trustItems = [
  "Bay Area property specialists",
  "Buying, selling and letting",
  "Off-market access",
  "Valuations within 48 hours",
  "Established 1998",
];

export const clientLogos = ["Northwind", "Halcyon", "Meridian", "Lumen & Co", "Arbor", "Vantage", "Kestrel", "Oakline", "Solace", "Brightwater"];

export const team = [
  { name: "Olivia Bennett", role: "Founder & Managing Director", image: "photo-1494790108377-be9c29b29330" },
  { name: "Marcus Hale", role: "Head of Sales", image: "photo-1500648767791-00dcc994a43e" },
  { name: "Sofia Moreno", role: "Lettings Director", image: "photo-1438761681033-6461ffad8d80" },
  { name: "Daniel Kim", role: "Buying Advisor", image: "photo-1472099645785-5658abf4ff4e" },
];
