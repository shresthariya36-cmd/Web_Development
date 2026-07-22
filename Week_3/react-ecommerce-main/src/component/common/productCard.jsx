import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ data }) {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Image */}
            <div className="relative overflow-hidden bg-gray-100">
                {/* Discount Badge */}
                <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    -{Math.round(data.discountPercentage)}%
                </span>

                {/* Wishlist */}
                <button className="absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow hover:bg-red-50 transition">
                    ❤️
                </button>

                <img
                    src={data.thumbnail}
                    alt={data.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Category */}
                <p className="text-sm text-gray-500 uppercase tracking-wide">
                    {data.category}
                </p>

                {/* Title */}
                <h3 className="mt-2 text-lg font-semibold text-gray-900 line-clamp-2 h-14">
                    {data.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center mt-3">
                    <div className="text-yellow-400 text-lg">★★★★★</div>

                    <span className="ml-2 text-sm text-gray-500">({data.rating})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mt-4">
                    <span className="text-2xl font-bold text-gray-900">
                        ${data.price}
                    </span>

                    <span className="text-gray-400 line-through">
                        $
                        {(
                            data.price +
                            data.price * (data.discountPercentage / 100)
                        ).toFixed(0)}
                    </span>
                </div>

                {/* Button */}
                <Link to={`/product-details/${data.id}`}>
                    <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}