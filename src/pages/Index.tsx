
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { categories, products } from '@/data/mockData';
import { Truck, CheckCircle, ShieldCheck, PercentCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  // Filter featured and top-rated products
  const featuredProducts = products.slice(0, 4); // First 4 products as featured
  const topRatedProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4); // Top 4 by rating

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 to-accent/90 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Discover Authentic Indian Products
              </h1>
              <p className="text-lg mb-8 max-w-md">
                Shop with confidence from thousands of verified sellers across India. Quality products, fast delivery, secure payments.
              </p>
              <div className="flex gap-4">
                <Button size="lg" asChild>
                  <Link to="/products">Shop Now</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10" asChild>
                  <Link to="/seller/register">Become a Seller</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Hero image placeholder */}
              <div className="bg-white/10 rounded-lg p-8 h-80 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-5xl font-bold">Indian Market</span>
                  <span className="block text-xl mt-2">Your Complete Marketplace</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group"
              >
                <div className="bg-secondary/5 rounded-lg p-4 text-center transition-colors group-hover:bg-secondary/10">
                  <div className="w-full h-40 rounded-lg bg-secondary/10 mb-4 overflow-hidden">
                    {category.imageUrl ? (
                      <img 
                        src={category.imageUrl} 
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-secondary">
                        {category.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Button variant="outline" asChild>
              <Link to="/products">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <Link to={`/product/${product.slug}`} className="block">
                  <div className="h-48 overflow-hidden bg-secondary/10">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                    />
                  </div>
                </Link>
                <CardContent className="pt-4">
                  <Link to={`/product/${product.slug}`}>
                    <CardTitle className="line-clamp-2 text-lg group-hover:text-primary">{product.name}</CardTitle>
                  </Link>
                  <CardDescription className="line-clamp-1 mt-1">
                    by {product.sellerName}
                  </CardDescription>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold">{product.currency}{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-sm line-through text-muted-foreground">
                          {product.currency}{product.originalPrice.toLocaleString()}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </Badge>
                      </>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 mt-2">
                    {/* Simple rating display */}
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span 
                          key={star}
                          className={`text-sm ${star <= Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviewCount})
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="default" asChild className="w-full">
                    <Link to={`/product/${product.slug}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Top Rated Products</h2>
            <Button variant="outline" asChild>
              <Link to="/products?sort=rating">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topRatedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden group">
                <Link to={`/product/${product.slug}`} className="block">
                  <div className="h-48 overflow-hidden bg-secondary/10">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                    />
                  </div>
                </Link>
                <CardContent className="pt-4">
                  <Link to={`/product/${product.slug}`}>
                    <CardTitle className="line-clamp-2 text-lg group-hover:text-primary">{product.name}</CardTitle>
                  </Link>
                  <CardDescription className="line-clamp-1 mt-1">
                    by {product.sellerName}
                  </CardDescription>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold">{product.currency}{product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-sm line-through text-muted-foreground">
                          {product.currency}{product.originalPrice.toLocaleString()}
                        </span>
                        <Badge variant="secondary" className="text-xs">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </Badge>
                      </>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-1 mt-2">
                    {/* Simple rating display */}
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span 
                          key={star}
                          className={`text-sm ${star <= Math.round(product.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviewCount})
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <Button variant="default" asChild className="w-full">
                    <Link to={`/product/${product.slug}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Why Shop With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center p-6">
              <Truck size={48} className="text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick delivery across India with reliable shipping partners
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <CheckCircle size={48} className="text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">
                All products are verified for quality and authenticity
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <ShieldCheck size={48} className="text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Secure Payments</h3>
              <p className="text-muted-foreground">
                Multiple secure payment options including Cash on Delivery
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <PercentCircle size={48} className="text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Great Deals</h3>
              <p className="text-muted-foreground">
                Regular offers, discounts, and promotions for great value
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
