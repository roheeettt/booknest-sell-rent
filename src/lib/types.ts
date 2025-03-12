
export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  cover: string;
  price: number;
  rentalPrice?: number;
  isForRent: boolean;
  isForSale: boolean;
  condition: "new" | "like-new" | "very-good" | "good" | "acceptable" | "poor";
  category: string;
  genre: string[];
  ageGroup: string;
  publishedYear: number;
  isbn: string;
  pages: number;
  seller: {
    id: string;
    name: string;
    rating: number;
  };
  listed: string; // ISO date string
}

export type BookCondition = Book["condition"];

export interface BookFilter {
  category?: string;
  genre?: string; // Changed from string to match the filterBooks function's expected type
  ageGroup?: string;
  condition?: BookCondition;
  minPrice?: number;
  maxPrice?: number;
  forSale?: boolean;
  forRent?: boolean;
  search?: string;
}
