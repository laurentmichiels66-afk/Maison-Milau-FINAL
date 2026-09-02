export type Language = 'nl' | 'en' | 'fr';

export interface RouteDefinition {
  route: string;
  name: string;
  componentName: string;
  authRequired?: boolean;
  role?: string;
  canonical: string;
}

export interface SitemapEntry {
  path: string;
  title: string;
  category: 'General' | 'Catalog' | 'Commerce' | 'B2B' | 'Events' | 'Services' | 'Support' | 'Company' | 'Portal' | 'Administration';
  priority: number;
  description: string;
}

export interface DatabaseEntity {
  name: string;
  table: string;
  description: string;
  attributes: string[];
}

export interface MenuItem {
  title: string;
  path: string;
  subcategories?: { title: string; path: string }[];
}

export interface CoffeeCatalogItem {
  id: string;
  name: string;
  range: 'Milau Selection' | 'Milau Premium' | 'Milau Prestige' | 'Barrel Aged' | 'Naturally Infused' | 'Single Origin';
  type: string;
  startingPrice: number;
  expectedScaScore: string;
  beanSelection: string[];
  flavors: string[];
  character: string;
  originDetails?: string;
  barrelInfo?: string;
  infusionMethod?: string;
  webshopProductId: string;
}

export interface WebshopCoffeeProduct {
  id: string;
  name: string;
  catalogId: string;
  category: 'houseblends' | 'barrel-aged' | 'infused' | 'single-origin';
  prices: {
    '250g': number;
    '500g': number;
    '1000g': number;
    '2000g'?: number;
  };
  scaScore: string;
  description: string;
  roastStyle: string;
}

export interface GiftboxProduct {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
}

export interface AccessoryProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  weight: string;
  grind: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  customerName: string;
  accountType: 'b2c' | 'b2b';
  createdAt: string;
  items: CartItem[];
  totalAmount: number;
  vatAmount: number;
  paymentMethod: string;
  paymentStatus: string;
  trackingCode: string;
  shippingStatus: string;
  invoiceNumber: string;
  pomTransactionId: string;
}

export interface Subscription {
  id: string;
  customerName: string;
  planName: string;
  frequency: string;
  weight: string;
  grind: string;
  amount: number;
  status: 'Actief' | 'Gepauzeerd' | 'Geannuleerd';
  nextDelivery: string;
  paymentMethod: string;
}

export interface FormContract {
  name: string;
  endpoint: string;
  validationRules: string[];
  actionDescription: string;
  successAction: string;
  errorAction: string;
}
