
import { BaseModel } from "./BaseModel";
import type { Category } from "@/types";

export class Product extends BaseModel {
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  categoryId: string;
  sellerId: string;
  sellerName: string;
  features?: string[];
  specifications?: Record<string, string>;

  constructor(productData: {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    originalPrice?: number;
    currency: string;
    images: string[];
    rating: number;
    reviewCount: number;
    stock: number;
    categoryId: string;
    sellerId: string;
    sellerName: string;
    features?: string[];
    specifications?: Record<string, string>;
    createdAt?: string;
  }) {
    super(productData.id, productData.createdAt);
    this.name = productData.name;
    this.slug = productData.slug;
    this.description = productData.description;
    this.price = productData.price;
    this.originalPrice = productData.originalPrice;
    this.currency = productData.currency;
    this.images = productData.images;
    this.rating = productData.rating;
    this.reviewCount = productData.reviewCount;
    this.stock = productData.stock;
    this.categoryId = productData.categoryId;
    this.sellerId = productData.sellerId;
    this.sellerName = productData.sellerName;
    this.features = productData.features;
    this.specifications = productData.specifications;
  }

  validate(): boolean {
    // Basic validation logic
    return !!this.name && this.price > 0 && this.stock >= 0;
  }

  // Additional method to calculate discount percentage
  calculateDiscountPercentage(): number | null {
    if (!this.originalPrice || this.originalPrice <= this.price) {
      return null;
    }
    return Math.round((1 - this.price / this.originalPrice) * 100);
  }

  // Check if product is on sale
  isOnSale(): boolean {
    return !!this.originalPrice && this.price < this.originalPrice;
  }

  // Check if product is in stock
  isInStock(): boolean {
    return this.stock > 0;
  }

  // Override toJSON to include all properties
  toJSON(): Record<string, any> {
    return {
      ...super.toJSON(),
      name: this.name,
      slug: this.slug,
      description: this.description,
      price: this.price,
      originalPrice: this.originalPrice,
      currency: this.currency,
      images: this.images,
      rating: this.rating,
      reviewCount: this.reviewCount,
      stock: this.stock,
      categoryId: this.categoryId,
      sellerId: this.sellerId,
      sellerName: this.sellerName,
      features: this.features,
      specifications: this.specifications
    };
  }
}
