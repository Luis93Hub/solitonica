export interface Product {
  id: number;
  nameKey: string;
  descriptionKey: string;
  phrase: string;
  price: number;
  category: 'casual' | 'patriotic' | 'humor';
  colors: string[];
  sizes: string[];
  materials: string[];
  image?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  color: string;
  size: string;
  material: string;
  quantity: number;
}

export type FilterType = 'all' | 'casual' | 'patriotic' | 'humor';
