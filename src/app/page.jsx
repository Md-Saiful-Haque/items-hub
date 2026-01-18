"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then(res => res.json())
      .then(data => setItems(data.slice(0, 3)));
  }, []);

  return (
    <main className="bg-gray-50">

      {/* 1️⃣ HERO – PRODUCT FOCUSED */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Shop Quality Products You’ll Love
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Explore electronics, gadgets, and essentials at the best prices.
          </p>
          <Link
            href="/items"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* 2️⃣ PRODUCT CATEGORIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Product Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Electronics",
              "Smart Gadgets",
              "Accessories",
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-gray-50 p-10 rounded-xl shadow text-center hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {cat}
                </h3>
                <p className="text-gray-600">
                  Explore top quality {cat.toLowerCase()} at affordable prices.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3️⃣ WHY BUY FROM US */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Buy From Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Best price guarantee",
              "Quality checked products",
              "Secure & trusted platform",
            ].map((reason, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {reason}
                </h3>
                <p className="text-gray-600">
                  We ensure customer satisfaction with every purchase.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ FEATURED PRODUCTS (UNCHANGED – BACKEND) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {items.map(item => (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {item.description}
                  </p>
                  <p className="font-bold text-indigo-600 mb-4">
                    {item.price}
                  </p>
                  <Link
                    href={`/items/${item.id}`}
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ CUSTOMER TRUST */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Trusted by Customers
          </h2>
          <p className="text-lg text-gray-600">
            Thousands of happy customers trust our platform for quality
            products and fast service.
          </p>
        </div>
      </section>

      {/* 6️⃣ HOW SHOPPING WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            How Shopping Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Browse products",
              "View product details",
              "Login & add new items",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl text-center shadow"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-3">
                  {i + 1}
                </div>
                <p className="text-lg">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ FINAL CTA */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Shopping Today
          </h2>
          <Link
            href="/items"
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-lg font-semibold text-lg"
          >
            View All Products
          </Link>
        </div>
      </section>

    </main>
  );
}
