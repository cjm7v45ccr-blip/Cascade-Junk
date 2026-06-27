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
    fullDesc: "Got an old couch or heavy mattress you need gone? Marco and Ian will carefully remove all types of furniture from anywhere in your home, and they are always careful with your walls and floors.",
    iconName: "Sofa",
    imageUrl: "/src/assets/images/junk_removal_furniture_1782588872739.jpg",
    commonItems: ["Sofas & Couches", "Mattresses", "Desks & Tables", "Dressers & Wardrobes"],
    startingPrice: "$75+"
  },
  {
    id: "appliances",
    title: "Appliance Recycling",
    shortDesc: "Refrigerators, washers, dryers, and electronics.",
    fullDesc: "Need to get rid of old appliances? Marco and Ian haul them away safely and make sure they get recycled properly. Don't risk your back—let them handle the heavy lifting.",
    iconName: "Monitor",
    imageUrl: "/src/assets/images/appliance_recycling_1782589086141.jpg",
    commonItems: ["Refrigerators & Freezers", "Washers & Dryers", "Stoves & Ovens", "TVs & Electronics"],
    startingPrice: "$50+"
  },
  {
    id: "yard-waste",
    title: "Yard Waste Removal",
    shortDesc: "Branches, clippings, fencing, and outdoor debris.",
    fullDesc: "Need your yard cleared? Marco and Ian haul off branches, clippings, and old fencing so you can actually use your space again.",
    iconName: "Leaf",
    imageUrl: "/src/assets/images/yard_waste_1782589096551.jpg",
    commonItems: ["Tree Branches", "Grass & Leaves", "Old Fencing", "Sheds & Decking"],
    startingPrice: "$75+"
  },
  {
    id: "cleanouts",
    title: "Full Cleanouts",
    shortDesc: "Garages, basements, estates, and offices.",
    fullDesc: "Garage or basement packed with junk? Marco and Ian will clear it out for you, fast.",
    iconName: "Box",
    imageUrl: "/src/assets/images/cleanout_photo_1782589108341.jpg",
    commonItems: ["Garage Cleanouts", "Estate Cleanouts", "Storage Units", "Office Furniture"],
    startingPrice: "$150+"
  },
  {
    id: "construction",
    title: "Construction Debris",
    shortDesc: "Wood, drywall, tile, and remodeling waste.",
    fullDesc: "Renovating? Marco and Ian take care of the drywall, wood, and leftover mess so you can enjoy the finished space.",
    iconName: "Hammer",
    imageUrl: "/src/assets/images/construction_debris_1782589117287.jpg",
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
    answer: "Our pricing is volume-based, meaning you only pay for the amount of space your items take up. Prices include labor, hauling, and disposal fees. We provide a firm estimate on-site before we begin any work.",
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
