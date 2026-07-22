import React, { useEffect, useState } from "react";
import Loader from "../common/Loader";
import { GetproductDetails } from "../../api/product";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    const getProductDetails = async () => {
        try {
            const data = await GetproductDetails(id);
            setProduct(data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductDetails();
    }, [id]);

    if (loading) return <Loader />;

    return (
        <div className="bg-gray-50 min-h-screen py-10 m-25">
            <div className="max-w-6xl mx-auto px-5">
                {/* Breadcrumb */}
                <p className="text-sm text-gray-500 mb-6">
                    Home / {product.category} / {product.title}
                </p>

                <div className="grid lg:grid-cols-2 gap-14">
                    {/* Left */}

                    <div>
                        <div className="bg-white rounded-3xl shadow p-10">
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-[450px] object-contain"
                            />
                        </div>

                        {/* Gallery */}

                        <div className="flex gap-4 mt-5">
                            {product.images?.slice(0, 4).map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt=""
                                    className="w-20 h-20 object-cover rounded-xl border cursor-pointer hover:border-blue-600"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right */}

                    <div>
                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {product.category}
                        </span>

                        <h1 className="text-4xl font-bold mt-4">{product.title}</h1>

                        <div className="flex items-center mt-4">
                            <span className="text-yellow-500 text-xl">★★★★★</span>

                            <span className="ml-3 text-gray-500">
                                {product.rating} Rating
                            </span>
                        </div>

                        <div className="flex items-center gap-4 mt-8">
                            <span className="text-4xl font-bold text-blue-600">
                                ${product.price}
                            </span>

                            <span className="line-through text-gray-400">
                                $
                                {(
                                    product.price +
                                    product.price * (product.discountPercentage / 100)
                                ).toFixed(0)}
                            </span>

                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                                {Math.round(product.discountPercentage)}% OFF
                            </span>
                        </div>

                        <div className="mt-8 space-y-3 text-gray-600">
                            <p>✅ In Stock</p>

                            <p>🚚 Free Shipping</p>

                            <p>🔄 7-Day Easy Returns</p>

                            <p>🔒 Secure Payment</p>
                        </div>

                        <p className="mt-8 leading-8 text-gray-700">
                            {product.description}
                        </p>

                        {/* Quantity */}

                        <div className="flex items-center gap-4 mt-10">
                            <button className="w-10 h-10 border rounded-lg">-</button>

                            <span className="text-xl font-semibold">1</span>

                            <button className="w-10 h-10 border rounded-lg">+</button>
                        </div>

                        {/* Buttons */}

                        <div className="flex gap-4 mt-8">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold">
                                Add to Cart
                            </button>

                            <button className="flex-1 bg-black hover:bg-gray-900 text-white py-4 rounded-xl font-semibold">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}