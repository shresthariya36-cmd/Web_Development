import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white">
              Shop<span className="text-blue-500">Hub</span>
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed max-w-md">
              Discover quality products at the best prices. Fast delivery,
              secure payments, and excellent customer support.
            </p>

            {/* Newsletter */}
            <div className="mt-6">
              <h3 className="text-white font-semibold mb-3">
                Subscribe to our newsletter
              </h3>

              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-l-lg px-4 py-3 bg-gray-900 border border-gray-700 focus:outline-none"
                />

                <button className="bg-blue-600 px-5 rounded-r-lg hover:bg-blue-700 transition">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>

            <ul className="space-y-3">
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Electronics</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>

            <ul className="space-y-3">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>

            <ul className="space-y-3">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <p className="text-sm text-gray-500">
            © 2026 ShopHub. All rights reserved.
          </p>

          <div className="flex gap-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/196/196578.png"
              alt="Visa"
              className="h-8"
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/349/349228.png"
              alt="MasterCard"
              className="h-8"
            />

            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174861.png"
              alt="PayPal"
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}