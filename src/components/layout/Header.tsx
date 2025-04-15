
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Search, ShoppingCart, User, Menu, X, LogOut, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

export default function Header() {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 border-b backdrop-blur">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-primary">Indian<span className="text-indian-blue">Market</span></span>
        </Link>

        {/* Search bar - hidden on mobile */}
        <div className="hidden md:flex flex-1 max-w-md mx-6">
          <form onSubmit={handleSearch} className="flex w-full">
            <Input 
              type="search"
              placeholder="Search for products..."
              className="rounded-r-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              variant="default"
              className="rounded-l-none"
            >
              <Search size={18} />
            </Button>
          </form>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/wishlist">
            <Button variant="ghost" size="icon">
              <Heart size={20} />
            </Button>
          </Link>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} />
                    <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="hidden lg:inline-block">{user?.name}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {user?.role === 'buyer' && (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/account/profile')}>
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/account/orders')}>
                      Orders
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/account/addresses')}>
                      Addresses
                    </DropdownMenuItem>
                  </>
                )}
                {user?.role === 'seller' && (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/seller/dashboard')}>
                      Seller Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/seller/products')}>
                      My Products
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/seller/orders')}>
                      Orders
                    </DropdownMenuItem>
                  </>
                )}
                {user?.role === 'admin' && (
                  <>
                    <DropdownMenuItem onClick={() => navigate('/admin/dashboard')}>
                      Admin Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/admin/users')}>
                      Manage Users
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/admin/products')}>
                      Manage Products
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={() => navigate('/login')}>
                Log in
              </Button>
              <Button size="sm" onClick={() => navigate('/register')}>
                Sign up
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Link to="/cart" className="mr-4 relative">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </Link>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container p-4">
            <form onSubmit={handleSearch} className="flex mb-4">
              <Input 
                type="search"
                placeholder="Search for products..."
                className="rounded-r-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="default"
                className="rounded-l-none"
              >
                <Search size={18} />
              </Button>
            </form>

            <div className="space-y-4">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center gap-2 pb-2 border-b">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.avatar} />
                      <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{user?.name}</span>
                  </div>
                  {user?.role === 'buyer' && (
                    <>
                      <Link to="/account/profile" className="block p-2" onClick={toggleMenu}>
                        Profile
                      </Link>
                      <Link to="/account/orders" className="block p-2" onClick={toggleMenu}>
                        Orders
                      </Link>
                      <Link to="/account/addresses" className="block p-2" onClick={toggleMenu}>
                        Addresses
                      </Link>
                    </>
                  )}
                  {user?.role === 'seller' && (
                    <>
                      <Link to="/seller/dashboard" className="block p-2" onClick={toggleMenu}>
                        Seller Dashboard
                      </Link>
                      <Link to="/seller/products" className="block p-2" onClick={toggleMenu}>
                        My Products
                      </Link>
                      <Link to="/seller/orders" className="block p-2" onClick={toggleMenu}>
                        Orders
                      </Link>
                    </>
                  )}
                  {user?.role === 'admin' && (
                    <>
                      <Link to="/admin/dashboard" className="block p-2" onClick={toggleMenu}>
                        Admin Dashboard
                      </Link>
                      <Link to="/admin/users" className="block p-2" onClick={toggleMenu}>
                        Manage Users
                      </Link>
                      <Link to="/admin/products" className="block p-2" onClick={toggleMenu}>
                        Manage Products
                      </Link>
                    </>
                  )}
                  <Link to="/wishlist" className="block p-2" onClick={toggleMenu}>
                    Wishlist
                  </Link>
                  <button 
                    className="block w-full text-left p-2 text-red-600"
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" onClick={() => navigate('/login')}>
                      Log in
                    </Button>
                    <Button onClick={() => navigate('/register')}>
                      Sign up
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
