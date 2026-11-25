
import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Football Jersey",
    slug: "football-jersey",
    category: "Sports Apparel",
    price: 2500,
    image: "/images/products/football-jersey.jpg",
    featured: true,
  },
  {
    id: "2",
    name: "Football Boots",
    slug: "football-boots",
    category: "Sports Footwear",
    price: 4500,
    image: "/images/products/football-boots.jpg",
    featured: true,
  },
  {
    id: "3",
    name: "Basketball",
    slug: "basketball",
    category: "Sports Equipment",
    price: 2000,
    image: "/images/products/basketball.jpg",
    featured: true,
  },
  {
    id: "4",
    name: "Training Tracksuit",
    slug: "training-tracksuit",
    category: "Sports Apparel",
    price: 3800,
    image: "/images/products/tracksuit.jpg",
    featured: true,
  },
];
