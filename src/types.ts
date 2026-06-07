export interface Category {
  id: string;
  name: string;
  iconName: string;
}

export interface Vendor {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  rating: number;
  reviews: number;
  verified: boolean;
  image: string;
  location: string;
  description?: string;
  services?: string[];
  startingPrice?: string;
}
