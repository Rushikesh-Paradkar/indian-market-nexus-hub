
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-10">
      {/* Newsletter Section */}
      <div className="bg-accent py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl font-bold text-accent-foreground">Get Latest Deals & Updates</h3>
              <p className="text-accent-foreground/80">Subscribe to our newsletter for exclusive offers</p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white min-w-[250px]" 
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Indian Market</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop marketplace for authentic Indian products. Connecting buyers and sellers across India.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-300 hover:text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">My Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white">Login / Register</Link>
              </li>
              <li>
                <Link to="/account/orders" className="text-gray-300 hover:text-white">My Orders</Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-300 hover:text-white">My Wishlist</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white">Shopping Cart</Link>
              </li>
              <li>
                <Link to="/seller/register" className="text-gray-300 hover:text-white">Become a Seller</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin size={20} className="shrink-0 mt-1" />
                <span>123 Commerce Road, Tech Park, Bangalore - 560001, Karnataka, India</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail size={20} />
                <a href="mailto:support@indianmarket.com" className="hover:text-white">
                  support@indianmarket.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone size={20} />
                <a href="tel:+911234567890" className="hover:text-white">
                  +91 1234 567 890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:text-left md:flex md:justify-between text-gray-300">
          <p>&copy; {currentYear} Indian Market. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <span>We accept: </span>
            <span className="font-semibold">UPI, PayTM, Credit Cards, Debit Cards, Net Banking, COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
