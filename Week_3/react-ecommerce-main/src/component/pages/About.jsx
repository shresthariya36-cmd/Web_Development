import React, { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("Ram");
  const [modalLoading, setModalLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          React State Demo
        </h1>

        {/* Counter */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Counter</h2>
          <p className="text-5xl font-bold text-indigo-600 my-4">{count}</p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                setCount((prev) => prev + 1);
                setModalLoading(true);
              }}
              className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              + Increment
            </button>

            <button
              onClick={() => {
                setCount((prev) => prev - 1);
                setModalLoading(false);
              }}
              className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              - Decrement
            </button>
          </div>
        </div>

        {/* Input */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            First Name
          </label>

          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Status */}
        <div className="rounded-lg bg-gray-50 border p-4 space-y-2">
          <p
            className={`font-semibold ${modalLoading ? "text-green-600" : "text-red-600"
              }`}
          >
            {modalLoading
              ? "✅ Increment button clicked"
              : "❌ Decrement button clicked"}
          </p>

          <h3 className="text-lg">
            First Name:{" "}
            <span className="font-bold text-blue-600">{firstName}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}