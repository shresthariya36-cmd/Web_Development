import React from "react";
import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, User, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="h-16 flex items-center justify-between gap-6 px-5">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-900 tracking-tight"
          >
            Shop<span className="text-blue-600">Hub</span>
          </Link>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search for products..."
                className="w-full h-11 rounded-full border border-gray-300 pl-12 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <button className="hidden md:block hover:text-blue-600 transition">
              <Heart size={23} />
            </button>

            <button className="relative hover:text-blue-600 transition">
              <ShoppingCart size={23} />

              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>

            <button className="hidden md:block hover:text-blue-600 transition">
              <User size={23} />
            </button>

            <button className="lg:hidden">
              <Menu size={25} />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-10 h-12 border-t">
          <Link to="/" className="hover:text-blue-600 font-medium">
            Home
          </Link>

          <Link to="/shop" className="hover:text-blue-600 font-medium">
            Shop
          </Link>

          <Link to="/categories" className="hover:text-blue-600 font-medium">
            Categories
          </Link>

          <Link to="/new-arrivals" className="hover:text-blue-600 font-medium">
            New Arrivals
          </Link>

          <Link
            to="/deals"
            className="hover:text-blue-600 font-medium text-red-500"
          >
            Hot Deals
          </Link>

          <Link to="/contact" className="hover:text-blue-600 font-medium">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}