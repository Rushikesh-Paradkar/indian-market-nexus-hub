import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* Product routes */}
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/category/:slug" element={<Index />} />
              <Route path="/search" element={<Index />} />
              
              {/* Auth routes */}
              <Route path="/login" element={<Index />} />
              <Route path="/register" element={<Index />} />
              
              {/* Buyer account routes */}
              <Route path="/account/*" element={<Index />} />
              <Route path="/cart" element={<Index />} />
              <Route path="/wishlist" element={<Index />} />
              <Route path="/checkout" element={<Index />} />
              
              {/* Seller routes */}
              <Route path="/seller/*" element={<Index />} />
              
              {/* Admin routes */}
              <Route path="/admin/*" element={<Index />} />
              
              {/* Static pages */}
              <Route path="/about" element={<Index />} />
              <Route path="/contact" element={<Index />} />
              <Route path="/faq" element={<Index />} />
              <Route path="/terms" element={<Index />} />
              <Route path="/privacy" element={<Index />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
