
import { Product, Category, User, Review, Order } from "@/types";

// Categories
export const categories: Category[] = [
  {
    id: "cat1",
    name: "Electronics",
    slug: "electronics",
    description: "Latest gadgets and electronic items",
    imageUrl: "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "cat2",
    name: "Fashion",
    slug: "fashion",
    description: "Trending clothes and accessories",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "cat3",
    name: "Home & Kitchen",
    slug: "home-kitchen",
    description: "Everything for your home needs",
    imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "cat4",
    name: "Beauty & Personal Care",
    slug: "beauty",
    description: "Beauty and personal care products",
    imageUrl: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "cat5",
    name: "Books",
    slug: "books",
    description: "Books across all genres",
    imageUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: "cat6",
    name: "Sports & Outdoors",
    slug: "sports",
    description: "Sports equipment and outdoor gear",
    imageUrl: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=500"
  }
];

// Products
export const products: Product[] = [
  {
    id: "prod1",
    name: "Premium Smartphone",
    slug: "premium-smartphone",
    description: "Latest smartphone with amazing features and long battery life. This device comes with a high-resolution camera, fast processor, and ample storage for all your needs.",
    price: 29999,
    originalPrice: 34999,
    currency: "₹",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=500"
    ],
    rating: 4.5,
    reviewCount: 128,
    stock: 50,
    categoryId: "cat1",
    sellerId: "seller1",
    sellerName: "TechMart India",
    features: [
      "6.7-inch Super AMOLED Display",
      "5000mAh Battery",
      "64MP Triple Camera",
      "8GB RAM + 128GB Storage"
    ],
    specifications: {
      "Processor": "Octa-core Snapdragon 8 Gen 1",
      "OS": "Android 13",
      "Display": "6.7-inch Super AMOLED",
      "Battery": "5000mAh",
      "Camera": "64MP + 12MP + 8MP",
      "RAM": "8GB",
      "Storage": "128GB",
      "Warranty": "1 Year Manufacturer Warranty"
    },
    createdAt: "2023-01-15T10:30:00Z"
  },
  {
    id: "prod2",
    name: "Wireless Earbuds",
    slug: "wireless-earbuds",
    description: "Premium wireless earbuds with noise cancellation technology and long battery life. Perfect for music lovers and professionals on the go.",
    price: 2999,
    originalPrice: 4999,
    currency: "₹",
    images: [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1655212941945-4e308ff4e5f0?auto=format&fit=crop&q=80&w=500"
    ],
    rating: 4.3,
    reviewCount: 86,
    stock: 120,
    categoryId: "cat1",
    sellerId: "seller1",
    sellerName: "TechMart India",
    features: [
      "Active Noise Cancellation",
      "30 Hours Battery Life",
      "Touch Controls",
      "Voice Assistant Support"
    ],
    specifications: {
      "Battery Life": "30 Hours with Case",
      "Connectivity": "Bluetooth 5.2",
      "Water Resistance": "IPX4",
      "Warranty": "1 Year Manufacturer Warranty"
    },
    createdAt: "2023-01-25T14:30:00Z"
  },
  {
    id: "prod3",
    name: "Cotton Kurta Set",
    slug: "cotton-kurta-set",
    description: "Elegant cotton kurta set with traditional embroidery. Perfect for festivals and special occasions.",
    price: 1499,
    originalPrice: 2499,
    currency: "₹",
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1614252235316-8c857fd210d1?auto=format&fit=crop&q=80&w=500"
    ],
    rating: 4.7,
    reviewCount: 42,
    stock: 80,
    categoryId: "cat2",
    sellerId: "seller2",
    sellerName: "FashionHub",
    features: [
      "100% Cotton Material",
      "Traditional Embroidery",
      "Comfortable Fit",
      "Machine Washable"
    ],
    specifications: {
      "Material": "100% Cotton",
      "Color": "Royal Blue with Gold Embroidery",
      "Set Contains": "Kurta, Pajama, and Dupatta",
      "Care": "Machine Wash, Gentle Cycle"
    },
    createdAt: "2023-02-05T09:15:00Z"
  },
  {
    id: "prod4",
    name: "Stainless Steel Pressure Cooker",
    slug: "steel-pressure-cooker",
    description: "High-quality stainless steel pressure cooker perfect for Indian cooking. Durable, safe, and easy to use.",
    price: 1299,
    originalPrice: 1799,
    currency: "₹",
    images: [
      "https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&q=80&w=500"
    ],
    rating: 4.8,
    reviewCount: 156,
    stock: 65,
    categoryId: "cat3",
    sellerId: "seller3",
    sellerName: "HomeBazaar",
    features: [
      "5-Liter Capacity",
      "High-Grade Stainless Steel",
      "Multiple Safety Features",
      "Induction Compatible"
    ],
    specifications: {
      "Material": "Food-Grade Stainless Steel",
      "Capacity": "5 Liters",
      "Compatible With": "Gas, Induction, Electric",
      "Warranty": "5 Years Manufacturer Warranty"
    },
    createdAt: "2023-01-18T11:45:00Z"
  },
  {
    id: "prod5",
    name: "Ayurvedic Face Cream",
    slug: "ayurvedic-face-cream",
    description: "Natural Ayurvedic face cream with turmeric and saffron. Perfect for all skin types and daily use.",
    price: 499,
    originalPrice: 699,
    currency: "₹",
    images: [
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=500"
    ],
    rating: 4.6,
    reviewCount: 89,
    stock: 200,
    categoryId: "cat4",
    sellerId: "seller4",
    sellerName: "NatureCare",
    features: [
      "100% Natural Ingredients",
      "Turmeric and Saffron Infused",
      "Suitable for All Skin Types",
      "Paraben Free"
    ],
    specifications: {
      "Ingredients": "Turmeric, Saffron, Aloe Vera, Natural Oils",
      "Quantity": "100g",
      "Skin Type": "All Skin Types",
      "Usage": "Apply daily on clean face"
    },
    createdAt: "2023-02-12T16:20:00Z"
  },
  {
    id: "prod6",
    name: "The Ultimate Indian Cookbook",
    slug: "indian-cookbook",
    description: "Comprehensive cookbook featuring authentic recipes from all regions of India. Perfect for beginners and experienced cooks alike.",
    price: 799,
    originalPrice: 1099,
    currency: "₹",
    images: [
      "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500"
    ],
    rating: 4.9,
    reviewCount: 67,
    stock: 150,
    categoryId: "cat5",
    sellerId: "seller5",
    sellerName: "BookWorld",
    features: [
      "500+ Authentic Recipes",
      "Regional Cuisine Sections",
      "Vegetarian and Non-Vegetarian Options",
      "Step-by-Step Instructions with Photos"
    ],
    specifications: {
      "Pages": "450",
      "Format": "Hardcover",
      "Author": "Chef Sanjeev Kapoor",
      "Language": "English"
    },
    createdAt: "2023-03-05T13:10:00Z"
  },
  {
    id: "prod7",
    name: "Cricket Bat",
    slug: "cricket-bat",
    description: "Professional-grade Kashmir willow cricket bat. Perfect for regular players looking for performance and durability.",
    price: 1899,
    originalPrice: 2499,
    currency: "₹",
    images: [
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?auto=format&fit=crop&q=80&w=500"
    ],
    rating: 4.4,
    reviewCount: 38,
    stock: 45,
    categoryId: "cat6",
    sellerId: "seller6",
    sellerName: "SportsMaster",
    features: [
      "Kashmir Willow Wood",
      "Professional Grade",
      "Comfortable Grip",
      "Optimal Balance"
    ],
    specifications: {
      "Material": "Kashmir Willow",
      "Weight": "1.2kg",
      "Handle": "Premium Cane Handle with Grip",
      "Size": "Full Size (SH)"
    },
    createdAt: "2023-02-28T10:00:00Z"
  },
  {
    id: "prod8",
    name: "Smart LED TV",
    slug: "smart-led-tv",
    description: "43-inch Smart LED TV with 4K resolution and built-in streaming apps. Perfect for modern entertainment needs.",
    price: 32999,
    originalPrice: 39999,
    currency: "₹",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&q=80&w=500"
    ],
    rating: 4.6,
    reviewCount: 105,
    stock: 30,
    categoryId: "cat1",
    sellerId: "seller1",
    sellerName: "TechMart India",
    features: [
      "43-inch 4K Display",
      "Smart TV Functions",
      "Built-in WiFi",
      "Multiple Connectivity Options"
    ],
    specifications: {
      "Display": "43-inch 4K LED",
      "Resolution": "3840 x 2160 pixels",
      "Audio": "20W Dual Speakers",
      "Connectivity": "3 HDMI, 2 USB, Bluetooth, WiFi",
      "Warranty": "1 Year Manufacturer Warranty"
    },
    createdAt: "2023-01-20T14:00:00Z"
  }
];

// Users
export const users: User[] = [
  {
    id: "user1",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    role: "buyer",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: "user2",
    name: "Priya Patel",
    email: "priya@example.com",
    role: "buyer",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: "seller1",
    name: "TechMart India",
    email: "techmart@example.com",
    role: "seller",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: "seller2",
    name: "FashionHub",
    email: "fashionhub@example.com",
    role: "seller",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: "admin1",
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg"
  }
];

// Reviews
export const reviews: Review[] = [
  {
    id: "rev1",
    productId: "prod1",
    userId: "user1",
    userName: "Rahul Sharma",
    rating: 5,
    comment: "Excellent phone with great camera quality! Battery life is amazing too.",
    createdAt: "2023-02-10T14:30:00Z"
  },
  {
    id: "rev2",
    productId: "prod1",
    userId: "user2",
    userName: "Priya Patel",
    rating: 4,
    comment: "Good phone overall, but heats up a bit during gaming.",
    createdAt: "2023-02-15T09:45:00Z"
  },
  {
    id: "rev3",
    productId: "prod2",
    userId: "user1",
    userName: "Rahul Sharma",
    rating: 4,
    comment: "Great sound quality and battery life. Noise cancellation could be better.",
    createdAt: "2023-02-18T16:20:00Z"
  },
  {
    id: "rev4",
    productId: "prod3",
    userId: "user2",
    userName: "Priya Patel",
    rating: 5,
    comment: "Beautiful kurta set! Material is soft and the embroidery is exquisite.",
    createdAt: "2023-02-20T11:10:00Z"
  }
];

// Orders
export const orders: Order[] = [
  {
    id: "order1",
    userId: "user1",
    items: [
      {
        productId: "prod1",
        quantity: 1,
        product: products.find(p => p.id === "prod1")!
      },
      {
        productId: "prod2",
        quantity: 2,
        product: products.find(p => p.id === "prod2")!
      }
    ],
    status: "delivered",
    totalAmount: 35997,
    shippingAddress: {
      fullName: "Rahul Sharma",
      addressLine1: "123 Gandhi Road",
      addressLine2: "Apartment 45",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400001",
      country: "India",
      phone: "9876543210"
    },
    paymentMethod: "UPI",
    paymentStatus: "completed",
    createdAt: "2023-02-01T10:15:00Z"
  },
  {
    id: "order2",
    userId: "user2",
    items: [
      {
        productId: "prod3",
        quantity: 1,
        product: products.find(p => p.id === "prod3")!
      }
    ],
    status: "shipped",
    totalAmount: 1499,
    shippingAddress: {
      fullName: "Priya Patel",
      addressLine1: "456 Nehru Street",
      city: "Delhi",
      state: "Delhi",
      pincode: "110001",
      country: "India",
      phone: "8765432109"
    },
    paymentMethod: "Cash on Delivery",
    paymentStatus: "pending",
    createdAt: "2023-02-05T14:30:00Z"
  }
];

// Helper function to get products by category
export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.categoryId === categoryId);
}

// Helper function to get product by ID
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

// Helper function to get related products
export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(p => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, limit);
}
