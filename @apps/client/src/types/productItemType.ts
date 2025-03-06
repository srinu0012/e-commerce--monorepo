
export interface ProductItemType {
  id: number;
  title: string;
  price: number;
  description: string;
  availabilityStatus: string;
  brand: string;
  category: string;
  item_depth: number;
  width: number;
  height: number;
  discountPercentage: number;
  images: string[];
  stock: number;
  reviews: { rating: number; comment: string; username: string }[];
  shipping_information: string;
  return_policy: string;
  warranty_information: string;
  thumbnail_url: string;
  rating: number | undefined;
}