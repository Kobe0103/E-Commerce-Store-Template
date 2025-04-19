// components/Navbar.tsx

import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Navbar = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const menuSections = [
    {
      name: "Electronics",
      items: [
        { name: "Smartphones", path: "/shop/Smartphones", icon: "📱" },
        { name: "Laptops", path: "/shop/Laptops", icon: "💻" },
        { name: "Headphones", path: "/shop/Headphones", icon: "🎧" }
      ]
    },
    {
      name: "Home & Living",
      items: [
        { name: "Furniture", path: "/shop/Furniture", icon: "🛋️" },
        { name: "Kitchen", path: "/shop/Kitchen", icon: "🍳" },
        { name: "Decor", path: "/shop/Decor", icon: "🖼️" }
      ]
    },
    {
      name: "Fashion",
      items: [
        { name: "Men's", path: "/shop/Men's", icon: "👔" },
        { name: "Women's", path: "/shop/Women's", icon: "👗" },
        { name: "Accessories", path: "/shop/Accessories", icon: "🕶️" }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsShopOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const cartItemCount = cartItems.reduce(
    (total: number, item: { quantity: number }) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-gray-900 transition-colors">
              ShopName
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsShopOpen(!isShopOpen)}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
              >
                Shop
                <svg className={`ml-1 h-4 w-4 transition-transform ${isShopOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isShopOpen && (
                <div className="absolute left-0 mt-2 w-96 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-3 animate-fadeIn">
                  <div className="grid grid-cols-3 gap-6 p-4">
                    {menuSections.map((section) => (
                      <div key={section.name} className="space-y-3">
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider px-2">
                          {section.name}
                        </h3>
                        <div className="space-y-2">
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors group"
                              onClick={() => setIsShopOpen(false)}
                            >
                              <span className="mr-2 text-lg">{item.icon}</span>
                              <span className="group-hover:translate-x-1 transition-transform">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-100 px-4 py-3 bg-gray-50 rounded-b-lg">
                    <Link
                      to="/shop"
                      className="flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                      onClick={() => setIsShopOpen(false)}
                    >
                      View all products
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link to="/cart" className="relative p-1 rounded-full text-gray-400 hover:text-gray-500 transition-colors">
              <span className="sr-only">Cart</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
