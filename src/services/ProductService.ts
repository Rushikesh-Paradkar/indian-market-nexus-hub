
import { products as mockProducts, categories } from '@/data/mockData';
import { Product } from '../models/Product';
import type { Product as ProductType } from '@/types';

export class ProductService {
  private products: Product[];
  
  constructor() {
    // Initialize with mock data
    this.products = mockProducts.map(product => {
      // Convert the Product interface type from mockData to our Product class
      return new Product({
        id: product.id,
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        originalPrice: product.originalPrice,
        currency: product.currency,
        images: product.images,
        rating: product.rating,
        reviewCount: product.reviewCount,
        stock: product.stock,
        categoryId: product.categoryId,
        sellerId: product.sellerId,
        sellerName: product.sellerName,
        features: product.features,
        specifications: product.specifications,
        createdAt: product.createdAt
      });
    });
  }
  
  // Get all products
  getAllProducts(): Product[] {
    return this.products;
  }
  
  // Get product by ID
  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
  
  // Get product by slug
  getProductBySlug(slug: string): Product | undefined {
    return this.products.find(product => product.slug === slug);
  }
  
  // Get products by category
  getProductsByCategory(categoryId: string): Product[] {
    return this.products.filter(product => product.categoryId === categoryId);
  }
  
  // Get related products
  getRelatedProducts(product: Product, limit = 4): Product[] {
    return this.products
      .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
      .slice(0, limit);
  }
  
  // Add a new product
  addProduct(product: Product): void {
    if (!product.validate()) {
      throw new Error('Invalid product data');
    }
    this.products.push(product);
  }
  
  // Update existing product
  updateProduct(product: Product): void {
    if (!product.validate()) {
      throw new Error('Invalid product data');
    }
    
    const index = this.products.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.products[index] = product;
    } else {
      throw new Error('Product not found');
    }
  }
  
  // Delete a product
  deleteProduct(id: string): void {
    this.products = this.products.filter(product => product.id !== id);
  }
  
  // Search products
  searchProducts(query: string): Product[] {
    const lowercaseQuery = query.toLowerCase();
    return this.products.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery)
    );
  }
}
