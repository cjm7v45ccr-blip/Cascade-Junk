import { ServiceItem, PricingTier, Testimonial, BeforeAfterItem, FaqItem } from './types';

export const BUSINESS_INFO = {
  name: "Cascade Junk Removal",
  tagline: "Fast, Reliable Junk Removal in Wenatchee & East Wenatchee",
  phone: "5094334493",
  phoneDisplay: "509-433-4493",
  email: "marco98845@gmail.com",
  hours: "Monday - Friday: 10:00 AM - 5:00 PM",
  mainAddress: "Wenatchee & East Wenatchee, WA",
  serviceRadius: "Serving Wenatchee, East Wenatchee",
  instagram: "Cascade.JunkRemoval",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "general-junk",
    title: "General Junk Removal",
    shortDesc: "Please provide specific services.",
    fullDesc: "Please provide a list of specific services you offer (e.g., furniture, appliances, yard waste).",
    iconName: "Truck",
    imageUrl: "", 
    commonItems: []
  }
];

export const PRICING_TIERS: PricingTier[] = [];

export const BEFORE_AFTER_GALLERY: BeforeAfterItem[] = [];

export const REVIEWS_LIST: Testimonial[] = [];

export const SERVICE_AREAS_TOWNS = [
  "Wenatchee", "East Wenatchee"
];

export const FAQ_QUESTIONS: FaqItem[] = [
  {
    question: "Do you offer same-day service?",
    answer: "Yes! We operate Monday through Friday from 10:00 AM to 5:00 PM across Wenatchee and East Wenatchee. Give us a call or text us early in the day for same-day availability.",
    category: "Scheduling"
  },
  {
    question: "What items do you NOT take?",
    answer: "For safety and legal reasons, we strictly do NOT take hazardous waste or wet paint. This includes toxic chemicals, gasoline, oil, asbestos, pressurized propane tanks, medical waste, and sealed drums.",
    category: "Services"
  }
];
