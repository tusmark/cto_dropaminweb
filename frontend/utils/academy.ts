import academyData from '../academy-data.json';

export interface Level {
  id: number;
  title: string;
  description: string;
  target_audience: string;
}

export interface Stats {
  avg_rating: number;
  total_reviews: number;
  kcal_range: string;
  retention_rate: string;
}

export interface Testimonial {
  id: number;
  author: string;
  text: string;
  rating: number;
  source: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: number;
  currency: string;
  features: string[];
}

export interface AcademyData {
  levels: Level[];
  stats: Stats;
  testimonials: Testimonial[];
  pricing: PricingPlan[];
}

export const getAcademyData = (): AcademyData => {
  return academyData as AcademyData;
};

export const getLevels = (): Level[] => {
  return academyData.levels;
};

export const getStats = (): Stats => {
  return academyData.stats;
};

export const getTestimonials = (): Testimonial[] => {
  return academyData.testimonials;
};

export const getPricing = (): PricingPlan[] => {
  return academyData.pricing;
};
