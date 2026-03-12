export interface Business {
  id: number;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroTitle: string;
  color: string;
}

export const businesses: Business[] = [
  {
    id: 1,
    name: "NAAAS",
    subtitle: "LOGISTICS",
    description: "Global logistics solutions connecting continents with precision and speed.",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    heroTitle: "NAAAS LOGISTICS",
    color: "#C8A951",
  },
  {
    id: 2,
    name: "NAAAS",
    subtitle: "EVENTS & MARKETING",
    description: "World-class events and marketing experiences that inspire and engage.",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    heroTitle: "NAAAS EVENTS MARKETING",
    color: "#C8A951",
  },
  {
    id: 3,
    name: "MEDICAL TECH",
    subtitle: "FOR MEDICINES",
    description: "Innovative medical technology solutions for a healthier tomorrow.",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    heroTitle: "MEDICAL TECH FOR MEDICINES",
    color: "#2563EB",
  },
  {
    id: 4,
    name: "NAAAS",
    subtitle: "REAL-ESTATE",
    description: "Premium real estate developments shaping skylines across the region.",
    heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
    heroTitle: "NAAAS REAL ESTATE",
    color: "#C8A951",
  },
  {
    id: 5,
    name: "NAAAS",
    subtitle: "AGRICULTURE",
    description: "Sustainable agriculture solutions feeding communities and fostering growth.",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80",
    heroTitle: "NAAAS AGRICULTURE",
    color: "#16A34A",
  },
  {
    id: 6,
    name: "NAAAS",
    subtitle: "TRAVEL & HOSPITALITY",
    description: "Luxury travel and hospitality experiences crafted for the discerning traveler.",
    heroImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
    heroTitle: "NAAAS TRAVEL & HOSPITALITY",
    color: "#C8A951",
  },
];

export const navLinks = [
  { label: "About us", href: "#about" },
  { label: "Our Businesses", href: "#businesses" },
  { label: "Career", href: "#career" },
  { label: "Contact us", href: "#contact" },
  { label: "Media", href: "#media" },
];
