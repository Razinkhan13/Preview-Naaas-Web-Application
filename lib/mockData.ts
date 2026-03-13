export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  tag?: string;
  description: string;
}

export const categories = ["All", "Women", "Men", "Accessories", "New Arrivals", "Sale"];

export const products: Product[] = [
  {
    id: 1,
    name: "Linen Wrap Dress",
    category: "Women",
    price: 4800,
    originalPrice: 6500,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    tag: "Sale",
    description: "Effortlessly elegant linen wrap dress for warm-weather dressing.",
  },
  {
    id: 2,
    name: "Structured Blazer",
    category: "Women",
    price: 7200,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
    tag: "New",
    description: "Power-dressing blazer with a modern relaxed silhouette.",
  },
  {
    id: 3,
    name: "Classic Oxford Shirt",
    category: "Men",
    price: 3200,
    image: "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=600&q=80",
    description: "Crisp oxford-weave shirt that transitions from desk to dinner.",
  },
  {
    id: 4,
    name: "Slim-Fit Chinos",
    category: "Men",
    price: 4100,
    originalPrice: 4800,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    tag: "Sale",
    description: "Tailored slim-fit chinos in a versatile neutral palette.",
  },
  {
    id: 5,
    name: "Woven Leather Tote",
    category: "Accessories",
    price: 5500,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    tag: "New",
    description: "Hand-woven genuine leather tote — everyday luxury redefined.",
  },
  {
    id: 6,
    name: "Minimalist Watch",
    category: "Accessories",
    price: 9800,
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=600&q=80",
    description: "Clean-dial minimalist watch with a mesh stainless-steel strap.",
  },
  {
    id: 7,
    name: "Silk Midi Skirt",
    category: "New Arrivals",
    price: 5900,
    image: "https://images.unsplash.com/photo-1582533561751-ef6f5f65a3a8?w=600&q=80",
    tag: "New",
    description: "Fluid silk midi skirt with a graceful movement.",
  },
  {
    id: 8,
    name: "Relaxed Linen Trousers",
    category: "New Arrivals",
    price: 3800,
    image: "https://images.unsplash.com/photo-1567025820014-37dda2703f62?w=600&q=80",
    tag: "New",
    description: "Breathable linen trousers — the definition of relaxed sophistication.",
  },
];
