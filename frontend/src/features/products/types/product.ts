// src/features/products/types/product.ts
export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  featured?: boolean;
};