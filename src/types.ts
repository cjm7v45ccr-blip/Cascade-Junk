export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  imageUrl: string;
  commonItems: string[];
  startingPrice: string;
}

export interface PricingTier {
  tier: string;
  fraction: string;
  volume: string;
  priceRange: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  serviceUsed: string;
  avatarUrl?: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  beforeUrl: string;
  afterUrl: string;
  description: string;
  timeTaken: string;
  volumeHauled: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface EstimateResult {
  truckloadTier: string;
  estimatedCubicYards: string;
  priceRange: string;
  detectedItemsBreakdown: string[];
  disposalStrategy: string;
  timeEstimate: string;
  estimatorNotes: string;
  isFallback?: boolean;
}
