import { ServiceItem, PricingTier, Testimonial, BeforeAfterItem, FaqItem } from './types';

export const BUSINESS_INFO = {
  name: "Cascade Junk Removal",
  tagline: "Fast, Reliable Junk Removal in Wenatchee & East Wenatchee",
  phone: "5094334493",
  phoneDisplay: "509-433-4493",
  email: "marco98845@gmail.com",
  hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
  mainAddress: "Wenatchee & East Wenatchee, WA",
  serviceRadius: "Serving Wenatchee, East Wenatchee, and surrounding areas",
  instagram: "Cascade.JunkRemoval",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "furniture",
    title: "Furniture Removal",
    shortDesc: "Couches, mattresses, desks, and more.",
    fullDesc: "Got an old couch or heavy mattress you need gone? We'll carefully remove all types of furniture from anywhere in your home, and we're always careful with your walls and floors.",
    iconName: "Sofa",
    imageUrl: "/src/assets/images/junk_removal_furniture_1782588872739.jpg",
    commonItems: ["Sofas & Couches", "Mattresses", "Desks & Tables", "Dressers & Wardrobes"],
    startingPrice: "$75+"
  },
  {
    id: "appliances",
    title: "Appliance Recycling",
    shortDesc: "Refrigerators, washers, dryers, and electronics.",
    fullDesc: "Need to get rid of old appliances? We haul them away safely and make sure they get recycled properly. Don't risk your back—let us handle the heavy lifting.",
    iconName: "Monitor",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
    commonItems: ["Refrigerators & Freezers", "Washers & Dryers", "Stoves & Ovens", "TVs & Electronics"],
    startingPrice: "$50+"
  },
  {
    id: "yard-waste",
    title: "Yard Waste Removal",
    shortDesc: "Branches, clippings, fencing, and outdoor debris.",
    fullDesc: "Need your yard cleared? We haul off branches, clippings, and old fencing so you can actually use your space again.",
    iconName: "Leaf",
    imageUrl: "https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=600&q=80",
    commonItems: ["Tree Branches", "Grass & Leaves", "Old Fencing", "Sheds & Decking"],
    startingPrice: "$75+"
  },
  {
    id: "cleanouts",
    title: "Full Cleanouts",
    shortDesc: "Garages, basements, estates, and offices.",
    fullDesc: "Garage or basement packed with junk? We’ll clear it out for you, fast.",
    iconName: "Box",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    commonItems: ["Garage Cleanouts", "Estate Cleanouts", "Storage Units", "Office Furniture"],
    startingPrice: "$150+"
  },
  {
    id: "construction",
    title: "Construction Debris",
    shortDesc: "Wood, drywall, tile, and remodeling waste.",
    fullDesc: "Renovating? We take care of the drywall, wood, and leftover mess so you can enjoy the finished space.",
    iconName: "Hammer",
    imageUrl: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=80",
    commonItems: ["Drywall & Wood", "Tile & Flooring", "Pallets", "Remodeling Waste"],
    startingPrice: "$100+"
  }
];

export const PRICING_TIERS: PricingTier[] = [];

export const BEFORE_AFTER_GALLERY: BeforeAfterItem[] = [];

export const REVIEWS_LIST: Testimonial[] = [];

export const SERVICE_AREAS_TOWNS = [
  "Wenatchee", "East Wenatchee", "Cashmere", "Leavenworth", "Chelan", "Entiat", "Malaga", "Rock Island", "Peshastin"
];

export const FAQ_QUESTIONS: FaqItem[] = [
  {
    question: "How do you price your junk removal services?",
    answer: "Our pricing is volume-based, meaning you only pay for the amount of space your items take up in our truck. Prices include labor, hauling, and disposal fees. We provide a firm estimate on-site before we begin any work.",
    category: "Pricing"
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes! We operate Monday through Saturday across the Wenatchee Valley. Give us a call or text us early in the day for same-day or next-day availability.",
    category: "Scheduling"
  },
  {
    question: "What items do you NOT take?",
    answer: "For safety and legal reasons, we strictly do NOT take hazardous waste or wet paint. This includes toxic chemicals, gasoline, oil, asbestos, pressurized propane tanks, medical waste, and sealed drums.",
    category: "Services"
  },
  {
    question: "Do you donate or recycle the items you pick up?",
    answer: "Absolutely. We are committed to keeping our community clean. We sort through the items we collect and do our best to donate usable items to local charities and recycle materials like metals and electronics whenever possible.",
    category: "Services"
  },
  {
    question: "Do I need to be home for the pickup?",
    answer: "Not necessarily! If your junk is accessible outside (like in a driveway or curbside), we can pick it up while you're away. We will call you to confirm the price and you can pay over the phone once the job is complete.",
    category: "Scheduling"
  }
];
