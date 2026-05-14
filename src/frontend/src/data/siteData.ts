export const BUSINESS_INFO = {
  name: "Grow Big Leasing & Real Estate",
  tagline: "Helping Businesses Expand Through Smart Real Estate",
  phone: "7572905655",
  whatsapp: "7572905655",
  address: "Near Ice Factory, road, Udaipur, Rajasthan 313001",
  rating: 5.0,
  ownerName: "Deepak Gahrani",
  googleRating: "5.0",
};

export const NAV_LINKS = [
  { label: "Services", href: "#sectors" },
  { label: "Properties", href: "#properties" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export const TRUST_ITEMS = [
  "🏢 Commercial Leasing Experts",
  "📈 Franchise Expansion Consulting",
  "🏨 Hospitality & Retail Spaces",
  "🏭 Industrial & Warehouse Properties",
  "💼 Investment Consulting",
];

export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  cta: string;
}

export const SERVICES: Service[] = [
  {
    id: "franchise",
    name: "Franchise Leasing",
    icon: "Store",
    description:
      "Strategic locations for franchise businesses across Rajasthan",
    cta: "Explore",
  },
  {
    id: "hotels",
    name: "Hotels & Restaurants",
    icon: "Building2",
    description: "Premium hospitality spaces — lease or acquire",
    cta: "Explore",
  },
  {
    id: "warehouses",
    name: "Warehouses",
    icon: "Warehouse",
    description: "Industrial and storage facilities for logistics operations",
    cta: "Explore",
  },
  {
    id: "restaurants",
    name: "Restaurant Setup",
    icon: "UtensilsCrossed",
    description: "Complete F&B venue consulting and space acquisition",
    cta: "Explore",
  },
  {
    id: "industrial",
    name: "Industrial Plots",
    icon: "Factory",
    description: "Prime industrial land for manufacturing and production",
    cta: "Explore",
  },
  {
    id: "farmhouses",
    name: "Farm Houses",
    icon: "Home",
    description: "Luxury farm estates for investment and leisure",
    cta: "Explore",
  },
  {
    id: "commercial",
    name: "Commercial Leasing",
    icon: "Briefcase",
    description: "Premium commercial spaces for businesses and brands",
    cta: "Explore",
  },
];

export interface Property {
  id: number;
  title: string;
  type: string;
  location: string;
  area: string;
  price: string;
  roi: string;
  description: string;
  features: string[];
  investmentType: string;
  status: string;
  imageUrl: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Prime Retail Complex — Hiran Magri",
    type: "Commercial",
    location: "Hiran Magri, Udaipur",
    area: "3,200 sq ft",
    price: "₹1.8L/mo",
    roi: "9.2% ROI",
    description:
      "A premium retail complex in the heart of Udaipur's busiest commercial hub. Suitable for national brands, showrooms, and franchise operations. Ground floor with high visibility.",
    features: [
      "High Footfall Location",
      "Ample Parking",
      "Power Backup",
      "24/7 Security",
    ],
    investmentType: "Retail Lease",
    status: "Available",
    imageUrl: "/assets/generated/property-retail.dim_800x600.jpg",
  },
  {
    id: 2,
    title: "Boutique Hotel Property — Lake View",
    type: "Hospitality",
    location: "Lake Pichola Area, Udaipur",
    area: "8,000 sq ft",
    price: "₹2.5Cr",
    roi: "11% ROI",
    description:
      "A stunning heritage-style boutique hotel property with lake views. 24 rooms, restaurant space, and event lawn included. Prime tourist destination location.",
    features: ["Lake View", "24 Rooms", "Restaurant Space", "Event Lawn"],
    investmentType: "Sale",
    status: "Available",
    imageUrl: "/assets/generated/property-hotel.dim_800x600.jpg",
  },
  {
    id: 3,
    title: "Modern Warehouse — Industrial Zone",
    type: "Warehouse",
    location: "RIICO Industrial Area, Udaipur",
    area: "15,000 sq ft",
    price: "₹95K/mo",
    roi: "8.5% ROI",
    description:
      "State-of-the-art warehouse with loading docks, fire suppression system, and 24-hour access. Ideal for e-commerce fulfillment, FMCG distribution, or manufacturing.",
    features: [
      "Loading Docks",
      "Fire Suppression",
      "24Hr Access",
      "Office Space",
    ],
    investmentType: "Warehouse Lease",
    status: "Available",
    imageUrl: "/assets/generated/property-warehouse.dim_800x600.jpg",
  },
  {
    id: 4,
    title: "Franchise Restaurant Space",
    type: "F&B",
    location: "City Center, Udaipur",
    area: "1,800 sq ft",
    price: "₹75K/mo",
    roi: "12% ROI",
    description:
      "Ready-to-fit restaurant and franchise space in Udaipur's commercial center. Walk-in cold storage, kitchen infrastructure, and outdoor seating included.",
    features: [
      "Kitchen Infrastructure",
      "Cold Storage",
      "Outdoor Seating",
      "High Visibility",
    ],
    investmentType: "F&B Lease",
    status: "Available",
    imageUrl: "/assets/generated/property-franchise.dim_800x600.jpg",
  },
  {
    id: 5,
    title: "Industrial Plot — Nathdwara Road",
    type: "Industrial",
    location: "Nathdwara Road, Udaipur",
    area: "2 Acres",
    price: "₹4.2Cr",
    roi: "10% ROI",
    description:
      "Premium industrial plot with excellent road connectivity on Nathdwara Road. RIICO approved, utilities available, ideal for manufacturing or logistics hub.",
    features: [
      "RIICO Approved",
      "Road Connectivity",
      "Utility Ready",
      "Expandable",
    ],
    investmentType: "Land Sale",
    status: "Available",
    imageUrl: "/assets/generated/property-industrial.dim_800x600.jpg",
  },
  {
    id: 6,
    title: "Luxury Farm House Estate",
    type: "Farm House",
    location: "Badi Lake Area, Udaipur",
    area: "1.5 Acres",
    price: "₹2.8Cr",
    roi: "8% ROI",
    description:
      "Sprawling luxury farmhouse estate near the serene Badi Lake. Beautifully landscaped gardens, private pool, and luxury residence. Perfect for investment or exclusive retreat.",
    features: [
      "Private Pool",
      "Landscaped Gardens",
      "Lake Proximity",
      "Security",
    ],
    investmentType: "Sale",
    status: "Available",
    imageUrl: "/assets/generated/property-hotel.dim_800x600.jpg",
  },
  {
    id: 7,
    title: "Corporate Office Tower",
    type: "Commercial",
    location: "Sector 11, Udaipur",
    area: "5,400 sq ft",
    price: "₹1.2L/mo",
    roi: "9.8% ROI",
    description:
      "Modern corporate office space across two floors in an A-grade commercial tower. Suitable for IT companies, consulting firms, or regional headquarters.",
    features: [
      "Central AC",
      "High-Speed Internet",
      "Conference Rooms",
      "Cafeteria",
    ],
    investmentType: "Office Lease",
    status: "Available",
    imageUrl: "/assets/generated/property-retail.dim_800x600.jpg",
  },
  {
    id: 8,
    title: "Mixed-Use Commercial Complex",
    type: "Commercial",
    location: "Sukher, Udaipur",
    area: "12,000 sq ft",
    price: "₹3.5Cr",
    roi: "13% ROI",
    description:
      "High-potential mixed-use development in rapidly growing Sukher area. Ground retail, upper floors commercial. Excellent investment with strong rental yield projections.",
    features: [
      "Mixed Use Zoning",
      "High Growth Area",
      "Rental Yield",
      "Modern Construction",
    ],
    investmentType: "Investment",
    status: "Available",
    imageUrl: "/assets/generated/property-warehouse.dim_800x600.jpg",
  },
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Franchise Owner",
    company: "Domino's Franchisee, Udaipur",
    quote:
      "Grow Big helped us find the perfect location for our franchise. Their commercial expertise and market knowledge saved us months of searching. Highly recommended for any serious business expansion.",
    rating: 5,
    avatar: "RS",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Hotel Developer",
    company: "Meridian Hospitality Group",
    quote:
      "We were looking for a boutique hotel property in Udaipur for over a year. Grow Big identified an opportunity that perfectly matched our vision, and the deal was structured flawlessly.",
    rating: 5,
    avatar: "PM",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Managing Director",
    company: "SVS Industrial Pvt. Ltd.",
    quote:
      "Their understanding of industrial real estate is exceptional. They found us an RIICO-approved plot with all clearances within 3 weeks. A truly professional consultancy.",
    rating: 5,
    avatar: "VS",
  },
  {
    id: 4,
    name: "Anita Joshi",
    role: "Restaurant Chain Owner",
    company: "Spice Trail Restaurants",
    quote:
      "Deepak's team understands the F&B business deeply. They know what makes a restaurant location work. Our new outlet is performing 40% better than our previous location.",
    rating: 5,
    avatar: "AJ",
  },
  {
    id: 5,
    name: "Suresh Patel",
    role: "Investment Director",
    company: "Patel Commercial Ventures",
    quote:
      "Grow Big's market insights on Udaipur's growth corridors were spot-on. We invested in a commercial complex they recommended and ROI has exceeded projections.",
    rating: 5,
    avatar: "SP",
  },
];

export interface Sector {
  id: string;
  name: string;
  description: string;
  stat: string;
  icon: string;
}

export const SECTORS: Sector[] = [
  {
    id: "hospitality",
    name: "Hospitality",
    description: "Hotels, resorts, and experiential dining venues",
    stat: "50+ Projects",
    icon: "Hotel",
  },
  {
    id: "retail",
    name: "Retail",
    description: "Premium retail spaces and high-street commercial",
    stat: "120+ Leases",
    icon: "ShoppingBag",
  },
  {
    id: "industrial",
    name: "Industrial",
    description: "Manufacturing, logistics, and industrial parks",
    stat: "35+ Deals",
    icon: "Factory",
  },
  {
    id: "warehousing",
    name: "Warehousing",
    description: "Modern storage and fulfillment infrastructure",
    stat: "80+ Units",
    icon: "Package",
  },
  {
    id: "franchises",
    name: "Franchises",
    description: "End-to-end franchise expansion and site selection",
    stat: "40+ Brands",
    icon: "Network",
  },
];

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: "Requirement Analysis",
    description:
      "Deep-dive into your business model, expansion goals, and specific site requirements.",
  },
  {
    step: 2,
    title: "Opportunity Matching",
    description:
      "Curated property shortlist aligned to your strategy, with market data and viability analysis.",
  },
  {
    step: 3,
    title: "Site Evaluation",
    description:
      "On-ground assessment of shortlisted properties — footfall, infrastructure, and compliance checks.",
  },
  {
    step: 4,
    title: "Deal Structuring",
    description:
      "Negotiation, documentation, legal due diligence, and lease/purchase structuring.",
  },
  {
    step: 5,
    title: "Expansion Execution",
    description:
      "Handover coordination, fit-out guidance, and post-deal support to ensure your launch succeeds.",
  },
];

export interface MarketInsight {
  id: string;
  title: string;
  value: string;
  unit: string;
  description: string;
  trend: string;
}

export const MARKET_INSIGHTS: MarketInsight[] = [
  {
    id: "growth",
    title: "Growth Zones",
    value: "6",
    unit: "Active Corridors",
    description: "Emerging commercial micro-markets in Udaipur",
    trend: "+18% YoY",
  },
  {
    id: "retail",
    title: "Retail Demand",
    value: "340K",
    unit: "sq ft Vacant",
    description: "Available premium retail inventory across Udaipur",
    trend: "High Absorption",
  },
  {
    id: "franchise",
    title: "Franchise Opportunities",
    value: "25+",
    unit: "Brands Seeking",
    description: "National franchise brands actively seeking Udaipur locations",
    trend: "Growing",
  },
  {
    id: "industrial",
    title: "Industrial Expansion",
    value: "₹850Cr",
    unit: "Planned Investment",
    description:
      "Committed industrial investment in Udaipur region through 2026",
    trend: "+24% Growth",
  },
];
