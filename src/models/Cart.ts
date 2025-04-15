
import { BaseModel } from "./BaseModel";
import { Product } from "./Product";
import { Address } from "./User";

export class CartItem {
  productId: string;
  quantity: number;
  product: Product;
  
  constructor(data: { productId: string; quantity: number; product: Product }) {
    this.productId = data.productId;
    this.quantity = data.quantity;
    this.product = new Product(data.product);
  }
  
  // Calculate subtotal for this item
  calculateSubtotal(): number {
    return this.product.price * this.quantity;
  }
  
  // Validate cart item
  validate(): boolean {
    return this.quantity > 0 && !!this.product && this.product.validate();
  }
}

export class Order extends BaseModel {
  userId: string;
  items: CartItem[];
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  totalAmount: number;
  shippingAddress: Address;
  paymentMethod: string;
  paymentStatus: "pending" | "completed" | "failed";
  
  constructor(orderData: Omit<Order, 'validate' | 'toJSON' | 'calculateTotal'>) {
    super(orderData.id, orderData.createdAt);
    this.userId = orderData.userId;
    this.items = orderData.items.map(item => new CartItem(item));
    this.status = orderData.status;
    this.totalAmount = orderData.totalAmount;
    this.shippingAddress = new Address(orderData.shippingAddress);
    this.paymentMethod = orderData.paymentMethod;
    this.paymentStatus = orderData.paymentStatus;
  }
  
  validate(): boolean {
    return !!this.userId && 
           this.items.length > 0 && 
           this.items.every(item => item.validate()) &&
           !!this.shippingAddress;
  }
  
  // Calculate total amount for the order
  calculateTotal(): number {
    return this.items.reduce((total, item) => total + item.calculateSubtotal(), 0);
  }
  
  // Update order status
  updateStatus(status: Order['status']): void {
    this.status = status;
  }
  
  // Update payment status
  updatePaymentStatus(status: Order['paymentStatus']): void {
    this.paymentStatus = status;
  }
  
  // Override toJSON to include all order properties
  toJSON(): Record<string, any> {
    return {
      ...super.toJSON(),
      userId: this.userId,
      items: this.items.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        product: item.product.toJSON()
      })),
      status: this.status,
      totalAmount: this.totalAmount,
      shippingAddress: this.shippingAddress,
      paymentMethod: this.paymentMethod,
      paymentStatus: this.paymentStatus
    };
  }
}
