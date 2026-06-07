import { Category, Vendor } from "./types";

export const categories: Category[] = [
  { id: "photography", name: "Photography", iconName: "Camera" },
  { id: "videography", name: "Videography", iconName: "Video" },
  { id: "catering", name: "Catering", iconName: "Utensils" },
  { id: "decoration", name: "Decoration", iconName: "Sparkles" },
  { id: "vehicle-rental", name: "Vehicle Rental", iconName: "Car" },
  { id: "makeup-artists", name: "Makeup Artist", iconName: "Brush" },
  { id: "venues", name: "Venues", iconName: "MapPin" },
];

export const vendors: Vendor[] = [
  {
    id: "Yoihen-captured",
    name: "Yoihen Captured",
    categoryId: "photography",
    categoryName: "Photography",
    rating: 4.9,
    reviews: 128,
    verified: true,
    image: "https://images.unsplash.com/photo-1542044896530-05d3c054e222?auto=format&fit=crop&q=80&w=400&h=300",
    location: "Imphal West",
    description: "Specializing in traditional Manipuri weddings and contemporary candid photography. We capture the essence of your special moments.",
    services: ["Wedding Photography", "Pre-wedding Shoots", "Event Coverage"],
    startingPrice: "₹25,000"
  },
  {
    id: "Kennedy-catering-services",
    name: "Kennedy Catering Services",
    categoryId: "catering",
    categoryName: "Catering",
    rating: 4.7,
    reviews: 84,
    verified: true,
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=400&h=300",
    location: "Imphal East",
    description: "Authentic Manipuri cuisine and multi-cuisine buffet services for grand weddings and intimate gatherings.",
    services: ["Traditional Manipuri Feast", "Multi-cuisine Buffet", "Event Catering"],
    startingPrice: "₹450 per plate"
  },
  {
    id: "Reagan-bridal-makeup",
    name: "Reagan Bridal Makeup",
    categoryId: "makeup-artists",
    categoryName: "Makeup Artist",
    rating: 5.0,
    reviews: 56,
    verified: false,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400&h=300",
    location: "Thoubal",
    description: "Professional bridal makeup artist specializing in Potloi look and modern engagement styles.",
    services: ["Bridal Makeup", "Party Makeup", "Hair Styling"],
    startingPrice: "₹15,000"
  },
  {
    id: "sangai-grand-venues",
    name: "Sangai Grand Venues",
    categoryId: "venues",
    categoryName: "Venues",
    rating: 4.8,
    reviews: 210,
    verified: true,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=400&h=300",
    location: "Imphal West",
    description: "Spacious and luxurious venues for premium weddings and grand receptions. Fully air-conditioned halls available.",
    services: ["Marriage Hall", "Reception Area", "Ample Parking"],
    startingPrice: "₹80,000"
  },
  {
    id: "leo-photography",
    name: "Royal Photography",
    categoryId: "photography",
    categoryName: "Photography",
    rating: 4.5,
    reviews: 90,
    verified: true,
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=400&h=300",
    location: "Churachandpur",
    description: "Creative wedding and portrait photography across Manipur.",
    services: ["Wedding Photography", "Portraits", "Corporate Events"],
    startingPrice: "₹20,000"
  },
  {
    id: "classic-catering",
    name: "Classic Catering",
    categoryId: "catering",
    categoryName: "Catering",
    rating: 4.6,
    reviews: 112,
    verified: true,
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=400&h=300",
    location: "Bishnupur",
    description: "Premium catering services with customized menus for all event types.",
    services: ["Wedding Catering", "Corporate Catering", "Live Counters"],
    startingPrice: "₹500 per plate"
  }
];
