import React, { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import { GetproductList } from "../../api/product";
import Loader from "../common/Loader";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const productList = async () => {
    try {
      const data = await GetproductList();

      if (data) {
        setProducts(data.products);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    productList();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="mt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-10">
              <p className="uppercase tracking-widest text-sm">
                New Collection
              </p>

              <h1 className="text-5xl font-bold mt-4 leading-tight">
                Discover Your
                <br />
                Perfect Style
              </h1>

              <p className="mt-5 text-blue-100 max-w-md">
                Shop thousands of premium products with amazing discounts and
                fast delivery.
              </p>

              <button className="mt-8 bg-white text-blue-600 px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>

            <div className="hidden md:flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
                alt="Hero"
                className="h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}

      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Featured Products</h2>

            <p className="text-gray-500 mt-1">Explore our latest arrivals</p>
          </div>

          <button className="text-blue-600 font-semibold hover:underline">
            View All →
          </button>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </section>
    </div>
  );
}