
import { BaseModel } from "./BaseModel";

// Define the base User class
export class User extends BaseModel {
  name: string;
  email: string;
  role: "buyer" | "seller" | "admin";
  avatar?: string;

  constructor(userData: Omit<User, 'validate' | 'toJSON'>) {
    super(userData.id, userData.createdAt);
    this.name = userData.name;
    this.email = userData.email;
    this.role = userData.role;
    this.avatar = userData.avatar;
  }
  
  validate(): boolean {
    // Basic validation for user data
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !!this.name && emailRegex.test(this.email);
  }
  
  // Override toJSON to include all user properties
  toJSON(): Record<string, any> {
    return {
      ...super.toJSON(),
      name: this.name,
      email: this.email,
      role: this.role,
      avatar: this.avatar
    };
  }
}

// Buyer specific user
export class Buyer extends User {
  wishlist: string[] = []; // Product IDs
  addresses: Address[] = [];
  
  constructor(userData: Omit<User, 'validate' | 'toJSON'>) {
    super(userData);
    this.role = "buyer"; // Enforce role
  }
  
  addToWishlist(productId: string): void {
    if (!this.wishlist.includes(productId)) {
      this.wishlist.push(productId);
    }
  }
  
  removeFromWishlist(productId: string): void {
    this.wishlist = this.wishlist.filter(id => id !== productId);
  }
  
  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

// Seller specific user
export class Seller extends User {
  businessName: string;
  businessDescription?: string;
  productsListed: string[] = []; // Product IDs
  
  constructor(userData: Omit<User, 'validate' | 'toJSON'> & { businessName: string, businessDescription?: string }) {
    super(userData);
    this.role = "seller"; // Enforce role
    this.businessName = userData.businessName;
    this.businessDescription = userData.businessDescription;
  }
  
  addProduct(productId: string): void {
    if (!this.productsListed.includes(productId)) {
      this.productsListed.push(productId);
    }
  }
  
  // Override validate to include seller-specific validation
  validate(): boolean {
    return super.validate() && !!this.businessName;
  }
}

// Admin specific user
export class Admin extends User {
  permissionLevel: "standard" | "super" = "standard";
  
  constructor(userData: Omit<User, 'validate' | 'toJSON'>) {
    super(userData);
    this.role = "admin"; // Enforce role
  }
}

// Address class (for use with User)
export class Address {
  id?: string;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  phone: string;
  isDefault?: boolean;
  
  constructor(addressData: Address) {
    this.id = addressData.id;
    this.fullName = addressData.fullName;
    this.addressLine1 = addressData.addressLine1;
    this.addressLine2 = addressData.addressLine2;
    this.city = addressData.city;
    this.state = addressData.state;
    this.pincode = addressData.pincode;
    this.country = addressData.country;
    this.phone = addressData.phone;
    this.isDefault = addressData.isDefault;
  }
  
  validate(): boolean {
    return !!this.fullName && 
           !!this.addressLine1 && 
           !!this.city && 
           !!this.state && 
           !!this.pincode &&
           !!this.country &&
           !!this.phone;
  }
}
