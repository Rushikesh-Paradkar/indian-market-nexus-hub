
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Share2, ShoppingCart, Star, Truck } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { ProductService } from '@/services/ProductService';
import { Product } from '@/models/Product';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  
  // Initialize service
  const productService = new ProductService();
  
  useEffect(() => {
    if (slug) {
      const foundProduct = productService.getProductBySlug(slug);
      if (foundProduct) {
        setProduct(foundProduct);
        setRelatedProducts(productService.getRelatedProducts(foundProduct, 4));
      }
    }
  }, [slug]);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-8">The product you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    addItem(product as any, quantity); // We'll update CartContext later to use our models
  };

  return (
    <Layout showCategories={false}>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-6">
          <ul className="flex items-center gap-2">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><Link to={`/category/${product.categoryId}`} className="text-muted-foreground hover:text-primary">Category</Link></li>
            <li><span className="mx-2">/</span></li>
            <li><span className="text-foreground">{product.name}</span></li>
          </ul>
        </div>

        {/* Product Detail Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-secondary/10">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`cursor-pointer aspect-square overflow-hidden rounded-md bg-secondary/10 ${
                    index === selectedImage ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'} 
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm font-medium text-primary">
                {product.isInStock() ? `In Stock: ${product.stock}` : 'Out of Stock'}
              </span>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">{product.currency}{product.price.toLocaleString()}</span>
                {product.isOnSale() && (
                  <>
                    <span className="text-lg line-through text-muted-foreground">
                      {product.currency}{product.originalPrice!.toLocaleString()}
                    </span>
                    <Badge variant="secondary">
                      {product.calculateDiscountPercentage()}% OFF
                    </Badge>
                  </>
                )}
              </div>
            </div>
            
            {/* Short Description */}
            <p className="text-muted-foreground mb-6">{product.description}</p>
            
            {/* Seller Info */}
            <div className="mb-6">
              <span className="text-sm text-muted-foreground">Sold by: </span>
              <Link to={`/seller/${product.sellerId}`} className="text-sm font-medium hover:text-primary">
                {product.sellerName}
              </Link>
            </div>
            
            {/* Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border rounded-md">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                >
                  +
                </Button>
              </div>
              <Button onClick={handleAddToCart} disabled={!product.isInStock()} className="flex-1">
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.isInStock() ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
            
            {/* Shipping Info */}
            <div className="bg-secondary/5 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Fast Shipping</p>
                  <p className="text-sm text-muted-foreground">Delivery within 3-7 business days</p>
                </div>
              </div>
            </div>
            
            {/* Key Features */}
            {product.features && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Key Features</h3>
                <ul className="list-disc list-inside space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="mb-4">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="p-4">
            <div className="prose max-w-none">
              <p>{product.description}</p>
            </div>
          </TabsContent>
          <TabsContent value="specifications" className="p-4">
            {product.specifications && Object.entries(product.specifications).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex">
                    <span className="font-medium w-40">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No specifications available for this product.</p>
            )}
          </TabsContent>
          <TabsContent value="reviews" className="p-4">
            <p className="text-muted-foreground">Reviews will be implemented in a future update.</p>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="overflow-hidden">
                  <Link to={`/product/${relatedProduct.slug}`} className="block">
                    <div className="h-48 bg-secondary/10 overflow-hidden">
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform" 
                      />
                    </div>
                  </Link>
                  <CardContent className="p-4">
                    <Link to={`/product/${relatedProduct.slug}`}>
                      <CardTitle className="text-base mb-1 line-clamp-2">{relatedProduct.name}</CardTitle>
                    </Link>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-bold">{relatedProduct.currency}{relatedProduct.price.toLocaleString()}</span>
                      <div className="flex items-center">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-xs ml-1">{relatedProduct.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
